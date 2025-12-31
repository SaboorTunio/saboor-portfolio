"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { navigationLinks } from './navigation-links';
import NavLinks from './nav-links';
import MobileMenu from './mobile-menu';
import { cn } from '@/lib/utils';
import { useReducedMotion } from './responsive-utils';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Update active link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update links with active state
  const linksWithActiveState = navigationLinks.map(link => ({
    ...link,
    isActive: link.path === activeLink
  }));

  return (
    <>
      <motion.nav
        className="w-11/12 max-w-4xl mx-auto mt-4 z-50 fixed left-0 right-0 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5 }}
      >
        <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-4 py-3 flex justify-between items-center w-full md:px-6">
          <div className="flex items-center">
            <span className="text-white font-bold">Saboor Tunio's Portfolio</span>
          </div>
          <NavLinks
            links={linksWithActiveState}
            className="hidden md:flex flex-row gap-6"
          />
          <button
            className="md:hidden text-white hover:text-[#06b6d4] transition-colors focus:outline-none focus:ring-2 focus:ring-[#06b6d4] rounded-full p-1"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setIsMobileMenuOpen(true);
              }
            }}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={linksWithActiveState}
      />
    </>
  );
}