# Scripts Overview

This document provides an overview of all scripts in the project, their purposes, and usage instructions.

## 📁 Scripts Directory Structure

```
scripts/
├── dev-helper.sh              # Development helper utilities
├── dev-workflow.js            # Development workflow automation
├── dev-workflow.sh            # Development workflow shell script
├── google-drive-api-pipeline.js # Google Drive API integration
├── production-pipeline.js     # Production deployment pipeline
├── quick-test.sh              # Quick testing utilities
├── security-scanner.js        # Security vulnerability scanning
├── serve-local.sh             # Local server management
├── setup-pre-push-hook.sh     # Git hooks setup
├── smart-resume-pipeline.js   # Main resume pipeline (recommended)
├── validate-build.js          # Build validation
└── watch-files.sh             # File watching utilities
```

## 🎯 Core Scripts

### Resume Pipeline
- **`smart-resume-pipeline.js`** ⭐ **MAIN PIPELINE**
  - Purpose: Intelligent resume update automation
  - Usage: `npm run resume:smart`
  - Features: Change detection, PDF generation, page updates

### Production & Deployment
- **`production-pipeline.js`**
  - Purpose: Production deployment validation
  - Usage: `npm run pipeline:production`
  - Features: Security checks, build validation, testing

- **`security-scanner.js`**
  - Purpose: Security vulnerability scanning
  - Usage: `npm run security`
  - Features: Dependency audit, security headers check

### Development Tools
- **`dev-workflow.js`** / **`dev-workflow.sh`**
  - Purpose: Development workflow automation
  - Usage: `npm run dev:workflow`
  - Features: Development environment setup and management

- **`dev-helper.sh`**
  - Purpose: Development helper utilities
  - Usage: Various development tasks
  - Features: Environment management, testing utilities

### Setup & Configuration
- **`setup-pre-push-hook.sh`**
  - Purpose: Configure Git pre-push hooks
  - Usage: `npm run setup:hooks`
  - Features: Automated testing and security checks

- **`validate-build.js`**
  - Purpose: Build validation and testing
  - Usage: `npm run validate:build`
  - Features: Build integrity checks

### Utilities
- **`serve-local.sh`**
  - Purpose: Local server management
  - Usage: `npm run serve:local`
  - Features: Local development server utilities

- **`watch-files.sh`**
  - Purpose: File watching and auto-reload
  - Usage: `npm run watch:files`
  - Features: Automatic rebuild on file changes

- **`quick-test.sh`**
  - Purpose: Quick testing utilities
  - Usage: Various testing scenarios
  - Features: Fast testing and validation

## 🔧 Google Drive Integration

- **`google-drive-api-pipeline.js`**
  - Purpose: Google Drive API integration
  - Usage: Used by smart resume pipeline
  - Features: Document export, API management

## 📋 Usage Patterns

### Daily Development
```bash
# Start development
npm run dev

# Run smart resume pipeline
npm run resume:smart

# Quick testing
npm run test:quick
```

### Pre-deployment
```bash
# Full testing
npm run test:local

# Production pipeline
npm run pipeline:production

# Security scan
npm run security
```

### Setup & Maintenance
```bash
# Initial setup
npm run setup:hooks

# Clean environment
npm run clean:all

# Documentation
npm run docs
```

## 🚀 Script Development Guidelines

### Adding New Scripts
1. Place in `scripts/` directory
2. Use descriptive names
3. Add to `package.json` if needed
4. Update this documentation
5. Include error handling
6. Add usage comments

### Script Standards
- **JavaScript**: Use modern ES6+ syntax
- **Shell Scripts**: Use `#!/bin/bash` shebang
- **Error Handling**: Include proper error handling
- **Logging**: Use consistent logging format
- **Documentation**: Include usage instructions

### Testing Scripts
- Test in development environment first
- Validate with different scenarios
- Ensure error conditions are handled
- Test with various input types

## 🔍 Troubleshooting

### Common Issues
- **Permission Denied**: Ensure scripts have execute permissions
- **Node Not Found**: Check Node.js installation and PATH
- **Missing Dependencies**: Run `npm install`
- **API Errors**: Check environment variables and credentials

### Debug Mode
Most scripts support debug mode:
```bash
DEBUG=true npm run script-name
```

### Log Files
Scripts typically log to console. For persistent logging:
```bash
npm run script-name 2>&1 | tee script.log
```

## 📚 Related Documentation

- [RESUME_PIPELINE.md](RESUME_PIPELINE.md) - Main resume pipeline
- [GOOGLE_DRIVE_PIPELINE.md](GOOGLE_DRIVE_PIPELINE.md) - Google Drive integration
- [PRODUCTION_PIPELINE.md](../deployment/PRODUCTION_PIPELINE.md) - Production deployment
- [GOOGLE_DRIVE_API_SETUP.md](../setup/GOOGLE_DRIVE_API_SETUP.md) - API setup

---

**Last Updated**: January 2025  
**Maintained by**: Jerry Dempsey
