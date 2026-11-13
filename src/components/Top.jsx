import { useEffect, useState } from "react";
import { profile, metrics } from "../data/content";
import { Reveal, useCountUp } from "./Motion";

const links = [
  ["Work", "#work"],
  ["Projects", "#projects"],
  ["Stack", "#stack"],
  ["Credentials", "#credentials"],
];

export function Nav() {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${stuck ? "stuck" : ""}`}>
      <div className="nav-inner">
        <a className="nav-brand" href="#top">
          hannan<em>.haris</em>
        </a>
        <nav className="nav-links">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="#contact">
          Get in touch
        </a>
      </div>
    </header>
  );
}

const manifest = [
  ['c', "# infrastructure engineer, defined as code"],
  ['k', 'resource "cloud_engineer" "hannan_haris" {'],
  ['p', '  experience   = "2.5 years, production"'],
  ['p', '  certified    = "AWS Solutions Architect"'],
  ['p', '  clouds       = ["AWS", "Azure", "GCP"]'],
  ['p', '  builds_with  = ["Terraform", "Kubernetes",'],
  ['p', '                  "Docker", "n8n", "Milvus"]'],
  ['p', '  writes       = ["Python", "Bash", "HCL"]'],
  ['p', '  status       = "open to new work"'],
  ['k', "}"],
];

function ManifestLine({ kind, text }) {
  if (kind === "c") return <span className="c">{text}</span>;
  if (kind === "k") return <span className="k">{text}</span>;
  const eq = text.indexOf("=");
  if (eq === -1) return <span className="s">{text}</span>;
  return (
    <>
      <span className="k">{text.slice(0, eq)}</span>
      {"= "}
      <span className="s">{text.slice(eq + 2)}</span>
    </>
  );
}

export function Hero() {
  return (
    <section className="wrap hero" id="top">
      <div className="hero-top">
        <Reveal>
          <div className="status">
            <i className="pulse" />
            {profile.availability}
          </div>
          <h1>
            {profile.name.split(" ").slice(0, 2).join(" ")}
            <br />
            <span className="grad-text">{profile.name.split(" ").slice(2).join(" ")}</span>
          </h1>
          <p className="hero-role">
            <b>{profile.role}</b> / {profile.tagline}
          </p>
          <p className="hero-intro">{profile.intro}</p>
          <div className="btn-row">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              Email me
            </a>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className="btn btn-ghost" href={profile.resumeFile}>
              Download CV
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="term" aria-label="Profile summary written as a Terraform resource block">
            <div className="term-bar">
              <i className="term-dot" />
              <i className="term-dot" />
              <i className="term-dot" />
              <span className="term-file">whoami.tf</span>
            </div>
            <pre className="term-body">
              <code>
                {manifest.map(([kind, text], i) => (
                  <div key={i}>
                    <ManifestLine kind={kind} text={text} />
                    {i === manifest.length - 1 && <i className="caret" />}
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </Reveal>
      </div>

      <div className="metric-grid">
        {metrics.map((m, i) => (
          <Reveal key={m.label} delay={i * 90}>
            <Metric {...m} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Metric({ value, prefix = "", suffix = "", label, note, decimals = 0 }) {
  const [ref, shown] = useCountUp(value, decimals);
  return (
    <div className="metric" ref={ref}>
      <div className="metric-value grad-text">
        {prefix}
        {shown}
        {suffix}
      </div>
      <div className="metric-label">{label}</div>
      <div className="metric-note">{note}</div>
    </div>
  );
}
