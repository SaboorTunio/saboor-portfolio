import { motion } from "framer-motion";

interface SkillBarProps {
  skillName: string;
  level: number;
  animate?: boolean;
}

export default function SkillBar({ skillName, level, animate = true }: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-white font-medium">{skillName}</span>
        <span className="text-[#06b6d4]">{level}%</span>
      </div>
      <div className="w-full bg-[#ffffff1a] rounded-full h-2.5">
        <motion.div
          className="bg-gradient-to-r from-[#06b6d4] to-[#a855f7] h-2.5 rounded-full"
          initial={animate ? { width: 0 } : { width: `${level}%` }}
          animate={animate ? { width: `${level}%` } : {}}
          transition={animate ? { duration: 1, ease: "easeOut" } : {}}
        />
      </div>
    </div>
  );
}