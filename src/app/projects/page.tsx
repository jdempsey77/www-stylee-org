'use client';

import { getAllProjects } from '@/lib/projects/utils';
import ProjectCard from '@/components/projects/ProjectCard';

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900 dark:to-slate-800 pb-20">
      {/* Header */}
      <section className="py-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-900 dark:to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-2 pb-2">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up gradient-text leading-tight">
              Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 font-semibold">
              Open source tools and things I&apos;ve built
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <div key={project.slug} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
