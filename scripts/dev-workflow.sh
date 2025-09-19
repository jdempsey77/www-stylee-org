#!/bin/bash

# Hybrid Development Workflow Script
# Usage: ./scripts/dev-workflow.sh [command]

set -e

COMMAND=${1:-help}

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Helper function to run commands with colored output
run_command() {
    local cmd="$1"
    local description="$2"
    
    echo -e "${BLUE}📋 ${description}...${NC}"
    if eval "$cmd"; then
        echo -e "${GREEN}✅ ${description} completed${NC}\n"
        return 0
    else
        echo -e "${RED}❌ ${description} failed${NC}\n"
        return 1
    fi
}

# Check git status
check_git_status() {
    if [ -d ".git" ]; then
        if [ -n "$(git status --porcelain)" ]; then
            echo -e "${YELLOW}📝 You have uncommitted changes:${NC}"
            git status --short
            echo -e "${BLUE}💡 Consider committing or stashing before running tests${NC}\n"
        fi
    else
        echo -e "${YELLOW}⚠️  Not in a git repository${NC}\n"
    fi
}

case $COMMAND in
    "quick")
        echo -e "${GREEN}⚡ Quick Test (lint + build)${NC}"
        check_git_status
        run_command "npm run test:quick" "Quick validation"
        ;;
        
    "full")
        echo -e "${GREEN}🔍 Full Test (lint + audit + build + validation)${NC}"
        check_git_status
        run_command "npm run test:local" "Full local testing"
        ;;
        
    "preview")
        echo -e "${GREEN}👀 Preview Staging Build${NC}"
        check_git_status
        if run_command "npm run staging:full" "Full staging test and preview"; then
            echo -e "${GREEN}🌐 Staging preview available at: http://localhost:3001${NC}"
            echo -e "${BLUE}💡 Press Ctrl+C to stop the preview server${NC}"
        fi
        ;;
        
    "dev")
        echo -e "${GREEN}🛠️  Development with Testing${NC}"
        check_git_status
        run_command "npm run dev:test" "Development server with linting"
        ;;
        
    "commit")
        echo -e "${GREEN}📦 Pre-commit Testing${NC}"
        if run_command "npm run test:local" "Pre-commit validation"; then
            echo -e "${GREEN}✅ Ready to commit!${NC}"
            echo -e "${BLUE}💡 Run: git add . && git commit -m \"your message\"${NC}"
        else
            echo -e "${RED}❌ Fix issues before committing${NC}"
            exit 1
        fi
        ;;
        
    "deploy")
        echo -e "${GREEN}🚀 Deploy Workflow${NC}"
        check_git_status
        if run_command "npm run test:local" "Pre-deploy testing"; then
            echo -e "${GREEN}✅ Local tests passed!${NC}"
            echo -e "${BLUE}💡 Push to develop branch for staging deployment${NC}"
            echo -e "${BLUE}💡 Push to main branch for production deployment${NC}"
        else
            echo -e "${RED}❌ Fix issues before deploying${NC}"
            exit 1
        fi
        ;;
        
    "status")
        echo -e "${GREEN}📊 Development Status${NC}"
        echo "===================="
        
        # Check git status
        if [ -d ".git" ]; then
            BRANCH=$(git branch --show-current 2>/dev/null || echo "unknown")
            echo "📍 Current branch: $BRANCH"
            
            if [ -n "$(git status --porcelain)" ]; then
                echo "📝 Uncommitted changes: Yes"
            else
                echo "📝 Uncommitted changes: No"
            fi
        else
            echo "📍 Current branch: Not in git repository"
        fi
        
        # Check if staging build exists
        if [ -d "out" ]; then
            echo "🏗️  Staging build: Available"
        else
            echo "🏗️  Staging build: Not available"
        fi
        
        # Check dependencies
        if npm list --depth=0 >/dev/null 2>&1; then
            echo "📦 Dependencies: Up to date"
        else
            echo "📦 Dependencies: Need update (run npm install)"
        fi
        
        echo -e "\n${BLUE}💡 Available commands:${NC}"
        echo "  ./scripts/dev-workflow.sh quick   - Quick test (lint + build)"
        echo "  ./scripts/dev-workflow.sh full    - Full test (all checks)"
        echo "  ./scripts/dev-workflow.sh preview - Preview staging build"
        echo "  ./scripts/dev-workflow.sh dev     - Dev server with testing"
        echo "  ./scripts/dev-workflow.sh commit  - Pre-commit validation"
        echo "  ./scripts/dev-workflow.sh deploy  - Pre-deploy validation"
        ;;
        
    "help"|*)
        echo -e "${GREEN}🔧 Hybrid Development Workflow${NC}"
        echo "=============================="
        echo "This script helps you test locally before pushing to GitHub."
        echo -e "\n${BLUE}📋 Available commands:${NC}"
        echo "  quick   - Quick test (lint + build) - 30 seconds"
        echo "  full    - Full test (lint + audit + build) - 1 minute"
        echo "  preview - Build staging and preview locally - 2 minutes"
        echo "  dev     - Start dev server with linting"
        echo "  commit  - Pre-commit validation"
        echo "  deploy  - Pre-deploy validation"
        echo "  status  - Check development status"
        echo -e "\n${BLUE}💡 Usage: ./scripts/dev-workflow.sh [command]${NC}"
        echo -e "\n${GREEN}🔄 Typical workflow:${NC}"
        echo "  1. ./scripts/dev-workflow.sh quick    (while developing)"
        echo "  2. ./scripts/dev-workflow.sh full     (before committing)"
        echo "  3. ./scripts/dev-workflow.sh preview  (before pushing)"
        echo "  4. git push origin develop            (triggers staging)"
        echo "  5. Create PR to main                  (triggers validation)"
        ;;
esac
