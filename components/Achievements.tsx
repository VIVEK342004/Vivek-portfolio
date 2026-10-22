"use client";

import React, { useState } from "react";
import { achievementsList } from "@/data/achievements";
import { Trophy, Calendar, ExternalLink, Award, Sparkles } from "lucide-react";

export function Achievements() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    "all",
    "Coding & Algorithms",
    "Hackathons",
    "Certifications",
  ];

  const filtered =
    selectedCategory === "all"
      ? achievementsList
      : achievementsList.filter((a) => a.category === selectedCategory);

  return (
    <section
      id="achievements"
      aria-label="Achievements, Certifications and Milestones"
      className="py-20 border-t border-[var(--border)] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-500/10 text-blue-500 text-xs font-semibold uppercase tracking-wider mb-3">
              <Trophy className="w-3.5 h-3.5" />
              <span>Milestones & Recognition</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--foreground)] mb-2">
              Achievements & Certifications
            </h2>
            <p className="text-sm text-[var(--muted)] max-w-xl">
              Competitive coding milestones, hackathon participation, and technical assessments.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-[var(--surface-card)] text-[var(--muted)] hover:text-[var(--foreground)] border border-[var(--border)]"
                }`}
              >
                {cat === "all" ? "All Milestones" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-[var(--surface-card)] border border-[var(--border)] p-6 flex flex-col justify-between card-glass"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[var(--muted)] font-mono">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[var(--foreground)] mb-1">
                  {item.title}
                </h3>
                <h4 className="text-xs font-semibold text-blue-400 mb-3">
                  {item.organization}
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border)]/70 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-amber-400 font-medium">
                  <Award className="w-4 h-4" />
                  <span>{item.badgeText || "Milestone"}</span>
                </div>

                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>View Link</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-[var(--muted)]">Verified Entry</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
