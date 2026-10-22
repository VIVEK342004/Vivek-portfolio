import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CustomCursor } from "@/components/CustomCursor";
import { personalInfo } from "@/data/personal";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vivek-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vivek Kumar | Software Developer",
    template: "%s | Vivek Kumar",
  },
  description: "Portfolio of Vivek Kumar — software developer, technology enthusiast and builder focused on creating practical software solutions.",
  keywords: [
    "Vivek Kumar",
    "Software Developer",
    "Full Stack Developer",
    "AI Enthusiast",
    "React",
    "Next.js",
    "Python",
    "Java",
    "TypeScript",
    "Myers Diff Algorithm",
    "AI Clinic"
  ],
  authors: [{ name: "Vivek Kumar", url: siteUrl }],
  creator: "Vivek Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Vivek Kumar | Software Developer",
    description: "Portfolio of Vivek Kumar — software developer, technology enthusiast and builder focused on creating practical software solutions.",
    siteName: "Vivek Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivek Kumar | Software Developer",
    description: "Portfolio of Vivek Kumar — software developer, technology enthusiast and builder focused on creating practical software solutions.",
    creator: "@VIVEK342004",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: "Software Developer",
    url: siteUrl,
    sameAs: [
      personalInfo.github,
      personalInfo.linkedin,
    ],
    knowsAbout: [
      "Software Engineering",
      "Full-Stack Web Development",
      "Algorithms and Data Structures",
      "Artificial Intelligence",
      "Python",
      "TypeScript",
      "Java"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased selection:bg-blue-600 selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <CustomCursor />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
