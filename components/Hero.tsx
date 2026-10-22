"use client";

import React, { useState, useEffect, useRef } from "react";
import { personalInfo } from "@/data/personal";
import { ArrowRight, FileText, Terminal, Code2, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });
    };

    const heroEl = heroRef.current;
    if (heroEl) {
      heroEl.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    return () => {
      if (heroEl) {
        heroEl.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      aria-label="Developer Introduction"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 border-b border-[var(--border)] overflow-hidden bg-tech-grid"
    >
      {/* Interactive Subtle Cursor Radial Highlight (Desktop only) */}
      {mousePos && (
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.07), transparent 75%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Subtle Ambient Background Light */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full animate-ambient-drift"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -right-24 w-80 h-80 bg-indigo-600/5 blur-[120px] rounded-full animate-ambient-drift"
        style={{ animationDelay: "8s" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Sequence 1: Engineering status badge (100ms) */}
        <div
          style={{ transitionDelay: "100ms" }}
          className={`inline-flex items-center gap-2 px-2.5 py-1 rounded text-xs font-mono bg-[var(--surface-card)] border border-[var(--border)] text-[var(--muted)] mb-8 transition-all duration-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[var(--foreground)] font-medium">AVAILABLE FOR OPPORTUNITIES</span>
          <span className="text-[var(--border)]">|</span>
          <span className="text-slate-400 hidden sm:inline">Software Development &bull; Full Stack &bull; AI</span>
        </div>

        {/* Sequence 2: Main developer headline & subtext (180ms - 280ms) */}
        <div className="max-w-4xl space-y-4">
          <h1
            style={{ transitionDelay: "180ms" }}
            className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.1] transition-all duration-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            {personalInfo.name}
          </h1>

          <p
            style={{ transitionDelay: "240ms" }}
            className={`text-xl sm:text-2xl font-mono text-blue-400 font-medium tracking-tight transition-all duration-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            Software Developer
          </p>

          <p
            style={{ transitionDelay: "300ms" }}
            className={`text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-2xl pt-2 transition-all duration-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            Building practical software solutions with clean code, modern systems engineering, and algorithmic problem solving. Focused on high-utility applications, APIs, and intelligent developer tools.
          </p>
        </div>

        {/* Sequence 3: Minimal Actions & Profiles (380ms) */}
        <div
          style={{ transitionDelay: "380ms" }}
          className={`flex flex-wrap items-center gap-3 pt-8 pb-10 transition-all duration-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <a
            href="#projects"
            className="btn-arrow-slide inline-flex items-center gap-2 px-4 py-2.5 rounded text-xs sm:text-sm font-mono font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-all hover:-translate-y-0.5"
          >
            <span>View Projects</span>
            <ArrowRight className="w-3.5 h-3.5 arrow-icon" />
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded text-xs sm:text-sm font-mono font-medium text-[var(--foreground)] bg-[var(--surface-card)] hover:bg-[var(--surface-hover)] border border-[var(--border)] transition-all hover:-translate-y-0.5"
          >
            <GithubIcon className="w-4 h-4 transition-transform hover:rotate-3" />
            <span>GitHub</span>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded text-xs sm:text-sm font-mono font-medium text-[var(--foreground)] bg-[var(--surface-card)] hover:bg-[var(--surface-hover)] border border-[var(--border)] transition-all hover:-translate-y-0.5"
          >
            <LinkedinIcon className="w-4 h-4 transition-transform hover:-rotate-3" />
            <span>LinkedIn</span>
          </a>

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded text-xs sm:text-sm font-mono font-medium text-[var(--muted)] hover:text-[var(--foreground)] border border-[var(--border)] hover:bg-[var(--surface-hover)] transition-all hover:-translate-y-0.5"
          >
            <FileText className="w-3.5 h-3.5 text-blue-400" />
            <span>Resume.pdf</span>
          </a>
        </div>

        {/* Sequence 4: Developer Metadata Line (460ms) */}
        <div
          style={{ transitionDelay: "460ms" }}
          className={`flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-[var(--muted)] pb-8 border-b border-[var(--border)]/60 transition-all duration-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span>Location: {personalInfo.location}</span>
          </div>
          <div>&bull;</div>
          <div className="flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-slate-400" />
            <span>Status: Ready for Engineering Roles &amp; Collaborations</span>
          </div>
        </div>

        {/* Sequence 5: Technical Workspace Status (540ms) */}
        <div
          style={{ transitionDelay: "540ms" }}
          className={`pt-8 transition-all duration-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <div className="text-[11px] font-mono uppercase tracking-widest text-[var(--muted)] mb-3 flex items-center gap-2">
            <Code2 className="w-3.5 h-3.5 text-blue-400" />
            <span>DEVELOPER WORKSPACE STATUS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
            {/* Box 1 */}
            <div className="tech-card-lift p-4 rounded bg-[var(--surface-card)] border border-[var(--border)]">
              <span className="text-[10px] uppercase text-blue-400 font-semibold tracking-wider block mb-1">
                CURRENTLY BUILDING
              </span>
              <p className="font-semibold text-[var(--foreground)]">
                AI Clinic
              </p>
              <p className="text-[11px] text-[var(--muted)] mt-1 font-sans">
                Fast patient-record retrieval and management platform for healthcare clinics.
              </p>
            </div>

            {/* Box 2 */}
            <div className="tech-card-lift p-4 rounded bg-[var(--surface-card)] border border-[var(--border)]">
              <span className="text-[10px] uppercase text-emerald-400 font-semibold tracking-wider block mb-1">
                RECENTLY IMPLEMENTED
              </span>
              <p className="font-semibold text-[var(--foreground)]">
                Myers Diff Algorithm
              </p>
              <p className="text-[11px] text-[var(--muted)] mt-1 font-sans">
                Python sequence difference engine with character &amp; line diffs and CLI test suite.
              </p>
            </div>

            {/* Box 3 */}
            <div className="tech-card-lift p-4 rounded bg-[var(--surface-card)] border border-[var(--border)]">
              <span className="text-[10px] uppercase text-slate-400 font-semibold tracking-wider block mb-1">
                FOCUS AREAS
              </span>
              <p className="font-semibold text-[var(--foreground)]">
                Systems &bull; Algorithms &bull; AI
              </p>
              <p className="text-[11px] text-[var(--muted)] mt-1 font-sans">
                Full-stack web architecture, strictly typed codebases, APIs, and intelligent integrations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
