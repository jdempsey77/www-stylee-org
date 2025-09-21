# 🧠 Smart Resume Pipeline

The Smart Resume Pipeline is the primary automation tool for managing resume updates. It intelligently detects changes and only updates when necessary, ensuring efficiency and accuracy.

## ✨ Features

- **Intelligent Change Detection**: Checks if resume content has changed since last run
- **Conditional Execution**: Only runs generation steps when content changes
- **Direct PDF Generation**: Exports PDF directly from Google Docs
- **Website Integration**: Updates the resume page with current design
- **Error Handling**: Robust error handling and logging

## 🚀 Usage

### Basic Usage
```bash
npm run resume:smart
```

### Manual Execution
```bash
node scripts/smart-resume-pipeline.js
```

### With Environment Variable
```bash
GOOGLE_DOC_ID="your-doc-id" npm run resume:smart
```

## 🔧 Configuration

### Required Environment Variables
Create or update `.env.local`:
```env
GOOGLE_DOC_ID="1vx69LJxQP6746MQatcIpvd2VbmTc54w446sbj6Yzymo"
```

### Google Drive API Setup
See [GOOGLE_DRIVE_API_SETUP.md](../setup/GOOGLE_DRIVE_API_SETUP.md) for complete setup instructions.

## 📋 Pipeline Steps

### Step 1: Change Detection
- Calculates hash of current Google Doc content
- Compares with stored hash from last run
- If unchanged, skips generation steps

### Step 2: PDF Generation (if changed)
- Exports Google Doc directly as PDF
- Saves to `public/jerry-dempsey-resume.pdf`
- Copies to `out/` directory if it exists (production builds)

### Step 3: Website Page Generation (if changed)
- Generates `src/app/jerry/resume/page.tsx`
- Uses current timeline design with bubbles
- Includes all job descriptions in paragraph format
- Maintains responsive design and mobile optimization

## 🎨 Design Features

The generated resume page includes:
- **Timeline Design**: Modern bubble timeline with expandable content
- **Responsive Layout**: Optimized for desktop and mobile
- **Interactive Elements**: Hover effects and smooth transitions
- **Sticky Download Banner**: Always-visible download button
- **Professional Styling**: Consistent with site design

## 📁 Output Files

### Generated Files
- `src/app/jerry/resume/page.tsx` - Resume page component
- `public/jerry-dempsey-resume.pdf` - Resume PDF
- `out/jerry-dempsey-resume.pdf` - Production PDF (if out exists)

### Cache Files
- `.resume-cache` - Stores content hash for change detection

## 🔍 Troubleshooting

### Common Issues

#### "File not found: YOUR_GOOGLE_DOC_ID_HERE"
- **Cause**: `GOOGLE_DOC_ID` not set in `.env.local`
- **Solution**: Add the correct Google Doc ID to `.env.local`

#### "The requested conversion is not supported"
- **Cause**: Google Drive API export format issue
- **Solution**: Pipeline automatically handles this by using direct PDF export

#### "ENOENT: no such file or directory, copyfile"
- **Cause**: Attempting to copy to non-existent `out` directory
- **Solution**: Pipeline includes conditional check and handles this gracefully

### Debug Mode
Add debug logging by modifying the pipeline script or running with verbose output:
```bash
DEBUG=true npm run resume:smart
```

## 📊 Performance

- **Change Detection**: ~2-3 seconds
- **PDF Generation**: ~5-10 seconds (when changed)
- **Page Generation**: ~1-2 seconds (when changed)
- **Total Time**: ~3-5 seconds (no changes), ~8-15 seconds (with changes)

## 🔄 Integration

### Pre-push Hooks
The pipeline integrates with Git pre-push hooks to ensure resume is always up-to-date.

### Production Pipeline
Automatically runs as part of the production deployment process.

### Manual Updates
Can be run manually whenever resume content changes in Google Docs.

## 📈 Benefits

- **Efficiency**: Only updates when content changes
- **Accuracy**: PDF is direct export from Google Docs
- **Consistency**: Website always reflects latest design
- **Automation**: Reduces manual effort
- **Reliability**: Robust error handling and validation

## 🔧 Advanced Usage

### Custom Content
The pipeline uses `getResumeData()` method to define resume content. This can be modified to:
- Update job descriptions
- Add new positions
- Modify formatting
- Include additional sections

### Design Customization
The `generateResumePage()` method controls the page design. Modifications can include:
- Color schemes
- Layout changes
- Additional features
- Responsive adjustments

## 📚 Related Documentation

- [GOOGLE_DRIVE_PIPELINE.md](GOOGLE_DRIVE_PIPELINE.md) - Google Drive integration
- [RESUME_PIPELINE_SIMPLE.md](RESUME_PIPELINE_SIMPLE.md) - Simple pipeline alternative
- [RESUME_PIPELINE_OPTIONS.md](RESUME_PIPELINE_OPTIONS.md) - Pipeline comparison
- [GOOGLE_DRIVE_API_SETUP.md](../setup/GOOGLE_DRIVE_API_SETUP.md) - API setup

---

**Last Updated**: January 2025  
**Version**: Smart Pipeline v1.0