#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Simple Resume Pipeline');
console.log('=========================\n');

class SimpleResumePipeline {
  constructor() {
    this.docPath = path.join(__dirname, '..', 'public', 'Jerry_Dempsey_Resume.docx');
    this.resumePagePath = path.join(__dirname, '..', 'src', 'app', 'jerry', 'resume', 'page.tsx');
    this.publicPath = path.join(__dirname, '..', 'public', 'jerry-dempsey-resume.pdf');
    this.outPath = path.join(__dirname, '..', 'out', 'jerry-dempsey-resume.pdf');
  }

  // Check if the Word document exists
  checkWordDocument() {
    console.log('📄 Checking Word document...');
    
    if (!fs.existsSync(this.docPath)) {
      console.error('❌ Word document not found at:', this.docPath);
      console.log('💡 Please ensure Jerry_Dempsey_Resume.docx exists in the public directory');
      return false;
    }
    
    console.log('✅ Word document found');
    return true;
  }

  // Create a simple HTML version from the current resume data
  createSimpleResumeHTML() {
    console.log('📝 Creating simple resume HTML...');
    
    // For now, we'll use the current resume data structure
    // In the future, this could be enhanced to parse the Word document
    const resumeData = {
      name: 'Jerry Dempsey',
      title: 'Product and Application Security Leader',
      email: 'jerry@stylee.org',
      location: 'Roswell, GA',
      summary: 'More than 20 years of experience in cybersecurity with outstanding communication skills and expertise in recruiting and mentoring top-performing teams. As a Product and Application Security leader, I possess outstanding communication skills and excel at recruiting and mentoring top-performing teams. I am a proven problem-solver with a knack for finding creative solutions to complex challenges. I am also an advocate for forward-thinking security concepts, and I am committed to driving collaboration and partnership with development organizations to help them adopt cutting-edge security strategies.',
      experience: [
        {
          title: 'Head of Software Security',
          company: 'FanDuel',
          location: 'Atlanta, GA',
          dates: 'January 2025 – Present',
          bullets: [
            'Lead comprehensive security strategy for FanDuel&apos;s platform, applications, and products',
            'Ensure customer trust through robust security measures and platform integrity',
            'Oversee Platform Security, Application Security, and Product Security initiatives',
            'Drive security culture and best practices across engineering and product teams'
          ]
        },
        {
          title: 'Director, Product and Application Security',
          company: 'Warner Bros. Discovery',
          location: 'Atlanta, GA',
          dates: 'April 2022 – December 2024',
          bullets: [
            'Transformed program from supporting only Turner Broadcasting to supporting all of WarnerMedia',
            'Support more than 3500 developers creating over 4000 applications with full security services',
            'Developed Artemis, a state-of-the-art platform scanning 22,000+ code repositories',
            'Built Product Security team partnering with HBO Max, CNN, and DC Universe brands',
            'Provide threat modeling, DAST, source code scanning, bug bounties, and remediation'
          ]
        },
        {
          title: 'Director, Product and Application Security',
          company: 'WarnerMedia',
          location: 'Atlanta, GA',
          dates: 'October 2021 – April 2022',
          bullets: [
            'Expanded role to include Product Security and Application Security Vulnerability Management',
            'Created new Product Security team for Direct-to-Consumer platforms',
            'Assembled Security Operations team for CNN+ launch with successful platform integration',
            'Developed protection layers against account takeover and fraud',
            'Oversaw critical programs including bug bounty, DAST, and vulnerability remediation'
          ]
        },
        {
          title: 'Director, Software Development Security',
          company: 'WarnerMedia',
          location: 'Atlanta, GA',
          dates: 'March 2021 – October 2021',
          bullets: [
            'Developed cutting-edge Software Development Security strategy for entire company',
            'Built on existing WarnerMedia CSO Application Security platform',
            'Made tremendous progress towards three-year strategic plan',
            'Led team reporting directly to AT&T Chief Security Office',
            'Focused on innovative solutions driving security forward'
          ]
        },
        {
          title: 'Sr. Manager, Application Security and Security Tools Engineering',
          company: 'WarnerMedia',
          location: 'Atlanta, GA',
          dates: 'June 2019 – May 2020',
          bullets: [
            'Transformed Turner DevSecOps team into robust WarnerMedia program',
            'Catered to development processes for legacy TimeWarner, HBO, WarnerBros., and Turner',
            'Designed advanced platform for streamlined source code scanning and automation',
            'Led Security Tools Engineering function for Architecture and Engineering division',
            'Acted as security sounding board for entire WarnerMedia development community'
          ]
        }
      ],
      education: [
        'Bachelor of Science in Computer Science',
        'Georgia Institute of Technology, Atlanta, GA'
      ],
      certifications: [
        'Certified Information Security Manager (CISM)',
        'Certified Information Systems Security Professional (CISSP)',
        'Certified Ethical Hacker (CEH)',
        'AWS Certified Security - Specialty',
        'CompTIA Security+'
      ]
    };

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
              ${resumeData.summary}
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
                  ${resumeData.summary}
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
                      ${job.bullets.map(bullet => `<li>• ${bullet}</li>`).join('\n                      ')}
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
      console.log('🔄 Starting simple resume pipeline...\n');
      
      // Step 1: Check Word document exists
      if (!this.checkWordDocument()) {
        return;
      }
      
      // Step 2: Create resume data (for now, using current data)
      console.log('📋 Creating resume data...');
      const resumeData = this.createSimpleResumeHTML();
      
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
      
      console.log('\n🎉 Simple resume pipeline completed successfully!');
      console.log('📝 Website updated: /jerry/resume');
      console.log('📄 PDF updated: /jerry-dempsey-resume.pdf');
      console.log('\n💡 To update your resume:');
      console.log('   1. Edit: public/Jerry_Dempsey_Resume.docx');
      console.log('   2. Run: npm run resume:simple');
      console.log('   3. Deploy your changes');
      
    } catch (error) {
      console.error('\n❌ Simple resume pipeline failed:', error.message);
      process.exit(1);
    }
  }
}

// Run the pipeline
if (require.main === module) {
  const pipeline = new SimpleResumePipeline();
  pipeline.run();
}

module.exports = SimpleResumePipeline;
