// Google Analytics configuration
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-JV7QR4C810';

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    const eventData: Record<string, string | number> = {
      event_category: category,
    };
    
    if (label) {
      eventData.event_label = label;
    }
    
    if (value !== undefined) {
      eventData.value = value;
    }
    
    window.gtag('event', action, eventData);
  }
};

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'consent',
      action: string,
      config?: Record<string, unknown>
    ) => void;
  }
}
