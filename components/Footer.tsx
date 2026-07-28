"use client";

import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-inner">
          <p className="footer-name">{t("footer.name")}</p>
          <p className="footer-copy">{t("footer.copy")}</p>
        </div>
      </div>
    </footer>
  );
}
