"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";
import styles from "./ScrollReveal.module.scss";

type RevealStyle = CSSProperties & {
  "--reveal-delay": string;
};

type ScrollRevealProps = {
  children: ReactNode;
  delay?: number;
};

export function ScrollReveal({ children, delay = 0 }: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (
      !element ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    element.classList.add(styles.prepared);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        element.classList.add(styles.visible);
        observer.disconnect();
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const style: RevealStyle = {
    "--reveal-delay": `${delay}ms`,
  };

  return (
    <div
      className={styles.root}
      data-scroll-reveal=""
      ref={elementRef}
      style={style}
    >
      {children}
    </div>
  );
}
