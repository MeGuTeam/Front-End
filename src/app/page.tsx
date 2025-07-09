'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Perubahan dari 'motion/react' ke 'framer-motion'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaChevronDown, FaLinkedin, FaGithub, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import 'keen-slider/keen-slider.min.css';

// Import animations
import { 
  containerVariants, 
  itemVariants, 
  heroVariants, 
  buttonVariants,
  featureGridVariants,
  footerItemVariants,
  linkHoverVariants,
  contactHoverVariants,
  itemVariantsTs
} from '../features/landing/lib/animations';

// Import data
import { featureData } from '../features/landing/data/featureData';
import faqData from '../features/landing/data/faqData';
import teamMembers from '../features/landing/data/teamMembers';
import { 
  navigationLinks, 
  aboutLinks, 
  contactInfo, 
  legalLinks, 
  brandInfo 
} from '../features/landing/data/footerData';

// Import hooks
import { useTeamSlider } from '../features/landing/hooks/useTeamSlider';

const LandingPage = () => {
  const router = useRouter();
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});
  
  const {
    sliderRef,
    handleMouseEnter,
    handleMouseLeave,
    goToPrevious,
    goToNext,
  } = useTeamSlider();

  const toggleItem = (id: number) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        className="relative z-10 px-4 sm:px-6 lg:px-8 h-screen flex items-center justify-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 z-0 pointer-events-none bg-grid" />

        <div className="text-center max-w-7xl mx-auto w-full">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4"
            variants={heroVariants}
          >
            Platform Belajar Bahasa Jepang
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed text-muted-foreground px-4"
            variants={itemVariants}
          >
            Platform yang <span className='text-white'>menggabungkan metode hafalan dan kuis interaktif</span>, membantu Anda belajar secara efektif dan menyenangkan dalam satu tempat.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-16 px-4"
            variants={containerVariants}
          >
            <motion.button
              className="group relative px-6 py-3 sm:px-8 sm:py-4 text-black bg-white rounded-lg font-semibold hover:bg-white/90 hover:cursor-pointer transition-all duration-300 w-full sm:w-auto"
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/login')}
            >
              <span className="relative z-10">Mulai Belajar Sekarang</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="relative z-10 container mx-auto min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 px-4"
            variants={itemVariants}
          >
            Tingkatkan Skill Jepang-mu Sekarang
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mx-auto px-4 max-w-4xl"
            variants={itemVariants}
          >
            Kuasai bahasa Jepang dengan fitur-fitur interaktif yang dirancang untuk hasil nyata, efektif, menyenangkan, dan terstruktur.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto w-full"
          variants={featureGridVariants}
        >
          {featureData.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="w-full"
            >
              <div className="relative group p-4 sm:p-6 rounded-2xl backdrop-blur-sm border border-white/10 overflow-hidden transition duration-500 hover:border-white/15 h-full">
                <div className='border-t border-white/10 w-80 absolute rotate-10 top-5 right-0 z-10'></div>
                <div className='border-t border-white/10 w-96 absolute rotate-10 top-10 right-0 z-10'></div>
                <div className='border-t border-white/5 w-96 absolute rotate-10 top-15 right-0 z-10'></div>
                <div className='rounded-full bg-white w-16 h-16 absolute -bottom-30 left-20 blur-3xl'></div>
                <div className="absolute -bottom-30 left-20 w-20 h-24 rounded-full bg-white blur-3xl opacity-20 group-hover:opacity-60 transition duration-500" />

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed relative z-10">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="relative z-10 flex items-center min-h-screen justify-center mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className='overflow-hidden w-full h-full absolute animate-diagonal-loop'>
          <div className='w-full h-[1px] bg-gradient-to-r from-white/10 to-white/6 rotate-6 absolute top-85'></div>
          <div className='w-full h-[1px] bg-gradient-to-r from-white/8 to-white/4 rotate-6 absolute top-95'></div>
          <div className='w-full h-[1px] bg-gradient-to-r from-white/6 to-white/3 rotate-6 absolute top-105'></div>
          <div className='w-full h-[1px] bg-gradient-to-r from-white/4 to-white/2 rotate-6 absolute top-115'></div>
          <div className='w-full h-[1px] bg-gradient-to-r from-white/3 to-white/1 rotate-6 absolute top-125'></div>
          <div className='w-full h-[1px] bg-gradient-to-r from-white/2 to-white/10 rotate-6 absolute top-135'></div>
          <div className='w-full h-[1px] bg-gradient-to-r from-white/1 to-white/8 rotate-6 absolute top-145'></div>
        </div>

        <div className="w-full max-w-7xl mx-auto">
          <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariantsTs}>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-b from-white to-neutral-200 text-transparent bg-clip-text hover:text-white transition-all duration-100 mb-4 px-4"
              variants={itemVariantsTs}
            >
              Tim Kami
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mx-auto px-4 max-w-4xl"
              variants={itemVariantsTs}
            >
              Bertemu dengan tim yang berdedikasi untuk membuat pembelajaran bahasa Jepang menjadi mudah dan menyenangkan
            </motion.p>
          </motion.div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariantsTs}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="bg-transparent overflow-hidden relative backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 group h-full">
                  <div className='border-t border-white/10 w-[25rem] absolute rotate-140 bottom-52 -left-12 z-10'></div>
                  <div className='border-t border-white/10 w-[25rem] absolute rotate-140 bottom-56 -left-12 z-10'></div>
                  <div className='border-t border-white/5 w-[25rem] absolute rotate-140 bottom-48 -left-12 z-10'></div>
                  <div className='rounded-full bg-white w-16 h-16 absolute -bottom-30 right-8 blur-3xl'></div>
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
                    
                    <h3 className="text-lg sm:text-xl min-h-12 sm:min-h-16 flex items-center justify-center font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    
                    <ul className='min-h-12 sm:min-h-16 flex-col mb-6'>
                      {member.role.map((role, index) => (
                        <li key={index} className='text-muted-foreground text-sm sm:text-base'>
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
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile/Tablet Slider */}
          <div className="lg:hidden block">
            <div className='flex justify-between px-3 items-center pb-4'>
              <div className='flex gap-3'>
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
                <div
                  key={member.id}
                  className="keen-slider__slide"
                >
                  <motion.div
                    className="bg-transparent relative backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 group h-full mx-2"
                    variants={itemVariantsTs}
                    initial="hidden"
                    animate="visible"
                  >
                    <div className='border-t border-white/10 w-[25rem] absolute rotate-140 bottom-56 -left-12 z-10'></div>
                    <div className='border-t border-white/5 w-[25rem] absolute rotate-140 bottom-48 -left-12 z-10'></div>
                    <div className='rounded-full bg-white w-16 h-16 absolute -bottom-30 right-8 blur-3xl'></div>
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
                      
                      <ul className='min-h-12 sm:min-h-16 flex-col mb-6'>
                        {member.role.map((role, index) => (
                          <li key={index} className='text-muted-foreground text-sm sm:text-base'>
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
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.div 
        className="min-h-screen flex justify-center items-center mx-auto relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-4xl w-full">
          <motion.div
            variants={itemVariantsTs}
            className="text-center mb-8 sm:mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 px-4">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl px-4">
              Temukan jawaban atas pertanyaan yang sering diajukan
            </p>
          </motion.div>

          <motion.div 
            className="rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 bg-transparent relative overflow-hidden backdrop-blur-sm border border-white/10"
            variants={itemVariantsTs}
          >
            <div className='rounded-full bg-white w-12 h-12 absolute -top-24 right-0 blur-3xl'></div>
            <motion.div 
              className="space-y-2"
              variants={containerVariants}
            >
              {faqData.map((faq) => {
                const isOpen = openItems[faq.id];
                
                return (
                  <motion.div 
                    key={faq.id}
                    className="border-b border-gray-200/20 py-4 last:border-b-0 bg-transparent relative overflow-hidden"
                    variants={itemVariantsTs}
                  >
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="flex justify-between items-center w-full text-left font-medium text-base sm:text-lg group hover:cursor-pointer"
                    >
                      <span className="pr-4 text-white transition-colors duration-200">
                        {faq.question}
                      </span>
                      <FaChevronDown
                        className={`transition-transform duration-300 flex-shrink-0 text-white ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden relative w-full"
                        >
                          <motion.div 
                            className="mt-4 text-neutral-300 leading-relaxed rounded-lg p-4 border-l-2 border-white/50 overflow-hidden relative w-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                          >
                            <div className='border-t border-white/5 w-[25rem] absolute rotate-15 bottom-12 right-1'></div>
                            <div className='border-t border-white/10 w-[25rem] absolute rotate-15 bottom-16 right-2'></div>
                            <div className='border-t border-white/10 w-[25rem] absolute rotate-15 bottom-20 right-3'></div>
                            
                            <p className="relative z-10 text-sm sm:text-base">{faq.answer}</p>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer Section */}
      <footer className='border-t border-neutral-400/20 mt-0'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <motion.div variants={footerItemVariants} className="lg:col-span-1">
              <div className="mb-4 sm:mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  {brandInfo.name}
                </h2>
                <div className="w-2/4 h-1 bg-gradient-to-r from-neutral-900 to-neutral-800 mt-2"></div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                {brandInfo.description}
              </p>
            </motion.div>

            <motion.div variants={footerItemVariants} className="lg:col-span-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">Tentang Kami</h3>
              <ul className="space-y-3 list-none">
                {aboutLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      variants={linkHoverVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="text-muted-foreground hover:text-white transition-all duration-200 flex items-center group text-sm sm:text-base"
                    >
                      <span className="flex items-center space-x-2">
                        <span className="text-muted-foreground">{link.icon}</span>
                        <span>{link.name}</span>
                      </span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={footerItemVariants} className="lg:col-span-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">Navigasi</h3>
              <ul className="space-y-3">
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      variants={linkHoverVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="text-muted-foreground hover:text-white transition-all duration-200 flex items-center group text-sm sm:text-base"
                    >
                      <span className="flex items-center space-x-2">
                        <span className="text-muted-foreground">{link.icon}</span>
                        <span>{link.name}</span>
                      </span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={footerItemVariants} className="lg:col-span-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">Kontak & Support</h3>
              <div className="space-y-4 mb-4 sm:mb-6">
                {contactInfo.map((contact, index) => (
                  <motion.div 
                    key={index}
                    variants={contactHoverVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    <span className="text-muted-foreground">{contact.icon}</span>
                    <span>{contact.value}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="space-y-3">
                {legalLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    variants={linkHoverVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="block text-muted-foreground hover:text-white transition-all duration-200 text-sm"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={footerItemVariants}
            className="border-t border-neutral-400/20 mt-8 sm:mt-12 pt-6 sm:pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-muted-foreground text-sm">
                © {currentYear} {brandInfo.name}. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <span>{brandInfo.encouragement}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;