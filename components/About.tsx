"use client";

import React, { useState, useEffect } from "react";
import { personalInfo } from "@/data/personal";
import { Terminal, Check, Folder } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function About() {
  const [terminalStep, setTerminalStep] = useState(0);

  useEffect(() => {
    // Quick sequential terminal typing sequence: completes in ~500ms
    const timer1 = setTimeout(() => setTerminalStep(1), 100);
    const timer2 = setTimeout(() => setTerminalStep(2), 250);
    const timer3 = setTimeout(() => setTerminalStep(3), 400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <section
      id="about"
      aria-label="About Vivek Kumar"
      className="py-16 sm:py-20 border-b border-[var(--border)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          {/* Monospace Section Identifier */}
          <div className="section-badge mb-3">01 / ABOUT</div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)] mb-6">
            Engineering Background &amp; Philosophy
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Narrative text with ScrollReveal */}
          <ScrollReveal delayMs={100} className="lg:col-span-7 space-y-4 text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed font-sans">
            <p>
              I am a Computer Science undergraduate at Sitare University with SRMU, Lucknow (Class of 2027), and a proud recipient of the prestigious 50% Sitare Foundation B.Tech CS Scholarship.
            </p>
            <p>
              Rather than building superficial prototypes, I focus on strong computational foundations: Advanced Data Structures &amp; Algorithms, Object-Oriented Programming (Java/Python), and practical systems. Projects like <strong className="text-[var(--foreground)] font-semibold">Drive-Your-Self</strong> (curated DSA practice &amp; streak tracking), <strong className="text-[var(--foreground)] font-semibold">AI_ML_Chatbot</strong> (document query platform), and <strong className="text-[var(--foreground)] font-semibold">ImageEditor</strong> (computer vision with OpenCV &amp; OCR) reflect my hands-on approach to engineering.
            </p>
            <p>
              My toolkit includes <span className="font-mono text-xs text-blue-400 bg-[var(--surface-card)] px-1.5 py-0.5 rounded border border-[var(--border)]">Python</span>, <span className="font-mono text-xs text-blue-400 bg-[var(--surface-card)] px-1.5 py-0.5 rounded border border-[var(--border)]">Java</span>, <span className="font-mono text-xs text-blue-400 bg-[var(--surface-card)] px-1.5 py-0.5 rounded border border-[var(--border)]">JavaScript</span>, <span className="font-mono text-xs text-blue-400 bg-[var(--surface-card)] px-1.5 py-0.5 rounded border border-[var(--border)]">React.js</span>, <span className="font-mono text-xs text-blue-400 bg-[var(--surface-card)] px-1.5 py-0.5 rounded border border-[var(--border)]">Flask</span>, and <span className="font-mono text-xs text-blue-400 bg-[var(--surface-card)] px-1.5 py-0.5 rounded border border-[var(--border)]">PostgreSQL</span>. I value automated tests, clean code architecture, and disciplined technical problem solving.
            </p>

            <div className="pt-4 border-t border-[var(--border)]/70">
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--muted)] font-semibold block mb-3">
                Core Engineering Habits:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[var(--foreground)]">
                <li className="flex items-center gap-2 transition-transform hover:translate-x-1 duration-150">
                  <Check className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                  <span>Modular component design</span>
                </li>
                <li className="flex items-center gap-2 transition-transform hover:translate-x-1 duration-150">
                  <Check className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                  <span>Algorithmic problem solving</span>
                </li>
                <li className="flex items-center gap-2 transition-transform hover:translate-x-1 duration-150">
                  <Check className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                  <span>Computer Vision &amp; AI integration</span>
                </li>
                <li className="flex items-center gap-2 transition-transform hover:translate-x-1 duration-150">
                  <Check className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                  <span>Git version control &amp; clean code</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Technical workstation spec sidebar with subtle sequential reveal */}
          <ScrollReveal delayMs={200} className="lg:col-span-5 font-mono text-xs">
            <div className="tech-card-lift rounded border border-[var(--border)] bg-[var(--surface-card)] overflow-hidden">
              <div className="px-3.5 py-2.5 bg-[var(--surface)] border-b border-[var(--border)] flex items-center justify-between text-[11px] text-[var(--muted)]">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3 h-3 text-blue-400" />
                  <span>developer_manifest.json</span>
                </span>
                <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>active</span>
                </span>
              </div>

              <div className="p-4 space-y-3">
                <div className={`transition-opacity duration-300 ${terminalStep >= 0 ? "opacity-100" : "opacity-0"}`}>
                  <span className="text-[var(--muted)] text-[10px] uppercase block">Current Degree &amp; Focus</span>
                  <span className="text-[var(--foreground)] font-semibold">B.Tech in Computer Science &bull; Sitare University (GPA: 7.1)</span>
                </div>

                <div className={`pt-2 border-t border-[var(--border)]/50 transition-opacity duration-300 ${terminalStep >= 1 ? "opacity-100" : "opacity-0"}`}>
                  <span className="text-[var(--muted)] text-[10px] uppercase block">Scholarship Merit</span>
                  <span className="text-emerald-400 font-semibold">50% B.Tech CS Scholarship &bull; Sitare Foundation</span>
                </div>

                <div className={`pt-2 border-t border-[var(--border)]/50 transition-opacity duration-300 ${terminalStep >= 2 ? "opacity-100" : "opacity-0"}`}>
                  <span className="text-[var(--muted)] text-[10px] uppercase block">Primary Stack</span>
                  <span className="text-blue-400">Python &bull; Java &bull; React.js &bull; Flask &bull; PostgreSQL</span>
                </div>

                <div className={`pt-2 border-t border-[var(--border)]/50 transition-opacity duration-300 ${terminalStep >= 3 ? "opacity-100" : "opacity-0"}`}>
                  <span className="text-[var(--muted)] text-[10px] uppercase block">Location &amp; Open Roles</span>
                  <span className="text-[var(--foreground)]">Lucknow, India &bull; Software Engineering Internships (2027)</span>
                </div>
              </div>

              <div className="px-3.5 py-2 bg-[var(--surface)]/60 border-t border-[var(--border)] text-[10px] text-[var(--muted)] flex items-center gap-1.5">
                <Folder className="w-3 h-3 text-slate-400" />
                <span>vivek-portfolio/01-about</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
