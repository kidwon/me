"use client";

import { useI18n } from "@/lib/i18n";

export default function Hero() {
  const { t } = useI18n();

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
