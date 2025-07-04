'use client';

import { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { PerjanjianPDF } from '@/lib/perjanjian';

const sampleData = {
  nama: "Ahmad Fadli",
  alamat: "Jl. Taqwa No. 12, Jakarta",
  ktp: "3201012345678900",
  hp: "081234567890",
  email: "ahmad@example.com",
  tanggal: new Date().toLocaleDateString("id-ID"),
  nomor: "UMR-MRB-202507001"
};

export default function AkadMurabahahPage() {
  const [disetujui, setDisetujui] = useState(false);

  const handleSetuju = () => {
    setDisetujui(true);
    alert("✅ Perjanjian telah disetujui secara digital dan tersimpan.");
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 py-8">
      <h1 className="text-2xl font-bold">Perjanjian Murabahah</h1>

      <div className="prose dark:prose-invert max-w-none bg-white dark:bg-gray-800 p-6 rounded border">
        <p>Nomor: <strong>{sampleData.nomor}</strong></p>
        <p>Tanggal: <strong>{sampleData.tanggal}</strong></p>

        <h2>PIHAK PERTAMA</h2>
        <p><strong>Koperasi Syariah Umroh</strong></p>

        <h2>PIHAK KEDUA</h2>
        <p>Nama: {sampleData.nama}</p>
        <p>Alamat: {sampleData.alamat}</p>
        <p>No KTP: {sampleData.ktp}</p>
        <p>HP: {sampleData.hp}</p>
        <p>Email: {sampleData.email}</p>

        <h3>Pasal 1 — Akad</h3>
        <p>PIHAK PERTAMA menjual emas kepada PIHAK KEDUA secara cicilan dengan akad Murabahah.</p>

        <h3>Pasal 2 — Pembayaran</h3>
        <p>PIHAK KEDUA akan mencicil sebesar Rp300.000/bulan selama 10 bulan untuk 1 gram emas.</p>

        <h3>Pasal 3 — Pengiriman dan Titipan</h3>
        <p>Emas akan dititipkan hingga lunas, baru dapat dicetak atau digunakan untuk program umroh.</p>

        <h3>Pasal 4 — Penutup</h3>
        <p>Perjanjian ini berlaku setelah disetujui secara digital oleh kedua pihak.</p>
      </div>

      {!disetujui ? (
        <button
          onClick={handleSetuju}
          className="btn-primary w-full"
        >
          Setujui Perjanjian Ini
        </button>
      ) : (
        <div className="text-green-600 text-center font-semibold">
          ✅ Anda telah menyetujui perjanjian ini secara digital.
        </div>
      )}

      {disetujui && (
        <div className="mt-6 text-center">
          <PDFDownloadLink
            document={<PerjanjianPDF data={sampleData} />}
            fileName={`perjanjian-${sampleData.nama}.pdf`}
            className="text-blue-600 underline"
          >
            Unduh Salinan Perjanjian (PDF)
          </PDFDownloadLink>
        </div>
      )}
    </div>
  );
}
