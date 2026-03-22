import Link from 'next/link';

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Project Not Found</h1>
        <p className="text-slate-600 dark:text-slate-300 mb-6">The project you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
        >
          View All Projects
        </Link>
      </div>
    </div>
  );
}
