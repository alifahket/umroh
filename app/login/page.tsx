'use client';

import { useForm } from 'react-hook-form';
import { useAuth } from '@/hooks/useAuth';

export default function LoginPage() {
  const { login } = useAuth();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    await login(data.identifier);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-4">
      <h2 className="text-2xl font-bold">Login</h2>
      <input {...register('identifier')} placeholder="Email atau Nomor HP" className="input" required />
      <button type="submit" className="btn-primary w-full">Kirim OTP</button>
    </form>
  );
}
