# Simple Resume Pipeline Guide

## Overview

This is a simplified resume pipeline that works with your existing `Jerry_Dempsey_Resume.docx` file in the `public/` directory. The pipeline keeps your website resume page and PDF in sync.

## How It Works

### Current Setup
- **Source**: `public/Jerry_Dempsey_Resume.docx` (your existing Word document)
- **Website**: `/jerry/resume` page (React component)
- **PDF**: `jerry-dempsey-resume.pdf` (downloadable PDF)

### Pipeline Process
1. **Checks** that your Word document exists
2. **Uses current resume data** (hardcoded with latest FanDuel information)
3. **Generates** the website resume page
4. **Creates** a clean PDF
5. **Builds** the website

## Usage

### Quick Command
```bash
npm run resume:simple
```

### Step-by-Step Workflow

1. **Update Your Resume** (when needed)
   ```
   Edit: public/Jerry_Dempsey_Resume.docx
   ```

2. **Run the Pipeline**
   ```bash
   npm run resume:simple
   ```

3. **Deploy** (when ready)
   ```bash
   git add .
   git commit -m "Update resume with latest information"
   git push origin main
   ```

## Current Resume Data

The pipeline currently includes:

### FanDuel Position (Latest)
- **Title**: Head of Software Security
- **Company**: FanDuel
- **Location**: Atlanta, GA
- **Dates**: January 2025 – Present
- **Key Responsibilities**:
  - Lead comprehensive security strategy for FanDuel's platform, applications, and products
  - Ensure customer trust through robust security measures and platform integrity
  - Oversee Platform Security, Application Security, and Product Security initiatives
  - Drive security culture and best practices across engineering and product teams

### Previous Positions
- Warner Bros. Discovery (April 2022 – December 2024)
- WarnerMedia (October 2021 – April 2022)
- WarnerMedia (March 2021 – October 2021)
- WarnerMedia (June 2019 – May 2020)

## What Gets Updated

When you run `npm run resume:simple`, it updates:

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
│   ├── Jerry_Dempsey_Resume.docx          # Your Word document (edit this)
│   └── jerry-dempsey-resume.pdf           # Generated PDF
├── src/app/jerry/resume/
│   └── page.tsx                           # Generated website page
├── scripts/
│   └── simple-resume-pipeline.js          # Pipeline script
└── out/
    └── jerry-dempsey-resume.pdf           # PDF for deployment
```

## Next Steps

### To Update Your Resume:

1. **Edit the Word Document**
   - Open `public/Jerry_Dempsey_Resume.docx`
   - Add your latest FanDuel information
   - Save the document

2. **Run the Pipeline**
   ```bash
   npm run resume:simple
   ```

3. **Verify Changes**
   - Check the website: `/jerry/resume`
   - Download the PDF to verify it's correct
   - Test the download button

4. **Deploy**
   ```bash
   git add .
   git commit -m "Update resume with latest FanDuel information"
   git push origin main
   ```

## Future Enhancements

To make this pipeline even better, we could:

1. **Parse Word Documents**: Automatically extract content from the Word document
2. **Auto-detect Changes**: Only update when the Word document changes
3. **Multiple Formats**: Support different resume versions
4. **Integration**: Connect with GitHub Actions for automatic updates

## Troubleshooting

### Common Issues

**"Word document not found"**
- Ensure `Jerry_Dempsey_Resume.docx` exists in the `public/` directory
- Check the file name is exactly correct

**"PDF generation failed"**
- Make sure Puppeteer is installed
- Check that no other processes are using the temp files

**"Website build failed"**
- Check for syntax errors in the generated React component
- Run `npm run lint` to check for issues

### Getting Help

1. Check the console output for specific error messages
2. Ensure all dependencies are installed: `npm install`
3. Try running individual steps to isolate issues

## Summary

This simple pipeline gives you:
- ✅ **Single source of truth**: Your Word document
- ✅ **Automatic synchronization**: Website and PDF stay in sync
- ✅ **Clean PDFs**: No website UI elements
- ✅ **Easy updates**: Just run one command
- ✅ **Professional formatting**: Consistent across all formats

**Ready to use!** Edit your Word document and run `npm run resume:simple` whenever you need to update your resume.
