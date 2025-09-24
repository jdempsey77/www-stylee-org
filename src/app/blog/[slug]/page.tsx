'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeftIcon, ShareIcon } from '@heroicons/react/24/outline';
import { getPostBySlug } from '@/lib/blog/utils';
import { BlogPost } from '@/lib/blog/types';
import PostContent from '@/components/blog/PostContent';
import RelatedPosts from '@/components/blog/RelatedPosts';
import Comments from '@/components/blog/Comments';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}



export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [slug, setSlug] = React.useState<string | null>(null);
  const [post, setPost] = React.useState<BlogPost | null>(null);

  React.useEffect(() => {
    params.then(({ slug }) => {
      setSlug(slug);
      const foundPost = getPostBySlug(slug);
      setPost(foundPost || null);
    });
  }, [params]);

  if (!slug || !post) {
    return <div>Loading...</div>;
  }

  if (post === null) {
    notFound();
  }

  const shareUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/blog/${post.slug}`
    : `https://stylee.org/blog/${post.slug}`;

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-900 dark:to-purple-900">
      {/* Header */}
      <div className="glass border-b border-slate-200 dark:border-slate-700 sticky top-16 z-40">
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
        <div className="bg-white rounded-3xl p-6 md:p-8 mb-6 animate-fade-in-up shadow-xl">
          <PostContent post={post} />
        </div>
        <div className="bg-white rounded-3xl p-6 md:p-8 animate-fade-in-up shadow-xl" style={{animationDelay: '0.2s'}}>
          <Comments slug={post.slug} title={post.title} />
        </div>
        <div className="bg-white rounded-3xl p-6 md:p-8 animate-fade-in-up shadow-xl" style={{animationDelay: '0.4s'}}>
          <RelatedPosts currentPost={post} />
        </div>
      </div>

      {/* Footer CTA */}
      <div className="mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 md:p-8 text-center shadow-xl hover-lift">
            <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{color: '#000000'}}>
              Enjoyed this post?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto text-lg">
              Have thoughts or questions? I&apos;d love to hear from you.
            </p>
            <a
              href={`mailto:jerry@stylee.org?subject=Thoughts on "${post.title}"&body=Hi Jerry,%0D%0A%0D%0AI just read your blog post "${post.title}" and wanted to share my thoughts:%0D%0A%0D%0A[Your message here]%0D%0A%0D%0ABest regards,%0D%0A[Your name]`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Me
            </a>
            <p className="text-sm text-slate-500 mt-4">
              I read and respond to every email personally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
