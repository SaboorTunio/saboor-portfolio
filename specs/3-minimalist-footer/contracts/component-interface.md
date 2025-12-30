# Minimalist Glass Footer Component Contract

## Component Interface

### Footer Component
```typescript
interface FooterProps {
  className?: string;
  copyrightText?: string;
  creditsText?: string;
  socialLinks?: SocialLink[];
}

interface SocialLink {
  name: string;
  icon: ReactNode;
  url: string;
  defaultColor: string;
  hoverColor: string;
}
```

### Expected Behavior
- **Render**: Displays footer with minimalist design and deep black background
- **Layout**: Uses flexbox with `justify-between` alignment for left, center, right content
- **Interact**: Social icons change color on hover, center text has gradient glow effect
- **Link**: Social icons navigate to appropriate platforms when clicked

### Styling Contract
- **Background**: `bg-[#050505]` (deep black)
- **Border**: `border-t border-white/10` (top border only)
- **Padding**: `py-4` (minimal vertical padding)
- **Layout**: Flexbox with `justify-between` alignment
- **Content Alignment**: Left, center, right sections

### Interaction Contract
- **Social Icons**: Start with `text-gray-400`, change to brand colors on hover
- **Gradient Glow**: Center text has subtle gradient glow effect (Cyan to Blue)
- **Hover Effects**: Smooth transitions for color changes
- **Click Events**: Social icons link to appropriate platforms

### Accessibility Contract
- **Keyboard Navigation**: All links accessible via keyboard
- **Screen Reader**: Proper ARIA labels and roles
- **Focus Management**: Proper focus handling for social links
- **Reduced Motion**: Respects user's reduced motion preferences