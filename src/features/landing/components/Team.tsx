import React from 'react';
import { motion } from 'motion/react';
import { FaLinkedin, FaGithub, FaChevronRight, FaChevronLeft  } from "react-icons/fa";
import 'keen-slider/keen-slider.min.css';
import teamMembers from '../data/teamMembers';
import { containerVariants, itemVariantsTs } from '../lib/animations';
import { useTeamSlider } from '../hooks/useTeamSlider';
import Image from 'next/image';

const Team = () => {
  const {
    sliderRef,
    handleMouseEnter,
    handleMouseLeave,
    goToPrevious,
    goToNext,
  } = useTeamSlider();

  return (
    <motion.section
      className="relative z-10 container mx-auto px-6 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div className="text-center mb-16" variants={itemVariantsTs}>
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          variants={itemVariantsTs}
        >
          Tim Kami
        </motion.h2>
        <motion.p
          className="text-xl text-gray-300 max-w-2xl mx-auto"
          variants={itemVariantsTs}
        >
          Bertemu dengan tim yang berdedikasi untuk membuat pembelajaran bahasa Jepang menjadi mudah dan menyenangkan
        </motion.p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="hidden xl:grid xl:grid-cols-4 xl:gap-6">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariantsTs}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group h-full">
                <div className="text-center">
                  <div className="relative mx-auto mb-4 w-24 h-24 rounded-full overflow-hidden ring-4 ring-white/20 group-hover:ring-blue-400/50 transition-all duration-300">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={112}
                      height={112}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  <h3 className="text-xl min-h-16 flex items-center justify-center font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  <ul className='min-h-16 flex-col mb-6'>
                    {member.role.map((role, index) => (
                      <li key={index}
                      className='text-blue-300'
                      >{role}</li>
                    ))}  
                  </ul>
                  
                  <div className="flex justify-center space-x-4">
                    {member.linkedin && (
                      <motion.a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaLinkedin className="w-5 h-5" />
                      </motion.a>
                    )}
                    
                    {member.github && (
                      <motion.a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="xl:hidden block">
          <div className='flex justify-between px-3 items-center pb-4'>
            <div className='flex gap-3'>
              <motion.button
              onClick={goToPrevious}
              className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:border-blue-400/50 transition-all duration-300 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronLeft className="w-5 h-5" />
            </motion.button>

            <motion.button
              onClick={goToNext}
              className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:border-blue-400/50 transition-all duration-300 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronRight className="w-5 h-5" />
            </motion.button>
            </div>
          </div>

          <div 
            ref={sliderRef} 
            className="keen-slider"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="keen-slider__slide"
              >
                <motion.div
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group h-full mx-2"
                  variants={itemVariantsTs}
                >
                  <div className="text-center">
                    <div className="relative mx-auto mb-4 w-24 h-24 rounded-full overflow-hidden ring-4 ring-white/20 group-hover:ring-blue-400/50 transition-all duration-300">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        width={112}
                        height={112}
                        className="w-full h-full object-cover duration-300"
                      />
                    </div>
                    
                    <h3 className="text-xl min-h-12 flex items-center justify-center font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {member.name}
                    </h3>
                    
                  <ul className='min-h-16 flex-col mb-6'>
                    {member.role.map((role, index) => (
                      <li key={index}
                      className='text-blue-300'
                      >{role}</li>
                    ))}  
                  </ul>
                    
                    <div className="flex justify-center space-x-4">
                      {member.linkedin && (
                        <motion.a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaLinkedin className="w-5 h-5" />
                        </motion.a>
                      )}
                      
                      {member.github && (
                        <motion.a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaGithub className="w-5 h-5" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Team;