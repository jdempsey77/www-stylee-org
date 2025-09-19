#!/bin/bash

echo "⚡ Quick Local Testing"
echo "====================="
echo

# Check what's available
echo "🔍 Checking available tools..."

if command -v node &> /dev/null; then
    echo "✅ Node.js available - Full development server possible"
    NODE_AVAILABLE=true
else
    echo "❌ Node.js not available - Using static preview"
    NODE_AVAILABLE=false
fi

if command -v python3 &> /dev/null || command -v python &> /dev/null || command -v php &> /dev/null; then
    echo "✅ Simple server available - Can serve static files"
    SERVER_AVAILABLE=true
else
    echo "❌ No server available - Opening static file"
    SERVER_AVAILABLE=false
fi

echo

# Choose the best testing method
if [ "$NODE_AVAILABLE" = true ]; then
    echo "🚀 Starting full development server..."
    echo "📱 Blog will be available at: http://localhost:3000/blog"
    echo
    npm run dev
elif [ "$SERVER_AVAILABLE" = true ]; then
    echo "🌐 Starting simple server for static preview..."
    echo "📱 Blog preview will be available at: http://localhost:8080/blog-preview.html"
    echo
    ./scripts/serve-local.sh 8080
else
    echo "📁 Opening static preview in browser..."
    if command -v open &> /dev/null; then
        open blog-preview.html
    elif command -v xdg-open &> /dev/null; then
        xdg-open blog-preview.html
    else
        echo "Please open blog-preview.html in your browser"
    fi
fi
