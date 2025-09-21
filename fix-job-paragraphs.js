#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read the resume page file
const filePath = path.join(__dirname, 'src/app/jerry/resume/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Function to convert bullet points to paragraph format
function formatJobDescription(text) {
  // Remove the <ul> and <li> tags and bullet points
  const paragraph = text
    .replace(/<ul className="space-y-2">/g, '')
    .replace(/<\/ul>/g, '')
    .replace(/<li>/g, '')
    .replace(/<\/li>/g, '')
    .replace(/• /g, '')
    .replace(/\n\s*/g, ' ')
    .trim();
  
  return `<div className="text-slate-700 dark:text-slate-300">
                        ${paragraph}
                      </div>`;
}

// Find all job descriptions with bullet points and fix them
const bulletPointRegex = /<div className="text-slate-700 dark:text-slate-300">\s*<ul className="space-y-2">[\s\S]*?<\/ul>\s*<\/div>/g;

content = content.replace(bulletPointRegex, (match) => {
  // Extract the text content between the ul tags
  const ulMatch = match.match(/<ul className="space-y-2">([\s\S]*?)<\/ul>/);
  if (ulMatch) {
    const bulletText = ulMatch[1];
    return formatJobDescription(bulletText);
  }
  return match;
});

// Write the updated content back
fs.writeFileSync(filePath, content, 'utf8');

console.log('✅ Job descriptions converted from bullet points to paragraphs!');
console.log('📝 All job content now displays as proper paragraph text');
console.log('🎯 Resume content is now in the correct format');
