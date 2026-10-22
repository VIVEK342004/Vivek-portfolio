import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Resume } from "@/components/Resume";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume & Credentials",
  description: "Download or view Vivek Kumar's software developer resume, technical skills summary, and academic credentials.",
};

export default function ResumePage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <main id="main-content" className="flex-1 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
          <Link
            href="/#resume"
            className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to main portfolio</span>
          </Link>
        </div>
        <Resume />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
