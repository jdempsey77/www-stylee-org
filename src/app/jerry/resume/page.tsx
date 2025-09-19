import { 
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
              Jerry Dempsey
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 font-semibold">
              Sr. Director, Head of Software Security
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
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
                href="https://www.google.com/maps/place/Roswell,+GA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-700 px-4 py-2 text-white hover:bg-slate-800 transition-colors"
              >
                <MapPinIcon className="w-5 h-5" />
                Roswell, GA
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
                  
                  <div className="border-l-4 border-slate-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Sr. Director, Head of Software Security
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      FanDuel, Atlanta, GA | March 2025 – Present
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      <li>• As the leader of the Software Security team, I grew the organization from 3 to over 25 employees while building out three key security functions</li>
                      <li>• Application, Product, and Platform Security. I established a robust Application Security program that provides automated code scanning across all repositories and pull requests</li>
                      <li>• Seamlessly integrating security into the development process. Furthermore, I built out the Product Security team, defining and implementing a new framework to reduce risk through threat modeling</li>
                      <li>• Risk assessments, and penetration testing. My focus also included creating a dedicated Platform Security function to proactively mitigate risks in the platforms we build</li>
                      <li>• Ensuring a secure foundation for all our services</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-gray-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Director, Head of Software Security
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      FanDuel, Atlanta, GA | May 2023 – March 2025
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      <li>• Leading application, product, and cloud security initiatives to safeguard our software and ensure trust for our players</li>
                      <li>• Grew team from 3 employees to over 25 employees while building comprehensive security functions</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Director, Product and Application Security
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      Warner Bros. Discovery, Atlanta, GA | April 2022 – December 2024
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      <li>• Transformed program from supporting only Turner Broadcasting to supporting all of WarnerMedia</li>
                      <li>• Support more than 3500 developers creating over 4000 applications with full security services</li>
                      <li>• Developed Artemis, a state-of-the-art platform scanning 22,000+ code repositories</li>
                      <li>• Built Product Security team partnering with HBO Max, CNN, and DC Universe brands</li>
                      <li>• Provide threat modeling, DAST, source code scanning, bug bounties, and remediation</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-cyan-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Director, Product and Application Security
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      WarnerMedia, Atlanta, GA | October 2021 – April 2022
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      <li>• Expanded role to include Product Security and Application Security Vulnerability Management</li>
                      <li>• Created new Product Security team for Direct-to-Consumer platforms</li>
                      <li>• Assembled Security Operations team for CNN+ launch with successful platform integration</li>
                      <li>• Developed protection layers against account takeover and fraud</li>
                      <li>• Oversaw critical programs including bug bounty, DAST, and vulnerability remediation</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Director, Software Development Security
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      WarnerMedia, Atlanta, GA | March 2021 – October 2021
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      <li>• Developed cutting-edge Software Development Security strategy for entire company</li>
                      <li>• Built on existing WarnerMedia CSO Application Security platform</li>
                      <li>• Made tremendous progress towards three-year strategic plan</li>
                      <li>• Led team reporting directly to AT&T Chief Security Office</li>
                      <li>• Focused on innovative solutions driving security forward</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-slate-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Sr. Manager, Application Security and Security Tools Engineering
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      WarnerMedia, Atlanta, GA | June 2019 – May 2020
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      <li>• Transformed Turner DevSecOps team into robust WarnerMedia program</li>
                      <li>• Catered to development processes for legacy TimeWarner, HBO, WarnerBros., and Turner</li>
                      <li>• Designed advanced platform for streamlined source code scanning and automation</li>
                      <li>• Led Security Tools Engineering function for Architecture and Engineering division</li>
                      <li>• Acted as security sounding board for entire WarnerMedia development community</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              
              {/* Education */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                  <BriefcaseIcon className="w-6 h-6 mr-3 text-gray-600 dark:text-gray-400" />
                  Education
                </h3>
                <div className="space-y-2">
                  <p className="text-slate-700 dark:text-slate-300">Bachelor of Science in Computer Science</p>
                  <p className="text-slate-700 dark:text-slate-300">Georgia Institute of Technology, Atlanta, GA</p>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                  <BriefcaseIcon className="w-6 h-6 mr-3 text-gray-600 dark:text-gray-400" />
                  Certifications
                </h3>
                <ul className="space-y-2">
                  <li className="text-slate-700 dark:text-slate-300">• Certified Information Security Manager (CISM)</li>
                  <li className="text-slate-700 dark:text-slate-300">• Certified Information Systems Security Professional (CISSP)</li>
                  <li className="text-slate-700 dark:text-slate-300">• Certified Ethical Hacker (CEH)</li>
                  <li className="text-slate-700 dark:text-slate-300">• AWS Certified Security - Specialty</li>
                  <li className="text-slate-700 dark:text-slate-300">• CompTIA Security+</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}