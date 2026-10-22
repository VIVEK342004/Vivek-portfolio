"use client";

import React from "react";
import { experiences } from "@/data/experience";
import { ScrollReveal } from "./ScrollReveal";

export function Experience() {
  return (
    <section
      id="experience"
      aria-label="Development Experience Timeline"
      className="py-16 sm:py-20 border-b border-[var(--border)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          {/* Monospace Section Identifier */}
          <div className="section-badge mb-3">05 / EXPERIENCE</div>

          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)] mb-2">
              Development &amp; Engineering Timeline
            </h2>
            <p className="text-sm text-[var(--muted)]">
              Chronological overview of technical project engineering, open-source work, and development roles.
            </p>
          </div>
        </ScrollReveal>

        {/* Clean Vertical Timeline with Sequential Stagger */}
        <div className="space-y-6">
          {experiences.map((item, idx) => (
            <ScrollReveal key={item.id} delayMs={idx * 90}>
              <div
                className="tech-card-lift p-6 rounded bg-[var(--surface-card)] border border-[var(--border)] hover:border-slate-700 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3 pb-3 border-b border-[var(--border)] font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-[var(--foreground)]">
                      {item.role}
                    </span>
                    <span className="text-[var(--border)]">|</span>
                    <span className="text-blue-400 font-semibold">
                      {item.organization}
                    </span>
                  </div>
                  <div className="text-[var(--muted)] flex items-center gap-3">
                    <span>{item.period}</span>
                    <span>&bull;</span>
                    <span>{item.location}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Technical Responsibilities */}
                <div className="space-y-1.5 mb-4">
                  <span className="text-[10px] font-mono uppercase text-[var(--muted)] font-semibold block">
                    Responsibilities &amp; Technical Scope:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                    {item.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 transition-transform hover:translate-x-1 duration-150">
                        <span className="text-blue-400 font-mono mt-0.5">&gt;</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools & Outcome Footer */}
                <div className="pt-3 border-t border-[var(--border)]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="skill-tag-lift px-2 py-0.5 rounded bg-[var(--surface)] text-slate-300 border border-[var(--border)] text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="text-emerald-400 text-[11px] font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{item.keyOutcome}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
