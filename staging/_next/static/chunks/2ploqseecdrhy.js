(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57135,e=>{var t=e.i(71645);let a=t.forwardRef(function({title:e,titleId:a,...i},o){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},i),e?t.createElement("title",{id:a},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"}))});e.s(["f",0,a],57135)},74021,e=>{var t=e.i(43476),a=e.i(22016),i=e.i(57135),o=e.i(71645);let s=o.forwardRef(function({title:e,titleId:t,...a},i){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":t},a),e?o.createElement("title",{id:t},e):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"}))});var n=e.i(25164),r=e.i(87511);function l({post:e}){return(0,t.jsxs)("article",{className:"max-w-4xl mx-auto",children:[(0,t.jsxs)("header",{className:"mb-4",children:[(0,t.jsxs)("div",{className:"flex items-center gap-4 text-sm text-slate-500 dark:text-slate-300 mb-2",children:[(0,t.jsx)("time",{dateTime:e.publishedAt,children:(0,r.C)(e.publishedAt)}),(0,t.jsx)("span",{children:"•"}),(0,t.jsxs)("span",{children:[e.readingTime," min read"]}),(0,t.jsx)("span",{children:"•"}),(0,t.jsxs)("span",{children:["By ",e.author]})]}),(0,t.jsx)("h1",{className:"text-4xl md:text-5xl font-bold mb-2 text-slate-900 dark:text-white",children:e.title}),(0,t.jsx)("p",{className:"text-xl text-slate-600 dark:text-slate-300 mb-2",children:e.excerpt}),(0,t.jsx)("div",{className:"flex flex-wrap gap-2",children:e.tags.map(e=>(0,t.jsx)("span",{className:"inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm px-3 py-1 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200",children:e},e))})]}),e.coverImage&&(0,t.jsx)("div",{className:"mb-4",children:(0,t.jsx)("div",{className:"relative h-64 md:h-96 rounded-lg overflow-hidden",children:(0,t.jsx)(n.default,{src:e.coverImage,alt:e.title,fill:!0,className:"object-cover",sizes:"(max-width: 768px) 100vw, 768px"})})}),(0,t.jsx)("div",{className:"prose prose-lg max-w-none",children:(e=>{let a=e.split("\n"),i=[],o=0;for(let e=0;e<a.length;e++){let s=a[e].trim();if(""!==s)if(s.startsWith("# "))i.push((0,t.jsx)("h1",{className:"text-3xl font-bold mt-6 mb-3 text-slate-900 dark:text-white",children:s.substring(2)},o++));else if(s.startsWith("## "))i.push((0,t.jsx)("h2",{className:"text-2xl font-bold mt-4 mb-2 text-slate-900 dark:text-white",children:s.substring(3)},o++));else if(s.startsWith("### "))i.push((0,t.jsx)("h3",{className:"text-xl font-semibold mt-3 mb-1 text-slate-900 dark:text-white",children:s.substring(4)},o++));else if(s.startsWith("- ")){let s=[],n=e;for(;n<a.length&&a[n].startsWith("- ");)s.push((0,t.jsx)("li",{className:"mb-1 text-slate-600 dark:text-slate-300",children:a[n].substring(2)},n)),n++;i.push((0,t.jsx)("ul",{className:"list-disc list-inside mb-3 ml-4 space-y-1 text-slate-600 dark:text-slate-300",children:s},o++)),e=n-1}else if(/^\d+\. /.test(s)){let s=[],n=e;for(;n<a.length&&/^\d+\. /.test(a[n]);)s.push((0,t.jsx)("li",{className:"mb-1 text-slate-600 dark:text-slate-300",children:a[n].replace(/^\d+\. /,"")},n)),n++;i.push((0,t.jsx)("ol",{className:"list-decimal list-inside mb-3 ml-4 space-y-1 text-slate-600 dark:text-slate-300",children:s},o++)),e=n-1}else{let e=s.replace(/\*([^*]+)\*/g,"$1");i.push((0,t.jsx)("p",{className:"text-slate-600 dark:text-slate-300 mb-2 leading-relaxed",children:e},o++))}}return i})(e.content)}),(0,t.jsx)("footer",{className:"mt-6 pt-4 border-t border-slate-200 dark:border-slate-600",children:(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)("div",{className:"text-sm text-slate-500 dark:text-slate-400",children:["Published on ",(0,r.C)(e.publishedAt),e.updatedAt&&e.updatedAt!==e.publishedAt&&(0,t.jsxs)("span",{children:[" • Updated on ",(0,r.C)(e.updatedAt)]})]}),(0,t.jsxs)("div",{className:"text-sm text-slate-500 dark:text-slate-400",children:["By ",e.author]})]})})]})}function d({slug:e,title:a}){return(0,o.useEffect)(()=>{let e=document.createElement("script");e.src="https://giscus.app/client.js",e.setAttribute("data-repo","jdempsey77/comments"),e.setAttribute("data-repo-id","R_kgDOP1t5NA"),e.setAttribute("data-category","General"),e.setAttribute("data-category-id","DIC_kwDOP1t5NM4Cv0mK"),e.setAttribute("data-mapping","pathname"),e.setAttribute("data-strict","0"),e.setAttribute("data-reactions-enabled","1"),e.setAttribute("data-emit-metadata","0"),e.setAttribute("data-input-position","bottom"),e.setAttribute("data-theme","dark"),e.setAttribute("data-lang","en"),e.setAttribute("data-loading","lazy"),e.crossOrigin="anonymous";let t=document.getElementById("giscus-comments");return t&&t.appendChild(e),()=>{t&&e.parentNode&&t.removeChild(e)}},[e,a]),(0,t.jsxs)("div",{className:"mt-8 pt-6 border-t border-slate-200 dark:border-slate-600",children:[(0,t.jsx)("h3",{className:"text-2xl md:text-3xl font-bold mb-6 text-slate-900 dark:text-white",children:"Comments"}),(0,t.jsx)("div",{id:"giscus-comments",className:"giscus-comments",style:{"--giscus-theme":"dark","--giscus-color-scheme":"dark"}})]})}e.s(["default",0,function({post:e,shareUrl:o}){let n=async()=>{if(navigator.share)try{await navigator.share({title:e.title,text:e.excerpt,url:o})}catch(e){console.log("Error sharing:",e)}else try{await navigator.clipboard.writeText(o),alert("Link copied to clipboard!")}catch(e){console.log("Error copying to clipboard:",e)}};return(0,t.jsxs)("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900 dark:to-slate-800",children:[(0,t.jsx)("div",{className:"bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 sticky top-16 z-40",children:(0,t.jsx)("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)(a.default,{href:"/blog",className:"inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium",children:[(0,t.jsx)(i.f,{className:"h-4 w-4"}),"Back to Blog"]}),(0,t.jsxs)("button",{onClick:n,className:"inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium",children:[(0,t.jsx)(s,{className:"h-4 w-4"}),"Share"]})]})})}),(0,t.jsxs)("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[(0,t.jsx)("div",{className:"bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 mb-6 animate-fade-in-up shadow-xl",children:(0,t.jsx)(l,{post:e})}),(0,t.jsx)("div",{className:"bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 animate-fade-in-up shadow-xl",style:{animationDelay:"0.2s"},children:(0,t.jsx)(d,{slug:e.slug,title:e.title})})]})]})}],74021)},87511,e=>{let t=[{slug:"welcome-to-stylee-blog",title:"Welcome to Security in Proof",excerpt:"Welcome to Security in Proof - where security meets bourbon and everything in between.",content:`
# Welcome to Security in Proof

Welcome to my corner of the internet. Here you'll find thoughts on cybersecurity, AI development, bourbon, and life beyond the keyboard.

## What's Here

Security insights, leadership lessons, and life beyond the code.

Life's too short to only talk shop.

Cheers!
    `,author:"Jerry Dempsey",publishedAt:"2024-09-22",tags:["Welcome","Personal"],featured:!1,readingTime:2,coverImage:"/welcome.jpg"},{slug:"my-journey-into-the-bourbon-world",title:"My Journey Into the Bourbon World",excerpt:"From craft beer to bourbon hunting - how Eagle Rare changed everything and led me down the rabbit hole of bourbon appreciation.",content:`
# My Journey Into the Bourbon World

## From Beer to Bourbon

For years I was deep into the craft beer scene. I loved the flavors and the creativity, but beer eventually started to feel heavy. It filled me up in a way that wasn't always enjoyable. Meanwhile, my father-in-law kept nudging me to try whiskey. I gave it a shot here and there, but I could only handle it with Coke or other mixer. Straight bourbon? Forget about it.

That changed one night years ago at a friend's house when I was handed a bottle of Eagle Rare. At first glance, I laughed. The big eagle on the front screamed 'Merica, and I assumed it was some cheap bottle. Then I learned it was from Buffalo Trace, the legendary distillery behind Pappy Van Winkle. I tried a sip—and I was hooked. Smooth, flavorful, and nothing like what I expected. For under $30 at the time, it became my first real bourbon love.

## Bourbon Trail & Expanding My Palate

A few years ago I did the Bourbon Trail. Visiting distilleries like Buffalo Trace, Maker's Mark, and Bardstown opened my eyes to the culture and craft behind bourbon. Buffalo Trace stood out most—our tour guide, the famous Freddy, made it unforgettable tasting experience. Maker's Mark had the most beautiful campus, while Bardstown's state-of-the-art facility showed me where the future of bourbon is headed.

As I got deeper into bourbon, I developed a taste for drinking it neat. Over time, I learned to appreciate the differences in proof, spice, and oak. My sweet spot tends to be bourbons around 45–50% ABV—enough to bring flavor and warmth without overwhelming heat.

## The Hunt

When I first started bourbon hunting, I could still walk into a store and find Eagle Rare on the shelf. I had a few go-to spots, and every so often I'd stumble across a hidden gem in a random liquor store. Those days feel long gone. The bourbon world exploded and suddenly bottles I considered "easy finds" became rare treasures.

Still, that hunt is part of the fun. I enjoy collecting bottles, but I never forget they're meant to be opened and shared. Some are reserved for special occasions, but the best moments are drinking bourbon with friends.

## Go-To Pours & Recommendations

Even today, Eagle Rare remains my go-to pour—when I can find it. Along the way I've discovered other favorites like Elmer T. Lee, New Riff and James E. Pepper 1776. For everyday drinking, James E. Pepper and even standard Buffalo Trace never disappoint.

If you're a beer drinker looking to dip into bourbon, I'd recommend Buffalo Trace, Four Roses, James E. Pepper or Angel's Envy as great starting points.

## Closing Thoughts

Bourbon has gone from an intimidating spirit I could only drink with Coke to something I deeply enjoy and appreciate. It's more than just what's in the glass—it's the stories, the places, and the people you share it with.

And for me, it all started with a bottle of Eagle Rare that I once thought looked cheap. Funny how things change.
    `,author:"Jerry Dempsey",publishedAt:"2024-09-24",tags:["Bourbon","Personal","Whiskey","Buffalo Trace","Eagle Rare"],featured:!1,readingTime:5,coverImage:"/neat.jpg"},{slug:"return-to-code-ai-driven-development",title:"A Return to Code: Exploring AI-Driven Development as a Security Leader",excerpt:"After a decade away from daily coding, AI-driven development tools brought me back to the keyboard. Here's what I learned building a DAST tool with AI assistance.",content:`
# A Return to Code: Exploring AI-Driven Development as a Security Leader

For the past decade, my day-to-day hasn't involved writing code. I've been leading Software Security, helping engineering teams build safely, setting standards, and embedding security into every step of development. Even though I wasn't writing code myself, I was still driving the development of baselines and security controls, building security gates in CI/CD, and creating both local security tests and pipeline tests on build and deployment. Recently, AI drove me to pick up the keyboard again and build something personally—a challenge I couldn't resist.

## The Spark

It started with a personal website. I chose modern frameworks like Next.js, venturing into front-end development, which I had never done before. I wanted to see how quickly I could take an idea from concept to something tangible, while embedding security practices from the very beginning.

Cursor and AI coding assistants accelerated the process in ways I hadn't expected. Tasks that used to take hours of setup now happened in minutes. What struck me most was how naturally I could integrate security into the workflow—writing code, setting up tests, and validating best practices—all while exploring a new domain.

Once I had a solid foundation, I wanted a bigger challenge: something that combined my love of security with the thrill of building.

## Building a DAST Tool With AI

Traditional DAST tools have never been my favorite—they're often heavy, slow, and difficult to integrate. But using Golang as the language of choice, I decided to build my own: lightweight, fast, and developer-friendly.

Rather than jumping straight into code, I started with specifications. ChatGPT guided me through writing a detailed spec—asking questions I hadn't considered, shaping requirements, and structuring the project. Once the spec was complete, I fed it into Cursor, which bootstrapped the project. Within 30 minutes, I had a working prototype.

From there, it became an iterative adventure:

- Spinning up vulnerable apps like Juice Shop and WebGoat to test the tool
- Comparing results against OWASP ZAP to validate accuracy
- Translating Semgrep rules into DAST context
- Supporting multiple authentication methods
- Discovering endpoints and validating API specs to expand coverage
- Creating a rules tester that simulates network traffic using FIFO queues on disk—no live network required

Weeks of work that might have taken months before were now happening in days. AI wasn't just a tool—it became a collaborator, prompting me to think differently, explore edge cases, and focus on the security challenges that mattered most.

## A New Way of Building

This hands-on experience reshaped how I think about software development. AI doesn't just make coding faster—it changes the nature of the work. Developers can focus on architecture, design, and complex security problems, while AI handles scaffolding, repetitive tasks, and exploratory workflows.

From a security perspective, this is powerful. Spec-driven AI allows us to bake security requirements into the very first prompts, setting the tone for best practices from the start. Much as security practitioners are driving secure-by-design practices, we will need to mature the tooling to fully support this approach—but the potential is exciting.

## Why It Matters

AI is fast, evolving, and sometimes intimidating. But it also opens a door to rediscovering development in a new way. For me, it was a reminder that even as a security leader, there's nothing quite like the thrill of building something yourself—and that thrill is amplified when you can do it safely and thoughtfully.

The tools are new, the process is evolving, and challenges remain. But curiosity, a security-first mindset, and the willingness to experiment make this next chapter of software development one of the most exciting yet.

*Stay tuned for more on my DAST scanner!*
    `,author:"Jerry Dempsey",publishedAt:"2024-09-23",tags:["AI Development","Security Leadership","DAST","Golang","Personal Projects"],featured:!0,readingTime:6,coverImage:"/code-screen.png"},{slug:"building-filamentiq",title:"When Home Automation Meets 3D Printing: Building FilamentIQ",excerpt:"I got a 3D printer for Christmas and ended up building an automated filament tracking system that bridges Bambu Lab printers, Home Assistant, and Spoolman.",content:`
# When Home Automation Meets 3D Printing: Building FilamentIQ

I got a 3D printer for Christmas and I'm completely hooked. Naturally, the first thing I wanted to do was integrate it into Home Assistant. One rabbit hole led to another, and eventually I found myself deep into filament tracking — trying to know exactly how much was left on every spool without ever having to manually weigh or check anything.

There are good solutions out there. Spoolman is excellent. The ha-bambulab integration is solid. But there were gaps — the pieces didn't quite talk to each other the way I wanted. Consumption wasn't being recorded automatically. Spool identity was fragile. I kept iterating until I realized I was building something worth finishing.

That became FilamentIQ.

## What I Decided to Build

FilamentIQ is an AppDaemon-based system that bridges Bambu Lab printers, Home Assistant, and Spoolman. The goal: zero manual intervention. A print finishes, filament consumption gets recorded, spool weights stay accurate — without me touching anything.

Simple to say. Less simple to build.

## The Journey

The first challenge was spool identity. How does the system know which physical spool is in slot 3? Bambu RFID spools have a chip, but not all spools do — and even RFID chips can be unreliable. Some Bambu spools have dual NFC chips that report different IDs depending on how the spool is oriented.

I ended up with a two-track identity system:

- RFID spools are matched by tray_uuid — a stable identifier from the ha-bambulab integration
- Non-RFID spools are matched by a color + material fingerprint, auto-enrolled when the combination is unambiguous

All identity is stored in Spoolman's lot_nr field, making it portable and source-of-truth friendly.

The second challenge was consumption accuracy. Just knowing that filament was used isn't enough — you need to know how much per spool. This is where things got interesting.

I built a three-tier allocation pipeline:

1. **3MF file parsing** — After a print finishes, the system FTPs into the printer, downloads the 3MF file from the cache directory, and extracts the slicer's own used_g values per filament. This is the most accurate method — the slicer calculated it.
2. **RFID fuel gauge delta** — If 3MF parsing isn't available, fall back to start_g - end_g from the tray weight sensors on RFID spools. Roughly 40g resolution, but reliable.
3. **Time-weighted estimation** — Final fallback. Split total consumption proportionally by how long each tray was active during the print. Naturally captures purge tower waste too.

The system tries each tier in order and uses the best data available. In practice, tier one fires most of the time.

## Building With AI

I used Claude.ai as my architect and advisor throughout — thinking through system design, debating tradeoffs, and working through edge cases before writing a line of code. Claude Code and Cursor did the heavy lifting on the actual implementation.

One example: the job deduplication problem. Prints can trigger multiple completion events. Without deduplication, you'd record consumption twice. The solution was a disk-persisted job key set, capped at 50 entries, that survives AppDaemon restarts. A subtle problem with a clean solution.

## What Shipping Looks Like Now

FilamentIQ is live on GitHub and available as a HACS custom repository:

https://github.com/jdempsey77/filament-iq

The repo has full documentation, a regression test suite (99 tests against my live P1S), and CI via GitHub Actions. The system is running on my home setup right now, tracking every print automatically.

It's early days. There are rough edges. The setup requires familiarity with AppDaemon and Home Assistant configuration. But the core system is solid, and I'm genuinely using it — which is the only metric that matters for a personal project.

## What's Next

The immediate roadmap includes a cleaner installation experience and potentially a submission to the official HACS default store. Longer term, I want to explore richer dashboard visualizations — cost tracking per print, filament brand comparisons, lifecycle projections.

But mostly, I want to see if it's useful to other people. If you run a Bambu printer with Spoolman and Home Assistant, give it a try and tell me what breaks.

That's the best kind of feedback.

*FilamentIQ is open source under the MIT license. Issues, PRs, and questions welcome at github.com/jdempsey77/filament-iq.*
    `,author:"Jerry Dempsey",publishedAt:"2026-03-06",tags:["Personal Projects","AI Development","Home Automation"],featured:!1,readingTime:7,coverImage:"/3dprinting.webp"}];e.s(["C",0,function(e){return new Date(e+"T00:00:00").toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})},"K",0,function(){return t.sort((e,t)=>new Date(t.publishedAt).getTime()-new Date(e.publishedAt).getTime())},"i",0,function(){let e=new Set;return t.forEach(t=>{t.tags.forEach(t=>e.add(t))}),Array.from(e).sort()},"W",0,function(){return t.filter(e=>e.featured)},"X",0,function(e){return t.filter(t=>t.tags.includes(e))}])}])})();