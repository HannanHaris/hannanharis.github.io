import { useMemo, useState } from "react";
import {
  profile,
  experience,
  projects,
  skills,
  certifications,
  education,
  speaking,
} from "../data/content";
import { Reveal } from "./Motion";

function Head({ eyebrow, title, blurb }) {
  return (
    <Reveal className="section-head">
      <span className="mono">{eyebrow}</span>
      <h2>{title}</h2>
      {blurb && <p>{blurb}</p>}
    </Reveal>
  );
}

export function Experience() {
  return (
    <section className="section wrap" id="work">
      <Head
        eyebrow="Where I have worked"
        title="Experience"
        blurb="Two and a half years of running production infrastructure, plus the automation layer built on top of it."
      />
      <div className="timeline">
        {experience.map((job, i) => (
          <Reveal key={job.role + job.period} delay={i * 80}>
            <Job job={job} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Job({ job }) {
  const [open, setOpen] = useState(false);
  const visible = open ? job.points : job.points.slice(0, 4);
  const hasMore = job.points.length > 4;

  return (
    <article className={`job ${job.current ? "now" : ""}`}>
      <div className="job-period">
        {job.period}
        {job.duration && <span className="job-duration">{job.duration}</span>}
      </div>
      <h3>{job.role}</h3>
      <div className="job-company">
        {job.company} / {job.place}
      </div>
      <ul className="job-points">
        {visible.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      {hasMore && (
        <button className="job-toggle" onClick={() => setOpen(!open)}>
          {open ? "Show less" : `Show ${job.points.length - 4} more`}
        </button>
      )}
    </article>
  );
}

export function Projects() {
  const tags = useMemo(() => ["All", ...new Set(projects.map((p) => p.tag))], []);
  const [tag, setTag] = useState("All");
  const shown = tag === "All" ? projects : projects.filter((p) => p.tag === tag);

  const track = (e) => {
    const box = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - box.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - box.top}px`);
  };

  return (
    <section className="section wrap" id="projects">
      <Head
        eyebrow="Things I have built"
        title="Selected projects"
        blurb="Systems that went into production and stayed there. Every one is running for a real team."
      />

      <Reveal>
        <div className="filters">
          {tags.map((t) => (
            <button
              key={t}
              className={`filter ${tag === t ? "on" : ""}`}
              onClick={() => setTag(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="proj-grid">
        {shown.map((p, i) => (
          <Reveal key={p.name} delay={i * 70} className={p.featured ? "span-all" : ""}>
            {p.featured ? (
              <FeaturedProject p={p} track={track} />
            ) : (
              <article className="proj" onMouseMove={track}>
                <div className="proj-kicker">{p.kicker}</div>
                <h3>{p.name}</h3>
                <p>{p.summary}</p>
                <p className="detail">{p.detail}</p>
                <div className="chips">
                  {p.stack.map((s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FeaturedProject({ p, track }) {
  return (
    <article className="proj proj-featured" onMouseMove={track}>
      <div className="proj-kicker">{p.kicker}</div>
      <h3>{p.name}</h3>
      <p className="feat-summary">{p.summary}</p>
      <p className="detail">{p.detail}</p>

      <div className="stage-grid">
        {p.stages.map((stage) => (
          <div className="stage" key={stage.title}>
            <div className="stage-head">
              <h4>{stage.title}</h4>
              <span className="mono">{stage.meta}</span>
            </div>
            <ol>
              {stage.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      <div className="feat-foot">
        <div className="chips">
          {p.stack.map((s) => (
            <span className="chip" key={s}>
              {s}
            </span>
          ))}
        </div>
        {p.link && (
          <a className="btn btn-ghost" href={p.link.href} target="_blank" rel="noopener noreferrer">
            {p.link.label}
          </a>
        )}
      </div>
    </article>
  );
}

export function Skills() {
  return (
    <section className="section wrap" id="stack">
      <Head eyebrow="What I work with" title="Stack" />
      <div>
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={i * 60}>
            <div className="skill-row">
              <h3>{s.group}</h3>
              <div className="chips">
                {s.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Credentials() {
  return (
    <section className="section wrap" id="credentials">
      <Head eyebrow="Proof on paper" title="Credentials" />
      <div className="cred-grid">
        <Reveal>
          <div className="cred-card">
            <h3>Certifications</h3>
            <ul>
              {certifications.map((c, i) => (
                <li key={c} className={i < 2 ? "lead" : ""}>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={110}>
          <div className="cred-card">
            <h3>Education</h3>
            <p className="degree">{education.degree}</p>
            <p className="degree-meta">{education.school}</p>
            <p className="degree-year mono">{education.year}</p>
            <h3 style={{ marginTop: 30 }}>Languages</h3>
            <p className="degree-meta">{education.languages}</p>
          </div>
        </Reveal>
      </div>

      {speaking.map((t) => (
        <Reveal key={t.title} delay={160}>
          <div className="cred-card talk">
            <h3>Speaking</h3>
            <div className="talk-main">
              <div>
                <p className="degree">{t.title}</p>
                <p className="degree-meta">
                  {t.role} / {t.event}, {t.place}
                </p>
                <p className="talk-summary">{t.summary}</p>
              </div>
              <p className="degree-year mono">{t.date}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}

export function Contact() {
  return (
    <section className="contact wrap" id="contact">
      <Reveal>
        <div className="contact-card">
          <span className="mono">Next step</span>
          <h2>
            Let us build something <span className="grad-text">that stays up.</span>
          </h2>
          <p>
            Open to cloud engineering, DevOps and AI automation roles. Email is the
            fastest way to reach me, and I usually reply the same day.
          </p>
          <div className="contact-list">
            <a href={`mailto:${profile.email}`}>
              <span className="label">Email</span>
              {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
              <span className="label">Phone</span>
              {profile.phone}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <span className="label">LinkedIn</span>
              {profile.linkedinLabel}
            </a>
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                <span className="label">GitHub</span>
                {profile.github.replace("https://", "")}
              </a>
            )}
            <span className="row">
              <span className="label">Based in</span>
              {profile.location}
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <div className="wrap">
      <footer>
        <p>
          {profile.name} / {profile.role}
        </p>
        <p>Built with React and Vite</p>
      </footer>
    </div>
  );
}
