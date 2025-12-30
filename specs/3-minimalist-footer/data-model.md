# Data Model: Minimalist Glass Footer

## Entities

### FooterContent
- **copyrightText**: string - The copyright text to display on the left side (e.g., "© 2025 [Your Name]")
- **creditsText**: string - The center text to display (e.g., "Built with Next.js & Agentic AI")
- **socialLinks**: SocialLink[] - Array of social media links to display on the right side

### SocialLink
- **name**: string - The name of the social platform (e.g., "GitHub", "LinkedIn", "Email")
- **icon**: ReactNode - The icon component to display
- **url**: string - The URL to link to
- **defaultColor**: string - The default color class (e.g., "text-gray-400")
- **hoverColor**: string - The hover color class (e.g., "text-white", "text-blue-500", "text-cyan-500")

### FooterState
- **currentBreakpoint**: string - Current responsive breakpoint ("mobile", "tablet", "desktop")

### FooterProps
- **className**: string (optional) - Additional CSS classes to apply to the footer
- **copyrightText**: string (optional) - Custom copyright text (defaults to "© 2025 [Your Name]")
- **creditsText**: string (optional) - Custom center text (defaults to "Built with Next.js & Agentic AI")
- **socialLinks**: SocialLink[] (optional) - Custom social links (defaults to GitHub, LinkedIn, Email)

## State Transitions

### Responsive Layout
- **Initial State**: `currentBreakpoint = "desktop"` (or determined by screen size detection)
- **Mobile View**: Screen width < 768px → `currentBreakpoint = "mobile"`
- **Desktop View**: Screen width >= 768px → `currentBreakpoint = "desktop"`

## Validation Rules

### FooterContent Validation
- **copyrightText**: Must be non-empty string with 10-50 characters
- **creditsText**: Must be non-empty string with 10-50 characters
- **socialLinks**: Must contain 1-5 social links

### SocialLink Validation
- **name**: Must be non-empty string with 1-20 characters
- **url**: Must be valid URL format
- **defaultColor**: Must be valid Tailwind color class
- **hoverColor**: Must be valid Tailwind color class

## Relationships
- FooterState contains the responsive breakpoint information
- FooterContent contains multiple SocialLink entities
- FooterProps defines the interface for the main component
- SocialLink entities are rendered in the right section of the footer