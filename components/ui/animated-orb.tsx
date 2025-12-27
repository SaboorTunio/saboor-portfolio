import { motion } from "framer-motion";

interface AnimatedOrbProps {
  size?: number;
  color?: string;
  className?: string;
}

export default function AnimatedOrb({ size = 100, color = "#06b6d4", className = "" }: AnimatedOrbProps) {
  return (
    <motion.div
      className={`rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: "blur(20px)"
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.7, 0.9, 0.7]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
}