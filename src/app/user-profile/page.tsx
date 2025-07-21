'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import {
  FaCamera,
  FaUser,
  FaSpinner,
  FaHome,
  FaChevronRight,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { uploadAvatar } from '@/features/user-profile/services';
import { useRouter } from 'next/navigation';

const UserProfile = () => {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<string>('');
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  // TODO: state currentAvatar init value dari payload server
  const [currentAvatar, setCurrentAvatar] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      if (!selectedFile.type.startsWith('image/')) {
        setStatus('File harus berupa gambar (JPG, PNG, etc.)');
        return;
      }

      if (selectedFile.size > 5 * 1024 * 1024) {
        setStatus('Ukuran file tidak boleh lebih dari 5MB');
        return;
      }

      setFile(selectedFile);
      setStatus('');

      const url = URL.createObjectURL(selectedFile);
      setPreviewUrl(url);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setStatus('Pilih file terlebih dahulu');
      return;
    }

    setIsUploading(true);
    setStatus('Mengupload foto...');

    try {
      const result = await uploadAvatar(file);

      if (result) {
        setStatus('Foto berhasil diupload!');
        setCurrentAvatar(previewUrl);
        setFile(null);
        setPreviewUrl(null);

        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } else {
        setStatus('Gagal mengupload foto. Silakan coba lagi.');
      }
    } catch (error) {
      console.error('Upload error:', error);
      setStatus('Terjadi kesalahan saat mengupload foto');
    } finally {
      setIsUploading(false);
    }
  };

  const handleCancel = () => {
    setFile(null);
    setPreviewUrl(null);
    setStatus('');

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="bg-black min-h-screen pt-18 pb-12">
      <div className="container mx-auto px-4 py-8">
        <nav className="mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm">
            <li className="flex items-center">
              <button
                onClick={() => router.push('/home')}
                className="flex items-center gap-2 text-white/70 hover:text-blue-400 transition-colors duration-200 group"
                aria-label="Kembali ke halaman utama"
              >
                <FaHome className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span>Home</span>
              </button>
            </li>
            <li className="flex items-center">
              <FaChevronRight className="w-3 h-3 text-white/30 mx-2" />
              <span className="text-blue-400 font-medium" aria-current="page">
                User Profile
              </span>
            </li>
          </ol>
        </nav>

        <header className="mb-8">
          <h1 className="text-white text-3xl font-semibold mb-3">
            Profile Pengguna
          </h1>
          <p className="text-white/70 text-lg">Kelola informasi profile Anda</p>
        </header>

        <section className="border border-white/20 rounded-lg p-6 bg-transparent mb-6">
          <h2 className="text-white text-xl font-medium mb-6">Foto Profile</h2>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-2 border-white/20 overflow-hidden bg-white/5 flex items-center justify-center">
                {currentAvatar || previewUrl ? (
                  <Image
                    src={currentAvatar || previewUrl || ''}
                    alt="Profile Avatar"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <FaUser className="w-12 h-12 text-white/40" />
                )}
              </div>

              <motion.button
                className="absolute bottom-0 right-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors shadow-lg"
                onClick={triggerFileInput}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isUploading}
                aria-label="Pilih foto profile baru"
              >
                <FaCamera className="w-4 h-4" />
              </motion.button>
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                  aria-label="Pilih file foto"
                />

                <div className="flex flex-wrap gap-3">
                  <motion.button
                    className="px-4 py-2 border border-white/20 text-white rounded-md hover:border-white/40 transition-colors flex items-center gap-2"
                    onClick={triggerFileInput}
                    disabled={isUploading}
                    whileHover={{ y: -2 }}
                  >
                    <FaCamera className="w-4 h-4" />
                    Pilih Foto
                  </motion.button>

                  {file && (
                    <>
                      <motion.button
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={handleUpload}
                        disabled={isUploading}
                        whileHover={{ y: -2 }}
                      >
                        {isUploading ? (
                          <>
                            <FaSpinner className="w-4 h-4 animate-spin" />
                            Upload...
                          </>
                        ) : (
                          <>Upload Foto</>
                        )}
                      </motion.button>

                      <motion.button
                        className="px-4 py-2 border border-white/20 text-white/60 rounded-md hover:border-white/40 hover:text-white transition-colors"
                        onClick={handleCancel}
                        disabled={isUploading}
                        whileHover={{ y: -2 }}
                      >
                        Batal
                      </motion.button>
                    </>
                  )}
                </div>
              </div>

              {file && (
                <div className="text-sm text-white/60 bg-white/5 p-3 rounded-md border border-white/10">
                  <p>
                    <strong>File:</strong> {file.name}
                  </p>
                  <p>
                    <strong>Ukuran:</strong>{' '}
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              )}

              {status && (
                <motion.div
                  className={`text-sm p-3 rounded-md ${
                    status.includes('berhasil')
                      ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                      : status.includes('Gagal') || status.includes('kesalahan')
                        ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                        : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="alert"
                  aria-live="polite"
                >
                  {status}
                </motion.div>
              )}

              <div className="bg-white/5 p-4 rounded-md border border-white/10">
                <h3 className="text-white/80 font-medium text-sm mb-2">
                  Panduan Upload:
                </h3>
                <ul className="text-xs text-white/60 space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Format yang didukung: JPG, PNG, GIF</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Ukuran maksimal: 5MB</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      Disarankan rasio 1:1 (kotak) untuk hasil terbaik
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserProfile;
