'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/features/shared/components/Navbar';

export default function NavbarWrapper() {
  const path = usePathname();

  const hideOn = ['/', '/login', '/register', '/user-profile'];
  const shouldShow = !hideOn.includes(path);

  return shouldShow ? <Navbar /> : null;
}
