#!/bin/bash

PORT=${1:-8080}

echo "🌐 Starting local server on port $PORT..."
echo "📱 Open your browser to: http://localhost:$PORT"
echo "📁 Serving files from: $(pwd)"
echo
echo "💡 Press Ctrl+C to stop the server"
echo

# Try different methods to serve files
if command -v python3 &> /dev/null; then
    echo "🐍 Using Python 3 server..."
    python3 -m http.server $PORT
elif command -v python &> /dev/null; then
    echo "🐍 Using Python 2 server..."
    python -m SimpleHTTPServer $PORT
elif command -v php &> /dev/null; then
    echo "🐘 Using PHP server..."
    php -S localhost:$PORT
elif command -v ruby &> /dev/null; then
    echo "💎 Using Ruby server..."
    ruby -run -e httpd . -p $PORT
else
    echo "❌ No suitable server found. Please install Python, PHP, or Ruby."
    echo "Or use: open blog-preview.html"
    exit 1
fi
