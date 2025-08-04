'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

import { buttonVariants } from '../lib/animations';

import { getToken } from '@/features/auth/lib/token';

const NavigationButton = () => {
  const router = useRouter();

  const navigation = () => {
    if (!getToken()) {
      return router.push('/login');
    }

    router.push('/home');
  };

  return (
    <motion.button
      className="group relative px-6 py-3 sm:px-8 sm:py-4 text-black bg-white rounded-lg font-semibold hover:bg-white/90 hover:cursor-pointer transition-all duration-300 w-full sm:w-auto"
      variants={buttonVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={navigation}
    >
      <span className="relative z-10">Mulai Belajar Sekarang</span>
    </motion.button>
  );
};

export default NavigationButton;
