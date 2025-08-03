import RegisterForm from '@/features/auth/components/RegisterForm';

export default function RegisterPage() {
  return (
    <div className="min-h-svh flex relative bg-gradient-to-b from-black via-black via-90% to-neutral-950">
      <div className="w-full relative z-10">
        <div className="lg:min-h-full min-h-svh flex flex-col justify-center relative max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white py-3 text-center">
            Buat Akun Baru
          </h1>
          <p className="text-muted-foreground mb-2 text-center">
            Daftarkan dirimu untuk mulai belajar dan mengakses fitur lengkap.
          </p>

          <div className="absolute top-12 right-12 w-[500px] h-[400px] bg-white/5 blur-[140px] rounded-[30%] -z-10" />

          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
