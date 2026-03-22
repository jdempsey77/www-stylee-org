'use client';

import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Project } from '@/lib/projects/types';
import ProjectContent from '@/components/projects/ProjectContent';

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 sticky top-16 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              Back to Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 animate-fade-in-up shadow-xl">
          <ProjectContent project={project} />
        </div>
      </div>
    </div>
  );
}
