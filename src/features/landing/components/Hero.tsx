import React from 'react'
import { motion } from 'motion/react'
import { containerVariants, itemVariants, heroVariants, buttonVariants } from '../lib/animations';
import { heroData } from '../data/heroData';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();

  return (
    <motion.section
        className="relative z-10 px-6 h-svh flex items-center justify-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 z-0 pointer-events-none bg-grid" />

        <div className="text-center max-w-6xl mx-auto">
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-b from-[] text-white mb-6 leading-tight"
            variants={heroVariants}
          >
            Platform Belajar Bahasa Jepang
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed text-muted-foreground"
            variants={itemVariants}
          >
            Platform yang <span className='text-white'>menggabungkan metode hafalan dan kuis interaktif</span>, membantu Anda belajar secara efektif dan menyenangkan dalam satu tempat.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            variants={buttonVariants}
          >
            <motion.button
              className="group relative px-5 py-3 text-black bg-white rounded-lg font-semibold hover:bg-white/90 hover:cursor-pointer"
              variants={buttonVariants}
              onClick={() => router.push('/login')}
            >
              <span className="relative z-10">Mulai Belajar Sekarang</span>
            </motion.button>
          </motion.div>
        </div>
        
      </motion.section>
  )
}

export default Hero;