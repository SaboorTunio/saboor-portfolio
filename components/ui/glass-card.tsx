import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glow?: "cyan" | "purple" | "none";
  animate?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  glow = "none",
  animate = false
}: GlassCardProps) {
  const glowStyle = {
    "cyan": "before:absolute before:-inset-1 before:-z-10 before:rounded-xl before:bg-[radial-gradient(circle_at_center,_var(--neon-cyan)_0%,_transparent_70%)]",
    "purple": "before:absolute before:-inset-1 before:-z-10 before:rounded-xl before:bg-[radial-gradient(circle_at_center,_var(--neon-purple)_0%,_transparent_70%)]",
    "none": ""
  };

  const cardClasses = `relative rounded-xl bg-[#ffffff0d] backdrop-blur-xl border border-[#ffffff1a] p-6 ${glowStyle[glow]} ${className}`;

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cardClasses}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={cardClasses}>{children}</div>;
}