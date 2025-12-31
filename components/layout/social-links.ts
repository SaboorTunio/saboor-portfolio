import { Github, Linkedin, Mail } from 'lucide-react';
import { SocialLink } from './types';

export const defaultSocialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/SaboorTunio',
    defaultColor: 'text-gray-400',
    hoverColor: 'text-white'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'www.linkedin.com/in/abdulsaboortunio',
    defaultColor: 'text-gray-400',
    hoverColor: 'text-blue-500'
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:saboortunio2021@gmail.com',
    defaultColor: 'text-gray-400',
    hoverColor: 'text-cyan-500'
  }
];