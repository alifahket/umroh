import CTA from "@/components/CTA";

export default function FaqPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">FAQ & Bantuan</h1>
      <div className="space-y-4 mb-6">
        <div>
          <h2 className="font-semibold">Apakah tabungan ini halal?</h2>
          <p>Ya, program mengikuti akad syariah seperti Murabahah dan Wadiah.</p>
        </div>
        <div>
          <h2 className="font-semibold">Apakah emas disimpan secara fisik?</h2>
          <p>Ya, emas disimpan di lembaga resmi (mitra Pegadaian atau koperasi syariah).</p>
        </div>
      </div>
      <CTA />
    </div>
  );
}
