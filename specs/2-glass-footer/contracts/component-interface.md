# Glass Footer Component Contract

## Component Interface

### Footer Component
```typescript
interface FooterProps {
  className?: string;
  copyrightText?: string;
  centerText?: string;
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
- **Render**: Displays footer with minimalist glass design and top border
- **Responsive**: Stacks content vertically on mobile, horizontal on desktop
- **Interact**: Social icons change color on hover
- **Link**: Social icons navigate to appropriate platforms when clicked

### Styling Contract
- **Background**: `bg-black` (deep black) or transparent
- **Border**: `border-t border-white/10` (top border only)
- **Height**: `h-20` (compact height)
- **Layout**: Flexbox with `justify-between` on desktop, `flex-col` on mobile
- **Content Alignment**: Left, center, right on desktop; stacked on mobile

### Interaction Contract
- **Social Icons**: Start with `text-gray-400`, change to brand colors on hover
- **Hover Effects**: Smooth transitions for color changes
- **Click Events**: Social icons link to appropriate platforms

### Accessibility Contract
- **Keyboard Navigation**: All links accessible via keyboard
- **Screen Reader**: Proper ARIA labels and roles
- **Focus Management**: Proper focus handling for social links
- **Reduced Motion**: Respects user's reduced motion preferences