export interface Project {
  slug: string;
  name: string;
  tagline: string;
  version: string;
  about: string[];
  features: { name: string; description: string }[];
  techStack: { layer: string; technology: string }[];
  architectureNote: string;
  tags: string[];
  githubUrl: string;
  blogPostSlug?: string;
  status: 'active' | 'archived' | 'in-development';
}
