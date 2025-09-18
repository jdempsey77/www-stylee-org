'use client';

import Script from 'next/script';
import { GA_TRACKING_ID } from '@/lib/gtag';

const GoogleAnalytics = () => {
  // Debug: Log the GA_TRACKING_ID to see what's happening
  console.log('GA_TRACKING_ID:', GA_TRACKING_ID);
  
  if (!GA_TRACKING_ID) {
    console.log('No GA_TRACKING_ID found, analytics disabled');
    // Debug: Show in HTML for debugging
    return <div style={{display: 'none'}}>DEBUG: GA_TRACKING_ID is empty</div>;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Set default consent state (denied until user accepts)
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              wait_for_update: 500,
            });
            
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure',
              allow_google_signals: false,
              allow_ad_personalization_signals: false,
            });
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
