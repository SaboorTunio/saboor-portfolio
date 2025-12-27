# Quickstart Guide: Neon Glass AI Portfolio

**Feature**: 1-neon-glass-portfolio
**Date**: 2025-12-28

## Prerequisites

- Node.js 18+ (or latest LTS)
- npm or pnpm package manager
- Git for version control

## Setup Instructions

### 1. Clone and Initialize
```bash
# Clone the repository
git clone <your-repo-url>
cd saboor-portfolio

# Install dependencies
npm install
# OR if using pnpm
pnpm install
```

### 2. Environment Variables
Create a `.env.local` file in the root directory:

```env
# Resend API Key for contact form (optional during development)
RESEND_API_KEY=your_resend_api_key_here

# Add other environment variables as needed
```

### 3. Install Required Dependencies
```bash
npm install framer-motion lucide-react clsx tailwind-merge tailwindcss-animate
```

### 4. Run Development Server
```bash
npm run dev
# OR if using pnpm
pnpm dev
```

The development server will start at `http://localhost:3000`

## Key Configuration Files

### Tailwind CSS
- `tailwind.config.ts` - Configure the "Neon Glass" design tokens
- `app/globals.css` - Global styles and custom properties

### Project Structure
- `app/page.tsx` - Main page layout
- `components/ui/` - Reusable UI components (GlassCard, GradientButton, etc.)
- `components/sections/` - Page sections (Hero, SkillsMatrix, etc.)
- `lib/data.ts` - Portfolio data (skills, education, certifications)

## Development Workflow

### Adding New Components
1. Create new components in `components/ui/` for reusable elements
2. Create section components in `components/sections/` for page sections
3. Follow the functional component pattern with TypeScript
4. Use Tailwind classes for styling, following the "Neon Glass" design system
5. Add Framer Motion animations for interactive elements

### Styling Guidelines
- Use the predefined color palette:
  - Background: `#050505` (Deep Void Black)
  - Glass effect: `bg-white/5`, `backdrop-blur-xl`, `border-white/10`
  - Glows: Cyan `#06b6d4`, Purple `#a855f7`
- Use `font-['Geist_Mono']` for headers
- Use `font-['Inter']` for body text
- Implement mobile-first responsive design

### Animation Guidelines
- All interactive elements must use Framer Motion
- Use entrance animations for content sections
- Implement hover effects with Framer Motion
- Follow performance best practices (use transform and opacity)

## Build and Deployment

### Build for Production
```bash
npm run build
```

### Run Production Server
```bash
npm run start
```

### Deployment
The portfolio is optimized for Vercel deployment. For other platforms, ensure:
- Node.js environment
- Static asset handling
- Environment variables configured