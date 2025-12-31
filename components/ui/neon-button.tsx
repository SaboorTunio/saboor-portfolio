"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface NeonButtonProps {
  children: ReactNode;
  variant?: "neon-border" | "ghost" | "gradient";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function NeonButton({
  children,
  variant = "neon-border",
  onClick,
  className = "",
  disabled = false,
  type = "button"
}: NeonButtonProps) {
  const baseClasses = "px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center";

  const variantClasses = {
    "neon-border": `border-2 border-[#06b6d4] text-[#06b6d4] bg-transparent hover:bg-[#06b6d410] hover:shadow-[0_0_15px_#06b6d440]`,
    "ghost": `text-white border border-white/30 hover:bg-white/10`,
    "gradient": `bg-gradient-to-r from-[#06b6d4] to-[#a855f7] text-white hover:shadow-[0_0_20px_#06b6d480] hover:scale-[1.02]`
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      type={type}
    >
      {children}
    </motion.button>
  );
}