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
