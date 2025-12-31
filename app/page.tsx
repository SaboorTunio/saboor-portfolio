import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import HeroSection from "@/components/sections/hero";
import SkillsSection from "@/components/sections/skills";
import EducationTimeline from "@/components/sections/education-timeline";
// import Certifications from "@/components/sections/certifications";
import ContactSection from "@/components/sections/contact";
import CurrentFocus from "@/components/sections/current-focus";

const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Engineer & Full Stack Developer Portfolio",
  description: "Showcasing expertise in Next.js, Python, and Agentic AI with a futuristic Cyberpunk Glassmorphism aesthetic",
};

export default function Home() {
  return (
    <main className={geistMono.className}>
      <HeroSection />
      <SkillsSection />
      <EducationTimeline />
      {/* <Certifications /> */}
      <CurrentFocus />
      <ContactSection />
    </main>
  );
}