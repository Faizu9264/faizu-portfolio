import type { Metadata } from "next";
import Link from "next/link";
import { profile, socials } from "@/data/content";
import { resume } from "@/data/resume";
import { siteUrl } from "@/data/site";
import "./resume.css";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of Faizu Rahman — ${resume.title}. Experience with Next.js, React Native, Node.js, Supabase, n8n and AI tools.`,
  alternates: { canonical: "/resume" },
};

const links = [
  { label: siteUrl.replace(/^https?:\/\//, ""), href: siteUrl },
  { label: "github.com/Faizu9264", href: socials.github },
  { label: "linkedin.com/in/faizu-rahman", href: socials.linkedin },
  { label: "youtube.com/@CodeCodersYT", href: socials.youtube },
  { label: "instagram.com/faizu.dev", href: socials.instagram },
];

export default function ResumePage() {
  return (
    <div className="cv-wrap">
      <div className="cv-toolbar">
        <Link href="/">← Back to portfolio</Link>
        <a className="cv-dl" href={profile.resume} download>
          Download PDF
        </a>
      </div>

      <article className="cv">
        <header className="cv-head">
          <div>
            <h1>{profile.name}</h1>
            <p className="cv-title">{resume.title}</p>
          </div>
          <div className="cv-contact">
            <span>{resume.location}</span>
            <a href={`tel:${resume.phone.replace(/\s/g, "")}`}>{resume.phone}</a>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </header>
        <nav className="cv-links" aria-label="Profiles">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <section>
          <h2>Summary</h2>
          <p>{resume.summary}</p>
        </section>

        <section>
          <h2>Experience</h2>
          {resume.experience.map((e) => (
            <div className="cv-item" key={e.role + e.period}>
              <div className="cv-row">
                <h3>
                  {e.role} <span>· {e.org}</span>
                </h3>
                <time>{e.period}</time>
              </div>
              <ul>
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h2>Selected Products</h2>
          <div className="cv-projects">
            {resume.projects.map((p) => (
              <div key={p.name}>
                <h3>
                  {p.name} <span>· {p.meta}</span>
                </h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Skills</h2>
          <dl className="cv-skills">
            {resume.skills.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section>
          <h2>Education &amp; Training</h2>
          <div className="cv-row">
            <h3>{resume.education.name}</h3>
            <time>{resume.education.period}</time>
          </div>
          <p>{resume.education.text}</p>
        </section>
      </article>
    </div>
  );
}
