import { Project } from './types';

const projects: Project[] = [
  {
    slug: 'filament-iq',
    name: 'Filament IQ',
    tagline: 'Filament identity & lifecycle management for Bambu Lab printers',
    version: 'v1.5.0',
    about: [
      'Filament IQ connects a Bambu Lab P1S printer \u2014 Automated Material System(AMS) \u2014 to Home Assistant and Spoolman. After every print it tracks filament consumption: using the RFID hardware delta for RFID-tagged spools, and 3MF slicer estimates for non-RFID spools.',
      'Every print event flows through a deterministic five-phase pipeline: Collect \u2192 Decide \u2192 Execute \u2192 Notify \u2192 Finalize. The decision engine is pure Python with zero I/O \u2014 it accepts typed input and returns a decision.',
    ],
    features: [
      {
        name: 'RFID spool auto-identification',
        description: 'reads tray UUID directly from AMS sensors; RFID delta always wins over slicer estimates',
      },
      {
        name: 'Five-phase pipeline',
        description: 'Collect \u2192 Decide \u2192 Execute \u2192 Notify \u2192 Finalize; pure Python decision engine with full test coverage',
      },
      {
        name: 'Filament IQ Manager',
        description: 'custom Lovelace card (Preact + Vite, ~51 KB); spool inventory with color dots, progress bars, material badges, location badges; inline CRUD; SpoolmanDB fuzzy search across 6,957 filaments',
      },
      {
        name: 'Proxy architecture',
        description: 'filament_iq_proxy HA custom component routes Spoolman REST API calls through HA\u2019s authenticated WebSocket; no unauthenticated ports exposed',
      },
    ],
    techStack: [
      { layer: 'Language', technology: 'Python 3' },
      { layer: 'Print event handling', technology: 'AppDaemon (synchronous \u2014 no async/await)' },
      { layer: 'Filament database', technology: 'Spoolman REST API' },
      { layer: 'Home Automation', technology: 'Home Assistant' },
      { layer: 'Lovelace card', technology: 'Preact + Vite IIFE build (~51 KB)' },
      { layer: 'API proxy', technology: 'HA custom component (WebSocket)' },
      { layer: 'Printer', technology: 'Bambu Lab P1S + AMS 2 Pro + 2\u00d7 AMS HT (should work with any Bambu Lab and AMS combination)' },
      { layer: 'Testing', technology: 'pytest with parametrized scenario matrices' },
    ],
    architectureNote: 'AppDaemon is synchronous \u2014 Filament IQ uses urllib.request-based HTTP calls, not asyncio. The decision engine (consumption_engine.py) is a pure function: zero AppDaemon dependency, accepts SlotInput dataclasses, returns SlotDecision dataclasses, no I/O.',
    tags: ['Python', '3D Printing', 'Home Automation', 'IoT', 'Open Source'],
    githubUrl: 'https://github.com/jdempsey77/filament-iq',
    blogPostSlug: 'building-filamentiq',
    status: 'active',
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.slug);
}
