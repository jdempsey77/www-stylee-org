import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog/utils';
import BlogPostClient from './BlogPostClient';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  const shareUrl = `https://stylee.org/blog/${post.slug}`;
  const ogImageUrl = post.coverImage ? `https://stylee.org${post.coverImage}` : 'https://stylee.org/mainlogo.png';

  return {
    title: `${post.title} | Security in Proof`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: shareUrl,
      siteName: 'Security in Proof',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [ogImageUrl],
      creator: '@stylee_org',
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const shareUrl = `https://stylee.org/blog/${post.slug}`;

  return <BlogPostClient post={post} shareUrl={shareUrl} />;
}
