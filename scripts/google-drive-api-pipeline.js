#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Google Drive API Resume Pipeline');
console.log('===================================\n');

class GoogleDriveAPIPipeline {
  constructor() {
    this.resumePagePath = path.join(__dirname, '..', 'src', 'app', 'jerry', 'resume', 'page.tsx');
    this.publicPath = path.join(__dirname, '..', 'public', 'jerry-dempsey-resume.pdf');
    this.outPath = path.join(__dirname, '..', 'out', 'jerry-dempsey-resume.pdf');
    this.credentialsPath = path.join(__dirname, '..', 'credentials.json');
    this.tokenPath = path.join(__dirname, '..', 'token.json');
    
    // Google Drive document ID (you'll need to set this)
    this.documentId = process.env.GOOGLE_DOC_ID || 'YOUR_GOOGLE_DOC_ID_HERE';
    
    // Check if required dependencies are installed
    this.checkDependencies();
  }

  checkDependencies() {
    console.log('🔍 Checking dependencies...');
    
    try {
      require('googleapis');
      console.log('✅ googleapis package found');
    } catch (error) {
      console.log('❌ googleapis package not found');
      console.log('💡 Install it with: npm install googleapis');
      console.log('💡 Or run: npm install googleapis --save');
      process.exit(1);
    }
  }

  async authenticate() {
    console.log('🔐 Authenticating with Google Drive API...');
    
    try {
      const { google } = require('googleapis');
      
      // Load credentials
      if (!fs.existsSync(this.credentialsPath)) {
        console.log('❌ credentials.json not found');
        console.log('💡 Please download your Google Drive API credentials:');
        console.log('   1. Go to: https://console.cloud.google.com/');
        console.log('   2. Create a new project or select existing');
        console.log('   3. Enable Google Drive API');
        console.log('   4. Create credentials (Service Account or OAuth2)');
        console.log('   5. Download credentials.json to project root');
        console.log('   6. Set GOOGLE_DOC_ID environment variable');
        process.exit(1);
      }

      const credentials = JSON.parse(fs.readFileSync(this.credentialsPath));
      
      // Handle both formats: direct credentials or nested under 'installed'
      const creds = credentials.installed || credentials;
      
      // Create OAuth2 client
      const oauth2Client = new google.auth.OAuth2(
        creds.client_id,
        creds.client_secret,
        creds.redirect_uris[0]
      );

      // Check if we have a stored token
      if (fs.existsSync(this.tokenPath)) {
        const token = JSON.parse(fs.readFileSync(this.tokenPath));
        oauth2Client.setCredentials(token);
        console.log('✅ Using stored authentication token');
      } else {
        console.log('❌ No authentication token found');
        console.log('💡 You need to authenticate first:');
        console.log('   1. Run this script once to get authentication URL');
        console.log('   2. Visit the URL and authorize the app');
        console.log('   3. Copy the authorization code');
        console.log('   4. Run the script again with the code');
        
        // Generate authentication URL
        const authUrl = oauth2Client.generateAuthUrl({
          access_type: 'offline',
          scope: ['https://www.googleapis.com/auth/drive.readonly']
        });
        
        console.log('\n🔗 Please visit this URL to authorize the app:');
        console.log(authUrl);
        console.log('\n💡 After authorization, you&apos;ll get a code. Run:');
        console.log('   GOOGLE_AUTH_CODE=your_code npm run resume:google-api');
        
        process.exit(0);
      }

      return oauth2Client;
    } catch (error) {
      console.error('❌ Authentication failed:', error.message);
      throw error;
    }
  }

  async downloadFromGoogleDrive() {
    console.log('📥 Downloading resume from Google Drive...');
    
    try {
      const { google } = require('googleapis');
      const auth = await this.authenticate();
      
      const drive = google.drive({ version: 'v3', auth });
      
      // Get document metadata
      console.log(`📄 Fetching document: ${this.documentId}`);
      const file = await drive.files.get({
        fileId: this.documentId,
        fields: 'name, mimeType, modifiedTime'
      });
      
      console.log(`✅ Found document: ${file.data.name}`);
      console.log(`📅 Last modified: ${file.data.modifiedTime}`);
      
      // Export document as plain text
      const response = await drive.files.export({
        fileId: this.documentId,
        mimeType: 'text/plain'
      });
      
      const content = response.data;
      console.log('✅ Document content downloaded');
      
      // Parse the content into structured resume data
      return this.parseGoogleDocContent(content);
      
    } catch (error) {
      console.error('❌ Error downloading from Google Drive:', error.message);
      
      if (error.message.includes('File not found')) {
        console.log('💡 Make sure your Google Doc ID is correct');
        console.log('💡 The ID is in the URL: https://docs.google.com/document/d/[DOC_ID]/edit');
      }
      
      throw error;
    }
  }

  parseGoogleDocContent(content) {
    console.log('📄 Parsing Google Doc content...');
    
    const lines = content.split('\n').map(line => line.trim()).filter(line => line);
    
    const resumeData = {
      name: '',
      title: '',
      email: '',
      location: '',
      summary: '',
      experience: [],
      education: [],
      certifications: [],
      skills: []
    };

    let currentSection = '';
    let currentExperience = null;
    let summaryLines = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Detect sections
      if (line.toLowerCase().includes('contact') || line.toLowerCase().includes('jerry dempsey')) {
        currentSection = 'header';
        continue;
      } else if (line.toLowerCase().includes('professional summary') || line.toLowerCase().includes('summary')) {
        currentSection = 'summary';
        continue;
      } else if (line.toLowerCase().includes('experience') || line.toLowerCase().includes('professional experience')) {
        currentSection = 'experience';
        continue;
      } else if (line.toLowerCase().includes('education')) {
        currentSection = 'education';
        continue;
      } else if (line.toLowerCase().includes('certification') || line.toLowerCase().includes('certification')) {
        currentSection = 'certifications';
        continue;
      } else if (line.toLowerCase().includes('skill') || line.toLowerCase().includes('technical')) {
        currentSection = 'skills';
        continue;
      }
      
      // Parse header information
      if (currentSection === 'header') {
        if (line.includes('@') && line.includes('.')) {
          resumeData.email = line;
        } else if (line.includes(',') && (line.includes('GA') || line.includes('Georgia'))) {
          resumeData.location = line;
        } else if (line.length > 10 && !line.includes('@') && !line.includes(',')) {
          if (!resumeData.name) {
            resumeData.name = line;
          } else if (!resumeData.title) {
            resumeData.title = line;
          }
        }
      }
      
      // Parse summary
      if (currentSection === 'summary' && line && !line.toLowerCase().includes('experience')) {
        summaryLines.push(line);
      }
      
      // Parse experience
      if (currentSection === 'experience') {
        // Check if this looks like a job title
        if (line.length > 10 && !line.startsWith('-') && !line.includes('@') && !line.includes('•')) {
          if (currentExperience) {
            resumeData.experience.push(currentExperience);
          }
          currentExperience = {
            title: line,
            company: '',
            location: '',
            dates: '',
            bullets: []
          };
        } else if (line.includes('|') || (line.includes('–') && line.includes('Present'))) {
          // This looks like company, location, dates
          if (currentExperience) {
            const parts = line.split('|');
            if (parts.length >= 2) {
              currentExperience.company = parts[0].trim();
              currentExperience.location = parts[1].trim();
              currentExperience.dates = parts[2]?.trim() || '';
            }
          }
        } else if (line.startsWith('-') || line.startsWith('•')) {
          // This is a bullet point
          if (currentExperience) {
            currentExperience.bullets.push(line.replace(/^[-•]\s*/, '').trim());
          }
        }
      }
      
      // Parse education
      if (currentSection === 'education' && (line.startsWith('-') || line.startsWith('•'))) {
        resumeData.education.push(line.replace(/^[-•]\s*/, '').trim());
      }
      
      // Parse certifications
      if (currentSection === 'certifications' && (line.startsWith('-') || line.startsWith('•'))) {
        resumeData.certifications.push(line.replace(/^[-•]\s*/, '').trim());
      }
      
      // Parse skills
      if (currentSection === 'skills' && (line.startsWith('-') || line.startsWith('•'))) {
        resumeData.skills.push(line.replace(/^[-•]\s*/, '').trim());
      }
    }

    // Don't forget the last experience entry
    if (currentExperience) {
      resumeData.experience.push(currentExperience);
    }

    // Join summary lines
    resumeData.summary = summaryLines.join(' ');

    // Set defaults if not found
    if (!resumeData.name) resumeData.name = 'Jerry Dempsey';
    if (!resumeData.title) resumeData.title = 'Product and Application Security Leader';
    if (!resumeData.email) resumeData.email = 'jerry@stylee.org';
    if (!resumeData.location) resumeData.location = 'Roswell, GA';

    console.log('✅ Google Doc content parsed successfully');
    console.log(`📊 Found ${resumeData.experience.length} experience entries`);
    console.log(`📊 Found ${resumeData.education.length} education entries`);
    console.log(`📊 Found ${resumeData.certifications.length} certifications`);

    return resumeData;
  }

  // Generate the React component for the resume page
  generateResumePage(resumeData) {
    console.log('⚛️  Generating resume page component...');
    
    const componentContent = `import { 
  BriefcaseIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

export default function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              ${resumeData.name}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 font-semibold">
              ${resumeData.title}
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
              ${resumeData.summary.replace(/'/g, '&apos;').replace(/"/g, '&quot;')}
            </p>
            
            {/* Contact Information */}
            <div className="flex flex-wrap justify-center gap-3">
              <a 
                href="mailto:${resumeData.email}"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-600 px-4 py-2 text-white hover:bg-slate-700 transition-colors"
              >
                <EnvelopeIcon className="w-5 h-5" />
                Email
              </a>
              <a 
                href="https://www.google.com/maps/place/${resumeData.location.replace(/\s+/g, '+')}"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-700 px-4 py-2 text-white hover:bg-slate-800 transition-colors"
              >
                <MapPinIcon className="w-5 h-5" />
                ${resumeData.location}
              </a>
              <a 
                href="/jerry-dempsey-resume.pdf"
                download="Jerry-Dempsey-Resume.pdf"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-white hover:bg-slate-900 transition-colors"
              >
                <DocumentTextIcon className="w-5 h-5" />
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Content */}
      <section className="py-12 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Professional Summary */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                  <BriefcaseIcon className="w-6 h-6 mr-3 text-gray-600 dark:text-gray-400" />
                  Professional Summary
                </h2>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  ${resumeData.summary.replace(/'/g, '&apos;').replace(/"/g, '&quot;')}
                </p>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                  <BriefcaseIcon className="w-6 h-6 mr-3 text-gray-600 dark:text-gray-400" />
                  Professional Experience
                </h2>
                
                <div className="space-y-6">
                  ${this.generateExperienceHTML(resumeData.experience)}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              ${this.generateSidebarHTML(resumeData)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}`;

    return componentContent;
  }

  // Generate HTML for experience section
  generateExperienceHTML(experience) {
    const colors = ['border-slate-600', 'border-gray-600', 'border-green-600', 'border-cyan-600', 'border-purple-600'];
    
    return experience.map((job, index) => `
                  <div className="border-l-4 ${colors[index % colors.length]} pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      ${job.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ${job.company}, ${job.location} | ${job.dates}
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      ${job.bullets.map(bullet => `<li>• ${bullet.replace(/'/g, '&apos;').replace(/"/g, '&quot;')}</li>`).join('\n                      ')}
                    </ul>
                  </div>`).join('\n');
  }

  // Generate HTML for sidebar
  generateSidebarHTML(resumeData) {
    return `
              {/* Education */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                  <BriefcaseIcon className="w-6 h-6 mr-3 text-gray-600 dark:text-gray-400" />
                  Education
                </h3>
                <div className="space-y-2">
                  ${resumeData.education.map(edu => `<p className="text-slate-700 dark:text-slate-300">${edu}</p>`).join('\n                  ')}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                  <BriefcaseIcon className="w-6 h-6 mr-3 text-gray-600 dark:text-gray-400" />
                  Certifications
                </h3>
                <ul className="space-y-2">
                  ${resumeData.certifications.map(cert => `<li className="text-slate-700 dark:text-slate-300">• ${cert}</li>`).join('\n                  ')}
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                  <BriefcaseIcon className="w-6 h-6 mr-3 text-gray-600 dark:text-gray-400" />
                  Skills
                </h3>
                <ul className="space-y-2">
                  ${resumeData.skills.map(skill => `<li className="text-slate-700 dark:text-slate-300">• ${skill}</li>`).join('\n                  ')}
                </ul>
              </div>`;
  }

  // Generate PDF directly from Google Doc content
  async generatePDFFromGoogleDoc() {
    console.log('📄 Generating PDF directly from Google Doc...');
    
    try {
      const { google } = require('googleapis');
      const auth = await this.authenticate();
      const drive = google.drive({ version: 'v3', auth });
      
      // Export Google Doc as HTML for better formatting
      const response = await drive.files.export({
        fileId: this.documentId,
        mimeType: 'text/html'
      });
      
      const htmlContent = response.data;
      console.log('✅ Google Doc exported as HTML');
      
      // Create a clean HTML file for PDF generation
      const cleanHtml = this.cleanGoogleDocHTML(htmlContent);
      const htmlPath = path.join(__dirname, '..', 'temp-resume.html');
      
      fs.writeFileSync(htmlPath, cleanHtml);
      
      // Use Puppeteer to generate PDF from clean HTML
      const puppeteer = require('puppeteer');
      const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });
      
      const page = await browser.newPage();
      await page.setViewport({
        width: 1200,
        height: 800,
        deviceScaleFactor: 2
      });
      
      await page.goto(`file://${htmlPath}`, {
        waitUntil: 'networkidle0',
        timeout: 30000
      });
      
      const pdf = await page.pdf({
        path: this.publicPath,
        format: 'A4',
        printBackground: true,
        margin: {
          top: '0.5in',
          right: '0.5in',
          bottom: '0.5in',
          left: '0.5in'
        }
      });
      
      await browser.close();
      
      // Copy to out directory
      fs.copyFileSync(this.publicPath, this.outPath);
      
      // Clean up temp file
      fs.unlinkSync(htmlPath);
      
      console.log('✅ PDF generated directly from Google Doc');
    } catch (error) {
      console.error('❌ Error generating PDF from Google Doc:', error.message);
      throw error;
    }
  }

  // Clean and style the Google Doc HTML for PDF generation
  cleanGoogleDocHTML(htmlContent) {
    console.log('🧹 Cleaning Google Doc HTML...');
    
    // Extract the body content and add professional styling
    const cleanHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jerry Dempsey - Resume</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            line-height: 1.6; 
            color: #334155; 
            background: white; 
            padding: 40px; 
            max-width: 1200px; 
            margin: 0 auto; 
            font-size: 14px;
        }
        
        /* Clean up Google Doc formatting */
        p { margin-bottom: 8px; }
        h1, h2, h3 { 
            color: #1e293b; 
            margin-bottom: 15px; 
            margin-top: 20px;
        }
        h1 { 
            font-size: 2.5rem; 
            font-weight: bold; 
            text-align: center; 
            margin-bottom: 10px;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 15px;
        }
        h2 { 
            font-size: 1.8rem; 
            font-weight: bold; 
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 8px;
        }
        h3 { 
            font-size: 1.4rem; 
            font-weight: 600;
            margin-top: 25px;
            margin-bottom: 10px;
        }
        
        /* Professional styling */
        .contact-info {
            text-align: center;
            margin-bottom: 30px;
            color: #64748b;
            font-size: 1.1rem;
        }
        
        ul { margin-left: 20px; margin-bottom: 15px; }
        li { margin-bottom: 5px; }
        
        /* Remove Google Doc specific elements */
        .google-doc-header,
        .google-doc-footer,
        .page-break,
        [style*="page-break"] {
            display: none !important;
        }
        
        /* Ensure clean page breaks */
        @media print {
            body { padding: 20px; }
            h1, h2 { page-break-after: avoid; }
            ul, ol { page-break-inside: avoid; }
        }
        
        /* Professional color scheme */
        .company { color: #64748b; font-weight: 500; }
        .dates { color: #64748b; font-style: italic; }
        
        /* Clean up any remaining Google Doc artifacts */
        [class*="google"] { display: none; }
        [id*="google"] { display: none; }
    </style>
</head>
<body>
    ${this.extractBodyContent(htmlContent)}
</body>
</html>`;

    return cleanHtml;
  }

  // Extract just the body content from Google Doc HTML
  extractBodyContent(htmlContent) {
    // Remove Google Doc wrapper and extract content
    let content = htmlContent;
    
    // Remove Google Doc specific tags and classes
    content = content.replace(/<[^>]*class="[^"]*google[^"]*"[^>]*>/gi, '');
    content = content.replace(/<[^>]*id="[^"]*google[^"]*"[^>]*>/gi, '');
    
    // Extract content between body tags or main content area
    const bodyMatch = content.match(/<body[^>]*>(.*?)<\/body>/is);
    if (bodyMatch) {
      content = bodyMatch[1];
    }
    
    // Clean up any remaining Google Doc specific elements
    content = content.replace(/<div[^>]*class="[^"]*docs[^"]*"[^>]*>/gi, '');
    content = content.replace(/<span[^>]*class="[^"]*docs[^"]*"[^>]*>/gi, '');
    
    // Remove empty paragraphs and divs
    content = content.replace(/<p[^>]*>\s*<\/p>/gi, '');
    content = content.replace(/<div[^>]*>\s*<\/div>/gi, '');
    
    return content;
  }

  // Generate HTML for PDF
  generatePDFHTML(resumeData) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jerry Dempsey - Resume</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #334155; background: white; padding: 40px; max-width: 1200px; margin: 0 auto; }
        .header { text-align: center; margin-bottom: 40px; border-bottom: 2px solid #e2e8f0; padding-bottom: 30px; }
        .header h1 { font-size: 3rem; font-weight: bold; color: #1e293b; margin-bottom: 10px; }
        .header .title { font-size: 1.5rem; color: #64748b; font-weight: 600; margin-bottom: 20px; }
        .header .summary { font-size: 1.1rem; color: #475569; max-width: 800px; margin: 0 auto 20px; }
        .contact { font-size: 1rem; color: #64748b; }
        .content { display: grid; grid-template-columns: 2fr 1fr; gap: 40px; }
        .main-content h2 { font-size: 2rem; font-weight: bold; color: #1e293b; margin-bottom: 30px; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; }
        .experience { margin-bottom: 40px; }
        .job { border-left: 4px solid #64748b; padding-left: 24px; margin-bottom: 30px; }
        .job h3 { font-size: 1.4rem; font-weight: 600; color: #1e293b; margin-bottom: 5px; }
        .job .company { color: #64748b; font-weight: 500; margin-bottom: 15px; }
        .job ul { list-style: none; padding-left: 0; }
        .job li { margin-bottom: 8px; color: #475569; }
        .sidebar h3 { font-size: 1.5rem; font-weight: bold; color: #1e293b; margin-bottom: 20px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; }
        .sidebar ul { list-style: none; padding-left: 0; }
        .sidebar li { margin-bottom: 6px; color: #475569; }
        .section { margin-bottom: 30px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>${resumeData.name}</h1>
        <p class="title">${resumeData.title}</p>
        <p class="summary">${resumeData.summary}</p>
        <div class="contact">${resumeData.email} • ${resumeData.location}</div>
    </div>

    <div class="content">
        <div class="main-content">
            <h2>Professional Experience</h2>
            ${resumeData.experience.map(job => `
            <div class="job">
                <h3>${job.title}</h3>
                <p class="company">${job.company}, ${job.location} | ${job.dates}</p>
                <ul>
                    ${job.bullets.map(bullet => `<li>• ${bullet}</li>`).join('')}
                </ul>
            </div>`).join('')}
        </div>

        <div class="sidebar">
            <div class="section">
                <h3>Education</h3>
                ${resumeData.education.map(edu => `<p>${edu}</p>`).join('')}
            </div>
            <div class="section">
                <h3>Certifications</h3>
                <ul>
                    ${resumeData.certifications.map(cert => `<li>• ${cert}</li>`).join('')}
                </ul>
            </div>
            <div class="section">
                <h3>Skills</h3>
                <ul>
                    ${resumeData.skills.map(skill => `<li>• ${skill}</li>`).join('')}
                </ul>
            </div>
        </div>
    </div>
</body>
</html>`;
  }

  // Main pipeline execution
  async run() {
    try {
      console.log('🔄 Starting Google Drive API resume pipeline...\n');
      
      // Step 1: Download from Google Drive
      const resumeData = await this.downloadFromGoogleDrive();
      
      // Step 2: Generate website resume page
      console.log('🌐 Generating website resume page...');
      const componentContent = this.generateResumePage(resumeData);
      fs.writeFileSync(this.resumePagePath, componentContent);
      console.log('✅ Website resume page updated');
      
      // Step 3: Generate PDF directly from Google Doc
      await this.generatePDFFromGoogleDoc();
      
      // Step 4: Build the site
      console.log('🏗️  Building website...');
      execSync('npm run build:staging', { stdio: 'inherit' });
      console.log('✅ Website built successfully');
      
      console.log('\n🎉 Google Drive API resume pipeline completed successfully!');
      console.log('📝 Website updated: /jerry/resume');
      console.log('📄 PDF updated: /jerry-dempsey-resume.pdf');
      console.log('\n💡 To update your resume:');
      console.log('   1. Edit your Google Drive document');
      console.log('   2. Run: npm run resume:google-api');
      console.log('   3. Deploy your changes');
      
    } catch (error) {
      console.error('\n❌ Google Drive API resume pipeline failed:', error.message);
      process.exit(1);
    }
  }
}

// Handle authentication code if provided
async function handleAuthCode() {
  if (process.env.GOOGLE_AUTH_CODE) {
    console.log('🔐 Processing authentication code...');
    
    // Import required modules
    const { google } = require('googleapis');
    const fs = require('fs');
    const path = require('path');
    
    try {
      // Load credentials
      const credentials = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'credentials.json')));
      const creds = credentials.installed || credentials;
      
      // Create OAuth2 client
      const oauth2Client = new google.auth.OAuth2(
        creds.client_id,
        creds.client_secret,
        creds.redirect_uris[0]
      );
      
      // Exchange code for tokens
      const { tokens } = await oauth2Client.getToken(process.env.GOOGLE_AUTH_CODE);
      oauth2Client.setCredentials(tokens);
      
      // Save tokens for future use
      fs.writeFileSync(path.join(__dirname, '..', 'token.json'), JSON.stringify(tokens));
      
      console.log('✅ Authentication successful! Tokens saved.');
      console.log('💡 You can now run the pipeline without the authorization code.');
      
      // Continue with the pipeline
      const pipeline = new GoogleDriveAPIPipeline();
      await pipeline.run();
      
    } catch (error) {
      console.error('❌ Authentication failed:', error.message);
      process.exit(1);
    }
    
    return true;
  }
  return false;
}

// Run the pipeline
if (require.main === module) {
  (async () => {
    const handled = await handleAuthCode();
    if (!handled) {
      const pipeline = new GoogleDriveAPIPipeline();
      await pipeline.run();
    }
  })();
}

module.exports = GoogleDriveAPIPipeline;
