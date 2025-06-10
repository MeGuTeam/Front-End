'use client';

import React from 'react';
import LevelBadge from '@/features/landing/components/LevelBadge';
import FeatureCard from '@/features/landing/components/FeatureCard';
import AnimatedBackground from '@/features/landing/components/AnimatedBackground';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      
      <section className="relative z-10 container mx-auto px-6 pt-36 pb-16">
        <div className="text-center max-w-6xl mx-auto">
          <div className="text-6xl font-bold text-white my-8 select-none opacity-80">
            日本語
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Jelajahi Dunia Bahasa Jepang dengan Cara Belajar yang{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Seru & Efektif
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay">
            Ikiban Nihongo adalah platform pembelajaran bahasa Jepang yang menggabungkan 
            metode hafalan dan kuis interaktif, membantu Anda belajar secara efektif dan 
            menyenangkan dalam satu tempat.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <LevelBadge level="N5" description="Dasar - Pemula" color="#22c55e" delay={0} />
            <LevelBadge level="N4" description="Menengah Bawah" color="#3b82f6" delay={100} />
            <LevelBadge level="N3" description="Menengah" color="#8b5cf6" delay={200} />
            <LevelBadge level="N2" description="Menengah Atas" color="#f59e0b" delay={300} />
            <LevelBadge level="N1" description="Mahir" color="#ef4444" delay={400} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-700 to-purple-900 text-white font-bold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10">Mulai Belajar Sekarang</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full text-lg transition-all duration-300 hover:border-blue-400 hover:text-blue-300 hover:scale-105 backdrop-blur-sm">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </section>

      <section className="relative z-10 container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Fitur Unggulan
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Belajar bahasa Jepang dengan metode yang telah terbukti efektif
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            icon="📚"
            title="Pembelajaran N5-N1"
            description="Kurikulum lengkap dari level pemula hingga mahir sesuai standar JLPT"
            delay={0}
          />
          <FeatureCard
            icon="🤖"
            title="AI Chatbot"
            description="Berlatih percakapan dengan AI yang membantu meningkatkan kemampuan berbicara"
            delay={100}
          />
          <FeatureCard
            icon="🎯"
            title="Kuis Interaktif"
            description="Berbagai jenis kuis menarik untuk menguji pemahaman dan mengasah kemampuan"
            delay={200}
          />
          <FeatureCard
            icon="🎌"
            title="Budaya Jepang"
            description="Pelajari bahasa sekaligus budaya Jepang untuk pemahaman yang lebih mendalam"
            delay={500}
          />
        </div>
      </section>

      <div className="fixed bottom-0 left-0 w-full h-36 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
      
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }
      `}</style>
    </div>
  );
}