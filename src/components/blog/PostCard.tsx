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
            <div className="bg-slate-700 dark:bg-slate-700 border border-slate-600 dark:border-slate-600 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
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
                <div className="flex items-center gap-4 text-sm text-slate-300 mb-3">
                  <time dateTime={post.publishedAt}>
                    {formatDate(post.publishedAt)}
                  </time>
                  <span>•</span>
                  <span>{post.readingTime} min read</span>
                  <span>•</span>
                  <span>By {post.author}</span>
                </div>

                <h2 className={`font-bold group-hover:text-blue-400 transition-colors duration-200 mb-3 text-white ${
                  featured ? 'text-2xl' : 'text-xl'
                }`}>
                  {post.title}
                </h2>

                <p className="text-slate-300 line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
            
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full hover:bg-blue-700 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className="inline-block bg-slate-600 text-slate-300 text-xs px-3 py-1 rounded-full">
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
