import GlassCard from "@/components/ui/glass-card";
import NeonButton from "@/components/ui/neon-button";
import { socialLinks } from "@/lib/data";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));

    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
          {submitSuccess ? (
            <div className="text-center py-8">
              <div className="text-green-400 text-xl font-medium mb-2">Message Sent!</div>
              <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon.</p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-[#ffffff0d] border ${errors.name ? 'border-red-500' : 'border-[#ffffff1a]'} rounded-lg px-4 py-3 text-white placeholder-[#a8a8a8] focus:outline-none focus:border-[#06b6d4] transition-colors`}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-[#ffffff0d] border ${errors.email ? 'border-red-500' : 'border-[#ffffff1a]'} rounded-lg px-4 py-3 text-white placeholder-[#a8a8a8] focus:outline-none focus:border-[#06b6d4] transition-colors`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full bg-[#ffffff0d] border ${errors.message ? 'border-red-500' : 'border-[#ffffff1a]'} rounded-lg px-4 py-3 text-white placeholder-[#a8a8a8] focus:outline-none focus:border-[#06b6d4] transition-colors resize-none`}
                  placeholder="Your message here..."
                ></textarea>
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>

              <div className="pt-4">
                <NeonButton
                  variant="gradient"
                  className="w-full sm:w-auto"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </NeonButton>
              </div>
            </form>
          )}
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