# faizu-portfolio

Personal portfolio for Faizu Rahman: developer, AI tool builder and creator of CodeCoders. It's built with Next.js 16 and plain CSS, and it exports as a fully static site.

## Edit content

Most content lives in **`src/data/content.ts`**: profile, stats, products, client work, earlier builds, experience, skills, YouTube videos and testimonials. The hero headline and section headings are written directly in `src/app/page.tsx`.

- Add a project: append an object to `products`, `clientWork` or `archive`. Set `featured: true` to promote a product to a large card.
- Screenshots go in `public/projects/` as WebP (max 1280px wide), referenced as `image: "/projects/<file>"`. Width/height are read automatically. Projects without an image get a generated cover.
- Client work: never add live/site URLs; use `privateNote` to explain why there's no link.
- Update the channel stats in `stats` and in the creator section of `page.tsx`.
- Resume content lives in `src/data/resume.ts` and renders at `/resume`. After editing, run `npm run resume:pdf` (with `npm run dev` running on port 3100) to regenerate `public/Faizu_Rahman_Resume.pdf`.

## Run

```bash
npm install
npm run dev
```

## Deploy

Push to GitHub and import the repo on Vercel. Set `NEXT_PUBLIC_SITE_URL` to the final domain (used for canonical URLs, sitemap and social previews).
