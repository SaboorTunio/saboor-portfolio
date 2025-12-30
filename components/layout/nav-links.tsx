"use client";

import { NavigationLink } from './types';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavLinksProps {
  links: NavigationLink[];
  className?: string;
  onItemClick?: () => void;
}

export default function NavLinks({ links, className, onItemClick }: NavLinksProps) {
  return (
    <ul className={cn("flex flex-col md:flex-row gap-4 items-center", className)}>
      {links.map((link) => (
        <li key={link.path}>
          <Link
            href={link.path}
            className={cn(
              "text-white transition-all duration-300 hover:text-[#06b6d4] hover:shadow-[0_0_8px_#06b6d4] focus:outline-none focus:ring-2 focus:ring-[#06b6d4] rounded",
              link.isActive && "text-[#06b6d4]"
            )}
            onClick={onItemClick}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onItemClick?.();
              }
            }}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}