#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Hybrid Resume Pipeline');
console.log('=========================\n');

class HybridResumePipeline {
  constructor() {
    this.resumePagePath = path.join(__dirname, '..', 'src', 'app', 'jerry', 'resume', 'page.tsx');
    this.publicPath = path.join(__dirname, '..', 'public', 'jerry-dempsey-resume.pdf');
    this.outPath = path.join(__dirname, '..', 'out', 'jerry-dempsey-resume.pdf');
    this.credentialsPath = path.join(__dirname, '..', 'credentials.json');
    this.tokenPath = path.join(__dirname, '..', 'token.json');
    this.documentId = process.env.GOOGLE_DOC_ID || '1vx69LJxQP6746MQatcIpvd2VbmTc54w446sbj6Yzymo';
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
      await this.generatePDFFromGoogleDoc();
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

  // Generate website resume page using clean, hardcoded data
  generateWebsiteResumePage() {
    console.log('⚛️  Generating clean website resume page...');
    
    const resumeData = {
      name: "Jerry Dempsey",
      title: "Product and Application Security Leader",
      summary: "More than 20 years of experience in cybersecurity with outstanding communication skills and expertise in recruiting and mentoring top-performing teams. As a Product and Application Security leader, I possess outstanding communication skills and excel at recruiting and mentoring top-performing teams. I am a proven problem-solver with a knack for finding creative solutions to complex challenges. I am also an advocate for forward-thinking security concepts, and I am committed to driving collaboration and partnership with development organizations to help them adopt cutting-edge security strategies.",
      email: "jerry@stylee.org",
      location: "Roswell, GA",
      experience: [
        {
          title: "Head of Software Security",
          company: "FanDuel",
          location: "Atlanta, GA",
          dates: "January 2025 – Present",
          bullets: [
            "Lead comprehensive security strategy for FanDuel&apos;s platform, applications, and products",
            "Ensure customer trust through robust security measures and platform integrity",
            "Oversee Platform Security, Application Security, and Product Security initiatives",
            "Drive security culture and best practices across engineering and product teams"
          ]
        },
        {
          title: "Director, Product and Application Security",
          company: "Warner Bros. Discovery",
          location: "Atlanta, GA",
          dates: "April 2022 – December 2024",
          bullets: [
            "Transformed program from supporting only Turner Broadcasting to supporting all of WarnerMedia",
            "Support more than 3500 developers creating over 4000 applications with full security services",
            "Developed Artemis, a state-of-the-art platform scanning 22,000+ code repositories",
            "Built Product Security team partnering with HBO Max, CNN, and DC Universe brands",
            "Provide threat modeling, DAST, source code scanning, bug bounties, and remediation"
          ]
        },
        {
          title: "Director, Product and Application Security",
          company: "WarnerMedia",
          location: "Atlanta, GA",
          dates: "October 2021 – April 2022",
          bullets: [
            "Expanded role to include Product Security and Application Security Vulnerability Management",
            "Created new Product Security team for Direct-to-Consumer platforms",
            "Assembled Security Operations team for CNN+ launch with successful platform integration",
            "Developed protection layers against account takeover and fraud",
            "Oversaw critical programs including bug bounty, DAST, and vulnerability remediation"
          ]
        },
        {
          title: "Director, Software Development Security",
          company: "WarnerMedia",
          location: "Atlanta, GA",
          dates: "March 2021 – October 2021",
          bullets: [
            "Developed cutting-edge Software Development Security strategy for entire company",
            "Built on existing WarnerMedia CSO Application Security platform",
            "Made tremendous progress towards three-year strategic plan",
            "Led team reporting directly to AT&T Chief Security Office",
            "Focused on innovative solutions driving security forward"
          ]
        },
        {
          title: "Sr. Manager, Application Security and Security Tools Engineering",
          company: "WarnerMedia",
          location: "Atlanta, GA",
          dates: "June 2019 – May 2020",
          bullets: [
            "Transformed Turner DevSecOps team into robust WarnerMedia program",
            "Catered to development processes for legacy TimeWarner, HBO, WarnerBros., and Turner",
            "Designed advanced platform for streamlined source code scanning and automation",
            "Led Security Tools Engineering function for Architecture and Engineering division",
            "Acted as security sounding board for entire WarnerMedia development community"
          ]
        }
      ],
      education: [
        "Bachelor of Science in Computer Science",
        "Georgia Institute of Technology, Atlanta, GA"
      ],
      certifications: [
        "Certified Information Security Manager (CISM)",
        "Certified Information Systems Security Professional (CISSP)",
        "Certified Ethical Hacker (CEH)",
        "AWS Certified Security - Specialty",
        "CompTIA Security+"
      ],
      skills: [
        "Application Security, Product Security, Cloud Security",
        "Penetration Testing, Vulnerability Management, Threat Modeling",
        "Python, Java, C++, JavaScript, PowerShell, Bash",
        "AWS, Azure, Google Cloud Platform",
        "Docker, Kubernetes, CI/CD"
      ]
    };

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

    fs.writeFileSync(this.resumePagePath, componentContent);
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

  // Authenticate with Google Drive API
  async authenticate() {
    if (!fs.existsSync(this.credentialsPath)) {
      throw new Error('credentials.json not found. Please set up Google Drive API first.');
    }

    if (!fs.existsSync(this.tokenPath)) {
      throw new Error('No authentication token found. Please run the Google Drive API pipeline first to authenticate.');
    }

    const { google } = require('googleapis');
    const credentials = JSON.parse(fs.readFileSync(this.credentialsPath));
    const creds = credentials.installed || credentials;
    const token = JSON.parse(fs.readFileSync(this.tokenPath));
    
    const oauth2Client = new google.auth.OAuth2(
      creds.client_id,
      creds.client_secret,
      creds.redirect_uris[0]
    );
    
    oauth2Client.setCredentials(token);
    return oauth2Client;
  }

  // Clean and style the Google Doc HTML for PDF generation
  cleanGoogleDocHTML(htmlContent) {
    console.log('🧹 Cleaning Google Doc HTML...');
    
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
        
        ul { margin-left: 20px; margin-bottom: 15px; }
        li { margin-bottom: 5px; }
        
        @media print {
            body { padding: 20px; }
            h1, h2 { page-break-after: avoid; }
            ul, ol { page-break-inside: avoid; }
        }
        
        .company { color: #64748b; font-weight: 500; }
        .dates { color: #64748b; font-style: italic; }
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
}

// Run the pipeline
if (require.main === module) {
  const pipeline = new HybridResumePipeline();
  pipeline.run();
}

module.exports = HybridResumePipeline;
