import GlassCard from "@/components/ui/glass-card";
import SkillBar from "@/components/ui/skill-bar";
import SkillOrb from "@/components/ui/skill-orb";
import { frontendSkills, backendSkills } from "@/lib/data";
import { motion } from "framer-motion";

export default function SkillsSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center text-white mb-12 font-['Geist_Mono']"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills Matrix
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Frontend Skills */}
          <GlassCard className="p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Frontend</h3>
            {frontendSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillBar skillName={skill.name} level={skill.level} />
              </motion.div>
            ))}
          </GlassCard>

          {/* AI & Backend Skills */}
          <GlassCard className="p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">AI & Backend</h3>
            <div className="flex flex-wrap justify-center">
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <SkillOrb skillName={skill.name} level={skill.level} />
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}