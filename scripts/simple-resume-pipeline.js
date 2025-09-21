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

  // Get the current resume data
  getResumeData() {
    return {
      name: 'Jerry Dempsey',
      title: 'Product and Application Security Leader',
      email: 'jerry@stylee.org',
      location: 'Roswell, GA',
      summary: 'More than 20 years of experience in cybersecurity with outstanding communication skills and expertise in recruiting and mentoring top-performing teams. As a Product and Application Security leader, I possess outstanding communication skills and excel at recruiting and mentoring top-performing teams. I am a proven problem-solver with a knack for finding creative solutions to complex challenges. I am also an advocate for forward-thinking security concepts, and I am committed to driving collaboration and partnership with development organizations to help them adopt cutting-edge security strategies.',
      experience: [
        {
          title: 'Sr. Director, Head of Software Security',
          company: 'FanDuel',
          location: 'Atlanta, GA',
          dates: 'March 2025 – Present',
          bullets: [
            'As the leader of the Software Security team, I grew the organization from 3 to over 25 employees while building out three key security functions',
            'Application, Product, and Platform Security. I established a robust Application Security program that provides automated code scanning across all repositories and pull requests',
            'Seamlessly integrating security into the development process. Furthermore, I built out the Product Security team, defining and implementing a new framework to reduce risk through threat modeling',
            'Risk assessments, and penetration testing. My focus also included creating a dedicated Platform Security function to proactively mitigate risks in the platforms we build',
            'Ensuring a secure foundation for all our services.'
          ]
        },
        {
          title: 'Director, Head of Software Security',
          company: 'FanDuel',
          location: 'Atlanta, GA',
          dates: 'May 2023 – March 2025',
          bullets: [
            'Leading application, product, and cloud security initiatives to safeguard our software and ensure trust for our players',
            'Grew team from 3 employees to over 25 employees while building comprehensive security functions.'
          ]
        },
        {
          title: 'Director, Product and Application Security',
          company: 'Warner Bros. Discovery',
          location: 'Atlanta, GA',
          dates: 'April 2022 – Present',
          bullets: [
            'Transformed program from supporting only Turner Broadcasting to supporting all of WarnerMedia',
            'Support more than 3500 developers creating over 4000 applications with full security services.',
            'Developed Artemis, a state-of-the-art platform scanning 22,000+ code repositories',
            'Built Product Security team partnering with HBO Max, CNN, and DC Universe brands',
            'Provide threat modeling, DAST, source code scanning, bug bounties, and remediation.'
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
            'Oversaw critical programs including bug bounty, DAST, and vulnerability remediation.'
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
            'Focused on innovative solutions driving security forward.'
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
            'Acted as security sounding board for entire WarnerMedia development community.'
          ]
        },
        {
          title: 'Sr. Manager, DevOps Security',
          company: 'Turner Broadcasting (became WarnerMedia)',
          location: 'Atlanta, GA',
          dates: 'June 2017 – June 2019',
          bullets: [
            'Established a cutting-edge DevSecOps team from scratch in the Information Security Office (ISO) at Turner',
            'Aimed at helping various brands within the company adopt a &quot;secure by default&quot; mindset',
            'Championed a culture of security and integrated critical tools into the CI/CD pipelines',
            'Minimized security risks earlier in the development process',
            'Worked alongside different teams at Turner, bridging the gap between security and developers',
            'Identified and achieved top-notch security standards within each brand.'
          ]
        },
        {
          title: 'Sr. DevOps Manager, IT',
          company: 'Tripwire Inc.',
          location: 'Alpharetta, GA',
          dates: 'February 2015 – May 2017',
          bullets: [
            'Oversaw the SaaSOps and IT DevOps groups at Tripwire',
            'Managed the Purecloud application and led the development of a cloud-hosted service',
            'Led the development of a cloud-hosted service for our flagship product',
            'Managed the R&D Dev/Test infrastructure, which is Tripwire&apos;s largest private cloud',
            'Facilitated self-service virtual machine deployment using tools like Cloudbolt and Chef/Vagrant',
            'Streamlined development workflows.'
          ]
        },
        {
          title: 'Engineering Manager',
          company: 'Tripwire Inc. (acquired nCircle Network Security)',
          location: 'Alpharetta, GA',
          dates: 'April 2013 – February 2015',
          bullets: [
            'As an Engineering Manager for IP360, Purecloud, and SIH at Tripwire',
            'Led the charge in driving top-notch product quality',
            'Ensured that customer escalations were kept in check',
            'Resolved conflicts, mentored team members, and recruited new talent',
            'Maintained employee retention and building a top-performing team',
            'Played a critical role in smoothly transitioning build infrastructure into the Tripwire environment when nCircle was acquired.'
          ]
        },
        {
          title: 'Engineering Manager',
          company: 'nCircle Network Security',
          location: 'Alpharetta, GA',
          dates: 'March 2010 – April 2013',
          bullets: [
            'As a Development Manager for nCircle&apos;s Compliance and Configuration Management software (CCM)',
            'Led the development, QA, and content teams using Agile Methodology',
            'Served as the Scrum Master and was hands-on in managing QA, design, code review, and backlog planning',
            'Collaborated with Product Management to plan releases and determine long-term project goals',
            'Maintained team retention and managed new hires',
            'Oversaw quarterly budgeting for hardware and software purchases.'
          ]
        },
        {
          title: 'Advisory Software Engineer, Team Lead',
          company: 'IBM Internet Security Systems, Inc. (ISS IBM)',
          location: 'Atlanta, GA',
          dates: 'March 2005 – March 2010',
          bullets: [
            'As the Team Lead of the Escalation Management Group (EMG)',
            'Responsible for overseeing the resolution of high-level software defects on all released hardware and software platforms',
            'Worked closely with customers to understand their needs and collaborated with the team to deliver solutions',
            'Met both customer requirements and product design goals',
            'My team traveled globally to customer sites, where we provided troubleshooting support',
            'Helped optimize network design and architecture',
            'Engaged with all departments across the IBM ISS organization to ensure customer issues were resolved effectively and efficiently.'
          ]
        },
        {
          title: 'Senior Quality Assurance Engineer, Team Lead',
          company: 'Internet Security Systems, Inc. (ISS)',
          location: 'Atlanta, GA',
          dates: 'February 2003 – March 2005',
          bullets: [
            'As an internal member of the Unified Threat Management (UTM) appliance team',
            'Collaborated with the development team to design and test the product',
            'Played a key role in the design and functionality of the Intrusion Prevention System (IPS) module',
            'Contributed to overall appliance security design',
            'Promoted to Team Lead for the 2.0 release',
            'Responsible for developing the test plan and ensuring thorough test case execution',
            'Ran bug triages to prioritize defect fixes',
            'Developed several automation tools to streamline testing.'
          ]
        },
        {
          title: 'Senior Quality Assurance Engineer, X-Force, Team Lead',
          company: 'Internet Security Systems, Inc. (ISS)',
          location: 'Atlanta, GA',
          dates: 'June 2001 – February 2003',
          bullets: [
            'Responsible for testing new security content updates for RealSecure Network Sensor',
            'Tested ISS&apos;s market-leading IDS software',
            'Played a key role in determining how security content was tested with other ISS products',
            'Collaborated closely with the X-Force Research and Development team',
            'Identified and addressed new vulnerabilities',
            'Ensured that our customers were protected quickly and effectively.'
          ]
        },
        {
          title: 'Quality Assurance Engineer',
          company: 'Internet Security Systems, Inc. (ISS)',
          location: 'Atlanta, GA',
          dates: 'June 2000 – June 2001',
          bullets: [
            'Created and implemented test cases for the RealSecure software',
            'Focused on the Solaris version testing',
            'Conducted thorough testing of Attack Signatures on all supported platforms',
            'Ensured product quality and reliability.'
          ]
        },
        {
          title: 'Senior Technical Support Engineer',
          company: 'Internet Security Systems, Inc. (ISS)',
          location: 'Atlanta, GA',
          dates: 'November 1998 – June 2000',
          bullets: [
            'Delivered customer support for RealSecure Network Sensor via phone and email',
            'Resolved configuration issues and identified software bugs',
            'Assisted with product deployment',
            'Provided workarounds to overcome software limitations.'
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

  // Create a simple HTML version from the current resume data
  createSimpleResumeHTML() {
    console.log('📝 Creating simple resume HTML...');
    
    const resumeData = this.getResumeData();
    return this.generateResumePage(resumeData);
  }

  // Generate the React component for the resume page
  generateResumePage(resumeData) {
    console.log('⚛️  Generating resume page component...');
    
    const componentContent = `'use client';

import { 
  BriefcaseIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function Resume() {
  const [showAllExperience, setShowAllExperience] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              ${resumeData.name}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 font-semibold">
              ${resumeData.title}
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-5xl mx-auto mb-8">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Main Content */}
            <div className="space-y-8">
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
                  ${this.generateExperienceHTML(resumeData.experience, 'showAllExperience')}
                  
                  {/* Read More/Less Button */}
                  <div className="flex justify-center pt-4">
                    <button
                      onClick={() => setShowAllExperience(!showAllExperience)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg"
                    >
                      {showAllExperience ? (
                        <>
                          <ChevronUpIcon className="w-5 h-5" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDownIcon className="w-5 h-5" />
                          Show Complete Timeline
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Download Resume Section */}
      <section className="py-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-900 dark:to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Download My Resume
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Get a complete PDF version of my resume for your records or to share with your team.
          </p>
          <a 
            href="/jerry-dempsey-resume.pdf"
            download="Jerry-Dempsey-Resume.pdf"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-900 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg text-lg"
          >
            <DocumentTextIcon className="w-6 h-6" />
            Download Resume PDF
          </a>
        </div>
      </section>
    </div>
  );
}`;

    return componentContent;
  }

  // Generate HTML for experience section
  generateExperienceHTML(experience, showAllVar) {
    const colors = ['border-blue-500', 'border-emerald-500', 'border-purple-500', 'border-cyan-500', 'border-orange-500'];
    const bubbleColors = ['bg-gradient-to-r from-blue-500 to-blue-600', 'bg-gradient-to-r from-emerald-500 to-emerald-600', 'bg-gradient-to-r from-purple-500 to-purple-600', 'bg-gradient-to-r from-cyan-500 to-cyan-600', 'bg-gradient-to-r from-orange-500 to-orange-600'];
    
    // Generate all jobs but wrap the later ones in conditional rendering
    const recentJobs = experience.slice(0, 3);
    const olderJobs = experience.slice(3);
    
    let html = recentJobs.map((job, index) => `
                  <div className="relative pl-8 pb-8">
                    <div className="absolute left-0 top-2 w-4 h-4 ${bubbleColors[index % bubbleColors.length]} rounded-full shadow-lg animate-pulse"></div>
                    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border-l-4 ${colors[index % colors.length]}">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-0">
                          ${job.title}
                        </h3>
                        <span className="text-sm font-bold text-white ${bubbleColors[index % bubbleColors.length]} px-4 py-2 rounded-full shadow-lg border border-opacity-50">
                          ${job.dates}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                        ${job.company}, ${job.location}
                      </p>
                      <div className="text-slate-700 dark:text-slate-300">
                        ${job.bullets.join(' ')}
                      </div>
                    </div>
                  </div>`).join('\n');
    
    if (olderJobs.length > 0) {
      html += `

                  {/* Expandable Career History */}
                  {${showAllVar} && (
                    <div className="space-y-6">`;
      
      html += olderJobs.map((job, index) => `
                      <div className="relative pl-8 pb-8">
                        <div className="absolute left-0 top-2 w-4 h-4 ${bubbleColors[(index + 3) % bubbleColors.length]} rounded-full shadow-lg animate-pulse"></div>
                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border-l-4 ${colors[(index + 3) % colors.length]}">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-0">
                              ${job.title}
                            </h3>
                            <span className="text-sm font-bold text-white ${bubbleColors[(index + 3) % bubbleColors.length]} px-4 py-2 rounded-full shadow-lg border border-opacity-50">
                              ${job.dates}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                            ${job.company}, ${job.location}
                          </p>
                          <div className="text-slate-700 dark:text-slate-300">
                            ${job.bullets.join(' ')}
                          </div>
                        </div>
                      </div>`).join('\n');
      
      html += `
                    </div>
                  )}`;
    }
    
    return html;
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
