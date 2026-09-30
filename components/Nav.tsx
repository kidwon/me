"use client";

import { useEffect, useState } from "react";
import { useI18n, type Lang } from "@/lib/i18n";

const NAV_ITEMS = [
  ["#about", "nav.about"],
  ["#projects", "nav.projects"],
  ["#skills", "nav.skills"],
  ["#experience", "nav.experience"],
  ["#contact", "nav.contact"],
] as const;

const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "zh", label: "中" },
  { code: "ja", label: "日" },
];

const RESUME_NAMES: Record<Lang, { file: string; downloadName: string }> = {
  zh: { file: "resume-zh.pdf", downloadName: "袁耿耿_个人简历.pdf" },
  ja: { file: "resume-ja.pdf", downloadName: "職務経歴書_袁耿耿.pdf" },
  en: { file: "resume-en.pdf", downloadName: "Resume_Genggeng_Yuan.pdf" },
};

export default function Nav() {
  const { lang, setLang, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const resume = RESUME_NAMES[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const langSwitcher = (
    <div className="lang-switcher" role="group" aria-label="Language selector">
      {LANGS.map(({ code, label }) => (
        <button
          key={code}
          className={`lang-btn${lang === code ? " active" : ""}`}
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
        >
          {label}
        </button>
      ))}
    </div>
  );

  return (
    <nav id="navbar" className={scrolled ? "scrolled" : undefined} aria-label="Main navigation">
      <div className="nav-container">
        <a href="#hero" className="nav-logo" aria-label="Go to top">
          袁
        </a>
        <ul className="nav-links" role="list">
          {NAV_ITEMS.map(([href, key]) => (
            <li key={key}>
              <a href={href} className="nav-link">
                {t(key)}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <a
            href={`${basePath}/${resume.file}`}
            download={resume.downloadName}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume-link"
            title={`${t("hero.cta.resume")} (${resume.downloadName})`}
          >
            <svg
              width="13"
              height="13"
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
            <span>CV</span>
          </a>
          {langSwitcher}
        </div>
        <button
          className={`mobile-menu-btn${menuOpen ? " open" : ""}`}
          aria-label="Toggle mobile menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`mobile-menu${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
        {NAV_ITEMS.map(([href, key]) => (
          <a
            key={key}
            href={href}
            className="mobile-nav-link"
            onClick={() => setMenuOpen(false)}
          >
            {t(key)}
          </a>
        ))}
        <a
          href={`${basePath}/${resume.file}`}
          download={resume.downloadName}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-resume-link"
          onClick={() => setMenuOpen(false)}
        >
          📄 {t("hero.cta.resume")} (PDF)
        </a>
      </div>
    </nav>
  );
}
