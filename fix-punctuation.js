#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing punctuation in job descriptions...');

const filePath = path.join(__dirname, 'src/app/jerry/resume/page.tsx');

try {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix job descriptions by adding proper periods and spacing
  // This pattern matches the job description content and adds periods between sentences
  
  // FanDuel - Sr. Director, Head of Software Security
  content = content.replace(
    /As the leader of the Software Security team, I grew the organization from 3 to over 25 employees while building out three key security functions: Application, Product, and Platform Security\. I established a robust Application Security program that provides automated code scanning across all repositories and pull requests, seamlessly integrating security into the development process\. Furthermore, I built out the Product Security team, defining and implementing a new framework to reduce risk through threat modeling, risk assessments, and penetration testing\. My focus also included creating a dedicated Platform Security function to proactively mitigate risks in the platforms we build, ensuring a secure foundation for all our services/,
    'As the leader of the Software Security team, I grew the organization from 3 to over 25 employees while building out three key security functions: Application, Product, and Platform Security. I established a robust Application Security program that provides automated code scanning across all repositories and pull requests, seamlessly integrating security into the development process. Furthermore, I built out the Product Security team, defining and implementing a new framework to reduce risk through threat modeling, risk assessments, and penetration testing. My focus also included creating a dedicated Platform Security function to proactively mitigate risks in the platforms we build, ensuring a secure foundation for all our services.'
  );
  
  // FanDuel - Director, Head of Software Security
  content = content.replace(
    /Leading application, product, and cloud security initiatives to safeguard our software and ensure trust for our players\. Grew team from 3 employees to over 25 employees while building comprehensive security functions/,
    'Leading application, product, and cloud security initiatives to safeguard our software and ensure trust for our players. Grew team from 3 employees to over 25 employees while building comprehensive security functions.'
  );
  
  // Warner Bros. Discovery
  content = content.replace(
    /Transformed program from supporting only Turner Broadcasting to supporting all of WarnerMedia\. Support more than 3500 developers creating over 4000 applications with full security services\. Developed Artemis, a state-of-the-art platform scanning 22,000\+ code repositories\. Built Product Security team partnering with HBO Max, CNN, and DC Universe brands\. Provide threat modeling, DAST, source code scanning, bug bounties, and remediation/,
    'Transformed program from supporting only Turner Broadcasting to supporting all of WarnerMedia. Support more than 3500 developers creating over 4000 applications with full security services. Developed Artemis, a state-of-the-art platform scanning 22,000+ code repositories. Built Product Security team partnering with HBO Max, CNN, and DC Universe brands. Provide threat modeling, DAST, source code scanning, bug bounties, and remediation.'
  );
  
  // WarnerMedia - Director, Product and Application Security
  content = content.replace(
    /Expanded role to include Product Security and Application Security Vulnerability Management\. Created new Product Security team for Direct-to-Consumer platforms\. Assembled Security Operations team for CNN\+ launch with successful platform integration\. Developed protection layers against account takeover and fraud\. Oversaw critical programs including bug bounty, DAST, and vulnerability remediation/,
    'Expanded role to include Product Security and Application Security Vulnerability Management. Created new Product Security team for Direct-to-Consumer platforms. Assembled Security Operations team for CNN+ launch with successful platform integration. Developed protection layers against account takeover and fraud. Oversaw critical programs including bug bounty, DAST, and vulnerability remediation.'
  );
  
  // WarnerMedia - Director, Software Development Security
  content = content.replace(
    /Developed cutting-edge Software Development Security strategy for entire company\. Built on existing WarnerMedia CSO Application Security platform\. Made tremendous progress towards three-year strategic plan\. Led team reporting directly to AT&T Chief Security Office\. Focused on innovative solutions driving security forward/,
    'Developed cutting-edge Software Development Security strategy for entire company. Built on existing WarnerMedia CSO Application Security platform. Made tremendous progress towards three-year strategic plan. Led team reporting directly to AT&T Chief Security Office. Focused on innovative solutions driving security forward.'
  );
  
  // WarnerMedia - Sr. Manager, Application Security and Security Tools Engineering
  content = content.replace(
    /Transformed Turner DevSecOps team into robust WarnerMedia program Catered to development processes for legacy TimeWarner, HBO, WarnerBros\., and Turner Designed advanced platform for streamlined source code scanning and automation Led Security Tools Engineering function for Architecture and Engineering division Acted as security sounding board for entire WarnerMedia development community/,
    'Transformed Turner DevSecOps team into robust WarnerMedia program. Catered to development processes for legacy TimeWarner, HBO, WarnerBros., and Turner. Designed advanced platform for streamlined source code scanning and automation. Led Security Tools Engineering function for Architecture and Engineering division. Acted as security sounding board for entire WarnerMedia development community.'
  );
  
  // Turner Broadcasting - Sr. Manager, DevOps Security
  content = content.replace(
    /Established a cutting-edge DevSecOps team from scratch in the Information Security Office \(ISO\) at Turner Aimed at helping various brands within the company adopt a &quot;secure by default&quot; mindset Championed a culture of security and integrated critical tools into the CI\/CD pipelines Minimized security risks earlier in the development process Worked alongside different teams at Turner, bridging the gap between security and developers Identified and achieved top-notch security standards within each brand/,
    'Established a cutting-edge DevSecOps team from scratch in the Information Security Office (ISO) at Turner. Aimed at helping various brands within the company adopt a "secure by default" mindset. Championed a culture of security and integrated critical tools into the CI/CD pipelines. Minimized security risks earlier in the development process. Worked alongside different teams at Turner, bridging the gap between security and developers. Identified and achieved top-notch security standards within each brand.'
  );
  
  // Tripwire Inc. - Sr. DevOps Manager, IT
  content = content.replace(
    /Oversaw the SaaSOps and IT DevOps groups at Tripwire\. Managed the Purecloud application and led the development of a cloud-hosted service\. Led the development of a cloud-hosted service for our flagship product\. Managed the R&D Dev\/Test infrastructure, which is Tripwire&apos;s largest private cloud\. Facilitated self-service virtual machine deployment using tools like Cloudbolt and Chef\/Vagrant\. Streamlined development workflows/,
    'Oversaw the SaaSOps and IT DevOps groups at Tripwire. Managed the Purecloud application and led the development of a cloud-hosted service. Led the development of a cloud-hosted service for our flagship product. Managed the R&D Dev/Test infrastructure, which is Tripwire\'s largest private cloud. Facilitated self-service virtual machine deployment using tools like Cloudbolt and Chef/Vagrant. Streamlined development workflows.'
  );
  
  // Tripwire Inc. - Engineering Manager
  content = content.replace(
    /As an Engineering Manager for IP360, Purecloud, and SIH at Tripwire, I led the charge in driving top-notch product quality\. Ensured that customer escalations were kept in check\. Resolved conflicts, mentored team members, and recruited new talent\. Maintained employee retention and building a top-performing team\. Played a critical role in smoothly transitioning build infrastructure into the Tripwire environment when nCircle was acquired/,
    'As an Engineering Manager for IP360, Purecloud, and SIH at Tripwire, I led the charge in driving top-notch product quality. Ensured that customer escalations were kept in check. Resolved conflicts, mentored team members, and recruited new talent. Maintained employee retention and building a top-performing team. Played a critical role in smoothly transitioning build infrastructure into the Tripwire environment when nCircle was acquired.'
  );
  
  // nCircle Network Security - Engineering Manager
  content = content.replace(
    /As a Development Manager for nCircle&apos;s Compliance and Configuration Management software \(CCM\), I led the development, QA, and content teams using Agile Methodology\. Served as the Scrum Master and was hands-on in managing QA, design, code review, and backlog planning\. Collaborated with Product Management to plan releases and determine long-term project goals\. Maintained team retention and managed new hires\. Oversaw quarterly budgeting for hardware and software purchases/,
    'As a Development Manager for nCircle\'s Compliance and Configuration Management software (CCM), I led the development, QA, and content teams using Agile Methodology. Served as the Scrum Master and was hands-on in managing QA, design, code review, and backlog planning. Collaborated with Product Management to plan releases and determine long-term project goals. Maintained team retention and managed new hires. Oversaw quarterly budgeting for hardware and software purchases.'
  );
  
  // IBM Internet Security Systems - Advisory Software Engineer, Team Lead
  content = content.replace(
    /As the Team Lead of the Escalation Management Group \(EMG\), I was responsible for overseeing the resolution of high-level software defects on all released hardware and software platforms\. Worked closely with customers to understand their needs and collaborated with the team to deliver solutions\. Met both customer requirements and product design goals\. My team traveled globally to customer sites, where we provided troubleshooting support\. Helped optimize network design and architecture\. Engaged with all departments across the IBM ISS organization to ensure customer issues were resolved effectively and efficiently/,
    'As the Team Lead of the Escalation Management Group (EMG), I was responsible for overseeing the resolution of high-level software defects on all released hardware and software platforms. Worked closely with customers to understand their needs and collaborated with the team to deliver solutions. Met both customer requirements and product design goals. My team traveled globally to customer sites, where we provided troubleshooting support. Helped optimize network design and architecture. Engaged with all departments across the IBM ISS organization to ensure customer issues were resolved effectively and efficiently.'
  );
  
  // Internet Security Systems - Senior Quality Assurance Engineer, Team Lead
  content = content.replace(
    /As an internal member of the Unified Threat Management \(UTM\) appliance team, I collaborated with the development team to design and test the product\. Played a key role in the design and functionality of the Intrusion Prevention System \(IPS\) module\. Contributed to overall appliance security design\. Promoted to Team Lead for the 2\.0 release\. Responsible for developing the test plan and ensuring thorough test case execution\. Ran bug triages to prioritize defect fixes\. Developed several automation tools to streamline testing/,
    'As an internal member of the Unified Threat Management (UTM) appliance team, I collaborated with the development team to design and test the product. Played a key role in the design and functionality of the Intrusion Prevention System (IPS) module. Contributed to overall appliance security design. Promoted to Team Lead for the 2.0 release. Responsible for developing the test plan and ensuring thorough test case execution. Ran bug triages to prioritize defect fixes. Developed several automation tools to streamline testing.'
  );
  
  // Internet Security Systems - Senior Quality Assurance Engineer, X-Force, Team Lead
  content = content.replace(
    /Responsible for testing new security content updates for RealSecure Network Sensor\. Tested ISS&apos;s market-leading IDS software\. Played a key role in determining how security content was tested with other ISS products\. Collaborated closely with the X-Force Research and Development team\. Identified and addressed new vulnerabilities\. Ensured that our customers were protected quickly and effectively/,
    'Responsible for testing new security content updates for RealSecure Network Sensor. Tested ISS\'s market-leading IDS software. Played a key role in determining how security content was tested with other ISS products. Collaborated closely with the X-Force Research and Development team. Identified and addressed new vulnerabilities. Ensured that our customers were protected quickly and effectively.'
  );
  
  // Internet Security Systems - Quality Assurance Engineer
  content = content.replace(
    /Created and implemented test cases for the RealSecure software\. Focused on the Solaris version testing\. Conducted thorough testing of Attack Signatures on all supported platforms\. Ensured product quality and reliability/,
    'Created and implemented test cases for the RealSecure software. Focused on the Solaris version testing. Conducted thorough testing of Attack Signatures on all supported platforms. Ensured product quality and reliability.'
  );
  
  // Internet Security Systems - Senior Technical Support Engineer
  content = content.replace(
    /Delivered customer support for RealSecure Network Sensor via phone and email\. Resolved configuration issues and identified software bugs\. Assisted with product deployment\. Provided workarounds to overcome software limitations/,
    'Delivered customer support for RealSecure Network Sensor via phone and email. Resolved configuration issues and identified software bugs. Assisted with product deployment. Provided workarounds to overcome software limitations.'
  );
  
  fs.writeFileSync(filePath, content, 'utf8');
  
  console.log('✅ Fixed punctuation in all job descriptions');
  console.log('📝 Changes made:');
  console.log('   - Added proper periods between sentences');
  console.log('   - Fixed spacing and sentence structure');
  console.log('   - Improved readability of all job descriptions');
  
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
