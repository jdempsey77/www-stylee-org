'use client';

import { useEffect } from 'react';

interface CommentsProps {
  slug: string;
  title: string;
}

export default function Comments({ slug, title }: CommentsProps) {
  useEffect(() => {
    // Giscus configuration
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'jdempsey77/comments');
    script.setAttribute('data-repo-id', 'R_kgDOP1t5NA');
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'DIC_kwDOP1t5NM4Cv0mK');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', 'light');
    script.setAttribute('data-lang', 'en');
    script.setAttribute('data-loading', 'lazy');
    script.crossOrigin = 'anonymous';
    
    // Find the comments container and append the script
    const commentsContainer = document.getElementById('giscus-comments');
    if (commentsContainer) {
      commentsContainer.appendChild(script);
    }

    // Cleanup function to remove script when component unmounts
    return () => {
      if (commentsContainer && script.parentNode) {
        commentsContainer.removeChild(script);
      }
    };
  }, [slug, title]);

  return (
    <div className="mt-8 pt-6 border-t border-slate-200">
      <h3 className="text-xl font-semibold mb-4" style={{color: '#000000'}}>
        Comments
      </h3>
      <div id="giscus-comments"></div>
    </div>
  );
}
