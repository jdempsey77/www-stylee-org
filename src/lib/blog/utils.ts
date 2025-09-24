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
    slug: 'bourbon-security-parallels',
    title: 'Bourbon and Security: Unexpected Parallels in Craft and Quality',
    excerpt: 'Exploring the surprising connections between bourbon craftsmanship and cybersecurity practices - both require patience, attention to detail, and a commitment to quality.',
    content: `
# Bourbon and Security: Unexpected Parallels in Craft and Quality

There's something about bourbon that speaks to the security professional in me. Maybe it's the patience required, the attention to detail, or the way both demand respect for process and tradition. After years in cybersecurity and countless evenings with a good pour, I've noticed some fascinating parallels between these two worlds.

## The Art of Patience

Bourbon isn't made overnight. It requires years of aging, careful monitoring, and the wisdom to know when it's ready. Security isn't much different. You can't rush a security program, and you certainly can't skip the fundamentals. Both require the patience to build something that will stand the test of time.

The best bourbons are aged for years, developing complexity and character. The best security programs are built over time, with layers of protection that mature and strengthen. You can't force either process.

## Quality Over Quantity

In bourbon, it's not about how much you can produce—it's about the quality of what you create. A small batch, carefully crafted bourbon will always outshine a mass-produced product. The same principle applies to security.

It's better to have a few, well-implemented security controls than dozens of half-measures. Focus on doing fewer things exceptionally well rather than many things poorly.

## The Importance of Process

Every great bourbon distillery has a process—a recipe, if you will. The mash bill, fermentation, distillation, and aging all follow specific steps that have been refined over generations. Security is no different.

We have our processes too: threat modeling, secure coding practices, vulnerability management, incident response. These aren't arbitrary rules—they're time-tested methods that work when applied consistently.

## Learning from Mistakes

In bourbon making, a bad batch teaches you more than a perfect one. You learn what went wrong, adjust your process, and improve. Security is built on the same principle of continuous improvement.

Every security incident, every vulnerability, every near-miss is an opportunity to learn and strengthen your defenses. The key is to embrace these lessons rather than fear them.

## The Craft of Mastery

Both bourbon making and security require mastery of craft. You can't fake expertise in either field. It takes years of practice, study, and hands-on experience to truly understand the nuances.

The best bourbon makers can taste a sample and tell you exactly what's in it, how it was made, and what might improve it. The best security professionals can look at a system and immediately identify potential risks and mitigation strategies.

## Building Something Worth Sharing

Great bourbon is meant to be shared—with friends, family, and fellow enthusiasts. The same is true of security knowledge. We learn from each other, share best practices, and build a community that makes everyone stronger.

Whether it's a rare bottle or a security insight, the best things in life are better when shared with others who appreciate them.

## The Bottom Line

At the end of the day, both bourbon and security are about creating something of value. Something that protects, something that brings joy, something that stands the test of time.

So here's to the craftsmen and craftswomen in both fields. May your processes be sound, your quality be high, and your patience be rewarded.

Cheers! 🥃
    `,
    author: 'Jerry Dempsey',
    publishedAt: '2025-01-24',
    tags: ['Bourbon', 'Security', 'Personal', 'Craft'],
    featured: true,
    readingTime: 4,
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
