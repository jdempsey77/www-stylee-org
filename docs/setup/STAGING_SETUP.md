# 🚀 Staging Environment Setup Guide

This guide provides multiple options for implementing a staging/testing environment for your Jerry Dempsey website.

## 🎯 **Recommended Approach: GitHub Actions + Branch Protection**

### **Step 1: Set Up Branch Protection Rules**

1. Go to your GitHub repository settings
2. Navigate to "Branches" → "Add rule"
3. Configure branch protection for `main`:
   - ✅ Require a pull request before merging
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
   - ✅ Include administrators

### **Step 2: Create Development Workflow**

```bash
# Create development branch
git checkout -b develop

# Make your changes
git add .
git commit -m "feat: add new feature"

# Push to develop branch
git push origin develop

# Create pull request to main
# This will trigger staging deployment
```

### **Step 3: Automated Testing**

The GitHub Actions workflow will automatically:
- ✅ Run linting checks
- ✅ Run security audits
- ✅ Build the staging version
- ✅ Validate build artifacts
- ✅ Deploy to staging environment

## 🔧 **Local Testing Options**

### **Quick Staging Build**
```bash
# Test staging build locally
npm run preview

# This will:
# 1. Build with staging configuration
# 2. Serve on localhost:3001
# 3. Allow you to test before pushing
```

### **Manual Validation**
```bash
# Run all tests
npm run test:build

# This includes:
# - Linting
# - Security audit
# - Build validation
# - File existence checks
```

## 🌐 **Deployment Platforms**

### **Option A: Vercel (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to staging
vercel --prod=false

# Deploy to production
vercel --prod=true
```

**Benefits:**
- Automatic preview deployments for PRs
- Built-in staging environment
- Easy rollback capabilities
- Performance monitoring

### **Option B: Netlify**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy to staging
netlify deploy

# Deploy to production
netlify deploy --prod
```

**Benefits:**
- Branch-based deployments
- Form handling
- Edge functions
- A/B testing

### **Option C: GitHub Pages**
The GitHub Actions workflow is already configured for GitHub Pages deployment.

**Benefits:**
- Free hosting
- Automatic deployments
- Custom domains
- HTTPS by default

## 📋 **Testing Checklist**

Before deploying to production, ensure:

### **Code Quality**
- [ ] All linting checks pass
- [ ] No security vulnerabilities
- [ ] TypeScript compilation succeeds
- [ ] All imports resolve correctly

### **Build Validation**
- [ ] Staging build completes successfully
- [ ] All critical files are generated
- [ ] No broken links or missing assets
- [ ] Build size is reasonable

### **Functionality Testing**
- [ ] All pages load correctly
- [ ] Navigation works properly
- [ ] Forms submit successfully
- [ ] Analytics tracking works
- [ ] Mobile responsiveness

### **Performance**
- [ ] Page load times are acceptable
- [ ] Images are optimized
- [ ] No console errors
- [ ] Lighthouse scores are good

## 🚨 **Emergency Procedures**

### **Rollback Process**
```bash
# If production deployment fails
git revert HEAD
git push origin main

# Or use deployment platform rollback
vercel rollback  # for Vercel
netlify rollback  # for Netlify
```

### **Hotfix Process**
```bash
# For urgent fixes
git checkout main
git checkout -b hotfix/urgent-fix
# Make minimal changes
git commit -m "hotfix: urgent fix"
git push origin hotfix/urgent-fix
# Create PR and merge immediately
```

## 🔍 **Monitoring & Alerts**

### **Set Up Monitoring**
- Configure uptime monitoring (UptimeRobot, Pingdom)
- Set up error tracking (Sentry, LogRocket)
- Monitor performance (Lighthouse CI, WebPageTest)

### **Automated Alerts**
- Build failures
- Security vulnerabilities
- Performance regressions
- Uptime issues

## 📊 **Environment Comparison**

| Feature | Development | Staging | Production |
|---------|-------------|---------|------------|
| URL | localhost:3000 | staging.yourdomain.com | yourdomain.com |
| Analytics | Disabled | Disabled | Enabled |
| Error Tracking | Console | Detailed | Detailed |
| Build Optimization | Minimal | Full | Full |
| Cache Headers | None | Short | Long |
| HTTPS | Optional | Required | Required |

## 🎯 **Best Practices**

### **Branch Strategy**
```
main (production)
├── develop (staging)
├── feature/new-page
├── feature/update-content
└── hotfix/urgent-fix
```

### **Commit Messages**
```
feat: add new feature
fix: resolve bug
docs: update documentation
style: formatting changes
refactor: code restructuring
test: add tests
chore: maintenance tasks
```

### **Pull Request Template**
```markdown
## Description
Brief description of changes

## Testing
- [ ] Staging build passes
- [ ] Manual testing completed
- [ ] No breaking changes

## Deployment
- [ ] Ready for production
- [ ] Database migrations (if any)
- [ ] Environment variables updated
```

## 🚀 **Getting Started**

1. **Choose your deployment platform** (Vercel recommended)
2. **Set up branch protection rules** on GitHub
3. **Test the staging workflow** with a small change
4. **Configure monitoring** and alerts
5. **Document your process** for team members

## 📞 **Support**

If you need help setting up any of these options, I can assist with:
- Configuring GitHub Actions
- Setting up deployment platforms
- Creating custom validation scripts
- Implementing monitoring solutions

Remember: **Never deploy directly to production without testing in staging first!**
