#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read the resume page file
const filePath = path.join(__dirname, 'src/app/jerry/resume/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Function to convert bullet points to proper list format
function formatJobDescription(text) {
  // Split by bullet points and clean up
  const bullets = text.split('•').map(bullet => bullet.trim()).filter(bullet => bullet.length > 0);
  
  if (bullets.length <= 1) {
    // If only one or no bullets, return as is
    return `<div className="text-slate-700 dark:text-slate-300">\n                        ${text}\n                      </div>`;
  }
  
  // Convert to proper list format
  const listItems = bullets.map(bullet => `                          <li>• ${bullet}</li>`).join('\n');
  
  return `<div className="text-slate-700 dark:text-slate-300">
                        <ul className="space-y-2">
${listItems}
                        </ul>
                      </div>`;
}

// Find all job descriptions that need fixing
const jobDescriptionRegex = /<div className="text-slate-700 dark:text-slate-300">\s*• [^<]+ • [^<]+/g;

content = content.replace(jobDescriptionRegex, (match) => {
  // Extract the text content
  const textMatch = match.match(/<div className="text-slate-700 dark:text-slate-300">\s*(.+?)\s*<\/div>/s);
  if (textMatch) {
    const jobText = textMatch[1].trim();
    return formatJobDescription(jobText);
  }
  return match;
});

// Write the updated content back
fs.writeFileSync(filePath, content, 'utf8');

console.log('✅ Job descriptions have been formatted with proper bullet points!');
console.log('📝 Each bullet point is now on its own line for better readability');
console.log('🎯 All job content should now be fully visible');
