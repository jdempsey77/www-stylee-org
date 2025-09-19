#!/usr/bin/env node

const { execSync } = require('child_process');
const SimpleResumePipeline = require('./simple-resume-pipeline');
const GoogleDriveAPIPipeline = require('./google-drive-api-pipeline');

console.log('🚀 Hybrid Resume Pipeline');
console.log('=========================\n');

class HybridResumePipeline {
  constructor() {
    this.simplePipeline = new SimpleResumePipeline();
    this.googleDriveApiPipeline = new GoogleDriveAPIPipeline();
  }

  async run() {
    try {
      console.log('🔄 Starting hybrid resume pipeline...\n');
      
      // Step 1: Generate website using simple pipeline (clean, no parsing issues)
      console.log('🌐 Step 1: Generating website resume page...');
      this.generateWebsiteResumePage();
      console.log('✅ Website resume page updated');
      
      // Step 2: Generate PDF directly from Google Doc (professional formatting)
      console.log('\n📄 Step 2: Generating PDF from Google Doc...');
      await this.googleDriveApiPipeline.generatePDFFromGoogleDoc();
      console.log('✅ PDF generated from Google Doc');
      
      // Step 3: Build the website
      console.log('\n🏗️  Step 3: Building website...');
      execSync('npm run build:staging', { stdio: 'inherit' });
      console.log('✅ Website built successfully');
      
      console.log('\n🎉 Hybrid resume pipeline completed successfully!');
      console.log('📝 Website updated: /jerry/resume (from clean data)');
      console.log('📄 PDF updated: /jerry-dempsey-resume.pdf (from Google Doc)');
      console.log('\n💡 Benefits of hybrid approach:');
      console.log('   ✅ Clean website with no parsing issues');
      console.log('   ✅ Professional PDF directly from Google Doc');
      console.log('   ✅ Best of both worlds!');
      
    } catch (error) {
      console.error('\n❌ Hybrid resume pipeline failed:', error.message);
      process.exit(1);
    }
  }

  // Generate website resume page using simple pipeline
  generateWebsiteResumePage() {
    console.log('⚛️  Generating clean website resume page...');
    
    // Use the simple pipeline to get the latest resume data and generate the page
    const resumeData = this.simplePipeline.getResumeData();
    const pageContent = this.simplePipeline.generateResumePage(resumeData);
    
    // Write the file using the simple pipeline's method
    const fs = require('fs');
    const path = require('path');
    const resumePagePath = path.join(__dirname, '..', 'src', 'app', 'jerry', 'resume', 'page.tsx');
    fs.writeFileSync(resumePagePath, pageContent);
    console.log('✅ Website resume page updated');
  }
}

// Run the pipeline
if (require.main === module) {
  new HybridResumePipeline().run();
}

module.exports = HybridResumePipeline;
