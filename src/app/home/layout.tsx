import Navbar from '@/features/shared/components/Navbar';
import AuthGuard from '@/features/shared/components/AuthGuard';
import ReactQueryProvider from '@/features/home/lib/react-query-provider';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <Navbar />
      <ReactQueryProvider>
        <main>{children}</main>
      </ReactQueryProvider>
      
    </AuthGuard>
  );
}
