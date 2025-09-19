#!/bin/bash

echo "🛠️  Development Helper"
echo "====================="
echo

case "${1:-help}" in
    "serve")
        echo "🌐 Starting local server..."
        PORT=${2:-8080}
        ./scripts/serve-local.sh $PORT
        ;;
    "watch")
        echo "👀 Starting file watcher..."
        ./scripts/watch-files.sh
        ;;
    "test")
        echo "🧪 Running tests..."
        ./scripts/test-blog.sh
        ;;
    "preview")
        echo "👁️  Opening blog preview..."
        if command -v open &> /dev/null; then
            open blog-preview.html
        elif command -v xdg-open &> /dev/null; then
            xdg-open blog-preview.html
        else
            echo "Please open blog-preview.html in your browser"
        fi
        ;;
    "full")
        echo "🚀 Full development setup..."
        if command -v node &> /dev/null; then
            echo "Starting development server with file watching..."
            # Start file watcher in background
            ./scripts/watch-files.sh &
            WATCHER_PID=$!
            
            # Start development server
            npm run dev
            
            # Clean up watcher when dev server stops
            kill $WATCHER_PID 2>/dev/null
        else
            echo "Node.js not available. Starting static server..."
            ./scripts/serve-local.sh 8080
        fi
        ;;
    "help"|*)
        echo "Available commands:"
        echo "  serve [port]  - Start local server (default port 8080)"
        echo "  watch         - Watch for file changes"
        echo "  test          - Run blog tests"
        echo "  preview       - Open static blog preview"
        echo "  full          - Start full development environment"
        echo
        echo "Examples:"
        echo "  ./scripts/dev-helper.sh serve 3000"
        echo "  ./scripts/dev-helper.sh full"
        echo "  ./scripts/dev-helper.sh preview"
        ;;
esac
