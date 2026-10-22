"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo } from "@/data/personal";

interface NavItem {
  name: string;
  href: string;
  code: string;
}

const navItems: NavItem[] = [
  { name: "About", href: "#about", code: "01" },
  { name: "Skills", href: "#skills", code: "02" },
  { name: "Projects", href: "#projects", code: "03" },
  { name: "Experience", href: "#experience", code: "04" },
  { name: "Contact", href: "#contact", code: "05" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["about", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "h-13 py-2 bg-[var(--background)]/95 backdrop-blur-md border-b border-[var(--border)] shadow-sm shadow-black/5"
          : "h-15 py-3.5 bg-[var(--background)]/80 backdrop-blur-sm border-b border-[var(--border)]/50"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Developer identity brand */}
          <Link
            href="/#home"
            className="group flex items-center gap-2 font-mono text-sm tracking-tight text-[var(--foreground)] hover:text-blue-400 transition-colors focus:outline-none"
            aria-label="Vivek Kumar - Software Developer Home"
          >
            <span className="text-blue-500 font-bold transition-transform group-hover:translate-x-0.5">&gt;</span>
            <span className="font-semibold tracking-normal text-sm">vivek.dev</span>
            <span className="text-xs text-[var(--muted)] font-normal hidden sm:inline">
              / engineer
            </span>
          </Link>

          {/* Desktop Navigation Links with animated active indicator */}
          <nav className="hidden md:flex items-center gap-1 relative" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-1 text-xs font-mono transition-colors rounded ${
                    isActive
                      ? "text-blue-400 font-semibold bg-blue-500/10"
                      : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-hover)]/60"
                  }`}
                >
                  <span className="text-[10px] opacity-60 mr-1.5">{item.code}.</span>
                  <span>{item.name}</span>
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-blue-500 rounded-full transition-all duration-300"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Tools & Links */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
              aria-label="GitHub Profile"
              className="p-1.5 rounded text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-hover)] transition-all hover:-translate-y-0.5"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
              className="p-1.5 rounded text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-hover)] transition-all hover:-translate-y-0.5"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-arrow-slide inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono font-medium text-[var(--foreground)] bg-[var(--surface-card)] hover:bg-[var(--surface-hover)] border border-[var(--border)] transition-all hover:-translate-y-0.5"
            >
              <FileText className="w-3 h-3 text-blue-400" />
              <span>cv</span>
              <ArrowUpRight className="w-2.5 h-2.5 opacity-60 arrow-icon" />
            </a>

            <ThemeToggle />
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[var(--muted)] hover:text-[var(--foreground)] rounded border border-[var(--border)] transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-[var(--border)] bg-[var(--surface)] px-4 py-4 space-y-2 font-mono text-xs shadow-xl animate-fade-in">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[var(--foreground)] hover:text-blue-400 border-b border-[var(--border)]/40 transition-colors"
            >
              <span className="text-blue-500 mr-2">{item.code}.</span>
              {item.name}
            </a>
          ))}
          <div className="pt-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[var(--muted)] hover:text-[var(--foreground)] flex items-center gap-1"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>github</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[var(--muted)] hover:text-[var(--foreground)] flex items-center gap-1"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>linkedin</span>
              </a>
            </div>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded text-xs font-mono bg-blue-600 text-white font-medium"
            >
              resume.pdf
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
