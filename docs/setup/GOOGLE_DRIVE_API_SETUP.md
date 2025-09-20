# Google Drive API Setup Guide

## Overview

This guide will help you set up **programmatic access** to your Google Drive resume document. Once configured, you can run `npm run resume:google-api` to automatically pull your latest resume from Google Drive and update your website and PDF.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install googleapis --save
```

### 2. Set Up Google Drive API
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google Drive API
4. Create OAuth2 credentials
5. Download `credentials.json`

### 3. Get Your Google Doc ID
1. Open your resume in Google Drive
2. Copy the document ID from the URL
3. Set it as an environment variable

### 4. Run the Pipeline
```bash
npm run resume:google-api
```

## 📋 Detailed Setup Instructions

### Step 1: Google Cloud Console Setup

#### 1.1 Create/Select Project
1. Visit [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" → "New Project"
3. Name your project (e.g., "Jerry Resume API")
4. Click "Create"

#### 1.2 Enable Google Drive API
1. In the left sidebar, go to "APIs & Services" → "Library"
2. Search for "Google Drive API"
3. Click on it and press "Enable"

#### 1.3 Create OAuth2 Credentials
1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "OAuth client ID"
3. If prompted, configure the OAuth consent screen:
   - Choose "External" user type
   - Fill in required fields (App name, User support email, Developer contact)
   - Add your email to test users
4. For Application type, choose "Desktop application"
5. Name it "Jerry Resume Pipeline"
6. Click "Create"
7. Download the JSON file and rename it to `credentials.json`
8. Place it in your project root directory

### Step 2: Get Your Google Doc ID

#### 2.1 Open Your Resume Document
1. Go to [Google Drive](https://drive.google.com)
2. Open your resume document
3. Look at the URL in your browser

#### 2.2 Extract Document ID
The URL will look like:
```
https://docs.google.com/document/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
```

The document ID is the part between `/d/` and `/edit`:
```
1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
```

#### 2.3 Set Environment Variable
```bash
export GOOGLE_DOC_ID="1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"
```

Or add it to your shell profile:
```bash
echo 'export GOOGLE_DOC_ID="your_document_id_here"' >> ~/.bashrc
source ~/.bashrc
```

### Step 3: First-Time Authentication

#### 3.1 Run the Pipeline
```bash
npm run resume:google-api
```

#### 3.2 Authorize the App
1. The script will show an authorization URL
2. Copy and paste it into your browser
3. Sign in with your Google account
4. Grant permissions to the app
5. Copy the authorization code from the success page

#### 3.3 Complete Authentication
```bash
GOOGLE_AUTH_CODE="your_authorization_code_here" npm run resume:google-api
```

The script will:
- Exchange the code for access tokens
- Save the tokens for future use
- Download your resume from Google Drive
- Update your website and PDF

### Step 4: Regular Usage

Once set up, updating your resume is as simple as:

1. **Edit your resume** in Google Drive
2. **Run the pipeline**:
   ```bash
   npm run resume:google-api
   ```
3. **Deploy** your changes

## 🔧 Configuration Files

### credentials.json
```json
{
  "client_id": "your_client_id.googleusercontent.com",
  "project_id": "your-project-id",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_secret": "your_client_secret",
  "redirect_uris": ["http://localhost"]
}
```

### Environment Variables
```bash
# Required
GOOGLE_DOC_ID="your_google_doc_id"

# Optional (for first-time auth)
GOOGLE_AUTH_CODE="authorization_code_from_google"
```

## 📁 File Structure

```
jerry-dempsey-website/
├── credentials.json                    # Google API credentials
├── token.json                         # Auto-generated auth tokens
├── public/
│   └── jerry-dempsey-resume.pdf       # Generated PDF
├── src/app/jerry/resume/
│   └── page.tsx                       # Generated website page
└── scripts/
    └── google-drive-api-pipeline.js   # API pipeline script
```

## 🚨 Troubleshooting

### Common Issues

#### "File not found" Error
- **Problem**: Google Doc ID is incorrect
- **Solution**: Double-check the document ID from the URL
- **Verify**: Make sure the document is shared with your Google account

#### "Authentication failed" Error
- **Problem**: Invalid or expired credentials
- **Solution**: Delete `token.json` and re-authenticate
- **Command**: `rm token.json && npm run resume:google-api`

#### "API not enabled" Error
- **Problem**: Google Drive API not enabled
- **Solution**: Go to Google Cloud Console and enable the API
- **Steps**: APIs & Services → Library → Google Drive API → Enable

#### "Insufficient permissions" Error
- **Problem**: OAuth consent screen not configured
- **Solution**: Configure the OAuth consent screen
- **Steps**: APIs & Services → OAuth consent screen → Configure

### Debug Mode

To see more detailed error information:

```bash
DEBUG=1 npm run resume:google-api
```

### Manual Token Refresh

If your tokens expire:

```bash
rm token.json
npm run resume:google-api
```

## 🔒 Security Best Practices

### 1. Keep Credentials Secure
- Never commit `credentials.json` to version control
- Add it to `.gitignore`:
  ```
  credentials.json
  token.json
  ```

### 2. Use Environment Variables
- Store sensitive data in environment variables
- Use `.env` files for local development
- Use your hosting platform's environment variables for production

### 3. Limit API Scopes
- The pipeline only requests read-only access to Google Drive
- No write permissions are granted
- Your Google Drive documents remain secure

## 🎯 Benefits of Google Drive API Integration

### ✅ Real-Time Sync
- Automatic updates when document changes
- No manual copying/pasting required
- Always up-to-date resume

### ✅ Professional Workflow
- Edit in familiar Google Docs interface
- Version history and collaboration
- Cloud backup and accessibility

### ✅ Automated Pipeline
- One command updates everything
- Website and PDF stay in sync
- Ready for deployment

### ✅ Error Handling
- Robust error messages
- Automatic retry logic
- Clear troubleshooting guidance

## 🚀 Advanced Features

### Webhook Integration (Future)
- Automatic updates when document changes
- Real-time synchronization
- No manual intervention needed

### Multiple Document Support
- Support for different resume versions
- ATS-friendly formats
- Custom styling options

### Batch Processing
- Update multiple documents at once
- Bulk PDF generation
- Automated deployment

## 📞 Support

### Getting Help

1. **Check the console output** for specific error messages
2. **Verify your setup** using the troubleshooting guide
3. **Test with a simple document** first
4. **Check Google Cloud Console** for API usage and errors

### Common Commands

```bash
# Test the pipeline
npm run resume:google-api

# Check API status
curl -H "Authorization: Bearer $(cat token.json | jq -r .access_token)" \
     "https://www.googleapis.com/drive/v3/about?fields=user"

# Reset authentication
rm token.json && npm run resume:google-api

# Debug mode
DEBUG=1 npm run resume:google-api
```

## 🎉 Success!

Once everything is set up, you'll have:

- ✅ **Automatic resume updates** from Google Drive
- ✅ **Synchronized website and PDF** versions
- ✅ **Professional workflow** with cloud editing
- ✅ **One-command deployment** ready

**Your resume pipeline is now fully automated!** 🚀

Edit your resume in Google Drive, run `npm run resume:google-api`, and everything updates automatically. No more manual copying, no more sync issues, just pure efficiency!
