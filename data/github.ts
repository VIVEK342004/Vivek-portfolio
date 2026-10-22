export interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  url: string;
  updatedAt: string;
  isPrivate?: boolean;
}

export interface GitHubData {
  username: string;
  profileUrl: string;
  avatarPlaceholder: string;
  followersCount: number;
  publicReposCount: number;
  pinnedRepos: GitHubRepo[];
}

export const githubData: GitHubData = {
  username: "VIVEK342004",
  profileUrl: "https://github.com/VIVEK342004",
  avatarPlaceholder: "VK",
  followersCount: 15,
  publicReposCount: 13,
  pinnedRepos: [
    {
      name: "Drive-Your-Self",
      description: "DSA practice platform with curated problem sheets, progress tracking, personal notes, streak analytics, and authentication.",
      language: "TypeScript",
      languageColor: "#3178C6",
      stars: 14,
      forks: 3,
      url: "https://github.com/VIVEK342004/Drive-Your-Self",
      updatedAt: "Active"
    },
    {
      name: "Al_ML_chabot",
      description: "AI-powered platform to upload and query AI/ML books with contextual chatbot responses and metadata extraction.",
      language: "Python",
      languageColor: "#3572A5",
      stars: 12,
      forks: 2,
      url: "https://github.com/VIVEK342004/Al_ML_chabot",
      updatedAt: "Active"
    },
    {
      name: "ImageEditor",
      description: "Flask-based Image Editor with filters, cropping, blur, rotation, face detection via OpenCV, and OCR text extraction.",
      language: "Python",
      languageColor: "#3572A5",
      stars: 16,
      forks: 4,
      url: "https://github.com/VIVEK342004/ImageEditor",
      updatedAt: "Active"
    },
    {
      name: "Memory-Retrieval-RAG-System",
      description: "AI-powered persistent memory system implementing a RAG pipeline with vector embeddings and similarity search.",
      language: "Python",
      languageColor: "#3572A5",
      stars: 21,
      forks: 5,
      url: "https://github.com/VIVEK342004/Memory-Retrieval-RAG-System",
      updatedAt: "Active"
    },
    {
      name: "myers-diff-algorithm",
      description: "Eugene Myers' O(ND) greedy difference algorithm implementation in Python with line & character diffs and CLI.",
      language: "Python",
      languageColor: "#3572A5",
      stars: 18,
      forks: 3,
      url: "https://github.com/VIVEK342004/myers-diff-algorithm",
      updatedAt: "Active"
    },
    {
      name: "Quizzes",
      description: "Dynamic quiz application with real-time feedback, scoring system, multiple question types, and performance analytics.",
      language: "JavaScript",
      languageColor: "#F7DF1E",
      stars: 9,
      forks: 1,
      url: "https://github.com/VIVEK342004/Quizzes",
      updatedAt: "Active"
    }
  ]
};
