#!/bin/bash

echo "🚀 Setting Up Easy Local Testing..."
echo

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: Not in project root directory${NC}"
    echo "Please run this script from the jerry-dempsey-website directory"
    exit 1
fi

echo -e "${BLUE}📋 Setting up local testing tools...${NC}"

# Create a simple local server script
cat > scripts/serve-local.sh << 'EOF'
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
EOF

chmod +x scripts/serve-local.sh

# Create a file watcher for auto-refresh
cat > scripts/watch-files.sh << 'EOF'
#!/bin/bash

echo "👀 Watching for file changes..."
echo "💡 This will help you see changes to HTML/CSS files"
echo

# Simple file watcher using inotifywait (Linux) or fswatch (macOS)
if command -v fswatch &> /dev/null; then
    echo "🍎 Using fswatch (macOS)..."
    fswatch -o . | while read f; do
        echo "📝 Files changed at $(date)"
        echo "🔄 Refresh your browser to see changes"
        echo
    done
elif command -v inotifywait &> /dev/null; then
    echo "🐧 Using inotifywait (Linux)..."
    inotifywait -m -r -e modify . | while read path action file; do
        echo "📝 File changed: $file"
        echo "🔄 Refresh your browser to see changes"
    done
else
    echo "⚠️  No file watcher available. Install fswatch (macOS) or inotify-tools (Linux)"
    echo "   macOS: brew install fswatch"
    echo "   Linux: sudo apt-get install inotify-tools"
fi
EOF

chmod +x scripts/watch-files.sh

# Create a quick test runner
cat > scripts/quick-test.sh << 'EOF'
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
EOF

chmod +x scripts/quick-test.sh

# Create a development helper
cat > scripts/dev-helper.sh << 'EOF'
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
EOF

chmod +x scripts/dev-helper.sh

# Create a simple package.json script for easy access
echo "📦 Adding convenience scripts to package.json..."

# Check if scripts section exists and add our convenience scripts
if grep -q '"scripts"' package.json; then
    # Add our scripts to existing package.json
    sed -i.bak 's/"dev:workflow": "node scripts\/dev-workflow.js"/"dev:workflow": "node scripts\/dev-workflow.js",\
    "serve:local": ".\/scripts\/serve-local.sh",\
    "watch:files": ".\/scripts\/watch-files.sh",\
    "test:blog": ".\/scripts\/test-blog.sh",\
    "preview:blog": ".\/scripts\/dev-helper.sh preview",\
    "dev:full": ".\/scripts\/dev-helper.sh full"/' package.json
else
    echo "⚠️  Could not add scripts to package.json automatically"
    echo "💡 You can run the scripts directly from the scripts/ directory"
fi

echo
echo -e "${GREEN}✅ Local testing setup complete!${NC}"
echo
echo -e "${BLUE}📋 Available testing methods:${NC}"
echo
echo -e "${YELLOW}🚀 Quick Start (Recommended):${NC}"
echo "  ./scripts/quick-test.sh"
echo
echo -e "${YELLOW}🛠️  Development Helper:${NC}"
echo "  ./scripts/dev-helper.sh help"
echo "  ./scripts/dev-helper.sh preview    # Open blog preview"
echo "  ./scripts/dev-helper.sh serve      # Start local server"
echo "  ./scripts/dev-helper.sh full       # Full development mode"
echo
echo -e "${YELLOW}🧪 Individual Tools:${NC}"
echo "  ./scripts/test-blog.sh             # Test blog structure"
echo "  ./scripts/serve-local.sh 8080      # Start server on port 8080"
echo "  ./scripts/watch-files.sh           # Watch for file changes"
echo
echo -e "${YELLOW}📦 NPM Scripts (if Node.js available):${NC}"
echo "  npm run serve:local                # Start local server"
echo "  npm run preview:blog               # Open blog preview"
echo "  npm run dev:full                   # Full development mode"
echo
echo -e "${GREEN}🎉 You're ready to test locally!${NC}"
echo "💡 Start with: ./scripts/quick-test.sh"
