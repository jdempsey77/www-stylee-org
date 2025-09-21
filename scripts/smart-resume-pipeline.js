#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execSync } = require('child_process');

console.log('🧠 Smart Resume Pipeline');
console.log('========================\n');

class SmartResumePipeline {
  constructor() {
    this.resumePagePath = path.join(__dirname, '..', 'src', 'app', 'jerry', 'resume', 'page.tsx');
    this.publicPath = path.join(__dirname, '..', 'public', 'jerry-dempsey-resume.pdf');
    this.outPath = path.join(__dirname, '..', 'out', 'jerry-dempsey-resume.pdf');
    this.hashPath = path.join(__dirname, '..', '.resume-hash');
    this.credentialsPath = path.join(__dirname, '..', 'credentials.json');
    this.tokenPath = path.join(__dirname, '..', 'token.json');
    
    // Google Drive document ID
    this.documentId = process.env.GOOGLE_DOC_ID || 'YOUR_GOOGLE_DOC_ID_HERE';
  }

  // Check if resume content has changed
  async hasResumeChanged() {
    console.log('🔍 Checking if resume content has changed...');
    
    try {
      // Get current content from Google Docs
      const currentContent = await this.getGoogleDocContent();
      const currentHash = this.generateHash(currentContent);
      
      // Get stored hash
      let storedHash = null;
      if (fs.existsSync(this.hashPath)) {
        storedHash = fs.readFileSync(this.hashPath, 'utf8').trim();
      }
      
      // Compare hashes
      const hasChanged = currentHash !== storedHash;
      
      if (hasChanged) {
        console.log('📝 Resume content has changed - pipeline will run');
        // Store new hash
        fs.writeFileSync(this.hashPath, currentHash);
      } else {
        console.log('✅ Resume content unchanged - skipping pipeline');
      }
      
      return { hasChanged, currentContent, currentHash };
    } catch (error) {
      console.log('⚠️  Could not check for changes, running pipeline anyway:', error.message);
      return { hasChanged: true, currentContent: null, currentHash: null };
    }
  }

  // Get content from Google Docs
  async getGoogleDocContent() {
    try {
      const { google } = require('googleapis');
      const auth = await this.authenticate();
      const drive = google.drive({ version: 'v3', auth });
      
      const response = await drive.files.export({
        fileId: this.documentId,
        mimeType: 'text/html'
      });
      
      return response.data;
    } catch (error) {
      console.log('⚠️  Could not fetch from Google Docs:', error.message);
      return null;
    }
  }

  // Generate hash of content
  generateHash(content) {
    if (!content) return 'no-content';
    return crypto.createHash('md5').update(content).digest('hex');
  }

  // Authenticate with Google Drive API
  async authenticate() {
    try {
      const { google } = require('googleapis');
      
      if (!fs.existsSync(this.credentialsPath)) {
        throw new Error('Google Drive API credentials not found');
      }
      
      const credentials = JSON.parse(fs.readFileSync(this.credentialsPath));
      const creds = credentials.installed || credentials;
      
      const oauth2Client = new google.auth.OAuth2(
        creds.client_id,
        creds.client_secret,
        creds.redirect_uris[0]
      );
      
      if (fs.existsSync(this.tokenPath)) {
        const token = JSON.parse(fs.readFileSync(this.tokenPath));
        oauth2Client.setCredentials(token);
        return oauth2Client;
      } else {
        throw new Error('Google Drive API token not found');
      }
    } catch (error) {
      throw new Error(`Google Drive API authentication failed: ${error.message}`);
    }
  }

  // Generate PDF from Google Doc
  async generatePDFFromGoogleDoc() {
    console.log('📄 Generating PDF from Google Doc...');
    
    try {
      const { google } = require('googleapis');
      const auth = await this.authenticate();
      const drive = google.drive({ version: 'v3', auth });
      
      // Export Google Doc as PDF directly
      const response = await drive.files.export({
        fileId: this.documentId,
        mimeType: 'application/pdf'
      }, { responseType: 'stream' });
      
      console.log('✅ Google Doc exported as PDF');
      
      // Write PDF directly to files
      const writeStream = fs.createWriteStream(this.publicPath);
      response.data.pipe(writeStream);
      
      await new Promise((resolve, reject) => {
        writeStream.on('finish', resolve);
        writeStream.on('error', reject);
      });
      
        // Copy to out directory only if it exists (production builds)
        if (fs.existsSync(path.dirname(this.outPath))) {
          fs.copyFileSync(this.publicPath, this.outPath);
        }
      
      console.log('✅ PDF generated from Google Doc');
    } catch (error) {
      console.error('❌ Error generating PDF:', error.message);
      throw error;
    }
  }

  // Clean Google Doc HTML for PDF
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
        
        .contact-info {
            text-align: center;
            margin-bottom: 30px;
            color: #64748b;
            font-size: 1.1rem;
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

  // Extract body content from Google Doc HTML
  extractBodyContent(htmlContent) {
    let content = htmlContent;
    
    // Remove Google Doc specific tags and classes
    content = content.replace(/<[^>]*class="[^"]*google[^"]*"[^>]*>/gi, '');
    content = content.replace(/<[^>]*id="[^"]*google[^"]*"[^>]*>/gi, '');
    content = content.replace(/<[^>]*style="[^"]*"[^>]*>/gi, '');
    
    // Extract body content
    const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) {
      content = bodyMatch[1];
    }
    
    return content;
  }

  // Generate website resume page (current timeline design)
  generateWebsitePage() {
    console.log('🌐 Generating website resume page...');
    
    const resumeData = this.getResumeData();
    const componentContent = this.generateResumePage(resumeData);
    fs.writeFileSync(this.resumePagePath, componentContent);
    console.log('✅ Website resume page updated');
  }

  // Get resume data (current clean data)
  getResumeData() {
    return {
      name: 'Jerry Dempsey',
      title: 'Product and Application Security Leader',
      email: 'jerry@stylee.org',
      location: 'Roswell, GA',
      summary: 'More than 20 years of experience in cybersecurity with outstanding communication skills and expertise in recruiting and mentoring top-performing teams. As a Product and Application Security leader, I excel at building comprehensive security programs that seamlessly integrate with development workflows. I am a proven problem-solver with a knack for finding creative solutions to complex challenges and an advocate for forward-thinking security concepts. I am committed to driving collaboration and partnership with development organizations to help them adopt cutting-edge security strategies.',
      experience: [
        {
          title: 'Sr. Director, Head of Software Security',
          company: 'FanDuel',
          location: 'Atlanta, GA',
          dates: 'March 2025 – Present',
          bullets: [
            'As the leader of the Software Security team, I grew the organization from 3 to over 25 employees while building out three key security functions: Application, Product, and Platform Security. I established a robust Application Security program that provides automated code scanning across all repositories and pull requests, seamlessly integrating security into the development process.',
            'Furthermore, I built out the Product Security team, defining and implementing a new framework to reduce risk through threat modeling, risk assessments, and penetration testing. My focus also included creating a dedicated Platform Security function to proactively mitigate risks in the platforms we build, ensuring a secure foundation for all our services.'
          ]
        },
        {
          title: 'Director, Head of Software Security',
          company: 'FanDuel',
          location: 'Atlanta, GA',
          dates: 'May 2023 – March 2025',
          bullets: [
            'Leading application, product, and cloud security initiatives to safeguard our software and ensure trust for our players. Grew team from 3 employees to over 25 employees while building comprehensive security functions across the organization.'
          ]
        },
        {
          title: 'Director, Product and Application Security',
          company: 'Warner Bros. Discovery',
          location: 'Atlanta, GA',
          dates: 'April 2022 – Present',
          bullets: [
            'In just over five years, I took a program that only supported Turner Broadcasting and transformed it into one that now supports all of WarnerMedia. My team and responsibilities grew, but we remained laser-focused on collaborating with development teams to seamlessly integrate security into the Software Development Lifecycle. Today, our program supports more than 3500 developers who create over 4000 applications, providing a full range of services including threat modeling, DAST, source code scanning, bug bounties, and remediation.',
            'Under my leadership, my team developed Artemis, a state-of-the-art platform that scans source code at scale across the entire company, identifying vulnerabilities and secrets across more than 22,000 code repositories. Our platform uses cutting-edge commercial and open-source tools to orchestrate scanning, operating both as self-service and as a continuous source code security risk monitor.',
            'Additionally, I built out a Product Security team that partners with key WarnerMedia brands like HBO Max, CNN, and DC Universe to deliver top-notch security solutions and experiences directly to our consumers. Our team\'s expertise helps combat fraud and enhances overall platform security, ensuring that our customers enjoy the highest level of safety and peace of mind.'
          ]
        },
        {
          title: 'Director, Product and Application Security',
          company: 'WarnerMedia',
          location: 'Atlanta, GA',
          dates: 'October 2021 – April 2022',
          bullets: [
            'Expanded role to include Product Security and Application Security Vulnerability Management. Created new Product Security team for Direct-to-Consumer platforms. Assembled Security Operations team for CNN+ launch with successful platform integration. Developed protection layers against account takeover and fraud. Oversaw critical programs including bug bounty, DAST, and vulnerability remediation.'
          ]
        },
        {
          title: 'Director, Software Development Security',
          company: 'WarnerMedia',
          location: 'Atlanta, GA',
          dates: 'March 2021 – October 2021',
          bullets: [
            'Developed cutting-edge Software Development Security strategy for entire company. Built on existing WarnerMedia CSO Application Security platform. Made tremendous progress towards three-year strategic plan. Led team reporting directly to AT&T Chief Security Office. Focused on innovative solutions driving security forward.'
          ]
        },
        {
          title: 'Sr. Manager, Application Security and Security Tools Engineering',
          company: 'WarnerMedia',
          location: 'Atlanta, GA',
          dates: 'June 2019 – May 2020',
          bullets: [
            'Transformed Turner DevSecOps team into robust WarnerMedia program. Catered to development processes for legacy TimeWarner, HBO, WarnerBros., and Turner. Designed advanced platform for streamlined source code scanning and automation. Led Security Tools Engineering function for Architecture and Engineering division. Acted as security sounding board for entire WarnerMedia development community.'
          ]
        },
        {
          title: 'Sr. Manager, DevOps Security',
          company: 'Turner Broadcasting (became WarnerMedia)',
          location: 'Atlanta, GA',
          dates: 'June 2017 – June 2019',
          bullets: [
            'Established a cutting-edge DevSecOps team from scratch in the Information Security Office (ISO) at Turner. Aimed at helping various brands within the company adopt a &quot;secure by default&quot; mindset. Championed a culture of security and integrated critical tools into the CI/CD pipelines. Minimized security risks earlier in the development process. Worked alongside different teams at Turner, bridging the gap between security and developers. Identified and achieved top-notch security standards within each brand.'
          ]
        },
        {
          title: 'Sr. DevOps Manager, IT',
          company: 'Tripwire Inc.',
          location: 'Alpharetta, GA',
          dates: 'February 2015 – May 2017',
          bullets: [
            'Oversaw the SaaSOps and IT DevOps groups at Tripwire. Managed the Purecloud application and led the development of a cloud-hosted service. Led the development of a cloud-hosted service for our flagship product. Managed the R&D Dev/Test infrastructure, which is Tripwire&apos;s largest private cloud. Facilitated self-service virtual machine deployment using tools like Cloudbolt and Chef/Vagrant. Streamlined development workflows.'
          ]
        },
        {
          title: 'Engineering Manager',
          company: 'Tripwire Inc. (acquired nCircle Network Security)',
          location: 'Alpharetta, GA',
          dates: 'April 2013 – February 2015',
          bullets: [
            'As an Engineering Manager for IP360, Purecloud, and SIH at Tripwire, I led the charge in driving top-notch product quality. Ensured that customer escalations were kept in check. Resolved conflicts, mentored team members, and recruited new talent. Maintained employee retention and building a top-performing team. Played a critical role in smoothly transitioning build infrastructure into the Tripwire environment when nCircle was acquired.'
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
      ]
    };
  }

  // Generate the React component for the resume page (current design)
  generateResumePage(resumeData) {
    console.log('⚛️  Generating resume page component...');
    
    const componentContent = `'use client';

import {
  BriefcaseIcon,
  DocumentTextIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline';
import { useState, useRef } from 'react';

export default function Resume() {
  const [showAllExperience, setShowAllExperience] = useState(false);
  const expandedContentRef = useRef<HTMLDivElement>(null);
  return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900 dark:to-slate-800 pb-20">
      {/* Header */}
      <section className="py-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-900 dark:to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-2">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              ${resumeData.name}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 font-semibold">
              ${resumeData.title}
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-4">
              ${resumeData.summary}
            </p>
            
          </div>
        </div>
      </section>

      {/* Resume Content */}
      <section className="py-4 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                
                <div className="space-y-2">
                  ${this.generateExperienceHTML(resumeData.experience, 'showAllExperience')}

                  {/* Show More Button */}
                  {!showAllExperience && (
                    <div className="flex justify-center pt-4">
                      <button
                        onClick={() => setShowAllExperience(true)}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-1 transition-all duration-200 border border-blue-500"
                      >
                        <ChevronDownIcon className="w-5 h-5" />
                        Show Complete Timeline
                      </button>
                    </div>
                  )}

                  {/* Additional Experience (Hidden by default) */}
                  {showAllExperience && (
                    <div ref={expandedContentRef} className="space-y-2">
                      ${this.generateExpandedExperienceHTML(resumeData.experience.slice(3))}

                      {/* Show Less Button - at the bottom of expanded content */}
                      <div className="flex justify-center pt-8">
                    <button
                          onClick={() => setShowAllExperience(false)}
                          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-1 transition-all duration-200 border border-blue-500"
                    >
                          <ChevronUpIcon className="w-5 h-5" />
                          Show Less
                    </button>
                  </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Sticky Download Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-800 text-slate-900 dark:text-white py-1 md:py-2 px-3 md:px-4 shadow-lg z-50 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-4xl mx-auto flex items-center justify-center sm:justify-end">
          <a
            href="/jerry-dempsey-resume.pdf"
            download="Jerry-Dempsey-Resume.pdf"
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-sm text-sm sm:text-base"
          >
            <DocumentTextIcon className="w-3 h-3 sm:w-4 sm:h-4" />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}`;

    return componentContent;
  }

  // Generate HTML for experience section (first 3 jobs)
  generateExperienceHTML(experience, showAllVar) {
    const colors = ['border-blue-500', 'border-emerald-500', 'border-purple-500', 'border-cyan-500', 'border-orange-500'];
    const bubbleColors = ['bg-gradient-to-r from-blue-500 to-blue-600', 'bg-gradient-to-r from-emerald-500 to-emerald-600', 'bg-gradient-to-r from-purple-500 to-purple-600', 'bg-gradient-to-r from-cyan-500 to-cyan-600', 'bg-gradient-to-r from-orange-500 to-orange-600'];
    
    // Generate only the first 3 jobs (visible by default)
    const recentJobs = experience.slice(0, 3);
    
    return recentJobs.map((job, index) => `
                  <div className="relative pl-8 pb-2">
                    <div className="absolute left-0 top-2 w-4 h-4 ${bubbleColors[index % bubbleColors.length]} rounded-full shadow-lg animate-pulse hover:scale-125 hover:shadow-xl transition-all duration-200 cursor-pointer"></div>
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
                        ${job.bullets.map(bullet => `<p className="mb-4">${bullet.replace(/'/g, '&apos;').replace(/"/g, '&quot;')}</p>`).join('')}
                      </div>
                    </div>
                  </div>`).join('\n');
  }

  // Generate HTML for expanded experience section (remaining jobs)
  generateExpandedExperienceHTML(olderJobs) {
    const colors = ['border-orange-500', 'border-red-500', 'border-pink-500', 'border-indigo-500', 'border-teal-500', 'border-lime-500', 'border-amber-500', 'border-rose-500', 'border-violet-500', 'border-emerald-500', 'border-sky-500'];
    const bubbleColors = ['bg-gradient-to-r from-orange-500 to-orange-600', 'bg-gradient-to-r from-red-500 to-red-600', 'bg-gradient-to-r from-pink-500 to-pink-600', 'bg-gradient-to-r from-indigo-500 to-indigo-600', 'bg-gradient-to-r from-teal-500 to-teal-600', 'bg-gradient-to-r from-lime-500 to-lime-600', 'bg-gradient-to-r from-amber-500 to-amber-600', 'bg-gradient-to-r from-rose-500 to-rose-600', 'bg-gradient-to-r from-violet-500 to-violet-600', 'bg-gradient-to-r from-emerald-500 to-emerald-600', 'bg-gradient-to-r from-sky-500 to-sky-600'];
    
    return olderJobs.map((job, index) => `
                      <div className="relative pl-8 pb-2">
                        <div className="absolute left-0 top-2 w-4 h-4 ${bubbleColors[index % bubbleColors.length]} rounded-full shadow-lg animate-pulse hover:scale-125 hover:shadow-xl transition-all duration-200 cursor-pointer"></div>
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
                            ${job.bullets.map(bullet => `<p className="mb-4">${bullet.replace(/'/g, '&apos;').replace(/"/g, '&quot;')}</p>`).join('')}
                          </div>
                        </div>
                      </div>`).join('\n');
  }

  // Main pipeline execution
  async run() {
    try {
      console.log('🔄 Starting smart resume pipeline...\n');
      
      // Step 1: Check if resume has changed
      const { hasChanged, currentContent } = await this.hasResumeChanged();
      
      if (!hasChanged) {
        console.log('🎉 Pipeline complete - no changes detected');
        return;
      }
      
      // Step 2: Generate PDF from Google Doc
      console.log('\n📄 Step 2: Generating PDF from Google Doc...');
      await this.generatePDFFromGoogleDoc();
      
      // Step 3: Generate website resume page
      console.log('\n🌐 Step 3: Generating website resume page...');
      this.generateWebsitePage();
      
      console.log('\n🎉 Smart resume pipeline completed successfully!');
      console.log('📝 Website updated: /jerry/resume');
      console.log('📄 PDF updated: /jerry-dempsey-resume.pdf (from Google Doc)');
      console.log('\n💡 Benefits:');
      console.log('   ✅ Only runs when content changes');
      console.log('   ✅ PDF generated directly from Google Doc');
      console.log('   ✅ Website uses current timeline design');
      console.log('   ✅ Efficient and automated');
      
    } catch (error) {
      console.error('\n❌ Smart resume pipeline failed:', error.message);
      process.exit(1);
    }
  }
}

// Run the pipeline
if (require.main === module) {
  const pipeline = new SmartResumePipeline();
  pipeline.run();
}

module.exports = SmartResumePipeline;
