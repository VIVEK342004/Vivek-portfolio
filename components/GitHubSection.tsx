"use client";

import React from "react";
import { githubData } from "@/data/github";
import { Star, GitFork, ArrowUpRight, Code } from "lucide-react";
import { GithubIcon } from "./Icons";
import { ScrollReveal } from "./ScrollReveal";

export function GitHubSection() {
  return (
    <section
      id="github"
      aria-label="Engineering Activity and GitHub"
      className="py-16 sm:py-20 border-b border-[var(--border)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          {/* Monospace Section Identifier */}
          <div className="section-badge mb-3">04 / ENGINEERING ACTIVITY</div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)] mb-2">
                Developer Activity &amp; Repositories
              </h2>
              <p className="text-sm text-[var(--muted)] max-w-xl">
                Code repositories, technical investigations, and current engineering focus areas.
              </p>
            </div>

            <a
              href={githubData.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-arrow-slide inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-mono font-medium text-[var(--foreground)] bg-[var(--surface-card)] hover:bg-[var(--surface-hover)] border border-[var(--border)] transition-all hover:-translate-y-0.5"
            >
              <GithubIcon className="w-3.5 h-3.5 transition-transform hover:-rotate-6" />
              <span>github.com/{githubData.username}</span>
              <ArrowUpRight className="w-3 h-3 text-[var(--muted)] arrow-icon" />
            </a>
          </div>
        </ScrollReveal>

        {/* Top: Current Engineering Radar with Staggered Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 font-mono text-xs">
          <ScrollReveal delayMs={50}>
            <div className="tech-card-lift p-4 rounded bg-[var(--surface-card)] border border-[var(--border)] h-full">
              <span className="text-[10px] text-blue-400 font-semibold uppercase block mb-1">
                CURRENTLY BUILDING
              </span>
              <span className="font-bold text-[var(--foreground)] block">Drive-Your-Self</span>
              <p className="text-[11px] text-[var(--muted)] font-sans mt-1">
                DSA problem practice platform with streak analytics and personal notes.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={100}>
            <div className="tech-card-lift p-4 rounded bg-[var(--surface-card)] border border-[var(--border)] h-full">
              <span className="text-[10px] text-emerald-400 font-semibold uppercase block mb-1">
                RECENTLY COMPLETED
              </span>
              <span className="font-bold text-[var(--foreground)] block">ImageEditor (OpenCV)</span>
              <p className="text-[11px] text-[var(--muted)] font-sans mt-1">
                Flask computer vision app with face detection, OCR, and filters.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={150}>
            <div className="tech-card-lift p-4 rounded bg-[var(--surface-card)] border border-[var(--border)] h-full">
              <span className="text-[10px] text-indigo-400 font-semibold uppercase block mb-1">
                CURRENTLY STUDYING
              </span>
              <span className="font-bold text-[var(--foreground)] block">Advanced DSA &amp; ML</span>
              <p className="text-[11px] text-[var(--muted)] font-sans mt-1">
                Graph algorithms, DP, machine learning models, and system architecture.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={200}>
            <div className="tech-card-lift p-4 rounded bg-[var(--surface-card)] border border-[var(--border)] h-full">
              <span className="text-[10px] text-slate-400 font-semibold uppercase block mb-1">
                TECHNICAL INTERESTS
              </span>
              <span className="font-bold text-[var(--foreground)] block">AI/ML &bull; Vision &bull; Web</span>
              <p className="text-[11px] text-[var(--muted)] font-sans mt-1">
                Document intelligence, vector search, Flask APIs, and interactive UIs.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom: Curated GitHub Repositories with Staggered Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
          {githubData.pinnedRepos.map((repo, idx) => (
            <ScrollReveal key={repo.name} delayMs={idx * 80}>
              <div
                className="tech-card-lift p-5 rounded bg-[var(--surface-card)] border border-[var(--border)] flex flex-col justify-between h-full group"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[var(--foreground)] hover:text-blue-400 transition-colors flex items-center gap-1.5"
                    >
                      <Code className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 transition-transform group-hover:rotate-6" />
                      <span>{repo.name}</span>
                    </a>
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open repository ${repo.name}`}
                      className="text-[var(--muted)] hover:text-[var(--foreground)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <p className="text-xs font-sans text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-4">
                    {repo.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--border)]/60 flex items-center justify-between text-[11px] text-[var(--muted)]">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: repo.languageColor }}
                    />
                    <span>{repo.language}</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 transition-colors hover:text-amber-400">
                      <Star className="w-3 h-3 text-amber-400" />
                      <span>{repo.stars}</span>
                    </span>
                    <span className="flex items-center gap-1 transition-colors hover:text-blue-400">
                      <GitFork className="w-3 h-3 text-blue-400" />
                      <span>{repo.forks}</span>
                    </span>
                    <span className="text-[10px] hidden sm:inline">{repo.updatedAt}</span>
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
