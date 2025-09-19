# Resume Pipeline Documentation

## Overview

The Resume Pipeline is an automated system that keeps your resume synchronized across multiple formats:
- **Source**: `Jerry_Dempsey_Resume.docx` (Word document - single source of truth)
- **Website**: `/jerry/resume` page (React component)
- **PDF**: `jerry-dempsey-resume.pdf` (downloadable PDF)

## How It Works

### 1. Source Document (`Jerry_Dempsey_Resume.docx`)
This is your **single source of truth**. Update this document with any resume changes, and the pipeline will automatically propagate those changes to both the website and PDF.

### 2. Pipeline Script (`scripts/resume-pipeline.js`)
The pipeline script:
1. **Parses** the Word document content
2. **Extracts** structured resume data
3. **Generates** the React component for the website
4. **Creates** a clean HTML version for PDF generation
5. **Builds** the website with updated content

### 3. Automated Updates
When you run the pipeline, it automatically:
- Updates the website resume page
- Generates a new PDF with the latest content
- Builds the site for deployment

## Usage

### Quick Commands

```bash
# Update resume from Word doc and rebuild website
npm run resume:update

# Update resume, build, and preview locally
npm run resume:build

# Complete pipeline: update, build, and serve locally
npm run resume:preview
```

### Step-by-Step Workflow

1. **Edit the Word Document**
   ```
   Edit: Jerry_Dempsey_Resume.docx
   ```

2. **Run the Pipeline**
   ```bash
   npm run resume:update
   ```

3. **Preview Changes** (optional)
   ```bash
   npm run resume:preview
   ```

4. **Deploy** (when ready)
   ```bash
   git add .
   git commit -m "Update resume with latest information"
   git push origin main
   ```

## Document Format

The Word document should follow this structure:

```
JERRY DEMPSEY
Product and Application Security Leader

Contact Information:
Email: jerry@stylee.org
Location: Roswell, GA

PROFESSIONAL SUMMARY
[Your professional summary here]

PROFESSIONAL EXPERIENCE

Job Title
Company, Location | Date Range
• Bullet point 1
• Bullet point 2
• Bullet point 3

Next Job Title
Company, Location | Date Range
• Bullet point 1
• Bullet point 2

EDUCATION
[Education information]

CERTIFICATIONS
• Certification 1
• Certification 2

TECHNICAL SKILLS
[Skills information]
```

## Features

### ✅ Automatic Synchronization
- Changes in Word doc automatically update website and PDF
- No manual copying or pasting required
- Consistent formatting across all formats

### ✅ Clean PDF Generation
- PDFs are generated from clean HTML (no website UI elements)
- Professional formatting optimized for printing
- No analytics popups or navigation elements

### ✅ Website Integration
- Resume page matches your site's design and styling
- Responsive layout for all devices
- Download button for PDF version

### ✅ Build Integration
- Pipeline integrates with your existing build process
- Works with staging and production deployments
- Maintains all existing functionality

## File Structure

```
jerry-dempsey-website/
├── Jerry_Dempsey_Resume.docx          # Source document (edit this)
├── scripts/
│   └── resume-pipeline.js             # Pipeline script
├── src/app/jerry/resume/
│   └── page.tsx                       # Generated website page
├── public/
│   └── jerry-dempsey-resume.pdf       # Generated PDF
└── out/
    └── jerry-dempsey-resume.pdf       # PDF for deployment
```

## Troubleshooting

### Common Issues

**"Error parsing Word document"**
- Ensure the document follows the expected format
- Check that section headers are exactly as shown
- Verify the file is saved as `.docx`

**"PDF generation failed"**
- Make sure Puppeteer is installed: `npm install puppeteer`
- Check that the local server isn't running on port 3001
- Verify the HTML generation is working

**"Website build failed"**
- Check for syntax errors in the generated React component
- Ensure all imports are correct
- Run `npm run lint` to check for issues

### Getting Help

1. Check the console output for specific error messages
2. Verify the Word document format matches the expected structure
3. Ensure all dependencies are installed: `npm install`
4. Try running individual steps to isolate issues

## Advanced Usage

### Custom Styling
The pipeline generates clean, professional styling. If you need custom formatting:
1. Edit the CSS in `generatePDFHTML()` method
2. Modify the React component styling in `generateResumePage()`

### Adding New Sections
To add new resume sections:
1. Update the Word document format
2. Modify the `extractResumeData()` method to parse the new section
3. Update the HTML generation methods to include the new section

### Integration with CI/CD
The pipeline can be integrated with GitHub Actions:
```yaml
- name: Update Resume
  run: npm run resume:update
- name: Build Site
  run: npm run build:prod
- name: Deploy
  run: # your deployment commands
```

## Best Practices

1. **Always edit the Word document** - never edit the generated files directly
2. **Test locally** before deploying using `npm run resume:preview`
3. **Keep the document format consistent** - follow the structure exactly
4. **Run the pipeline after any resume changes** to keep everything in sync
5. **Commit both the Word doc and generated files** to version control

## Future Enhancements

Potential improvements to the pipeline:
- Support for images and logos in the resume
- Multiple resume versions (different formats for different purposes)
- Integration with LinkedIn or other professional networks
- Automated scheduling for regular updates
- Support for other document formats (Google Docs, etc.)
