import { createContext, useContext, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface AuthContextValue {
  user: { name?: string; email?: string; phone?: string } | null;
  register: (data: { name: string; email: string; phone: string }) => Promise<void>;
  login: (identifier: string) => Promise<void>;
  verify: (code: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthContextValue['user']>(null);
  const router = useRouter();

  async function register(data: { name: string; email: string; phone: string }) {
    // TODO: Integrasi Google Sheets / backend utk simpan user
    setUser({ name: data.name, email: data.email, phone: data.phone });
    router.push('/agreement');
  }

  async function login(identifier: string) {
    // TODO: Kirim OTP ke email/phone melalui API
    console.log('Request OTP for', identifier);
    router.push('/verifikasi');
  }

  async function verify(code: string) {
    // TODO: Verifikasi kode OTP dengan backend
    // Simpan session, anggap berhasil
    router.push('/dashboard');
  }

  return (
    <AuthContext.Provider value={{ user, register, login, verify }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
