#!/bin/bash

echo "🔧 Setting up pre-push hook for production pipeline..."

# Create .git/hooks directory if it doesn't exist
mkdir -p .git/hooks

# Create the pre-push hook
cat > .git/hooks/pre-push << 'EOF'
#!/bin/bash

echo "🛡️  Production Pipeline - Pre-Push Security Check"
echo "================================================"

# Check if we're pushing to main branch
while read local_ref local_sha remote_ref remote_sha; do
    if [[ "$remote_ref" == "refs/heads/main" ]]; then
        echo "🚨 Pushing to main branch detected!"
        echo "🔄 Running production pipeline..."
        
        # Run the production pipeline
        if npm run pipeline:production; then
            echo "✅ Production pipeline passed - proceeding with push"
            exit 0
        else
            echo "❌ Production pipeline failed - blocking push"
            echo "🔧 Fix the issues above before pushing to production"
            exit 1
        fi
    fi
done

echo "✅ Non-main branch push - skipping production pipeline"
exit 0
EOF

# Make the hook executable
chmod +x .git/hooks/pre-push

echo "✅ Pre-push hook installed successfully!"
echo ""
echo "🛡️  Security Features:"
echo "   • Blocks pushes to main if production pipeline fails"
echo "   • Runs comprehensive testing before any production deployment"
echo "   • Ensures code quality and security standards"
echo ""
echo "💡 To bypass the hook (emergency only):"
echo "   git push origin main --no-verify"
echo ""
echo "⚠️  WARNING: Only use --no-verify in true emergencies!"
