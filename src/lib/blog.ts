export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: number;
  tags: string[];
  image?: string;
  published: boolean;
}

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    slug: 'welcome-to-my-blog',
    title: 'Welcome to Proof & Protection!',
    excerpt: 'Welcome to Proof & Protection - where I share thoughts on gaming, bourbon, security, and leadership.',
    content: `
      <p>Hello and welcome to my blog! I'm Jerry Dempsey, and I'm thrilled to have you here.</p>
      
      <p>This blog is where I'll be sharing my thoughts on:</p>
      <ul>
        <li>Gaming experiences and reviews</li>
        <li>Bourbon tastings and recommendations</li>
        <li>Security leadership and strategy</li>
        <li>Software security best practices</li>
        <li>Personal projects and life lessons</li>
      </ul>
      
      <h2>What to Expect</h2>
      <p>You can expect a mix of technical deep-dives, practical tutorials, and personal reflections. I believe in writing content that's both informative and accessible.</p>
      
      <h2>Let's Connect</h2>
      <p>I'd love to hear from you! Feel free to reach out through my <a href="/links">contact links</a> if you have questions or just want to chat about technology.</p>
      
      <p>Thanks for reading, and I look forward to sharing more content with you soon!</p>
    `,
    date: '2024-01-15',
    readTime: 3,
    tags: ['welcome', 'introduction', 'blog', 'gaming', 'bourbon', 'security', 'leadership'],
    image: '/main2.png',
    published: true,
  },
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts
    .filter(post => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug && post.published);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return getBlogPosts().filter(post => post.tags.includes(tag));
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  getBlogPosts().forEach(post => {
    post.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
}
