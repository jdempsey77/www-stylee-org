import Link from 'next/link';
import { Project } from '@/lib/projects/types';

interface ProjectContentProps {
  project: Project;
}

export default function ProjectContent({ project }: ProjectContentProps) {
  return (
    <article className="max-w-4xl mx-auto">
      {/* Hero */}
      <header className="mb-8">
        <div className="mb-6 overflow-hidden rounded-xl" style={{ background: '#0d1117' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 140" width="100%">
            {/* Subtle grid */}
            <defs>
              <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M28 0L0 0 0 28" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="700" height="140" fill="url(#grid)"/>
            {/* Spool mark */}
            <circle cx="70" cy="70" r="46" fill="none" stroke="#5B8AF0" strokeWidth="4"/>
            <path d="M70 26 A44 44 0 1 1 69.99 26Z" fill="none" stroke="#F97316" strokeWidth="15" opacity="0.9"/>
            <circle cx="70" cy="70" r="16" fill="#0d1117" stroke="#5B8AF0" strokeWidth="3"/>
            <line x1="70" y1="24" x2="70" y2="54" stroke="#5B8AF0" strokeWidth="3" strokeLinecap="round"/>
            <line x1="109.8" y1="92" x2="90.2" y2="81" stroke="#5B8AF0" strokeWidth="3" strokeLinecap="round"/>
            <line x1="30.2" y1="92" x2="49.8" y2="81" stroke="#5B8AF0" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="70" cy="70" r="6.5" fill="#5B8AF0"/>
            {/* Filament tail */}
            <path d="M113 44 Q122 32 120 22" fill="none" stroke="#F97316" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
            <circle cx="120" cy="22" r="4" fill="#F97316" opacity="0.7"/>
            {/* Wordmark */}
            <text x="148" y="60" fontFamily="system-ui,-apple-system,sans-serif" fontSize="36" fontWeight="800" fill="#ffffff" dominantBaseline="middle" letterSpacing="-1">Filament</text>
            <text x="148" y="98" fontFamily="system-ui,-apple-system,sans-serif" fontSize="36" fontWeight="200" fill="#5B8AF0" dominantBaseline="middle" letterSpacing="14">IQ</text>
            {/* Tagline */}
            <text x="440" y="54" fontFamily="system-ui,-apple-system,sans-serif" fontSize="13" fontWeight="400" fill="rgba(255,255,255,0.45)" dominantBaseline="middle">Filament identity &amp; lifecycle</text>
            <text x="440" y="74" fontFamily="system-ui,-apple-system,sans-serif" fontSize="13" fontWeight="400" fill="rgba(255,255,255,0.45)" dominantBaseline="middle">management for Bambu Lab printers</text>
            <text x="440" y="100" fontFamily="system-ui,-apple-system,sans-serif" fontSize="11" fontWeight="500" fill="#F97316" dominantBaseline="middle" opacity="0.75">v1.5.0</text>
          </svg>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View on GitHub
          </a>
          {project.blogPostSlug && (
            <Link
              href={`/blog/${project.blogPostSlug}`}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
            >
              Read the build story &rarr;
            </Link>
          )}
        </div>
      </header>

      {/* What it is */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-3">What it is</h2>
        {project.about.map((paragraph, index) => (
          <p key={index} className="text-slate-300 leading-relaxed mb-4 last:mb-0">
            {paragraph}
          </p>
        ))}
      </section>

      {/* Key Features */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-3">Key Features</h2>
        <ul className="space-y-3">
          {project.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-slate-300">
              <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>
                <strong className="text-white">{feature.name}</strong>
                {' \u2014 '}
                {feature.description}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-3">Tech Stack</h2>
        <div className="overflow-hidden rounded-xl border border-slate-600">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-700">
                <th className="text-left px-4 py-3 text-sm font-semibold text-slate-300 w-1/3">Layer</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-slate-300">Technology</th>
              </tr>
            </thead>
            <tbody>
              {project.techStack.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-slate-800' : 'bg-slate-800/50'}>
                  <td className="px-4 py-3 text-sm font-medium text-white">{row.layer}</td>
                  <td className="px-4 py-3 text-sm text-slate-300">{row.technology}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Architecture Note */}
      <section className="mb-8">
        <div className="border-l-4 border-blue-500 bg-slate-700/50 rounded-r-lg px-5 py-4">
          <p className="text-slate-300 leading-relaxed italic">
            {project.architectureNote}
          </p>
        </div>
      </section>

      {/* Footer Nav */}
      <footer className="pt-6 border-t border-slate-600">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors duration-200 font-medium"
        >
          &larr; Back to Projects
        </Link>
      </footer>
    </article>
  );
}
