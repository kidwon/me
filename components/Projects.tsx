"use client";

import { useI18n } from "@/lib/i18n";

interface Project {
  name: string;
  url: string;
  icon: string;
  subtitleKey: string;
  descKey: string;
  highlightKeys: string[];
  tech: string[];
}

const PROJECTS: Project[] = [
  {
    name: "PeraPera",
    url: "https://perapera.me",
    icon: "/assets/perapera.png",
    subtitleKey: "proj.pera.subtitle",
    descKey: "proj.pera.desc",
    highlightKeys: ["proj.pera.h1", "proj.pera.h2", "proj.pera.h3", "proj.pera.h4"],
    tech: ["Next.js", "Convex", "FastAPI", "Meilisearch", "Stripe", "Azure"],
  },
  {
    name: "PeraTube",
    url: "https://peratube.com",
    icon: "/assets/peratube.png",
    subtitleKey: "proj.tube.subtitle",
    descKey: "proj.tube.desc",
    highlightKeys: ["proj.tube.h1", "proj.tube.h2", "proj.tube.h3", "proj.tube.h4"],
    tech: ["FastAPI", "Next.js", "Convex", "Meilisearch", "Stripe", "Railway"],
  },
  {
    name: "Jessie Signal",
    url: "https://jessiesignal.com",
    icon: "/assets/jessiesignal.svg",
    subtitleKey: "proj.jessie.subtitle",
    descKey: "proj.jessie.desc",
    highlightKeys: [
      "proj.jessie.h1",
      "proj.jessie.h2",
      "proj.jessie.h3",
      "proj.jessie.h4",
    ],
    tech: ["React", "Convex", "Clerk", "Resend", "Railway"],
  },
];

export default function Projects() {
  const { t } = useI18n();

  return (
    <section id="projects" className="section section-alt" aria-labelledby="proj-heading">
      <div className="container">
        <div className="section-label">{t("proj.label")}</div>
        <h2 id="proj-heading" className="section-title">
          {t("proj.title")}
        </h2>
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <article className="project-card reveal" aria-label={p.name} key={p.name}>
              <div className="project-header">
                <div className="project-icon" aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${p.icon}`}
                    alt=""
                    width={46}
                    height={46}
                    loading="lazy"
                  />
                </div>
                <div className="project-links">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`Visit ${p.name}`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    <span>{t("proj.live")}</span>
                  </a>
                </div>
              </div>
              <h3 className="project-title">{p.name}</h3>
              <p className="project-subtitle">{t(p.subtitleKey)}</p>
              <p className="project-desc">{t(p.descKey)}</p>
              <ul className="project-highlights">
                {p.highlightKeys.map((k) => (
                  <li key={k}>{t(k)}</li>
                ))}
              </ul>
              <div className="project-tech">
                {p.tech.map((label) => (
                  <span className="tech-pill" key={label}>
                    {label}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
