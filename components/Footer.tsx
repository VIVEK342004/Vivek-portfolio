"use client";

import React from "react";
import { personalInfo } from "@/data/personal";
import { ScrollReveal } from "./ScrollReveal";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] py-8 font-mono text-xs relative overflow-hidden">
      <ScrollReveal className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-bold text-[var(--foreground)] tracking-tight">
              {personalInfo.name}
            </span>
            <span className="text-[var(--muted)] ml-2">/ Software Developer</span>
          </div>

          <div className="flex items-center gap-5 text-[var(--muted)]">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--foreground)] transition-colors"
            >
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-emerald-400 transition-colors"
            >
              Email
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              Resume
            </a>
          </div>

          <div className="text-[var(--muted)] text-[11px]">
            © 2026 Vivek Kumar
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}
