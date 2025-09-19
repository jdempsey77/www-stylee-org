#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Hybrid Development Workflow');
console.log('==============================\n');

const args = process.argv.slice(2);
const command = args[0];

function runCommand(cmd, description) {
  console.log(`📋 ${description}...`);
  try {
    execSync(cmd, { stdio: 'inherit' });
    console.log(`✅ ${description} completed\n`);
    return true;
  } catch (error) {
    console.error(`❌ ${description} failed\n`);
    return false;
  }
}

function checkGitStatus() {
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    if (status.trim()) {
      console.log('📝 You have uncommitted changes:');
      console.log(status);
      console.log('💡 Consider committing or stashing before running tests\n');
    }
  } catch (error) {
    console.log('⚠️  Not in a git repository\n');
  }
}

switch (command) {
  case 'quick':
    console.log('⚡ Quick Test (lint + build)');
    checkGitStatus();
    runCommand('npm run test:quick', 'Quick validation');
    break;
    
  case 'full':
    console.log('🔍 Full Test (lint + audit + build + validation)');
    checkGitStatus();
    runCommand('npm run test:local', 'Full local testing');
    break;
    
  case 'preview':
    console.log('👀 Preview Staging Build');
    checkGitStatus();
    if (runCommand('npm run staging:full', 'Full staging test and preview')) {
      console.log('🌐 Staging preview available at: http://localhost:3001');
      console.log('💡 Press Ctrl+C to stop the preview server');
    }
    break;
    
  case 'dev':
    console.log('🛠️  Development with Testing');
    checkGitStatus();
    runCommand('npm run dev:test', 'Development server with linting');
    break;
    
  case 'commit':
    console.log('📦 Pre-commit Testing');
    if (runCommand('npm run test:local', 'Pre-commit validation')) {
      console.log('✅ Ready to commit!');
      console.log('💡 Run: git add . && git commit -m "your message"');
    } else {
      console.log('❌ Fix issues before committing');
      process.exit(1);
    }
    break;
    
  case 'deploy':
    console.log('🚀 Deploy Workflow');
    checkGitStatus();
    if (runCommand('npm run test:local', 'Pre-deploy testing')) {
      console.log('✅ Local tests passed!');
      console.log('💡 Push to develop branch for staging deployment');
      console.log('💡 Push to main branch for production deployment');
    } else {
      console.log('❌ Fix issues before deploying');
      process.exit(1);
    }
    break;
    
  case 'status':
    console.log('📊 Development Status');
    console.log('====================');
    
    // Check git status
    try {
      const branch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
      console.log(`📍 Current branch: ${branch}`);
      
      const status = execSync('git status --porcelain', { encoding: 'utf8' });
      if (status.trim()) {
        console.log('📝 Uncommitted changes: Yes');
      } else {
        console.log('📝 Uncommitted changes: No');
      }
    } catch (error) {
      console.log('📍 Current branch: Not in git repository');
    }
    
    // Check if staging build exists
    const stagingBuild = path.join(process.cwd(), 'out');
    if (fs.existsSync(stagingBuild)) {
      console.log('🏗️  Staging build: Available');
    } else {
      console.log('🏗️  Staging build: Not available');
    }
    
    // Check dependencies
    try {
      execSync('npm list --depth=0', { stdio: 'ignore' });
      console.log('📦 Dependencies: Up to date');
    } catch (error) {
      console.log('📦 Dependencies: Need update (run npm install)');
    }
    
    console.log('\n💡 Available commands:');
    console.log('  npm run dev:workflow quick   - Quick test (lint + build)');
    console.log('  npm run dev:workflow full    - Full test (all checks)');
    console.log('  npm run dev:workflow preview - Preview staging build');
    console.log('  npm run dev:workflow dev     - Dev server with testing');
    console.log('  npm run dev:workflow commit  - Pre-commit validation');
    console.log('  npm run dev:workflow deploy  - Pre-deploy validation');
    break;
    
  default:
    console.log('🔧 Hybrid Development Workflow');
    console.log('==============================');
    console.log('This script helps you test locally before pushing to GitHub.');
    console.log('\n📋 Available commands:');
    console.log('  quick   - Quick test (lint + build) - 30 seconds');
    console.log('  full    - Full test (lint + audit + build) - 1 minute');
    console.log('  preview - Build staging and preview locally - 2 minutes');
    console.log('  dev     - Start dev server with linting');
    console.log('  commit  - Pre-commit validation');
    console.log('  deploy  - Pre-deploy validation');
    console.log('  status  - Check development status');
    console.log('\n💡 Usage: npm run dev:workflow [command]');
    console.log('\n🔄 Typical workflow:');
    console.log('  1. npm run dev:workflow quick    (while developing)');
    console.log('  2. npm run dev:workflow full     (before committing)');
    console.log('  3. npm run dev:workflow preview  (before pushing)');
    console.log('  4. git push origin develop       (triggers staging)');
    console.log('  5. Create PR to main             (triggers validation)');
}
