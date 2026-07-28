import type { Metadata } from "next";
import { I18nProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yuan Genggeng — Senior Backend Engineer",
  description:
    "Senior Backend Engineer with 6+ years in distributed systems, specializing in the Spring Ecosystem. Based in Tokyo, Japan.",
  keywords: [
    "Backend Engineer",
    "Kotlin",
    "Java",
    "Spring Boot",
    "Spring MVC",
    "Tokyo",
    "Software Developer",
    "Yuan Genggeng",
  ],
  openGraph: {
    title: "Yuan Genggeng — Senior Backend Engineer",
    description:
      "Senior Backend Engineer specializing in the Spring Ecosystem, distributed systems, and AI-augmented workflows.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@700;900&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
