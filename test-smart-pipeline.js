#!/usr/bin/env node

const SmartResumePipeline = require('./scripts/smart-resume-pipeline');

console.log('🧪 Testing Smart Resume Pipeline - Website Generation Only');
console.log('=========================================================\n');

class TestSmartPipeline extends SmartResumePipeline {
  async run() {
    try {
      console.log('🔄 Testing smart pipeline (website generation only)...\n');
      
      // Skip Google Docs check and PDF generation for testing
      console.log('📝 Simulating resume content change...');
      
      // Step 1: Generate website resume page
      console.log('🌐 Step 1: Generating website resume page...');
      this.generateWebsitePage();
      
      console.log('\n🎉 Test completed successfully!');
      console.log('📝 Website updated: /jerry/resume');
      console.log('\n💡 Check your local server at: http://localhost:3000/jerry/resume');
      console.log('   - Timeline design with colored bubbles');
      console.log('   - Gradient header background');
      console.log('   - Responsive sticky download banner');
      console.log('   - Show More/Less functionality');
      console.log('   - Hover effects on timeline bubbles');
      
    } catch (error) {
      console.error('\n❌ Test failed:', error.message);
      process.exit(1);
    }
  }
}

// Run the test
const testPipeline = new TestSmartPipeline();
testPipeline.run();
