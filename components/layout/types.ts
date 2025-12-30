import { ReactNode } from 'react';

export interface SocialLink {
  name: string;
  icon: ReactNode;
  url: string;
  defaultColor: string;
  hoverColor: string;
}