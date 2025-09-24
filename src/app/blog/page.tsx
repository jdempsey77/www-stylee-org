'use client';

import { useState } from 'react';
import { getAllPosts, getFeaturedPosts, getPostsByTag, getAllTags } from '@/lib/blog/utils';
import PostCard from '@/components/blog/PostCard';

export default function BlogPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  
  const displayedPosts = selectedTag ? getPostsByTag(selectedTag) : allPosts;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-900 dark:to-purple-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up flex items-center justify-center gap-3">
              Security in Proof
              <span className="text-3xl md:text-5xl">🥃</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-slide-in-left">
              Security insights, leadership lessons, and life beyond the code.
            </p>
            
            {/* Tag Filters */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  !selectedTag
                    ? 'bg-white text-blue-600 shadow-lg'
                    : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30'
                }`}
              >
                All Posts
              </button>
              {getAllTags().map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedTag === tag
                      ? 'bg-white text-blue-600 shadow-lg'
                      : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="mb-6">
          <div className="bg-white rounded-3xl p-5 md:p-6 shadow-xl">
            <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 animate-slide-in-left" style={{color: '#000000'}}>
              Featured Posts
            </h2>
              <p className="text-slate-600 animate-slide-in-right">
                Must-read articles on security and leadership
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featuredPosts.slice(0, 2).map((post, index) => (
                <div key={post.slug} className={`animate-fade-in-up`} style={{animationDelay: `${index * 0.2}s`}}>
                  <PostCard post={post} featured={true} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="mb-6">
        <div className="bg-white rounded-3xl p-5 md:p-6 shadow-xl">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 animate-slide-in-left" style={{color: '#000000'}}>
              {selectedTag ? `Posts tagged with "${selectedTag}"` : 'All Posts'}
            </h2>
            <p className="text-slate-600 animate-slide-in-right">
              {selectedTag ? `Explore posts about ${selectedTag.toLowerCase()}` : 'Browse all security insights and articles'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedPosts.map((post, index) => (
              <div key={post.slug} className={`animate-fade-in-up`} style={{animationDelay: `${index * 0.1}s`}}>
                <PostCard post={post} />
              </div>
            ))}
          </div>
          {displayedPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-slate-50 rounded-2xl p-8 max-w-md mx-auto">
                <p className="text-slate-600 text-lg">No posts found for this tag.</p>
                <button 
                  onClick={() => setSelectedTag(null)}
                  className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                >
                  View all posts
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="mt-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-6 md:p-8 text-center shadow-xl hover-lift">
            <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{color: '#000000'}}>
              Have Thoughts?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto text-lg">
              Questions about a post? Want to discuss security leadership or share your own experiences? I&apos;d love to hear from you.
            </p>
            <a
              href="mailto:jerry@stylee.org?subject=Thoughts on your blog&body=Hi Jerry,%0D%0A%0D%0AI just read your blog and wanted to share my thoughts:%0D%0A%0D%0A[Your message here]%0D%0A%0D%0ABest regards,%0D%0A[Your name]"
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
      </section>
      </div>
    </div>
  );
}
