'use client';

import { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('analytics-consent');
    if (consent === null) {
      setShowBanner(true);
    }
  }, []);

  const acceptAnalytics = () => {
    localStorage.setItem('analytics-consent', 'accepted');
    setShowBanner(false);
    
    // Enable Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'denied',
      });
    }
  };

  const rejectAnalytics = () => {
    localStorage.setItem('analytics-consent', 'rejected');
    setShowBanner(false);
    
    // Disable Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col gap-4">
          <div className="flex-1">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
              Privacy & Analytics
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              We use analytics to understand how visitors interact with our site. 
              This helps us improve your experience. No personal data is collected.
            </p>
          </div>
          <div className="flex gap-3 w-full">
            <button
              onClick={rejectAnalytics}
              className="flex-1 px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors border border-gray-300 dark:border-gray-600 rounded-md"
            >
              Reject
            </button>
            <button
              onClick={acceptAnalytics}
              className="flex-1 px-4 py-3 text-sm font-medium bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-md hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
