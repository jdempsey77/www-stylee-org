# 🔄 Repository Migration Checklist: jerry-dempsey-website → www-stylee-org

## 🚨 **CRITICAL UPDATES REQUIRED:**

### **1. Git Remote URL (CRITICAL)**
```bash
# Update git remote to new repository name
git remote set-url origin git@github.com:jdempsey77/www-stylee-org.git

# Verify the change
git remote -v
```

### **2. Next.js Configuration (CRITICAL for GitHub Pages)**
**File**: `next.config.ts`
**Line 5**: Update basePath
```typescript
// OLD:
const basePath = isProd && !isCustomDomain ? '/jerry-dempsey-website' : '';

// NEW:
const basePath = isProd && !isCustomDomain ? '/www-stylee-org' : '';
```

### **3. Package.json Name (MINOR)**
**File**: `package.json`
**Line 2**: Update package name
```json
// OLD:
"name": "jerry-dempsey-website",

// NEW:
"name": "www-stylee-org",
```

## 📝 **OPTIONAL DOCUMENTATION UPDATES:**

### **Files with Repository Name References:**
- `docs/setup/GOOGLE_DRIVE_API_SETUP.md` (line 151)
- `docs/scripts/RESUME_PIPELINE_OPTIONS.md` (line 156)
- `docs/scripts/GOOGLE_DRIVE_PIPELINE.md` (line 148)
- `docs/scripts/RESUME_PIPELINE_SIMPLE.md` (line 89)
- `docs/scripts/RESUME_PIPELINE.md` (line 132)
- `docs/deployment/README_STAGING.md` (lines 14, 107, 108)
- `test.sh` (line 222)
- `scripts/setup-local-testing.sh` (line 16)

## 🔧 **MIGRATION STEPS:**

### **Step 1: Rename Repository on GitHub**
1. Go to repository settings
2. Change name from `jerry-dempsey-website` to `www-stylee-org`
3. Confirm the change

### **Step 2: Update Local Configuration**
```bash
# Update git remote
git remote set-url origin git@github.com:jdempsey77/www-stylee-org.git

# Update next.config.ts
# Update package.json
```

### **Step 3: Test the Changes**
```bash
# Test git connection
git fetch origin

# Test build with new configuration
npm run build:staging

# Test deployment
./jerry-dev.sh deploy
```

### **Step 4: Verify Deployment**
- Check GitHub Pages deployment
- Verify all links work correctly
- Test production pipeline

## ⚠️ **POTENTIAL IMPACT:**

### **GitHub Pages (if using GitHub Pages)**
- **Current URL**: `https://jdempsey77.github.io/jerry-dempsey-website/`
- **New URL**: `https://jdempsey77.github.io/www-stylee-org/`
- **Custom Domain**: No impact if using custom domain

### **Vercel Deployment**
- Should continue working automatically
- May need to update Vercel project settings

### **Local Development**
- No impact on local development
- All scripts will continue working

## 🎯 **RECOMMENDED APPROACH:**

1. **Create the migration script** (see below)
2. **Run the migration script** after renaming on GitHub
3. **Test thoroughly** before pushing to production
4. **Update documentation** as needed

## 🚀 **AUTOMATED MIGRATION SCRIPT:**

```bash
#!/bin/bash
echo "🔄 Migrating repository from jerry-dempsey-website to www-stylee-org..."

# Update git remote
echo "📡 Updating git remote..."
git remote set-url origin git@github.com:jdempsey77/www-stylee-org.git

# Update next.config.ts
echo "⚙️  Updating next.config.ts..."
sed -i '' 's/jerry-dempsey-website/www-stylee-org/g' next.config.ts

# Update package.json
echo "📦 Updating package.json..."
sed -i '' 's/jerry-dempsey-website/www-stylee-org/g' package.json

# Update package-lock.json
echo "🔒 Updating package-lock.json..."
sed -i '' 's/jerry-dempsey-website/www-stylee-org/g' package-lock.json

echo "✅ Migration completed!"
echo "🧪 Please test the changes before pushing to production"
```

## 🔍 **VERIFICATION CHECKLIST:**

- [ ] Git remote updated successfully
- [ ] next.config.ts basePath updated
- [ ] package.json name updated
- [ ] package-lock.json updated
- [ ] Build test passes
- [ ] Deployment test passes
- [ ] All links work correctly
- [ ] Production pipeline passes

---

**Note**: The migration is relatively straightforward. The main risks are around GitHub Pages deployment if you're using that, and ensuring all configuration files are updated consistently.
