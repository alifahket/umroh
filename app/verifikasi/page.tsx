'use client';

import { useForm } from 'react-hook-form';
import { useAuth } from '@/hooks/useAuth';

export default function VerifyPage() {
  const { verify } = useAuth();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    await verify(data.code);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-4">
      <h2 className="text-2xl font-bold">Verifikasi OTP</n2>
      <input {...register('code')} placeholder="Kode OTP" className="input text-center" required />
      <button type="submit" className="btn-primary w-full">Verifikasi & Masuk</button>
    </form>
  );
}
