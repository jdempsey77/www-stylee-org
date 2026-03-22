import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projects/utils';
import ProjectDetailClient from './ProjectDetailClient';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }

  const shareUrl = `https://stylee.org/projects/${project.slug}`;

  return {
    title: `${project.name} | Projects | Jerry Dempsey`,
    description: project.tagline,
    keywords: project.tags,
    openGraph: {
      title: project.name,
      description: project.tagline,
      url: shareUrl,
      siteName: 'Jerry Dempsey',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: project.name,
      description: project.tagline,
      creator: '@stylee_org',
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
