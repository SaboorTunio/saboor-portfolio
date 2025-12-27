import GlassCard from "@/components/ui/glass-card";
import { educationData } from "@/lib/data";
import { motion } from "framer-motion";

export default function EducationTimeline() {
  const education = educationData[0]; // We only have one education entry

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center text-white mb-12 font-['Geist_Mono']"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>

        <GlassCard className="p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">{education.program}</h3>
            <p className="text-[#a8a8a8]">{education.duration}</p>
          </div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-[#ffffff1a] transform -translate-x-1/2"></div>

            {education.items.map((item, index) => (
              <motion.div
                key={index}
                className="relative pl-12 pb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Timeline node */}
                <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-gradient-to-r from-[#06b6d4] to-[#a855f7] flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#050505]"></div>
                </div>

                <motion.div
                  className="bg-[#ffffff0d] backdrop-blur-xl border border-[#ffffff1a] rounded-lg p-4 hover:border-[#ffffff30] transition-all duration-300 cursor-default"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[#06b6d4] font-medium">{item.quarter}</span>
                      <h4 className="text-xl font-semibold text-white mt-1">{item.subject}</h4>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${item.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                      {item.status}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}