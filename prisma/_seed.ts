import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

var strikeTemplates = [
  { name: "Keterlambatan masuk sekolah", amount: -5, hasDescription: true },
  { name: "Keterlambatan masuk KBM", amount: -5, hasDescription: true },
  {
    name: "Atribut tidak lengkap (Seragam, dasi & Id card)",
    amount: -5,
    hasDescription: true,
  },
  { name: "Alpha", amount: -10, hasDescription: true },
  {
    name: "Menggunakan hp / laptop disaat pelajaran",
    amount: -10,
    hasDescription: true,
  },
  {
    name: "Keluar kelas disaat jam mata pelajaran berlangsung",
    amount: -5,
    hasDescription: true,
  },
  {
    name: "Keterlambatan mengumpulkan tugas",
    amount: -5,
    hasDescription: true,
  },
  { name: "Tidak mengumpulkan tugas", amount: -15, hasDescription: true },
  {
    name: "Attitude (Sopan santun, prilaku) terhadap orang lain",
    amount: -20,
    hasDescription: true,
  },
  {
    name: "Perusakan sarana & prasarana sekolah",
    amount: -30,
    hasDescription: true,
  },
  { name: "Membuang sampah sembarangan", amount: -5, hasDescription: true },
  {
    name: "Gosip dan gibah yang merugikan nama baik orang lain",
    amount: -20,
    hasDescription: true,
  },
  { name: "Pencemaran / pemberitaan hoax", amount: -30, hasDescription: true },
  {
    name: "Merokok, Narkoba, Tawuran, bully, Tindakan criminal",
    amount: -70,
    hasDescription: true,
  },
  { name: "Tindakan asusila", amount: -70, hasDescription: true },
  { name: "Perkelahian", amount: -70, hasDescription: true },
  {
    name: "Pengambilan barang milik orang lain tanpa izin",
    amount: -70,
    hasDescription: true,
  },
  {
    name: "Membuat/menyebarkan konten gambar pornografi",
    amount: -50,
    hasDescription: true,
  },
  { name: "Ujaran kebencian SARA", amount: -20, hasDescription: true },
  {
    name: "Tidak mendukung/hadir di kegiatan sekolah",
    amount: -15,
    hasDescription: true,
  },
  { name: "Prilaku sikap baik", amount: 10, hasDescription: false },
  { name: "Prilaku membantu orang lain", amount: 10, hasDescription: false },
  {
    name: "Pemberian tugas khusus dari Guru",
    amount: 10,
    hasDescription: true,
  },
  { name: "Lomba mewakili sekolah Juara 3", amount: 3, hasDescription: false },
  { name: "Lomba mewakili sekolah Juara 2", amount: 5, hasDescription: false },
  { name: "Lomba mewakili sekolah Juara 1", amount: 10, hasDescription: false },
];

async function main() {
  var strikes = await prisma.studentStrikeType.createMany({
    data: strikeTemplates,
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
