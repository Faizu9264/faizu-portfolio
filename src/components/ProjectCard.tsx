import type { Project } from "@/data/content";
import { imageSize } from "@/lib/imageSize";
import { ArrowUpRight, Github, Lock, Youtube } from "./icons";

export function Cover({ project }: { project: Project }) {
  if (project.image?.includes("icon")) {
    return (
      <div className="cover">
        <div className="cover-grid" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="cover-icon" src={project.image} alt={`${project.name} app icon`} loading="lazy" {...imageSize(project.image)} />
      </div>
    );
  }
  if (project.image) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={project.image} alt={`${project.name} screenshot`} loading="lazy" {...imageSize(project.image)} />;
  }
  return (
    <div className="cover">
      <div className="cover-grid" />
      <div className="cover-word">{project.name}</div>
    </div>
  );
}

export function ProjectLinks({ project, size = "text" }: { project: Project; size?: "text" | "btn" }) {
  const items = [
    project.live && { href: project.live, label: project.liveLabel ?? "Live", icon: <ArrowUpRight /> },
    project.site && { href: project.site, label: "Website", icon: <ArrowUpRight /> },
    project.code && { href: project.code, label: "Code", icon: <Github /> },
    project.video && { href: project.video, label: "Watch demo", icon: <Youtube /> },
    ...(project.links ?? []).map((l) => ({ ...l, icon: <ArrowUpRight /> })),
  ].filter(Boolean) as { href: string; label: string; icon: React.ReactNode }[];
  if (!items.length) return null;
  return (
    <div className="links">
      {items.map((i) => (
        <a
          key={i.label}
          href={i.href}
          target="_blank"
          rel="noopener noreferrer"
          className={size === "btn" ? "btn btn-sm" : "text-link"}
        >
          {i.icon}
          {i.label}
        </a>
      ))}
    </div>
  );
}

export function ProjectCard({ project, media = true }: { project: Project; media?: boolean }) {
  return (
    <article className="card">
      {media && (
        <div className="card-media">
          <Cover project={project} />
        </div>
      )}
      <div className="card-body">
        <div className="card-top">
          <span className="tagline">{project.tagline}</span>
          <span className="year">{project.year}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="chips">
          {project.stack.map((s) => (
            <span className="chip" key={s}>
              {s}
            </span>
          ))}
        </div>
        {project.privateNote && (
          <p className="private-note">
            <Lock />
            {project.privateNote}
          </p>
        )}
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}
