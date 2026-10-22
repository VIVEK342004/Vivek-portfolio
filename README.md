# Vivek Kumar — Professional Developer Portfolio

A modern, high-performance, accessible personal portfolio website built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed as a complete digital identity showcasing engineering capabilities, technical depth, algorithmic projects, education, verified credentials, and recruiter-focused case studies.

---

## 1. Project Overview

This website serves as a production-grade personal hub for **Vivek Kumar**, presenting:
- **Hero & Identity:** Clear value proposition, status pill, and direct CTAs.
- **About:** Educational focus, software principles, and engineering mindset.
- **Skills Taxonomy:** Categorized proficiencies (Programming, Frontend, Backend, Dev Tools, DevOps, AI) with honest, zero-percentage badges.
- **Project Case Studies:** Architectural deep-dives into real projects like **AI Clinic** (Fast patient-record retrieval) and the **Myers Diff Algorithm** (Python sequence comparison engine) with interactive modal views.
- **Experience & Education:** Timeline-based records with structured coursework and editable placeholders for career milestones.
- **GitHub Integration:** Selected open-source repositories with stars, forks, and language badges with offline resilience.
- **Resume Hub:** Direct view and download endpoints for `/resume.pdf`.
- **Contact:** Fully validated contact form with accessible alerts and direct communication channels.

---

## 2. Features

- **Dark-First Design System:** Sophisticated near-black aesthetic with a clean Light/Dark mode toggle backed by CSS design tokens.
- **Interactive Case Studies:** 11-point architectural breakdown modals for featured projects (problem, solution, features, architecture, challenges, testing, results).
- **Zero Layout Shifts & Optimized Rendering:** Next.js 16 Turbopack-powered SSG and fast client islands.
- **Accessibility (a11y):** WCAG AA compliant contrast, visible focus rings, ARIA dialogs, skip-to-content link, and `prefers-reduced-motion` support.
- **SEO Ready:** Dynamic Open Graph metadata, Twitter cards, JSON-LD Person schema, `sitemap.ts`, and `robots.ts`.
- **Separation of Concerns:** Pure data files in `data/` allow content updates without touching React UI code.

---

## 3. Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Library:** React 19
- **Language:** TypeScript 5 (Strict Mode)
- **Styling:** Tailwind CSS v3 with PostCSS & Autoprefixer
- **Icons:** Lucide React
- **Deployment Target:** Vercel / Node.js 20+

---

## 4. Folder Structure

```text
vivek-portfolio/
├── app/
│   ├── about/page.tsx         # Dedicated About view
│   ├── api/contact/route.ts   # Contact validation API endpoint
│   ├── contact/page.tsx       # Dedicated Contact view
│   ├── experience/page.tsx    # Dedicated Experience & Journey view
│   ├── projects/page.tsx      # Dedicated Projects view
│   ├── resume/page.tsx        # Dedicated Resume view
│   ├── globals.css            # CSS variables & theme tokens
│   ├── icon.svg               # Modern browser favicon
│   ├── layout.tsx             # Root layout with SEO & Schema.org JSON-LD
│   ├── not-found.tsx          # Custom 404 handler
│   ├── page.tsx               # Main portfolio single-page application
│   ├── robots.ts              # Search engine robots configuration
│   └── sitemap.ts             # Dynamic XML sitemap generator
│
├── components/
│   ├── About.tsx              # About & philosophy section
│   ├── Achievements.tsx       # Milestones & certifications
│   ├── Contact.tsx            # Validated contact form & channels
│   ├── Education.tsx          # Academic degrees & coursework
│   ├── Experience.tsx         # Career & open-source timeline
│   ├── Footer.tsx             # Professional footer & copyright
│   ├── GitHubSection.tsx      # Pinned repository cards & stats
│   ├── Hero.tsx               # Introduction & primary CTAs
│   ├── Navbar.tsx             # Sticky responsive navigation bar
│   ├── ProjectModal.tsx       # 11-point case study modal
│   ├── Projects.tsx           # Featured project showcase
│   ├── Resume.tsx             # Resume download & highlights
│   ├── ThemeProvider.tsx      # Dark/light theme state provider
│   └── ThemeToggle.tsx        # Accessible theme toggle button
│
├── data/
│   ├── achievements.ts        # Milestones and certification data
│   ├── education.ts           # Academic credentials and courses
│   ├── experience.ts          # Career & project timeline items
│   ├── github.ts              # GitHub profile and repository records
│   ├── personal.ts            # Central profile details and links
│   ├── projects.ts            # Detailed project specs and case studies
│   └── skills.ts              # Categorized skills taxonomy
│
├── public/
│   └── resume.pdf             # Replaceable PDF resume file
│
├── .env.example               # Environment variables template
├── next.config.ts             # Next.js configuration
├── package.json               # Dependencies and scripts
├── postcss.config.mjs         # PostCSS configuration
├── tailwind.config.ts         # Tailwind CSS design system tokens
└── tsconfig.json              # TypeScript configuration
```

---

## 5. Getting Started

### Prerequisites

- Node.js 18.17+ or 20+ (Tested on Node v24)
- npm, yarn, or pnpm

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/vivekkumar/vivek-portfolio.git
cd vivek-portfolio
npm install
```

### Environment Variables

Copy the example environment file:

```bash
cp .env.example .env.local
```

Configure your parameters in `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://vivek-portfolio.vercel.app
NEXT_PUBLIC_GITHUB_USERNAME=vivekkumar
```

---

## 6. Development & Build Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts local Next.js development server at `http://localhost:3000` |
| `npm run build` | Compiles an optimized production build |
| `npm run start` | Runs the production build locally |
| `npm run lint` | Runs ESLint checks |

---

## 7. How to Update Content

All content is managed through structured TypeScript files in the `data/` directory:

1. **Personal Information (`data/personal.ts`)**:
   - Update `email`, `github`, `linkedin`, `location`, or bio paragraphs.
2. **Projects & Case Studies (`data/projects.ts`)**:
   - Add new projects or edit architecture, problem, and solution descriptions.
3. **Skills (`data/skills.ts`)**:
   - Add or rearrange skill items inside specific categories.
4. **Experience (`data/experience.ts`)**:
   - Replace placeholder entries with your latest internships or company roles.
5. **Education (`data/education.ts`)**:
   - Update university name, degree, GPA, or coursework.
6. **Resume File (`public/resume.pdf`)**:
   - Replace `public/resume.pdf` with your updated PDF. No code edits required!

---

## 8. Deployment

### Deploy to Vercel (Recommended)

1. Push your repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com/new).
3. Set the build command to `npm run build` and output directory to default.
4. Add any environment variables (e.g., `NEXT_PUBLIC_SITE_URL`).
5. Click **Deploy**.

---

## 9. License

© 2026 Vivek Kumar. All rights reserved.
