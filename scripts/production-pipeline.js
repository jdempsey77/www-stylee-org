#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Production Pipeline - Automated Testing & Security');
console.log('====================================================\n');

class ProductionPipeline {
  constructor() {
    this.startTime = Date.now();
    this.results = {
      linting: false,
      security: false,
      build: false,
      validation: false,
      functionality: false
    };
  }

  logStep(step, status, message) {
    const icon = status === 'success' ? '✅' : status === 'error' ? '❌' : '⏳';
    console.log(`${icon} ${step}: ${message}`);
  }

  async runLinting() {
    try {
      this.logStep('LINTING', 'pending', 'Running ESLint checks...');
      execSync('npm run lint', { stdio: 'pipe' });
      this.results.linting = true;
      this.logStep('LINTING', 'success', 'All linting checks passed');
      return true;
    } catch (error) {
      this.logStep('LINTING', 'error', 'Linting failed - fix errors before production');
      console.log('\n🔧 Linting Errors Found:');
      console.log(error.stdout.toString());
      return false;
    }
  }

  async runSecurityAudit() {
    try {
      this.logStep('SECURITY', 'pending', 'Running comprehensive security audit...');
      
      // Run advanced security scanner
      execSync('node scripts/security-scanner.js', { stdio: 'pipe' });
      
      this.results.security = true;
      this.logStep('SECURITY', 'success', 'Security audit passed - no critical vulnerabilities found');
      return true;
    } catch (error) {
      this.logStep('SECURITY', 'error', `Security check failed: ${error.message}`);
      return false;
    }
  }

  async runBuildTests() {
    try {
      this.logStep('BUILD', 'pending', 'Testing production build...');
      
      // Clean previous builds
      if (fs.existsSync('out')) {
        execSync('rm -rf out', { stdio: 'pipe' });
      }
      if (fs.existsSync('.next')) {
        execSync('rm -rf .next', { stdio: 'pipe' });
      }
      
      // Run production build
      execSync('npm run build:prod', { stdio: 'pipe' });
      
      // Validate build
      execSync('npm run validate:build', { stdio: 'pipe' });
      
      this.results.build = true;
      this.logStep('BUILD', 'success', 'Production build successful and validated');
      return true;
    } catch (error) {
      this.logStep('BUILD', 'error', `Build failed: ${error.message}`);
      return false;
    }
  }

  async runFunctionalityTests() {
    try {
      this.logStep('FUNCTIONALITY', 'pending', 'Testing core functionality...');
      
      // Test that all required pages exist and are accessible
      const requiredPages = [
        'index.html',
        'jerry/index.html',
        'jerry/resume/index.html',
        'links/index.html'
      ];
      
      for (const page of requiredPages) {
        const pagePath = path.join('out', page);
        if (!fs.existsSync(pagePath)) {
          throw new Error(`Required page missing: ${page}`);
        }
        
        // Check that page has content
        const content = fs.readFileSync(pagePath, 'utf8');
        if (content.length < 100) {
          throw new Error(`Page ${page} appears to be empty or corrupted`);
        }
        
        // Check for critical errors in HTML
        if (content.includes('<div class="error">') || 
            content.includes('Build Error') || 
            content.includes('Runtime Error')) {
          throw new Error(`Page ${page} contains error content`);
        }
      }
      
      // Test that critical assets exist
      const criticalAssets = [
        'favicon.ico',
        'favicon.svg',
        'jerry-dempsey-resume.pdf'
      ];
      
      for (const asset of criticalAssets) {
        const assetPath = path.join('public', asset);
        if (!fs.existsSync(assetPath)) {
          throw new Error(`Critical asset missing: ${asset}`);
        }
      }
      
      this.results.functionality = true;
      this.logStep('FUNCTIONALITY', 'success', 'All core functionality tests passed');
      return true;
    } catch (error) {
      this.logStep('FUNCTIONALITY', 'error', `Functionality test failed: ${error.message}`);
      return false;
    }
  }

  getSourceFiles() {
    const sourceFiles = [];
    const srcDir = path.join(__dirname, '..', 'src');
    
    const scanDirectory = (dir) => {
      const files = fs.readdirSync(dir);
      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
          scanDirectory(filePath);
        } else if (file.match(/\.(tsx?|jsx?|ts|js)$/)) {
          sourceFiles.push(filePath);
        }
      }
    };
    
    scanDirectory(srcDir);
    return sourceFiles;
  }

  async run() {
    console.log('🔄 Starting comprehensive production pipeline...\n');
    
    const steps = [
      { name: 'Linting', fn: () => this.runLinting() },
      { name: 'Security', fn: () => this.runSecurityAudit() },
      { name: 'Build', fn: () => this.runBuildTests() },
      { name: 'Functionality', fn: () => this.runFunctionalityTests() }
    ];
    
    let allPassed = true;
    
    for (const step of steps) {
      try {
        const passed = await step.fn();
        if (!passed) {
          allPassed = false;
          break; // Stop on first failure
        }
      } catch (error) {
        this.logStep(step.name.toUpperCase(), 'error', error.message);
        allPassed = false;
        break;
      }
    }
    
    const duration = ((Date.now() - this.startTime) / 1000).toFixed(2);
    
    console.log('\n' + '='.repeat(50));
    if (allPassed) {
      console.log('🎉 PRODUCTION PIPELINE PASSED');
      console.log('✅ All tests completed successfully');
      console.log('🚀 Ready for production deployment');
      console.log(`⏱️  Total time: ${duration}s`);
      console.log('\n💡 Next steps:');
      console.log('   1. Run: git add .');
      console.log('   2. Run: git commit -m "your message"');
      console.log('   3. Run: git push origin main');
    } else {
      console.log('❌ PRODUCTION PIPELINE FAILED');
      console.log('🚫 Cannot proceed to production');
      console.log('🔧 Fix the issues above before pushing');
      console.log(`⏱️  Failed after: ${duration}s`);
      process.exit(1);
    }
    console.log('='.repeat(50));
  }
}

// Run the pipeline
if (require.main === module) {
  new ProductionPipeline().run().catch(error => {
    console.error('\n💥 Pipeline crashed:', error.message);
    process.exit(1);
  });
}

module.exports = ProductionPipeline;
