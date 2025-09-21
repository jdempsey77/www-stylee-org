#!/bin/bash

# Simple Deployment Script
# This script builds and prepares for manual deployment

echo "🚀 Simple Deployment Script"
echo "=========================="

# Source nvm and use Node.js
source ~/.nvm/nvm.sh && nvm use 22.19.0

# Navigate to project directory
cd /Users/jdempsey/work/www-stylee-org

echo "📦 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "📁 Static files are ready in the 'out' directory"
    echo "🌐 You can now deploy the 'out' directory to any static hosting service"
    echo ""
    echo "💡 Next steps:"
    echo "   1. The build is ready for deployment"
    echo "   2. Push to GitHub to trigger automatic deployment"
    echo "   3. Or manually upload the 'out' directory to your hosting service"
    echo ""
    echo "📊 Build summary:"
    ls -la out/
else
    echo "❌ Build failed. Please fix errors before deploying."
    exit 1
fi
