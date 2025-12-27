import GlassCard from "@/components/ui/glass-card";
import NeonButton from "@/components/ui/neon-button";
import { socialLinks } from "@/lib/data";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
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
          Get in Touch
        </motion.h2>

        <GlassCard className="p-8 mb-12">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full bg-[#ffffff0d] border border-[#ffffff1a] rounded-lg px-4 py-3 text-white placeholder-[#a8a8a8] focus:outline-none focus:border-[#06b6d4] transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full bg-[#ffffff0d] border border-[#ffffff1a] rounded-lg px-4 py-3 text-white placeholder-[#a8a8a8] focus:outline-none focus:border-[#06b6d4] transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-[#ffffff0d] border border-[#ffffff1a] rounded-lg px-4 py-3 text-white placeholder-[#a8a8a8] focus:outline-none focus:border-[#06b6d4] transition-colors resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <div className="pt-4">
              <NeonButton variant="gradient" className="w-full sm:w-auto">
                Send Message
              </NeonButton>
            </div>
          </form>
        </GlassCard>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-white mb-6">Or connect with me on</h3>
          <div className="flex justify-center space-x-8">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                className="text-white hover:text-[#06b6d4] transition-colors p-2 rounded-full hover:bg-[#ffffff1a] transition-all duration-300"
                aria-label={social.name}
              >
                {social.icon === 'github' && <Github size={24} />}
                {social.icon === 'linkedin' && <Linkedin size={24} />}
                {social.icon === 'mail' && <Mail size={24} />}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}