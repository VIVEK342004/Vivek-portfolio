"use client";

import React, { useState } from "react";
import { projects, Project } from "@/data/projects";
import { personalInfo } from "@/data/personal";
import { ProjectModal } from "./ProjectModal";
import { ArrowRight, ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";
import { ScrollReveal } from "./ScrollReveal";

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeProjectIdx, setActiveProjectIdx] = useState<number>(1);

  const openCaseStudy = (proj: Project, idx: number) => {
    setActiveProject(proj);
    setActiveProjectIdx(idx + 1);
  };

  return (
    <section
      id="projects"
      aria-label="Software Engineering Projects"
      className="py-16 sm:py-20 border-b border-[var(--border)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          {/* Monospace Section Identifier */}
          <div className="section-badge mb-3">03 / PROJECTS</div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)] mb-2">
                Featured Engineering Projects
              </h2>
              <p className="text-sm text-[var(--muted)] max-w-2xl">
                Production systems, algorithmic tools, and architectures designed with clean code, testing, and real-world utility.
              </p>
            </div>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-arrow-slide inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>github.com/VIVEK342004</span>
              <ArrowUpRight className="w-3.5 h-3.5 arrow-icon" />
            </a>
          </div>
        </ScrollReveal>

        {/* Engineering Projects List with Staggered ScrollReveal */}
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <ScrollReveal key={project.id} delayMs={idx * 100}>
              <article
                className="tech-card-lift p-6 sm:p-7 rounded bg-[var(--surface-card)] border border-[var(--border)] transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  {/* Left: Project Specs */}
                  <div className="space-y-4 flex-1">
                    {/* Top Metadata Line */}
                    <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                      <span className="text-blue-400 font-bold">
                        PROJECT / 0{idx + 1}
                      </span>
                      <span className="text-[var(--border)]">|</span>
                      <span className="px-2 py-0.5 rounded bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)]">
                        {project.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-blue-400 mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed max-w-3xl">
                      {project.description}
                    </p>

                    {/* Problem & Approach Technical Blocks */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1 text-xs">
                      <div className="p-3 rounded bg-[var(--surface)] border border-[var(--border)] transition-colors hover:border-slate-700">
                        <span className="font-mono text-[10px] text-rose-400 font-semibold uppercase block mb-1">
                          Problem
                        </span>
                        <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 line-clamp-2">
                          {project.problem}
                        </p>
                      </div>

                      <div className="p-3 rounded bg-[var(--surface)] border border-[var(--border)] transition-colors hover:border-slate-700">
                        <span className="font-mono text-[10px] text-emerald-400 font-semibold uppercase block mb-1">
                          Solution Approach
                        </span>
                        <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 line-clamp-2">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Tech stack tags with micro-interaction */}
                    <div className="pt-2 font-mono text-xs">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="skill-tag-lift px-2 py-0.5 rounded bg-[var(--surface)] text-slate-300 border border-[var(--border)] text-[11px]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Actions Column with button hover transitions */}
                  <div className="flex lg:flex-col items-center lg:items-end justify-start gap-2.5 pt-2 lg:pt-0 font-mono text-xs border-t lg:border-t-0 border-[var(--border)]/60">
                    <button
                      type="button"
                      onClick={() => openCaseStudy(project, idx)}
                      className="btn-arrow-slide inline-flex items-center gap-1.5 px-3.5 py-2 rounded bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all hover:-translate-y-0.5"
                    >
                      <span>Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 arrow-icon" />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-[var(--surface)] hover:bg-[var(--surface-hover)] border border-[var(--border)] text-[var(--foreground)] transition-all hover:-translate-y-0.5"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Source</span>
                    </a>

                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-[var(--surface)] hover:bg-[var(--surface-hover)] border border-[var(--border)] text-emerald-400 transition-all hover:-translate-y-0.5"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Engineering Case Study Modal */}
      <ProjectModal
        project={activeProject}
        projectIndex={activeProjectIdx}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
