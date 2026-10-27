"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export function MotionLayer() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const desktop = window.matchMedia("(min-width: 821px)").matches;
    root.classList.add("motion-ready");

    let lenis: Lenis | null = null;
    let ticker: ((time: number) => void) | null = null;
    const nativeCleanups: Array<() => void> = [];

    if (!reducedMotion) {
      lenis = new Lenis({
        duration: 1.14,
        smoothWheel: true,
        wheelMultiplier: 0.88,
        touchMultiplier: 1,
      });
      lenis.on("scroll", ScrollTrigger.update);
      ticker = (time: number) => lenis?.raf(time * 1000);
      gsap.ticker.add(ticker);
      gsap.ticker.lagSmoothing(0);
    }

    const ctx = gsap.context(() => {
      if (reducedMotion) {
        gsap.set("[data-reveal], .hero-title .reveal-line > span, [data-motion-word]", { clearProps: "all" });
        return;
      }

      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .set(".intro-screen", { display: "grid" })
        .fromTo(".intro-word span", { yPercent: 130, rotate: 3 }, { yPercent: 0, rotate: 0, duration: 0.52, stagger: 0.055 })
        .fromTo(".intro-meta", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.35 }, "-=0.25")
        .fromTo(".intro-rule", { scaleX: 0 }, { scaleX: 1, duration: 0.48, transformOrigin: "left" }, "-=0.25")
        .to(".intro-screen", { yPercent: -100, duration: 0.78, ease: "power4.inOut", delay: 0.12 })
        .set(".intro-screen", { display: "none" })
        .fromTo(
          ".hero-title .reveal-line > span",
          { yPercent: 120, rotate: 1.5 },
          { yPercent: 0, rotate: 0, duration: 0.84, stagger: 0.09, ease: "power4.out" },
          "-=0.06",
        )
        .fromTo(
          ".hero-role, .hero-topline, .hero-bottom, .hero-visual, .hero-facts",
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.62, stagger: 0.075, ease: "power3.out" },
          "-=0.58",
        );

      gsap.to(".accent-word", {
        backgroundPosition: "100% 50%",
        duration: 4.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      const roles = gsap.utils.toArray<HTMLElement>(".hero-role-cycle i");
      if (roles.length > 1) {
        gsap.set(roles, { autoAlpha: 0, y: 12 });
        gsap.set(roles[0], { autoAlpha: 1, y: 0 });
        const roleTimeline = gsap.timeline({ repeat: -1 });
        roles.forEach((role, index) => {
          const next = roles[(index + 1) % roles.length];
          roleTimeline
            .to(role, { autoAlpha: 0, y: -12, duration: 0.32, ease: "power2.in" }, "+=1.55")
            .fromTo(next, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.38, ease: "power3.out" }, "-=0.08");
        });
      }

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        if (element.closest(".hero") || element.closest("[data-project-story]")) return;
        gsap.fromTo(
          element,
          { opacity: 0, y: 34 },
          {
            opacity: 1,
            y: 0,
            duration: 0.72,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 86%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".section-head h2, .approach-copy h2, .profile-band-copy h2, .footer-main h2").forEach((heading) => {
        gsap.fromTo(
          heading,
          { clipPath: "inset(0 0 100% 0)", y: 22 },
          {
            clipPath: "inset(0 0 0% 0)",
            y: 0,
            duration: 0.9,
            ease: "power4.out",
            scrollTrigger: { trigger: heading, start: "top 88%", once: true },
          },
        );
      });

      if (desktop) {
        const stage = document.querySelector<HTMLElement>(".motion-stage");
        const words = gsap.utils.toArray<HTMLElement>("[data-motion-word]");
        const meter = document.querySelector<HTMLElement>(".motion-stage-meter span");
        if (stage && words.length) {
          gsap.set(words, { autoAlpha: 0, y: 90, scale: 0.92, filter: "blur(8px)" });
          gsap.set(words[0], { autoAlpha: 1, y: 0, scale: 1, filter: "blur(0px)" });
          const stageTl = gsap.timeline({
            scrollTrigger: {
              trigger: stage,
              start: "top top",
              end: "+=240%",
              pin: true,
              scrub: 1.05,
              anticipatePin: 1,
            },
          });

          stageTl
            .to(words[0], { autoAlpha: 0, y: -85, scale: 1.06, filter: "blur(8px)", duration: 1 })
            .fromTo(words[1], { autoAlpha: 0, y: 95, scale: 0.9, filter: "blur(10px)" }, { autoAlpha: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 1 }, "<0.18")
            .to(words[1], { autoAlpha: 0, y: -85, scale: 1.06, filter: "blur(8px)", duration: 1 }, "+=0.3")
            .fromTo(words[2], { autoAlpha: 0, y: 95, scale: 0.9, filter: "blur(10px)" }, { autoAlpha: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 1 }, "<0.18")
            .to(words[2], { scale: 1.035, duration: 0.7 });

          if (meter) {
            gsap.fromTo(meter, { scaleX: 0 }, {
              scaleX: 1,
              ease: "none",
              scrollTrigger: { trigger: stage, start: "top top", end: "+=240%", scrub: 0.4 },
            });
          }

          gsap.to(".motion-stage-glow-a", {
            xPercent: 55,
            yPercent: -20,
            ease: "none",
            scrollTrigger: { trigger: stage, start: "top top", end: "+=240%", scrub: 1 },
          });
          gsap.to(".motion-stage-glow-b", {
            xPercent: -45,
            yPercent: 32,
            ease: "none",
            scrollTrigger: { trigger: stage, start: "top top", end: "+=240%", scrub: 1 },
          });
        }
      } else {
        gsap.set("[data-motion-word]", { autoAlpha: 1, y: 0, scale: 1, filter: "none" });
      }

      gsap.utils.toArray<HTMLElement>("[data-project-story]").forEach((row, index) => {
        const media = row.querySelector<HTMLElement>(".project-media");
        const image = row.querySelector<HTMLImageElement>(".project-media img");
        const content = row.querySelector<HTMLElement>(".project-content");
        const progress = row.querySelector<HTMLElement>(".project-progress span");
        const contributions = row.querySelectorAll<HTMLElement>(".project-contribution li");
        const title = row.querySelector<HTMLElement>(".project-content h3");

        gsap.fromTo(
          row,
          { opacity: 0.4 },
          { opacity: 1, duration: 0.7, ease: "power2.out", scrollTrigger: { trigger: row, start: "top 86%", once: true } },
        );

        if (media) {
          gsap.fromTo(media, { clipPath: index % 2 ? "inset(0 0 0 18%)" : "inset(0 18% 0 0)", y: 42 }, {
            clipPath: "inset(0 0 0 0)",
            y: 0,
            duration: 1.05,
            ease: "power4.out",
            scrollTrigger: { trigger: row, start: "top 80%", once: true },
          });
        }

        if (image && media) {
          gsap.fromTo(image, { scale: 1.13, yPercent: -5 }, {
            scale: 1.015,
            yPercent: 5,
            ease: "none",
            scrollTrigger: { trigger: row, start: "top bottom", end: "bottom top", scrub: 1.05 },
          });
        }

        if (content) {
          gsap.fromTo(content.children, { opacity: 0, x: index % 2 ? -34 : 34 }, {
            opacity: 1,
            x: 0,
            duration: 0.72,
            stagger: 0.045,
            ease: "power3.out",
            scrollTrigger: { trigger: row, start: "top 72%", once: true },
          });
        }

        if (progress) {
          gsap.fromTo(progress, { scaleY: 0 }, {
            scaleY: 1,
            ease: "none",
            scrollTrigger: { trigger: row, start: "top 48%", end: "bottom 58%", scrub: 0.8 },
          });
        }

        if (contributions.length) {
          gsap.fromTo(contributions, { opacity: 0.32, x: 14 }, {
            opacity: 1,
            x: 0,
            stagger: 0.18,
            ease: "none",
            scrollTrigger: { trigger: row, start: "top 34%", end: "bottom 62%", scrub: 1 },
          });
        }

        if (title && desktop) {
          gsap.fromTo(title, { xPercent: index % 2 ? -4 : 4 }, {
            xPercent: 0,
            ease: "none",
            scrollTrigger: { trigger: row, start: "top 65%", end: "top 25%", scrub: 1 },
          });
        }
      });

      const experienceLine = document.querySelector<HTMLElement>(".experience-line span");
      if (experienceLine) {
        gsap.fromTo(experienceLine, { scaleY: 0 }, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: ".experience-list", start: "top 75%", end: "bottom 70%", scrub: 0.8 },
        });
      }

      gsap.utils.toArray<HTMLElement>(".experience-row").forEach((row, index) => {
        gsap.fromTo(row, { opacity: 0, x: index % 2 ? 28 : -28 }, {
          opacity: 1,
          x: 0,
          duration: 0.66,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 90%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>(".capability-row").forEach((row) => {
        gsap.fromTo(row, { opacity: 0, xPercent: -1.5 }, {
          opacity: 1,
          xPercent: 0,
          duration: 0.62,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 90%", once: true },
        });
      });

      gsap.to(".portrait-card", {
        yPercent: -4,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.8 },
      });

      const progressTrigger = ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => root.style.setProperty("--scroll-progress", self.progress.toString()),
      });

      const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-nav]"));
      navLinks.forEach((link) => {
        const section = document.getElementById(link.dataset.nav || "");
        if (!section) return;
        ScrollTrigger.create({
          trigger: section,
          start: "top 45%",
          end: "bottom 45%",
          onToggle: (self) => {
            if (!self.isActive) return;
            navLinks.forEach((item) => item.classList.toggle("is-active", item === link));
          },
        });
      });

      nativeCleanups.push(() => progressTrigger.kill());
    });

    if (!reducedMotion && finePointer) {
      const cursor = cursorRef.current;
      if (cursor) {
        gsap.set(cursor, { xPercent: -50, yPercent: -50 });
        const cursorX = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3" });
        const cursorY = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3" });
        const pointerMove = (event: PointerEvent) => {
          cursorX(event.clientX);
          cursorY(event.clientY);
        };
        window.addEventListener("pointermove", pointerMove, { passive: true });
        nativeCleanups.push(() => window.removeEventListener("pointermove", pointerMove));

        const interactive = Array.from(document.querySelectorAll<HTMLElement>("a, button, [data-tilt]"));
        interactive.forEach((item) => {
          const enter = () => cursor.classList.add("is-link");
          const leave = () => cursor.classList.remove("is-link");
          item.addEventListener("pointerenter", enter);
          item.addEventListener("pointerleave", leave);
          nativeCleanups.push(() => {
            item.removeEventListener("pointerenter", enter);
            item.removeEventListener("pointerleave", leave);
          });
        });

        const projectCards = Array.from(document.querySelectorAll<HTMLElement>("[data-project-card]"));
        projectCards.forEach((card) => {
          const enter = () => cursor.classList.add("is-project");
          const leave = () => cursor.classList.remove("is-project");
          card.addEventListener("pointerenter", enter);
          card.addEventListener("pointerleave", leave);
          nativeCleanups.push(() => {
            card.removeEventListener("pointerenter", enter);
            card.removeEventListener("pointerleave", leave);
          });
        });
      }

      const tiltItems = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]"));
      tiltItems.forEach((item) => {
        const move = (event: PointerEvent) => {
          const rect = item.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          gsap.to(item, { rotateY: x * 6.5, rotateX: y * -5.5, x: x * 5, y: y * 4, duration: 0.34, ease: "power2.out", transformPerspective: 900 });
          item.style.setProperty("--shine-x", `${(x + 0.5) * 100}%`);
          item.style.setProperty("--shine-y", `${(y + 0.5) * 100}%`);
        };
        const leave = () => gsap.to(item, { rotateY: 0, rotateX: 0, x: 0, y: 0, duration: 0.58, ease: "power3.out" });
        item.addEventListener("pointermove", move);
        item.addEventListener("pointerleave", leave);
        nativeCleanups.push(() => {
          item.removeEventListener("pointermove", move);
          item.removeEventListener("pointerleave", leave);
        });
      });

      const magneticItems = Array.from(document.querySelectorAll<HTMLElement>("[data-magnetic]"));
      magneticItems.forEach((item) => {
        const move = (event: PointerEvent) => {
          const rect = item.getBoundingClientRect();
          const x = event.clientX - (rect.left + rect.width / 2);
          const y = event.clientY - (rect.top + rect.height / 2);
          gsap.to(item, { x: x * 0.16, y: y * 0.16, duration: 0.3, ease: "power2.out" });
        };
        const leave = () => gsap.to(item, { x: 0, y: 0, duration: 0.55, ease: "elastic.out(1, .45)" });
        item.addEventListener("pointermove", move);
        item.addEventListener("pointerleave", leave);
        nativeCleanups.push(() => {
          item.removeEventListener("pointermove", move);
          item.removeEventListener("pointerleave", leave);
        });
      });

      const spotlights = Array.from(document.querySelectorAll<HTMLElement>("[data-spotlight]"));
      spotlights.forEach((item) => {
        const move = (event: PointerEvent) => {
          const rect = item.getBoundingClientRect();
          item.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
          item.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
        };
        item.addEventListener("pointermove", move);
        nativeCleanups.push(() => item.removeEventListener("pointermove", move));
      });

      const orbA = document.querySelector<HTMLElement>(".ambient-orb-a");
      const orbB = document.querySelector<HTMLElement>(".ambient-orb-b");
      if (orbA && orbB) {
        const ax = gsap.quickTo(orbA, "x", { duration: 1.2, ease: "power3" });
        const ay = gsap.quickTo(orbA, "y", { duration: 1.2, ease: "power3" });
        const bx = gsap.quickTo(orbB, "x", { duration: 1.5, ease: "power3" });
        const by = gsap.quickTo(orbB, "y", { duration: 1.5, ease: "power3" });
        const moveAmbient = (event: PointerEvent) => {
          const nx = event.clientX / window.innerWidth - 0.5;
          const ny = event.clientY / window.innerHeight - 0.5;
          ax(nx * 50); ay(ny * 38);
          bx(nx * -42); by(ny * -32);
        };
        window.addEventListener("pointermove", moveAmbient, { passive: true });
        nativeCleanups.push(() => window.removeEventListener("pointermove", moveAmbient));
      }
    }

    window.setTimeout(() => ScrollTrigger.refresh(), 120);

    return () => {
      ctx.revert();
      nativeCleanups.forEach((cleanup) => cleanup());
      if (ticker) gsap.ticker.remove(ticker);
      lenis?.destroy();
      root.classList.remove("motion-ready");
      root.style.removeProperty("--scroll-progress");
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="intro-screen" aria-hidden="true">
        <div className="intro-word"><span>M</span><span>W</span><span>A</span><span>.</span></div>
        <div className="intro-rule" />
        <div className="intro-meta"><span>PORTFOLIO</span><span>2026</span></div>
      </div>
      <div ref={cursorRef} className="motion-cursor" aria-hidden="true"><span>VIEW ↗</span></div>
    </>
  );
}
