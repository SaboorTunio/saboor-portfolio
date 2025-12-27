import { currentFocus } from "@/lib/data";
import { motion } from "framer-motion";

export default function CurrentFocus() {
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
          Current Focus
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4">
          {currentFocus.map((focus, index) => (
            <motion.div
              key={index}
              className="bg-[#ffffff0d] backdrop-blur-xl border border-[#ffffff1a] rounded-lg px-6 py-3"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="text-white font-medium">{focus}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}