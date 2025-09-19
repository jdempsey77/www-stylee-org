#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Validating build artifacts...');

const outDir = path.join(process.cwd(), 'out');

// Check if build directory exists
if (!fs.existsSync(outDir)) {
  console.error('❌ Build failed: No output directory found');
  process.exit(1);
}

// Critical files that must exist
const criticalFiles = [
  'index.html',
  'jerry/index.html',
  'links/index.html',
  'jerry/resume/index.html',
  'favicon.ico',
  'favicon.svg'
];

// Check critical files
for (const file of criticalFiles) {
  const filePath = path.join(outDir, file);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Build failed: Missing critical file ${file}`);
    process.exit(1);
  }
}

// Check for build artifacts
const buildArtifacts = [
  '_next',
  '_next/static'
];

for (const artifact of buildArtifacts) {
  const artifactPath = path.join(outDir, artifact);
  if (!fs.existsSync(artifactPath)) {
    console.error(`❌ Build failed: Missing build artifact ${artifact}`);
    process.exit(1);
  }
}

// Check file sizes (basic validation)
const indexHtmlPath = path.join(outDir, 'index.html');
const indexHtmlStats = fs.statSync(indexHtmlPath);
if (indexHtmlStats.size < 1000) {
  console.error('❌ Build failed: index.html seems too small');
  process.exit(1);
}

// Check for common build errors in HTML
const indexHtmlContent = fs.readFileSync(indexHtmlPath, 'utf8');
// Check for actual error messages, not JSON data or Next.js internals
if (indexHtmlContent.includes('<div class="error">') || 
    indexHtmlContent.includes('Error:') || 
    indexHtmlContent.includes('Build Error') ||
    indexHtmlContent.includes('Runtime Error')) {
  console.error('❌ Build failed: HTML contains error messages');
  process.exit(1);
}

// Check for broken links or missing assets
if (indexHtmlContent.includes('undefined') || indexHtmlContent.includes('null')) {
  console.warn('⚠️  Warning: HTML contains undefined/null values');
}

console.log('✅ Build validation passed!');
console.log(`📁 Build size: ${getDirectorySize(outDir) / 1024 / 1024} MB`);

function getDirectorySize(dirPath) {
  let size = 0;
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      size += getDirectorySize(filePath);
    } else {
      size += stats.size;
    }
  }
  
  return size;
}
