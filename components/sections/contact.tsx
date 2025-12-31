// IMPORTANT: Make sure to add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to your .env.local file
"use client";

import GlassCard from "@/components/ui/glass-card";
import NeonButton from "@/components/ui/neon-button";
import { socialLinks } from "@/lib/data";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Define Zod validation schema
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Email is invalid'),
  message: z.string().min(1, 'Message is required').min(10, 'Message should be at least 10 characters'),
  'bot-field': z.string().optional() // Honeypot field for spam protection
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting: isHookSubmitting },
    reset,
    setError
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);

    // Check if access key is available
    if (!process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY) {
      setSubmitError('Configuration error. Please contact the site administrator.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: data.name,
          email: data.email,
          message: data.message,
          'bot-field': data.botpoison ? 'true' : 'false' // Using bot-field for spam protection
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitSuccess(true);
        reset(); // Reset form after successful submission
        // Hide success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        setSubmitError(result.message || 'Failed to send message. Please try again.');
        // Set form-level error
        setError('root', { message: result.message || 'Submission failed' });
      }
    } catch (error) {
      setSubmitError('An error occurred while sending the message. Please try again.');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-4">
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
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  {...register('name')}
                  className={`w-full bg-[#ffffff0d] border ${errors.name ? 'border-red-500' : 'border-[#ffffff1a]'} rounded-lg px-4 py-3 text-white placeholder-[#a8a8a8] focus:outline-none focus:border-[#06b6d4] transition-colors`}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                  className={`w-full bg-[#ffffff0d] border ${errors.email ? 'border-red-500' : 'border-[#ffffff1a]'} rounded-lg px-4 py-3 text-white placeholder-[#a8a8a8] focus:outline-none focus:border-[#06b6d4] transition-colors`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  {...register('message')}
                  rows={5}
                  className={`w-full bg-[#ffffff0d] border ${errors.message ? 'border-red-500' : 'border-[#ffffff1a]'} rounded-lg px-4 py-3 text-white placeholder-[#a8a8a8] focus:outline-none focus:border-[#06b6d4] transition-colors resize-none`}
                  placeholder="Your message here..."
                ></textarea>
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
              </div>

              {/* Botpoison spam protection (hidden field) */}
              <input
                type="checkbox"
                className="hidden"
                id="botpoison"
                {...register('botpoison')}
              />

              {submitError && (
                <div className="text-red-400 text-sm">
                  {submitError}
                </div>
              )}

              <div className="pt-4">
                <NeonButton
                  variant="gradient"
                  className="w-full sm:w-auto"
                  type="submit"
                  disabled={isSubmitting || isHookSubmitting}
                >
                  {isSubmitting || isHookSubmitting ? 'Sending...' : 'Send Message'}
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