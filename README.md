# Jerry Dempsey Website

A modern, responsive personal website built with Next.js, featuring a professional resume with timeline design, automated pipeline integration, and comprehensive security features.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:3000
```

## 📁 Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── jerry/          # Main profile page
│   │   │   └── resume/     # Resume page with timeline design
│   │   └── links/          # Links page
│   ├── components/         # React components
│   └── lib/               # Utility functions
├── scripts/               # Automation scripts
│   ├── smart-resume-pipeline.js    # Main resume pipeline
│   ├── production-pipeline.js     # Production deployment
│   └── setup-*.sh         # Setup scripts
├── docs/                  # Documentation
│   ├── scripts/           # Script documentation
│   ├── setup/            # Setup guides
│   ├── deployment/       # Deployment docs
│   └── development/      # Development workflow
└── public/               # Static assets
```

## 🛠️ Key Features

### Resume System
- **Timeline Design**: Modern bubble timeline with expandable job history
- **Smart Pipeline**: Automatically detects changes and updates resume
- **PDF Generation**: Direct export from Google Docs
- **Mobile Responsive**: Optimized for all screen sizes

### Development
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling
- **ESLint**: Code quality enforcement
- **Pre-push Hooks**: Automated testing and security checks

### Security
- **Security Headers**: Comprehensive HTTP security
- **CSP**: Content Security Policy
- **SSL/TLS**: Production-grade encryption
- **Dependency Scanning**: Automated vulnerability checks

## 📋 Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run start           # Start production server
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint issues

# Resume Pipeline
npm run resume:smart    # Smart resume pipeline (recommended)

# Setup
npm run setup:hooks     # Configure Git hooks
```

## 🔧 Configuration

### Environment Variables
Create `.env.local`:
```env
NEXT_PUBLIC_GA_ID=your-google-analytics-id
GOOGLE_DOC_ID=your-google-doc-id
```

### Google Drive API
See [docs/setup/GOOGLE_DRIVE_API_SETUP.md](docs/setup/GOOGLE_DRIVE_API_SETUP.md) for setup instructions.

## 📚 Documentation

- **[Setup Guide](docs/setup/)** - Initial setup and configuration
- **[Scripts](docs/scripts/)** - Automation and pipeline documentation  
- **[Development](docs/development/)** - Development workflow and tools
- **[Deployment](docs/deployment/)** - Production deployment guides
- **[Security](docs/setup/SECURITY.md)** - Security checklist and best practices

## 🚀 Deployment

The project uses GitHub Pages with automated deployment:

1. Push to `main` branch triggers deployment
2. Pre-push hooks ensure code quality
3. Production pipeline validates build
4. Automated security scanning

## 🤝 Contributing

1. Follow the branching workflow in `docs/development/`
2. Run `npm run lint` before committing
3. Ensure all tests pass
4. Update documentation as needed

## 📄 License

Private project - All rights reserved.

---

**Maintained by**: Jerry Dempsey  
**Last Updated**: January 2025