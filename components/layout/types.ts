import { ReactNode } from 'react';

export interface NavigationLink {
  name: string;
  path: string;
  isActive?: boolean;
}

export interface SocialLink {
  name: string;
  icon: ReactNode;
  url: string;
  defaultColor: string;
  hoverColor: string;
}