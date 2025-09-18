export default function Jerry() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Hey, I&apos;m Jerry! 👋
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-4 font-semibold">
              Security geek, dad, gamer, and bourbon enthusiast 🥃
            </p>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              I&apos;ve been working in cybersecurity for over 20 years, and I still find it fascinating. 
              What I love most is solving complex technical problems and working with teams to build 
              security solutions that actually work in the real world.
            </p>
            <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              When I&apos;m not thinking about security, you&apos;ll find me hanging with my family, 
              gaming, or enjoying a nice bourbon. Coffee? Nah, not my thing.
            </p>
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
                I&apos;m a pragmatic security leader who&apos;s been working in cybersecurity for over 20 years, 
                and I still find it fascinating. What I love most is the sheer number of complex technical 
                problems to solve - each one is like a puzzle that requires both deep technical knowledge 
                and creative thinking. I&apos;ve been married for over 20 years and have 3 amazing kids who 
                keep me grounded and remind me what we&apos;re really protecting. I believe the best security 
                happens when it&apos;s practical, collaborative, and focused on protecting what matters most.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What I do when I&apos;m not working</h3>
              <ul className="space-y-3 text-gray-700">
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
