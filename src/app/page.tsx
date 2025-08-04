import React from 'react';
import 'keen-slider/keen-slider.min.css';

// Import data
import { featureData } from '../features/landing/data/featureData';
import {
  navigationLinks,
  aboutLinks,
  contactInfo,
  legalLinks,
  brandInfo,
} from '../features/landing/data/footerData';

// Import components
import Faq from '@/features/landing/components/Faq';
import Carousel from '@/features/landing/components/Carousel';
import CarouselMT from '@/features/landing/components/CarouselMT';
import NavigationButton from '@/features/landing/components/NavigationButton';

const LandingPage = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none bg-grid" />

        <div className="text-center max-w-7xl mx-auto w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4">
            Platform Belajar Bahasa Jepang
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed text-muted-foreground px-4">
            Platform yang{' '}
            <span className="text-white">
              menggabungkan metode hafalan dan kuis interaktif
            </span>
            , membantu Anda belajar secara efektif dan menyenangkan dalam satu
            tempat.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-16 px-4">
            <NavigationButton />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 container mx-auto min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 px-4">
            Tingkatkan Skill Jepang-mu Sekarang
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mx-auto px-4 max-w-4xl">
            Kuasai bahasa Jepang dengan fitur-fitur interaktif yang dirancang
            untuk hasil nyata, efektif, menyenangkan, dan terstruktur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto w-full">
          {featureData.map((feature, index) => (
            <div key={index} className="w-full">
              <div className="relative group p-4 sm:p-6 rounded-2xl backdrop-blur-sm border border-white/10 overflow-hidden transition duration-500 hover:border-white/15 h-full">
                <div className="border-t border-white/10 w-80 absolute rotate-10 top-5 right-0 z-10"></div>
                <div className="border-t border-white/10 w-96 absolute rotate-10 top-10 right-0 z-10"></div>
                <div className="border-t border-white/5 w-96 absolute rotate-10 top-15 right-0 z-10"></div>
                <div className="rounded-full bg-white w-16 h-16 absolute -bottom-30 left-20 blur-3xl"></div>
                <div className="absolute -bottom-30 left-20 w-20 h-24 rounded-full bg-white blur-3xl opacity-20 group-hover:opacity-60 transition duration-500" />

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed relative z-10">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="relative z-10 flex items-center min-h-screen justify-center mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="overflow-hidden w-full h-full absolute animate-diagonal-loop">
          <div className="w-full h-[1px] bg-gradient-to-r from-white/10 to-white/6 rotate-6 absolute top-85"></div>
          <div className="w-full h-[1px] bg-gradient-to-r from-white/8 to-white/4 rotate-6 absolute top-95"></div>
          <div className="w-full h-[1px] bg-gradient-to-r from-white/6 to-white/3 rotate-6 absolute top-105"></div>
          <div className="w-full h-[1px] bg-gradient-to-r from-white/4 to-white/2 rotate-6 absolute top-115"></div>
          <div className="w-full h-[1px] bg-gradient-to-r from-white/3 to-white/1 rotate-6 absolute top-125"></div>
          <div className="w-full h-[1px] bg-gradient-to-r from-white/2 to-white/10 rotate-6 absolute top-135"></div>
          <div className="w-full h-[1px] bg-gradient-to-r from-white/1 to-white/8 rotate-6 absolute top-145"></div>
        </div>

        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-b from-white to-neutral-200 text-transparent bg-clip-text hover:text-white transition-all duration-100 mb-4 px-4">
              Tim Kami
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mx-auto px-4 max-w-4xl">
              Bertemu dengan tim yang berdedikasi untuk membuat pembelajaran
              bahasa Jepang menjadi mudah dan menyenangkan
            </p>
          </div>

          {/* Desktop Grid */}
          <Carousel />

          {/* Mobile/Tablet Slider */}
          <CarouselMT />
        </div>
      </section>

      <Faq />

      {/* Footer Section */}
      <footer className="border-t border-neutral-400/20 mt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="lg:col-span-1">
              <div className="mb-4 sm:mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  {brandInfo.name}
                </h2>
                <div className="w-2/4 h-1 bg-gradient-to-r from-neutral-900 to-neutral-800 mt-2"></div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                {brandInfo.description}
              </p>
            </div>

            <div className="lg:col-span-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">
                Tentang Kami
              </h3>
              <ul className="space-y-3 list-none">
                {aboutLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-white transition-all duration-200 flex items-center group text-sm sm:text-base"
                    >
                      <span className="flex items-center space-x-2">
                        <span className="text-muted-foreground">
                          {link.icon}
                        </span>
                        <span>{link.name}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">
                Navigasi
              </h3>
              <ul className="space-y-3">
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-white transition-all duration-200 flex items-center group text-sm sm:text-base"
                    >
                      <span className="flex items-center space-x-2">
                        <span className="text-muted-foreground">
                          {link.icon}
                        </span>
                        <span>{link.name}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">
                Kontak & Support
              </h3>
              <div className="space-y-4 mb-4 sm:mb-6">
                {contactInfo.map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 text-muted-foreground hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    <span className="text-muted-foreground">
                      {contact.icon}
                    </span>
                    <span>{contact.value}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {legalLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-muted-foreground hover:text-white transition-all duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-400/20 mt-8 sm:mt-12 pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-muted-foreground text-sm">
                © {currentYear} {brandInfo.name}. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <span>{brandInfo.encouragement}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
