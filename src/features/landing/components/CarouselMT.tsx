'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaChevronLeft,
  FaChevronRight,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import Image from 'next/image';

import { itemVariantsTs } from '../lib/animations';

import { useTeamSlider } from '@/features/landing/hooks/useTeamSlider';

import teamMembers from '../data/teamMembers';

const CarouselMT = () => {
  const {
    sliderRef,
    handleMouseEnter,
    handleMouseLeave,
    goToPrevious,
    goToNext,
  } = useTeamSlider();

  return (
    <div className="lg:hidden block">
      <div className="flex justify-between px-3 items-center pb-4">
        <div className="flex gap-3">
          <motion.button
            onClick={goToPrevious}
            className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronLeft className="w-5 h-5" />
          </motion.button>

          <motion.button
            onClick={goToNext}
            className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 z-10"
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
          <div key={member.id} className="keen-slider__slide">
            <motion.div
              className="bg-transparent relative backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 group h-full mx-2"
              variants={itemVariantsTs}
              initial="hidden"
              animate="visible"
            >
              <div className="border-t border-white/10 w-[25rem] absolute rotate-140 bottom-56 -left-12 z-10"></div>
              <div className="border-t border-white/5 w-[25rem] absolute rotate-140 bottom-48 -left-12 z-10"></div>
              <div className="rounded-full bg-white w-16 h-16 absolute -bottom-30 right-8 blur-3xl"></div>
              <div className="absolute -bottom-30 left-20 w-16 h-16 rounded-full bg-white blur-3xl opacity-20 group-hover:opacity-60 transition duration-500" />

              <div className="text-center">
                <div className="relative mx-auto mb-4 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden ring-4 ring-white/20 group-hover:ring-white/25 transition-all duration-300">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={112}
                    height={112}
                    className="w-full h-full object-cover duration-300"
                  />
                </div>

                <h3 className="text-lg sm:text-xl min-h-12 flex items-center justify-center font-bold text-white mb-2 transition-colors duration-300">
                  {member.name}
                </h3>

                <ul className="min-h-12 sm:min-h-16 flex-col mb-6">
                  {member.role.map((role, index) => (
                    <li
                      key={index}
                      className="text-muted-foreground text-sm sm:text-base"
                    >
                      {role}
                    </li>
                  ))}
                </ul>

                <div className="flex justify-center space-x-4">
                  {member.linkedin && (
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white border-neutral-700 border transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.a>
                  )}

                  {member.github && (
                    <motion.a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white border-neutral-700 border transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselMT;
