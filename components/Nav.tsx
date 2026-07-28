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

export default function Nav() {
  const { lang, setLang, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        {langSwitcher}
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
      </div>
    </nav>
  );
}
