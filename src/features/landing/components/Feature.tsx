import React from 'react'
import { motion } from 'motion/react';
import { containerVariants, itemVariants, featureGridVariants, } from '../lib/animations';
import { featureData } from '../data/featureData';

const Feature = () => {
  return (
    <motion.section
        className="relative z-10 container mx-auto h-svh flex flex-col justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
            variants={itemVariants}
          >
            Tingkatkan Skill Jepang-mu Sekarang
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mx-auto"
            variants={itemVariants}
          >
            Kuasai bahasa Jepang dengan fitur-fitur interaktif yang dirancang untuk hasil nyata, efektif, menyenangkan, dan terstruktur.
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
            >
              <div className="relative group p-6 rounded-2xl backdrop-blur-sm border border-white/10 overflow-hidden transition duration-500 hover:border-white/15">
                  <div className='border-t border-white/10 w-80 absolute rotate-10 top-5 right-0 z-10'></div>
                  <div className='border-t border-white/10 w-96 absolute rotate-10 top-10 right-0 z-10'></div>
                  <div className='border-t border-white/5 w-96 absolute rotate-10 top-15 right-0 z-10'></div>
                  <div className='rounded-full bg-white w-16 h-16 absolute -bottom-30 left-20 blur-3xl'></div>
                  <div className="absolute -bottom-30 left-20 w-20 h-24 rounded-full bg-white blur-3xl opacity-20 group-hover:opacity-60 transition duration-500" />


                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                    
                    </div>
                </motion.div>
            ))}
        </motion.div>
      </motion.section>
  )
}

export default Feature