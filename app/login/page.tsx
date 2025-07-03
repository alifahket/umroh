'use client';

import { useForm } from 'react-hook-form';
import { useAuth } from '@/hooks/useAuth';

export default function LoginPage() {
  const { login } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    await login(data.identifier);
    // bisa redirect di dalam useAuth jika login berhasil
  };

  return (
    <div className="max-w-md mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Masuk ke Akun Anda</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register('identifier', { required: true })}
          placeholder="Email atau Nomor HP"
          className="w-full border px-3 py-2 rounded input"
        />
        {errors.identifier && <p className="text-sm text-red-500">Wajib diisi</p>}
        
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded btn-primary"
        >
          Kirim OTP / Magic Link
        </button>
      </form>
    </div>
  );
}
