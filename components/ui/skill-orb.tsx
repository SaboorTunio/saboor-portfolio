"use client";

import { motion } from "framer-motion";

interface SkillOrbProps {
  skillName: string;
  level: number;
  animate?: boolean;
}

export default function SkillOrb({ skillName, level, animate = true }: SkillOrbProps) {
  const size = 80; // Fixed size for consistency
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (level / 100) * circumference;

  return (
    <div className="flex flex-col items-center m-4">
      <div className="relative">
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#ffffff1a"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Progress circle */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#gradient)"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={animate ? circumference : offset}
            initial={animate ? { strokeDashoffset: circumference } : false}
            animate={animate ? { strokeDashoffset: offset } : {}}
            transition={animate ? { duration: 1.5, ease: "easeOut" } : {}}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-sm font-bold">{level}%</span>
        </div>
      </div>
      <span className="mt-2 text-white text-center">{skillName}</span>
    </div>
  );
}