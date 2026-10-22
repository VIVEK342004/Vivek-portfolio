"use client";

import React from "react";
import { personalInfo } from "@/data/personal";
import { Download, ExternalLink } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function Resume() {
  return (
    <section
      id="resume"
      aria-label="Resume and Credentials"
      className="py-16 sm:py-20 border-b border-[var(--border)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          {/* Monospace Section Identifier */}
          <div className="section-badge mb-3">07 / RESUME</div>

          <div className="tech-card-lift p-7 sm:p-8 rounded bg-[var(--surface-card)] border border-[var(--border)] max-w-3xl">
            <div className="space-y-3 mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)]">
                Curriculum Vitae
              </h2>
              <p className="text-sm font-mono text-blue-400">
                Software Developer &bull; Systems &bull; Full-Stack &bull; Algorithms
              </p>
              <p className="text-sm text-[var(--muted)] leading-relaxed font-sans">
                View my complete educational background, verified engineering projects, technical stack proficiencies, and coursework.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-arrow-slide inline-flex items-center gap-2 px-4 py-2.5 rounded bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all hover:-translate-y-0.5"
              >
                <ExternalLink className="w-3.5 h-3.5 arrow-icon" />
                <span>View Resume (PDF)</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Vivek_Kumar_Resume.pdf"
                className="btn-arrow-slide inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[var(--surface)] hover:bg-[var(--surface-hover)] border border-[var(--border)] text-[var(--foreground)] transition-all hover:-translate-y-0.5"
              >
                <Download className="w-3.5 h-3.5 arrow-icon" />
                <span>Download PDF</span>
              </a>
            </div>

            <div className="mt-4 pt-4 border-t border-[var(--border)]/60 text-[11px] font-mono text-[var(--muted)] flex items-center justify-between">
              <div>
                <span>Path: </span>
                <code className="text-slate-300">public/resume.pdf</code>
              </div>
              <span className="text-emerald-400">&bull; ready</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
