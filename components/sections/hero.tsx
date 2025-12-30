"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import GlassCard from "@/components/ui/glass-card";
import NeonButton from "@/components/ui/neon-button";
import AnimatedOrb from "@/components/ui/animated-orb";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [animationPhase, setAnimationPhase] = useState<"intro" | "pause" | "deleting" | "final" | "complete">("intro");
  const [showSubheadline, setShowSubheadline] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const texts = [
    "Hi, I'm Saboor Tunio",
    "Building Intelligent Systems with Agentic AI."
  ];

  useEffect(() => {
    const currentText = texts[currentIndex];

    if (animationPhase === "intro" && displayText.length < currentText.length) {
      const timer = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timer);
    }

    if (animationPhase === "intro" && displayText.length === currentText.length) {
      // Move to pause phase after typing completes
      const timer = setTimeout(() => {
        setAnimationPhase("pause");
      }, 1500);
      return () => clearTimeout(timer);
    }

    if (animationPhase === "pause") {
      // Move to deleting phase after pause
      const timer = setTimeout(() => {
        setAnimationPhase("deleting");
        setIsDeleting(true);
      }, 1500);
      return () => clearTimeout(timer);
    }

    if (animationPhase === "deleting" && displayText.length > 0) {
      const timer = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, 50);
      return () => clearTimeout(timer);
    }

    if (animationPhase === "deleting" && displayText.length === 0) {
      // Move to final phase after deletion completes
      setCurrentIndex(1); // Switch to second text
      setAnimationPhase("final");
      setIsDeleting(false);
    }

    if (animationPhase === "final" && displayText.length < texts[1].length) {
      const timer = setTimeout(() => {
        setDisplayText(texts[1].substring(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timer);
    }

    if (animationPhase === "final" && displayText.length === texts[1].length) {
      // Animation complete
      setAnimationPhase("complete");

      // Show subheadline and buttons after a delay
      const subheadlineTimer = setTimeout(() => {
        setShowSubheadline(true);
      }, 500);

      const buttonsTimer = setTimeout(() => {
        setShowButtons(true);
      }, 1000);

      return () => {
        clearTimeout(subheadlineTimer);
        clearTimeout(buttonsTimer);
      };
    }
  }, [displayText, animationPhase, currentIndex, texts]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background with subtle noise texture */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: "#050505",
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 94c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\" fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E\")"
        }}
      />

      {/* Animated orb */}
      <div className="absolute top-1/4 left-1/4 z-0">
        <AnimatedOrb size={200} color="#06b6d4" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 px-4">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-['Geist_Mono'] leading-tight">
              {displayText}
              <span className={`inline-block w-1 h-12 bg-white ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} animate-pulse`} style={{ minHeight: '1em' }}></span>
            </h1>

            {showSubheadline && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-xl md:text-2xl text-[#a8a8a8] mb-8 font-['Inter']"
              >
                Full Stack Developer bridging the gap between Next.js and Autonomous Agents.
              </motion.p>
            )}

            {showButtons && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <NeonButton variant="neon-border">
                  View Work
                </NeonButton>
                <NeonButton variant="ghost">
                  Contact
                </NeonButton>
              </motion.div>
            )}
          </motion.div>

          {/* Personal Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-full border-4 border-cyan-500 shadow-[0_0_40px_rgba(6,182,212,0.6)] overflow-hidden w-48 h-48 md:w-64 md:h-64"
            >
              <Image
                src="/photo-portfolio.png"
                alt="Abdul Saboor Tunio - Full Stack Developer"
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}