#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🧪 Google Drive API Setup Test');
console.log('==============================\n');

class GoogleDriveSetupTest {
  constructor() {
    this.credentialsPath = path.join(__dirname, '..', 'credentials.json');
    this.tokenPath = path.join(__dirname, '..', 'token.json');
  }

  run() {
    console.log('🔍 Checking Google Drive API setup...\n');
    
    let allGood = true;
    
    // Check 1: Google APIs package
    console.log('1️⃣  Checking googleapis package...');
    try {
      require('googleapis');
      console.log('   ✅ googleapis package installed');
    } catch (error) {
      console.log('   ❌ googleapis package not found');
      console.log('   💡 Run: npm install googleapis --save');
      allGood = false;
    }
    
    // Check 2: Credentials file
    console.log('\n2️⃣  Checking credentials.json...');
    if (fs.existsSync(this.credentialsPath)) {
      console.log('   ✅ credentials.json found');
      
      try {
        const credentials = JSON.parse(fs.readFileSync(this.credentialsPath));
        
        if (credentials.client_id && credentials.client_secret) {
          console.log('   ✅ Credentials file appears valid');
        } else {
          console.log('   ⚠️  Credentials file may be incomplete');
          console.log('   💡 Make sure it contains client_id and client_secret');
        }
      } catch (error) {
        console.log('   ❌ Credentials file is not valid JSON');
        allGood = false;
      }
    } else {
      console.log('   ❌ credentials.json not found');
      console.log('   💡 Download from Google Cloud Console');
      allGood = false;
    }
    
    // Check 3: Environment variable
    console.log('\n3️⃣  Checking GOOGLE_DOC_ID...');
    const docId = process.env.GOOGLE_DOC_ID;
    if (docId && docId !== 'YOUR_GOOGLE_DOC_ID_HERE') {
      console.log('   ✅ GOOGLE_DOC_ID is set');
      console.log(`   📄 Document ID: ${docId}`);
    } else {
      console.log('   ❌ GOOGLE_DOC_ID not set');
      console.log('   💡 Set it with: export GOOGLE_DOC_ID="your_document_id"');
      allGood = false;
    }
    
    // Check 4: Authentication token
    console.log('\n4️⃣  Checking authentication token...');
    if (fs.existsSync(this.tokenPath)) {
      console.log('   ✅ Authentication token found');
      console.log('   💡 You should be able to run the pipeline');
    } else {
      console.log('   ⚠️  No authentication token found');
      console.log('   💡 Run the pipeline once to authenticate');
    }
    
    // Summary
    console.log('\n📊 Setup Status:');
    if (allGood) {
      console.log('   🎉 All checks passed! You\'re ready to use the Google Drive API pipeline.');
      console.log('\n💡 Next steps:');
      console.log('   1. Run: npm run resume:google-api');
      console.log('   2. Follow the authentication prompts');
      console.log('   3. Your resume will be automatically updated!');
    } else {
      console.log('   ⚠️  Some setup steps are missing. Please complete them first.');
      console.log('\n💡 Setup checklist:');
      console.log('   1. Install googleapis: npm install googleapis --save');
      console.log('   2. Download credentials.json from Google Cloud Console');
      console.log('   3. Set GOOGLE_DOC_ID environment variable');
      console.log('   4. Run the pipeline to authenticate');
    }
    
    console.log('\n📚 For detailed setup instructions, see: GOOGLE_DRIVE_API_SETUP.md');
  }
}

// Run the test
new GoogleDriveSetupTest().run();
