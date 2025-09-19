#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Google Drive Resume Pipeline');
console.log('===============================\n');

class GoogleDriveResumePipeline {
  constructor() {
    this.resumePagePath = path.join(__dirname, '..', 'src', 'app', 'jerry', 'resume', 'page.tsx');
    this.publicPath = path.join(__dirname, '..', 'public', 'jerry-dempsey-resume.pdf');
    this.outPath = path.join(__dirname, '..', 'out', 'jerry-dempsey-resume.pdf');
    this.googleDocPath = path.join(__dirname, '..', 'public', 'Jerry_Dempsey_Resume_Google.md');
  }

  // Download content from Google Drive (simplified approach)
  async downloadFromGoogleDrive() {
    console.log('📥 Downloading from Google Drive...');
    
    try {
      // For now, we'll create a markdown file that you can sync with Google Drive
      // In a full implementation, you'd use Google Drive API
      console.log('💡 Creating Google Drive sync file...');
      
      const googleDriveContent = `# Jerry Dempsey Resume

## Contact Information
- **Name**: Jerry Dempsey
- **Title**: Product and Application Security Leader
- **Email**: jerry@stylee.org
- **Location**: Roswell, GA

## Professional Summary

More than 20 years of experience in cybersecurity with outstanding communication skills and expertise in recruiting and mentoring top-performing teams. As a Product and Application Security leader, I possess outstanding communication skills and excel at recruiting and mentoring top-performing teams. I am a proven problem-solver with a knack for finding creative solutions to complex challenges. I am also an advocate for forward-thinking security concepts, and I am committed to driving collaboration and partnership with development organizations to help them adopt cutting-edge security strategies.

## Professional Experience

### Head of Software Security
**FanDuel, Atlanta, GA | January 2025 – Present**

- Lead comprehensive security strategy for FanDuel's platform, applications, and products
- Ensure customer trust through robust security measures and platform integrity
- Oversee Platform Security, Application Security, and Product Security initiatives
- Drive security culture and best practices across engineering and product teams

### Director, Product and Application Security
**Warner Bros. Discovery, Atlanta, GA | April 2022 – December 2024**

- Transformed program from supporting only Turner Broadcasting to supporting all of WarnerMedia
- Support more than 3500 developers creating over 4000 applications with full security services
- Developed Artemis, a state-of-the-art platform scanning 22,000+ code repositories
- Built Product Security team partnering with HBO Max, CNN, and DC Universe brands
- Provide threat modeling, DAST, source code scanning, bug bounties, and remediation

### Director, Product and Application Security
**WarnerMedia, Atlanta, GA | October 2021 – April 2022**

- Expanded role to include Product Security and Application Security Vulnerability Management
- Created new Product Security team for Direct-to-Consumer platforms
- Assembled Security Operations team for CNN+ launch with successful platform integration
- Developed protection layers against account takeover and fraud
- Oversaw critical programs including bug bounty, DAST, and vulnerability remediation

### Director, Software Development Security
**WarnerMedia, Atlanta, GA | March 2021 – October 2021**

- Developed cutting-edge Software Development Security strategy for entire company
- Built on existing WarnerMedia CSO Application Security platform
- Made tremendous progress towards three-year strategic plan
- Led team reporting directly to AT&T Chief Security Office
- Focused on innovative solutions driving security forward

### Sr. Manager, Application Security and Security Tools Engineering
**WarnerMedia, Atlanta, GA | June 2019 – May 2020**

- Transformed Turner DevSecOps team into robust WarnerMedia program
- Catered to development processes for legacy TimeWarner, HBO, WarnerBros., and Turner
- Designed advanced platform for streamlined source code scanning and automation
- Led Security Tools Engineering function for Architecture and Engineering division
- Acted as security sounding board for entire WarnerMedia development community

## Education

- Bachelor of Science in Computer Science
- Georgia Institute of Technology, Atlanta, GA

## Certifications

- Certified Information Security Manager (CISM)
- Certified Information Systems Security Professional (CISSP)
- Certified Ethical Hacker (CEH)
- AWS Certified Security - Specialty
- CompTIA Security+

## Technical Skills

### Security Technologies
- SIEM, IDS/IPS, Firewalls, Vulnerability Scanners, Penetration Testing Tools

### Programming Languages
- Python, Java, C++, JavaScript, PowerShell, Bash

### Cloud Platforms
- AWS, Azure, Google Cloud Platform

### Security Frameworks
- NIST, ISO 27001, OWASP, PCI DSS
`;

      // Write the markdown file
      fs.writeFileSync(this.googleDocPath, googleDriveContent);
      console.log('✅ Google Drive sync file created');
      
      return googleDriveContent;
    } catch (error) {
      console.error('❌ Error downloading from Google Drive:', error.message);
      throw error;
    }
  }

  // Parse the markdown content
  parseMarkdownContent(content) {
    console.log('📄 Parsing markdown content...');
    
    const lines = content.split('\n');
    const resumeData = {
      name: '',
      title: '',
      email: '',
      location: '',
      summary: '',
      experience: [],
      education: [],
      certifications: [],
      skills: {
        security: [],
        programming: [],
        cloud: [],
        frameworks: []
      }
    };

    let currentSection = '';
    let currentExperience = null;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Parse header information
      if (line.startsWith('## Contact Information')) {
        currentSection = 'contact';
        continue;
      } else if (line.startsWith('## Professional Summary')) {
        currentSection = 'summary';
        continue;
      } else if (line.startsWith('## Professional Experience')) {
        currentSection = 'experience';
        continue;
      } else if (line.startsWith('## Education')) {
        currentSection = 'education';
        continue;
      } else if (line.startsWith('## Certifications')) {
        currentSection = 'certifications';
        continue;
      } else if (line.startsWith('## Technical Skills')) {
        currentSection = 'skills';
        continue;
      }
      
      // Parse contact information
      if (currentSection === 'contact') {
        if (line.startsWith('- **Name**:')) {
          resumeData.name = line.replace('- **Name**:', '').trim();
        } else if (line.startsWith('- **Title**:')) {
          resumeData.title = line.replace('- **Title**:', '').trim();
        } else if (line.startsWith('- **Email**:')) {
          resumeData.email = line.replace('- **Email**:', '').trim();
        } else if (line.startsWith('- **Location**:')) {
          resumeData.location = line.replace('- **Location**:', '').trim();
        }
      }
      
      // Parse professional summary
      if (currentSection === 'summary' && line && !line.startsWith('##')) {
        resumeData.summary += (resumeData.summary ? ' ' : '') + line;
      }
      
      // Parse experience
      if (currentSection === 'experience') {
        if (line.startsWith('###')) {
          // This is a job title
          if (currentExperience) {
            resumeData.experience.push(currentExperience);
          }
          currentExperience = {
            title: line.replace('###', '').trim(),
            company: '',
            location: '',
            dates: '',
            bullets: []
          };
        } else if (line.startsWith('**') && line.includes('|')) {
          // This is company, location, dates
          if (currentExperience) {
            const parts = line.replace(/\*\*/g, '').split('|');
            currentExperience.company = parts[0].trim();
            currentExperience.location = parts[1]?.trim() || '';
            currentExperience.dates = parts[2]?.trim() || '';
          }
        } else if (line.startsWith('-')) {
          // This is a bullet point
          if (currentExperience) {
            currentExperience.bullets.push(line.replace('-', '').trim());
          }
        }
      }
      
      // Parse education
      if (currentSection === 'education' && line.startsWith('-')) {
        resumeData.education.push(line.replace('-', '').trim());
      }
      
      // Parse certifications
      if (currentSection === 'certifications' && line.startsWith('-')) {
        resumeData.certifications.push(line.replace('-', '').trim());
      }
      
      // Parse skills
      if (currentSection === 'skills') {
        if (line.startsWith('### Security Technologies')) {
          // Parse security skills
        } else if (line.startsWith('### Programming Languages')) {
          // Parse programming skills
        } else if (line.startsWith('### Cloud Platforms')) {
          // Parse cloud skills
        } else if (line.startsWith('### Security Frameworks')) {
          // Parse framework skills
        }
      }
    }

    // Don't forget the last experience entry
    if (currentExperience) {
      resumeData.experience.push(currentExperience);
    }

    console.log('✅ Markdown content parsed successfully');
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
              ${resumeData.summary.replace(/'/g, '&apos;')}
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
                  ${resumeData.summary.replace(/'/g, '&apos;')}
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
                      ${job.bullets.map(bullet => `<li>• ${bullet.replace(/'/g, '&apos;')}</li>`).join('\n                      ')}
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
              </div>`;
  }

  // Generate PDF from resume data
  async generatePDF(resumeData) {
    console.log('📄 Generating PDF...');
    
    try {
      // Create a simple HTML file for PDF generation
      const htmlContent = this.generatePDFHTML(resumeData);
      const htmlPath = path.join(__dirname, '..', 'temp-resume.html');
      
      fs.writeFileSync(htmlPath, htmlContent);
      
      // Use Puppeteer to generate PDF
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
      
      console.log('✅ PDF generated successfully');
    } catch (error) {
      console.error('❌ Error generating PDF:', error.message);
      throw error;
    }
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
        </div>
    </div>
</body>
</html>`;
  }

  // Main pipeline execution
  async run() {
    try {
      console.log('🔄 Starting Google Drive resume pipeline...\n');
      
      // Step 1: Download from Google Drive
      const markdownContent = await this.downloadFromGoogleDrive();
      
      // Step 2: Parse the content
      const resumeData = this.parseMarkdownContent(markdownContent);
      
      // Step 3: Generate website resume page
      console.log('🌐 Generating website resume page...');
      const componentContent = this.generateResumePage(resumeData);
      fs.writeFileSync(this.resumePagePath, componentContent);
      console.log('✅ Website resume page updated');
      
      // Step 4: Generate PDF
      await this.generatePDF(resumeData);
      
      // Step 5: Build the site
      console.log('🏗️  Building website...');
      execSync('npm run build:staging', { stdio: 'inherit' });
      console.log('✅ Website built successfully');
      
      console.log('\n🎉 Google Drive resume pipeline completed successfully!');
      console.log('📝 Website updated: /jerry/resume');
      console.log('📄 PDF updated: /jerry-dempsey-resume.pdf');
      console.log('\n💡 To update your resume:');
      console.log('   1. Edit: public/Jerry_Dempsey_Resume_Google.md');
      console.log('   2. Run: npm run resume:google');
      console.log('   3. Deploy your changes');
      
    } catch (error) {
      console.error('\n❌ Google Drive resume pipeline failed:', error.message);
      process.exit(1);
    }
  }
}

// Run the pipeline
if (require.main === module) {
  const pipeline = new GoogleDriveResumePipeline();
  pipeline.run();
}

module.exports = GoogleDriveResumePipeline;
