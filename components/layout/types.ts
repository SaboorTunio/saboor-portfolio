import { ReactNode } from 'react';

export interface NavigationLink {
  name: string;
  path: string;
  isActive?: boolean;
  icon?: ReactNode;
}

export interface NavigationState {
  isMobileMenuOpen: boolean;
  currentBreakpoint: 'mobile' | 'tablet' | 'desktop';
  activeLink: string;
}