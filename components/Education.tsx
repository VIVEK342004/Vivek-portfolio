"use client";

import React from "react";
import { educationList } from "@/data/education";
import { ScrollReveal } from "./ScrollReveal";

export function Education() {
  return (
    <section
      id="education"
      aria-label="Academic Background"
      className="py-16 sm:py-20 border-b border-[var(--border)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          {/* Monospace Section Identifier */}
          <div className="section-badge mb-3">06 / EDUCATION</div>

          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)] mb-2">
              Academic Background
            </h2>
            <p className="text-sm text-[var(--muted)]">
              Formal studies in computer science, core algorithms, and engineering fundamentals.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationList.map((item, idx) => (
            <ScrollReveal key={item.id} delayMs={idx * 100}>
              <div
                className="tech-card-lift p-6 rounded bg-[var(--surface-card)] border border-[var(--border)] flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--border)] font-mono text-xs text-[var(--muted)]">
                    <span className="text-blue-400 font-semibold">{item.period}</span>
                    <span>{item.isCurrent ? "IN PROGRESS" : "COMPLETED"}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[var(--foreground)] tracking-tight">
                    {item.degree}
                  </h3>
                  <h4 className="text-xs font-mono text-blue-400 mb-1">
                    {item.field}
                  </h4>
                  <p className="text-xs text-[var(--muted)] mb-5">
                    {item.institution} &bull; {item.location}
                  </p>

                  {/* Coursework list */}
                  <div className="space-y-2 mb-4">
                    <span className="text-[10px] font-mono uppercase text-[var(--muted)] font-semibold block">
                      Core Coursework:
                    </span>
                    <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                      {item.coursework.map((course) => (
                        <span
                          key={course}
                          className="skill-tag-lift px-2 py-0.5 rounded bg-[var(--surface)] border border-[var(--border)] text-slate-300 dark:text-slate-300 light:text-slate-700 text-[11px]"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {item.achievements && item.achievements.length > 0 && (
                  <div className="pt-3 border-t border-[var(--border)]/60 text-xs text-[var(--muted)]">
                    <span className="text-[10px] font-mono uppercase text-[var(--muted)] font-semibold block mb-1">
                      Notes:
                    </span>
                    <ul className="space-y-1">
                      {item.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-blue-400 font-mono">&bull;</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
