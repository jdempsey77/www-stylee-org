'use client';

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
              Jerry Dempsey
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 font-semibold">
              Product and Application Security Leader
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-5xl mx-auto mb-8">
              More than 20 years of experience in cybersecurity with outstanding communication skills and expertise in recruiting and mentoring top-performing teams. As a Product and Application Security leader, I possess outstanding communication skills and excel at recruiting and mentoring top-performing teams. I am a proven problem-solver with a knack for finding creative solutions to complex challenges. I am also an advocate for forward-thinking security concepts, and I am committed to driving collaboration and partnership with development organizations to help them adopt cutting-edge security strategies.
            </p>
            
            {/* Contact Information */}
            <div className="flex flex-wrap justify-center gap-3">
              <a 
                href="mailto:jerry@stylee.org"
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
                  More than 20 years of experience in cybersecurity with outstanding communication skills and expertise in recruiting and mentoring top-performing teams. As a Product and Application Security leader, I possess outstanding communication skills and excel at recruiting and mentoring top-performing teams. I am a proven problem-solver with a knack for finding creative solutions to complex challenges. I am also an advocate for forward-thinking security concepts, and I am committed to driving collaboration and partnership with development organizations to help them adopt cutting-edge security strategies.
                </p>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                  <BriefcaseIcon className="w-6 h-6 mr-3 text-gray-600 dark:text-gray-400" />
                  Professional Experience
                </h2>
                
                <div className="space-y-6">
                  
                  <div className="relative pl-8 pb-8">
                    <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg animate-pulse"></div>
                    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-0">
                          Head of Software Security
                        </h3>
                        <span className="text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2 rounded-full shadow-lg border border-opacity-50">
                          January 2025 – Present
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                        FanDuel, Atlanta, GA
                      </p>
                      <div className="text-slate-700 dark:text-slate-300">
                        • Lead comprehensive security strategy for FanDuel&apos;s platform, applications, and products • Ensure customer trust through robust security measures and platform integrity • Oversee Platform Security, Application Security, and Product Security initiatives • Drive security culture and best practices across engineering and product teams
                      </div>
                    </div>
                  </div>

                  <div className="relative pl-8 pb-8">
                    <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full shadow-lg animate-pulse"></div>
                    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border-l-4 border-emerald-500">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-0">
                          Director, Product and Application Security
                        </h3>
                        <span className="text-sm font-bold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-2 rounded-full shadow-lg border border-opacity-50">
                          April 2022 – December 2024
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                        Warner Bros. Discovery, Atlanta, GA
                      </p>
                      <div className="text-slate-700 dark:text-slate-300">
                        • Transformed program from supporting only Turner Broadcasting to supporting all of WarnerMedia • Support more than 3500 developers creating over 4000 applications with full security services • Developed Artemis, a state-of-the-art platform scanning 22,000+ code repositories • Built Product Security team partnering with HBO Max, CNN, and DC Universe brands • Provide threat modeling, DAST, source code scanning, bug bounties, and remediation
                      </div>
                    </div>
                  </div>

                  <div className="relative pl-8 pb-8">
                    <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full shadow-lg animate-pulse"></div>
                    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-0">
                          Director, Product and Application Security
                        </h3>
                        <span className="text-sm font-bold text-white bg-gradient-to-r from-purple-500 to-purple-600 px-4 py-2 rounded-full shadow-lg border border-opacity-50">
                          October 2021 – April 2022
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                        WarnerMedia, Atlanta, GA
                      </p>
                      <div className="text-slate-700 dark:text-slate-300">
                        • Expanded role to include Product Security and Application Security Vulnerability Management • Created new Product Security team for Direct-to-Consumer platforms • Assembled Security Operations team for CNN+ launch with successful platform integration • Developed protection layers against account takeover and fraud • Oversaw critical programs including bug bounty, DAST, and vulnerability remediation
                      </div>
                    </div>
                  </div>

                  {/* Show More/Less Button */}
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

                  {/* Additional Experience (Hidden by default) */}
                  {showAllExperience && (
                    <div className="space-y-6">
                      <div className="relative pl-8 pb-8">
                        <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full shadow-lg animate-pulse"></div>
                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border-l-4 border-cyan-500">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-0">
                              Director, Software Development Security
                            </h3>
                            <span className="text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-cyan-600 px-4 py-2 rounded-full shadow-lg border border-opacity-50">
                              March 2021 – October 2021
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                            WarnerMedia, Atlanta, GA
                          </p>
                          <div className="text-slate-700 dark:text-slate-300">
                            • Developed cutting-edge Software Development Security strategy for entire company • Built on existing WarnerMedia CSO Application Security platform • Made tremendous progress towards three-year strategic plan • Led team reporting directly to AT&T Chief Security Office • Focused on innovative solutions driving security forward
                          </div>
                        </div>
                      </div>

                      <div className="relative pl-8 pb-8">
                        <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-lg animate-pulse"></div>
                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-0">
                              Sr. Manager, Application Security and Security Tools Engineering
                            </h3>
                            <span className="text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 rounded-full shadow-lg border border-opacity-50">
                              June 2019 – May 2020
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                            WarnerMedia, Atlanta, GA
                          </p>
                          <div className="text-slate-700 dark:text-slate-300">
                            • Transformed Turner DevSecOps team into robust WarnerMedia program • Catered to development processes for legacy TimeWarner, HBO, WarnerBros., and Turner • Designed advanced platform for streamlined source code scanning and automation • Led Security Tools Engineering function for Architecture and Engineering division • Acted as security sounding board for entire WarnerMedia development community
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
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
}