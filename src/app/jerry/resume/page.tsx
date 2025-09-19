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
              Product and Application Security Leader
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 font-semibold">
              Product and Application Security Leader
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
              
            </p>
            
            {/* Contact Information */}
            <div className="flex flex-wrap justify-center gap-3">
              <a 
                href="mailto:Roswell, GA  •  +1.678.467.5088  • jerry@stylee.org  • https://www.linkedin.com/in/jerryldempsey"
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
                      _______________________________________________________________________________________________________________
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-gray-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Sr. Director, Head of Software Security        March 2025 – Present
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Fanduel, Atlanta, GA
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-cyan-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      As the leader of the Software Security team, I grew the organization from 3 to over 25 employees while building out three key security functions: Application, Product, and Platform Security. I established a robust Application Security program that provides automated code scanning across all repositories and pull requests, seamlessly integrating security into the development process. Furthermore, I built out the Product Security team, defining and implementing a new framework to reduce risk through threat modeling, risk assessments, and penetration testing. My focus also included creating a dedicated Platform Security function to proactively mitigate risks in the platforms we build, ensuring a secure foundation for all our services.
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Director, Head of Software Security        May 2023 – March 2025
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-slate-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Fanduel, Atlanta, GA
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-gray-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Leading application, product, and cloud security initiatives to safeguard our software and ensure trust for our players.
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Director, Product and Application Security        April 2022 – Present
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-cyan-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Warner Bros. Discovery, Atlanta, GA
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      In just over five years, I took a program that only supported Turner Broadcasting and transformed it into one that now supports all of WarnerMedia. My team and responsibilities grew, but we remained laser-focused on collaborating with development teams to seamlessly integrate security into the Software Development Lifecycle. Today, our program supports more than 3500 developers who create over 4000 applications, providing a full range of services including threat modeling, DAST, source code scanning, bug bounties, and remediation.
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-slate-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Under my leadership, my team developed Artemis, a state-of-the-art platform that scans source code at scale across the entire company, identifying vulnerabilities and secrets across more than 22,000 code repositories. Our platform uses cutting-edge commercial and open-source tools to orchestrate scanning, operating both as self-service and as a continuous source code security risk monitor.
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-gray-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Director, Product and Application Security        October 2021 – April 2022
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      WarnerMedia (became Warner Bros. Discovery), Atlanta, GA
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-cyan-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      As my role expanded to include Product Security and Application Security Vulnerability Management, my Application Security team grew to encompass all aspects of application security throughout WarnerMedia. I also created a new Product Security team dedicated to supporting security for our Direct-to-Consumer platforms. My responsibilities included overseeing critical programs like bug bounty, DAST, and application security vulnerability remediation.
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      To prepare for the launch of CNN+, I assembled a top-notch Security Operations team that worked alongside core development work streams to ensure the platform&amp;apos;s security readiness. Thanks to their efforts, the service was launched successfully, with the team developing runbooks, assessing security risks, and driving change before the launch. The team also developed protection layers to guard against account takeover and fraud. Although the service was later shut down, the launch was an undeniable success, with the team successfully integrating the service into the platform.
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-slate-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Director, Software Development Security, AT&amp;T Chief Security Office        March 2021 – October 2021
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-gray-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      WarnerMedia, Atlanta, GA
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Promoted to Director. Sr. Manager, Software Development Security, AT&amp;T Chief Security Office        May 2020 – March 2021
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-cyan-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      WarnerMedia, Atlanta, GA
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      My team reported directly to ATT and developed a cutting-edge Software Development Security strategy for the entire company, building on our existing WarnerMedia CSO Application Security platform. Despite making tremendous progress towards our three-year plan over the course of a year, our efforts were cut short by the restructuring of WarnerMedia CSO back into WarnerMedia, due to the pending Warner Bros. Discovery merger. Nonetheless, I&amp;apos;m proud of the progress we made and remain confident in our ability to develop innovative solutions that drive security forward.
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-slate-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Sr. Manager,  Application Security and Security Tools Engineering        June 2019 – May 2020
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-gray-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      WarnerMedia, Atlanta, GA
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Transformed the Turner DevSecOps team into a robust WarnerMedia program that catered to development processes for legacy TimeWarner, HBO, WarnerBros., and Turner. The team designed and implemented an advanced platform that streamlined the process of source code scanning and automation for all WarnerMedia teams. Furthermore, the team played a crucial role in advising the development teams and acted as a security sounding board for the entire WarnerMedia development community.
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-cyan-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      As I grew within the organization, I took on the added responsibility of leading the Security Tools Engineering function. This team was tasked with developing and maintaining the core security tools that underpinned the Architecture and Engineering division. By leveraging my expertise, we were able to establish a strong foundation of security for the organization, staying ahead of emerging threats and challenges with confidence.
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Sr. Manager, DevOps Security        June 2017 – June 2019
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-slate-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Turner Broadcasting (became WarnerMedia), Atlanta, GA
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-gray-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Established a cutting-edge DevSecOps team from scratch in the Information Security Office (ISO) at Turner, aimed at helping various brands within the company adopt a &amp;quot;secure by default&amp;quot; mindset. With my team, we championed a culture of security and integrated critical tools into the CI/CD pipelines to minimize security risks earlier in the development process. We also worked alongside different teams at Turner, bridging the gap between security and developers to identify and achieve top-notch security standards within each brand.
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Sr. DevOps Manager, IT        February 2015 – May 2017
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-cyan-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Tripwire Inc., Alpharetta, GA
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      I oversaw the SaaSOps and IT DevOps groups at Tripwire, managing the Purecloud application and leading the development of a cloud-hosted service for our flagship product. Additionally, I managed the R&amp;D Dev/Test infrastructure, which is Tripwire&amp;apos;s largest private cloud, and facilitated self-service virtual machine  deployment using tools like Cloudbolt and Chef/Vagrant to streamline development workflows
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-slate-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Engineering Manager        April 2013 – February 2015
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-gray-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Tripwire Inc.(acquired nCircle Network Security), Alpharetta, GA
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      As an Engineering Manager for IP360, Purecloud, and SIH at Tripwire, I led the charge in driving top-notch product quality and ensuring that customer escalations were kept in check. Whether it was resolving conflicts, mentoring team members, or recruiting new talent, I always had my eye on maintaining employee retention and building a top-performing team. And when nCircle was acquired, I played a critical role in smoothly transitioning build infrastructure into the Tripwire environment.
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-cyan-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Engineering Manager        March 2010 – April 2013
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      nCircle Network Security, Alpharetta, GA
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-slate-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      As a Development Manager for nCircle&amp;apos;s Compliance and Configuration Management software (CCM), I led the development, QA, and content teams using Agile Methodology. In addition to serving as the Scrum Master, I was hands-on in managing QA, design, code review, and backlog planning. Collaborating with Product Management, I helped plan releases and determine long-term project goals. I also maintained team retention and managed new hires, as well as overseeing quarterly budgeting for hardware and software purchases.
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-gray-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Advisory Software Engineer, Team Lead        March 2005 – March 2010
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      IBM Internet Security Systems, Inc.(ISS IBM)
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-cyan-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      As the Team Lead of the Escalation Management Group (EMG), I was responsible for overseeing the resolution of high-level software defects on all released hardware and software platforms. I worked closely with customers to understand their needs and collaborated with the team to deliver solutions that met both customer requirements and product design goals. My team traveled globally to customer sites, where we provided troubleshooting support and helped optimize network design and architecture. The EMG team engaged with all departments across the IBM ISS organization to ensure customer issues were resolved effectively and efficiently.
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Senior Quality Assurance Engineer, Team Lead        February 2003 – March 2005
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-slate-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Internet Security Systems, Inc.(ISS)
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-gray-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      As an internal member of the Unified Threat Management (UTM) appliance team, I collaborated with the development team to design and test the product, playing a key role in the design and functionality of the Intrusion Prevention System (IPS) module and overall appliance security. I was promoted to Team Lead for the 2.0 release, responsible for developing the test plan, ensuring thorough test case execution, and running bug triages to prioritize defect fixes. To streamline testing, I also developed several automation tools
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Senior Quality Assurance Engineer, X-Force, Team Lead        June 2001 – February 2003
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-cyan-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Internet Security Systems, Inc.(ISS)
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      In this position, I was responsible for testing new security content updates for RealSecure Network Sensor, ISS&amp;apos;s market-leading IDS software. Additionally, I played a key role in determining how security content was tested with other ISS products. I collaborated closely with the X-Force Research and Development team to identify and address new vulnerabilities, ensuring that our customers were protected quickly and effectively.
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-slate-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Quality Assurance Engineer        June 2000 – June 2001
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-gray-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Internet Security Systems, Inc.(ISS)
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-600 pl-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      In my role, I created and implemented test cases for the RealSecure software, with a focus on the Solaris version. I also conducted thorough testing of Attack Signatures on all supported platforms to ensure product quality and reliability.
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      ,  | 
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                      
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
                  
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                  <BriefcaseIcon className="w-6 h-6 mr-3 text-gray-600 dark:text-gray-400" />
                  Certifications
                </h3>
                <ul className="space-y-2">
                  
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                  <BriefcaseIcon className="w-6 h-6 mr-3 text-gray-600 dark:text-gray-400" />
                  Skills
                </h3>
                <ul className="space-y-2">
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}