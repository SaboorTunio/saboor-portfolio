import { ReactNode, ComponentType, ForwardRefExoticComponent, SVGProps } from 'react';

export interface NavigationLink {
  name: string;
  path: string;
  isActive?: boolean;
}

export interface SocialLink {
  name: string;
  icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'> & { ref?: any }>;
  url: string;
  defaultColor: string;
  hoverColor: string;
}