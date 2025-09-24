import { BlogPost } from '@/lib/blog/types';
import { getAllPosts } from '@/lib/blog/utils';
import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/lib/blog/utils';

interface RelatedPostsProps {
  currentPost: BlogPost;
  limit?: number;
}

export default function RelatedPosts({ currentPost, limit = 3 }: RelatedPostsProps) {
  const allPosts = getAllPosts();
  
  // Find related posts based on tags
  const relatedPosts = allPosts
    .filter(post => post.slug !== currentPost.slug)
    .filter(post => post.tags.some(tag => currentPost.tags.includes(tag)))
    .slice(0, limit);

  // If not enough related posts by tags, fill with recent posts
  if (relatedPosts.length < limit) {
    const additionalPosts = allPosts
      .filter(post => post.slug !== currentPost.slug)
      .filter(post => !relatedPosts.some(related => related.slug === post.slug))
      .slice(0, limit - relatedPosts.length);
    
    relatedPosts.push(...additionalPosts);
  }

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="mt-8 pt-6 border-t border-slate-600">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
        Related Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {relatedPosts.map((post, index) => (
          <div key={post.slug} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
            <Link href={`/blog/${post.slug}`}>
              <div className="bg-slate-700 border border-slate-600 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer">
                {post.coverImage && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
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

                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors duration-200 mb-3 text-white">
                    {post.title}
                  </h3>

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
          </div>
        ))}
      </div>
    </section>
  );
}
