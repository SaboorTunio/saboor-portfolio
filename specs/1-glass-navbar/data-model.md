# Data Model: Glass Navigation Bar

## Entities

### NavigationLink
- **name**: string - The display name of the navigation item (e.g., "Home", "Skills", "Journey", "Contact")
- **path**: string - The URL path or anchor link that the navigation item points to
- **isActive**: boolean - Whether this link is currently the active page
- **icon** (optional): ReactNode - Optional icon to display with the link

### NavigationState
- **isMobileMenuOpen**: boolean - Tracks whether the mobile menu overlay is currently open
- **currentBreakpoint**: string - Current responsive breakpoint ("mobile", "tablet", "desktop")
- **activeLink**: string - The currently active navigation link

### GlassNavbarProps
- **links**: NavigationLink[] - Array of navigation links to display
- **className**: string (optional) - Additional CSS classes to apply to the navbar
- **logo** (optional): string - Optional logo element or path
- **onLinkClick**: function (optional) - Callback function when a navigation link is clicked

## State Transitions

### Mobile Menu
- **Initial State**: `isMobileMenuOpen = false`
- **Toggle Open**: User clicks hamburger menu → `isMobileMenuOpen = true`
- **Toggle Close**: User clicks close button or outside menu → `isMobileMenuOpen = false`

## Validation Rules

### NavigationLink Validation
- **name**: Must be non-empty string with 1-30 characters
- **path**: Must be valid URL path or anchor link format
- **isActive**: Only one link can be active at a time

### NavigationState Validation
- **isMobileMenuOpen**: Boolean value only
- **currentBreakpoint**: Must be one of ["mobile", "tablet", "desktop"]
- **activeLink**: Must match one of the link names in the links array

## Relationships
- NavigationState contains multiple NavigationLink entities
- GlassNavbarProps defines the interface for the main component
- Mobile menu state affects the visibility of navigation items on smaller screens