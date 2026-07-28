"use client";

import { useI18n } from "@/lib/i18n";

export default function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-label">{t("contact.label")}</div>
        <h2 id="contact-heading" className="section-title">
          {t("contact.title")}
        </h2>
        <p className="contact-desc">{t("contact.desc")}</p>
        <div className="contact-cards">
          <a
            href="mailto:kidyuan@foxmail.com"
            className="contact-card reveal"
            aria-label="Send email to Yuan Genggeng"
          >
            <div className="contact-icon" aria-hidden="true">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div>
              <div className="contact-label">{t("contact.email.label")}</div>
              <div className="contact-value">kidyuan@foxmail.com</div>
            </div>
            <div className="contact-arrow" aria-hidden="true">
              →
            </div>
          </a>
          <a
            href="tel:+8107040175377"
            className="contact-card reveal"
            aria-label="Call Yuan Genggeng"
          >
            <div className="contact-icon" aria-hidden="true">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11.5 19.79 19.79 0 0 1 1.61 2.84 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.55a16 16 0 0 0 5.54 5.54l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <div className="contact-label">{t("contact.phone.label")}</div>
              <div className="contact-value">070-4017-5377</div>
            </div>
            <div className="contact-arrow" aria-hidden="true">
              →
            </div>
          </a>
          <div className="contact-card reveal" tabIndex={0}>
            <div className="contact-icon" aria-hidden="true">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <div className="contact-label">{t("contact.location.label")}</div>
              <div className="contact-value">{t("contact.location.value")}</div>
            </div>
            <div className="contact-visa">
              <span>{t("contact.visa")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
