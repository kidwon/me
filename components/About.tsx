"use client";

import { useI18n } from "@/lib/i18n";

const STATS = [
  { count: 20, unit: "+", labelKey: "about.stat1.label" },
  { count: 6, unit: "+", labelKey: "about.stat2.label" },
  { count: 300, unit: "M", labelKey: "about.stat3.label" },
  { count: 10, unit: "+", labelKey: "about.stat4.label" },
] as const;

const LANG_ITEMS = [
  { nameKey: "about.lang.zh", levelKey: "about.level.native" },
  { nameKey: "about.lang.ja", levelKey: "about.level.business" },
  { nameKey: "about.lang.en", levelKey: "about.level.business" },
] as const;

export default function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container">
        <div className="section-label">{t("about.label")}</div>
        <h2 id="about-heading" className="section-title">
          {t("about.title")}
        </h2>
        <div className="about-grid">
          <div className="about-text">
            <p
              className="about-lead"
              dangerouslySetInnerHTML={{ __html: t("about.lead") }}
            />
            <p dangerouslySetInnerHTML={{ __html: t("about.p1") }} />
            <p dangerouslySetInnerHTML={{ __html: t("about.p2") }} />
            <div className="about-lang">
              {LANG_ITEMS.map(({ nameKey, levelKey }) => (
                <div className="lang-item" key={nameKey}>
                  <span className="lang-name">{t(nameKey)}</span>
                  <span className="lang-level">{t(levelKey)}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-stats">
            {STATS.map(({ count, unit, labelKey }) => (
              <div className="stat-card reveal" key={labelKey}>
                <div className="stat-number" data-count={count}>
                  0
                </div>
                <div className="stat-unit">{unit}</div>
                <div className="stat-label">{t(labelKey)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
