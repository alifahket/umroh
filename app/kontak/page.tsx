import CTA from "@/components/CTA";

export default function KontakPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Kontak Kami</h1>
      <p className="mb-2">Silakan hubungi kami untuk informasi lebih lanjut:</p>
      <ul className="list-disc list-inside mb-6">
        <li>Email: info@tabungan-umroh.id</li>
        <li>WhatsApp: 0812-3456-7890</li>
        <li>Alamat: Jl. K.H. Wahid Hasyim No. 99, Jakarta</li>
      </ul>
      <CTA />
    </div>
  );
}
