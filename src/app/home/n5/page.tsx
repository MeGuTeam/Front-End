'use client'

import React from 'react'
import { motion } from "framer-motion";
import { daftarMateriN5, dataKataBenda } from '@/features/home/data';
import { useRouter } from 'next/navigation';
import { FiBookOpen } from "react-icons/fi";
import { FaChevronRight, FaHome } from 'react-icons/fa';

const N5Pages = () => {
  const router = useRouter();

  return (
    <div className='bg-black min-h-svh text-white pt-18'>
        <section className='flex gap-2 items-center container mx-auto px-4 pt-8'>
          <FaHome className='w-5 h-5 text-blue-400'/> 
            <div className='flex gap-1 text-sm'>
              <div className="hover:text-blue-400 cursor-pointer transition-colors">
                <button onClick={() => router.push("/home")} className='hover:cursor-pointer'>
                  Home
                </button>
              </div> 
              <span className="text-white/50">&gt;</span> 
              <div className="text-blue-400 cursor-pointer transition-colors">
                <button onClick={() => router.push("/home/n5")} className='hover:cursor-pointer'>
                  N5
                </button>
              </div> 
            </div>
      </section>

      <section className="container mx-auto px-4 pt-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-2">
            Mulai perjalanan JLPT N5-mu dari sini
          </h1>
          <div className='border-l border-white/40'>
            <p className="text-white/70 text-lg pl-2">Kamu bisa mulai dengan memilih salah satu materi yang tersedia di bawah.</p>
          </div>
        </motion.div>
      </section>
      

      <section className='container mx-auto px-4 pt-8'>
        {daftarMateriN5.map((data) => (
          <div key={data.id} className='py-8'>
            <p className='text-2xl font-semibold border-l-4 border-white pl-2'>{data.kategori}</p>
            <div className='w-full gap-4 mt-4'>
              {data.list.map((data) => (
                <motion.div 
                  key={data.id}
                  className='border border-white/20 w-full rounded-lg p-4 bg-transparent relative overflow-hidden hover:border-white/40 transition-colors'
                  whileHover={{y: -5}}
                  >
                  <button onClick={() => router.push(`${data.handling}`)}
                      className='relative z-10 flex items-center justify-between w-full group hover:cursor-pointer'
                    >
                      <span className='flex gap-1.5 items-center'>
                        <FiBookOpen />
                        {data.name}
                      </span>
                      <FaChevronRight className="w-3.5 h-3.5 text-white/60 group-hover:translate-x-1 transition-all" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
        {dataKataBenda.map((data) => (
          <div key={data.id} className='py-8'>
            <p className='text-2xl font-semibold border-l-4 border-white pl-2'>{data.kategori}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
              {data.list.map((data) => (
                <motion.div 
                  key={data.id}
                  className='border border-white/20 w-full rounded-lg p-4 bg-transparent relative overflow-hidden hover:border-white/40 transition-colors'
                  whileHover={{y: -5}}
                  >
                  <button onClick={() => router.push(`${data.handling}`)}
                      className='relative z-10 flex items-center justify-between w-full group hover:cursor-pointer'
                    >
                      <span className='flex gap-1.5 items-center'>
                        <FiBookOpen />
                        {data.name}
                      </span>
                      <FaChevronRight className="w-3.5 h-3.5 text-white/60 group-hover:translate-x-1 transition-all" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default N5Pages