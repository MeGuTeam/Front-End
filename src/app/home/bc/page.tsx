'use client';

import React, { useEffect, useState } from 'react';
import { getBasicConversation } from '@/features/home/services/data';
import { trackerBasicCnversation } from '@/features/home/services/tracker';
import { motion } from 'framer-motion';
import { FaHome } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { MdAccessTime, MdCheckCircle } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { TbMessageDots, TbLanguage } from 'react-icons/tb';
import { HiOutlineSparkles } from "react-icons/hi";
import { AiOutlineLoading } from 'react-icons/ai';
import { BasicConversationData } from '@/features/home/types/materidasar';

const BasicConversationPages = () => {
  const [conversations, setConversations] = useState<BasicConversationData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [updatedData, setUpdatedData] = useState(false);
  const [updating, setUpdating] = useState<number | null>(null);
  const router = useRouter();

  const fetchBasicConversations = async (setUpdatedData: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
      setLoading(true);
      const data = await getBasicConversation(setUpdatedData);
      setConversations(data);
    } catch (err) {
      setError('Data tidak ditemukan');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (updatedData === false) {
      fetchBasicConversations(setUpdatedData);
      setLoading(false);
    }
  }, [updatedData]);

  const handleConversationClick = async (conversationId: number, currentStatus: boolean) => {
    try {
      setUpdating(conversationId)
      // Toggle status - if completed, mark as incomplete and vice versa
      await trackerBasicCnversation(conversationId, currentStatus, setUpdatedData);
    } catch (error) {
      console.error('Failed to update conversation status:', error);
    }
  };

  const completedCount = conversations.filter(c => c.status).length;
  const progressPercentage = conversations.length > 0 ? (completedCount / conversations.length) * 100 : 0;

  return (
    <div className="bg-black min-h-svh text-white pt-18">
      
      {/* Header Section */}
      <section className="container mx-auto px-4 pt-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-2">
            Percakapan Dasar
          </h1>
          <p className="text-white/70 text-lg">Pelajari percakapan dasar bahasa Jepang untuk kehidupan sehari-hari</p>
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
          <div className='flex gap-2 items-center mb-4'>
            <FaHome className='w-5 h-5 text-blue-400'/> 
            <div className='flex gap-1 text-sm'>
              <div className="hover:text-blue-400 cursor-pointer transition-colors">
                <button onClick={() => router.push("/home")} className='hover:cursor-pointer'>
                  Home
                </button>
              </div> 
              <span className="text-white/50">&gt;</span> 
              <span className='text-blue-400 font-medium hover:cursor-pointer'>Percakapan Dasar</span>
            </div>
          </div>
          
          {/* Progress Section */}
          <div className='flex items-center justify-between mb-3'>
            <div className='flex items-center gap-3'>
              <IoBookOutline className="w-5 h-5 text-blue-400" />
              <p className="text-white/80 font-medium">Progress Belajar Anda</p>
            </div>
            <div className="bg-blue-500/20 px-3 py-1 rounded-full">
              <span className="text-blue-500 font-semibold text-sm">
                {completedCount}/{conversations.length}
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
      
      {/* Conversations List Section */}
      <section className='container px-4 mx-auto mt-8 pb-8'>
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neutral-400"></div>
          </div>
        )}
        
        {error && (
          <div className="flex items-center justify-center gap-12 border border-red-400 h-24">
            <div className='border-t border-red-400 w-12'></div>
            <div>{error}</div>
            <div className='border-t border-red-400 w-12'></div>
          </div>
        )}

        {!loading && !error && (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {conversations.map((data, index) => (
              <motion.div 
                key={data.id} 
                className='group relative'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div 
                  className="relative overflow-hidden border-b transition-colors duration-300 cursor-pointer border-white/40 hover:border-white/60"
                  onClick={() => handleConversationClick(data.id, data.status)}
                >
                  {/* Status Indicator */}
                  <div className="absolute top-4 right-4 z-10">
                    {updating === data.id ? (
                      <div className="flex items-center justify-center text-sm text-white gap-2">
                        <AiOutlineLoading className="animate-spin w-4 h-4" />
                        <p className='text-white/80 font-medium'>Memperbarui...</p>
                      </div>
                    ) : (
                      <div>
                        {data.status ? (
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
                    )}
                  </div>

                  <div className="p-6">
                    {/* Word & Reading */}
                    <div className='mb-4'>
                      <div className='flex items-center gap-3 mb-2'>
                        <h2 className="text-2xl font-bold text-white">
                          {data.word}
                        </h2>
                        <span className="text-lg text-white/60 font-medium">
                          {data.reading}
                        </span>
                      </div>
                      
                      {/* Type Badge */}
                      <div className="flex gap-2 mb-3">
                        <span className={`inline-flex items-center gap-1 rounded-full text-xs px-3 py-1 font-medium ${
                          data.type === 'greeting' 
                            ? 'bg-blue-100 text-blue-700' 
                            : 'bg-purple-100 text-purple-700'
                        }`}>
                          <HiOutlineSparkles className="w-3 h-3" />
                          {data.type === 'greeting' ? 'Salam' : data.type}
                        </span>
                      </div>
                    </div>

                    {/* Meaning */}
                    <div className='mb-4'>
                      <h3 className="text-sm font-semibold text-white/80 mb-2 flex items-center gap-2">
                        <TbLanguage />
                        Arti
                      </h3>
                      <p className="text-white/70 leading-relaxed font-medium">{data.meaning}</p>
                    </div>

                    {/* Example Sentence */}
                    <div>
                      <h3 className="text-sm font-semibold text-white/80 mb-2 flex items-center gap-2">
                        <TbMessageDots />
                        Contoh Kalimat
                      </h3>
                      <p className="text-white/70 italic leading-relaxed">{data.example_sentence}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && conversations.length === 0 && (
          <div className="text-center py-20">
            <TbMessageDots className="w-16 h-16 text-white/30 mx-auto mb-4" />
            <p className="text-white/60 text-lg">Belum ada materi percakapan dasar tersedia</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default BasicConversationPages;