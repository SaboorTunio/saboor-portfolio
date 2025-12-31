"use client";

import GlassCard from "@/components/ui/glass-card";
import { GraduationCap } from "lucide-react";
import { educationData } from "@/lib/data";
import { motion } from "framer-motion";

export default function EducationTimeline() {
  const giaicEducation = educationData[0]; // Existing GIAIC education entry

  return (
    <section id="journey" className="py-16 px-4">
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

        <div className="flex flex-col gap-6">
          {/* New Intermediate in Pre Engineering card - appears first */}
          <GlassCard className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-green-500/10 text-green-500">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white">Intermediate in Pre Engineering</h3>
                  <span className="text-[#a8a8a8] text-sm">2023-2025</span>
                </div>
                <p className="text-[#a8a8a8]">Completed intermediate studies with focus on Pre Engineering.</p>
              </div>
            </div>
          </GlassCard>

          {/* Existing GIAIC card - remains unchanged */}
          <GlassCard className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">{giaicEducation.program}</h3>
              <p className="text-[#a8a8a8]">{giaicEducation.duration}</p>
            </div>

            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-4 top-0 h-full w-0.5 bg-[#ffffff1a] transform -translate-x-1/2"></div>

              {giaicEducation.items.map((item, index) => (
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
      </div>
    </section>
  );
}