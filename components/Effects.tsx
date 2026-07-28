"use client";

/*
 * Imperative page effects, ported from the legacy script.js:
 * reveal-on-scroll, stat counters. Runs once after mount.
 */

import { useEffect } from "react";

export default function Effects() {
  useEffect(() => {
    // Reveal-on-scroll with sibling stagger
    const revealEls = document.querySelectorAll<HTMLElement>(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const parent = entry.target.parentElement;
          const siblings = parent
            ? Array.from(parent.querySelectorAll(".reveal"))
            : [];
          const delay = Math.max(0, siblings.indexOf(entry.target)) * 80;
          window.setTimeout(() => entry.target.classList.add("visible"), delay);
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    revealEls.forEach((el) => revealObserver.observe(el));

    // Stat counter animation
    const animateCounter = (el: HTMLElement, target: number, duration = 1200) => {
      const start = performance.now();
      const easeOut = (x: number) => 1 - Math.pow(1 - x, 3);
      const update = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        el.textContent = String(Math.round(easeOut(progress) * target));
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = String(target);
      };
      requestAnimationFrame(update);
    };

    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const numEl = entry.target.querySelector<HTMLElement>(".stat-number");
          if (numEl?.dataset.count) {
            animateCounter(numEl, parseInt(numEl.dataset.count, 10));
          }
          statObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.5 },
    );
    document.querySelectorAll(".stat-card").forEach((card) => statObserver.observe(card));

    return () => {
      revealObserver.disconnect();
      statObserver.disconnect();
    };
  }, []);

  return null;
}
