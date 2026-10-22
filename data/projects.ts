export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  keyFeatures: string[];
  architecture?: string;
  developmentChallenges?: string[];
  testing?: string[];
  results?: string;
  githubUrl: string;
  liveDemoUrl?: string;
  featured: boolean;
  imageAlt: string;
  badge: string;
}

export const projects: Project[] = [
  {
    id: "drive-your-self",
    title: "Drive-Your-Self",
    tagline: "DSA practice platform with curated problem sheets, progress tracking, and personal notes.",
    description: "A comprehensive Data Structures and Algorithms practice platform built to help developers master computational problem solving through curated problem sheets, streak analytics, and personal revision notes.",
    problem: "Engineers preparing for technical interviews often lose track of their progress across disparate problem sets, lack centralized note-taking for problem nuances, and struggle to maintain consistent study streaks.",
    solution: "Built a full-stack platform featuring topic-wise curated problem sheets, interactive completion checklists, user authentication, streak metrics, and an integrated markdown notes system.",
    technologies: ["TypeScript", "React.js", "Node.js", "PostgreSQL", "HTML5", "CSS3", "Git"],
    keyFeatures: [
      "Curated Problem Sheets: Structured lists covering Arrays, Strings, Trees, Graphs, and DP.",
      "User Authentication: Secure user sessions and personalized data persistence.",
      "Streak Analytics: Visual activity tracking to foster disciplined daily practice.",
      "Smart Progress Tracking: Granular problem status (Todo, In-Progress, Solved, Needs Review).",
      "Personal Notes System: Embedded notes for recording edge cases, optimal complexities, and reflections.",
      "Responsive UI: High-performance developer-first interface optimized for desktop and mobile."
    ],
    architecture: "React frontend communicating with a REST API backend service, utilizing relational PostgreSQL storage for user sheets, completion logs, and revision notes.",
    developmentChallenges: [
      "Designing an intuitive tracking dashboard that updates streak metrics without costly full-table recalculations.",
      "Synchronizing offline progress states with cloud database records.",
      "Building a lightweight, distraction-free notes editor alongside problem links."
    ],
    testing: [
      "Automated unit tests for streak calculation logic and date boundaries.",
      "Integration tests for user authentication and session tokens.",
      "End-to-end testing of problem state toggling and note persistence."
    ],
    results: "Provides an all-in-one preparation hub, eliminating fragmented bookmarks and keeping technical problem solving structured and measurable.",
    githubUrl: "https://github.com/VIVEK342004/Drive-Your-Self",
    liveDemoUrl: "https://github.com/VIVEK342004/Drive-Your-Self",
    featured: true,
    imageAlt: "Drive-Your-Self DSA Practice Platform Interface",
    badge: "DSA & Full-Stack"
  },
  {
    id: "ai-ml-chatbot",
    title: "AI_ML_Chatbot",
    tagline: "AI-powered platform to upload and query AI/ML books with contextual chatbot responses.",
    description: "An intelligent technical literature platform allowing users to upload machine learning books and research papers, extract structured document metadata, and interact with a contextual chatbot for deep concept exploration.",
    problem: "Dense AI/ML academic textbooks and research papers are difficult to navigate rapidly when searching for specific formula derivations, algorithmic nuances, or comparative explanations.",
    solution: "Engineered an AI-powered conversational application with a Flask backend and React frontend that parses uploaded literature, extracts metadata, and provides contextual conversational responses grounded in the texts.",
    technologies: ["Python", "Flask", "React.js", "AI Models", "Pandas", "NumPy", "REST APIs"],
    keyFeatures: [
      "Document Ingestion: Upload and parse complex AI/ML textbooks and PDF papers.",
      "Metadata Extraction: Automated extraction of chapter titles, authors, and structural metadata.",
      "Contextual AI Chat: Conversational interface answering queries strictly based on uploaded material.",
      "User Authentication: Secure multi-user library management and conversation history.",
      "Fast API Communication: Optimized REST endpoints for low-latency question answering."
    ],
    architecture: "React single-page application interfacing with a Flask Python backend running document parsing pipelines and querying AI language models with extracted context.",
    developmentChallenges: [
      "Managing token limits and extracting concise contextual passages from lengthy textbook chapters.",
      "Handling asynchronous document processing while keeping the chat interface responsive.",
      "Maintaining clean chat state and conversation memory per user session."
    ],
    testing: [
      "Validation tests for document upload parsers across different PDF formats.",
      "API response time benchmarks for prompt-to-answer latency.",
      "Edge-case testing for unsupported file encodings and oversized uploads."
    ],
    results: "Empowers students and researchers to accelerate their understanding of complex machine learning literature through interactive dialogue.",
    githubUrl: "https://github.com/VIVEK342004/Al_ML_chabot",
    liveDemoUrl: "https://github.com/VIVEK342004/Al_ML_chabot",
    featured: true,
    imageAlt: "AI ML Chatbot Technical Literature Assistant",
    badge: "AI / ML & NLP"
  },
  {
    id: "image-editor",
    title: "ImageEditor",
    tagline: "Flask-based Image Editor web app with filters, cropping, blur, rotation, face detection, and OCR.",
    description: "A full-featured computer vision and image manipulation web app built with Python, Flask, OpenCV, and Optical Character Recognition (OCR), featuring a non-destructive undo-redo stack and one-click download support.",
    problem: "Most quick-edit tools are either bloated commercial desktop software or ad-heavy online sites that lack integrated computer vision features like automated face detection or text extraction.",
    solution: "Developed an accessible, lightweight web application combining standard graphic manipulation tools (crop, rotate, filters, blur) with computer vision (OpenCV face detection) and OCR text extraction in a unified interface.",
    technologies: ["Python", "Flask", "OpenCV", "OCR", "NumPy", "JavaScript", "HTML/CSS"],
    keyFeatures: [
      "Comprehensive Image Filters: Gaussian blur, sharpening, grayscale, sepia, and brightness/contrast adjustments.",
      "Precision Transformations: Arbitrary angle rotation, aspect-ratio cropping, and dimension resizing.",
      "OpenCV Face Detection: Automated bounding-box detection of human faces in uploaded imagery.",
      "OCR Text Extraction: Extracts readable text from images using optical character recognition algorithms.",
      "Undo / Redo Stack: Non-destructive image state management allowing effortless rollback.",
      "Instant Export: Clean one-click high-resolution download of edited outputs."
    ],
    architecture: "Python Flask application handling matrix operations via NumPy and OpenCV image processing pipelines, served via a reactive JavaScript UI.",
    developmentChallenges: [
      "Managing in-memory image buffers efficiently to ensure fast transformations without file-system thrashing.",
      "Implementing an undo/redo history stack without excessive memory consumption on large images.",
      "Tuning face detection cascades for varied lighting and orientation angles."
    ],
    testing: [
      "Unit tests for image matrix transformation functions and bounding box calculations.",
      "OCR accuracy benchmarks on varied text fonts and orientations.",
      "Cross-browser testing of image canvas rendering and download triggers."
    ],
    results: "Combines powerful OpenCV vision algorithms with accessible web utilities, demonstrating practical systems-level image processing.",
    githubUrl: "https://github.com/VIVEK342004/ImageEditor",
    liveDemoUrl: "https://github.com/VIVEK342004/ImageEditor",
    featured: true,
    imageAlt: "Flask Image Editor with OpenCV and OCR Interface",
    badge: "Computer Vision & Python"
  },
  {
    id: "quizzes",
    title: "Quizzes",
    tagline: "Dynamic quiz application with scoring system, real-time feedback, and performance tracking.",
    description: "An interactive assessment and testing application built with dynamic question generation, instant scoring algorithms, multi-question formats, and real-time performance analytics.",
    problem: "Static assessment tests lack immediate engagement, fail to provide instant conceptual feedback, and do not provide clear breakdowns of learner performance.",
    solution: "Built a responsive, dynamic quiz platform with client-side state management, real-time score calculation, diverse question paradigms, and visual analytics to track test completion.",
    technologies: ["JavaScript", "React.js", "HTML5", "CSS3", "Node.js", "Git"],
    keyFeatures: [
      "Dynamic Question Engine: Shuffled questions, timed intervals, and dynamic question loading.",
      "Instant Feedback: Real-time explanation and scoring on question submission.",
      "Multiple Question Archetypes: Multiple choice, true/false, and conceptual assessments.",
      "Performance Analytics: Post-quiz summary metrics showing accuracy, timing, and topic strengths.",
      "Clean, Distraction-Free UI: Focused layout designed for optimal readability during testing."
    ],
    architecture: "Lightweight frontend application with modular quiz state reducer managing active questions, user answers, timers, and aggregated score tallies.",
    developmentChallenges: [
      "Ensuring accurate timer synchronization across background browser tab states.",
      "Designing a clean, reusable question schema adaptable to multiple topic domains."
    ],
    testing: [
      "Unit tests verifying scoring algorithms and negative marking logic.",
      "State transition tests across quiz start, question jump, timer expiry, and submission.",
      "Mobile viewport usability tests."
    ],
    results: "Delivers an engaging, responsive testing experience with zero friction and instant feedback for learners.",
    githubUrl: "https://github.com/VIVEK342004/Quizzes",
    liveDemoUrl: "https://github.com/VIVEK342004/Quizzes",
    featured: true,
    imageAlt: "Dynamic Quizzes Application Interface",
    badge: "Interactive Web App"
  },
  {
    id: "rag-memory-system",
    title: "Memory-Retrieval RAG System",
    tagline: "Persistent memory system implementing a Retrieval-Augmented Generation (RAG) pipeline.",
    description: "An AI-powered persistent memory system implementing a RAG pipeline that processes documents and conversations, generates vector embeddings, stores them in a vector database, performs semantic similarity search, and supplies retrieved context to an LLM.",
    problem: "Standard LLMs suffer from context window limitations, hallucinations, and lack of persistent memory across multi-turn sessions and custom enterprise documentation.",
    solution: "Engineered a Python-based RAG pipeline utilizing vector embeddings, semantic nearest-neighbor search, and prompt grounding to deliver hallucination-resistant, context-aware responses.",
    technologies: ["Python", "RAG Pipeline", "Vector Database", "Embeddings", "LLMs", "NLP"],
    keyFeatures: [
      "Document Chunking & Vectorization: Intelligent text chunking and dense embedding generation.",
      "Vector Database Storage: Fast indexing and persistent storage of semantic vectors.",
      "Similarity Search: High-speed cosine similarity search retrieving top-k relevant passages.",
      "Context-Aware Prompt Construction: Dynamic context injection into LLM prompts for factual grounding."
    ],
    architecture: "Python pipeline orchestrating document loaders, embedding models, vector storage, and an LLM inference client.",
    developmentChallenges: [
      "Balancing chunk size and overlap to avoid losing conceptual context while staying within embedding token limits.",
      "Optimizing query similarity thresholding to filter irrelevant noise."
    ],
    testing: [
      "Retrieval recall and precision evaluation against test queries.",
      "Latency profiling of embedding generation vs database lookup."
    ],
    results: "Provides reliable long-term conversational memory and accurate document question answering.",
    githubUrl: "https://github.com/VIVEK342004/Memory-Retrieval-RAG-System",
    liveDemoUrl: "https://github.com/VIVEK342004/Memory-Retrieval-RAG-System",
    featured: false,
    imageAlt: "Memory Retrieval RAG System Architecture",
    badge: "AI & Vector Search"
  },
  {
    id: "myers-diff-algorithm",
    title: "Myers Diff Algorithm",
    tagline: "Python implementation of Eugene Myers' O(ND) greedy sequence comparison.",
    description: "An algorithmic difference engine implementing Eugene Myers' O(ND) greedy difference algorithm in Python, capable of calculating minimal edit sequences between arbitrary files or text streams.",
    problem: "Computing the shortest edit script (SES) and longest common subsequence (LCS) between sequences requires optimal graph traversal heuristics to avoid O(N*M) bottlenecks.",
    solution: "Implemented the Myers difference algorithm in Python with support for line-level diffs, character-level inspection, Unicode characters, and unified diff output formats.",
    technologies: ["Python", "Algorithms", "Graph Theory", "CLI", "Automated Testing", "Git"],
    keyFeatures: [
      "Greedy O(ND) Algorithm: Finds optimal edit paths through the edit graph in minimal computational steps.",
      "Dual Diff Granularity: Supports both line-by-line comparison and detailed character-level diffs.",
      "Unified Diff Formatting: Produces standardized patch-compatible diff outputs (+ additions, - deletions).",
      "Interactive CLI: Terminal interface with colorized outputs for developer inspection."
    ],
    architecture: "Pure Python algorithmic module with decoupled graph traversal logic and unified diff formatting adapters.",
    developmentChallenges: [
      "Optimizing diagonal vector storage (V array) to handle boundary coordinates efficiently.",
      "Reconstructing the exact edit path backwards from the endpoint without excessive memory overhead."
    ],
    testing: [
      "Automated test suite validating minimal edit distances against known reference sequences.",
      "Parametrized tests for multi-line code diffs and Unicode edge cases."
    ],
    results: "Demonstrates deep mastery of computational graph traversal and systems-level algorithmic programming.",
    githubUrl: "https://github.com/VIVEK342004/myers-diff-algorithm",
    liveDemoUrl: "https://github.com/VIVEK342004/myers-diff-algorithm",
    featured: false,
    imageAlt: "Myers Diff Algorithm Terminal Visualization",
    badge: "Algorithms & Python"
  }
];
