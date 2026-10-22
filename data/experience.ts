export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  period: string;
  location: string;
  type: "Industry / Internship" | "Project Experience" | "Academic & Open Source";
  description: string;
  responsibilities: string[];
  technologies: string[];
  keyOutcome: string;
  isPlaceholder?: boolean;
}

export const experiences: ExperienceItem[] = [
  {
    id: "exp-placeholder-internship",
    organization: "[Add Company / Organization Name]",
    role: "Software Engineering Intern / Developer [Add Role]",
    period: "[e.g. Summer 2025 - Present / Add Dates]",
    location: "[Add Location / Remote]",
    type: "Industry / Internship",
    description: "Editable placeholder for your upcoming or completed professional internship, co-op, or industry role.",
    responsibilities: [
      "[Add key responsibility: e.g. Collaborated with engineering team on building scalable services]",
      "[Add key responsibility: e.g. Developed and tested REST APIs and database queries]",
      "[Add key responsibility: e.g. Participated in daily standups, code reviews, and sprint planning]"
    ],
    technologies: ["JavaScript / TypeScript", "Python / Java", "Git", "REST APIs", "[Add Technologies]"],
    keyOutcome: "[Add notable impact or project deliverable]",
    isPlaceholder: true
  },
  {
    id: "exp-open-source-projects",
    organization: "Independent & Open Source Engineering",
    role: "Lead Developer / Systems Builder",
    period: "2023 - Present",
    location: "Remote / Self-Directed",
    type: "Project Experience",
    description: "Architected and delivered independent software applications, algorithmic implementations, and developer tools from concept to deployment.",
    responsibilities: [
      "Designed and implemented full-stack clinic management system (AI Clinic) supporting rapid record retrieval.",
      "Researched and built Eugene Myers' difference algorithm in Python, with line and character-level diff engines.",
      "Wrote modular, maintainable, and typed codebases with rigorous test coverage and documentation.",
      "Configured continuous integration workflows to validate builds, lint rules, and test suites automatically."
    ],
    technologies: ["Python", "Next.js", "React", "TypeScript", "Node.js", "Git", "Docker"],
    keyOutcome: "Shipped working software products with clean git histories, thorough documentation, and zero critical defects."
  },
  {
    id: "exp-tech-collaborator",
    organization: "Campus Technical Society & Hackathons",
    role: "Technical Contributor / Project Collaborator",
    period: "2023 - 2024",
    location: "[Add University / Region]",
    type: "Academic & Open Source",
    description: "Collaborated with fellow student engineers on coding challenges, project demonstrations, and peer technical workshops.",
    responsibilities: [
      "Collaborated in team hackathons to prototype functional tech solutions within constrained timeframes.",
      "Conducted peer reviews on code quality, data structures, and algorithmic efficiency.",
      "Shared insights on modern web development practices and version control workflows."
    ],
    technologies: ["React", "JavaScript", "Algorithms & Data Structures", "Git / GitHub"],
    keyOutcome: "Fostered collaborative engineering habits and sharpened rapid prototyping and problem-solving skills under deadlines."
  }
];
