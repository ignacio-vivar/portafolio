export type Project = {
  id: string
  title: string
  name: string
  description: string
  isAlive: boolean
  status: 'live' | 'wip' | 'archived' | 'running'
  stack: string[]
  url?: string
  detail: string
  // ── detalle extendido ──
  highlights?: string[]        // bullets de puntos fuertes
  challenges?: string[]        // problemas que resolviste
  screenshots?: string[]       // urls de imágenes cuando las tengas
  summary?: string
  role?: string                // "solo project" / "lead dev" / etc
  year?: string                // "2024" / "2024 — present"
  repos?: { label: string; url: string }[]
}

export const projects: Project[] = [
  {
    id: 'gimtest',
    title: 'GIM_TEST',
    name: 'GimTest',
    description: 'Full-stack gym management SaaS — exercises, routines, student progress, schedules, and automated sessions.',
    isAlive: true,
    status: 'live',
    stack: ['next.js', 'fastapi', 'supabase', 'postgresql', 'shadcn/ui', 'tanstack table'],
    url: 'https://gim-project.vercel.app',
    detail: 'Real-world SaaS application. Handles custom routines (timed/rep-based), student profile management, and interactive scheduling. Features Supabase Auth with protected routes and PostgreSQL Row-Level Security (RLS).',
    year: '2024 — present',
    role: 'solo project',
    // repos: [{ label: 'frontend', url: 'https://github.com/ignacio-vivar/gim-project' }],
    highlights: [
      'APScheduler integration for automated session status transitions in the backend',
      'PostgreSQL Row-Level Security (RLS) coupled with Security Definer functions for secure data isolation',
      'Automated Supabase database triggers for role-based user management',
      'TanStack Table for high-performance sorting, filtering, and pagination of student datasets',
      'Custom schedule templates supporting flexible, per-day configuration profiles',
      'Interactive session timelines with modular routine and exercise editors'
    ],
    challenges: [
      'Supabase Authentication integration and secure state sync in Next.js middleware',
      'Docker port mapping and service conflicts on WSL2 development environments',
      'PostgreSQL ARRAY(TIME) type mapping and query optimization with SQLAlchemy ORM',
      'Optimizing React component rendering and chunk loading times'
    ],
    screenshots: [
      'https://drive.google.com/file/d/1LlMEAIInYxud6ESAXX4yFsyPVdSoBECO/preview',
      'https://drive.google.com/file/d/1EXrGmHB1ue-hrELFQLHO2xdCcukM6eI7/preview',
      'https://drive.google.com/file/d/11ySNnTVSeGRuxN5EEPV7xEmY-vCXd1Dx/preview',
      'https://drive.google.com/file/d/1CQhe7gkKnp2dpJe7xr5GSX0gx_m8KkV5/preview',
      'https://drive.google.com/file/d/1yCluvUhoHcU6DKpMFuuQKB_NEEM-wVPH/preview',
      'https://drive.google.com/file/d/1oHswz9W8yAlO00ndhrmeJxRL7EpG_M40/preview'
    ],
    summary: `In this project, I built a Single Page Application (SPA) with a multi-tab interface designed to streamline gym operations. To align with client requirements, the user interface is localized in Spanish.
The architecture comprises a FastAPI backend, Supabase (for database storage and authentication), and a Next.js frontend. 
Key modules include student routine tracking backed by a global React Context to cache recently viewed items, schedule and status boards, a robust routine builder/editor, and management dashboards for students and exercise catalogs. The entire design and planning phase was mapped out in Obsidian and Excalidraw. The system also includes an administrative panel for trainers to configure custom variables.
The project is currently active, has a stable release deployed, and remains my primary focus.`,
  },
  {
    id: 'cdf-vivar',
    title: 'ASTRO / MDX',
    name: 'CDF Vivar',
    description: 'Astro-powered content platform. MDX + Google Drive file integration. Built with agentic coding.',
    isAlive: true,
    status: 'live',
    repos: [{ label: 'repo', url: 'https://github.com/ignacio-vivar/vibe_astro_blog' }],
    stack: ['astro', 'mdx', 'google drive', 'vercel', 'antigravity'],
    url: 'https://cdf-vivar.vercel.app',
    detail: 'A high-performance educational portal for content sharing and previews. Built with Astro, utilizing MDX for modular article styling, and fetching downloadable assets from Google Drive. Developed using agentic AI workflows.',
    highlights: [
      'High-performance, SEO-optimized static site delivering fast load times for students',
      'Streamlined content publishing workflow using markdown-centric structures',
      'MDX integration enabling interactive React/Astro components within standard Markdown documents'
    ],
    challenges: [
      'Handling package manager conflicts and manually resolving complex dependency trees during AI-assisted builds'
    ],
    summary: `This project was developed through an agentic workflow where I chose Astro to construct a lightweight, high-speed educational platform for sharing study materials across my courses. 
I integrated MDX to inject dynamic components into markdown documents. 
The site is entirely public, eliminating login barriers and serving as a seamless alternative to the university Moodle LMS, which suffered from a high-friction sign-in flow and student enrollment overhead.`,
    screenshots: [
      'https://drive.google.com/file/d/1elWYqCcJ36D3WhalyHzeHIUmUtCzEsFF/preview',
      'https://drive.google.com/file/d/1HoG1XyaqI5bwKls93t0FIoQ63SENikDC/preview'
    ]
  },
  {
    id: 'cdf-cnc',
    title: 'CNC / FILE HUB',
    name: 'CDF — CNC Platform',
    description: 'File preview & download portal for CNC machining content. Figma-designed, React + FastAPI.',
    isAlive: true,
    status: 'live',
    repos: [{ label: 'frontend', url: 'https://github.com/ignacio-vivar/FrontCNC' }, { label: 'backend', url: 'https://github.com/ignacio-vivar/BackCNC' }],
    stack: ['react', 'fastapi', 'figma'],
    url: 'https://cncwebpage.netlify.app/',
    detail: 'Educational platform for CNC programming resources. Designed in Figma prior to implementation. Features direct file streaming via a FastAPI backend.',
    summary: `This was my first project using React, built using browser-based AI assistance and manual implementation. 
The system was designed to provide students with rapid access to academic files. From an architectural standpoint, the project suffers from a clear anti-pattern: serving static files directly from the backend server disk instead of utilizing an object storage bucket (e.g., AWS S3) and a CDN. This experience provided valuable lessons in backend architecture and cloud asset delivery constraints.`,
    screenshots: ['https://drive.google.com/file/d/1Hw373RNZ-B73ykq4iibmBbo_-bv4iH0O/preview']
  },
  {
    id: 'nutrition-bot',
    title: 'BOT / VPS',
    name: 'Nutrition Bot',
    description: 'Telegram bot with FatSecret API integration. Formerly VPS-hosted, personal Telegram ID auth gate. Currently archived due to subscription termination.',
    isAlive: false,
    status: 'archived',
    repos: [{ label: 'repo', url: 'https://github.com/ignacio-vivar/bot_telegram' }],
    stack: ['python', 'telegram bot api', 'fatsecret api', 'fastapi', 'vps'],
    detail: 'Telegram bot for personalized nutrition tracking, formerly deployed on a self-managed VPS. Restricts access to a single user ID and integrates with the FatSecret database. Functioned perfectly during its active deployment, but currently archived due to VPS subscription termination from lack of active use.',
    highlights: [
      'Self-managed VPS deployment (Contabo) with process monitoring for 24/7 uptime during operation',
      'Single-user authentication gating based on Telegram Chat IDs'
    ],
    challenges: [
      'Parsing and caching nutrition schemas into localized JSON files for quick lookups',
      'Implementing 3-legged OAuth authentication flow to retrieve secure user tokens from the FatSecret API'
    ],
    summary: `To optimize the process of tracking my daily caloric intake, I built this Telegram bot integrated with the FatSecret API. 
After analyzing the API endpoints in Postman, I designed a FastAPI server that handles requests and integrates a fuzzy matching string similarity library to resolve approximate food search terms. 
Due to FatSecret's requirement for a static IP address, I deployed the FastAPI application on a rented Contabo VPS. The bot is locked to my Telegram User ID to prevent unauthorized access. Although the bot functioned perfectly, the VPS subscription was eventually cancelled due to lack of active use, and the project is now archived.`,
    screenshots: ['https://drive.google.com/file/d/1IkkKd0yicJDvlkKWsiWP3cGuxyoYsvqb/preview']
  },
  {
    id: 'docs-mobile',
    title: 'DOCS / MOBILE',
    name: 'Docs Mobile',
    description: 'Document management app, mobile-first. Custom FastAPI auth, never reached production.',
    isAlive: false,
    status: 'archived',
    stack: ['react', 'fastapi', 'jwt auth', 'mobile-first', 'shadcn', 'notion'],
    detail: 'Mobile-first document cataloging system designed for medical teams. Implements a custom JWT authentication scheme in FastAPI without external Auth providers.',
    summary: `Commissioned by a team of medical practitioners, this private platform aimed to streamline internal schedules and document access. 
I collaborated with another developer, but we eventually halted development due to maintenance overhead, hosting costs, and scope changes. 
During development, we focused on modular React components and reusable custom hooks. Although the app never reached production, the process refined our state management practices and established architecture patterns that I still use today.`,
    highlights: [
      'Adopting shadcn/ui to build a unified, accessible, and responsive component library'
    ],
    challenges: [
      'Integrating and aligning business logic across shared codebases and separate repositories'
    ],
    screenshots: ['https://drive.google.com/file/d/1Cy8xBYiVTPccKU4TTbQzkMaHCLs1ga7d/preview']
  },
  {
    id: 'proposite',
    title: 'TANSTACK / AUTH',
    name: 'Proposite',
    description: 'First TanStack Table implementation. Manual FastAPI auth. Built to learn and prototype.',
    isAlive: false,
    status: 'archived',
    repos: [
      { label: 'frontend-student', url: 'https://github.com/ignacio-vivar/proposite-project-student-frontend' },
      { label: 'frontend-teacher', url: 'https://github.com/ignacio-vivar/proposite-project-admin-frontend' },
      { label: 'backend', url: 'https://github.com/ignacio-vivar/backend_proposite_project' }
    ],
    stack: ['react', 'tanstack table', 'fastapi', 'manual auth'],
    detail: 'A dual-dashboard prototype built to learn TanStack Table and custom JWT authentication. Provided the foundational code patterns for GimTest.',
    highlights: [
      'Mastering React TanStack Table API for sorting, pagination, and multi-column filtering'
    ],
    challenges: [
      'Optimizing custom React hooks and backend polling requests to minimize performance lag on high-frequency table data updates'
    ],
    summary: `Proposite was a learning prototype built to digitize grading feedback with a dual-interface approach: a desktop view for teachers and a mobile interface for students. 
Although the platform was fully functional, the teacher dashboard suffered from rendering bottlenecks due to unoptimized state updates. 
Following educational policy changes restricting student phone usage in class, I decided to archive the project. The application was monolithic and hardcoded for my specific courses, but it served its purpose as an essential stepping stone to GimTest.`,
    screenshots: [
      'https://drive.google.com/file/d/1BsZ22H-gjimYjxBZg7TwG0p3Cm9M0Ukw/preview',
      'https://drive.google.com/file/d/19elWunU6P_QX2KvptjAltN86RezlovBg/preview',
      'https://drive.google.com/file/d/1RTJaCvfQdVbVg18gPmyt0I_Lm0pQwaWe/preview',
      'https://drive.google.com/file/d/1Hbn2ZLOzhO_OdNBb1C5dPi7VQI0_yBsJ/preview',
      'https://drive.google.com/file/d/16b03ffVcy41viJCbDK6G02ljTBbzgKhi/preview'
    ]
  },
]
