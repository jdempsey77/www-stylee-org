#!/bin/bash

# Jerry Dempsey Website - Enhanced Development & Deployment Script
# ==============================================================
# Comprehensive tool for managing development, testing, deployment, and branching

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
WHITE='\033[1;37m'
NC='\033[0m' # No Color

# Script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Load Node.js environment
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Helper functions
log_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

log_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

log_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

log_error() {
    echo -e "${RED}❌ $1${NC}"
}

log_header() {
    echo -e "${PURPLE}🚀 $1${NC}"
    echo -e "${PURPLE}$(printf '=%.0s' {1..50})${NC}"
}

log_step() {
    echo -e "${CYAN}🔄 $1${NC}"
}

# Check if Node.js is available
check_node() {
    if ! command -v node &> /dev/null; then
        log_error "Node.js is not available. Please install Node.js or check your NVM setup."
        exit 1
    fi
    log_success "Node.js $(node --version) is available"
}

# Check if npm is available
check_npm() {
    if ! command -v npm &> /dev/null; then
        log_error "npm is not available. Please install npm."
        exit 1
    fi
    log_success "npm $(npm --version) is available"
}

# Branch Management Functions
create_feature_branch() {
    log_header "Create Feature Branch"
    log_step "Ensuring you're on main branch..."
    
    current_branch=$(git branch --show-current)
    if [ "$current_branch" != "main" ]; then
        log_warning "You're currently on branch: $current_branch"
        read -p "Switch to main branch? (y/n): " switch_to_main
        if [ "$switch_to_main" = "y" ] || [ "$switch_to_main" = "Y" ]; then
            git checkout main
            git pull origin main
        else
            log_error "Cannot create feature branch from non-main branch"
            return 1
        fi
    else
        git pull origin main
    fi
    
    read -p "Enter feature name (e.g., 'contact-form'): " feature_name
    if [ -z "$feature_name" ]; then
        log_error "Feature name cannot be empty"
        return 1
    fi
    
    branch_name="feature/$feature_name"
    log_step "Creating branch: $branch_name"
    
    if git checkout -b "$branch_name"; then
        log_success "Created and switched to branch: $branch_name"
        log_info "You can now start developing your feature"
        log_info "Run './jerry-dev.sh dev' to start the development server"
    else
        log_error "Failed to create branch. It might already exist."
    fi
}

create_fix_branch() {
    log_header "Create Fix Branch"
    log_step "Ensuring you're on main branch..."
    
    current_branch=$(git branch --show-current)
    if [ "$current_branch" != "main" ]; then
        log_warning "You're currently on branch: $current_branch"
        read -p "Switch to main branch? (y/n): " switch_to_main
        if [ "$switch_to_main" = "y" ] || [ "$switch_to_main" = "Y" ]; then
            git checkout main
            git pull origin main
        else
            log_error "Cannot create fix branch from non-main branch"
            return 1
        fi
    else
        git pull origin main
    fi
    
    read -p "Enter fix description (e.g., 'mobile-navigation-bug'): " fix_desc
    if [ -z "$fix_desc" ]; then
        log_error "Fix description cannot be empty"
        return 1
    fi
    
    branch_name="fix/$fix_desc"
    log_step "Creating branch: $branch_name"
    
    if git checkout -b "$branch_name"; then
        log_success "Created and switched to branch: $branch_name"
        log_info "You can now start fixing the issue"
        log_info "Run './jerry-dev.sh dev' to start the development server"
    else
        log_error "Failed to create branch. It might already exist."
    fi
}

create_style_branch() {
    log_header "Create Style Branch"
    log_step "Ensuring you're on main branch..."
    
    current_branch=$(git branch --show-current)
    if [ "$current_branch" != "main" ]; then
        log_warning "You're currently on branch: $current_branch"
        read -p "Switch to main branch? (y/n): " switch_to_main
        if [ "$switch_to_main" = "y" ] || [ "$switch_to_main" = "Y" ]; then
            git checkout main
            git pull origin main
        else
            log_error "Cannot create style branch from non-main branch"
            return 1
        fi
    else
        git pull origin main
    fi
    
    read -p "Enter style change description (e.g., 'modern-buttons'): " style_desc
    if [ -z "$style_desc" ]; then
        log_error "Style description cannot be empty"
        return 1
    fi
    
    branch_name="style/$style_desc"
    log_step "Creating branch: $branch_name"
    
    if git checkout -b "$branch_name"; then
        log_success "Created and switched to branch: $branch_name"
        log_info "You can now start styling changes"
        log_info "Run './jerry-dev.sh dev' to start the development server"
    else
        log_error "Failed to create branch. It might already exist."
    fi
}

show_branch_status() {
    log_header "Branch Status"
    
    current_branch=$(git branch --show-current)
    echo -e "${WHITE}Current Branch:${NC} $current_branch"
    
    echo -e "\n${WHITE}Local Branches:${NC}"
    git branch -v | sed 's/^/  /'
    
    echo -e "\n${WHITE}Remote Branches:${NC}"
    git branch -r | sed 's/^/  /'
    
    echo -e "\n${WHITE}Recent Commits:${NC}"
    git log --oneline -5 | sed 's/^/  /'
    
    echo -e "\n${WHITE}Uncommitted Changes:${NC}"
    if git diff --quiet; then
        echo "  ✅ No uncommitted changes"
    else
        git status --short | sed 's/^/  /'
    fi
}

# Resume Pipeline Functions
update_resume_simple() {
    log_header "Updating Resume - Simple Pipeline"
    log_step "Running simple resume pipeline..."
    npm run resume:simple
    log_success "Simple resume pipeline completed"
}

update_resume_google() {
    log_header "Updating Resume - Google Drive Pipeline"
    log_step "Running Google Drive resume pipeline..."
    npm run resume:google
    log_success "Google Drive resume pipeline completed"
}

update_resume_hybrid() {
    log_header "Updating Resume - Hybrid Pipeline"
    log_step "Running hybrid resume pipeline..."
    npm run resume:hybrid
    log_success "Hybrid resume pipeline completed"
}

update_resume() {
    echo -e "${WHITE}📄 Resume Update Options:${NC}"
    echo "1) Simple Pipeline (clean data)"
    echo "2) Google Drive Pipeline (from Google Doc)"
    echo "3) Hybrid Pipeline (website from clean data, PDF from Google Doc)"
    echo "4) Back to main menu"
    echo ""
    read -p "Choose option [1-4]: " choice
    
    case $choice in
        1) update_resume_simple ;;
        2) update_resume_google ;;
        3) update_resume_hybrid ;;
        4) return ;;
        *) log_error "Invalid option. Please choose 1-4." ;;
    esac
}

# Testing Functions
run_production_pipeline() {
    log_header "Production Pipeline - Full Testing"
    log_step "Running comprehensive production pipeline..."
    npm run pipeline:production
    log_success "Production pipeline completed successfully"
}

run_quick_tests() {
    log_header "Quick Testing"
    log_step "Running quick tests..."
    npm run test:quick
    log_success "Quick tests completed"
}

run_security_scan() {
    log_header "Security Scan"
    log_step "Running security scanner..."
    node scripts/security-scanner.js
    log_success "Security scan completed"
}

run_linting() {
    log_header "Code Quality Check"
    log_step "Running ESLint..."
    npm run lint:fix
    log_success "Linting completed"
}

# Server Functions
start_dev_server() {
    log_header "Development Server"
    log_step "Starting Next.js development server..."
    log_info "Server will be available at: http://localhost:3000"
    log_info "Press Ctrl+C to stop the server"
    echo ""
    npm run dev
}

start_staging_server() {
    log_header "Staging Server"
    log_step "Building staging version..."
    npm run build:staging
    log_step "Starting staging server..."
    log_info "Server will be available at: http://localhost:3001"
    log_info "Press Ctrl+C to stop the server"
    echo ""
    npm run serve:staging
}

start_production_server() {
    log_header "Production Server"
    log_step "Building production version..."
    npm run build:prod
    log_step "Starting production server..."
    log_info "Server will be available at: http://localhost:3001"
    log_info "Press Ctrl+C to stop the server"
    echo ""
    npm run serve:staging  # Uses the same serve command
}

# Deployment Functions
push_to_production() {
    log_header "Push to Production"
    
    current_branch=$(git branch --show-current)
    if [ "$current_branch" != "main" ]; then
        log_error "You can only deploy from the main branch!"
        log_info "Current branch: $current_branch"
        log_info "Please switch to main branch first: git checkout main"
        return 1
    fi
    
    log_step "Running production pipeline before push..."
    
    if npm run pipeline:production; then
        log_step "Adding all changes..."
        git add .
        
        log_step "Please enter your commit message:"
        read -p "Commit message: " commit_msg
        
        if [ -z "$commit_msg" ]; then
            commit_msg="feat: update website"
        fi
        
        log_step "Committing changes..."
        git commit -m "$commit_msg"
        
        log_step "Pushing to production..."
        git push origin main
        
        log_success "Successfully pushed to production!"
        log_info "Vercel will automatically deploy your changes"
    else
        log_error "Production pipeline failed. Cannot push to production."
        log_info "Fix the issues above and try again."
        exit 1
    fi
}

deploy_with_message() {
    log_header "Deploy with Custom Message"
    
    current_branch=$(git branch --show-current)
    if [ "$current_branch" != "main" ]; then
        log_error "You can only deploy from the main branch!"
        log_info "Current branch: $current_branch"
        log_info "Please switch to main branch first: git checkout main"
        return 1
    fi
    
    log_step "Running production pipeline..."
    
    if npm run pipeline:production; then
        log_step "Adding all changes..."
        git add .
        
        log_step "Enter your deployment message:"
        read -p "Deployment message: " deploy_msg
        
        if [ -z "$deploy_msg" ]; then
            deploy_msg="feat: update website"
        fi
        
        log_step "Committing changes..."
        git commit -m "$deploy_msg"
        
        log_step "Pushing to production..."
        git push origin main
        
        log_success "Successfully deployed with message: '$deploy_msg'"
        log_info "Vercel will automatically deploy your changes"
    else
        log_error "Production pipeline failed. Cannot deploy."
        exit 1
    fi
}

# Utility Functions
show_status() {
    log_header "Project Status"
    
    current_branch=$(git branch --show-current)
    echo -e "${WHITE}Current Branch:${NC} $current_branch"
    
    echo -e "\n${WHITE}📊 Git Status:${NC}"
    git status --short
    
    echo -e "\n${WHITE}📦 Dependencies:${NC}"
    npm list --depth=0
    
    echo -e "\n${WHITE}🔧 Node.js Environment:${NC}"
    echo "Node.js: $(node --version)"
    echo "npm: $(npm --version)"
    
    echo -e "\n${WHITE}📁 Project Structure:${NC}"
    ls -la src/app/
    
    echo -e "\n${WHITE}🌐 Available Scripts:${NC}"
    npm run
    
    echo -e "\n${WHITE}📚 Documentation:${NC}"
    echo "  docs/ directory contains comprehensive guides"
    echo "  Run 'npm run docs' to list all documentation"
    
    echo -e "\n${WHITE}🛡️ Security Status:${NC}"
    npm audit --audit-level moderate --silent && echo "  ✅ No vulnerabilities found" || echo "  ⚠️  Vulnerabilities detected - run 'npm run security'"
}

clean_project() {
    log_header "Clean Project"
    log_step "Cleaning build artifacts..."
    
    if [ -d ".next" ]; then
        rm -rf .next
        log_success "Removed .next directory"
    fi
    
    if [ -d "out" ]; then
        rm -rf out
        log_success "Removed out directory"
    fi
    
    if [ -d "node_modules/.cache" ]; then
        rm -rf node_modules/.cache
        log_success "Cleared npm cache"
    fi
    
    log_success "Project cleaned successfully"
}

install_dependencies() {
    log_header "Install Dependencies"
    log_step "Installing npm dependencies..."
    npm install
    log_success "Dependencies installed successfully"
}

setup_hooks() {
    log_header "Setup Git Hooks"
    log_step "Installing pre-push hook..."
    npm run setup:hooks
    log_success "Git hooks setup completed"
}

migrate_repository() {
    log_header "Repository Migration"
    log_step "Running repository migration script..."
    ./scripts/migrate-repo.sh
    log_success "Repository migration completed"
}

show_docs() {
    log_header "Documentation"
    log_step "Available documentation in docs/ directory:"
    find docs/ -name "*.md" | sort | sed 's/^/  📄 /'
    echo ""
    log_info "Quick access:"
    echo "  📚 Main docs index: docs/README.md"
    echo "  🚀 Quick start: QUICK_START.md"
    echo "  🔧 Setup guides: docs/setup/"
    echo "  🧪 Testing: docs/testing/"
    echo "  🚀 Deployment: docs/deployment/"
    echo "  🌿 Branching: BRANCHING_WORKFLOW.md"
}

run_security_check() {
    log_header "Security Check"
    log_step "Running comprehensive security scan..."
    npm run security
    if [ $? -eq 0 ]; then
        log_success "Security scan completed successfully"
    else
        log_error "Security scan found issues"
        exit 1
    fi
}

setup_complete() {
    log_header "Complete Setup"
    log_step "Running complete project setup..."
    npm install
    npm run setup:hooks
    log_success "Complete setup finished"
    log_info "You can now run: ./jerry-dev.sh dev"
}

# Main Menu
show_main_menu() {
    clear
    echo -e "${PURPLE}🎯 Jerry Dempsey Website - Enhanced Development Tool${NC}"
    echo -e "${PURPLE}$(printf '=%.0s' {1..50})${NC}"
    echo ""
    echo -e "${WHITE}🌿 Branch Management:${NC}"
    echo "1) Create Feature Branch"
    echo "2) Create Fix Branch"
    echo "3) Create Style Branch"
    echo "4) Show Branch Status"
    echo ""
    echo -e "${WHITE}📄 Resume Management:${NC}"
    echo "5) Update Resume (Simple Pipeline)"
    echo "6) Update Resume (Google Drive Pipeline)"
    echo "7) Update Resume (Hybrid Pipeline)"
    echo "8) Resume Options Menu"
    echo ""
    echo -e "${WHITE}🧪 Testing & Quality:${NC}"
    echo "9) Run Production Pipeline (Full Test)"
    echo "10) Run Quick Tests"
    echo "11) Run Security Scan"
    echo "12) Run Linting"
    echo ""
    echo -e "${WHITE}🌐 Servers:${NC}"
    echo "13) Start Development Server"
    echo "14) Start Staging Server"
    echo "15) Start Production Server"
    echo ""
    echo -e "${WHITE}🚀 Deployment:${NC}"
    echo "16) Push to Production (with pipeline)"
    echo "17) Deploy with Custom Message"
    echo ""
    echo -e "${WHITE}🔧 Utilities:${NC}"
    echo "18) Show Project Status"
    echo "19) Clean Project"
    echo "20) Install Dependencies"
    echo "21) Setup Git Hooks"
    echo "22) Migrate Repository (jerry-dempsey-website → www-stylee-org)"
    echo "23) Show Documentation"
    echo "24) Run Security Check"
    echo "25) Complete Setup (install + hooks)"
    echo ""
    echo -e "${WHITE}❌ Exit:${NC}"
    echo "0) Exit"
    echo ""
}

# Main execution
main() {
    # Check prerequisites
    check_node
    check_npm
    
    while true; do
        show_main_menu
        read -p "Choose an option [0-25]: " choice
        
        case $choice in
            1) create_feature_branch ;;
            2) create_fix_branch ;;
            3) create_style_branch ;;
            4) show_branch_status ;;
            5) update_resume_simple ;;
            6) update_resume_google ;;
            7) update_resume_hybrid ;;
            8) update_resume ;;
            9) run_production_pipeline ;;
            10) run_quick_tests ;;
            11) run_security_scan ;;
            12) run_linting ;;
            13) start_dev_server ;;
            14) start_staging_server ;;
            15) start_production_server ;;
            16) push_to_production ;;
            17) deploy_with_message ;;
            18) show_status ;;
            19) clean_project ;;
            20) install_dependencies ;;
            21) setup_hooks ;;
            22) migrate_repository ;;
            23) show_docs ;;
            24) run_security_check ;;
            25) setup_complete ;;
            0) 
                log_success "Goodbye! 👋"
                exit 0
                ;;
            *)
                log_error "Invalid option. Please choose 0-25."
                echo ""
                read -p "Press Enter to continue..."
                ;;
        esac
        
        # Pause after each operation (except for servers)
        if [[ ! "$choice" =~ ^(13|14|15)$ ]]; then
            echo ""
            read -p "Press Enter to continue..."
        fi
    done
}

# Handle script arguments
if [ $# -eq 0 ]; then
    # No arguments - show interactive menu
    main
else
    # Handle command line arguments
    case "$1" in
        "new-feature")
            create_feature_branch
            ;;
        "new-fix")
            create_fix_branch
            ;;
        "new-style")
            create_style_branch
            ;;
        "branches"|"branch-status")
            show_branch_status
            ;;
        "resume"|"update-resume")
            update_resume
            ;;
        "resume-simple")
            update_resume_simple
            ;;
        "resume-google")
            update_resume_google
            ;;
        "resume-hybrid")
            update_resume_hybrid
            ;;
        "test"|"pipeline")
            run_production_pipeline
            ;;
        "quick-test")
            run_quick_tests
            ;;
        "security")
            run_security_scan
            ;;
        "lint")
            run_linting
            ;;
        "dev"|"dev-server")
            start_dev_server
            ;;
        "staging"|"staging-server")
            start_staging_server
            ;;
        "prod"|"production-server")
            start_production_server
            ;;
        "deploy"|"push")
            push_to_production
            ;;
        "deploy-msg")
            deploy_with_message
            ;;
        "status")
            show_status
            ;;
        "clean")
            clean_project
            ;;
        "install")
            install_dependencies
            ;;
        "setup-hooks")
            setup_hooks
            ;;
        "migrate")
            migrate_repository
            ;;
        "docs")
            show_docs
            ;;
        "security-check")
            run_security_check
            ;;
        "setup-all")
            setup_complete
            ;;
        "help"|"-h"|"--help")
            echo "Jerry Dempsey Website - Enhanced Development Tool"
            echo ""
            echo "Usage: $0 [command]"
            echo ""
            echo "Commands:"
            echo "  new-feature              - Create feature branch"
            echo "  new-fix                  - Create fix branch"
            echo "  new-style                - Create style branch"
            echo "  branches, branch-status  - Show branch status"
            echo "  resume, update-resume    - Resume update menu"
            echo "  resume-simple           - Simple resume pipeline"
            echo "  resume-google           - Google Drive resume pipeline"
            echo "  resume-hybrid           - Hybrid resume pipeline"
            echo "  test, pipeline          - Run production pipeline"
            echo "  quick-test              - Run quick tests"
            echo "  security                - Run security scan"
            echo "  lint                    - Run linting"
            echo "  dev, dev-server         - Start development server"
            echo "  staging, staging-server - Start staging server"
            echo "  prod, production-server - Start production server"
            echo "  deploy, push            - Push to production"
            echo "  deploy-msg              - Deploy with custom message"
            echo "  status                  - Show project status"
            echo "  clean                   - Clean project"
            echo "  install                 - Install dependencies"
            echo "  setup-hooks             - Setup git hooks"
            echo "  migrate                 - Migrate repository (jerry-dempsey-website → www-stylee-org)"
            echo "  docs                    - Show documentation"
            echo "  security-check          - Run security scan"
            echo "  setup-all               - Complete setup (install + hooks)"
            echo "  help, -h, --help        - Show this help"
            echo ""
            echo "If no command is provided, an interactive menu will be shown."
            ;;
        *)
            log_error "Unknown command: $1"
            echo "Use '$0 help' to see available commands."
            exit 1
            ;;
    esac
fi
