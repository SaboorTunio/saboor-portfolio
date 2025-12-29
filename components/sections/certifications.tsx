"use client";

import { certificationsData } from "@/lib/data";
import { motion } from "framer-motion";

export default function Certifications() {
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
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="glass-card bg-[#ffffff0d] backdrop-blur-xl border border-[#ffffff1a] rounded-xl p-6 transition-all duration-300"
              style={{
                border: `1px solid ${cert.brandColor}20`,
                boxShadow: `0 0 15px ${cert.brandColor}20`
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: `0 0 20px ${cert.brandColor}40`,
                borderColor: `${cert.brandColor}40`
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center">
                <div
                  className="w-3 h-3 rounded-full mr-3"
                  style={{ backgroundColor: cert.brandColor }}
                ></div>
                <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}