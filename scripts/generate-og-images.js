const fs = require('fs');
const path = require('path');

// Simple HTML template for Open Graph images
const generateOGImage = (title, excerpt, author, date) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body {
      margin: 0;
      padding: 0;
      width: 1200px;
      height: 630px;
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #312e81 100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      position: relative;
      overflow: hidden;
    }
    .background-pattern {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), 
                  radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%);
    }
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 60px;
      max-width: 1000px;
      text-align: center;
      position: relative;
      z-index: 1;
    }
    .branding {
      display: flex;
      align-items: center;
      margin-bottom: 40px;
    }
    .emoji {
      font-size: 48px;
      margin-right: 20px;
    }
    .site-title {
      font-size: 32px;
      font-weight: bold;
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
    .title {
      font-size: 64px;
      font-weight: bold;
      color: white;
      line-height: 1.1;
      margin-bottom: 30px;
      text-align: center;
      max-width: 900px;
    }
    .excerpt {
      font-size: 28px;
      color: #cbd5e1;
      line-height: 1.4;
      margin-bottom: 40px;
      max-width: 800px;
      text-align: center;
    }
    .meta {
      display: flex;
      align-items: center;
      gap: 20px;
      font-size: 24px;
      color: #94a3b8;
    }
    .accent {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 8px;
      background: linear-gradient(90deg, #3b82f6, #8b5cf6);
    }
  </style>
</head>
<body>
  <div class="background-pattern"></div>
  <div class="content">
    <div class="branding">
      <div class="emoji">🥃</div>
      <div class="site-title">Security in Proof</div>
    </div>
    <h1 class="title">${title}</h1>
    <p class="excerpt">${excerpt}</p>
    <div class="meta">
      <span>By ${author}</span>
      <span>•</span>
      <span>${formattedDate}</span>
    </div>
  </div>
  <div class="accent"></div>
</body>
</html>`;
};

// Blog posts data
const posts = [
  {
    slug: 'welcome-to-stylee-blog',
    title: 'Welcome to Security in Proof',
    excerpt: 'Welcome to Security in Proof - where security meets bourbon and everything in between.',
    author: 'Jerry Dempsey',
    date: '2025-09-23'
  },
  {
    slug: 'return-to-code-ai-driven-development',
    title: 'A Return to Code: Exploring AI-Driven Development as a Security Leader',
    excerpt: 'After a decade away from daily coding, AI-driven development tools brought me back to the keyboard. Here\'s what I learned building a DAST tool with AI assistance.',
    author: 'Jerry Dempsey',
    date: '2025-09-24'
  }
];

// Create public/og-images directory
const ogImagesDir = path.join(__dirname, '..', 'public', 'og-images');
if (!fs.existsSync(ogImagesDir)) {
  fs.mkdirSync(ogImagesDir, { recursive: true });
}

// Generate HTML files for each post
posts.forEach(post => {
  const html = generateOGImage(post.title, post.excerpt, post.author, post.date);
  const filePath = path.join(ogImagesDir, `${post.slug}.html`);
  fs.writeFileSync(filePath, html);
  console.log(`Generated OG image HTML for: ${post.slug}`);
});

console.log('Open Graph images generated successfully!');
console.log('Note: You\'ll need to convert these HTML files to PNG images using a tool like Puppeteer or a screenshot service.');
