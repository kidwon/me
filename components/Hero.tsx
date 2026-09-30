"use client";

import { useState, useRef, useEffect } from "react";
import { useI18n, type Lang } from "@/lib/i18n";

const RESUME_MAP: Record<Lang, { file: string; downloadName: string; labelKey: string }> = {
  zh: {
    file: "resume-zh.pdf",
    downloadName: "袁耿耿_个人简历.pdf",
    labelKey: "hero.cta.resume.zh",
  },
  ja: {
    file: "resume-ja.pdf",
    downloadName: "職務経歴書_袁耿耿.pdf",
    labelKey: "hero.cta.resume.ja",
  },
  en: {
    file: "resume-en.pdf",
    downloadName: "Resume_Genggeng_Yuan.pdf",
    labelKey: "hero.cta.resume.en",
  },
};

export default function Hero() {
  const { lang, t } = useI18n();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  const currentResume = RESUME_MAP[lang];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDropdownOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <section id="hero" aria-label="Introduction">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="badge-dot" aria-hidden="true" />
            <span>{t("hero.badge")}</span>
          </div>
          <div className="hero-heading">
            <h1
              className="hero-name"
              dangerouslySetInnerHTML={{ __html: t("hero.name") }}
            />
            <span className="hero-seal" aria-hidden="true">
              袁
            </span>
          </div>
          <p className="hero-title">{t("hero.title")}</p>
          <p className="hero-sub">{t("hero.sub")}</p>
          <div className="hero-actions">
            <a href="#experience" className="btn btn-primary">
              {t("hero.cta.primary")}
            </a>
            <a href="#contact" className="btn btn-ghost">
              {t("hero.cta.ghost")}
            </a>
            <div className="resume-dropdown" ref={dropdownRef}>
              <div className="resume-btn-group">
                <a
                  href={`${basePath}/${currentResume.file}`}
                  download={currentResume.downloadName}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-main-btn"
                  title={`${t("hero.cta.resume")} (${currentResume.downloadName})`}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>{t("hero.cta.resume")}</span>
                </a>
                <button
                  type="button"
                  className="resume-toggle-btn"
                  aria-label="Select resume language"
                  aria-expanded={dropdownOpen}
                  onClick={() => setDropdownOpen((v) => !v)}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    style={{
                      transform: dropdownOpen ? "rotate(180deg)" : "none",
                      transition: "transform 0.15s ease",
                    }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
              </div>
              {dropdownOpen && (
                <div className="resume-menu" role="menu">
                  {(["zh", "ja", "en"] as Lang[]).map((l) => {
                    const item = RESUME_MAP[l];
                    return (
                      <a
                        key={l}
                        href={`${basePath}/${item.file}`}
                        download={item.downloadName}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`resume-menu-item${l === lang ? " active" : ""}`}
                        role="menuitem"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <span className="resume-menu-badge">{l.toUpperCase()}</span>
                        <span>{t(item.labelKey)}</span>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="hero-diff" aria-label="Career highlights, presented as a code diff">
          <div className="diff-head">
            <span className="diff-file">legacy_modernization.diff</span>
            <span className="diff-stat">
              <span className="plus">+2</span> <span className="minus">−2</span>
            </span>
          </div>
          <div className="diff-body">
            <p className="diff-hunk">{t("hero.diff.h1")}</p>
            <p className="diff-line del">- Struts 1.x · JDK 1.7 · Oracle 11g</p>
            <p className="diff-line add">+ Spring MVC · JDK 17 · Oracle 18c</p>
            <p className="diff-hunk">{t("hero.diff.h2")}</p>
            <p className="diff-line del">- Couchbase</p>
            <p className="diff-line add">+ Cassandra · 300M records</p>
          </div>
        </div>
      </div>
      <div className="hero-scroll-hint" aria-hidden="true">
        <span>{t("hero.scroll")}</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
