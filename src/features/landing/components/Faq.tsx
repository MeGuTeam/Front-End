'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

import { containerVariants, itemVariantsTs } from '../lib/animations';

import faqData from '../data/faqData';

const Faq = () => {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (id: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div>
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
            <div className="rounded-full bg-white w-12 h-12 absolute -top-24 right-0 blur-3xl"></div>
            <motion.div className="space-y-2" variants={containerVariants}>
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
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden relative w-full"
                        >
                          <motion.div
                            className="mt-4 text-neutral-300 leading-relaxed rounded-lg p-4 border-l-2 border-white/50 overflow-hidden relative w-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                          >
                            <div className="border-t border-white/5 w-[25rem] absolute rotate-15 bottom-12 right-1"></div>
                            <div className="border-t border-white/10 w-[25rem] absolute rotate-15 bottom-16 right-2"></div>
                            <div className="border-t border-white/10 w-[25rem] absolute rotate-15 bottom-20 right-3"></div>

                            <p className="relative z-10 text-sm sm:text-base">
                              {faq.answer}
                            </p>
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
    </div>
  );
};

export default Faq;
