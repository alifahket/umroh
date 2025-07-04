import { PDFDownloadLink, Document, Page, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 12, fontFamily: 'Helvetica' },
  section: { marginBottom: 10 },
  bold: { fontWeight: 'bold' },
});

export function PerjanjianPDF({ data }: { data: any }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.bold}>PERJANJIAN MURABAHAH TABUNGAN EMAS UMROH</Text>
        <Text style={styles.section}>Nomor: {data.nomor}</Text>
        <Text style={styles.section}>Tanggal: {data.tanggal}</Text>

        <Text style={styles.bold}>PIHAK KEDUA</Text>
        <Text>Nama: {data.nama}</Text>
        <Text>Alamat: {data.alamat}</Text>
        <Text>No KTP: {data.ktp}</Text>
        <Text>HP: {data.hp}</Text>
        <Text>Email: {data.email}</Text>

        <Text style={styles.section}>Pasal 1 - Akad: Penjualan emas secara cicilan (Murabahah)</Text>
        <Text style={styles.section}>Pasal 2 - Pembayaran: Rp300.000/bulan selama 10 bulan</Text>
        <Text style={styles.section}>Pasal 3 - Titipan: Emas disimpan hingga lunas</Text>
        <Text style={styles.section}>Pasal 4 - Penutup: Berlaku saat disetujui digital</Text>

        <Text style={{ marginTop: 20 }}>
          Tanda Tangan Digital:
          PIHAK PERTAMA: Koperasi Syariah Umroh
          PIHAK KEDUA: {data.nama}
        </Text>
      </Page>
    </Document>
  );
}
