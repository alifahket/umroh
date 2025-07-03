"use client";

const CTA = () => {
  return (
    <div className="bg-yellow-100 dark:bg-yellow-900 text-center p-6 rounded-xl mt-6">
      <h2 className="text-2xl font-semibold mb-2">Mulai Tabungan Emas Umroh Sekarang!</h2>
      <p className="mb-4">Gabung bersama ribuan jemaah menabung emas menuju Baitullah</p>
      <a
        href="/signup"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Daftar Sekarang
      </a>
    </div>
  );
};

export default CTA;
