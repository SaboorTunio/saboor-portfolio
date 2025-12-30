"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { NavigationLink } from './types';
import { X } from 'lucide-react';
import NavLinks from './nav-links';
import { cn } from '@/lib/utils';
import { useReducedMotion } from './responsive-utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavigationLink[];
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex flex-col items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          transition={prefersReducedMotion ? { duration: 0 } : undefined}
        >
          <motion.div
            className="bg-black/50 backdrop-blur-lg border border-white/10 rounded-xl w-full max-w-md p-6"
            initial={{ scale: prefersReducedMotion ? 1 : 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: prefersReducedMotion ? 1 : 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            transition={prefersReducedMotion ? { duration: 0 } : { type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="flex justify-end mb-4">
              <button
                onClick={onClose}
                className="text-white hover:text-[#06b6d4] transition-colors focus:outline-none focus:ring-2 focus:ring-[#06b6d4] rounded-full p-1"
                aria-label="Close menu"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onClose();
                  }
                }}
              >
                <X size={24} />
              </button>
            </div>
            <NavLinks
              links={links}
              className="flex-col gap-4"
              onItemClick={onClose}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}