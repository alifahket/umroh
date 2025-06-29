'use client';

import { useForm } from 'react-hook-form';
import { useAuth } from '@/hooks/useAuth';

export default function SignupPage() {
  const { register: registerUser } = useAuth();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    await registerUser(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-4">
      <h2 className="text-2xl font-bold">Daftar Akun</h2>
      <input {...register('name')} placeholder="Nama Lengkap" className="input" required />
      <input {...register('email')} type="email" placeholder="Email" className="input" required />
      <input {...register('phone')} type="tel" placeholder="Nomor HP" className="input" required />
      <button type="submit" className="btn-primary w-full">Daftar dan Lanjut ke Perjanjian</button>
    </form>
  );
}
