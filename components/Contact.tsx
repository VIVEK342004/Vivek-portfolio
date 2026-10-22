"use client";

import React, { useState } from "react";
import { personalInfo } from "@/data/personal";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Terminal,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { ScrollReveal } from "./ScrollReveal";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = (data: FormState): FormErrors => {
    const errs: FormErrors = {};
    if (!data.name.trim()) {
      errs.name = "Name is required.";
    } else if (data.name.trim().length < 2) {
      errs.name = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
      errs.email = "Email is required.";
    } else if (!emailRegex.test(data.email.trim())) {
      errs.email = "Invalid email format.";
    }

    if (!data.subject.trim()) {
      errs.subject = "Subject is required.";
    } else if (data.subject.trim().length < 3) {
      errs.subject = "Subject must be at least 3 characters.";
    }

    if (!data.message.trim()) {
      errs.message = "Message is required.";
    } else if (data.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters.";
    }

    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const fieldErrors = validate({ ...formData, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: fieldErrors[name as keyof FormErrors] }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldErrors = validate(formData);
    setErrors((prev) => ({ ...prev, [name]: fieldErrors[name as keyof FormErrors] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("loading");
    setServerMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setServerMessage(data.message || "Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTouched({});
      } else {
        setStatus("error");
        setServerMessage(data.error || "Failed to send message.");
      }
    } catch {
      setStatus("error");
      setServerMessage("Network error. Please reach out via email directly.");
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section
      id="contact"
      aria-label="Developer Contact Endpoint"
      className="py-16 sm:py-20 border-b border-[var(--border)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          {/* Monospace Section Identifier */}
          <div className="section-badge mb-3">08 / CONTACT</div>

          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)] mb-2">
              Let&apos;s build something useful.
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              If you&apos;re looking for a developer, collaborator, or someone interested in building software, feel free to reach out.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Endpoints & Channels */}
          <ScrollReveal delayMs={100} className="lg:col-span-5 space-y-4 font-mono text-xs">
            {/* Email endpoint */}
            <div className="tech-card-lift p-4 rounded bg-[var(--surface-card)] border border-[var(--border)] flex items-start justify-between gap-3 group">
              <div>
                <span className="text-[10px] text-[var(--muted)] uppercase tracking-wider block mb-1">
                  EMAIL ENDPOINT
                </span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm font-semibold text-[var(--foreground)] hover:text-blue-400 transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                title="Copy email address"
                className="p-1.5 rounded bg-[var(--surface)] hover:bg-[var(--surface-hover)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] transition-colors flex-shrink-0"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Phone & WhatsApp endpoint */}
            <div className="tech-card-lift p-4 rounded bg-[var(--surface-card)] border border-[var(--border)] flex items-start justify-between gap-3 group">
              <div>
                <span className="text-[10px] text-[var(--muted)] uppercase tracking-wider block mb-1">
                  PHONE / WHATSAPP
                </span>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-sm font-semibold text-[var(--foreground)] hover:text-emerald-400 transition-colors"
                >
                  {personalInfo.phoneFormatted}
                </a>
                <div className="flex items-center gap-2 mt-1 text-[11px] text-[var(--muted)]">
                  <a
                    href="https://wa.me/918979261332"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline transition-colors"
                  >
                    Direct WhatsApp &rarr;
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={copyPhone}
                title="Copy phone number"
                className="p-1.5 rounded bg-[var(--surface)] hover:bg-[var(--surface-hover)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] transition-colors flex-shrink-0"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* GitHub */}
            <div className="tech-card-lift p-4 rounded bg-[var(--surface-card)] border border-[var(--border)] flex items-center justify-between group">
              <div>
                <span className="text-[10px] text-[var(--muted)] uppercase tracking-wider block mb-1">
                  GITHUB
                </span>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[var(--foreground)] hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <GithubIcon className="w-4 h-4 transition-transform group-hover:-rotate-6" />
                  <span>github.com/VIVEK342004</span>
                </a>
              </div>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted)] hover:text-[var(--foreground)] transition-transform group-hover:translate-x-0.5"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* LinkedIn */}
            <div className="tech-card-lift p-4 rounded bg-[var(--surface-card)] border border-[var(--border)] flex items-center justify-between group">
              <div>
                <span className="text-[10px] text-[var(--muted)] uppercase tracking-wider block mb-1">
                  LINKEDIN
                </span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[var(--foreground)] hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <LinkedinIcon className="w-4 h-4 transition-transform group-hover:-rotate-6" />
                  <span>linkedin.com/in/vivek342004</span>
                </a>
              </div>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted)] hover:text-[var(--foreground)] transition-transform group-hover:translate-x-0.5"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>

          {/* Right Column: Direct Message Form with animation */}
          <ScrollReveal delayMs={200} className="lg:col-span-7">
            <div className="tech-card-lift p-6 rounded bg-[var(--surface-card)] border border-[var(--border)]">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[var(--border)] font-mono text-xs text-[var(--muted)]">
                <Terminal className="w-3.5 h-3.5 text-blue-400" />
                <span>send_message.sh</span>
              </div>

              {status === "success" && (
                <div className="mb-4 p-3 rounded bg-emerald-500/10 border border-emerald-500/30 font-mono text-xs text-emerald-400 flex items-center gap-2 animate-fade-in">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>{serverMessage}</span>
                </div>
              )}

              {status === "error" && (
                <div className="mb-4 p-3 rounded bg-rose-500/10 border border-rose-500/30 font-mono text-xs text-rose-400 flex items-center gap-2 animate-fade-in">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{serverMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4 text-xs font-mono">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-[var(--muted)] uppercase text-[10px] mb-1">
                      name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Jane Doe"
                      className="w-full px-3 py-2 rounded bg-[var(--surface)] text-[var(--foreground)] border border-[var(--border)] focus:border-blue-500 focus:outline-none transition-colors"
                    />
                    {errors.name && <p className="text-rose-400 text-[10px] mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-[var(--muted)] uppercase text-[10px] mb-1">
                      email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="jane@example.com"
                      className="w-full px-3 py-2 rounded bg-[var(--surface)] text-[var(--foreground)] border border-[var(--border)] focus:border-blue-500 focus:outline-none transition-colors"
                    />
                    {errors.email && <p className="text-rose-400 text-[10px] mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-[var(--muted)] uppercase text-[10px] mb-1">
                    subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Engineering Role / Project Inquiry"
                    className="w-full px-3 py-2 rounded bg-[var(--surface)] text-[var(--foreground)] border border-[var(--border)] focus:border-blue-500 focus:outline-none transition-colors"
                  />
                  {errors.subject && <p className="text-rose-400 text-[10px] mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[var(--muted)] uppercase text-[10px] mb-1">
                    message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Hello Vivek, I reviewed your projects and would like to connect regarding..."
                    className="w-full px-3 py-2 rounded bg-[var(--surface)] text-[var(--foreground)] border border-[var(--border)] focus:border-blue-500 focus:outline-none resize-y transition-colors"
                  />
                  {errors.message && <p className="text-rose-400 text-[10px] mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-arrow-slide inline-flex items-center gap-2 px-4 py-2.5 rounded bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-white font-medium transition-all hover:-translate-y-0.5"
                >
                  {status === "loading" ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 arrow-icon" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
