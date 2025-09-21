# Smart Resume Pipeline

## Overview

The Smart Resume Pipeline automatically generates both a PDF and website resume page from your Google Doc, but only when the content has actually changed.

## Features

- ✅ **Smart Detection**: Only runs when Google Doc content changes
- ✅ **PDF from Google Docs**: Direct export (preserves your original formatting)
- ✅ **Website with Timeline**: Beautiful timeline design with bubbles and gradients
- ✅ **Efficient**: Skips processing if no changes detected

## Usage

```bash
# Run the smart pipeline
npm run resume:smart
```

## How It Works

1. **Check**: Compares current Google Doc content with stored hash
2. **Skip**: If no changes, exits immediately with "no changes detected"
3. **Generate**: If changes detected:
   - Exports PDF directly from Google Docs
   - Updates website page with current timeline design
   - Stores new content hash for next comparison

## Configuration

The pipeline uses these environment variables:

- `GOOGLE_DOC_ID`: Your Google Doc ID (set in `.env.local`)

## Output

- **PDF**: `/public/jerry-dempsey-resume.pdf` (from Google Doc)
- **Website**: `/src/app/jerry/resume/page.tsx` (timeline design)

## Benefits

- **Reliability**: PDF matches your Google Doc exactly
- **Design**: Website uses modern timeline with bubbles and gradients
- **Efficiency**: Only processes when content changes
- **Automation**: No manual intervention needed
