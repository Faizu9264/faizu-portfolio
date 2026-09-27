// Single source of truth for the portfolio. Edit here — every section reads from this file.

export const profile = {
  name: "Faizu Rahman",
  short: "faizu",
  roles: ["Full-Stack Developer", "AI Tool Builder", "Automation Engineer", "Content Creator"],
  location: "Kerala, India",
  headline: "I build apps, AI tools & automations — and teach thousands of developers how.",
  intro:
    "Full-stack developer (Next.js, React Native, Node.js, Supabase) shipping production platforms for clients in India, the Gulf and Europe. On the side I build my own products — a Chrome extension used by the n8n community, an npm library, and AI-powered mobile apps — and share tech & AI content with ~19K people across YouTube (CodeCoders, 9.4K+) and Instagram (@faizu.dev, 10K+).",
  email: "codecodersyt@gmail.com",
  resume: "/Faizu_Rahman_Resume.pdf",
  photo: "/profile.webp",
  availability: "Open to freelance projects & full-time roles",
};

export const socials = {
  github: "https://github.com/Faizu9264",
  linkedin: "https://linkedin.com/in/faizu-rahman-a496aa256",
  youtube: "https://www.youtube.com/@CodeCodersYT",
  instagram: "https://instagram.com/faizu.dev",
  coffee: "https://buymeacoffee.com/faizurahman",
  npm: "https://www.npmjs.com/package/onboarding-tour-faizu",
};

export const stats = [
  { value: "10K+", label: "Instagram followers" },
  { value: "9.4K+", label: "YouTube subscribers" },
  { value: "10+", label: "Client projects delivered" },
  { value: "10", label: "Products I\u2019ve built" },
];

export type Category = "AI" | "Web" | "Mobile" | "Automation" | "Open Source" | "Client";

export type Project = {
  name: string;
  tagline: string;
  description: string;
  highlights?: string[];
  stack: string[];
  categories: Category[];
  image?: string;
  live?: string;
  liveLabel?: string;
  site?: string;
  code?: string;
  video?: string;
  links?: { label: string; href: string }[];
  /** Shown on client work instead of a live link, explaining why it isn't public. */
  privateNote?: string;
  badge?: string;
  featured?: boolean;
  year: string;
};

// Products I designed, built and shipped myself.
export const products: Project[] = [
  {
    name: "n8n AI Workflow Generator",
    tagline: "Chrome extension · 240+ users",
    description:
      "Search 11,000+ real n8n workflow templates and generate new ones with OpenAI, Claude or Gemini — right inside the n8n editor, then paste to canvas in one click. Works with n8n.cloud and self-hosted instances.",
    highlights: [
      "Recognized by the n8n team — they sent swag for community contributions",
      "Bring-your-own-key AI: no backend, no data collection",
      "Per-origin permissions for any self-hosted n8n",
    ],
    stack: ["Chrome Extension", "TypeScript", "React", "OpenAI", "Claude", "Gemini"],
    categories: ["AI", "Automation", "Open Source"],
    image: "/projects/n8n-extension-v2.webp",
    live: "https://chromewebstore.google.com/detail/mphnijmmbiocdipbpiinjglkppmgjeac?utm_source=item-share-cb",
    liveLabel: "Chrome Web Store",
    site: "https://n8n-extention-website.vercel.app/",
    video: "https://www.youtube.com/watch?v=xnembfc7BZM",
    badge: "V2 live on Chrome Web Store",
    featured: true,
    year: "2025–26",
  },
  {
    name: "Jarvis — AI Command Center",
    tagline: "Electron desktop app · Latest",
    description:
      "A voice-and-vision command center that runs on top of the Claude Code and Codex accounts you already pay for. Say “Jarvis”, speak or show it something, and it plans, codes, researches and controls your Mac, then answers aloud.",
    highlights: [
      "Offline wake word, auto-stop on pause, hands-free follow-ups and ⌥⇧Space from any app",
      "Routes work to Claude or Codex, tracks plan limits and retries on the other engine when one runs out",
      "Studio: a team of AI agents with departments, a task board, hand-offs and scheduled work",
      "Camera, photo & screen questions, memory, routines, voice shortcuts and continue-on-phone",
    ],
    stack: ["Electron", "TypeScript", "Claude Agent SDK", "Codex", "Groq Whisper", "Kokoro TTS", "Transformers.js"],
    categories: ["AI", "Automation"],
    image: "/projects/jarvis.webp",
    badge: "Currently building · v0.4",
    featured: true,
    year: "2026",
  },
  {
    name: "SupaVPS",
    tagline: "Developer tool · Supabase migration",
    description:
      "One-click migration from Supabase Cloud to your own VPS. Roles, schema, data and storage move over in minutes with no terminal commands: paste your access token, connect your server (Hetzner, DigitalOcean and others), and watch the migration run live.",
    highlights: [
      "Read-only on the source: your cloud project is never modified",
      "Data streams straight to your VPS with nothing stored in between; credentials are wiped after use",
      "Automatic cleanup of temp files and SSH keys on stop, failure or finish",
      "Use cases: cutting cloud costs, data sovereignty, warm-standby backups and staging clones",
    ],
    stack: ["React", "TypeScript", "Supabase", "PostgreSQL", "SSH", "Google AI Studio"],
    categories: ["Web"],
    image: "/projects/supavps.webp",
    badge: "In development",
    featured: true,
    year: "2026",
  },
  {
    name: "ReelStash",
    tagline: "AI mobile app · Android",
    description:
      "Share any Instagram, TikTok or YouTube reel into the app and an AI pipeline transcribes, tags and summarizes it — turning a messy saved-videos pile into a searchable library you can chat with.",
    highlights: [
      "yt-dlp → ffmpeg → Whisper → LLM tagging → vector embeddings",
      "\"Ask your library\" RAG chat with cited sources",
      "Semantic + voice search, smart collections, biometric lock",
    ],
    stack: ["React Native", "Expo", "Supabase", "pgvector", "Groq", "Whisper"],
    categories: ["AI", "Mobile"],
    badge: "New",
    featured: true,
    year: "2026",
  },
  {
    name: "onboarding-tour-faizu",
    tagline: "npm package",
    description:
      "A lightweight, customizable library for step-by-step product tours: highlight any UI element, attach media to steps, choose highlight styles and finish with a confetti celebration.",
    stack: ["TypeScript", "npm", "DOM APIs"],
    categories: ["Open Source", "Web"],
    live: "https://www.npmjs.com/package/onboarding-tour-faizu",
    code: "https://github.com/Faizu9264/onboarding-tour-faizu",
    badge: "npm i onboarding-tour-faizu",
    featured: true,
    year: "2025",
  },
  {
    name: "CodeCoders Online Compiler",
    tagline: "Learning platform · Live",
    description:
      "An online compiler for C, C++, Python, JavaScript, PHP, Go, Rust and more, with a web (HTML/CSS/JS) compiler, 100+ pattern programs and 60+ array problems. It adds AI code review and an AI assistant that answers coding questions, and it's built for the beginners who learn from my channel.",
    stack: ["Next.js", "React", "AI APIs", "Multi-language code execution"],
    categories: ["AI", "Web"],
    image: "/projects/codecoders-compiler.webp",
    live: "https://online-compiler-tau.vercel.app/",
    year: "2024–25",
  },
  {
    name: "Valentine Gift Maker",
    tagline: "Viral web app · Affiliate",
    description:
      "Create a personalized Valentine page: set the recipient's name, a message, emojis and a celebration GIF, preview it and share a unique link. It's monetized with a curated list of AI image tools on affiliate links, plus Buy Me a Coffee and YouTube calls to action.",
    stack: ["Next.js", "React", "Vercel", "Shareable links", "Affiliate marketing"],
    categories: ["Web"],
    image: "/projects/valentine.webp",
    live: "https://valentine-s-day-smoky.vercel.app/",
    year: "2026",
  },
  {
    name: "Retro Calc",
    tagline: "Android app",
    description:
      "A vintage-styled calculator app built with Expo and shipped through EAS — zero tracking, zero permissions, no data collected.",
    stack: ["React Native", "Expo", "EAS"],
    categories: ["Mobile"],
    image: "/projects/retrocalc-icon.webp",
    year: "2026",
  },
  {
    name: "Imaginify",
    tagline: "AI image SaaS",
    description:
      "AI image editing SaaS with generative fill, object remove & recolor, image restore and background removal. Credits system with Stripe checkout and GitHub/Google login.",
    stack: ["Next.js", "TypeScript", "Clerk", "Cloudinary AI", "Stripe", "MongoDB"],
    categories: ["AI", "Web"],
    image: "/projects/imaginify.webp",
    code: "https://github.com/Faizu9264/Imaginify",
    year: "2024",
  },
  {
    name: "Emotion Detector",
    tagline: "In-browser computer vision",
    description:
      "Real-time emotion, age and gender detection from the webcam, running entirely in the browser with TensorFlow.js and face-api.",
    stack: ["React", "TensorFlow.js", "face-api.js"],
    categories: ["AI", "Web"],
    image: "/projects/emotiondetector.webp",
    code: "https://github.com/Faizu9264/Emotion-Detector",
    year: "2024",
  },
];

// Client and professional work. Never add client live/site URLs here — clients'
// deployments stay private; only link to your own repos or demos.
export const clientWork: Project[] = [
  {
    name: "IPTV Player Platform",
    privateNote: "In active development — private until the client launches.",
    tagline: "Streaming platform · Ireland · In development",
    description:
      "Multi-tenant IPTV platform with a mobile player, a web player, a reseller admin panel and the backend that ties them together — designed for a distributed subscriber base with tiered reseller access.",
    stack: ["React Native", "Node.js", "TypeScript", "Supabase", "Redis"],
    categories: ["Client", "Mobile", "Web"],
    year: "2025–26",
  },
  {
    name: "Glowell Hub",
    privateNote: "Internal LMS/CRM and student apps — access is restricted to the institution.",
    tagline: "Education platform · UAE · 3 apps",
    description:
      "Three connected apps for an education provider: a student web app, a student mobile app (Flutter, shipped as APK/AAB) and an LMS/CRM admin tool covering admissions, fee collection and invoicing, staff and payroll, documents and reporting. I migrated media from base64 blobs to Supabase Storage and built cascading course filters and partner fee management.",
    stack: ["React", "Vite", "Redux Toolkit", "Supabase", "PostgreSQL", "Tailwind CSS", "Flutter"],
    categories: ["Client", "Web", "Mobile"],
    year: "2025–26",
  },
  {
    name: "WhatsApp CRM",
    privateNote: "Client deployments are private; the code link is my public fork.",
    tagline: "Self-hosted CRM with AI auto-reply",
    description:
      "Deployed and extended the open-source wacrm for small businesses: Docker/Dokploy self-hosting, contact context passed into automation webhooks, and n8n flows for AI auto-replies and lead capture. The build tutorial on CodeCoders brought in client leads.",
    stack: ["Next.js", "n8n", "WhatsApp Business API", "Docker", "Dokploy"],
    code: "https://github.com/Faizu9264/wacrm",
    categories: ["Client", "Automation", "AI"],
    year: "2025",
  },
  {
    name: "Cosmetics E-commerce",
    privateNote: "Built at Axorbit — the client's store isn't shared without permission.",
    tagline: "Axorbit Technologies",
    description:
      "Feature-rich cosmetics store with Sanity CMS, Clerk auth and geolocation-based currency switching; backend services deployed on AWS.",
    stack: ["Next.js", "Sanity", "Clerk", "AWS"],
    categories: ["Client", "Web"],
    year: "2025",
  },
  {
    name: "KARTSEEK Technical Audit",
    privateNote: "Confidential audit — findings and code are under NDA.",
    tagline: "Super-app audit · Qatar / UAE",
    description:
      "Architecture, security and scalability audit across a NestJS backend, Next.js admin and Flutter apps, delivered with a phased remediation roadmap for a takeover decision.",
    stack: ["NestJS", "Next.js", "Flutter", "PostgreSQL", "Docker"],
    categories: ["Client"],
    year: "2025",
  },
  {
    name: "Shopify Apps",
    privateNote: "Built at Final Apps — app and code links are withheld.",
    tagline: "Final Apps",
    description:
      "Contributed to 2 Shopify apps (dual pricing and invoicing) shipped on the Shopify App Store, migrated major features from React to Remix, and built Polaris + GraphQL components. My product-listing machine task is what got me hired.",
    stack: ["React", "Remix", "GraphQL", "Shopify Polaris"],
    categories: ["Client", "Web"],
    image: "/projects/shopifyProductListing.webp",
    year: "2024",
  },
  {
    name: "German Learning Platform",
    privateNote: "Client platform with admin login — not publicly shared.",
    tagline: "Freelance",
    description:
      "Language-learning web app with admin authentication, content dashboard and dynamic image uploads.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Cloudinary", "DaisyUI"],
    categories: ["Client", "Web"],
    year: "2024",
  },
  {
    name: "Business Stanely & Legal Stanely",
    privateNote: "Internal task-management and CRM tools — login-only, not public.",
    tagline: "Task management & CRM · Freelance",
    description:
      "Task management and CRM platforms for advocates and business teams. I led the frontend–backend integration, connecting case and task workflows, client records and dashboards to the API.",
    stack: ["Next.js", "Node.js", "TypeScript"],
    categories: ["Client", "Web"],
    year: "2025",
  },
  {
    name: "Concept Map MVP",
    privateNote: "Client MVP — not shared publicly without the client's permission.",
    tagline: "Creative marketplace · Freelance",
    description:
      "A marketplace to buy, sell and discover scripts, storyboards and synopses, which I co-built with the client's developers. Buyers browse, pay securely, download instantly and get personalized recommendations. Sellers showcase their work, set their own pricing and licensing, and track sales analytics.",
    stack: ["Next.js", "TypeScript"],
    categories: ["Client", "Web"],
    image: "/projects/concept-map.webp",
    year: "2025",
  },
];

// Earlier builds and learning projects.
export const archive: Project[] = [
  {
    name: "StayCation",
    tagline: "Hotel booking platform",
    description:
      "Clean-architecture MERN booking app with Google One-Tap login, Mapbox search, Stripe payments and an admin dashboard.",
    stack: ["React", "Redux", "Node.js", "MongoDB", "Stripe", "Mapbox"],
    categories: ["Web"],
    image: "/projects/staycation.webp",
    code: "https://github.com/Faizu9264/Hotel_Booking_Client",
    year: "2024",
  },
  {
    name: "H&F Hub",
    tagline: "E-commerce store",
    description:
      "MVC e-commerce site with OTP via NodeMailer, Razorpay payments and a full admin dashboard. Previously hosted on AWS EC2.",
    stack: ["Node.js", "Express", "MongoDB", "EJS", "Razorpay"],
    categories: ["Web"],
    image: "/projects/hf-hub.webp",
    code: "https://github.com/Faizu9264/H-FHub",
    year: "2023",
  },
  {
    name: "Field Basket",
    tagline: "Grocery storefront",
    description: "A fresh fruit & vegetable store with category filters, pagination, cart and buy-now flow.",
    stack: ["TypeScript", "Next.js"],
    categories: ["Web"],
    live: "https://field-basket.vercel.app",
    code: "https://github.com/Faizu9264/Field-Basket",
    year: "2025",
  },
  {
    name: "Petvizo Link Tree",
    privateNote: "Client brand page — link not shared.",
    tagline: "Brand link page",
    description: "A custom link-in-bio page for a pet brand.",
    stack: ["HTML", "CSS"],
    categories: ["Web", "Client"],
    year: "2025",
  },
  {
    name: "Currency Converter",
    tagline: "Angular app",
    description:
      "Converts between 24 currencies using live exchange rates, with a one-tap swap, validated reactive forms and a loading state. It's built with Angular 19, Angular Material and server-side rendering.",
    stack: ["Angular 19", "Angular Material", "RxJS", "SSR", "REST API"],
    categories: ["Web"],
    code: "https://github.com/Faizu9264/currency-converter",
    year: "2025",
  },
  {
    name: "Invoice Dashboard",
    tagline: "UI build",
    description: "Animated invoice dashboard layout using Flexbox and Grid.",
    stack: ["HTML", "CSS"],
    categories: ["Web"],
    image: "/projects/invoiceDashboard.webp",
    code: "https://github.com/Faizu9264/Invoice-Dashboard",
    year: "2024",
  },
  {
    name: "Goat Game",
    tagline: "Browser game",
    description: "A small browser game with scoring, animations and simple controls.",
    stack: ["JavaScript", "HTML", "CSS"],
    categories: ["Web"],
    image: "/projects/goatGame.webp",
    code: "https://github.com/Faizu9264/Goat-Game",
    year: "2024",
  },
  {
    name: "React To-Do List",
    tagline: "React app",
    description: "To-do app with drag-and-drop and persistent storage.",
    stack: ["React", "localStorage"],
    categories: ["Web"],
    image: "/projects/todolist.webp",
    code: "https://github.com/Faizu9264/React-ToDo_LIst",
    year: "2023",
  },
  {
    name: "Portfolio Evolution",
    tagline: "5 portfolios · 2022–2025",
    description:
      "My portfolio, rebuilt as my skills grew: a first HTML/CSS site (2022), a responsive HTML portfolio (2023), a 3D React + Three.js portfolio (2024), a React + Chakra UI version (2025) and a template-recreation practice build. This site is the sixth.",
    stack: ["HTML", "CSS", "React", "Three.js", "React Three Fiber", "Framer Motion", "Chakra UI"],
    categories: ["Web"],
    image: "/projects/portfolios.webp",
    links: [
      { label: "2022", href: "https://faizu9264.github.io/Faizu-Rahman-Personal-website/" },
      { label: "2023", href: "https://faizu9264.github.io/Portfolio/" },
      { label: "2024 · 3D", href: "https://faizurahman.vercel.app/" },
      { label: "2025", href: "https://faizu.vercel.app/" },
      { label: "Template practice", href: "https://faizu9264.github.io/demo-portfolio/" },
    ],
    year: "2022–25",
  },
  {
    name: "Shopping Cart",
    tagline: "My first full-stack app",
    description:
      "A small e-commerce store, my first project with a backend: product listing, cart, sessions and PayPal checkout, server-rendered with Handlebars.",
    stack: ["Node.js", "Express", "Handlebars", "MongoDB", "PayPal"],
    categories: ["Web"],
    code: "https://github.com/Faizu9264/Shopping-Cart",
    year: "2022–23",
  },
  {
    name: "Mini Cooper Clone",
    tagline: "Early landing-page clone",
    description: "A recreation of the MINI Countryman landing page with a full-bleed hero, navigation and call-to-action buttons, built while learning layout and responsive design.",
    stack: ["HTML", "CSS"],
    categories: ["Web"],
    image: "/projects/mini-cooper.webp",
    live: "https://faizu9264.github.io/Mini-Cooper-clone/",
    code: "https://github.com/Faizu9264/Mini-Cooper-clone",
    year: "2023",
  },
  {
    name: "Vans Clone",
    tagline: "Early e-commerce UI clone",
    description: "A recreation of the Vans storefront homepage with a promo banner, multi-level navigation and product grid, built to practise CSS layouts.",
    stack: ["HTML", "CSS"],
    categories: ["Web"],
    image: "/projects/vans.webp",
    live: "https://faizu9264.github.io/Vans-clone/",
    code: "https://github.com/Faizu9264/Vans-clone",
    year: "2023",
  },
  {
    name: "Netflix & OLX Clones",
    tagline: "Learning builds",
    description: "Early React clones of Netflix and OLX, built while learning components, state and routing.",
    stack: ["React", "JavaScript"],
    categories: ["Web"],
    code: "https://github.com/Faizu9264/React_Netflix_clone",
    year: "2023",
  },
];

export const experience = [
  {
    role: "Freelance Full-Stack Developer",
    org: "Self-employed · Clients in India, Qatar, UAE & Ireland",
    period: "Aug 2024 — Present",
    points: [
      "Building an IPTV player platform (mobile, web, reseller admin, backend) and shipped Glowell Hub, a student web app, mobile app and LMS/CRM admin tool.",
      "Led integration for the Business Stanely & Legal Stanely task/CRM platforms and co-built a Concept Map MVP.",
      "Built WhatsApp automation and CRM systems on n8n; ran a technical audit for a multi-vertical super-app.",
      "Launched my own products: the n8n AI Workflow Generator extension, ReelStash, an npm tour library and Jarvis, a voice AI command center for Claude Code and Codex.",
    ],
  },
  {
    role: "Full-Stack Developer",
    org: "Axorbit Technologies Pvt Ltd",
    period: "Jan 2025 — Jul 2025",
    points: [
      "Built a cosmetics e-commerce platform with Sanity CMS, Clerk auth and geolocation-based currency switching.",
      "Deployed backend services on AWS with modular, production-ready patterns.",
    ],
  },
  {
    role: "Founder & Creator",
    org: "CodeCoders · YouTube",
    period: "Mar 2024 — Present",
    points: [
      "340+ videos in Malayalam on AI tools, n8n automation, Next.js, React Native and the MERN stack.",
      "Grew to 9.4K+ subscribers; tutorials now bring in freelance clients directly.",
    ],
  },
  {
    role: "Junior Developer",
    org: "Final Apps",
    period: "Feb 2024 — Aug 2024",
    points: [
      "Contributed to 2 Shopify App Store apps (dual pricing, invoicing) and migrated major features from React to Remix.",
      "Built custom Polaris + GraphQL components, working closely with the CTO.",
    ],
  },
  {
    role: "Full-Stack Developer Trainee",
    org: "Brototype",
    period: "Mar 2023 — Feb 2024",
    points: [
      "During training: built 2 major MERN projects (e-commerce, hotel booking) and 10+ minor ones; deployed on AWS EC2, Vercel and Render.",
      "Awarded “Best Communication Coordinator”.",
    ],
  },
  {
    role: "Self-taught",
    org: "YouTube & documentation",
    period: "Sep 2022 — Mar 2023",
    points: ["Learned to code on my own; first shipped project was a Node.js shopping cart with PayPal."],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Frontend", items: ["React", "Next.js", "Angular", "TypeScript", "Redux", "Remix", "Tailwind CSS", "Shopify Polaris"] },
  { group: "Mobile & Desktop", items: ["React Native", "Expo", "Electron", "EAS Build", "Flutter builds (APK/AAB)"] },
  { group: "Backend & Data", items: ["Node.js", "Express", "NestJS", "Supabase", "PostgreSQL", "MongoDB", "Redis", "pgvector"] },
  { group: "AI & Automation", items: ["Claude Agent SDK", "n8n", "OpenAI / Claude / Gemini APIs", "RAG", "Whisper", "TensorFlow.js", "WhatsApp Business API"] },
  { group: "Cloud & Tools", items: ["AWS (EC2, Amplify, Lambda)", "Nginx", "GraphQL", "Vercel", "Render", "Cloudinary", "Stripe", "Razorpay", "Git"] },
];

export const instagram = {
  handle: "@faizu.dev",
  url: "https://instagram.com/faizu.dev",
  tagline: "Your Chief AI Officer — tech & AI for people who refuse to stay average",
  followers: "10K+",
  posts: "240+",
};

export const channel = {
  name: "CodeCoders",
  handle: "@CodeCodersYT",
  url: "https://www.youtube.com/@CodeCodersYT",
  tagline: "AI tools, coding & digital business — in Malayalam",
  topics: ["AI tools & agents", "n8n automation", "Next.js & React Native", "MERN stack", "Vibe coding", "Career advice"],
  videos: [
    { id: "xnembfc7BZM", title: "11,000+ n8n Templates FREE! Install This Chrome Extension" },
    { id: "67OIse6Ebto", title: "How to Create an Apple Developer Account (Full 2026 Tutorial)" },
  ],
};

// Add a photo by dropping it in public/testimonials/ and setting `photo: "/testimonials/<file>"`.
export const testimonials: { quote: string; name: string; role: string; photo?: string }[] = [
  {
    quote:
      "Faizu Rahman is an outstanding full-stack developer who inspired and guided me when I needed it most. His support laid the foundation for my journey as a full-stack developer.",
    name: "Sachin Kizhakkepurath",
    role: "Full-Stack Developer, Aquacodes Technologies",
    photo: "/testimonials/sachin.webp",
  },
  {
    quote:
      "An incredibly talented web developer with a passion for creating clean, responsive, and user-friendly websites. His work speaks for itself!",
    name: "Mashhoor Khan",
    role: "Software Engineer, Naav Innovations",
    photo: "/testimonials/mashhoor.webp",
  },
  {
    quote:
      "I thought the transition from Zero to Hero requires a lot of effort. But Faizu indirectly said, “When you embrace the challenges, efforts are no more efforts.”",
    name: "Fasil Valiyattil",
    role: "Web Developer, Aquacodes Technologies",
    photo: "/testimonials/fasil.webp",
  },
  {
    quote:
      "A great developer with a creative mindset, which helps him deliver user-friendly websites for clients.",
    name: "Ranjith P",
    role: "Software Engineer, Neuro Spark Works Solution",
    photo: "/testimonials/ranjith.webp",
  },
];
