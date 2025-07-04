import Link from "next/link";

const dataSetoran = [
  {
    tanggal: "2025-06-01",
    jumlah: 300000,
    emas: 0.25,
    bukti: "/bukti/bukti1.jpg"
  },
  {
    tanggal: "2025-07-01",
    jumlah: 300000,
    emas: 0.24,
    bukti: "/bukti/bukti2.jpg"
  }
];

export default function RiwayatSetoranPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Riwayat Setoran</h1>
      <table className="w-full text-sm border border-gray-300">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="border px-4 py-2">Tanggal</th>
            <th className="border px-4 py-2">Jumlah (Rp)</th>
            <th className="border px-4 py-2">Emas (gram)</th>
            <th className="border px-4 py-2">Bukti</th>
          </tr>
        </thead>
        <tbody>
          {dataSetoran.map((item, idx) => (
            <tr key={idx} className="text-center">
              <td className="border px-4 py-2">{item.tanggal}</td>
              <td className="border px-4 py-2">Rp{item.jumlah.toLocaleString()}</td>
              <td className="border px-4 py-2">{item.emas} gr</td>
              <td className="border px-4 py-2">
                <Link href={item.bukti} className="text-blue-500 underline" target="_blank">
                  Lihat Bukti
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
