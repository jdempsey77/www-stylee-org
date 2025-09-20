#!/bin/bash

# Jerry Dempsey Website - Development & Deployment Script
# =====================================================
# Comprehensive tool for managing development, testing, and deployment

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
    
    echo -e "${WHITE}📊 Git Status:${NC}"
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
    ./migrate-repo.sh
    log_success "Repository migration completed"
}

# Main Menu
show_main_menu() {
    clear
    echo -e "${PURPLE}🎯 Jerry Dempsey Website - Development Tool${NC}"
    echo -e "${PURPLE}$(printf '=%.0s' {1..50})${NC}"
    echo ""
    echo -e "${WHITE}📄 Resume Management:${NC}"
    echo "1) Update Resume (Simple Pipeline)"
    echo "2) Update Resume (Google Drive Pipeline)"
    echo "3) Update Resume (Hybrid Pipeline)"
    echo "4) Resume Options Menu"
    echo ""
    echo -e "${WHITE}🧪 Testing & Quality:${NC}"
    echo "5) Run Production Pipeline (Full Test)"
    echo "6) Run Quick Tests"
    echo "7) Run Security Scan"
    echo "8) Run Linting"
    echo ""
    echo -e "${WHITE}🌐 Servers:${NC}"
    echo "9) Start Development Server"
    echo "10) Start Staging Server"
    echo "11) Start Production Server"
    echo ""
    echo -e "${WHITE}🚀 Deployment:${NC}"
    echo "12) Push to Production (with pipeline)"
    echo "13) Deploy with Custom Message"
    echo ""
    echo -e "${WHITE}🔧 Utilities:${NC}"
    echo "14) Show Project Status"
    echo "15) Clean Project"
    echo "16) Install Dependencies"
    echo "17) Setup Git Hooks"
    echo "18) Migrate Repository (jerry-dempsey-website → www-stylee-org)"
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
        read -p "Choose an option [0-17]: " choice
        
        case $choice in
            1) update_resume_simple ;;
            2) update_resume_google ;;
            3) update_resume_hybrid ;;
            4) update_resume ;;
            5) run_production_pipeline ;;
            6) run_quick_tests ;;
            7) run_security_scan ;;
            8) run_linting ;;
            9) start_dev_server ;;
            10) start_staging_server ;;
            11) start_production_server ;;
            12) push_to_production ;;
            13) deploy_with_message ;;
            14) show_status ;;
            15) clean_project ;;
            16) install_dependencies ;;
            17) setup_hooks ;;
            18) migrate_repository ;;
            0) 
                log_success "Goodbye! 👋"
                exit 0
                ;;
            *)
                log_error "Invalid option. Please choose 0-18."
                echo ""
                read -p "Press Enter to continue..."
                ;;
        esac
        
        # Pause after each operation (except for servers)
        if [[ ! "$choice" =~ ^(9|10|11)$ ]]; then
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
        "help"|"-h"|"--help")
            echo "Jerry Dempsey Website - Development Tool"
            echo ""
            echo "Usage: $0 [command]"
            echo ""
            echo "Commands:"
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
