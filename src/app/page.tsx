import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Cover, ProjectCard, ProjectLinks } from "@/components/ProjectCard";
import { ArrowUpRight, Download, Github, Instagram, Linkedin, Mail, Youtube } from "@/components/icons";
import {
  archive,
  channel,
  clientWork,
  experience,
  instagram,
  products,
  profile,
  skills,
  socials,
  stats,
  testimonials,
  type Project,
} from "@/data/content";
import { seo, siteUrl } from "@/data/site";
import { imageSize } from "@/lib/imageSize";

const featured = products.filter((p) => p.featured);
const moreProducts = products.filter((p) => !p.featured);
const marqueeItems = skills.flatMap((s) => s.items);

// Custom visuals for featured products that have no screenshot.
function FeatureVisual({ project }: { project: Project }) {
  // Real screenshots are framed and shown whole rather than cropped by the card.
  if (project.image && !project.image.includes("icon")) {
    return (
      <div className="cover">
        <div className="cover-grid" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="shot" src={project.image} alt={`${project.name} screenshot`} loading="lazy" {...imageSize(project.image)} />
      </div>
    );
  }
  if (project.image) return <Cover project={project} />;
  const pipelines: Record<string, string[][]> = {
    ReelStash: [
      ["Share a reel", "IG · TikTok · YT"],
      ["Download & extract audio", "yt-dlp · ffmpeg"],
      ["Transcribe", "Whisper"],
      ["Tag, title & summarize", "LLM"],
      ["Search or ask your library", "pgvector · RAG"],
    ],
  };
  const steps = pipelines[project.name];
  if (steps) {
    return (
      <div className="cover">
        <div className="cover-grid" />
        <div className="pipeline">
          {steps.map(([label, tool], i) => (
            <div className="pipe-step" key={label}>
              <span className="pipe-num">{i + 1}</span>
              {label}
              <i>{tool}</i>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (project.name === "onboarding-tour-faizu") {
    return (
      <div className="cover">
        <div className="cover-grid" />
        <div className="code-window">
          <div className="code-bar">
            <span />
            <span />
            <span />
          </div>
          <pre>
            <span className="tok-c">$ npm i onboarding-tour-faizu</span>
            {"\n\n"}
            <span className="tok-k">const</span> tour = <span className="tok-k">new</span> Onboarding([{"{"}
            {"\n  "}element: <span className="tok-s">&apos;#new-project&apos;</span>,
            {"\n  "}title: <span className="tok-s">&apos;Start here&apos;</span>,
            {"\n  "}highlightStyle: <span className="tok-s">&apos;pulse&apos;</span>,
            {"\n"}
            {"}"}]);
            {"\n"}tour.start(); <span className="tok-c">{"// 🎉 confetti on finish"}</span>
          </pre>
        </div>
      </div>
    );
  }
  return <Cover project={project} />;
}

// Structured data so search engines understand who this page is about.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: profile.name,
      url: siteUrl,
      image: `${siteUrl}${profile.photo}`,
      jobTitle: "Full-Stack Developer",
      description: seo.description,
      email: `mailto:${profile.email}`,
      address: { "@type": "PostalAddress", addressRegion: "Kerala", addressCountry: "IN" },
      knowsAbout: skills.flatMap((g) => g.items),
      sameAs: [socials.github, socials.linkedin, socials.youtube, socials.instagram, socials.npm, socials.coffee],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Faizu Rahman",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    ...[...products, ...clientWork].slice(0, 12).map((p) => ({
      "@type": "CreativeWork",
      name: p.name,
      description: p.description,
      creator: { "@id": `${siteUrl}/#person` },
      ...(p.live ? { url: p.live } : {}),
      keywords: p.stack.join(", "),
    })),
  ],
};

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Nav />
      <main id="top">
        {/* ---------- Hero ---------- */}
        <section className="hero">
          <div className="container">
            <div className="hero-grid">
              <div>
                <span className="pill reveal">
                  <span className="dot" />
                  {profile.availability}
                </span>
                <h1 className="reveal reveal-2">
                  <span className="hero-name">Hi, I&apos;m Faizu Rahman —</span>
                  I build apps, <span className="hl">AI tools</span> &amp; automations — and teach
                  thousands how.
                </h1>
                <p className="hero-intro reveal reveal-3">{profile.intro}</p>
                <div className="roles">
                  {profile.roles.map((r) => (
                    <span className="role" key={r}>
                      {r}
                    </span>
                  ))}
                </div>
                <div className="hero-ctas">
                  <a className="btn btn-primary" href="#products">
                    See what I&apos;ve built
                  </a>
                  <Link className="btn" href="/resume">
                    <Download /> Resume
                  </Link>
                  <a className="btn" href={socials.github} target="_blank" rel="noopener noreferrer">
                    <Github /> GitHub
                  </a>
                </div>
              </div>
              <div className="portrait reveal reveal-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={profile.photo} alt="Portrait of Faizu Rahman" fetchPriority="high" {...imageSize(profile.photo)} />
                <div className="portrait-tag">
                  <span>
                    <b>{profile.name}</b>
                    Founder of CodeCoders · {profile.location}
                  </span>
                  <span className="portrait-socials">
                    <a className="yt-badge" href={channel.url} target="_blank" rel="noopener noreferrer" aria-label="YouTube @CodeCodersYT">
                      <Youtube />
                    </a>
                    <a className="ig-badge" href={instagram.url} target="_blank" rel="noopener noreferrer" aria-label="Instagram @faizu.dev">
                      <Instagram />
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="stats">
              {stats.map((s) => (
                <div className="stat" key={s.label}>
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="marquee" aria-hidden>
            <div className="marquee-track">
              {[...marqueeItems, ...marqueeItems].map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Products ---------- */}
        <section className="section" id="products">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">01 — Products</span>
                <h2>Tools I designed, built and shipped myself.</h2>
              </div>
              <p className="section-sub">
                Side projects that turned into real products — used by developers, the n8n
                community and my own audience.
              </p>
            </div>

            <div className="featured">
              {featured.map((p) => (
                <article className="feature-card" key={p.name}>
                  <div className="feature-media">
                    <FeatureVisual project={p} />
                  </div>
                  <div className="feature-body">
                    {p.badge && <span className="badge">{p.badge}</span>}
                    <span className="tagline">
                      {p.tagline} · {p.year}
                    </span>
                    <h3>{p.name}</h3>
                    <p>{p.description}</p>
                    {p.highlights && (
                      <ul className="highlights">
                        {p.highlights.map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                    )}
                    <div className="chips">
                      {p.stack.map((s) => (
                        <span className="chip" key={s}>
                          {s}
                        </span>
                      ))}
                    </div>
                    <ProjectLinks project={p} size="btn" />
                  </div>
                </article>
              ))}
            </div>

            <div className="grid grid-2" style={{ marginTop: 18 }}>
              {moreProducts.map((p) => (
                <ProjectCard key={p.name} project={p} />
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Client work ---------- */}
        <section className="section" id="work">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">02 — Client &amp; professional work</span>
                <h2>Production platforms for teams in India, the Gulf &amp; Europe.</h2>
              </div>
              <p className="section-sub">
                Streaming, education, e-commerce and automation — from architecture to app-store
                builds. Live links aren&apos;t shared for client work: many are internal CRM tools,
                still in development or under NDA. I&apos;m happy to walk you through them on a call.
              </p>
            </div>
            <div className="grid grid-2">
              {clientWork.map((p) => (
                <ProjectCard key={p.name} project={p} media={!!p.image} />
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Creator ---------- */}
        <section className="section" id="creator">
          <div className="container">
            <div className="creator">
              <div className="creator-grid">
                <div>
                  <span className="eyebrow">03 — Creator · YouTube &amp; Instagram</span>
                  <h2>I teach what I build — to ~19K people.</h2>
                  <p>
                    <b>CodeCoders on YouTube:</b> {channel.tagline}. <b>@faizu.dev on Instagram:</b>{" "}
                    {instagram.tagline}. Every tutorial comes from real client and product work, and
                    that content now brings in freelance clients on its own.
                  </p>
                  <div className="creator-stats">
                    <div>
                      <b>9.4K+</b>
                      <span>subscribers</span>
                    </div>
                    <div>
                      <b>340+</b>
                      <span>videos</span>
                    </div>
                    <div>
                      <b>{instagram.followers}</b>
                      <span>Instagram followers</span>
                    </div>
                    <div>
                      <b>{instagram.posts}</b>
                      <span>posts</span>
                    </div>
                  </div>
                  <div className="chips" style={{ marginBottom: 28 }}>
                    {channel.topics.map((t) => (
                      <span className="chip" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="hero-ctas" style={{ marginTop: 0 }}>
                    <a className="btn btn-yt" href={`${channel.url}?sub_confirmation=1`} target="_blank" rel="noopener noreferrer">
                      <Youtube /> Subscribe {channel.handle}
                    </a>
                    <a className="btn btn-ig" href={instagram.url} target="_blank" rel="noopener noreferrer">
                      <Instagram /> Follow {instagram.handle}
                    </a>
                    <a className="bmc-button" href={socials.coffee} target="_blank" rel="noopener noreferrer">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/brand/bmc-button.png" alt="Buy me a coffee" width={164} height={46} />
                    </a>
                  </div>
                </div>
                <div className="videos">
                  {channel.videos.map((v) => (
                    <a
                      className="video"
                      key={v.id}
                      href={`https://www.youtube.com/watch?v=${v.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="thumb">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt="" loading="lazy" width={480} height={360} />
                        <div className="play">
                          <span>
                            <Youtube />
                          </span>
                        </div>
                      </div>
                      <div>
                        <h3>{v.title}</h3>
                        <small>Watch on YouTube</small>
                      </div>
                    </a>
                  ))}
                  <div className="recognition">
                    <span className="ico" aria-hidden>
                      🎁
                    </span>
                    <span>
                      <b>Recognized by the n8n team</b> — they sent swag for the tutorials and tools
                      I&apos;ve made for the n8n community.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Experience ---------- */}
        <section className="section" id="experience">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">04 — Experience</span>
                <h2>From self-taught to shipping for clients worldwide.</h2>
              </div>
            </div>
            <div className="timeline">
              {experience.map((e) => (
                <div className="tl-item" key={e.role + e.period}>
                  <div className="tl-period">{e.period}</div>
                  <div>
                    <h3>{e.role}</h3>
                    <div className="tl-org">{e.org}</div>
                    <ul>
                      {e.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Skills ---------- */}
        <section className="section" id="skills">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">05 — Stack</span>
                <h2>What I build with.</h2>
              </div>
            </div>
            <div className="skills">
              {skills.map((g) => (
                <div className="skill-group" key={g.group}>
                  <h3>{g.group}</h3>
                  <ul>
                    {g.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Archive ---------- */}
        <section className="section" id="archive">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">06 — Earlier builds</span>
                <h2>Where it started.</h2>
              </div>
              <p className="section-sub">
                Projects from my MERN bootcamp and self-taught days — plus small client pages.
                Everything is on{" "}
                <a className="text-link" href={socials.github} target="_blank" rel="noopener noreferrer">
                  GitHub <ArrowUpRight />
                </a>
              </p>
            </div>
            <div className="grid">
              {archive.map((p) => (
                <ProjectCard key={p.name} project={p} />
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Testimonials ---------- */}
        <section className="section" id="testimonials">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">07 — Kind words</span>
                <h2>What developers I&apos;ve worked with say.</h2>
              </div>
            </div>
            <div className="quotes">
              {testimonials.map((t) => (
                <figure className="quote" key={t.name}>
                  <blockquote>{t.quote}</blockquote>
                  <figcaption>
                    {t.photo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img className="avatar" src={t.photo} alt={t.name} loading="lazy" width={48} height={48} />
                    ) : (
                      <span className="avatar" aria-hidden>
                        {initials(t.name)}
                      </span>
                    )}
                    <span>
                      <b>{t.name}</b>
                      <span>{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Contact ---------- */}
        <section id="contact">
          <div className="container">
            <div className="contact">
              <h2>Have an idea? Let&apos;s build it.</h2>
              <p>
                Web apps, mobile apps, AI features or n8n automations — or a collab on the channel.
                I usually reply within a day.
              </p>
              <div className="contact-actions">
                <a className="btn" href={`mailto:${profile.email}?subject=Project%20enquiry`}>
                  <Mail /> Email me
                </a>
                <a className="btn btn-ghost" href={socials.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin /> LinkedIn
                </a>
              </div>
              <a className="email-big" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <p className="support-line">
                Using my free tools, like the n8n extension, the online compiler or the tutorials? Support them:
              </p>
              <a className="bmc-button" href={socials.coffee} target="_blank" rel="noopener noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brand/bmc-button.png" alt="Buy me a coffee" width={150} height={42} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>
            © {new Date().getFullYear()} {profile.name} · Built with Next.js
          </span>
          <div className="socials">
            {[
              { href: socials.github, label: "GitHub", icon: <Github /> },
              { href: socials.linkedin, label: "LinkedIn", icon: <Linkedin /> },
              { href: socials.youtube, label: "YouTube", icon: <Youtube /> },
              { href: socials.instagram, label: "Instagram", icon: <Instagram /> },
              {
                href: socials.coffee,
                label: "Buy me a coffee",
                // eslint-disable-next-line @next/next/no-img-element
                icon: <img src="/brand/bmc-logo.svg" alt="" width={12} height={17} />,
              },
            ].map((s) => (
              <a
                key={s.label}
                className="icon-btn"
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
