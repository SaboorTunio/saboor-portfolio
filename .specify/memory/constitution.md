<!-- SYNC IMPACT REPORT:
Version change: 1.0.0 → 1.0.1
Added sections: None
Modified principles: Tech Stack Standardization (clarified tailwindcss-animate plugin)
Removed sections: None
Templates requiring updates: ✅ No existing templates to update
Follow-up TODOs: None
-->

# Personal Portfolio Constitution

## Core Principles

### Tech Stack Standardization
All development must use the specified technology stack: Next.js 15 (App Router) as the framework, TypeScript with Strict Mode for type safety, Tailwind CSS with tailwindcss-animate for styling, Lucide React for icons, and Framer Motion for all animations and interactions.

### Functional Component Architecture
All components must be functional components only, avoiding class components. Use lucide-react for all icons to maintain consistency. Follow Feature-First or Atomic Design patterns for file structure with dedicated directories like components/ui and components/sections.

### Mobile-First Responsive Design
All UI implementations must follow a mobile-first design pattern, ensuring that the application is fully responsive and accessible on all device sizes, starting from mobile and scaling up to desktop.

### Dark Mode Only Theme
The application must implement dark mode exclusively with hardcoded dark backgrounds. No light mode toggles or theme switching functionality should be implemented.

### Strict Validation Requirements
All implementations must pass strict validation: ensure no hydration errors by using useClient directives where necessary, and all images must have appropriate alt tags for accessibility.

### Animation Mandate
All interactive elements must include animations using Framer Motion to provide smooth, engaging user experiences. No static transitions or default browser animations are permitted.

## Coding Standards

### TypeScript Strict Mode
All code must be written in TypeScript with Strict Mode enabled. This includes proper typing of all variables, function parameters, return types, and object properties to catch potential runtime errors at compile time.

### File Structure Organization
Organize code using either Feature-First or Atomic Design principles. Create dedicated directories for UI components (components/ui) and feature sections (components/sections) to maintain clear separation of concerns and improve maintainability.

## Validation Requirements

### Hydration Error Prevention
Ensure no hydration errors occur by properly using 'use client' directives where client-side functionality is required. Server and client components must be clearly distinguished and properly implemented.

### Accessibility Standards
All images must include descriptive alt tags to ensure accessibility compliance. All interactive elements must meet WCAG standards for keyboard navigation and screen reader compatibility.

## Governance

This constitution serves as the authoritative guide for all development decisions in the Personal Portfolio project. All code reviews, architectural decisions, and implementation choices must align with these principles. Any deviations require explicit approval and documentation of the business justification.

**Version**: 1.0.1 | **Ratified**: 2025-12-28 | **Last Amended**: 2025-12-28