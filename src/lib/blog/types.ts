export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  featured: boolean;
  readingTime: number;
  coverImage?: string;
}

export interface BlogMetadata {
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  tags: string[];
  readingTime: number;
}

export interface BlogListProps {
  posts: BlogPost[];
  pagination?: {
    currentPage: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

