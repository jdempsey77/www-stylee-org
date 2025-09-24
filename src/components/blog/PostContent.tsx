import React from 'react';
import Image from 'next/image';
import { BlogPost } from '@/lib/blog/types';
import { formatDate } from '@/lib/blog/utils';

interface PostContentProps {
  post: BlogPost;
}

export default function PostContent({ post }: PostContentProps) {
  // Simple markdown-like rendering for the blog content
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactElement[] = [];
    let key = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      if (line === '') {
        continue;
      }

      // Headers
      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={key++} className="text-3xl font-bold mt-6 mb-3" style={{color: '#000000'}}>
            {line.substring(2)}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={key++} className="text-2xl font-bold mt-4 mb-2" style={{color: '#000000'}}>
            {line.substring(3)}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={key++} className="text-xl font-semibold mt-3 mb-1" style={{color: '#000000'}}>
            {line.substring(4)}
          </h3>
        );
      }
      // Lists
      else if (line.startsWith('- ')) {
        const listItems: React.ReactElement[] = [];
        let j = i;
        while (j < lines.length && lines[j].startsWith('- ')) {
          listItems.push(
            <li key={j} className="mb-1" style={{color: '#000000'}}>
              {lines[j].substring(2)}
            </li>
          );
          j++;
        }
        elements.push(
          <ul key={key++} className="list-disc list-inside mb-3 ml-4 space-y-1" style={{color: '#000000'}}>
            {listItems}
          </ul>
        );
        i = j - 1;
      }
      // Numbered lists
      else if (/^\d+\. /.test(line)) {
        const listItems: React.ReactElement[] = [];
        let j = i;
        while (j < lines.length && /^\d+\. /.test(lines[j])) {
          listItems.push(
            <li key={j} className="mb-1" style={{color: '#000000'}}>
              {lines[j].replace(/^\d+\. /, '')}
            </li>
          );
          j++;
        }
        elements.push(
          <ol key={key++} className="list-decimal list-inside mb-3 ml-4 space-y-1" style={{color: '#000000'}}>
            {listItems}
          </ol>
        );
        i = j - 1;
      }
      // Paragraphs
      else {
        // Handle italic text (*text*) - simple text replacement for now
        const processedLine = line.replace(/\*([^*]+)\*/g, '$1');
        
        elements.push(
          <p 
            key={key++} 
            className="text-slate-700 mb-2 leading-relaxed"
          >
            {processedLine}
          </p>
        );
      }
    }

    return elements;
  };

  return (
    <article className="max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-4">
        <div className="flex items-center gap-4 text-sm text-slate-500 mb-2">
          <time dateTime={post.publishedAt}>
            {formatDate(post.publishedAt)}
          </time>
          <span>•</span>
          <span>{post.readingTime} min read</span>
          <span>•</span>
          <span>By {post.author}</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-2" style={{color: '#000000'}}>
          {post.title}
        </h1>
        
        <p className="text-xl text-slate-600 mb-2">
          {post.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 text-sm px-3 py-1 rounded-full hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-800 dark:hover:to-purple-800 transition-all duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Cover Image */}
      {post.coverImage && (
        <div className="mb-4">
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        {renderContent(post.content)}
      </div>

      {/* Footer */}
      <footer className="mt-6 pt-4 border-t border-slate-200">
        <div className="flex items-center justify-between">
          <div className="text-sm text-slate-500">
            Published on {formatDate(post.publishedAt)}
            {post.updatedAt && post.updatedAt !== post.publishedAt && (
              <span> • Updated on {formatDate(post.updatedAt)}</span>
            )}
          </div>
          <div className="text-sm text-slate-500">
            By {post.author}
          </div>
        </div>
      </footer>
    </article>
  );
}
