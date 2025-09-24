import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/blog/types';
import { formatDate } from '@/lib/blog/utils';

interface PostCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function PostCard({ post, featured = false }: PostCardProps) {
  return (
    <article className={`group cursor-pointer ${featured ? 'md:col-span-2' : ''}`}>
      <Link href={`/blog/${post.slug}`}>
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
          {post.coverImage && (
            <div className={`relative ${featured ? 'h-64' : 'h-48'} overflow-hidden`}>
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes={featured ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 33vw'}
              />
              {featured && (
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium">
                  Featured
                </div>
              )}
            </div>
          )}
          
          <div className="p-6">
            <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
              <time dateTime={post.publishedAt}>
                {formatDate(post.publishedAt)}
              </time>
              <span>•</span>
              <span>{post.readingTime} min read</span>
              <span>•</span>
              <span>By {post.author}</span>
            </div>
            
            <h2 className={`font-bold group-hover:text-blue-600 transition-colors duration-200 mb-3 ${
              featured ? 'text-2xl' : 'text-xl'
            }`} style={{color: '#000000'}}>
              {post.title}
            </h2>
            
            <p className="text-slate-600 line-clamp-3 mb-4">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full hover:bg-blue-200 transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
              {post.tags.length > 3 && (
                <span className="inline-block bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-full">
                  +{post.tags.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
