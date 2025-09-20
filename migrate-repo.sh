#!/bin/bash

# Repository Migration Script: jerry-dempsey-website → www-stylee-org
# =================================================================

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

# Check if we're in the right directory
check_directory() {
    if [ ! -f "package.json" ] || [ ! -f "next.config.ts" ]; then
        log_error "Please run this script from the project root directory"
        exit 1
    fi
}

# Check current git remote
check_git_remote() {
    log_step "Checking current git remote..."
    current_remote=$(git remote get-url origin)
    log_info "Current remote: $current_remote"
    
    if [[ "$current_remote" == *"jerry-dempsey-website"* ]]; then
        log_warning "Repository still points to old name"
        return 0
    elif [[ "$current_remote" == *"www-stylee-org"* ]]; then
        log_success "Repository already points to new name"
        return 1
    else
        log_error "Unexpected remote URL: $current_remote"
        exit 1
    fi
}

# Update git remote
update_git_remote() {
    log_step "Updating git remote URL..."
    git remote set-url origin git@github.com:jdempsey77/www-stylee-org.git
    
    # Verify the change
    new_remote=$(git remote get-url origin)
    log_info "New remote: $new_remote"
    
    if [[ "$new_remote" == *"www-stylee-org"* ]]; then
        log_success "Git remote updated successfully"
    else
        log_error "Failed to update git remote"
        exit 1
    fi
}

# Update configuration files
update_config_files() {
    log_step "Updating configuration files..."
    
    # Update next.config.ts
    if [ -f "next.config.ts" ]; then
        log_info "Updating next.config.ts..."
        if command -v sed &> /dev/null; then
            # macOS sed
            sed -i '' 's/jerry-dempsey-website/www-stylee-org/g' next.config.ts
        else
            # Linux sed
            sed -i 's/jerry-dempsey-website/www-stylee-org/g' next.config.ts
        fi
        log_success "next.config.ts updated"
    fi
    
    # Update package.json
    if [ -f "package.json" ]; then
        log_info "Updating package.json..."
        if command -v sed &> /dev/null; then
            sed -i '' 's/jerry-dempsey-website/www-stylee-org/g' package.json
        else
            sed -i 's/jerry-dempsey-website/www-stylee-org/g' package.json
        fi
        log_success "package.json updated"
    fi
    
    # Update package-lock.json
    if [ -f "package-lock.json" ]; then
        log_info "Updating package-lock.json..."
        if command -v sed &> /dev/null; then
            sed -i '' 's/jerry-dempsey-website/www-stylee-org/g' package-lock.json
        else
            sed -i 's/jerry-dempsey-website/www-stylee-org/g' package-lock.json
        fi
        log_success "package-lock.json updated"
    fi
}

# Test git connection
test_git_connection() {
    log_step "Testing git connection..."
    if git fetch origin --dry-run &> /dev/null; then
        log_success "Git connection test passed"
    else
        log_warning "Git connection test failed - this is normal if repository hasn't been renamed on GitHub yet"
    fi
}

# Test build
test_build() {
    log_step "Testing build with new configuration..."
    
    # Check if Node.js is available
    if ! command -v node &> /dev/null; then
        log_warning "Node.js not available - skipping build test"
        return 0
    fi
    
    # Load Node.js environment
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    
    if npm run build:staging &> /dev/null; then
        log_success "Build test passed"
    else
        log_warning "Build test failed - please check the configuration"
    fi
}

# Show verification checklist
show_checklist() {
    log_header "Migration Verification Checklist"
    echo -e "${WHITE}Please verify the following:${NC}"
    echo ""
    echo "1. ✅ Repository renamed on GitHub from 'jerry-dempsey-website' to 'www-stylee-org'"
    echo "2. ✅ Git remote updated to new repository name"
    echo "3. ✅ next.config.ts basePath updated"
    echo "4. ✅ package.json name updated"
    echo "5. ✅ package-lock.json updated"
    echo ""
    echo -e "${WHITE}Next steps:${NC}"
    echo "1. Test the build: npm run build:staging"
    echo "2. Test deployment: ./jerry-dev.sh deploy"
    echo "3. Verify GitHub Pages deployment (if applicable)"
    echo "4. Update any external references to the old repository name"
}

# Main migration function
migrate() {
    log_header "Repository Migration: jerry-dempsey-website → www-stylee-org"
    echo ""
    
    # Check prerequisites
    check_directory
    
    # Check if migration is needed
    if ! check_git_remote; then
        log_info "Repository appears to already be migrated"
        echo ""
        read -p "Do you want to continue with configuration updates? (y/N): " continue_migration
        if [[ ! "$continue_migration" =~ ^[Yy]$ ]]; then
            log_info "Migration cancelled"
            exit 0
        fi
    fi
    
    # Perform migration
    update_git_remote
    update_config_files
    test_git_connection
    test_build
    
    log_success "Migration completed successfully!"
    echo ""
    show_checklist
}

# Show help
show_help() {
    echo "Repository Migration Script"
    echo ""
    echo "Usage: $0 [options]"
    echo ""
    echo "Options:"
    echo "  -h, --help     Show this help message"
    echo "  --dry-run      Show what would be changed without making changes"
    echo ""
    echo "This script migrates the repository from 'jerry-dempsey-website' to 'www-stylee-org'"
    echo ""
    echo "Prerequisites:"
    echo "  1. Repository must be renamed on GitHub first"
    echo "  2. Run this script from the project root directory"
    echo "  3. Git must be configured with SSH access to GitHub"
}

# Handle command line arguments
case "${1:-}" in
    -h|--help)
        show_help
        exit 0
        ;;
    --dry-run)
        log_header "Dry Run - Repository Migration"
        echo "This would perform the following changes:"
        echo ""
        echo "1. Update git remote from:"
        echo "   git@github.com:jdempsey77/jerry-dempsey-website.git"
        echo "   to:"
        echo "   git@github.com:jdempsey77/www-stylee-org.git"
        echo ""
        echo "2. Update next.config.ts basePath"
        echo "3. Update package.json name"
        echo "4. Update package-lock.json name"
        echo ""
        echo "No changes will be made in dry-run mode."
        exit 0
        ;;
    "")
        migrate
        ;;
    *)
        log_error "Unknown option: $1"
        echo "Use '$0 --help' for usage information"
        exit 1
        ;;
esac
