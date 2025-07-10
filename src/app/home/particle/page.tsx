'use client';

import React, { useEffect, useState } from 'react';
import { getParticle } from '@/features/home/services/data';
import { trackerParticle } from '@/features/home/services/tracker';
import { motion } from 'framer-motion';
import { FaHome } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { MdAccessTime, MdCheckCircle } from 'react-icons/md';
import { IoBookOutline } from 'react-icons/io5';
import { TbMessageDots } from 'react-icons/tb';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { AiOutlineLoading } from 'react-icons/ai';
import { ParticleData } from '@/features/home/types/materidasar';

const ParticlesPage = () => {
  const [particles, setParticles] = useState<ParticleData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [updatedData, setUpdatedData] = useState(false);
  const [updating, setUpdating] = useState<number | null>(null);
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentParticles = particles.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(particles.length / itemsPerPage);

  const fetchParticles = async (
    setUpdatedData: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const data = await getParticle(setUpdatedData);
      setParticles(data);
    } catch (err) {
      setError('Data tidak ditemukan');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (updatedData === false) {
      fetchParticles(setUpdatedData);
      setLoading(false);
    }
  }, [updatedData]);

  const handleParticleClick = async (
    particleId: number,
    currentStatus: boolean
  ) => {
    try {
      setUpdating(particleId);
      await trackerParticle(particleId, currentStatus, setUpdatedData);
    } catch (error) {
      console.error('Failed to update particle status:', error);
    } finally {
      setUpdating(null);
    }
  };

  const completedCount = particles.filter((p) => p.status).length;
  const progressPercentage =
    particles.length > 0 ? (completedCount / particles.length) * 100 : 0;

  return (
    <div className="bg-black min-h-svh text-white pt-18">
      {/* Header */}
      <section className="container mx-auto px-4 pt-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-2">Particle Bahasa Jepang</h1>
          <p className="text-white/70 text-lg">
            Kuasai penggunaan particle untuk menguasai tata bahasa Jepang
          </p>
        </motion.div>
      </section>

      {/* Progress Section */}
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
              <button
                onClick={() => router.push('/home')}
                className="hover:text-blue-400"
              >
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
          <p className="text-xs text-white/60 mt-2">
            {Math.round(progressPercentage)}% selesai
          </p>
        </motion.div>
      </section>

      {/* Particle List */}
      <section className="container px-4 mx-auto mt-8 pb-8">
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neutral-400"></div>
          </div>
        )}

        {error && (
          <div className="flex items-center justify-center gap-12 border border-red-400 h-24">
            <div className="border-t border-red-400 w-12"></div>
            <div>{error}</div>
            <div className="border-t border-red-400 w-12"></div>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentParticles.map((data, index) => (
                <motion.div
                  key={data.id}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div
                    className="relative overflow-hidden border-b transition-colors duration-300 cursor-pointer border-white/40 hover:border-white/60"
                    onClick={() => handleParticleClick(data.id, data.status)}
                  >
                    <div className="absolute top-4 right-4 z-10">
                      {updating === data.id ? (
                        <div className="flex items-center justify-center text-sm text-white gap-2">
                          <AiOutlineLoading className="animate-spin w-4 h-4" />
                          <p className="text-white/80 font-medium">
                            Memperbarui...
                          </p>
                        </div>
                      ) : (
                        <div>
                          {data.status ? (
                            <div className="flex gap-1.5 text-green-400 items-center justify-center">
                              <MdCheckCircle className="w-4 h-4" />
                              <span className="text-xs font-medium">
                                Sudah dipelajari
                              </span>
                            </div>
                          ) : (
                            <div className="flex gap-1.5 text-yellow-400 items-center justify-center">
                              <MdAccessTime className="w-4 h-4" />
                              <span className="text-xs font-medium">
                                Belum dipelajari
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="mb-4">
                        <div className="flex items-center gap-3 mb-2">
                          <h2 className="text-2xl font-bold text-white">
                            {data.particle_name}
                          </h2>
                          <span className="text-lg text-white/60 font-medium">
                            {data.romaji}
                          </span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h3 className="text-sm font-semibold text-white/80 mb-2 flex items-center gap-2">
                          <HiOutlineLightBulb /> Penjelasan
                        </h3>
                        <p className="text-white/70 leading-relaxed">
                          {data.description}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-white/80 mb-2 flex items-center gap-2">
                          <TbMessageDots /> Contoh Kalimat
                        </h3>
                        <p className="text-white/70 italic leading-relaxed">
                          {data.example_sentence}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {particles.length > itemsPerPage && (
              <div className="flex justify-center mt-8 gap-2 flex-wrap">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  className="px-3 py-1 border rounded text-white border-white/30 hover:border-white/60 transition"
                  disabled={currentPage === 1}
                >
                  Sebelumnya
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-3 py-1 rounded border transition ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'border-white/30 text-white hover:border-white/60'}`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  className="px-3 py-1 border rounded text-white border-white/30 hover:border-white/60 transition"
                  disabled={currentPage === totalPages}
                >
                  Selanjutnya
                </button>
              </div>
            )}
          </>
        )}

        {/* Empty State */}
        {!loading && !error && particles.length === 0 && (
          <div className="text-center py-20">
            <IoBookOutline className="w-16 h-16 text-white/30 mx-auto mb-4" />
            <p className="text-white/60 text-lg">
              Belum ada materi particle tersedia
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default ParticlesPage;
