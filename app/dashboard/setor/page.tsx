"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SetorEmasPage() {
  const router = useRouter();
  const [form, setForm] = useState({ jumlah: "", tanggal: "" });
  const [bukti, setBukti] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBukti(e.target.files?.[0] || null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bukti) return alert("Mohon upload bukti transfer.");

    // Simpan data ke backend atau kirim ke Google Sheets
    console.log("Disimpan:", form, bukti);
    router.push("/dashboard/riwayat");
  };

  return (
    <div className="max-w-lg mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Setor Emas Bulanan</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="tanggal"
          type="date"
          className="input"
          onChange={handleChange}
          required
        />
        <input
          name="jumlah"
          type="number"
          placeholder="Jumlah (Rp)"
          className="input"
          onChange={handleChange}
          required
        />
        <input
          type="file"
          accept="image/*,application/pdf"
          onChange={handleFile}
          className="input"
        />
        <button type="submit" className="btn-primary w-full">
          Kirim Setoran
        </button>
      </form>
    </div>
  );
}
