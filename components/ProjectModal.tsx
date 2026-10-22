"use client";

import React, { useEffect, useState } from "react";
import { Project } from "@/data/projects";
import { X, ExternalLink, ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { GithubIcon } from "./Icons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  projectIndex?: number;
}

export function ProjectModal({ project, onClose, projectIndex = 1 }: ProjectModalProps) {
  const [archStep, setArchStep] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);

      // Sequential Architecture flow animation
      setArchStep(1);
      const timer1 = setTimeout(() => setArchStep(2), 220);
      const timer2 = setTimeout(() => setArchStep(3), 440);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isClinic = project.id === "ai-clinic";
  const isDiff = project.id === "myers-diff-algorithm";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[var(--surface-card)] border border-[var(--border)] rounded-lg shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col font-sans animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal / Code header */}
        <div className="sticky top-0 z-10 px-5 py-3 bg-[var(--surface)] border-b border-[var(--border)] flex items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="text-blue-400 font-bold">PROJECT / 0{projectIndex}</span>
            <span className="text-[var(--border)]">|</span>
            <span className="text-[var(--muted)]">{project.title.toLowerCase().replace(/\s+/g, "-")}.spec</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project modal"
            className="p-1 rounded text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-hover)] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-7 text-xs sm:text-sm">
          {/* Header */}
          <div>
            <div className="font-mono text-[11px] text-blue-400 uppercase tracking-wider mb-1">
              Engineering Case Study
            </div>
            <h2
              id="case-study-title"
              className="text-2xl sm:text-3xl font-extrabold text-[var(--foreground)] tracking-tight mb-2"
            >
              {project.title}
            </h2>
            <p className="text-sm font-mono text-slate-300 dark:text-slate-300 light:text-slate-700">
              {project.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-4 font-mono text-xs">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[var(--surface)] hover:bg-[var(--surface-hover)] border border-[var(--border)] text-[var(--foreground)] transition-colors hover:-translate-y-0.5"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>source_code</span>
              </a>
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors hover:-translate-y-0.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>live_preview</span>
                </a>
              )}
            </div>
          </div>

          {/* 1. Problem */}
          <div className="p-4 rounded bg-[var(--surface)] border border-[var(--border)]">
            <span className="font-mono text-[11px] uppercase tracking-wider text-rose-400 font-semibold block mb-1">
              01 // THE PROBLEM
            </span>
            <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-xs sm:text-sm">
              {project.problem}
            </p>
          </div>

          {/* 2. Solution & Approach */}
          <div className="p-4 rounded bg-[var(--surface)] border border-[var(--border)]">
            <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-400 font-semibold block mb-1">
              02 // ENGINEERING APPROACH
            </span>
            <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-xs sm:text-sm">
              {project.solution}
            </p>
          </div>

          {/* 3. Interactive Architecture Flow Diagram with Sequential Animation */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--muted)] font-semibold">
                03 // SYSTEM ARCHITECTURE &amp; DATA FLOW
              </span>
              <span className="font-mono text-[10px] text-blue-400">
                animated execution: {archStep}/3
              </span>
            </div>

            {/* Interactive Architecture Flow Stepper */}
            <div className="space-y-2 mb-3">
              <div
                className={`p-3 rounded border font-mono text-xs transition-all duration-300 ${
                  archStep >= 1
                    ? "bg-blue-600/10 border-blue-500/50 text-blue-300 translate-x-1"
                    : "bg-[var(--surface)] border-[var(--border)] text-[var(--muted)]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold">1. Client Interface (Frontend Layer)</span>
                  <span className="text-[10px] opacity-75">{project.technologies[0] || "Client"} / UI</span>
                </div>
                <p className="text-[11px] font-sans opacity-90 mt-0.5">
                  Responsive UI handling user actions, query validation, and interactive state management.
                </p>
              </div>

              <div className="flex justify-center text-blue-500">
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${archStep >= 2 ? "translate-y-0.5 opacity-100" : "opacity-30"}`} />
              </div>

              <div
                className={`p-3 rounded border font-mono text-xs transition-all duration-300 ${
                  archStep >= 2
                    ? "bg-blue-600/10 border-blue-500/50 text-blue-300 translate-x-1"
                    : "bg-[var(--surface)] border-[var(--border)] text-[var(--muted)]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold">2. Service Gateway &amp; Processing</span>
                  <span className="text-[10px] opacity-75">
                    {project.technologies.includes("Flask")
                      ? "Flask REST API"
                      : project.technologies.includes("Node.js")
                      ? "Node.js API"
                      : "Core Computational Engine"}
                  </span>
                </div>
                <p className="text-[11px] font-sans opacity-90 mt-0.5">
                  {project.architecture || "Business logic routing, session authentication, and core computation."}
                </p>
              </div>

              <div className="flex justify-center text-blue-500">
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${archStep >= 3 ? "translate-y-0.5 opacity-100" : "opacity-30"}`} />
              </div>

              <div
                className={`p-3 rounded border font-mono text-xs transition-all duration-300 ${
                  archStep >= 3
                    ? "bg-blue-600/10 border-blue-500/50 text-blue-300 translate-x-1"
                    : "bg-[var(--surface)] border-[var(--border)] text-[var(--muted)]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold">3. Persistence &amp; Execution</span>
                  <span className="text-[10px] opacity-75">
                    {project.technologies.includes("PostgreSQL")
                      ? "PostgreSQL Relational DB"
                      : project.technologies.includes("OpenCV")
                      ? "OpenCV / NumPy Pipelines"
                      : project.technologies.includes("Vector Database")
                      ? "Vector Database & LLM"
                      : "Storage & File Exports"}
                  </span>
                </div>
                <p className="text-[11px] font-sans opacity-90 mt-0.5">
                  {project.results || "Data persistence, query caching, and verified test execution."}
                </p>
              </div>
            </div>

            {project.architecture && (
              <p className="text-xs text-[var(--muted)] mt-2 font-mono">
                Notes: {project.architecture}
              </p>
            )}
          </div>

          {/* 4. Technologies Used */}
          <div>
            <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--muted)] font-semibold block mb-2">
              04 // TECHNOLOGIES &amp; LIBRARIES
            </span>
            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded bg-[var(--surface)] text-slate-300 border border-[var(--border)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 5. Key Features */}
          <div>
            <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--muted)] font-semibold block mb-2">
              05 // KEY CAPABILITIES
            </span>
            <div className="space-y-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Challenges & Testing */}
          {(project.developmentChallenges || project.testing) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              {project.developmentChallenges && (
                <div className="p-3.5 rounded bg-[var(--surface)] border border-[var(--border)]">
                  <span className="text-[10px] uppercase text-[var(--muted)] font-bold block mb-2">
                    06 // CHALLENGES
                  </span>
                  <ul className="space-y-1.5 text-slate-300">
                    {project.developmentChallenges.map((c, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-blue-400">&gt;</span>
                        <span className="font-sans text-xs">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.testing && (
                <div className="p-3.5 rounded bg-[var(--surface)] border border-[var(--border)]">
                  <span className="text-[10px] uppercase text-[var(--muted)] font-bold block mb-2">
                    07 // TESTING STRATEGY
                  </span>
                  <ul className="space-y-1.5 text-slate-300">
                    {project.testing.map((t, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-400">&check;</span>
                        <span className="font-sans text-xs">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* 7. Results */}
          {project.results && (
            <div className="p-3.5 rounded bg-[var(--surface)] border border-blue-500/30 font-mono text-xs">
              <span className="text-[10px] uppercase text-blue-400 font-bold block mb-1">
                08 // VERIFIED OUTCOME
              </span>
              <p className="text-slate-200 font-sans text-xs sm:text-sm">
                {project.results}
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 bg-[var(--surface)] border-t border-[var(--border)] flex justify-between items-center font-mono text-xs">
          <span className="text-[10px] text-[var(--muted)]">status: complete &bull; open source</span>
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1.5 rounded bg-[var(--surface-card)] hover:bg-[var(--surface-hover)] border border-[var(--border)] text-xs text-[var(--foreground)] transition-colors"
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
}
