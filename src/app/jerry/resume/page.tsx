'use client';

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-2">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Jerry Dempsey
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 font-semibold">
              Product and Application Security Leader
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-5xl mx-auto mb-4">
              More than 20 years of experience in cybersecurity with outstanding communication skills and expertise in recruiting and mentoring top-performing teams. As a Product and Application Security leader, I excel at building comprehensive security programs that seamlessly integrate with development workflows. I am a proven problem-solver with a knack for finding creative solutions to complex challenges and an advocate for forward-thinking security concepts. I am committed to driving collaboration and partnership with development organizations to help them adopt cutting-edge security strategies.
            </p>
            
          </div>
        </div>
      </section>

      {/* Resume Content */}
      <section className="py-4 bg-white dark:bg-slate-800">
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
                  More than 20 years of experience in cybersecurity with outstanding communication skills and expertise in recruiting and mentoring top-performing teams. As a Product and Application Security leader, I excel at building comprehensive security programs that seamlessly integrate with development workflows. I am a proven problem-solver with a knack for finding creative solutions to complex challenges and an advocate for forward-thinking security concepts. I am committed to driving collaboration and partnership with development organizations to help them adopt cutting-edge security strategies.
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
                              Sr. Director, Head of Software Security
                            </h3>
                        <span className="text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2 rounded-full shadow-lg border border-opacity-50">
                          March 2025 – Present
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                            FanDuel, Atlanta, GA
                          </p>
                      <div className="text-slate-700 dark:text-slate-300">
                        As the leader of the Software Security team, I grew the organization from 3 to over 25 employees while building out three key security functions: Application, Product, and Platform Security. I established a robust Application Security program that provides automated code scanning across all repositories and pull requests, seamlessly integrating security into the development process. Furthermore, I built out the Product Security team, defining and implementing a new framework to reduce risk through threat modeling, risk assessments, and penetration testing. My focus also included creating a dedicated Platform Security function to proactively mitigate risks in the platforms we build, ensuring a secure foundation for all our services.
                        </div>
                      </div>
                    </div>

                  <div className="relative pl-8 pb-8">
                    <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full shadow-lg animate-pulse"></div>
                    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border-l-4 border-emerald-500">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-0">
                              Director, Head of Software Security
                    </h3>
                        <span className="text-sm font-bold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-2 rounded-full shadow-lg border border-opacity-50">
                          May 2023 – March 2025
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                            FanDuel, Atlanta, GA
                          </p>
                      <div className="text-slate-700 dark:text-slate-300">
                        Leading application, product, and cloud security initiatives to safeguard our software and ensure trust for our players. Grew team from 3 employees to over 25 employees while building comprehensive security functions.
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
                          April 2022 – Present
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                            Warner Bros. Discovery, Atlanta, GA
                          </p>
                      <div className="text-slate-700 dark:text-slate-300">
                        Transformed program from supporting only Turner Broadcasting to supporting all of WarnerMedia. Support more than 3500 developers creating over 4000 applications with full security services. Developed Artemis, a state-of-the-art platform scanning 22,000+ code repositories. Built Product Security team partnering with HBO Max, CNN, and DC Universe brands. Provide threat modeling, DAST, source code scanning, bug bounties, and remediation.
                        </div>
                      </div>
                  </div>

                  <div className="relative pl-8 pb-8">
                    <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full shadow-lg animate-pulse"></div>
                    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border-l-4 border-cyan-500">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-0">
                      Director, Product and Application Security
                    </h3>
                        <span className="text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-cyan-600 px-4 py-2 rounded-full shadow-lg border border-opacity-50">
                          October 2021 – April 2022
                                </span>
                              </div>
                              <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                                WarnerMedia, Atlanta, GA
                              </p>
                      <div className="text-slate-700 dark:text-slate-300">
                        Expanded role to include Product Security and Application Security Vulnerability Management Created new Product Security team for Direct-to-Consumer platforms Assembled Security Operations team for CNN+ launch with successful platform integration Developed protection layers against account takeover and fraud Oversaw critical programs including bug bounty, DAST, and vulnerability remediation
                            </div>
                          </div>
                  </div>

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
                    <div ref={expandedContentRef} className="space-y-6">
                      <div className="relative pl-8 pb-8">
                        <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-lg animate-pulse"></div>
                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-0">
                      Director, Software Development Security
                    </h3>
                            <span className="text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 rounded-full shadow-lg border border-opacity-50">
                              March 2021 – October 2021
                                </span>
                              </div>
                              <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                                WarnerMedia, Atlanta, GA
                              </p>
                          <div className="text-slate-700 dark:text-slate-300">
                            Developed cutting-edge Software Development Security strategy for entire company. Built on existing WarnerMedia CSO Application Security platform. Made tremendous progress towards three-year strategic plan. Led team reporting directly to AT&T Chief Security Office. Focused on innovative solutions driving security forward.
                            </div>
                          </div>
                        </div>

                      <div className="relative pl-8 pb-8">
                        <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-red-500 to-red-600 rounded-full shadow-lg animate-pulse"></div>
                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border-l-4 border-red-500">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-0">
                              Sr. Manager, Application Security and Security Tools Engineering
                                </h3>
                            <span className="text-sm font-bold text-white bg-gradient-to-r from-red-500 to-red-600 px-4 py-2 rounded-full shadow-lg border border-opacity-50">
                              June 2019 – May 2020
                                </span>
                              </div>
                              <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                                WarnerMedia, Atlanta, GA
                              </p>
                          <div className="text-slate-700 dark:text-slate-300">
                            Transformed Turner DevSecOps team into robust WarnerMedia program. Catered to development processes for legacy TimeWarner, HBO, WarnerBros., and Turner. Designed advanced platform for streamlined source code scanning and automation. Led Security Tools Engineering function for Architecture and Engineering division. Acted as security sounding board for entire WarnerMedia development community.
                          </div>
                        </div>
                      </div>

                      <div className="relative pl-8 pb-8">
                        <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full shadow-lg animate-pulse"></div>
                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border-l-4 border-pink-500">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-0">
                              Sr. Manager, DevOps Security
                            </h3>
                            <span className="text-sm font-bold text-white bg-gradient-to-r from-pink-500 to-pink-600 px-4 py-2 rounded-full shadow-lg border border-opacity-50">
                              June 2017 – June 2019
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                            Turner Broadcasting (became WarnerMedia), Atlanta, GA
                          </p>
                          <div className="text-slate-700 dark:text-slate-300">
                            Established a cutting-edge DevSecOps team from scratch in the Information Security Office (ISO) at Turner. Aimed at helping various brands within the company adopt a &quot;secure by default&quot; mindset. Championed a culture of security and integrated critical tools into the CI/CD pipelines. Minimized security risks earlier in the development process. Worked alongside different teams at Turner, bridging the gap between security and developers. Identified and achieved top-notch security standards within each brand.
                            </div>
                          </div>
                        </div>

                      <div className="relative pl-8 pb-8">
                        <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full shadow-lg animate-pulse"></div>
                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border-l-4 border-indigo-500">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-0">
                                  Sr. DevOps Manager, IT
                                </h3>
                            <span className="text-sm font-bold text-white bg-gradient-to-r from-indigo-500 to-indigo-600 px-4 py-2 rounded-full shadow-lg border border-opacity-50">
                              February 2015 – May 2017
                                </span>
                              </div>
                              <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                                Tripwire Inc., Alpharetta, GA
                              </p>
                          <div className="text-slate-700 dark:text-slate-300">
                            Oversaw the SaaSOps and IT DevOps groups at Tripwire Managed the Purecloud application and led the development of a cloud-hosted service Led the development of a cloud-hosted service for our flagship product Managed the R&D Dev/Test infrastructure, which is Tripwire&apos;s largest private cloud Facilitated self-service virtual machine deployment using tools like Cloudbolt and Chef/Vagrant Streamlined development workflows
                          </div>
                        </div>
                      </div>

                      <div className="relative pl-8 pb-8">
                        <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full shadow-lg animate-pulse"></div>
                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border-l-4 border-teal-500">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-0">
                              Engineering Manager
                            </h3>
                            <span className="text-sm font-bold text-white bg-gradient-to-r from-teal-500 to-teal-600 px-4 py-2 rounded-full shadow-lg border border-opacity-50">
                              April 2013 – February 2015
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                            Tripwire Inc. (acquired nCircle Network Security), Alpharetta, GA
                          </p>
                          <div className="text-slate-700 dark:text-slate-300">
                            As an Engineering Manager for IP360, Purecloud, and SIH at Tripwire Led the charge in driving top-notch product quality Ensured that customer escalations were kept in check Resolved conflicts, mentored team members, and recruited new talent Maintained employee retention and building a top-performing team Played a critical role in smoothly transitioning build infrastructure into the Tripwire environment when nCircle was acquired
                          </div>
                        </div>
                      </div>

                      <div className="relative pl-8 pb-8">
                        <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-lime-500 to-lime-600 rounded-full shadow-lg animate-pulse"></div>
                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border-l-4 border-lime-500">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-0">
                              Engineering Manager
                            </h3>
                            <span className="text-sm font-bold text-white bg-gradient-to-r from-lime-500 to-lime-600 px-4 py-2 rounded-full shadow-lg border border-opacity-50">
                              March 2010 – April 2013
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                            nCircle Network Security, Alpharetta, GA
                          </p>
                          <div className="text-slate-700 dark:text-slate-300">
                            As a Development Manager for nCircle&apos;s Compliance and Configuration Management software (CCM) Led the development, QA, and content teams using Agile Methodology Served as the Scrum Master and was hands-on in managing QA, design, code review, and backlog planning Collaborated with Product Management to plan releases and determine long-term project goals Maintained team retention and managed new hires Oversaw quarterly budgeting for hardware and software purchases
                            </div>
                          </div>
                        </div>

                      <div className="relative pl-8 pb-8">
                        <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full shadow-lg animate-pulse"></div>
                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border-l-4 border-amber-500">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-0">
                                  Advisory Software Engineer, Team Lead
                                </h3>
                            <span className="text-sm font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2 rounded-full shadow-lg border border-opacity-50">
                              March 2005 – March 2010
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                            IBM Internet Security Systems, Inc. (ISS IBM), Atlanta, GA
                          </p>
                          <div className="text-slate-700 dark:text-slate-300">
                            As the Team Lead of the Escalation Management Group (EMG) Responsible for overseeing the resolution of high-level software defects on all released hardware and software platforms Worked closely with customers to understand their needs and collaborated with the team to deliver solutions Met both customer requirements and product design goals My team traveled globally to customer sites, where we provided troubleshooting support Helped optimize network design and architecture Engaged with all departments across the IBM ISS organization to ensure customer issues were resolved effectively and efficiently
                          </div>
                        </div>
                      </div>

                      <div className="relative pl-8 pb-8">
                        <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-rose-500 to-rose-600 rounded-full shadow-lg animate-pulse"></div>
                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border-l-4 border-rose-500">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-0">
                              Senior Quality Assurance Engineer, Team Lead
                            </h3>
                            <span className="text-sm font-bold text-white bg-gradient-to-r from-rose-500 to-rose-600 px-4 py-2 rounded-full shadow-lg border border-opacity-50">
                              February 2003 – March 2005
                                </span>
                              </div>
                              <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                            Internet Security Systems, Inc. (ISS), Atlanta, GA
                          </p>
                          <div className="text-slate-700 dark:text-slate-300">
                            As an internal member of the Unified Threat Management (UTM) appliance team Collaborated with the development team to design and test the product Played a key role in the design and functionality of the Intrusion Prevention System (IPS) module Contributed to overall appliance security design Promoted to Team Lead for the 2.0 release Responsible for developing the test plan and ensuring thorough test case execution Ran bug triages to prioritize defect fixes Developed several automation tools to streamline testing
                          </div>
                        </div>
                      </div>

                      <div className="relative pl-8 pb-8">
                        <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-violet-500 to-violet-600 rounded-full shadow-lg animate-pulse"></div>
                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border-l-4 border-violet-500">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-0">
                              Senior Quality Assurance Engineer, X-Force, Team Lead
                            </h3>
                            <span className="text-sm font-bold text-white bg-gradient-to-r from-violet-500 to-violet-600 px-4 py-2 rounded-full shadow-lg border border-opacity-50">
                              June 2001 – February 2003
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                            Internet Security Systems, Inc. (ISS), Atlanta, GA
                          </p>
                          <div className="text-slate-700 dark:text-slate-300">
                            Responsible for testing new security content updates for RealSecure Network Sensor Tested ISS&apos;s market-leading IDS software Played a key role in determining how security content was tested with other ISS products Collaborated closely with the X-Force Research and Development team Identified and addressed new vulnerabilities Ensured that our customers were protected quickly and effectively
                          </div>
                        </div>
                      </div>

                      <div className="relative pl-8 pb-8">
                        <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full shadow-lg animate-pulse"></div>
                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border-l-4 border-emerald-500">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-0">
                              Quality Assurance Engineer
                            </h3>
                            <span className="text-sm font-bold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-2 rounded-full shadow-lg border border-opacity-50">
                              June 2000 – June 2001
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                            Internet Security Systems, Inc. (ISS), Atlanta, GA
                          </p>
                          <div className="text-slate-700 dark:text-slate-300">
                            Created and implemented test cases for the RealSecure software Focused on the Solaris version testing Conducted thorough testing of Attack Signatures on all supported platforms Ensured product quality and reliability
                            </div>
                          </div>
                        </div>

                      <div className="relative pl-8 pb-8">
                        <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full shadow-lg animate-pulse"></div>
                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border-l-4 border-sky-500">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-0">
                                  Senior Technical Support Engineer
                                </h3>
                            <span className="text-sm font-bold text-white bg-gradient-to-r from-sky-500 to-sky-600 px-4 py-2 rounded-full shadow-lg border border-opacity-50">
                              November 1998 – June 2000
                                </span>
                              </div>
                              <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                            Internet Security Systems, Inc. (ISS), Atlanta, GA
                          </p>
                          <div className="text-slate-700 dark:text-slate-300">
                            Delivered customer support for RealSecure Network Sensor via phone and email Resolved configuration issues and identified software bugs Assisted with product deployment Provided workarounds to overcome software limitations
                          </div>
                        </div>
                  </div>

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
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 shadow-lg z-50 border-t border-blue-500">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between">
            <div className="flex items-center gap-3">
              <DocumentTextIcon className="w-5 h-5 text-blue-100" />
              <span className="font-semibold">Ready to download my resume?</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="/jerry-dempsey-resume.pdf"
                download="Jerry-Dempsey-Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-sm"
              >
                <DocumentTextIcon className="w-4 h-4" />
                Download PDF
              </a>
            </div>
          </div>
          
          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="flex items-center justify-center mb-3">
              <DocumentTextIcon className="w-5 h-5 text-blue-100 mr-2" />
              <span className="font-semibold text-sm text-center">Ready to download my resume?</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <a
                href="/jerry-dempsey-resume.pdf"
                download="Jerry-Dempsey-Resume.pdf"
                className="inline-flex items-center gap-2 px-3 py-2 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-sm text-sm"
              >
                <DocumentTextIcon className="w-4 h-4" />
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}