# Quickstart: Minimalist Glass Footer

## Overview
This guide explains how to implement and use the Minimalist Glass Footer component with its deep black background, subtle border, and responsive layout.

## Prerequisites
- Next.js 15 with App Router
- TypeScript with Strict Mode
- Tailwind CSS with tailwindcss-animate plugin
- Lucide React for icons
- Framer Motion for animations

## Installation
1. Ensure all required dependencies are installed in your project
2. The component uses Tailwind classes for styling: `bg-[#050505]`, `border-t border-white/10`, `py-4`, `justify-between`
3. The component uses Lucide React for social icons and gradient effects

## File Structure
```
components/
└── layout/
    └── footer.tsx          # Main footer component with minimalist design
```

## Implementation Steps

### 1. Create the Footer Component
- Create `components/layout/footer.tsx`
- Implement the minimalist design with deep black background
- Add top border only using `border-t border-white/10`
- Set minimal vertical padding with `py-4`

### 2. Implement Content Layout
- Add left-aligned copyright section with Next.js icon and text
- Add center-aligned technology credits with gradient glow effect
- Add right-aligned social icons (GitHub, LinkedIn, Email)

### 3. Add Social Link Interactions
- Implement hover effects for social icons (gray to brand-specific colors)
- Add proper links to social platforms
- Ensure accessibility with proper ARIA attributes

### 4. Apply Gradient Glow Effect
- Implement the subtle gradient glow effect for center text (Cyan to Blue)
- Use Tailwind's `bg-clip-text` and gradient utilities

### 5. Make Responsive
- Implement mobile-first responsive design
- Ensure proper alignment across all screen sizes

### 6. Integrate into Layout
- Import and place `<Footer />` component in the main layout
- Ensure it appears at the bottom of the page

## Usage
The footer will display with a deep black background and subtle top border. The left side shows copyright information with a Next.js icon, the center displays technology credits with a gradient glow effect, and the right side contains social icons that change color on hover.

## Testing
- Verify the minimalist design appears correctly on all screen sizes
- Test hover effects on social icons
- Verify gradient glow effect is visible
- Ensure accessibility compliance