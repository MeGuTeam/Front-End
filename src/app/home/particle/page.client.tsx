'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaHome } from 'react-icons/fa';
import { MdAccessTime, MdCheckCircle } from 'react-icons/md';
import { IoBookOutline } from 'react-icons/io5';
import { TbMessageDots } from 'react-icons/tb';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { AiOutlineLoading } from 'react-icons/ai';

import { useFetchParticle, useToggleParticleMutation } from '@/features/home/hooks';

const ParticleClient = () => {
  const router = useRouter();
  const { data: particles = [], isLoading, isError } = useFetchParticle();
  const toggleMutation = useToggleParticleMutation();

  const completedCount = particles.filter((p) => p.status).length;
  const progressPercentage =
    particles.length > 0 ? (completedCount / particles.length) * 100 : 0;

  const handleParticleClick = (particleId: number, currentStatus: boolean) => {
    toggleMutation.mutate({ id: particleId, status: currentStatus });
  };

  return (
    <div className="bg-black min-h-svh text-white pt-18">
      {/* SECTION: Header */}
      <section className="container mx-auto px-4 pt-8">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl font-bold mb-2">Particle Bahasa Jepang</h1>
          <p className="text-white/70 text-lg">Kuasai penggunaan particle untuk menguasai tata bahasa Jepang</p>
        </motion.div>
      </section>

      {/* SECTION: Progress */}
      <section className="container mx-auto px-4 pt-6">
        <motion.div
          className="backdrop-blur-sm border border-white/20 rounded-xl p-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex gap-2 items-center mb-4">
            <FaHome className="w-5 h-5 text-blue-400" />
            <div className="flex gap-1 text-sm">
              <button onClick={() => router.push('/home')} className="hover:text-blue-400">
                Home
              </button>
              <span className="text-white/50">&gt;</span>
              <span className="text-blue-400 font-medium">Particle</span>
            </div>
          </div>

          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <IoBookOutline className="w-5 h-5 text-blue-400" />
              <p className="text-white/80 font-medium">Progress Belajar Anda</p>
            </div>
            <div className="bg-blue-500/20 px-3 py-1 rounded-full">
              <span className="text-blue-500 font-semibold text-sm">
                {completedCount}/{particles.length}
              </span>
            </div>
          </div>

          <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
            <motion.div
              className="bg-blue-500 h-3 rounded-full shadow-lg"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
          <p className="text-xs text-white/60 mt-2">{Math.round(progressPercentage)}% selesai</p>
        </motion.div>
      </section>

      {/* SECTION: Cards */}
      <section className="container px-4 mx-auto mt-8 pb-8">
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neutral-400"></div>
          </div>
        )}

        {isError && (
          <div className="flex items-center justify-center gap-12 border border-red-400 h-24">
            <div className="border-t border-red-400 w-12"></div>
            <div>Terjadi kesalahan saat mengambil data</div>
            <div className="border-t border-red-400 w-12"></div>
          </div>
        )}

        {!isLoading && !isError && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {particles.map((data, index) => (
                <motion.div
                  key={data.id}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative overflow-hidden border-b transition-colors duration-300 border-white/40 hover:border-white/60">
                    <div className="absolute top-4 right-4 z-10">
                      <div
                        className="bg-neutral-900 rounded-md px-4 py-2 hover:cursor-pointer"
                        onClick={() => handleParticleClick(data.id, data.status)}
                      >
                        {toggleMutation.isPending && toggleMutation.variables?.id === data.id ? (
                          <div className="flex items-center justify-center text-sm text-white gap-2">
                            <AiOutlineLoading className="animate-spin w-4 h-4" />
                            <p className="text-white/80 font-medium text-xs">Memperbarui...</p>
                          </div>
                        ) : data.status ? (
                          <div className="flex gap-1.5 text-green-400 items-center justify-center">
                            <MdCheckCircle className="w-4 h-4" />
                            <span className="text-xs font-medium">Sudah dipelajari</span>
                          </div>
                        ) : (
                          <div className="flex gap-1.5 text-yellow-400 items-center justify-center">
                            <MdAccessTime className="w-4 h-4" />
                            <span className="text-xs font-medium">Belum dipelajari</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="mb-4">
                        <div className="flex items-center gap-3 mb-2">
                          <h2 className="text-2xl font-bold text-white">{data.particle_name}</h2>
                          <span className="text-lg text-white/60 font-medium">{data.romaji}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h3 className="text-sm font-semibold text-white/80 mb-2 flex items-center gap-2">
                          <HiOutlineLightBulb /> Penjelasan
                        </h3>
                        <p className="text-white/70 leading-relaxed">{data.description}</p>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-white/80 mb-2 flex items-center gap-2">
                          <TbMessageDots /> Contoh Kalimat
                        </h3>
                        <p className="text-white/70 italic leading-relaxed">{data.example_sentence}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {!isLoading && !isError && particles.length === 0 && (
          <div className="text-center py-20">
            <IoBookOutline className="w-16 h-16 text-white/30 mx-auto mb-4" />
            <p className="text-white/60 text-lg">Belum ada materi particle tersedia</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default ParticleClient