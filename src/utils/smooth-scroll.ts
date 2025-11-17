"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export function useGsapSmoothScroll() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        const target = (e.currentTarget as HTMLAnchorElement).getAttribute(
          "href"
        );

        if (!target || !target.startsWith("#")) return;
        if (target.length <= 1) return;

        const element = document.querySelector(target);
        if (!element) return;

        e.preventDefault();

        gsap.to(window, {
          duration: 0.9,
          scrollTo: element,
          ease: "linear",
        });
      });
    });
  }, []);
}
