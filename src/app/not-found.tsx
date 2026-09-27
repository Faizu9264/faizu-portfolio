import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <main id="top" className="container not-found">
      <span className="eyebrow">404</span>
      <h1>This page doesn&apos;t exist.</h1>
      <p>It may have moved, or the link might be old.</p>
      <div className="hero-ctas">
        <Link className="btn btn-primary" href="/">
          Back to the portfolio
        </Link>
        <Link className="btn" href="/#products">
          See what I&apos;ve built
        </Link>
      </div>
    </main>
  );
}
