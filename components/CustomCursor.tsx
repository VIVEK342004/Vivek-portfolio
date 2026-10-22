"use client";

import React, { useEffect, useState } from "react";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer and no reduced motion
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!hasFinePointer || prefersReducedMotion) {
      return;
    }

    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest("a") ||
          target.closest("button") ||
          target.closest("input") ||
          target.closest("textarea") ||
          target.closest('[role="button"]') ||
          target.closest(".interactive-hover"))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!mounted || !isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block"
      aria-hidden="true"
    >
      {/* Trailing Ring */}
      <div
        className="fixed top-0 left-0 rounded-full border border-blue-400/40 pointer-events-none transition-transform duration-150 ease-out"
        style={{
          width: isHovered ? 40 : 26,
          height: isHovered ? 40 : 26,
          transform: `translate3d(${position.x - (isHovered ? 20 : 13)}px, ${
            position.y - (isHovered ? 20 : 13)
          }px, 0)`,
          backgroundColor: isHovered ? "rgba(59, 130, 246, 0.08)" : "transparent",
        }}
      />

      {/* Center Dot */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-blue-500 pointer-events-none"
        style={{
          transform: `translate3d(${position.x - 3}px, ${position.y - 3}px, 0)`,
        }}
      />
    </div>
  );
}
