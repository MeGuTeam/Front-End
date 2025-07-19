import Navbar from '@/features/shared/components/Navbar';
import AuthGuard from '@/features/shared/components/AuthGuard';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <Navbar />
      <main>{children}</main>
    </AuthGuard>
  );
}
