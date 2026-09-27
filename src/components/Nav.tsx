"use client";

import { useState } from "react";
import { Close, Menu, Moon, Sun } from "./icons";

const links = [
  { label: "Products", href: "#products" },
  { label: "Client work", href: "#work" },
  { label: "Content", href: "#creator" },
  { label: "Experience", href: "#experience" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "#contact" },
];

function currentTheme(): "light" | "dark" {
  const set = document.documentElement.dataset.theme;
  if (set === "light" || set === "dark") return set;
  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function Nav() {
  const [open, setOpen] = useState(false);

  function toggleTheme() {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="logo" aria-label="Faizu Rahman — home">
          faizu<span>.</span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle color theme">
            {/* Both icons render; CSS shows the right one so there is no hydration flicker. */}
            <Sun className="when-dark" />
            <Moon className="when-light" />
          </button>
          <a className="btn btn-primary btn-sm" href="#contact">
            Hire me
          </a>
          <button
            className="icon-btn menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="mobile-menu" aria-label="Mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
