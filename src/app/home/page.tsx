'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa';
import { kelasTampilanDepan, levelMateri } from '@/features/home/data';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { trackerHome } from '@/features/home/services/tracker';
import { LastActivity } from '@/features/home/types/home';

const HomePage = () => {
  const [tracker, setTracker] = useState<{
    lastActivity: LastActivity | null;
    error: string | null;
    loading: boolean;
  }>({
    lastActivity: null,
    error: null,
    loading: true,
  });
  const router = useRouter();

  useEffect(() => {
    const fetchTracker = async () => {
      try {
        setTracker(prev => ({...prev, loading: true, error: null}))
        
        const data = await trackerHome();
        console.log("Fetch Tracker", data);
        console.log("detail fetch tracker", data.data.lastActivity)

        const { error, message, data: trackerData} = data;

        if (error) {
          setTracker(prev => ({
            ...prev,
            error: message,
            loading: false,
          }));
          return;
        }

        setTracker(prev => ({
          ...prev,
          lastActivity: trackerData?.lastActivity || null,
          error: null,
          loading: false,
        }))
      } catch (e) {
        console.error("Terjadi kesalahan", e);
      }
    }
    fetchTracker();
  }, []);

  const calculateProgress = () => {
    if (!tracker.lastActivity) return 0;

    const { finished, total } = tracker.lastActivity;
    return total > 0 ? Math.round((finished / total) * 100) : 0;
  };

  const getClass = () => {
    if (tracker.loading) return "Memuat Progress...";
    if (tracker.error) return "Gagal memuat progress";
    if (!tracker.lastActivity) return "Belum ada aktivitas";

    return `${tracker.lastActivity.type}`;
  };

  const progressInfo = () => {
    if (tracker.loading) return "Memuat Progress...";
    if (tracker.error) return "Gagal memuat progress";
    if (!tracker.lastActivity) return "Belum ada aktivitas";

    const { finished, total } = tracker.lastActivity;

    return `${finished}/${total}`;
  }

  const getLastActivityLink = () => {
    if (!tracker.lastActivity?.href) return '/entry/particle';
    return tracker.lastActivity.href;
  }

  return (
    <main className="bg-black min-h-screen pb-12 pt-18">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-8">
        <div className="border border-white/20 rounded-lg p-6 bg-transparent">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex-1">
              <h1 className="text-white text-2xl font-medium mb-4">
                Selamat datang di platform belajar!
              </h1>
              
              <div className="space-y-4">
                <div>
                  <div className='flex justify-between'>
                    <p className="text-white/80 mb-2">{getClass()}</p>
                    <p className='text-white/80 mb-2'>{progressInfo()}</p>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${calculateProgress()}%` }}
                    />
                  </div>
                  {tracker.lastActivity && (
                    <p className='text-white/60 text-xs mt-1'>
                      Terakhir: {tracker.lastActivity.lastProgress}
                    </p>
                  )}
                </div>

                <motion.button
                  className="group flex items-center gap-2 text-white hover:text-blue-300 transition-colors"
                  onClick={() => router.push(getLastActivityLink())}
                  whileHover={{ x: 5 }}
                  disabled={tracker.loading}
                >
                  <span>
                    {tracker.loading ? "Memuat..." :
                      tracker.lastActivity ? `Lanjutkan ${tracker.lastActivity.type}` : 'Mulai Belajar'  
                    }
                  </span>
                  <FaChevronRight className="w-3.5 h-3.5" />
                </motion.button>

                <p className="text-white/60 italic mt-6">
                  "Akiramenakereba, yume wa kanarazu kanau."
                </p>
              </div>
            </div>
            
            <div className="hidden md:block">
              <Image 
                src="/ImageForHome.jpg" 
                alt="Ilustrasi belajar" 
                width={240} 
                height={240}
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Basic Materials Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-white text-2xl font-semibold mb-6">Materi Dasar</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {kelasTampilanDepan.map((data, index) => (
            <motion.div 
              key={index}
              className="border border-white/20 rounded-lg p-4 bg-transparent relative overflow-hidden hover:border-white/40 transition-colors"
              whileHover={{ y: -5 }}
            > 
              <motion.button
                className="relative z-10 flex items-center justify-between w-full group hover:cursor-pointer"
                onClick={() => router.push(data.handling)}
              >
                <span className="text-white transition-colors">
                  {data.title}
                </span>
                <FaChevronRight className="w-3.5 h-3.5 text-white/60 group-hover:translate-x-1 transition-all" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-white text-2xl font-semibold mb-6">Materi JLPT</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {levelMateri.map((data, index) => (
            <motion.div 
              key={index}
              className="border border-white/20 rounded-lg p-5 bg-transparent hover:border-white/40 transition-colors"
              whileHover={{ y: -5 }}
            >              
              <div className="relative z-10 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-white text-lg font-medium">{data.title}</h3>
                  <span className="border border-white/10 rounded px-2 py-1 text-xs text-white/80">
                    {data.estimatedTime}
                  </span>
                </div>
                
                <p className="text-white/70 text-sm">{data.description}</p>
                
                <button 
                  className="w-full mt-4 bg-white/10 text-white px-3 flex justify-center items-center py-1.5 rounded-md transition-colors hover:cursor-pointer"
                  onClick={() => router.push(data.handling)}
                  disabled={!data.isAvailable}
                >
                  {data.isAvailable ? (
                    <span className="flex items-center gap-2">
                      Mulai Belajar
                      <FaChevronRight className="w-3 h-3" />
                    </span>
                  ) : (
                    "Segera Hadir"
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;