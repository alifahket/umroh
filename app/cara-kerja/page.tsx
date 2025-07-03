import CTA from "@/components/CTA";

export default function CaraKerjaPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Cara Kerja</h1>
      <ol className="list-decimal list-inside space-y-2 mb-6">
        <li>Daftar akun dan lengkapi data.</li>
        <li>Lakukan cicilan emas melalui kami.</li>
        <li>Saldo emas tercatat dan dapat dipantau.</li>
        <li>Jika mencapai target, jemaah dapat diberangkatkan Umroh/Haji.</li>
      </ol>
      <CTA />
    </div>
  );
}
