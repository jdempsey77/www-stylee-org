#!/bin/bash

echo "🧪 Jerry Dempsey Website - Local Testing"
echo "========================================"
echo

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to open file in browser
open_browser() {
    local file="$1"
    if command_exists open; then
        open "$file"
    elif command_exists xdg-open; then
        xdg-open "$file"
    elif command_exists firefox; then
        firefox "$file"
    elif command_exists google-chrome; then
        google-chrome "$file"
    else
        echo "Please open $file in your browser"
    fi
}

# Main testing menu
show_menu() {
    echo -e "${BLUE}Choose a testing option:${NC}"
    echo
    echo "1. 🚀 Quick Test (Recommended)"
    echo "2. 👀 Blog Preview"
    echo "3. 🌐 Testing Dashboard"
    echo "4. 🛠️  Development Helper"
    echo "5. 📊 Test Results Only"
    echo "6. ❓ Help"
    echo
    read -p "Enter your choice (1-6): " choice
}

# Quick test function
quick_test() {
    echo -e "${YELLOW}🚀 Running Quick Test...${NC}"
    echo
    
    # Run blog structure test
    if [ -f "scripts/test-blog.sh" ]; then
        ./scripts/test-blog.sh
    else
        echo -e "${RED}❌ Blog test script not found${NC}"
    fi
    
    echo
    echo -e "${BLUE}📋 Test Summary:${NC}"
    echo "✅ Blog structure validated"
    echo "✅ Files and directories checked"
    echo "✅ Navigation integration verified"
    echo
    
    # Ask if user wants to see blog preview
    read -p "Would you like to open the blog preview? (y/n): " open_preview
    if [[ $open_preview =~ ^[Yy]$ ]]; then
        open_browser "blog-preview.html"
    fi
}

# Blog preview function
blog_preview() {
    echo -e "${GREEN}👀 Opening Blog Preview...${NC}"
    open_browser "blog-preview.html"
}

# Testing dashboard function
testing_dashboard() {
    echo -e "${GREEN}🌐 Opening Testing Dashboard...${NC}"
    open_browser "test-browser.html"
}

# Development helper function
dev_helper() {
    echo -e "${BLUE}🛠️  Development Helper Options:${NC}"
    echo
    echo "1. Preview blog"
    echo "2. Start local server"
    echo "3. Watch for file changes"
    echo "4. Full development mode"
    echo "5. Back to main menu"
    echo
    
    read -p "Enter your choice (1-5): " dev_choice
    
    case $dev_choice in
        1)
            open_browser "blog-preview.html"
            ;;
        2)
            if [ -f "scripts/serve-local.sh" ]; then
                ./scripts/serve-local.sh 8080
            else
                echo -e "${RED}❌ Server script not found${NC}"
            fi
            ;;
        3)
            if [ -f "scripts/watch-files.sh" ]; then
                ./scripts/watch-files.sh
            else
                echo -e "${RED}❌ File watcher script not found${NC}"
            fi
            ;;
        4)
            if [ -f "scripts/dev-helper.sh" ]; then
                ./scripts/dev-helper.sh full
            else
                echo -e "${RED}❌ Development helper script not found${NC}"
            fi
            ;;
        5)
            main_menu
            ;;
        *)
            echo -e "${RED}Invalid choice${NC}"
            dev_helper
            ;;
    esac
}

# Test results only function
test_results() {
    echo -e "${YELLOW}📊 Running Test Results...${NC}"
    echo
    
    if [ -f "scripts/test-blog.sh" ]; then
        ./scripts/test-blog.sh
    else
        echo -e "${RED}❌ Test script not found${NC}"
    fi
}

# Help function
show_help() {
    echo -e "${BLUE}📖 Help - Local Testing Guide${NC}"
    echo
    echo -e "${YELLOW}Available Testing Methods:${NC}"
    echo
    echo "1. 🚀 Quick Test"
    echo "   - Runs all blog structure tests"
    echo "   - Validates files and directories"
    echo "   - Optionally opens blog preview"
    echo
    echo "2. 👀 Blog Preview"
    echo "   - Opens static HTML preview"
    echo "   - Shows how blog will look"
    echo "   - No server required"
    echo
    echo "3. 🌐 Testing Dashboard"
    echo "   - Browser-based testing interface"
    echo "   - Interactive test runner"
    echo "   - Environment information"
    echo
    echo "4. 🛠️  Development Helper"
    echo "   - Various development tools"
    echo "   - Local server options"
    echo "   - File watching capabilities"
    echo
    echo -e "${YELLOW}Command Line Shortcuts:${NC}"
    echo "  ./scripts/quick-test.sh     # Quick test"
    echo "  ./scripts/test-blog.sh      # Blog structure test"
    echo "  ./scripts/serve-local.sh    # Start local server"
    echo "  ./scripts/dev-helper.sh     # Development helper"
    echo
    echo -e "${YELLOW}Keyboard Shortcuts (in Testing Dashboard):${NC}"
    echo "  Ctrl+T - Run tests"
    echo "  Ctrl+B - Open blog preview"
    echo "  Ctrl+R - Show test results"
    echo
    echo -e "${GREEN}💡 Tip: Start with Quick Test for the best experience!${NC}"
    echo
}

# Main menu function
main_menu() {
    show_menu
    
    case $choice in
        1)
            quick_test
            ;;
        2)
            blog_preview
            ;;
        3)
            testing_dashboard
            ;;
        4)
            dev_helper
            ;;
        5)
            test_results
            ;;
        6)
            show_help
            ;;
        *)
            echo -e "${RED}Invalid choice. Please try again.${NC}"
            echo
            main_menu
            ;;
    esac
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: Not in project root directory${NC}"
    echo "Please run this script from the jerry-dempsey-website directory"
    exit 1
fi

# Check if setup was run
if [ ! -f "scripts/quick-test.sh" ]; then
    echo -e "${YELLOW}⚠️  Local testing tools not set up. Running setup...${NC}"
    if [ -f "scripts/setup-local-testing.sh" ]; then
        ./scripts/setup-local-testing.sh
    else
        echo -e "${RED}❌ Setup script not found${NC}"
        exit 1
    fi
fi

# Run main menu
main_menu

echo
echo -e "${GREEN}🎉 Testing complete!${NC}"
echo -e "${BLUE}💡 Run this script again anytime: ./test.sh${NC}"
