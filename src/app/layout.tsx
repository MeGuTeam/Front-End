import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import NavbarWrapper from './navbar-wrapper'; // perhatikan ini
import AuthGuard from '@/features/shared/components/AuthGuard';

// TODO: Jika tidak ada token user tidak bisa mengakses halaman kecuali /, /login, /register, dan redirect ke halaman login

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'MeGu',
  description: 'On Working...',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthGuard>
          <NavbarWrapper />
          {children}
        </AuthGuard>
      </body>
    </html>
  );
}
