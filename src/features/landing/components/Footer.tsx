import React from 'react';
import { motion } from 'motion/react';
import { 
  footerVariants, 
  footerItemVariants, 
  linkHoverVariants, 
  contactHoverVariants 
} from '../lib/animations';
import { 
  navigationLinks, 
  aboutLinks, 
  contactInfo, 
  legalLinks, 
  brandInfo 
} from '../data/footerData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t border-neutral-400/20 my-0'>
      <motion.div
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div variants={footerItemVariants} className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-white">
                {brandInfo.name}
              </h2>
              <div className="w-2/4 h-1 bg-gradient-to-r from-neutral-900 to-neutral-800 mt-2"></div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 mr-8">
              {brandInfo.description}
            </p>
          </motion.div>

          <motion.div variants={footerItemVariants} className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-6 text-white">Tentang Kami</h3>
            <ul className="space-y-3 list-none">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    variants={linkHoverVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="text-muted-foreground hover:text-white transition-all duration-200 flex items-center group"
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
            <h3 className="text-xl font-semibold mb-6 text-white">Navigasi</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    variants={linkHoverVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="text-muted-foreground hover:text-white transition-all duration-200 flex items-center group"
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
            <h3 className="text-xl font-semibold mb-6 text-white">Kontak & Support</h3>
            <div className="space-y-4 mb-6">
              {contactInfo.map((contact, index) => (
                <motion.div 
                  key={index}
                  variants={contactHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-white transition-colors duration-200"
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
          className="border-t border-neutral-400/20 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 ">
            <div className="text-muted-foreground text-sm">
              © {currentYear} {brandInfo.name}. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>{brandInfo.encouragement}</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;