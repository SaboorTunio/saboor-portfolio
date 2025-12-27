# Implementation Plan: Neon Glass AI Portfolio

**Feature**: 1-neon-glass-portfolio
**Created**: 2025-12-28
**Status**: Draft

## Technical Context

### Known Information
- **Framework**: Next.js 15 (App Router) with TypeScript Strict Mode
- **Styling**: Tailwind CSS with tailwindcss-animate plugin
- **Icons**: Lucide React
- **Animations**: Framer Motion for all interactions
- **Design System**: "Neon Glass" with Cyberpunk Glassmorphism aesthetic
- **Theme**: Dark Mode only with hardcoded dark backgrounds
- **Architecture**: Functional components only

### Unknown Information
- **Backend**: [NEEDS CLARIFICATION: How will contact form submissions be handled?]
- **Hosting**: [NEEDS CLARIFICATION: Where will the portfolio be deployed?]
- **SEO Strategy**: [NEEDS CLARIFICATION: What SEO requirements need to be met?]

## Constitution Check

### Compliance Verification
- ✅ Tech Stack Standardization: Using Next.js 15, TypeScript, Tailwind CSS, Lucide React, Framer Motion
- ✅ Functional Component Architecture: All components will be functional
- ✅ Mobile-First Responsive Design: Mobile-first approach will be implemented
- ✅ Dark Mode Only Theme: Hardcoded dark backgrounds will be used
- ✅ Animation Mandate: All interactive elements will use Framer Motion
- ✅ TypeScript Strict Mode: Strict Mode will be enabled
- ✅ File Structure Organization: Feature-First design with components/ui and components/sections
- ✅ Hydration Error Prevention: 'use client' directives will be used where necessary
- ✅ Accessibility Standards: Alt tags and WCAG compliance will be implemented

### Gates
- **Pass**: All constitutional requirements are satisfied by the proposed approach
- **Pass**: No violations identified

## Phase 0: Research & Analysis

### Research Tasks

#### A. Neon Glass Design Tokens Analysis
- **Decision**: Implement the specified design system with exact color values
- **Rationale**: Matches the "Cyberpunk Glassmorphism" aesthetic requirement
- **Alternatives considered**: Standard glassmorphism vs. cyberpunk variant - cyberpunk chosen for unique aesthetic

#### B. Backend Strategy for Contact Form
- **Decision**: Implement form submission via email service (e.g., Resend, EmailJS, or similar)
- **Rationale**: Portfolio sites need a way to handle contact form submissions without a full backend
- **Alternatives considered**:
  - Static form (no submission handling)
  - Full backend service (unnecessary complexity)
  - Third-party service (recommended approach)

#### C. Animation Strategy with Framer Motion
- **Decision**: Use Framer Motion for entrance animations, hover effects, and interactive elements
- **Rationale**: Required by constitution and specification
- **Alternatives considered**: CSS animations vs. Framer Motion - Framer Motion chosen for complexity and capabilities

## Phase 1: Foundation & Data Strategy

### A. Project Structure

```
saboor-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── [...not needed for single page initially]
├── components/
│   ├── ui/
│   │   ├── glass-card.tsx
│   │   ├── gradient-button.tsx
│   │   ├── skill-bar.tsx
│   │   ├── skill-orb.tsx
│   │   ├── holographic-card.tsx
│   │   ├── contact-form.tsx
│   │   └── animated-orb.tsx
│   └── sections/
│       ├── hero.tsx
│       ├── skills-matrix.tsx
│       ├── education-timeline.tsx
│       ├── certifications.tsx
│       ├── current-focus.tsx
│       └── contact-section.tsx
├── lib/
│   ├── data.ts
│   └── utils.ts
├── public/
│   └── [static assets]
├── types/
│   └── index.ts
├── tailwind.config.ts
└── package.json
```

### B. Dependencies Checklist

- [ ] `framer-motion` - For animations
- [ ] `lucide-react` - For icons
- [ ] `clsx` - For conditional class names
- [ ] `tailwind-merge` - For class name merging
- [ ] `tailwindcss-animate` - For Tailwind animations
- [ ] `next` - Next.js framework
- [ ] `react` - React library
- [ ] `react-dom` - React DOM library
- [ ] `typescript` - TypeScript
- [ ] `@types/react` - React types
- [ ] `@types/node` - Node types

### C. Data Strategy - lib/data.ts

```typescript
// GIAIC Education Timeline Data
export const educationData = [
  {
    id: 1,
    program: "GIAIC - Artificial Intelligence & Computing",
    duration: "Feb 2024 - Dec 2025",
    items: [
      { quarter: "Q1", subject: "Advanced TypeScript", status: "Completed" },
      { quarter: "Q2", subject: "Next.js & Frontend Development", status: "Completed" },
      { quarter: "Q3", subject: "Advanced Python", status: "Completed" },
      { quarter: "Q4", subject: "Agentic AI with OpenAI Agents SDK", status: "Completed" }
    ]
  }
];

// Skills Data
export const frontendSkills = [
  { name: "Next.js", level: 90 },
  { name: "React.js", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "JavaScript", level: 85 }
];

export const backendSkills = [
  { name: "Python", level: 80 },
  { name: "Agentic AI", level: 75 }
];

// Certifications Data
export const certificationsData = [
  { id: 1, title: "Meta Frontend Developer", brandColor: "#0077B5" },
  { id: 2, title: "Google UX Design", brandColor: "#4285F4" },
  { id: 3, title: "AWS Cloud Practitioner", brandColor: "#FF9900" }
];

// Current Focus Data
export const currentFocus = [
  "Gemini CLI",
  "Spec-Driven Development",
  "Claude Code"
];

// Social Links Data
export const socialLinks = [
  { id: 1, name: "GitHub", url: "#", icon: "github" },
  { id: 2, name: "LinkedIn", url: "#", icon: "linkedin" },
  { id: 3, name: "Email", url: "mailto:#", icon: "mail" }
];
```

### D. Tailwind Configuration - tailwind.config.ts

```typescript
import type { Config } from "tailwindcss";
import { addDynamicIconSelectors } from "@iconify/tailwind";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Neon Glass specific colors
        "void-black": "#050505",
        "neon-cyan": "#06b6d4",
        "neon-purple": "#a855f7",
        // Glass effect colors
        "glass-bg": "rgba(255, 255, 255, 0.05)", // bg-white/5
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
```

## Phase 2: Atomic UI Components

### A. Glass Card Component - components/ui/glass-card.tsx

```tsx
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glow?: "cyan" | "purple" | "none";
  animate?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  glow = "none",
  animate = false
}: GlassCardProps) {
  const glowStyle = {
    "cyan": "before:absolute before:-inset-1 before:-z-10 before:rounded-xl before:bg-[radial-gradient(circle_at_center,_var(--neon-cyan)_0%,_transparent_70%)]",
    "purple": "before:absolute before:-inset-1 before:-z-10 before:rounded-xl before:bg-[radial-gradient(circle_at_center,_var(--neon-purple)_0%,_transparent_70%)]",
    "none": ""
  };

  const cardClasses = `relative rounded-xl bg-[#ffffff0d] backdrop-blur-xl border border-[#ffffff1a] p-6 ${glowStyle[glow]} ${className}`;

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cardClasses}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={cardClasses}>{children}</div>;
}
```

### B. Gradient Button Component - components/ui/gradient-button.tsx

```tsx
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GradientButtonProps {
  children: ReactNode;
  variant?: "neon-border" | "ghost" | "gradient";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function GradientButton({
  children,
  variant = "neon-border",
  onClick,
  className = "",
  disabled = false
}: GradientButtonProps) {
  const baseClasses = "px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center";

  const variantClasses = {
    "neon-border": `border-2 border-[#06b6d4] text-[#06b6d4] bg-transparent hover:bg-[#06b6d410] hover:shadow-[0_0_15px_#06b6d440]`,
    "ghost": `text-white border border-white/30 hover:bg-white/10`,
    "gradient": `bg-gradient-to-r from-[#06b6d4] to-[#a855f7] text-white hover:shadow-[0_0_20px_#06b6d480] hover:scale-[1.02]`
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {children}
    </motion.button>
  );
}
```

### C. Skill Bar Component - components/ui/skill-bar.tsx

```tsx
import { motion } from "framer-motion";

interface SkillBarProps {
  skillName: string;
  level: number;
  animate?: boolean;
}

export default function SkillBar({ skillName, level, animate = true }: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-white font-medium">{skillName}</span>
        <span className="text-[#06b6d4]">{level}%</span>
      </div>
      <div className="w-full bg-[#ffffff1a] rounded-full h-2.5">
        <motion.div
          className="bg-gradient-to-r from-[#06b6d4] to-[#a855f7] h-2.5 rounded-full"
          initial={animate ? { width: 0 } : { width: `${level}%` }}
          animate={animate ? { width: `${level}%` } : {}}
          transition={animate ? { duration: 1, ease: "easeOut" } : {}}
        />
      </div>
    </div>
  );
}
```

### D. Skill Orb Component - components/ui/skill-orb.tsx

```tsx
import { motion } from "framer-motion";

interface SkillOrbProps {
  skillName: string;
  level: number;
  animate?: boolean;
}

export default function SkillOrb({ skillName, level, animate = true }: SkillOrbProps) {
  const size = 80; // Fixed size for consistency
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (level / 100) * circumference;

  return (
    <div className="flex flex-col items-center m-4">
      <div className="relative">
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#ffffff1a"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Progress circle */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#gradient)"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={animate ? circumference : offset}
            initial={animate ? { strokeDashoffset: circumference } : false}
            animate={animate ? { strokeDashoffset: offset } : {}}
            transition={animate ? { duration: 1.5, ease: "easeOut" } : {}}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-sm font-bold">{level}%</span>
        </div>
      </div>
      <span className="mt-2 text-white text-center">{skillName}</span>
    </div>
  );
}
```

## Phase 3: Section Assembly

### A. Hero Section - components/sections/hero.tsx

```tsx
import GlassCard from "@/components/ui/glass-card";
import GradientButton from "@/components/ui/gradient-button";
import AnimatedOrb from "@/components/ui/animated-orb";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background with subtle noise texture */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: "#050505",
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 94c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\" fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E\")"
        }}
      />

      {/* Animated orb */}
      <div className="absolute top-1/4 left-1/4 z-0">
        <AnimatedOrb size={200} color="#06b6d4" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-['Geist_Mono']">
            Building Intelligent Systems with Agentic AI.
          </h1>
          <p className="text-xl md:text-2xl text-[#a8a8a8] mb-12 font-['Inter']">
            Full Stack Developer bridging the gap between Next.js and Autonomous Agents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton variant="neon-border">
              View Work
            </GradientButton>
            <GradientButton variant="ghost">
              Contact
            </GradientButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

### B. Skills Matrix Section - components/sections/skills-matrix.tsx

```tsx
import GlassCard from "@/components/ui/glass-card";
import SkillBar from "@/components/ui/skill-bar";
import SkillOrb from "@/components/ui/skill-orb";
import { frontendSkills, backendSkills } from "@/lib/data";
import { motion } from "framer-motion";

export default function SkillsMatrix() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center text-white mb-12 font-['Geist_Mono']"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills Matrix
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Frontend Skills */}
          <GlassCard className="p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Frontend</h3>
            {frontendSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillBar skillName={skill.name} level={skill.level} />
              </motion.div>
            ))}
          </GlassCard>

          {/* AI & Backend Skills */}
          <GlassCard className="p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">AI & Backend</h3>
            <div className="flex flex-wrap justify-center">
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <SkillOrb skillName={skill.name} level={skill.level} />
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
```

## Phase 4: Polish & Animations

### A. Animated Orb Component - components/ui/animated-orb.tsx

```tsx
import { motion } from "framer-motion";

interface AnimatedOrbProps {
  size?: number;
  color?: string;
  className?: string;
}

export default function AnimatedOrb({ size = 100, color = "#06b6d4", className = "" }: AnimatedOrbProps) {
  return (
    <motion.div
      className={`rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: "blur(20px)"
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.7, 0.9, 0.7]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
}
```

### B. Main Page Assembly - app/page.tsx

```tsx
import "./globals.css";
import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import HeroSection from "@/components/sections/hero";
import SkillsMatrix from "@/components/sections/skills-matrix";

const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Engineer & Full Stack Developer Portfolio",
  description: "Showcasing expertise in Next.js, Python, and Agentic AI with a futuristic Cyberpunk Glassmorphism aesthetic",
};

export default function Home() {
  return (
    <html lang="en">
      <body className={`${geistMono.className} bg-[#050505] text-white`}>
        <main>
          <HeroSection />
          <SkillsMatrix />
          {/* Additional sections will be added here as we implement them */}
        </main>
      </body>
    </html>
  );
}
```

## Re-evaluation of Constitution Check

### Post-Design Compliance Verification
- ✅ All components use functional architecture
- ✅ TypeScript strict mode typing is implemented
- ✅ Framer Motion animations are integrated throughout
- ✅ Dark mode is hardcoded with void black background
- ✅ Mobile-first responsive design is implemented with responsive classes
- ✅ File structure follows Feature-First approach with components/ui and components/sections
- ✅ Accessibility standards are considered with semantic HTML and proper labeling

### Gates
- **Pass**: All constitutional requirements continue to be satisfied
- **Pass**: No new violations introduced in the design