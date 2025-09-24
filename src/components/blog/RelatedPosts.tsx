import { BlogPost } from '@/lib/blog/types';
import { getAllPosts } from '@/lib/blog/utils';
import PostCard from './PostCard';

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
    <section className="mt-8 pt-6 border-t border-slate-200">
      <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{color: '#000000'}}>
        Related Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {relatedPosts.map((post, index) => (
          <div key={post.slug} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </section>
  );
}
