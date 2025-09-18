# Analytics Setup Guide

## Google Analytics 4 Implementation

This website includes Google Analytics 4 with privacy-compliant cookie consent.

### Setup Instructions

1. **Create Google Analytics Account**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new GA4 property
   - Copy your Measurement ID (format: G-XXXXXXXXXX)

2. **Configure Environment Variables**
   - Copy `.env.local.example` to `.env.local`
   - Replace `G-XXXXXXXXXX` with your actual Measurement ID
   ```bash
   cp .env.local.example .env.local
   ```

3. **Deploy to Production**
   - Add `NEXT_PUBLIC_GA_ID` to your GitHub repository secrets
   - Go to Settings → Secrets and variables → Actions
   - Add new repository secret with your GA ID

### Features

- ✅ **Privacy Compliant**: Cookie banner with user consent
- ✅ **GDPR Ready**: Default consent denied until user accepts
- ✅ **IP Anonymization**: User IPs are anonymized
- ✅ **No Ad Tracking**: Ad personalization disabled
- ✅ **Performance Optimized**: Loads after page interaction

### What's Tracked

- Page views and navigation
- User interactions (clicks, scrolls)
- Traffic sources and referrals
- Device and browser information
- Geographic data (country/region only)

### Privacy Features

- **Consent Required**: Analytics only active after user consent
- **No Personal Data**: No personally identifiable information collected
- **IP Anonymization**: IP addresses are anonymized
- **No Cross-Site Tracking**: Google Signals disabled
- **Local Storage**: User consent stored locally

### Testing

1. **Local Development**
   ```bash
   npm run dev
   ```
   - Check browser console for GA4 initialization
   - Verify cookie banner appears
   - Test consent acceptance/rejection

2. **Production Testing**
   - Use Google Analytics Real-Time reports
   - Check GA4 DebugView for events
   - Verify privacy compliance

### Custom Events

You can track custom events using the `gtag` utility:

```typescript
import { event } from '@/lib/gtag';

// Track button clicks
event({
  action: 'click',
  category: 'engagement',
  label: 'resume_download',
});
```

### Troubleshooting

- **Analytics not working**: Check if `NEXT_PUBLIC_GA_ID` is set
- **Cookie banner not showing**: Clear localStorage and refresh
- **Events not tracking**: Verify user has accepted analytics consent

### Alternative Analytics

If you prefer other analytics solutions:

1. **Plausible Analytics** (privacy-focused)
2. **Fathom Analytics** (simple and privacy-focused)
3. **Google Analytics 4** (current implementation)
