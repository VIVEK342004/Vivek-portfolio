export interface SkillItem {
  name: string;
  levelBadge?: string; // e.g. "Proficient", "Familiar", "Core"
  description?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming Languages",
    description: "Core languages used for algorithms, systems, and web backend development.",
    skills: [
      { name: "Python", description: "DSA, Flask, OpenCV, Pandas, NumPy & AI scripting" },
      { name: "Java", description: "OOP concepts, algorithmic problem solving & data structures" },
      { name: "JavaScript", description: "Modern ES6+, async workflows, DOM APIs & full-stack logic" },
      { name: "TypeScript", description: "Type-safe application engineering and frontend robustness" }
    ]
  },
  {
    id: "web-technologies",
    title: "Web Technologies & Frameworks",
    description: "Modern frameworks and libraries for scalable, interactive web platforms.",
    skills: [
      { name: "React.js", description: "Component architecture, state management, hooks & SPAs" },
      { name: "Flask", description: "Lightweight Python web framework, REST APIs & server microservices" },
      { name: "Node.js", description: "JavaScript backend runtime, asynchronous event-driven APIs" },
      { name: "HTML & CSS", description: "Semantic markup, modern layouts, Flexbox/Grid & responsive styling" },
      { name: "Figma", description: "UI/UX wireframing, component mockups & developer handoff" }
    ]
  },
  {
    id: "databases",
    title: "Database Management",
    description: "Relational databases, schema modeling, and query optimization.",
    skills: [
      { name: "PostgreSQL", description: "Relational database modeling, complex queries & transactions" },
      { name: "MySQL", description: "Schema normalization, indexing, relational table relationships" }
    ]
  },
  {
    id: "tools-tech",
    title: "Tools & Libraries",
    description: "Essential data analysis libraries, developer tooling, and Unix environments.",
    skills: [
      { name: "Pandas", description: "Data manipulation, structured tabular analysis & cleaning" },
      { name: "NumPy", description: "Numerical computing, matrix operations & multidimensional arrays" },
      { name: "Linux", description: "CLI environments, shell scripting & server operations" },
      { name: "Git & GitHub", description: "Version control, branching, PR workflows & code collaboration" }
    ]
  },
  {
    id: "coursework-concepts",
    title: "Core CS Coursework & Concepts",
    description: "Rigorous academic computer science foundations from Sitare University.",
    skills: [
      { name: "Advanced DSA", description: "Trees, graphs, dynamic programming & greedy algorithms" },
      { name: "Machine Learning & AI", description: "Model architectures, training concepts, NLP & evaluation" },
      { name: "OOP Concepts", description: "Encapsulation, inheritance, polymorphism & design abstractions" },
      { name: "Computer Vision / OpenCV", description: "Image filtering, face detection, transforms & OCR" }
    ]
  }
];
