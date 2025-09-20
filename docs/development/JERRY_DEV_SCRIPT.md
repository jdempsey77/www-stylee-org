# 🎯 Jerry Dev Script - Development & Deployment Tool

The `jerry-dev.sh` script is a comprehensive command-line tool for managing your Jerry Dempsey website development, testing, and deployment workflow.

## 🚀 **Quick Start**

```bash
# Make the script executable (first time only)
chmod +x jerry-dev.sh

# Run the interactive menu
./jerry-dev.sh

# Or run specific commands
./jerry-dev.sh help
./jerry-dev.sh test
./jerry-dev.sh deploy
```

## 📋 **Available Commands**

### **📄 Resume Management**
```bash
./jerry-dev.sh resume              # Resume update menu
./jerry-dev.sh resume-simple       # Simple resume pipeline
./jerry-dev.sh resume-google       # Google Drive resume pipeline
./jerry-dev.sh resume-hybrid       # Hybrid resume pipeline
```

### **🧪 Testing & Quality**
```bash
./jerry-dev.sh test                # Run production pipeline (full test)
./jerry-dev.sh quick-test          # Run quick tests
./jerry-dev.sh security            # Run security scan
./jerry-dev.sh lint                # Run linting
```

### **🌐 Server Management**
```bash
./jerry-dev.sh dev                 # Start development server
./jerry-dev.sh staging             # Start staging server
./jerry-dev.sh prod                # Start production server
```

### **🚀 Deployment**
```bash
./jerry-dev.sh deploy              # Push to production (with pipeline)
./jerry-dev.sh deploy-msg          # Deploy with custom message
```

### **🔧 Utilities**
```bash
./jerry-dev.sh status              # Show project status
./jerry-dev.sh clean               # Clean project
./jerry-dev.sh install             # Install dependencies
./jerry-dev.sh setup-hooks         # Setup git hooks
```

### **❓ Help**
```bash
./jerry-dev.sh help                # Show help information
```

## 🎮 **Interactive Menu**

When you run `./jerry-dev.sh` without arguments, you'll see an interactive menu:

```
🎯 Jerry Dempsey Website - Development Tool
==================================================

📄 Resume Management:
1) Update Resume (Simple Pipeline)
2) Update Resume (Google Drive Pipeline)
3) Update Resume (Hybrid Pipeline)
4) Resume Options Menu

🧪 Testing & Quality:
5) Run Production Pipeline (Full Test)
6) Run Quick Tests
7) Run Security Scan
8) Run Linting

🌐 Servers:
9) Start Development Server
10) Start Staging Server
11) Start Production Server

🚀 Deployment:
12) Push to Production (with pipeline)
13) Deploy with Custom Message

🔧 Utilities:
14) Show Project Status
15) Clean Project
16) Install Dependencies
17) Setup Git Hooks

❌ Exit:
0) Exit
```

## 📊 **Command Details**

### **Resume Management**

#### **Simple Pipeline**
- Uses hardcoded, clean resume data
- Generates both website and PDF
- Fast and reliable
- **Use case**: Quick updates, testing

#### **Google Drive Pipeline**
- Pulls resume data from Google Drive
- Generates website and PDF from Google Doc
- Requires Google Drive API setup
- **Use case**: Single source of truth from Google Doc

#### **Hybrid Pipeline**
- Website from clean data (reliable)
- PDF from Google Doc (professional formatting)
- Best of both worlds
- **Use case**: Production deployments

### **Testing & Quality**

#### **Production Pipeline**
- Comprehensive testing suite
- Linting, security, build validation, functionality
- **Required** before production deployment
- Duration: ~10 seconds

#### **Quick Tests**
- Fast linting and build checks
- Good for development validation
- Duration: ~5 seconds

#### **Security Scan**
- Advanced threat detection
- Secrets, vulnerabilities, dangerous code
- Critical for production safety

### **Server Management**

#### **Development Server**
- Next.js development mode
- Hot reload, debugging tools
- URL: http://localhost:3000

#### **Staging Server**
- Production build with staging config
- Local testing environment
- URL: http://localhost:3001

#### **Production Server**
- Full production build
- Local production testing
- URL: http://localhost:3001

### **Deployment**

#### **Push to Production**
- Runs production pipeline first
- Commits all changes
- Pushes to main branch
- Triggers Vercel deployment

#### **Deploy with Custom Message**
- Same as push, but with custom commit message
- Useful for specific deployment tracking

## 🔧 **Prerequisites**

The script automatically checks for:
- ✅ Node.js (via NVM)
- ✅ npm
- ✅ Git repository
- ✅ Package.json scripts

## 🛡️ **Security Features**

- **Automatic Pipeline**: Production pipeline runs before any deployment
- **Security Scanning**: Advanced threat detection
- **Quality Gates**: Linting and build validation
- **Git Hooks**: Pre-push validation

## 📁 **File Structure**

```
jerry-dev.sh              # Main development script
docs/development/JERRY_DEV_SCRIPT.md       # This documentation
scripts/
├── production-pipeline.js    # Production testing pipeline
├── security-scanner.js       # Security scanning
└── setup-pre-push-hook.sh    # Git hooks setup
```

## 🎯 **Common Workflows**

### **Daily Development**
```bash
# Start development
./jerry-dev.sh dev

# Make changes, then test
./jerry-dev.sh quick-test

# When ready for production
./jerry-dev.sh deploy
```

### **Resume Updates**
```bash
# Update resume (hybrid approach)
./jerry-dev.sh resume-hybrid

# Test the changes
./jerry-dev.sh staging

# Deploy to production
./jerry-dev.sh deploy
```

### **Quick Testing**
```bash
# Run full production pipeline
./jerry-dev.sh test

# Check project status
./jerry-dev.sh status
```

### **Emergency Deployment**
```bash
# Deploy with custom message
./jerry-dev.sh deploy-msg
# Enter: "hotfix: critical security update"
```

## 🔍 **Troubleshooting**

### **Script Not Executable**
```bash
chmod +x jerry-dev.sh
```

### **Node.js Not Found**
```bash
# Make sure NVM is loaded
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

### **Permission Denied**
```bash
# Check file permissions
ls -la jerry-dev.sh

# Fix permissions
chmod +x jerry-dev.sh
```

### **Git Hooks Not Working**
```bash
# Reinstall hooks
./jerry-dev.sh setup-hooks
```

## 🎨 **Features**

- **🎨 Colorized Output**: Easy-to-read colored terminal output
- **⚡ Fast Execution**: Optimized for speed
- **🛡️ Error Handling**: Comprehensive error checking
- **📊 Status Reporting**: Clear success/failure indicators
- **🔄 Interactive Menu**: User-friendly interface
- **📝 Command Line**: Direct command execution
- **🔧 Auto-Setup**: Automatic environment detection

## 💡 **Tips**

1. **Use Interactive Menu**: Great for exploring options
2. **Command Line**: Faster for repeated operations
3. **Always Test**: Run pipeline before production
4. **Custom Messages**: Use descriptive commit messages
5. **Clean Regularly**: Clean project when things get messy

## 🚀 **Integration**

The script integrates with:
- **Git**: Automatic commits and pushes
- **NPM**: Package management and scripts
- **Vercel**: Automatic deployments
- **GitHub**: Repository management
- **Google Drive**: Resume data source

---

**Happy coding! 🎯** The `jerry-dev.sh` script is your one-stop tool for managing your website development and deployment workflow.
