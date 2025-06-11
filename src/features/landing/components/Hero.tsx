import React from 'react'
import { motion } from 'motion/react'
import { containerVariants, itemVariants, heroVariants, badgeContainerVariants,badgeVariants, buttonVariants } from '../lib/animations';
import { heroData } from '../data/heroData';
import { levelBadges } from '../data/levelBadges';

const Hero = () => {
  return (
    <motion.section
        className="relative z-10 container mx-auto px-6 pt-36 pb-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="text-center max-w-6xl mx-auto">
          <motion.div
            className="text-6xl font-bold text-white my-8 select-none opacity-80"
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.5 },
            }}
          >
            {heroData.title}
          </motion.div>

          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            variants={heroVariants}
          >
            {heroData.headline}{` `}
            <motion.span
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {heroData.highlight}
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {heroData.description}
          </motion.p>
        <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={badgeContainerVariants}
          >
            {levelBadges.map((badge) => (
              <motion.div key={badge.level} variants={badgeVariants}>
                <div 
                    className="relative group cursor-pointer"
                    style={{ animationDelay: '0ms' }}
                >
                    <div 
                        className={`px-6 py-3 rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-sm border border-white/20`}
                        style={{ 
                            background: `linear-gradient(135deg, ${badge.color}80 0%, ${badge.color}40 100%)`,
                        }}
                    >
                        {badge.level}
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-black/80 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {badge.description}
                    </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            variants={buttonVariants}
          >
            <motion.button
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-700 to-purple-900 text-white font-bold rounded-full text-lg transition-all duration-300 hover:shadow-2xl"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span className="relative z-10">Mulai Belajar Sekarang</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            <motion.button
              className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full text-lg transition-all duration-300 hover:border-blue-400 hover:text-blue-300 backdrop-blur-sm"
              variants={buttonVariants}
              whileHover={{
                scale: 1.05,
                borderColor: '#60a5fa',
                color: '#93c5fd',
              }}
              whileTap={{ scale: 0.98 }}
            >
              Pelajari Lebih Lanjut
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
  )
}

export default Hero;