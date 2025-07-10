'use client';

import React, { useEffect, useState } from 'react';
import { getConjunctionN5 } from '@/features/home/services/data';
import { trackerConjunction } from '@/features/home/services/tracker';
import { motion } from 'framer-motion';
import { FaHome } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { IoBookOutline } from 'react-icons/io5';
import { MdAccessTime, MdCheckCircle } from 'react-icons/md';
import { TbLetterCase } from 'react-icons/tb';
import { RiTranslate } from 'react-icons/ri';
import { BiText } from 'react-icons/bi';
import { HiOutlineSparkles } from 'react-icons/hi';
import { KataHubungN5 } from '@/features/home/types/materin5';
import { AiOutlineLoading } from 'react-icons/ai';

const KataHubungPages = () => {
  const [conjunctions, setConjunctions] = useState<KataHubungN5[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [updatedData, setUpdatedData] = useState(false);
  const [updating, setUpdating] = useState<number | null>(null);
  const router = useRouter();

  const fetchConjunctions = async (
    setUpdatedData: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const data = await getConjunctionN5(setUpdatedData);
      setConjunctions(data || []);
    } catch (e) {
      setError('Data tidak ditemukan');
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (updatedData === false) {
      fetchConjunctions(setUpdatedData);
      setLoading(false);
    }
  }, [updatedData]);

  const handleConjunctionClick = async (
    conjunctionId: number,
    currentStatus: boolean
  ) => {
    try {
      setUpdating(conjunctionId);
      await trackerConjunction(conjunctionId, currentStatus, setUpdatedData);
    } catch (e) {
      console.error('Failed to update conjunction status: ', e);
      setError('Gagal mengupdate status. Silakan coba lagi.');
    } finally {
      setUpdating(null);
    }
  };

  const completedCount = conjunctions.filter((p) => p.status).length;
  const progressPercentage =
    conjunctions.length > 0 ? (completedCount / conjunctions.length) * 100 : 0;

  return (
    <div className="bg-black min-h-screen text-white pt-18">
      {/* Header Section */}
      <section className="container mx-auto px-4 pt-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <h1 className="text-3xl font-bold">Kata Hubung N5</h1>
          </div>
          <p className="text-white/70 text-lg">
            Pelajari kata hubung level N5 untuk menguasai bahasa Jepang
          </p>
        </motion.div>
      </section>

      {/* Progress & Breadcrumb Section */}
      <section className="container mx-auto px-4 pt-6">
        <motion.div
          className="backdrop-blur-sm border border-white/20 rounded-xl p-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Breadcrumb */}
          <div className="flex gap-2 items-center mb-4">
            <FaHome className="w-5 h-5 text-blue-400" />
            <div className="flex gap-1 text-sm">
              <div className="hover:text-blue-400 cursor-pointer transition-colors">
                <button
                  onClick={() => router.push('/home')}
                  className="hover:cursor-pointer"
                >
                  Home
                </button>
              </div>
              <span className="text-white/50">&gt;</span>
              <div className="hover:text-blue-400 cursor-pointer transition-colors">
                <button
                  onClick={() => router.push('/home/n5')}
                  className="hover:cursor-pointer"
                >
                  N5
                </button>
              </div>
              <span className="text-white/50">&gt;</span>
              <span className="text-blue-400 font-medium">Kata Hubung N5</span>
            </div>
          </div>

          {/* Progress Section */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <IoBookOutline className="w-5 h-5 text-blue-400" />
              <p className="text-white/80 font-medium">Progress Belajar Anda</p>
            </div>
            <div className="bg-blue-500/20 px-3 py-1 rounded-full">
              <span className="text-blue-500 font-semibold text-sm">
                {completedCount}/{conjunctions.length}
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

      {/* Error Message */}
      {error && (
        <section className="container mx-auto px-4 mt-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-400 text-sm"
          >
            {error}
          </motion.div>
        </section>
      )}

      {/* Conjunctions List Section */}
      <section className="container px-4 mx-auto mt-8 pb-8">
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neutral-400"></div>
          </div>
        )}

        {!loading && !error && conjunctions.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {conjunctions.map((data, index) => (
              <motion.div
                key={data.id}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div
                  className="relative overflow-hidden border border-white/20 rounded-xl transition-all duration-300 cursor-pointer hover:border-white/40 hover:bg-white/5"
                  onClick={() => handleConjunctionClick(data.id, data.status)}
                >
                  <div className="p-6 text-center">
                    {/* Conjunction Word */}
                    <div className="mb-6">
                      <h2 className="text-4xl font-bold text-white mb-3">
                        {data.word}
                      </h2>
                      {/* Romaji */}
                      {data.romaji && (
                        <div className="text-lg text-white/70 font-medium mb-2">
                          {data.romaji}
                        </div>
                      )}
                    </div>

                    {/* Reading */}
                    <div className="grid grid-cols-1 gap-3 mb-4">
                      {data.reading && (
                        <div className="bg-white/5 rounded-lg p-3">
                          <h3 className="text-xs font-semibold text-white/60 mb-1 flex items-center justify-center gap-1">
                            <BiText className="w-3 h-3" />
                            Reading
                          </h3>
                          <p className="text-sm font-semibold text-white">
                            {data.reading}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Meaning */}
                    {data.meaning && (
                      <div className="mb-4">
                        <h3 className="text-xs font-semibold text-white/60 mb-2 flex items-center justify-center gap-1">
                          <RiTranslate className="w-3 h-3" />
                          Arti
                        </h3>
                        <p className="text-sm font-medium text-white/90 bg-white/5 rounded-lg py-2 px-3">
                          {data.meaning}
                        </p>
                      </div>
                    )}

                    {/* Example Sentence */}
                    {data.example_sentence && (
                      <div className="mb-4">
                        <div className="rounded-lg overflow-hidden">
                          <h3 className="text-xs font-semibold text-white/60 mb-0 flex items-center gap-1 px-3 py-2 border-b border-white/10">
                            <TbLetterCase className="w-3 h-3" />
                            Contoh Kalimat
                          </h3>
                          <p className="text-xs text-white/90 text-left py-3 px-3 leading-relaxed font-medium">
                            {data.example_sentence}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Status Footer */}
                    <div className="mt-4 pt-3 border-t border-white/10">
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
                              <MdCheckCircle />
                              Sudah dipelajari
                            </div>
                          ) : (
                            <div className="flex gap-1.5 text-yellow-400 items-center justify-center">
                              <MdAccessTime />
                              Belum dipelajari
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && conjunctions.length === 0 && (
          <div className="text-center py-20">
            <HiOutlineSparkles className="w-16 h-16 text-white/30 mx-auto mb-4" />
            <p className="text-white/60 text-lg">
              Belum ada materi kata hubung N5 tersedia
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default KataHubungPages;
