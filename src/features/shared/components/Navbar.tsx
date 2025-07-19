'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { getUser } from '@/features/auth/services';
import { removeToken, removeUserId } from '../../auth/lib/token';

interface User {
  username: string | null;
  avatar: string | null;
}

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState<User>({
    username: '',
    avatar: '',
  });
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDataUser = async () => {
      try {
        setIsLoading(true);
        const data = await getUser();

        setUser({
          username: data.data.username,
          avatar: data.data.profile_picture,
        });
      } catch (e) {
        console.error('Gagal mengambil data user: ', e);
        router.push('/login');
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataUser();
  }, [router]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    removeToken();
    removeUserId();
    setIsDropdownOpen(false);
    router.push('/login');
  };

  const handleSettings = () => {
    setIsDropdownOpen(false);
    router.push('/user-profile');
  };

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            onClick={handleLogoClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative w-10 h-10">
              <Image
                src="/logo.png"
                alt="MeGu Logo"
                width={40}
                height={40}
                className="rounded-lg object-contain"
              />
            </div>
            <span className="text-white font-semibold text-lg leading-tight">
              MeGu
            </span>
          </motion.div>

          <div className="relative" ref={dropdownRef}>
            <motion.button
              className="flex items-center gap-3 border border-white/10 rounded-lg px-3 py-2 hover:bg-white/10 hover:border-white/20 transition-all"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isLoading}
            >
              <div className="relative w-8 h-8">
<Image
  src={user.avatar || '/defaultprofilepicture.png'}
  alt="User Avatar"
  width={32}
  height={32}
  className="rounded-full object-cover"
  loading="lazy"
/>

              </div>
              <span className="text-white text-sm font-medium hidden sm:block">
                {isLoading ? 'Loading...' : user.username}
              </span>
              <motion.div
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaChevronDown className="w-3 h-3 text-white/60" />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-48 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg shadow-xl overflow-hidden"
                >
                  <div className="py-2">
                    <motion.button
                      className="w-full flex items-center gap-3 px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors text-left"
                      onClick={handleSettings}
                      whileHover={{ x: 4 }}
                    >
                      <FaCog className="w-4 h-4" />
                      <span className="text-sm">Edit Profile</span>
                    </motion.button>

                    <div className="border-t border-white/10 my-1"></div>

                    <motion.button
                      className="w-full flex items-center gap-3 px-4 py-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors text-left"
                      onClick={handleLogout}
                      whileHover={{ x: 4 }}
                    >
                      <FaSignOutAlt className="w-4 h-4" />
                      <span className="text-sm">Logout</span>
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
