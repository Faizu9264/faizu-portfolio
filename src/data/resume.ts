// Resume content: rendered at /resume and exported to public/Faizu_Rahman_Resume.pdf
// (regenerate the PDF with `npm run resume:pdf` while the dev server is running).

export const resume = {
  title: "Full-Stack Developer · AI & Automation · Content Creator",
  location: "Palakkad, Kerala, India",
  phone: "+91 6282821603",
  summary:
    "Full-stack developer with 2.5+ years of professional experience shipping web apps, mobile apps, AI tools and automations with Next.js, React Native, Node.js and Supabase — for clients in India, Qatar, UAE and Ireland. Since 2024 I've delivered 10+ client projects and built 10 products of my own — from a Chrome extension and an npm package to desktop and mobile AI apps. I teach what I build to ~19K followers on YouTube (CodeCoders) and Instagram (@faizu.dev).",
  experience: [
    {
      role: "Freelance Full-Stack Developer",
      org: "Self-employed · Remote",
      period: "Aug 2024 – Present",
      points: [
        "Building a multi-tenant IPTV player platform for an Ireland-based client: React Native mobile player, web player, reseller admin panel and Node.js backend.",
        "Glowell Hub (UAE education platform): built across 3 apps (student web app, Flutter mobile app, LMS/CRM admin); migrated media to Supabase Storage, built partner fee management and shipped APK/AAB builds.",
        "Business Stanely & Legal Stanely: led frontend–backend integration of task management and CRM platforms for advocates and business teams; co-built a Concept Map MVP for another client.",
        "Deployed and extended a self-hosted WhatsApp CRM with Docker/Dokploy and n8n-powered AI auto-replies; ran a technical audit of a NestJS/Next.js/Flutter super-app for a Gulf client.",
      ],
    },
    {
      role: "Full-Stack Developer",
      org: "Axorbit Technologies Pvt Ltd",
      period: "Jan 2025 – Jul 2025",
      points: [
        "Architected a cosmetics e-commerce platform with Sanity CMS, Clerk authentication and geolocation-based currency switching.",
        "Deployed backend services on AWS following modular, production-ready patterns.",
      ],
    },
    {
      role: "Junior Developer",
      org: "Final Apps",
      period: "Feb 2024 – Aug 2024",
      points: [
        "Contributed to 2 Shopify App Store apps (dual pricing, invoicing); migrated major features from React to Remix.",
        "Built custom components with Shopify Polaris and GraphQL, working directly with the CTO.",
      ],
    },
    {
      role: "Founder & Creator",
      org: "CodeCoders (YouTube) · @faizu.dev (Instagram)",
      period: "Mar 2024 – Present",
      points: [
        "340+ Malayalam tutorials on AI tools, n8n automation, Next.js, React Native and MERN; 9.4K+ YouTube subscribers and 10K+ Instagram followers.",
        "Tutorials generate inbound freelance clients; recognized by the n8n team for community contributions.",
      ],
    },
  ],
  projects: [
    {
      name: "n8n AI Workflow Generator",
      meta: "Chrome extension · 240+ users",
      text: "Search 11,000+ n8n templates and generate workflows with OpenAI, Claude or Gemini inside the n8n editor; works with self-hosted instances.",
    },
    {
      name: "Jarvis — AI Command Center",
      meta: "Electron · TypeScript · Claude Agent SDK",
      text: "Voice-and-vision desktop assistant over Claude Code and Codex: offline wake word, plan-limit routing, AI agent studio, memory, routines and camera/screen questions.",
    },
    {
      name: "ReelStash",
      meta: "React Native · Supabase · pgvector",
      text: "AI app that transcribes, tags and summarizes shared reels, with semantic search and a RAG “ask your library” chat.",
    },
    {
      name: "onboarding-tour-faizu",
      meta: "npm package · TypeScript",
      text: "Lightweight product-tour library with element highlighting, media steps and a confetti finish.",
    },
  ],
  skills: [
    ["Languages", "JavaScript, TypeScript, HTML, CSS"],
    ["Frontend & Mobile", "React, Next.js, Angular, Remix, Redux, React Native, Expo, Electron, Tailwind CSS, Shopify Polaris"],
    ["Backend & Data", "Node.js, Express, NestJS, Supabase, PostgreSQL, MongoDB, Redis, pgvector, GraphQL"],
    ["AI & Automation", "Claude Agent SDK, n8n, OpenAI / Claude / Gemini APIs, RAG, Whisper, Kokoro TTS, WhatsApp Business API"],
    ["Cloud & DevOps", "AWS (EC2, Amplify, Lambda), Vercel, Render, Docker, Dokploy, Nginx"],
  ],
  education: {
    name: "Full-Stack Development Program — Brototype",
    period: "Mar 2023 – Feb 2024",
    text: "MERN training — 2 major and 10+ minor projects during the program; awarded “Best Communication Coordinator”.",
  },
};
