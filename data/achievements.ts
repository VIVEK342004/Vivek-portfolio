export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  category: "Coding & Algorithms" | "Hackathons" | "Certifications" | "Open Source & Projects";
  description: string;
  badgeText?: string;
  link?: string;
  isPlaceholder?: boolean;
}

export const achievementsList: AchievementItem[] = [
  {
    id: "achieve-sitare-scholarship",
    title: "50% B.Tech CS Scholarship",
    organization: "Sitare Foundation",
    date: "Aug 2024 - Present",
    category: "Coding & Algorithms",
    description: "Awarded prestigious 50% scholarship for academic merit, computer science aptitude, and commitment to software engineering at Sitare University.",
    badgeText: "Merit Scholarship",
    link: "https://sitare.org"
  },
  {
    id: "achieve-dsa-platform",
    title: "Drive-Your-Self DSA Platform Engineering",
    organization: "Independent Software Project",
    date: "2024",
    category: "Open Source & Projects",
    description: "Engineered a full-featured DSA tracking application with curated problem sheets, authentication, streak analytics, and personal notes integration.",
    badgeText: "Full-Stack Project",
    link: "https://github.com/VIVEK342004/Drive-Your-Self"
  },
  {
    id: "achieve-diff-algorithm",
    title: "Algorithmic Implementation: Myers Diff Engine",
    organization: "Systems & Algorithms Implementation",
    date: "2024",
    category: "Coding & Algorithms",
    description: "Implemented Eugene Myers' O(ND) greedy sequence difference algorithm in Python, supporting UTF-8 characters and minimal edit script generation.",
    badgeText: "Algorithms",
    link: "https://github.com/VIVEK342004/myers-diff-algorithm"
  },
  {
    id: "achieve-problem-solving",
    title: "Continuous Algorithmic Problem Solving",
    organization: "Competitive Programming & Problem Solving",
    date: "Ongoing",
    category: "Coding & Algorithms",
    description: "Consistent problem solving practice across Advanced Data Structures & Algorithms including trees, graphs, dynamic programming, and greedy algorithms.",
    badgeText: "DSA Practice",
    link: "https://github.com/VIVEK342004"
  }
];
