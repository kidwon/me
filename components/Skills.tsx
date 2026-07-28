"use client";

import { useI18n } from "@/lib/i18n";

interface SkillCard {
  titleKey: string;
  tags: { label: string; primary?: boolean }[];
}

const CARDS: SkillCard[] = [
  {
    titleKey: "skills.spring.title",
    tags: [
      { label: "Spring Boot (2.x/3.x)", primary: true },
      { label: "Spring MVC", primary: true },
      { label: "Spring Security" },
      { label: "Spring Data JPA/MyBatis" },
      { label: "Spring Core (DI/IoC)" },
    ],
  },
  {
    titleKey: "skills.backend.title",
    tags: [
      { label: "Java", primary: true },
      { label: "Kotlin", primary: true },
      { label: "Python (FastAPI)", primary: true },
      { label: "Go" },
      { label: "Microservices" },
      { label: "DDD" },
      { label: "RESTful APIs" },
      { label: "Vert.x" },
    ],
  },
  {
    titleKey: "skills.search.title",
    tags: [
      { label: "Meilisearch", primary: true },
      { label: "Kafka (CDC)", primary: true },
      { label: "Cassandra" },
      { label: "Couchbase" },
      { label: "Snowflake" },
      { label: "Oracle" },
      { label: "Redis" },
      { label: "RabbitMQ" },
    ],
  },
  {
    titleKey: "skills.cloud.title",
    tags: [
      { label: "Azure (AKS)", primary: true },
      { label: "Railway", primary: true },
      { label: "AWS" },
      { label: "Docker" },
      { label: "Podman" },
      { label: "Minikube" },
      { label: "GitHub Actions" },
      { label: "GitLab CI/CD" },
    ],
  },
  {
    titleKey: "skills.ai.title",
    tags: [
      { label: "Claude Code", primary: true },
      { label: "Antigravity", primary: true },
      { label: "Codex" },
      { label: "DeepSeek" },
      { label: "AI-Augmented Workflows" },
    ],
  },
  {
    titleKey: "skills.frontend.title",
    tags: [
      { label: "Next.js", primary: true },
      { label: "React.js", primary: true },
      { label: "Vue.js" },
      { label: "Convex" },
      { label: "Tailwind CSS" },
      { label: "TypeScript" },
    ],
  },
];

export default function Skills() {
  const { t } = useI18n();

  return (
    <section id="skills" className="section section-alt" aria-labelledby="skills-heading">
      <div className="container">
        <div className="section-label">{t("skills.label")}</div>
        <h2 id="skills-heading" className="section-title">
          {t("skills.title")}
        </h2>
        <div className="skills-grid">
          {CARDS.map(({ titleKey, tags }) => (
            <div className="skill-card reveal" tabIndex={0} key={titleKey}>
              <h3 className="skill-card-title">{t(titleKey)}</h3>
              <div className="skill-tags">
                {tags.map(({ label, primary }) => (
                  <span
                    key={label}
                    className={primary ? "stag stag-primary" : "stag"}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
