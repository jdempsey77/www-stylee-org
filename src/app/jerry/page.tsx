import Image from 'next/image';

export default function Jerry() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-900 dark:to-purple-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center pb-2">
            {/* Profile Photo with enhanced styling */}
            <div className="mb-8 flex justify-center animate-fade-in-up">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse-slow"></div>
                <Image 
                  src="/jerry.jpg" 
                  alt="Jerry Dempsey" 
                  width={256}
                  height={256}
                  className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white dark:border-slate-600 shadow-2xl hover-lift"
                />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up gradient-text leading-tight">
              Hey, I&apos;m Jerry!
            </h1>
            <div className="text-4xl md:text-5xl mb-6 animate-fade-in-up">
              👋
            </div>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-4 font-semibold animate-slide-in-left">
              Security geek, dad, gamer, and bourbon enthusiast 🥃
            </p>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto animate-slide-in-right">
              I&apos;ve been working in cybersecurity for over 20 years, and I still find it fascinating. 
              What I love most is solving complex technical problems and working with teams to build 
              security solutions that actually work in the real world.
            </p>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8 animate-fade-in-up">
              When I&apos;m not thinking about security, you&apos;ll find me hanging with my family, 
              gaming, or enjoying a nice bourbon. Coffee? Nah, not my thing.
            </p>
          </div>
        </div>
      </section>

      {/* Personal About Me & Hobbies */}
      <section className="py-20 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                About me
              </h2>
              <div className="glass rounded-2xl p-8 hover-lift">
                <p className="text-lg text-slate-600 dark:text-slate-300">
                  I&apos;m a pragmatic security leader who&apos;s been working in cybersecurity for over 20 years, 
                  and I still find it fascinating. What I love most is the sheer number of complex technical 
                  problems to solve - each one is like a puzzle that requires both deep technical knowledge 
                  and creative thinking. I&apos;ve been married for over 20 years and have 3 amazing kids who 
                  keep me grounded and remind me what we&apos;re really protecting. I believe the best security 
                  happens when it&apos;s practical, collaborative, and focused on protecting what matters most.
                </p>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="glass rounded-2xl p-8 hover-lift">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">What I do when I&apos;m not working</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/50 dark:bg-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-700/70 transition-all duration-300">
                    <span className="text-2xl">👨‍👩‍👧‍👦</span>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">Family time</h4>
                      <p className="text-slate-600 dark:text-slate-300">The best part of my day</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/50 dark:bg-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-700/70 transition-all duration-300">
                    <span className="text-2xl">🎮</span>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">Gaming</h4>
                      <p className="text-slate-600 dark:text-slate-300">Playing with family & collecting retro systems</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/50 dark:bg-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-700/70 transition-all duration-300">
                    <span className="text-2xl">🏈</span>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">Falcons fan</h4>
                      <p className="text-slate-600 dark:text-slate-300">Rise up! (even when they break my heart)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/50 dark:bg-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-700/70 transition-all duration-300">
                    <span className="text-2xl">🔧</span>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">Tech tinkering</h4>
                      <p className="text-slate-600 dark:text-slate-300">Always playing with new toys and ideas</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/50 dark:bg-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-700/70 transition-all duration-300">
                    <span className="text-2xl">🥃</span>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">Bourbon</h4>
                      <p className="text-slate-600 dark:text-slate-300">Love trying new ones and enjoying with friends</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
