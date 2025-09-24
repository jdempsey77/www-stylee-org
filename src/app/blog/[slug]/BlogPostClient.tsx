'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon, ShareIcon } from '@heroicons/react/24/outline';
import { BlogPost } from '@/lib/blog/types';
import PostContent from '@/components/blog/PostContent';
import Comments from '@/components/blog/Comments';

interface BlogPostClientProps {
  post: BlogPost;
  shareUrl: string;
}

export default function BlogPostClient({ post, shareUrl }: BlogPostClientProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: shareUrl,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(shareUrl);
        alert('Link copied to clipboard!');
      } catch (err) {
        console.log('Error copying to clipboard:', err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 sticky top-16 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              Back to Blog
            </Link>
            
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              <ShareIcon className="h-4 w-4" />
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 mb-6 animate-fade-in-up shadow-xl">
          <PostContent post={post} />
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 animate-fade-in-up shadow-xl" style={{animationDelay: '0.2s'}}>
          <Comments slug={post.slug} title={post.title} />
        </div>
      </div>

    </div>
  );
}
