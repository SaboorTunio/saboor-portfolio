# Quickstart: Glass Footer

## Overview
This guide explains how to implement and use the Glass Footer component with its minimalist design, glass border effect, and responsive layout.

## Prerequisites
- Next.js 15 with App Router
- TypeScript with Strict Mode
- Tailwind CSS with tailwindcss-animate plugin
- Lucide React for icons

## Installation
1. Ensure all required dependencies are installed in your project
2. The component uses Tailwind classes for styling: `bg-black`, `border-t`, `border-white/10`, responsive flexbox classes
3. The component uses Lucide React for social icons

## File Structure
```
components/
└── layout/
    └── footer.tsx          # Main footer component
```

## Implementation Steps

### 1. Create the Footer Component
- Create `components/layout/footer.tsx`
- Implement the minimalist glass design with transparent/deep black background
- Add top border only using `border-t border-white/10`
- Set compact height with `h-20` or equivalent

### 2. Implement Content Layout
- Add left-aligned copyright text: "© 2025 [Your Name]"
- Add center-aligned technology credit: "Built with Next.js & Agentic AI" with purple glow effect
- Add right-aligned social icons (GitHub, LinkedIn, Email)

### 3. Add Social Link Interactions
- Implement hover effects for social icons (gray to brand-specific colors)
- Add proper links to social platforms
- Ensure accessibility with proper ARIA attributes

### 4. Make Responsive
- Implement mobile-first responsive design
- Stack content vertically on mobile screens
- Arrange horizontally on desktop screens

### 5. Integrate into Layout
- Import and place `<Footer />` component in the main layout
- Ensure it appears at the bottom of the page

## Usage
The footer will automatically adapt between desktop horizontal layout and mobile vertical stacking based on screen size. Social icons will respond to hover interactions with appropriate color changes.

## Testing
- Verify the glass border design appears correctly on all screen sizes
- Test hover effects on social icons
- Verify responsive transitions work properly
- Ensure accessibility compliance