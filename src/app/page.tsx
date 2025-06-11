'use client';

import React from 'react';
import { motion } from 'motion/react';
import AnimatedBackground from '@/features/landing/components/AnimatedBackground';
import TeamsSection from '@/features/landing/components/Team';
import Hero from '@/features/landing/components/Hero';
import Feature from '@/features/landing/components/Feature';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />

      <Hero />

      <Feature />

      <TeamsSection />

      <motion.div
        className="fixed bottom-0 left-0 w-full h-36 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      />

      <motion.div
        className="fixed top-20 right-10 text-white/10 text-8xl font-bold select-none pointer-events-none"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        あ
      </motion.div>

      <motion.div
        className="fixed bottom-40 left-10 text-white/10 text-6xl font-bold select-none pointer-events-none"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -3, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      >
        漢
      </motion.div>
    </div>
  );
}
