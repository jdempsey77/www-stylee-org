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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-2">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Jerry Dempsey
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 font-semibold">
              Product and Application Security Leader
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-4">
              More than 20 years of experience in cybersecurity with outstanding communication skills and expertise in recruiting and mentoring top-performing teams. As a Product and Application Security leader, I excel at building comprehensive security programs that seamlessly integrate with development workflows. I am a proven problem-solver with a knack for finding creative solutions to complex challenges and an advocate for forward-thinking security concepts. I am committed to driving collaboration and partnership with development organizations to help them adopt cutting-edge security strategies.
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
                  More than 20 years of experience in cybersecurity with outstanding communication skills and expertise in recruiting and mentoring top-performing teams. As a Product and Application Security leader, I excel at building comprehensive security programs that seamlessly integrate with development workflows. I am a proven problem-solver with a knack for finding creative solutions to complex challenges and an advocate for forward-thinking security concepts. I am committed to driving collaboration and partnership with development organizations to help them adopt cutting-edge security strategies.
                </p>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                  <BriefcaseIcon className="w-6 h-6 mr-3 text-gray-600 dark:text-gray-400" />
                  Professional Experience
                </h2>
                
                <div className="space-y-2">
                  
                  <div className="relative pl-8 pb-2">
                    <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg animate-pulse hover:scale-125 hover:shadow-xl transition-all duration-200 cursor-pointer"></div>
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
                        <p className="mb-4">As the leader of the Software Security team, I grew the organization from 3 to over 25 employees while building out three key security functions: Application, Product, and Platform Security. I established a robust Application Security program that provides automated code scanning across all repositories and pull requests, seamlessly integrating security into the development process.</p><p className="mb-4">Furthermore, I built out the Product Security team, defining and implementing a new framework to reduce risk through threat modeling, risk assessments, and penetration testing. My focus also included creating a dedicated Platform Security function to proactively mitigate risks in the platforms we build, ensuring a secure foundation for all our services.</p>
                      </div>
                    </div>
                  </div>

                  <div className="relative pl-8 pb-2">
                    <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full shadow-lg animate-pulse hover:scale-125 hover:shadow-xl transition-all duration-200 cursor-pointer"></div>
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
                        <p className="mb-4">Leading application, product, and cloud security initiatives to safeguard our software and ensure trust for our players. Grew team from 3 employees to over 25 employees while building comprehensive security functions across the organization.</p>
                      </div>
                    </div>
                  </div>

                  <div className="relative pl-8 pb-2">
                    <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full shadow-lg animate-pulse hover:scale-125 hover:shadow-xl transition-all duration-200 cursor-pointer"></div>
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
                        <p className="mb-4">In just over five years, I took a program that only supported Turner Broadcasting and transformed it into one that now supports all of WarnerMedia. My team and responsibilities grew, but we remained laser-focused on collaborating with development teams to seamlessly integrate security into the Software Development Lifecycle. Today, our program supports more than 3500 developers who create over 4000 applications, providing a full range of services including threat modeling, DAST, source code scanning, bug bounties, and remediation.</p><p className="mb-4">Under my leadership, my team developed Artemis, a state-of-the-art platform that scans source code at scale across the entire company, identifying vulnerabilities and secrets across more than 22,000 code repositories. Our platform uses cutting-edge commercial and open-source tools to orchestrate scanning, operating both as self-service and as a continuous source code security risk monitor.</p><p className="mb-4">Additionally, I built out a Product Security team that partners with key WarnerMedia brands like HBO Max, CNN, and DC Universe to deliver top-notch security solutions and experiences directly to our consumers. Our team's expertise helps combat fraud and enhances overall platform security, ensuring that our customers enjoy the highest level of safety and peace of mind.</p>
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
                    <div ref={expandedContentRef} className="space-y-2">
                      
                      <div className="relative pl-8 pb-2">
                        <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-lg animate-pulse hover:scale-125 hover:shadow-xl transition-all duration-200 cursor-pointer"></div>
                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-0">
                              Director, Product and Application Security
                            </h3>
                            <span className="text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 rounded-full shadow-lg border border-opacity-50">
                              October 2021 – April 2022
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                            WarnerMedia, Atlanta, GA
                          </p>
                          <div className="text-slate-700 dark:text-slate-300">
                            <p className="mb-4">Expanded role to include Product Security and Application Security Vulnerability Management</p><p className="mb-4">Created new Product Security team for Direct-to-Consumer platforms</p><p className="mb-4">Assembled Security Operations team for CNN+ launch with successful platform integration</p><p className="mb-4">Developed protection layers against account takeover and fraud</p><p className="mb-4">Oversaw critical programs including bug bounty, DAST, and vulnerability remediation.</p>
                          </div>
                        </div>
                      </div>

                      <div className="relative pl-8 pb-2">
                        <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-red-500 to-red-600 rounded-full shadow-lg animate-pulse hover:scale-125 hover:shadow-xl transition-all duration-200 cursor-pointer"></div>
                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border-l-4 border-red-500">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-0">
                              Director, Software Development Security
                            </h3>
                            <span className="text-sm font-bold text-white bg-gradient-to-r from-red-500 to-red-600 px-4 py-2 rounded-full shadow-lg border border-opacity-50">
                              March 2021 – October 2021
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                            WarnerMedia, Atlanta, GA
                          </p>
                          <div className="text-slate-700 dark:text-slate-300">
                            <p className="mb-4">Developed cutting-edge Software Development Security strategy for entire company</p><p className="mb-4">Built on existing WarnerMedia CSO Application Security platform</p><p className="mb-4">Made tremendous progress towards three-year strategic plan</p><p className="mb-4">Led team reporting directly to AT&T Chief Security Office</p><p className="mb-4">Focused on innovative solutions driving security forward.</p>
                          </div>
                        </div>
                      </div>

                      <div className="relative pl-8 pb-2">
                        <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full shadow-lg animate-pulse hover:scale-125 hover:shadow-xl transition-all duration-200 cursor-pointer"></div>
                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border-l-4 border-pink-500">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-0">
                              Sr. Manager, Application Security and Security Tools Engineering
                            </h3>
                            <span className="text-sm font-bold text-white bg-gradient-to-r from-pink-500 to-pink-600 px-4 py-2 rounded-full shadow-lg border border-opacity-50">
                              June 2019 – May 2020
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                            WarnerMedia, Atlanta, GA
                          </p>
                          <div className="text-slate-700 dark:text-slate-300">
                            <p className="mb-4">Transformed Turner DevSecOps team into robust WarnerMedia program</p><p className="mb-4">Catered to development processes for legacy TimeWarner, HBO, WarnerBros., and Turner</p><p className="mb-4">Designed advanced platform for streamlined source code scanning and automation</p><p className="mb-4">Led Security Tools Engineering function for Architecture and Engineering division</p><p className="mb-4">Acted as security sounding board for entire WarnerMedia development community.</p>
                          </div>
                        </div>
                      </div>

                      <div className="relative pl-8 pb-2">
                        <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full shadow-lg animate-pulse hover:scale-125 hover:shadow-xl transition-all duration-200 cursor-pointer"></div>
                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border-l-4 border-indigo-500">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-0">
                              Sr. Manager, DevOps Security
                            </h3>
                            <span className="text-sm font-bold text-white bg-gradient-to-r from-indigo-500 to-indigo-600 px-4 py-2 rounded-full shadow-lg border border-opacity-50">
                              June 2017 – June 2019
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                            Turner Broadcasting (became WarnerMedia), Atlanta, GA
                          </p>
                          <div className="text-slate-700 dark:text-slate-300">
                            <p className="mb-4">Established a cutting-edge DevSecOps team from scratch in the Information Security Office (ISO) at Turner</p><p className="mb-4">Aimed at helping various brands within the company adopt a &quot;secure by default&quot; mindset</p><p className="mb-4">Championed a culture of security and integrated critical tools into the CI/CD pipelines</p><p className="mb-4">Minimized security risks earlier in the development process</p><p className="mb-4">Worked alongside different teams at Turner, bridging the gap between security and developers</p><p className="mb-4">Identified and achieved top-notch security standards within each brand.</p>
                          </div>
                        </div>
                      </div>

                      <div className="relative pl-8 pb-2">
                        <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full shadow-lg animate-pulse hover:scale-125 hover:shadow-xl transition-all duration-200 cursor-pointer"></div>
                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border-l-4 border-teal-500">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-0">
                              Sr. DevOps Manager, IT
                            </h3>
                            <span className="text-sm font-bold text-white bg-gradient-to-r from-teal-500 to-teal-600 px-4 py-2 rounded-full shadow-lg border border-opacity-50">
                              February 2015 – May 2017
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                            Tripwire Inc., Alpharetta, GA
                          </p>
                          <div className="text-slate-700 dark:text-slate-300">
                            <p className="mb-4">Oversaw the SaaSOps and IT DevOps groups at Tripwire</p><p className="mb-4">Managed the Purecloud application and led the development of a cloud-hosted service</p><p className="mb-4">Led the development of a cloud-hosted service for our flagship product</p><p className="mb-4">Managed the R&D Dev/Test infrastructure, which is Tripwire&apos;s largest private cloud</p><p className="mb-4">Facilitated self-service virtual machine deployment using tools like Cloudbolt and Chef/Vagrant</p><p className="mb-4">Streamlined development workflows.</p>
                          </div>
                        </div>
                      </div>

                      <div className="relative pl-8 pb-2">
                        <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-lime-500 to-lime-600 rounded-full shadow-lg animate-pulse hover:scale-125 hover:shadow-xl transition-all duration-200 cursor-pointer"></div>
                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border-l-4 border-lime-500">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-0">
                              Engineering Manager
                            </h3>
                            <span className="text-sm font-bold text-white bg-gradient-to-r from-lime-500 to-lime-600 px-4 py-2 rounded-full shadow-lg border border-opacity-50">
                              April 2013 – February 2015
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                            Tripwire Inc. (acquired nCircle Network Security), Alpharetta, GA
                          </p>
                          <div className="text-slate-700 dark:text-slate-300">
                            <p className="mb-4">As an Engineering Manager for IP360, Purecloud, and SIH at Tripwire</p><p className="mb-4">Led the charge in driving top-notch product quality</p><p className="mb-4">Ensured that customer escalations were kept in check</p><p className="mb-4">Resolved conflicts, mentored team members, and recruited new talent</p><p className="mb-4">Maintained employee retention and building a top-performing team</p><p className="mb-4">Played a critical role in smoothly transitioning build infrastructure into the Tripwire environment when nCircle was acquired.</p>
                          </div>
                        </div>
                      </div>

                      <div className="relative pl-8 pb-2">
                        <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full shadow-lg animate-pulse hover:scale-125 hover:shadow-xl transition-all duration-200 cursor-pointer"></div>
                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border-l-4 border-amber-500">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-0">
                              Engineering Manager
                            </h3>
                            <span className="text-sm font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2 rounded-full shadow-lg border border-opacity-50">
                              March 2010 – April 2013
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                            nCircle Network Security, Alpharetta, GA
                          </p>
                          <div className="text-slate-700 dark:text-slate-300">
                            <p className="mb-4">As a Development Manager for nCircle&apos;s Compliance and Configuration Management software (CCM)</p><p className="mb-4">Led the development, QA, and content teams using Agile Methodology</p><p className="mb-4">Served as the Scrum Master and was hands-on in managing QA, design, code review, and backlog planning</p><p className="mb-4">Collaborated with Product Management to plan releases and determine long-term project goals</p><p className="mb-4">Maintained team retention and managed new hires</p><p className="mb-4">Oversaw quarterly budgeting for hardware and software purchases.</p>
                          </div>
                        </div>
                      </div>

                      <div className="relative pl-8 pb-2">
                        <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-rose-500 to-rose-600 rounded-full shadow-lg animate-pulse hover:scale-125 hover:shadow-xl transition-all duration-200 cursor-pointer"></div>
                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border-l-4 border-rose-500">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-0">
                              Advisory Software Engineer, Team Lead
                            </h3>
                            <span className="text-sm font-bold text-white bg-gradient-to-r from-rose-500 to-rose-600 px-4 py-2 rounded-full shadow-lg border border-opacity-50">
                              March 2005 – March 2010
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                            IBM Internet Security Systems, Inc. (ISS IBM), Atlanta, GA
                          </p>
                          <div className="text-slate-700 dark:text-slate-300">
                            <p className="mb-4">As the Team Lead of the Escalation Management Group (EMG)</p><p className="mb-4">Responsible for overseeing the resolution of high-level software defects on all released hardware and software platforms</p><p className="mb-4">Worked closely with customers to understand their needs and collaborated with the team to deliver solutions</p><p className="mb-4">Met both customer requirements and product design goals</p><p className="mb-4">My team traveled globally to customer sites, where we provided troubleshooting support</p><p className="mb-4">Helped optimize network design and architecture</p><p className="mb-4">Engaged with all departments across the IBM ISS organization to ensure customer issues were resolved effectively and efficiently.</p>
                          </div>
                        </div>
                      </div>

                      <div className="relative pl-8 pb-2">
                        <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-violet-500 to-violet-600 rounded-full shadow-lg animate-pulse hover:scale-125 hover:shadow-xl transition-all duration-200 cursor-pointer"></div>
                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border-l-4 border-violet-500">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-0">
                              Senior Quality Assurance Engineer, Team Lead
                            </h3>
                            <span className="text-sm font-bold text-white bg-gradient-to-r from-violet-500 to-violet-600 px-4 py-2 rounded-full shadow-lg border border-opacity-50">
                              February 2003 – March 2005
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                            Internet Security Systems, Inc. (ISS), Atlanta, GA
                          </p>
                          <div className="text-slate-700 dark:text-slate-300">
                            <p className="mb-4">As an internal member of the Unified Threat Management (UTM) appliance team</p><p className="mb-4">Collaborated with the development team to design and test the product</p><p className="mb-4">Played a key role in the design and functionality of the Intrusion Prevention System (IPS) module</p><p className="mb-4">Contributed to overall appliance security design</p><p className="mb-4">Promoted to Team Lead for the 2.0 release</p><p className="mb-4">Responsible for developing the test plan and ensuring thorough test case execution</p><p className="mb-4">Ran bug triages to prioritize defect fixes</p><p className="mb-4">Developed several automation tools to streamline testing.</p>
                          </div>
                        </div>
                      </div>

                      <div className="relative pl-8 pb-2">
                        <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full shadow-lg animate-pulse hover:scale-125 hover:shadow-xl transition-all duration-200 cursor-pointer"></div>
                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border-l-4 border-emerald-500">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-0">
                              Senior Quality Assurance Engineer, X-Force, Team Lead
                            </h3>
                            <span className="text-sm font-bold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-2 rounded-full shadow-lg border border-opacity-50">
                              June 2001 – February 2003
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                            Internet Security Systems, Inc. (ISS), Atlanta, GA
                          </p>
                          <div className="text-slate-700 dark:text-slate-300">
                            <p className="mb-4">Responsible for testing new security content updates for RealSecure Network Sensor</p><p className="mb-4">Tested ISS&apos;s market-leading IDS software</p><p className="mb-4">Played a key role in determining how security content was tested with other ISS products</p><p className="mb-4">Collaborated closely with the X-Force Research and Development team</p><p className="mb-4">Identified and addressed new vulnerabilities</p><p className="mb-4">Ensured that our customers were protected quickly and effectively.</p>
                          </div>
                        </div>
                      </div>

                      <div className="relative pl-8 pb-2">
                        <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full shadow-lg animate-pulse hover:scale-125 hover:shadow-xl transition-all duration-200 cursor-pointer"></div>
                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border-l-4 border-sky-500">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-0">
                              Quality Assurance Engineer
                            </h3>
                            <span className="text-sm font-bold text-white bg-gradient-to-r from-sky-500 to-sky-600 px-4 py-2 rounded-full shadow-lg border border-opacity-50">
                              June 2000 – June 2001
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                            Internet Security Systems, Inc. (ISS), Atlanta, GA
                          </p>
                          <div className="text-slate-700 dark:text-slate-300">
                            <p className="mb-4">Created and implemented test cases for the RealSecure software</p><p className="mb-4">Focused on the Solaris version testing</p><p className="mb-4">Conducted thorough testing of Attack Signatures on all supported platforms</p><p className="mb-4">Ensured product quality and reliability.</p>
                          </div>
                        </div>
                      </div>

                      <div className="relative pl-8 pb-2">
                        <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-lg animate-pulse hover:scale-125 hover:shadow-xl transition-all duration-200 cursor-pointer"></div>
                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-0">
                              Senior Technical Support Engineer
                            </h3>
                            <span className="text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 rounded-full shadow-lg border border-opacity-50">
                              November 1998 – June 2000
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                            Internet Security Systems, Inc. (ISS), Atlanta, GA
                          </p>
                          <div className="text-slate-700 dark:text-slate-300">
                            <p className="mb-4">Delivered customer support for RealSecure Network Sensor via phone and email</p><p className="mb-4">Resolved configuration issues and identified software bugs</p><p className="mb-4">Assisted with product deployment</p><p className="mb-4">Provided workarounds to overcome software limitations.</p>
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
}