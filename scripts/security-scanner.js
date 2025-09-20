#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔒 Security Scanner - Advanced Threat Detection');
console.log('==============================================\n');

class SecurityScanner {
  constructor() {
    this.vulnerabilities = [];
    this.warnings = [];
    this.secretsPatterns = [
      // API Keys and Tokens
      { pattern: /api[_-]?key\s*[:=]\s*['"][^'"]+['"]/i, type: 'API_KEY', severity: 'HIGH' },
      { pattern: /access[_-]?token\s*[:=]\s*['"][^'"]+['"]/i, type: 'ACCESS_TOKEN', severity: 'HIGH' },
      { pattern: /secret[_-]?key\s*[:=]\s*['"][^'"]+['"]/i, type: 'SECRET_KEY', severity: 'CRITICAL' },
      { pattern: /private[_-]?key\s*[:=]\s*['"][^'"]+['"]/i, type: 'PRIVATE_KEY', severity: 'CRITICAL' },
      
      // Passwords
      { pattern: /password\s*[:=]\s*['"][^'"]+['"]/i, type: 'PASSWORD', severity: 'CRITICAL' },
      { pattern: /pwd\s*[:=]\s*['"][^'"]+['"]/i, type: 'PASSWORD', severity: 'CRITICAL' },
      
      // Database credentials
      { pattern: /db[_-]?password\s*[:=]\s*['"][^'"]+['"]/i, type: 'DB_PASSWORD', severity: 'HIGH' },
      { pattern: /database[_-]?url\s*[:=]\s*['"][^'"]+['"]/i, type: 'DB_URL', severity: 'HIGH' },
      
      // OAuth and JWT
      { pattern: /oauth[_-]?secret\s*[:=]\s*['"][^'"]+['"]/i, type: 'OAUTH_SECRET', severity: 'HIGH' },
      { pattern: /jwt[_-]?secret\s*[:=]\s*['"][^'"]+['"]/i, type: 'JWT_SECRET', severity: 'HIGH' },
      
      // Cloud credentials
      { pattern: /aws[_-]?secret[_-]?access[_-]?key\s*[:=]\s*['"][^'"]+['"]/i, type: 'AWS_SECRET', severity: 'CRITICAL' },
      { pattern: /azure[_-]?key\s*[:=]\s*['"][^'"]+['"]/i, type: 'AZURE_KEY', severity: 'HIGH' },
      { pattern: /gcp[_-]?key\s*[:=]\s*['"][^'"]+['"]/i, type: 'GCP_KEY', severity: 'HIGH' }
    ];
    
    this.dangerousPatterns = [
      // Dangerous functions
      { pattern: /eval\s*\(/g, type: 'EVAL_USAGE', severity: 'HIGH', description: 'eval() usage detected' },
      { pattern: /innerHTML\s*=/g, type: 'INNER_HTML', severity: 'MEDIUM', description: 'innerHTML assignment (potential XSS)' },
      { pattern: /document\.write\s*\(/g, type: 'DOCUMENT_WRITE', severity: 'MEDIUM', description: 'document.write() usage' },
      
      // Unsafe redirects
      { pattern: /window\.location\s*=\s*[^'"]*[\+\$]/g, type: 'UNSAFE_REDIRECT', severity: 'HIGH', description: 'Potential unsafe redirect' },
      
      // Console logs with sensitive data
      { pattern: /console\.log\s*\(\s*['"][^'"]*(password|token|key|secret)[^'"]*['"]/i, type: 'CONSOLE_LOG_SECRET', severity: 'MEDIUM', description: 'Potential sensitive data in console.log' }
    ];
  }

  scanFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const relativePath = path.relative(process.cwd(), filePath);
      
      // Check for secrets
      this.secretsPatterns.forEach(({ pattern, type, severity }) => {
        const matches = content.match(pattern);
        if (matches) {
          matches.forEach(match => {
            this.vulnerabilities.push({
              file: relativePath,
              type,
              severity,
              match: match.substring(0, 50) + '...',
              description: `${type} detected in source code`
            });
          });
        }
      });
      
      // Check for dangerous patterns
      this.dangerousPatterns.forEach(({ pattern, type, severity, description }) => {
        const matches = content.match(pattern);
        if (matches) {
          matches.forEach(match => {
            this.warnings.push({
              file: relativePath,
              type,
              severity,
              match: match.substring(0, 50) + '...',
              description
            });
          });
        }
      });
      
      // Check for hardcoded URLs that might be sensitive
      const hardcodedUrls = content.match(/https?:\/\/[^\s'"]+/g);
      if (hardcodedUrls) {
        hardcodedUrls.forEach(url => {
          if (url.includes('localhost') || url.includes('127.0.0.1') || url.includes('staging')) {
            this.warnings.push({
              file: relativePath,
              type: 'HARDCODED_URL',
              severity: 'LOW',
              match: url,
              description: 'Hardcoded local/staging URL detected'
            });
          }
        });
      }
      
    } catch (error) {
      console.warn(`⚠️  Could not scan ${filePath}: ${error.message}`);
    }
  }

  scanDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        this.scanDirectory(filePath);
      } else if (file.match(/\.(tsx?|jsx?|ts|js|json|env|config)$/)) {
        this.scanFile(filePath);
      }
    });
  }

  async runNpmAudit() {
    try {
      console.log('🔍 Running npm audit...');
      const result = execSync('npm audit --json', { encoding: 'utf8' });
      const audit = JSON.parse(result);
      
      if (audit.vulnerabilities) {
        Object.entries(audit.vulnerabilities).forEach(([name, vuln]) => {
          if (vuln.severity === 'high' || vuln.severity === 'critical') {
            this.vulnerabilities.push({
              file: 'package.json',
              type: 'NPM_VULNERABILITY',
              severity: vuln.severity.toUpperCase(),
              match: `${name}@${vuln.version}`,
              description: vuln.title || 'NPM package vulnerability'
            });
          }
        });
      }
    } catch (error) {
      console.warn('⚠️  npm audit failed:', error.message);
    }
  }

  generateReport() {
    console.log('\n📊 Security Scan Report');
    console.log('========================\n');
    
    if (this.vulnerabilities.length === 0 && this.warnings.length === 0) {
      console.log('✅ No security issues found!');
      return true;
    }
    
    // Group by severity
    const critical = this.vulnerabilities.filter(v => v.severity === 'CRITICAL');
    const high = this.vulnerabilities.filter(v => v.severity === 'HIGH');
    const medium = [...this.vulnerabilities.filter(v => v.severity === 'MEDIUM'), ...this.warnings.filter(w => w.severity === 'MEDIUM')];
    const low = [...this.vulnerabilities.filter(v => v.severity === 'LOW'), ...this.warnings.filter(w => w.severity === 'LOW')];
    
    if (critical.length > 0) {
      console.log('🚨 CRITICAL ISSUES:');
      critical.forEach(v => {
        console.log(`   • ${v.file}: ${v.type} - ${v.description}`);
        console.log(`     ${v.match}`);
      });
      console.log('');
    }
    
    if (high.length > 0) {
      console.log('⚠️  HIGH SEVERITY:');
      high.forEach(v => {
        console.log(`   • ${v.file}: ${v.type} - ${v.description}`);
        console.log(`     ${v.match}`);
      });
      console.log('');
    }
    
    if (medium.length > 0) {
      console.log('⚠️  MEDIUM SEVERITY:');
      medium.forEach(v => {
        console.log(`   • ${v.file}: ${v.type} - ${v.description}`);
      });
      console.log('');
    }
    
    if (low.length > 0) {
      console.log('ℹ️  LOW SEVERITY:');
      low.forEach(v => {
        console.log(`   • ${v.file}: ${v.type} - ${v.description}`);
      });
      console.log('');
    }
    
    // Summary
    console.log('📈 Summary:');
    console.log(`   Critical: ${critical.length}`);
    console.log(`   High: ${high.length}`);
    console.log(`   Medium: ${medium.length}`);
    console.log(`   Low: ${low.length}`);
    console.log(`   Total: ${this.vulnerabilities.length + this.warnings.length}`);
    
    // Return true only if no critical or high severity issues
    return critical.length === 0 && high.length === 0;
  }

  async run() {
    console.log('🔍 Scanning source code for security issues...\n');
    
    // Scan source files
    this.scanDirectory('src');
    
    // Scan configuration files
    ['package.json', 'next.config.ts', '.env.local', '.env.example'].forEach(file => {
      if (fs.existsSync(file)) {
        this.scanFile(file);
      }
    });
    
    // Run npm audit
    await this.runNpmAudit();
    
    // Generate report
    const passed = this.generateReport();
    
    if (!passed) {
      console.log('\n❌ Security scan failed - fix issues before production');
      process.exit(1);
    } else {
      console.log('\n✅ Security scan passed - no critical issues found');
    }
  }
}

// Run the scanner
if (require.main === module) {
  new SecurityScanner().run().catch(error => {
    console.error('\n💥 Security scanner crashed:', error.message);
    process.exit(1);
  });
}

module.exports = SecurityScanner;
