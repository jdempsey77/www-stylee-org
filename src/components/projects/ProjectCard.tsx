import Link from 'next/link';
import { Project } from '@/lib/projects/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group cursor-pointer">
      <Link href={`/projects/${project.slug}`}>
        <div className="bg-slate-700 border border-slate-600 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <h2 className="text-xl font-bold group-hover:text-blue-400 transition-colors duration-200 text-white">
                {project.name}
              </h2>
              <span className="inline-block text-xs px-2 py-0.5 rounded-full font-medium bg-slate-600 text-slate-200">
                {project.version}
              </span>
            </div>

            <p className="text-slate-400 text-sm mb-3 italic">
              {project.tagline}
            </p>

            <p className="text-slate-300 line-clamp-3 mb-4">
              {project.about[0]}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full hover:bg-blue-700 transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 4 && (
                <span className="inline-block bg-slate-600 text-slate-300 text-xs px-3 py-1 rounded-full">
                  +{project.tags.length - 4} more
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
