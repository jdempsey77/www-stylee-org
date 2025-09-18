import Link from 'next/link';
import { ShieldCheckIcon, CodeBracketIcon, CloudIcon, DocumentTextIcon, BriefcaseIcon, StarIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

export default function Jerry() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Hey, I'm Jerry! 👋
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-4 font-semibold">
              Security geek, dad, gamer, and bourbon enthusiast 🥃
            </p>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              I've been working in cybersecurity for over 20 years, and I still find it fascinating. 
              What I love most is solving complex technical problems and working with teams to build 
              security solutions that actually work in the real world.
            </p>
            <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              When I'm not thinking about security, you'll find me hanging with my family, 
              gaming, or enjoying a nice bourbon. Coffee? Nah, not my thing.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a
                href="mailto:jerry@stylee.org"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-600 px-4 py-2 text-white hover:bg-slate-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 4h20v16H2V4zm10 7L4 6v12h16V6l-8 5z" />
                </svg>
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/jerryldempsey/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-700 px-4 py-2 text-white hover:bg-slate-800 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/jdempsey77"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-white hover:bg-slate-900 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a
                href="/jerry/resume"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-500 px-4 py-2 text-white hover:bg-slate-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Personal About Me & Hobbies */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                About me
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                I'm a pragmatic security leader who's been working in cybersecurity for over 20 years, 
                and I still find it fascinating. What I love most is the sheer number of complex technical 
                problems to solve - each one is like a puzzle that requires both deep technical knowledge 
                and creative thinking. I've been married for over 20 years and have 3 amazing kids who 
                keep me grounded and remind me what we're really protecting. I believe the best security 
                happens when it's practical, collaborative, and focused on protecting what matters most.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">What I do when I'm not working</h3>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>👨‍👩‍👧‍👦 Family time — the best part of my day</li>
                <li>🎮 Gaming — Enjoy playing video games with my family along with collecting retro systems and games</li>
                <li>🏈 Falcons fan — Rise up! (even when they break my heart)</li>
                <li>🔧 Tech tinkering — always playing with new toys and ideas</li>
                <li>🥃 Bourbon — Love trying new ones and enjoying with friends</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
