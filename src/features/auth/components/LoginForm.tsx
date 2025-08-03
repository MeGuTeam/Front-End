'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { LoginSchema, loginSchema } from '@/features/auth/schemas/login.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { loginAuth } from '@/features/auth/services';
import { useRouter } from 'next/navigation';
import { FaEyeSlash, FaEye, FaLock, FaUser } from 'react-icons/fa';
import Link from 'next/link';

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = async (values: LoginSchema) => {
    setIsLoading(true);
    try {
      const response = await loginAuth(values.username, values.password);
      if (response?.status === 200 || response?.status === 201) {
        toast.success('Login berhasil!');
        router.push('/home');
      } else {
        toast.error('Login Gagal, Silahkan coba lagi.');
      }
    } catch {
      toast.error('Terjadi kesalahan. Silahkan coba lagi');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="border-none bg-black/10 backdrop-blur-md rounded-lg pt-10 lg:pb-8 mt-4 lg:mt-0 py-6 lg:mx-36">
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col items-center"
          >
            <div className="space-y-4 w-full">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white text-lg">
                      Username
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                        <Input
                          {...field}
                          type="text"
                          placeholder="Masukkan Username Anda.."
                          className="pl-10 bg-transparent border-white/20 text-white placeholder:text-muted-foreground focus:border-white/40 placeholder:text-sm lg:placeholder:text-base py-4.5 lg:py-6"
                          disabled={isLoading}
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white text-lg">
                      Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                        <Input
                          {...field}
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Masukkan Password Anda.."
                          className="pl-10 bg-transparent border-white/20 text-white placeholder:text-muted-foreground focus:border-white/40 placeholder:text-sm lg:placeholder:text-base py-4.5 lg:py-6"
                          disabled={isLoading}
                        />
                        <Button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-transparent text-muted-foreground hover:text-white hover:bg-transparent"
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              className="w-24 mt-6 bg-white text-black hover:bg-gray-200 font-semibold py-3"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <motion.div
                    className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  <span>Masuk...</span>
                </div>
              ) : (
                'Masuk'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="justify-center mt-4">
        <p className="text-muted-foreground">
          Belum punya akun?{' '}
          <Link
            href="/register"
            className="text-white hover:underline font-semibold"
          >
            Daftar sekarang
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
