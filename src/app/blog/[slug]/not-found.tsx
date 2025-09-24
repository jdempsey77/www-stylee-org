import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-900 dark:to-purple-900 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center">
        <div className="glass rounded-3xl p-8 md:p-12 hover-lift">
          <h1 className="text-6xl font-bold text-slate-900 dark:text-white mb-4 gradient-text">404</h1>
          <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-4">
            Post Not Found
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            The blog post you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
