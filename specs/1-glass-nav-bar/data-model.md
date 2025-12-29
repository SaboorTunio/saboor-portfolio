# Data Model: Glass Navigation Bar

## Navigation Bar Entity

**Name**: Navigation Bar
**Description**: The main navigation component with glass aesthetic properties and positioning
**Fields**:
- `isVisible`: boolean - Whether the navigation bar is currently visible
- `position`: string - Fixed position at top center (z-index: 50)
- `backgroundColor`: string - Translucent dark background (bg-black/50)
- `blurEffect`: string - Frosted glass effect (backdrop-blur-md)
- `borderStyle`: string - Subtle white border (border-white/10)
- `shape`: string - Rounded-full on desktop, full width on mobile
- `animationState`: string - Fade-in on load

**Validation Rules**:
- `isVisible` must be boolean
- `position` must be fixed at top center
- `backgroundColor` must match design specification (bg-black/50)
- `blurEffect` must be backdrop-blur-md
- `borderStyle` must be border-white/10

## Navigation Links Entity

**Name**: Navigation Links
**Description**: Interactive elements that allow users to navigate to different sections of the portfolio
**Fields**:
- `links`: array - List of navigation links ["Home", "Skills", "Journey", "Contact"]
- `hoverEffect`: string - Neon Cyan glow (#06b6d4) on desktop hover
- `targetSection`: string - Section to scroll to when clicked
- `isActive`: boolean - Whether the link is currently selected

**Validation Rules**:
- `links` must contain the required navigation items
- `hoverEffect` must be Neon Cyan (#06b6d4) on desktop
- `targetSection` must correspond to an existing page section
- `isActive` must be boolean

## Mobile Overlay Entity

**Name**: Mobile Overlay
**Description**: Full-screen glass overlay that appears on mobile devices when hamburger menu is clicked
**Fields**:
- `isOpen`: boolean - Whether the overlay is currently open
- `backgroundColor`: string - Translucent dark background (bg-black/50)
- `blurEffect`: string - Frosted glass effect (backdrop-blur-md)
- `animationType`: string - Slide-in animation using Framer Motion
- `hamburgerIconVisible`: boolean - Whether hamburger menu icon is visible

**Validation Rules**:
- `isOpen` must be boolean
- `backgroundColor` must match design specification (bg-black/50)
- `blurEffect` must be backdrop-blur-md
- `animationType` must use Framer Motion
- `hamburgerIconVisible` must be boolean