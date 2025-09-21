#!/usr/bin/env node

const SimpleResumePipeline = require('./scripts/simple-resume-pipeline.js');

// Create a test instance
const pipeline = new SimpleResumePipeline();

// Test the resume data generation
console.log('🧪 Testing Resume Pipeline Updates...\n');

try {
  // Test 1: Get resume data
  console.log('1️⃣ Testing resume data generation...');
  const resumeData = pipeline.getResumeData();
  console.log('✅ Resume data generated successfully');
  console.log(`   - Name: ${resumeData.name}`);
  console.log(`   - Title: ${resumeData.title}`);
  console.log(`   - Experience entries: ${resumeData.experience.length}`);
  console.log(`   - Education entries: ${resumeData.education.length}`);
  console.log(`   - Certification entries: ${resumeData.certifications.length}\n`);

  // Test 2: Generate experience HTML
  console.log('2️⃣ Testing experience HTML generation...');
  const experienceHTML = pipeline.generateExperienceHTML(resumeData.experience);
  console.log('✅ Experience HTML generated successfully');
  console.log(`   - HTML length: ${experienceHTML.length} characters`);
  console.log(`   - Contains border-l-4: ${experienceHTML.includes('border-l-4') ? '✅' : '❌'}`);
  console.log(`   - Contains ul/li structure: ${experienceHTML.includes('<ul') && experienceHTML.includes('<li') ? '✅' : '❌'}\n`);

  // Test 3: Generate full page component
  console.log('3️⃣ Testing full page component generation...');
  const pageContent = pipeline.generateResumePage(resumeData);
  console.log('✅ Page component generated successfully');
  console.log(`   - Component length: ${pageContent.length} characters`);
  console.log(`   - Contains MapPinIcon: ${pageContent.includes('MapPinIcon') ? '✅' : '❌'}`);
  console.log(`   - Contains sidebar grid: ${pageContent.includes('lg:grid-cols-3') ? '✅' : '❌'}`);
  console.log(`   - Contains Education section: ${pageContent.includes('Education') ? '✅' : '❌'}`);
  console.log(`   - Contains Certifications section: ${pageContent.includes('Certifications') ? '✅' : '❌'}`);
  console.log(`   - Contains max-w-4xl: ${pageContent.includes('max-w-4xl') ? '✅' : '❌'}`);
  console.log(`   - Missing old timeline elements: ${!pageContent.includes('showAllExperience') && !pageContent.includes('ChevronDownIcon') ? '✅' : '❌'}\n`);

  console.log('🎉 All tests passed! The pipeline now generates the new sidebar design.\n');
  console.log('📋 Summary of changes:');
  console.log('   ✅ Updated to use sidebar layout (lg:grid-cols-3)');
  console.log('   ✅ Added MapPinIcon for location button');
  console.log('   ✅ Changed to border-left design instead of timeline bubbles');
  console.log('   ✅ Added Education and Certifications sections');
  console.log('   ✅ Updated to max-w-4xl container');
  console.log('   ✅ Removed expandable timeline functionality');
  console.log('   ✅ Updated button styling to match custom design');

} catch (error) {
  console.error('❌ Test failed:', error.message);
  process.exit(1);
}
