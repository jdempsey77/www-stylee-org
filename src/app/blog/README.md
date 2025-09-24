# Blog Section

This is the blog section for the Jerry Dempsey website. It's designed to be developed in stealth mode - no navigation links are added to the main site until ready for deployment.

## Structure

```
src/app/blog/
├── page.tsx                 # Blog listing page
├── [slug]/
│   ├── page.tsx            # Individual blog post page
│   └── not-found.tsx       # 404 page for missing posts
└── README.md               # This file

src/components/blog/
├── BlogHeader.tsx          # Blog page header with filters
├── PostCard.tsx            # Blog post card component
├── PostContent.tsx         # Blog post content renderer
└── RelatedPosts.tsx        # Related posts component

src/lib/blog/
├── types.ts                # TypeScript interfaces
└── utils.ts                # Blog utilities and sample data
```

## Features

- **Stealth Development**: No navigation links in main site
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Proper metadata and Open Graph tags
- **Content Management**: Easy to add/edit posts in utils.ts
- **Tag System**: Categorization and filtering by tags
- **Reading Time**: Automatic calculation of reading time
- **Related Posts**: Automatic suggestion based on tags
- **Social Sharing**: Built-in sharing functionality
- **Newsletter Signup**: Email collection for future use

## Adding New Posts

To add a new blog post, edit `src/lib/blog/utils.ts` and add a new object to the `samplePosts` array:

```typescript
{
  slug: 'your-post-slug',
  title: 'Your Post Title',
  excerpt: 'Brief description of the post...',
  content: `# Your Post Content
  Markdown-style content here...`,
  author: 'Jerry Dempsey',
  publishedAt: '2025-01-27',
  tags: ['Tag1', 'Tag2'],
  featured: false,
  readingTime: 5,
  coverImage: '/blog/your-image.jpg' // optional
}
```

## Accessing the Blog

The blog can be accessed directly at:
- `/blog` - Blog listing page
- `/blog/[slug]` - Individual blog posts

## Future Enhancements

- [ ] Markdown file support
- [ ] CMS integration
- [ ] Comment system
- [ ] Search functionality
- [ ] RSS feed
- [ ] Newsletter integration
- [ ] Analytics tracking

