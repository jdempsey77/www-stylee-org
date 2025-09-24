import { BlogPost } from './types';

// Blog posts data - in a real app, this would come from a CMS or markdown files
export const samplePosts: BlogPost[] = [
  {
    slug: 'welcome-to-stylee-blog',
    title: 'Welcome to Security in Proof',
    excerpt: 'Welcome to Security in Proof - where security meets bourbon and everything in between.',
    content: `
# Welcome to Security in Proof

Welcome to my corner of the internet. Here you'll find thoughts on cybersecurity, AI development, bourbon, and life beyond the keyboard.

## What's Here

Security insights, leadership lessons, and life beyond the code.

Life's too short to only talk shop.

Cheers!
    `,
    author: 'Jerry Dempsey',
    publishedAt: '2025-09-23',
    tags: ['Welcome', 'Personal'],
    featured: true,
    readingTime: 2,
    coverImage: '/welcome.jpg'
  },
  {
    slug: 'my-journey-into-the-whiskey-world',
    title: 'My Journey Into the Whiskey World',
    excerpt: 'From craft beer to bourbon hunting - how Eagle Rare changed everything and led me down the rabbit hole of whiskey appreciation.',
    content: `
# My Journey Into the Whiskey World

## From Beer to Bourbon

For years I was deep into the craft beer scene. I loved the flavors and the creativity, but beer eventually started to feel heavy. It filled me up in a way that wasn't always enjoyable. Meanwhile, my father-in-law kept nudging me to try whiskey. I gave it a shot here and there, but I could only handle it with Coke or other mixer. Straight bourbon? Forget about it.

That changed one night years ago at a friend's house when I was handed a bottle of Eagle Rare. At first glance, I laughed. The big eagle on the front screamed 'Merica, and I assumed it was some cheap bottle. Then I learned it was from Buffalo Trace, the legendary distillery behind Pappy Van Winkle. I tried a sip—and I was hooked. Smooth, flavorful, and nothing like what I expected. For under $30 at the time, it became my first real bourbon love.

## Bourbon Trail & Expanding My Palate

A few years ago I did the Bourbon Trail. Visiting distilleries like Buffalo Trace, Maker's Mark, and Bardstown opened my eyes to the culture and craft behind bourbon. Buffalo Trace stood out most—our tour guide, the famous Freddy, made it unforgettable tasting experience. Maker's Mark had the most beautiful campus, while Bardstown's state-of-the-art facility showed me where the future of bourbon is headed.

As I got deeper into bourbon, I developed a taste for drinking it neat. Over time, I learned to appreciate the differences in proof, spice, and oak. My sweet spot tends to be bourbons around 45–50% ABV—enough to bring flavor and warmth without overwhelming heat.

## The Hunt

When I first started bourbon hunting, I could still walk into a store and find Eagle Rare on the shelf. I had a few go-to spots, and every so often I'd stumble across a hidden gem in a random liquor store. Those days feel long gone. The bourbon world exploded and suddenly bottles I considered "easy finds" became rare treasures.

Still, that hunt is part of the fun. I enjoy collecting bottles, but I never forget they're meant to be opened and shared. Some are reserved for special occasions, but the best moments are drinking bourbon with friends.

## Go-To Pours & Recommendations

Even today, Eagle Rare remains my go-to pour—when I can find it. Along the way I've discovered other favorites like Elmer T. Lee, New Riff and James E. Pepper 1776. For everyday drinking, James E. Pepper and even standard Buffalo Trace never disappoint.

If you're a beer drinker looking to dip into bourbon, I'd recommend Buffalo Trace, Four Roses, James E. Pepper or Angel's Envy as great starting points.

## Closing Thoughts

Bourbon has gone from an intimidating spirit I could only drink with Coke to something I deeply enjoy and appreciate. It's more than just what's in the glass—it's the stories, the places, and the people you share it with.

And for me, it all started with a bottle of Eagle Rare that I once thought looked cheap. Funny how things change.
    `,
    author: 'Jerry Dempsey',
    publishedAt: '2025-01-24',
    tags: ['Bourbon', 'Personal', 'Whiskey', 'Buffalo Trace', 'Eagle Rare'],
    featured: false,
    readingTime: 5,
    coverImage: '/welcome.jpg'
  },
  {
    slug: 'return-to-code-ai-driven-development',
    title: 'A Return to Code: Exploring AI-Driven Development as a Security Leader',
    excerpt: 'After a decade away from daily coding, AI-driven development tools brought me back to the keyboard. Here\'s what I learned building a DAST tool with AI assistance.',
    content: `
# A Return to Code: Exploring AI-Driven Development as a Security Leader

For the past decade, my day-to-day hasn't involved writing code. I've been leading Software Security, helping engineering teams build safely, setting standards, and embedding security into every step of development. Even though I wasn't writing code myself, I was still driving the development of baselines and security controls, building security gates in CI/CD, and creating both local security tests and pipeline tests on build and deployment. Recently, AI drove me to pick up the keyboard again and build something personally—a challenge I couldn't resist.

## The Spark

It started with a personal website. I chose modern frameworks like Next.js, venturing into front-end development, which I had never done before. I wanted to see how quickly I could take an idea from concept to something tangible, while embedding security practices from the very beginning.

Cursor and AI coding assistants accelerated the process in ways I hadn't expected. Tasks that used to take hours of setup now happened in minutes. What struck me most was how naturally I could integrate security into the workflow—writing code, setting up tests, and validating best practices—all while exploring a new domain.

Once I had a solid foundation, I wanted a bigger challenge: something that combined my love of security with the thrill of building.

## Building a DAST Tool With AI

Traditional DAST tools have never been my favorite—they're often heavy, slow, and difficult to integrate. But using Golang as the language of choice, I decided to build my own: lightweight, fast, and developer-friendly.

Rather than jumping straight into code, I started with specifications. ChatGPT guided me through writing a detailed spec—asking questions I hadn't considered, shaping requirements, and structuring the project. Once the spec was complete, I fed it into Cursor, which bootstrapped the project. Within 30 minutes, I had a working prototype.

From there, it became an iterative adventure:

- Spinning up vulnerable apps like Juice Shop and WebGoat to test the tool
- Comparing results against OWASP ZAP to validate accuracy
- Translating Semgrep rules into DAST context
- Supporting multiple authentication methods
- Discovering endpoints and validating API specs to expand coverage
- Creating a rules tester that simulates network traffic using FIFO queues on disk—no live network required

Weeks of work that might have taken months before were now happening in days. AI wasn't just a tool—it became a collaborator, prompting me to think differently, explore edge cases, and focus on the security challenges that mattered most.

## A New Way of Building

This hands-on experience reshaped how I think about software development. AI doesn't just make coding faster—it changes the nature of the work. Developers can focus on architecture, design, and complex security problems, while AI handles scaffolding, repetitive tasks, and exploratory workflows.

From a security perspective, this is powerful. Spec-driven AI allows us to bake security requirements into the very first prompts, setting the tone for best practices from the start. Much as security practitioners are driving secure-by-design practices, we will need to mature the tooling to fully support this approach—but the potential is exciting.

## Why It Matters

AI is fast, evolving, and sometimes intimidating. But it also opens a door to rediscovering development in a new way. For me, it was a reminder that even as a security leader, there's nothing quite like the thrill of building something yourself—and that thrill is amplified when you can do it safely and thoughtfully.

The tools are new, the process is evolving, and challenges remain. But curiosity, a security-first mindset, and the willingness to experiment make this next chapter of software development one of the most exciting yet.

*Stay tuned for more on my DAST scanner!*
    `,
    author: 'Jerry Dempsey',
    publishedAt: '2025-09-24',
    tags: ['AI Development', 'Security Leadership', 'DAST', 'Golang', 'Personal Projects'],
    featured: true,
    readingTime: 6,
    coverImage: '/code-screen.png'
  }
];

export function getAllPosts(): BlogPost[] {
  return samplePosts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return samplePosts.find(post => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return samplePosts.filter(post => post.featured);
}

export function getPostsByTag(tag: string): BlogPost[] {
  return samplePosts
    .filter(post => post.tags.includes(tag));
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  samplePosts
    .forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
  return Array.from(tags).sort();
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function generateExcerpt(content: string, maxLength: number = 160): string {
  const plainText = content.replace(/[#*`]/g, '').trim();
  if (plainText.length <= maxLength) {
    return plainText;
  }
  return plainText.substring(0, maxLength).trim() + '...';
}

export function getAllPostSlugs(): string[] {
  return samplePosts.map(post => post.slug);
}
