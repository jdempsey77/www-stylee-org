# Google Drive Resume Pipeline Guide

## Overview

This pipeline allows you to use Google Drive as your source of truth for your resume. You can edit your resume in Google Docs, and the pipeline will automatically sync it to both your website and PDF.

## How It Works

### Current Setup
- **Source**: Google Drive document (editable in Google Docs)
- **Sync File**: `public/Jerry_Dempsey_Resume_Google.md` (markdown format)
- **Website**: `/jerry/resume` page (React component)
- **PDF**: `jerry-dempsey-resume.pdf` (downloadable PDF)

### Pipeline Process
1. **Creates markdown sync file** with your resume content
2. **Parses markdown content** into structured data
3. **Generates** the website resume page
4. **Creates** a clean PDF
5. **Builds** the website

## Usage

### Quick Command
```bash
npm run resume:google
```

### Step-by-Step Workflow

1. **Edit Your Resume** (in Google Drive)
   ```
   Edit: Your Google Drive document
   ```

2. **Update the Sync File** (when needed)
   ```
   Edit: public/Jerry_Dempsey_Resume_Google.md
   ```

3. **Run the Pipeline**
   ```bash
   npm run resume:google
   ```

4. **Deploy** (when ready)
   ```bash
   git add .
   git commit -m "Update resume with latest information"
   git push origin main
   ```

## Google Drive Integration Options

### Option 1: Manual Sync (Current)
- Edit your resume in Google Drive
- Copy content to `public/Jerry_Dempsey_Resume_Google.md`
- Run `npm run resume:google`

### Option 2: Google Drive API (Future Enhancement)
- Direct integration with Google Drive API
- Automatic sync when document changes
- Real-time updates

### Option 3: Google Docs Export
- Export Google Doc as markdown
- Replace sync file content
- Run pipeline

## Markdown Format

The sync file uses this structure:

```markdown
# Jerry Dempsey Resume

## Contact Information
- **Name**: Jerry Dempsey
- **Title**: Product and Application Security Leader
- **Email**: jerry@stylee.org
- **Location**: Roswell, GA

## Professional Summary
[Your professional summary here]

## Professional Experience

### Head of Software Security
**FanDuel, Atlanta, GA | January 2025 – Present**

- Lead comprehensive security strategy for FanDuel's platform
- Ensure customer trust through robust security measures
- Oversee Platform Security, Application Security, and Product Security initiatives
- Drive security culture and best practices across engineering teams

### Previous Job Title
**Company, Location | Date Range**

- Bullet point 1
- Bullet point 2
- Bullet point 3

## Education
- Bachelor of Science in Computer Science
- Georgia Institute of Technology, Atlanta, GA

## Certifications
- Certified Information Security Manager (CISM)
- Certified Information Systems Security Professional (CISSP)
- Certified Ethical Hacker (CEH)

## Technical Skills

### Security Technologies
- SIEM, IDS/IPS, Firewalls, Vulnerability Scanners

### Programming Languages
- Python, Java, C++, JavaScript, PowerShell, Bash

### Cloud Platforms
- AWS, Azure, Google Cloud Platform

### Security Frameworks
- NIST, ISO 27001, OWASP, PCI DSS
```

## What Gets Updated

When you run `npm run resume:google`, it updates:

✅ **Website Resume Page** (`/jerry/resume`)
- React component with your latest information
- Professional styling matching your site
- Download button for PDF

✅ **PDF Resume** (`jerry-dempsey-resume.pdf`)
- Clean, professional PDF
- No website UI elements
- Ready for sharing with employers

✅ **Website Build**
- Complete site rebuild with latest changes
- Ready for deployment

## File Structure

```
jerry-dempsey-website/
├── public/
│   ├── Jerry_Dempsey_Resume_Google.md     # Google Drive sync file
│   └── jerry-dempsey-resume.pdf           # Generated PDF
├── src/app/jerry/resume/
│   └── page.tsx                           # Generated website page
├── scripts/
│   └── google-drive-pipeline.js           # Pipeline script
└── out/
    └── jerry-dempsey-resume.pdf           # PDF for deployment
```

## Benefits of Google Drive Integration

### ✅ Easy Editing
- Edit in familiar Google Docs interface
- Real-time collaboration
- Version history
- Auto-save

### ✅ Accessibility
- Edit from any device
- Share with others for feedback
- Access from anywhere

### ✅ Backup & Sync
- Automatic cloud backup
- Never lose your resume
- Sync across devices

### ✅ Professional Formatting
- Google Docs formatting
- Easy to maintain
- Consistent structure

## Future Enhancements

### Google Drive API Integration
```javascript
// Future: Direct Google Drive API integration
const { google } = require('googleapis');

async function downloadFromGoogleDrive() {
  const auth = new google.auth.GoogleAuth({
    keyFile: 'credentials.json',
    scopes: ['https://www.googleapis.com/auth/drive.readonly']
  });
  
  const drive = google.drive({ version: 'v3', auth });
  const response = await drive.files.export({
    fileId: 'YOUR_GOOGLE_DOC_ID',
    mimeType: 'text/plain'
  });
  
  return response.data;
}
```

### Automated Sync
- Webhook integration
- Automatic updates when Google Doc changes
- Real-time synchronization

### Multiple Formats
- Support for different resume versions
- ATS-friendly formats
- Custom styling options

## Troubleshooting

### Common Issues

**"Sync file not found"**
- Ensure `Jerry_Dempsey_Resume_Google.md` exists in `public/` directory
- Check the file name is exactly correct

**"Markdown parsing failed"**
- Verify the markdown format follows the expected structure
- Check for missing headers or formatting issues

**"PDF generation failed"**
- Make sure Puppeteer is installed
- Check that no other processes are using temp files

### Getting Help

1. Check the console output for specific error messages
2. Verify the markdown format matches the expected structure
3. Ensure all dependencies are installed: `npm install`
4. Try running individual steps to isolate issues

## Summary

The Google Drive pipeline gives you:
- ✅ **Google Drive as source of truth**: Edit in familiar interface
- ✅ **Easy synchronization**: Copy content to sync file
- ✅ **Automatic updates**: Website and PDF stay in sync
- ✅ **Professional formatting**: Clean, consistent styling
- ✅ **Cloud backup**: Never lose your resume
- ✅ **Collaboration**: Share and get feedback easily

**Ready to use!** Edit your resume in Google Drive, update the sync file, and run `npm run resume:google` whenever you need to update your resume.
