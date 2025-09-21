'use client';

import Image from 'next/image';

export default function Links() {
  const favoriteLinks = [
    {
      name: "Atlanta Falcons",
      url: "https://www.atlantafalcons.com",
      description: "Official website of the Atlanta Falcons NFL team",
      category: "Sports"
    },
    {
      name: "Atlanta Braves",
      url: "https://www.mlb.com/braves",
      description: "Official website of the Atlanta Braves MLB team",
      category: "Sports"
    },
    {
      name: "Atlanta Hawks",
      url: "https://www.nba.com/hawks/",
      description: "Official website of the Atlanta Hawks NBA team",
      category: "Sports"
    },
    {
      name: "Dark Reading",
      url: "https://www.darkreading.com",
      description: "Information security news, analysis, and insights",
      category: "Security"
    },
    {
      name: "The Hacker News",
      url: "https://thehackernews.com/",
      description: "#1 Trusted Cybersecurity News Platform - Latest security news, vulnerabilities, and expert insights",
      category: "Security"
    },
    {
      name: "OWASP",
      url: "https://owasp.org",
      description: "Open Web Application Security Project - Global community focused on improving software security",
      category: "Security"
    },
    {
      name: "GameSpot",
      url: "https://www.gamespot.com",
      description: "Gaming news, reviews, and community",
      category: "Gaming"
    },
    {
      name: "IGN",
      url: "https://www.ign.com/",
      description: "Video game reviews, news, and entertainment coverage",
      category: "Gaming"
    },
    {
      name: "Breaking Bourbon",
      url: "https://www.breakingbourbon.com",
      description: "Bourbon reviews, news, and industry insights",
      category: "Bourbon"
    },
    {
      name: "Bourbon & Banter",
      url: "https://www.bourbonbanter.com/",
      description: "Bourbon reviews, industry news, and community discussions",
      category: "Bourbon"
    }
  ];

  const categories = [...new Set(favoriteLinks.map(link => link.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              My Favorite Links
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
              A curated collection of websites I visit regularly for work, play, and everything in between.
            </p>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {categories.map((category) => (
              <div key={category} className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 border-b-2 border-slate-200 dark:border-slate-700 pb-2">
                  {category}
                </h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {favoriteLinks
                    .filter(link => link.category === category)
                    .map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block p-6 bg-slate-50 dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-200 hover:shadow-lg"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <Image 
                              src={`https://www.google.com/s2/favicons?domain=${new URL(link.url).hostname}&sz=32`}
                              alt={`${link.name} favicon`}
                              width={32}
                              height={32}
                              className="w-6 h-6 flex-shrink-0 rounded-sm"
                              onError={(e) => {
                                // Fallback to a generic link icon if favicon fails to load
                                const target = e.currentTarget as HTMLImageElement;
                                const nextSibling = target.nextElementSibling as HTMLElement;
                                target.style.display = 'none';
                                if (nextSibling) {
                                  nextSibling.style.display = 'block';
                                }
                              }}
                            />
                            <svg 
                              className="w-6 h-6 text-slate-400 hidden flex-shrink-0" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                              {link.name}
                            </h3>
                          </div>
                          <svg 
                            className="w-5 h-5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors flex-shrink-0 ml-2" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {link.description}
                        </p>
                        <div className="mt-3 text-xs text-slate-500 dark:text-slate-400 font-mono">
                          {link.url}
                        </div>
                      </a>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
