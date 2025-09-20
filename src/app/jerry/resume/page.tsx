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
                className="inline-flex items-center gap-2 rounded-lg bg-slate-100 dark:bg-slate-700 px-4 py-2 text-slate-700 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600 transition-all duration-200 hover:shadow-md"
              >
                <EnvelopeIcon className="w-5 h-5" />
                Email
              </a>
              <a 
                href="/jerry-dempsey-resume.pdf"
                download="Jerry-Dempsey-Resume.pdf"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-100 dark:bg-slate-700 px-4 py-2 text-slate-700 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600 transition-all duration-200 hover:shadow-md"
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
                
                {/* Timeline View */}
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-300 dark:bg-slate-600"></div>
                  
                  {/* Timeline Items */}
                  <div className="space-y-8">
                    {/* FanDuel Sr. Director */}
                    <div className="relative flex items-start">
                      <div className="absolute left-3 w-3 h-3 bg-slate-600 rounded-full border-2 border-white dark:border-slate-800 shadow-sm"></div>
                      <div className="ml-8 flex-1">
                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                              Sr. Director, Head of Software Security
                            </h3>
                            <span className="text-sm font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                              2025 – Present
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                            FanDuel, Atlanta, GA
                          </p>
                          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            As the leader of the Software Security team, I grew the organization from 3 to over 25 employees while building out three key security functions Application, Product, and Platform Security. I established a robust Application Security program that provides automated code scanning across all repositories and pull requests Seamlessly integrating security into the development process. Furthermore, I built out the Product Security team, defining and implementing a new framework to reduce risk through threat modeling Risk assessments, and penetration testing. My focus also included creating a dedicated Platform Security function to proactively mitigate risks in the platforms we build Ensuring a secure foundation for all our services.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* FanDuel Director */}
                    <div className="relative flex items-start">
                      <div className="absolute left-3 w-3 h-3 bg-gray-600 rounded-full border-2 border-white dark:border-slate-800 shadow-sm"></div>
                      <div className="ml-8 flex-1">
                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6">
                          <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                              Director, Head of Software Security
                    </h3>
                            <span className="text-sm font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                              2023 – 2025
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                            FanDuel, Atlanta, GA
                          </p>
                          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            Leading application, product, and cloud security initiatives to safeguard our software and ensure trust for our players Grew team from 3 employees to over 25 employees while building comprehensive security functions.
                          </p>
                        </div>
                      </div>
                  </div>

                    {/* Warner Bros. Discovery */}
                    <div className="relative flex items-start">
                      <div className="absolute left-3 w-3 h-3 bg-green-600 rounded-full border-2 border-white dark:border-slate-800 shadow-sm"></div>
                      <div className="ml-8 flex-1">
                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6">
                          <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Director, Product and Application Security
                    </h3>
                            <span className="text-sm font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                              2022 – Present
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                            Warner Bros. Discovery, Atlanta, GA
                          </p>
                          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            Transformed program from supporting only Turner Broadcasting to supporting all of WarnerMedia Support more than 3500 developers creating over 4000 applications with full security services. Developed Artemis, a state-of-the-art platform scanning 22,000+ code repositories Built Product Security team partnering with HBO Max, CNN, and DC Universe brands Provide threat modeling, DAST, source code scanning, bug bounties, and remediation.
                          </p>
                        </div>
                      </div>
                  </div>

                    {/* Additional Timeline Items (showing when expanded) */}
                    {showAllExperience && (
                      <>
                        {/* WarnerMedia Director */}
                        <div className="relative flex items-start">
                          <div className="absolute left-3 w-3 h-3 bg-cyan-600 rounded-full border-2 border-white dark:border-slate-800 shadow-sm"></div>
                          <div className="ml-8 flex-1">
                            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6">
                              <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Director, Product and Application Security
                    </h3>
                                <span className="text-sm font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                                  2021 – 2022
                                </span>
                              </div>
                              <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                                WarnerMedia, Atlanta, GA
                              </p>
                              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                Expanded role to include Product Security and Application Security Vulnerability Management Created new Product Security team for Direct-to-Consumer platforms Assembled Security Operations team for CNN+ launch with successful platform integration Developed protection layers against account takeover and fraud Oversaw critical programs including bug bounty, DAST, and vulnerability remediation.
                              </p>
                            </div>
                          </div>
                  </div>

                        {/* Continue with more timeline items... */}
                        <div className="relative flex items-start">
                          <div className="absolute left-3 w-3 h-3 bg-purple-600 rounded-full border-2 border-white dark:border-slate-800 shadow-sm"></div>
                          <div className="ml-8 flex-1">
                            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6">
                              <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Director, Software Development Security
                    </h3>
                                <span className="text-sm font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                                  2021
                                </span>
                              </div>
                              <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                                WarnerMedia, Atlanta, GA
                              </p>
                              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                Developed cutting-edge Software Development Security strategy for entire company Built on existing WarnerMedia CSO Application Security platform Made tremendous progress towards three-year strategic plan Led team reporting directly to AT&T Chief Security Office Focused on innovative solutions driving security forward.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Add more timeline items for the rest of the career... */}
                        <div className="relative flex items-start">
                          <div className="absolute left-3 w-3 h-3 bg-slate-600 rounded-full border-2 border-white dark:border-slate-800 shadow-sm"></div>
                          <div className="ml-8 flex-1">
                            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                                  Sr. Manager, Application Security
                                </h3>
                                <span className="text-sm font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                                  2019 – 2020
                                </span>
                              </div>
                              <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                                WarnerMedia, Atlanta, GA
                              </p>
                              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                Transformed Turner DevSecOps team into robust WarnerMedia program Catered to development processes for legacy TimeWarner, HBO, WarnerBros., and Turner Designed advanced platform for streamlined source code scanning and automation Led Security Tools Engineering function for Architecture and Engineering division Acted as security sounding board for entire WarnerMedia development community.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Tripwire and earlier roles... */}
                        <div className="relative flex items-start">
                          <div className="absolute left-3 w-3 h-3 bg-cyan-600 rounded-full border-2 border-white dark:border-slate-800 shadow-sm"></div>
                          <div className="ml-8 flex-1">
                            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                                  Sr. DevOps Manager, IT
                                </h3>
                                <span className="text-sm font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                                  2015 – 2017
                                </span>
                              </div>
                              <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                                Tripwire Inc., Alpharetta, GA
                              </p>
                              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                Oversaw the SaaSOps and IT DevOps groups at Tripwire Managed the Purecloud application and led the development of a cloud-hosted service Led the development of a cloud-hosted service for our flagship product Managed the R&D Dev/Test infrastructure, which is Tripwire&apos;s largest private cloud Facilitated self-service virtual machine deployment using tools like Cloudbolt and Chef/Vagrant Streamlined development workflows.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* ISS/IBM roles */}
                        <div className="relative flex items-start">
                          <div className="absolute left-3 w-3 h-3 bg-purple-600 rounded-full border-2 border-white dark:border-slate-800 shadow-sm"></div>
                          <div className="ml-8 flex-1">
                            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                                  Advisory Software Engineer, Team Lead
                                </h3>
                                <span className="text-sm font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                                  2005 – 2010
                                </span>
                              </div>
                              <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                                IBM Internet Security Systems, Inc., Atlanta, GA
                              </p>
                              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                As the Team Lead of the Escalation Management Group (EMG) Responsible for overseeing the resolution of high-level software defects on all released hardware and software platforms Worked closely with customers to understand their needs and collaborated with the team to deliver solutions Met both customer requirements and product design goals My team traveled globally to customer sites, where we provided troubleshooting support Helped optimize network design and architecture Engaged with all departments across the IBM ISS organization to ensure customer issues were resolved effectively and efficiently.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Early ISS roles */}
                        <div className="relative flex items-start">
                          <div className="absolute left-3 w-3 h-3 bg-green-600 rounded-full border-2 border-white dark:border-slate-800 shadow-sm"></div>
                          <div className="ml-8 flex-1">
                            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                                  Senior Technical Support Engineer
                                </h3>
                                <span className="text-sm font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                                  1998 – 2000
                                </span>
                              </div>
                              <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                                Internet Security Systems, Inc., Atlanta, GA
                              </p>
                              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                Delivered customer support for RealSecure Network Sensor via phone and email, resolving configuration issues and identifying software bugs, as well as assisting with product deployment and providing workarounds to overcome software limitations.
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                  </div>

                  {/* Timeline Read More/Less Button */}
                  <div className="flex justify-center pt-6">
                    <button
                      onClick={() => setShowAllExperience(!showAllExperience)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600 rounded-lg transition-all duration-200 hover:shadow-md"
                    >
                      {showAllExperience ? (
                        <>
                          <ChevronUpIcon className="w-5 h-5" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDownIcon className="w-5 h-5" />
                          Show Complete Timeline (1998-2025)
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
      <section className="py-12 bg-slate-50 dark:bg-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Download My Resume
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Get a complete PDF version of my resume for your records or to share with your team.
            </p>
            <a
              href="/jerry-dempsey-resume.pdf"
              download="Jerry-Dempsey-Resume.pdf"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-600 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg"
            >
              <DocumentTextIcon className="w-6 h-6" />
              Download Resume PDF
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}