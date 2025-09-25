'use client';

import { useState } from 'react';
import { getAllPosts, getPostsByTag, getAllTags, getFeaturedPosts } from '@/lib/blog/utils';
import PostCard from '@/components/blog/PostCard';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  const displayedPosts = selectedTag ? getPostsByTag(selectedTag) : allPosts;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900 dark:to-slate-800 pb-20">
      {/* Header */}
      <section className="py-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-900 dark:to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-2 pb-2">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up gradient-text leading-tight">
              Security in Proof
            </h1>
            <div className="text-4xl md:text-5xl mb-8 animate-fade-in-up">
              🥃
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 font-semibold">
              Security insights, leadership lessons, and life beyond the code
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

      {/* Blog Content */}
      <section className="py-12 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Featured Posts */}
      {featuredPosts && featuredPosts.length > 0 && (
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Featured Posts
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {featuredPosts.slice(0, 2).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <div className="glass rounded-2xl p-8 hover-lift transition-all duration-300 group-hover:shadow-xl">
                  <div className="flex items-start space-x-6">
                    {post.coverImage && (
                      <div className="flex-shrink-0">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          width={120}
                          height={120}
                          className="w-30 h-30 rounded-xl object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          Featured
                        </span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          {post.readingTime} min read
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 mb-3">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 4).map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="mb-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 animate-slide-in-left">
            {selectedTag ? `Posts tagged with "${selectedTag}"` : 'All Posts'}
          </h2>
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
            <div className="bg-slate-50 dark:bg-slate-700 rounded-2xl p-8 max-w-md mx-auto">
              <p className="text-slate-600 dark:text-slate-300 text-lg">No posts found for this tag.</p>
              <button 
                onClick={() => setSelectedTag(null)}
                className="mt-4 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
              >
                View all posts
              </button>
            </div>
          </div>
        )}
      </section>
        </div>
      </section>
    </div>
  );
}
