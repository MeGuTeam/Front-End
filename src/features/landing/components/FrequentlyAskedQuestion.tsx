import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FaChevronDown } from "react-icons/fa";
import faqData from '../data/faqData';
import { containerVariants, itemVariantsTs } from '../lib/animations';

const FrequentlyAskedQuestion = () => {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (id: number) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="min-h-svh flex justify-center items-center mx-auto relative">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground text-lg">
            Temukan jawaban atas pertanyaan yang sering diajukan
          </p>
        </motion.div>

        <motion.div 
          className="rounded-lg shadow-lg p-8 bg-transparent relative overflow-hidden backdrop-blur-sm border border-white/10"
          variants={itemVariantsTs}
          initial="hidden"
          animate="visible"
        >
          <div className='rounded-full bg-white w-12 h-12 absolute -top-24 right-0 blur-3xl'></div>
          <motion.div 
            className="space-y-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {faqData.map((faq) => {
              const isOpen = openItems[faq.id];
              
              return (
                <motion.div 
                  key={faq.id}
                  className="border-b border-gray-200/20 py-4 last:border-b-0 bg-transparent relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: faq.id * 0.1, duration: 0.5 }}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="flex justify-between items-center w-full text-left font-medium text-lg group hover:cursor-pointer"
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
                            
                          <p className="relative z-10">{faq.answer}</p>
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
    </div>
  );
};

export default FrequentlyAskedQuestion;
