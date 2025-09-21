#!/bin/bash

# Robust Development Server Script
# This script handles common development issues and provides better error handling

echo "🚀 Starting Robust Development Environment"
echo "=========================================="

# Source nvm and use Node.js
echo "📦 Setting up Node.js environment..."
source ~/.nvm/nvm.sh && nvm use 22.19.0

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js first."
    exit 1
fi

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "❌ npm not found. Please install npm first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"

# Navigate to project directory
cd /Users/jdempsey/work/www-stylee-org

# Check if package.json exists
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found. Are you in the right directory?"
    exit 1
fi

echo "📁 Project directory: $(pwd)"

# Clean previous builds and caches
echo "🧹 Cleaning previous builds and caches..."
rm -rf .next
rm -rf out
rm -rf node_modules/.cache

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Run linting check first
echo "🔍 Running linting check..."
if npm run lint; then
    echo "✅ Linting passed"
else
    echo "⚠️  Linting issues found, but continuing..."
fi

# Run build test
echo "🏗️  Testing build process..."
if npm run build; then
    echo "✅ Build test passed"
else
    echo "❌ Build failed. Please fix errors before starting dev server."
    exit 1
fi

# Kill any existing processes on port 3000 and 3001
echo "🔄 Checking for existing processes..."
lsof -ti:3000 | xargs kill -9 2>/dev/null || true
lsof -ti:3001 | xargs kill -9 2>/dev/null || true

# Start development server with better error handling
echo "🌐 Starting development server..."
echo "📍 Server will be available at: http://localhost:3000"
echo "📍 If port 3000 is busy, it will use: http://localhost:3001"
echo ""
echo "💡 Tips:"
echo "   - Use Ctrl+C to stop the server"
echo "   - Check browser console for any JavaScript errors"
echo "   - If you see 'internal server error', refresh the page"
echo ""

# Start the dev server with error handling
npm run dev 2>&1 | while IFS= read -r line; do
    echo "$line"
    
    # Check for common error patterns
    if echo "$line" | grep -q "Error:"; then
        echo "⚠️  Error detected: $line"
        echo "💡 Try refreshing the browser page"
    fi
    
    if echo "$line" | grep -q "EADDRINUSE"; then
        echo "⚠️  Port in use. The server will automatically use the next available port."
    fi
    
    if echo "$line" | grep -q "Ready in"; then
        echo ""
        echo "🎉 Development server is ready!"
        echo "📍 Open: http://localhost:3000/jerry/resume"
        echo "📍 Or: http://localhost:3001/jerry/resume (if port 3000 was busy)"
        echo ""
    fi
done
