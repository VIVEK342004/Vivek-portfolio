export interface PersonalInfo {
  name: string;
  headline: string;
  tagline: string;
  shortBio: string;
  email: string;
  phone: string;
  phoneFormatted: string;
  github: string;
  linkedin: string;
  location: string;
  status: string;
  resumeUrl: string;
  about: {
    paragraphs: string[];
    highlights: {
      label: string;
      value: string;
      description: string;
    }[];
  };
}

export const personalInfo: PersonalInfo = {
  name: "Vivek Kumar",
  headline: "Software Developer | CS Undergraduate @ Sitare University | Problem Solver",
  tagline: "Building reliable software systems, exploring intelligent AI tools, and engineering practical solutions with clean code.",
  shortBio: "Computer Science undergraduate at Sitare University (SRMU), Lucknow. Sitare Foundation Scholar passionate about Data Structures & Algorithms, full-stack systems, computer vision, and applied AI/ML platforms.",
  email: "vivekkumar04034@gmail.com",
  phone: "+918979261332",
  phoneFormatted: "+91 89792 61332",
  github: "https://github.com/VIVEK342004",
  linkedin: "https://www.linkedin.com/in/vivek342004/",
  location: "Lucknow, India",
  status: "Available for Software Engineering Internships & Technical Roles (Graduating 2027)",
  resumeUrl: "/resume.pdf",
  about: {
    paragraphs: [
      "I am Vivek Kumar, a Computer Science undergraduate at Sitare University with SRMU, Lucknow (Class of 2027), and a recipient of the prestigious 50% Sitare Foundation B.Tech CS Scholarship.",
      "My engineering focus is grounded in strong core fundamentals: Data Structures & Algorithms, Object-Oriented Programming (Java/Python), and modern full-stack development (React, Flask, Node.js, PostgreSQL). I have built practical end-to-end platforms including Drive-Your-Self (a curated DSA practice and tracking platform), AI_ML_Chatbot (document intelligence for technical literature), and ImageEditor (computer vision app using OpenCV and OCR).",
      "I approach software engineering with curiosity, clean code practices, and system-level thinking — striving to understand how components interact from low-level algorithms to cloud deployment."
    ],
    highlights: [
      {
        label: "Education",
        value: "B.Tech CS (Sitare Univ)",
        description: "GPA 7.1 · Machine Learning, Advanced DSA, OOP, DBMS"
      },
      {
        label: "Scholarship",
        value: "Sitare Foundation",
        description: "50% B.Tech CS Scholarship recipient (Aug 2024 - Present)"
      },
      {
        label: "Core Stack",
        value: "Python · Java · React",
        description: "Flask, Node.js, PostgreSQL, MySQL, OpenCV, Pandas, NumPy"
      },
      {
        label: "Focus Areas",
        value: "DSA · AI/ML · Systems",
        description: "Algorithmic problem solving, document RAG, and full-stack software."
      }
    ]
  }
};
