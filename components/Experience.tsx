"use client";

import { useI18n } from "@/lib/i18n";

function Bullets({ keys }: { keys: string[] }) {
  const { t } = useI18n();
  return (
    <ul className="timeline-bullets">
      {keys.map((k) => (
        <li key={k} dangerouslySetInnerHTML={{ __html: t(k) }} />
      ))}
    </ul>
  );
}

function TechPills({ items }: { items: string[] }) {
  return (
    <div className="timeline-tech">
      {items.map((label) => (
        <span className="tech-pill" key={label}>
          {label}
        </span>
      ))}
    </div>
  );
}

export default function Experience() {
  const { t } = useI18n();

  return (
    <section id="experience" className="section" aria-labelledby="exp-heading">
      <div className="container">
        <div className="section-label">{t("exp.label")}</div>
        <h2 id="exp-heading" className="section-title">
          {t("exp.title")}
        </h2>
        <div className="timeline">
          {/* NTT DATA */}
          <article className="timeline-item reveal" aria-label="NTT DATA">
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-company">NTT DATA</h3>
                  <p className="timeline-role">
                    <span>{t("exp.ntt.role")}</span>
                  </p>
                </div>
                <div className="timeline-meta">
                  <span className="timeline-period">{t("exp.ntt.period")}</span>
                  <span className="timeline-location">📍 Tokyo, Japan</span>
                  <span className="timeline-badge badge-active">
                    {t("exp.ntt.badge")}
                  </span>
                </div>
              </div>
              <div className="timeline-project">
                <span className="project-tag">{t("exp.ntt.project")}</span>
              </div>
              <Bullets keys={["exp.ntt.b1", "exp.ntt.b2", "exp.ntt.b3"]} />
              <TechPills
                items={[
                  "Java 17",
                  "Spring MVC",
                  "TERASOLUNA 5.x",
                  "intra-mart",
                  "JSP",
                  "Oracle",
                ]}
              />
            </div>
          </article>

          {/* Rakuten */}
          <article className="timeline-item reveal" aria-label="Rakuten Group">
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-company">Rakuten Group, Inc.</h3>
                  <p className="timeline-role">{t("exp.rakuten.role")}</p>
                </div>
                <div className="timeline-meta">
                  <span className="timeline-period">{t("exp.rakuten.period")}</span>
                  <span className="timeline-location">📍 Tokyo, Japan</span>
                </div>
              </div>
              <div className="timeline-project">
                <span className="project-tag">{t("exp.rakuten.project1")}</span>
              </div>
              <Bullets
                keys={[
                  "exp.rakuten.m1",
                  "exp.rakuten.m2",
                  "exp.rakuten.m3",
                  "exp.rakuten.m4",
                ]}
              />
              <TechPills
                items={[
                  "Kotlin",
                  "Vert.x",
                  "Cassandra",
                  "Couchbase",
                  "Gatling",
                  "GitLab CI/CD",
                ]}
              />
              <div className="timeline-project" style={{ marginTop: "1.25rem" }}>
                <span className="project-tag">{t("exp.rakuten.project2")}</span>
              </div>
              <Bullets keys={["exp.rakuten.f1", "exp.rakuten.f2", "exp.rakuten.f3"]} />
              <TechPills
                items={["Spring Boot", "RabbitMQ", "Gradle", "JFrog Artifactory", "Swagger"]}
              />
            </div>
          </article>

          {/* Earlier */}
          <article className="timeline-item reveal" aria-label="Earlier roles">
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-card timeline-card-condensed">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-company">{t("exp.earlier.company")}</h3>
                  <p className="timeline-role">{t("exp.earlier.role")}</p>
                </div>
                <div className="timeline-meta">
                  <span className="timeline-period">{t("exp.earlier.period")}</span>
                </div>
              </div>
              <Bullets keys={["exp.earlier.b1", "exp.earlier.b2", "exp.earlier.b3"]} />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
