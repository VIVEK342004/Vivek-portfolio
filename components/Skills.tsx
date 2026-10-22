"use client";

import React from "react";
import { skillCategories } from "@/data/skills";
import { ScrollReveal } from "./ScrollReveal";

export function Skills() {
  return (
    <section
      id="skills"
      aria-label="Technical Skills and Stacks"
      className="py-16 sm:py-20 border-b border-[var(--border)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          {/* Monospace Section Identifier */}
          <div className="section-badge mb-3">02 / SKILLS</div>

          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)] mb-2">
              Technical Stacks &amp; Tooling
            </h2>
            <p className="text-sm text-[var(--muted)]">
              Categorized technical capabilities and tools used for building production-quality software.
            </p>
          </div>
        </ScrollReveal>

        {/* Categorized Stacks Grid with Staggered Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
          {skillCategories.map((category, idx) => (
            <ScrollReveal key={category.id} delayMs={idx * 70}>
              <div className="tech-card-lift p-5 rounded bg-[var(--surface-card)] border border-[var(--border)] flex flex-col justify-between h-full">
                <div>
                  {/* Category Header */}
                  <div className="pb-3 mb-4 border-b border-[var(--border)] flex items-center justify-between">
                    <h3 className="font-bold text-sm tracking-wide text-blue-400 uppercase">
                      {category.title}
                    </h3>
                    <span className="text-[10px] text-[var(--muted)] bg-[var(--surface)] px-1.5 py-0.5 rounded border border-[var(--border)]/50">
                      {category.skills.length} tools
                    </span>
                  </div>

                  {/* Skills list with interactive hover badges */}
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className="skill-tag-lift p-1.5 rounded bg-[var(--surface)]/50 border border-[var(--border)]/60 flex items-start justify-between gap-2 text-[var(--foreground)] cursor-default"
                      >
                        <span className="font-semibold text-xs text-slate-200 dark:text-slate-200 light:text-slate-800">
                          {skill.name}
                        </span>
                        {skill.description && (
                          <span className="text-[11px] text-[var(--muted)] font-sans text-right line-clamp-1">
                            {skill.description}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 pt-2.5 border-t border-[var(--border)]/60 text-[10px] text-[var(--muted)] flex justify-between items-center">
                  <span>domain: {category.id}</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>verified</span>
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
