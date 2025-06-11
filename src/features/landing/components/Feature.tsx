import React from 'react'
import { motion } from 'motion/react';
import { containerVariants, itemVariants, featureGridVariants, } from '../lib/animations';
import { featureData } from '../data/featureData';

const Feature = () => {
  return (
    <motion.section
        className="relative z-10 container mx-auto px-6 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            Fitur Unggulan
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Belajar bahasa Jepang dengan metode yang telah terbukti efektif
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={featureGridVariants}
        >
          {featureData.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <div 
                className="group relative p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-blue-400/30 transition-all duration-500"
                style={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)',
                    animationDelay: '0ms'
                }}
                >
                    <div className="text-4xl mb-4 transition-transform duration-300">
                    {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                    </p>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    </div>
                </motion.div>
            ))}
        </motion.div>
      </motion.section>
  )
}

export default Feature