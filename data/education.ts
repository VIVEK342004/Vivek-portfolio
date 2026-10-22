export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  grade?: string;
  location: string;
  coursework: string[];
  achievements?: string[];
  isCurrent?: boolean;
}

export const educationList: EducationItem[] = [
  {
    id: "undergraduate-degree",
    institution: "Sitare University with SRMU",
    degree: "B.Tech in Computer Science",
    field: "Computer Science",
    period: "2023 - 2027 (Expected May 2027)",
    grade: "GPA: 7.1",
    location: "Lucknow, India",
    isCurrent: true,
    coursework: [
      "Advanced Data Structures and Algorithms",
      "Machine Learning & Artificial Intelligence",
      "Java Programming & OOP Concepts",
      "Python Programming",
      "Database Management Systems (DBMS)",
      "Object Oriented Programming Concepts"
    ],
    achievements: [
      "Awarded 50% B.Tech CS Scholarship by Sitare Foundation (Aug 2024 - Present)",
      "Strong performance across core algorithms, systems design, and AI/ML coursework",
      "Active participant in technical problem solving and software engineering projects"
    ]
  }
];
