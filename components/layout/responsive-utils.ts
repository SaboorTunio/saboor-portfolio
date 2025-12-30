import { useState, useEffect } from 'react';

// Breakpoints
const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

// Hook to detect screen size
export function useScreenSize() {
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width < BREAKPOINTS.md) {
        setScreenSize('mobile');
      } else if (width < BREAKPOINTS.lg) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    // Initial detection
    updateScreenSize();

    // Add resize listener
    window.addEventListener('resize', updateScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return screenSize;
}

// Function to check if current screen is mobile
export function isMobile() {
  if (typeof window !== 'undefined') {
    return window.innerWidth < BREAKPOINTS.md;
  }
  return false; // Default to false for SSR
}

// Function to check if current screen is tablet
export function isTablet() {
  if (typeof window !== 'undefined') {
    return window.innerWidth >= BREAKPOINTS.md && window.innerWidth < BREAKPOINTS.lg;
  }
  return false; // Default to false for SSR
}

// Function to check if current screen is desktop
export function isDesktop() {
  if (typeof window !== 'undefined') {
    return window.innerWidth >= BREAKPOINTS.lg;
  }
  return true; // Default to true for SSR
}

// Hook to detect if user prefers reduced motion
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if the browser supports the reduced motion media query
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);

      const handleChange = (event: MediaQueryListEvent) => {
        setPrefersReducedMotion(event.matches);
      };

      // Listen for changes to the preference
      mediaQuery.addEventListener('change', handleChange);

      // Cleanup listener on unmount
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  return prefersReducedMotion;
}