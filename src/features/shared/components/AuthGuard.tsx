'use client';

import { getToken } from '@/features/auth/lib/token';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const publicRoutes = ['/', '/login', '/register'];

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const token = getToken();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!publicRoutes.includes(pathname) && !token) {
      router.replace('/login');
    }
  }, [pathname, token]);

  return children;
}
