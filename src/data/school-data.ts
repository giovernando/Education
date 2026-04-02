import { NewsItem, Teacher, GalleryItem, Extracurricular, Facility, OrgMember, Achievement, StudentOrganization } from "@/types";

export const newsData: NewsItem[] = [
  {
    id: "1",
    title: "Penerimaan Peserta Didik Baru Tahun Ajaran 2026/2027",
    excerpt: "Pendaftaran PPDB untuk tahun ajaran baru telah dibuka. Segera daftarkan putra-putri Anda.",
    content: "Sekolah kami membuka pendaftaran untuk tahun ajaran baru 2026/2027. Pendaftaran dapat dilakukan secara online maupun langsung ke sekolah.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
    date: "2026-03-15",
    category: "Pengumuman",
    author: "Admin",
  },
  {
    id: "2",
    title: "Juara 1 Olimpiade Sains Nasional Tingkat Provinsi",
    excerpt: "Siswa kami berhasil meraih juara pertama dalam Olimpiade Sains Nasional tingkat provinsi.",
    content: "Dengan bangga kami mengumumkan bahwa siswa kami telah meraih prestasi gemilang dalam ajang OSN tingkat provinsi.",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b3243?w=800",
    date: "2026-03-10",
    category: "Prestasi",
    author: "Admin",
  },
  {
    id: "3",
    title: "Kegiatan Class Meeting Semester Genap",
    excerpt: "Rangkaian kegiatan class meeting yang meriah diikuti seluruh siswa dengan antusias tinggi.",
    content: "Kegiatan class meeting semester genap berlangsung dengan sangat meriah dan penuh semangat.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    date: "2026-03-05",
    category: "Kegiatan",
    author: "Admin",
  },
  {
    id: "4",
    title: "Workshop Pengembangan Kurikulum Merdeka",
    excerpt: "Para guru mengikuti workshop pengembangan kurikulum merdeka untuk meningkatkan kualitas pembelajaran.",
    content: "Workshop ini bertujuan untuk meningkatkan kompetensi guru dalam menerapkan kurikulum merdeka.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800",
    date: "2026-02-28",
    category: "Kegiatan",
    author: "Admin",
  },
  {
    id: "5",
    title: "Peringatan Hari Pendidikan Nasional",
    excerpt: "Upacara dan rangkaian kegiatan dalam rangka memperingati Hari Pendidikan Nasional.",
    content: "Peringatan Hardiknas dilaksanakan dengan berbagai kegiatan edukatif dan inspiratif.",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800",
    date: "2026-02-20",
    category: "Kegiatan",
    author: "Admin",
  },
  {
    id: "6",
    title: "Lomba Debat Bahasa Inggris Antar Sekolah",
    excerpt: "Tim debat sekolah kami meraih juara kedua dalam lomba debat bahasa Inggris antar sekolah se-kota.",
    content: "Lomba debat bahasa Inggris ini diikuti oleh 24 sekolah dan tim kami berhasil menunjukkan performa luar biasa.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
    date: "2026-02-15",
    category: "Prestasi",
    author: "Admin",
  },
];

export const teachersData: Teacher[] = [
  { id: "1", name: "Dr. H. Ahmad Fauzi, M.Pd.", position: "Kepala Sekolah", subject: "Manajemen Pendidikan", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400", education: "S3 Manajemen Pendidikan" },
  { id: "2", name: "Dra. Siti Rahayu, M.Si.", position: "Wakil Kepala Sekolah", subject: "Matematika", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400", education: "S2 Matematika" },
  { id: "3", name: "Budi Santoso, S.Pd., M.Pd.", position: "Guru", subject: "Bahasa Indonesia", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400", education: "S2 Pendidikan Bahasa" },
  { id: "4", name: "Dewi Lestari, S.Pd.", position: "Guru", subject: "Bahasa Inggris", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400", education: "S1 Pendidikan Bahasa Inggris" },
  { id: "5", name: "Ir. Hendra Wijaya, M.T.", position: "Guru", subject: "Fisika", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400", education: "S2 Teknik Fisika" },
  { id: "6", name: "Ratna Permata, S.Pd.", position: "Guru", subject: "Biologi", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400", education: "S1 Pendidikan Biologi" },
  { id: "7", name: "Agus Pramono, S.Pd.", position: "Guru", subject: "Kimia", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400", education: "S1 Pendidikan Kimia" },
  { id: "8", name: "Sri Wahyuni, S.Pd.", position: "Guru", subject: "Sejarah", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400", education: "S1 Pendidikan Sejarah" },
];

export const galleryData: GalleryItem[] = [
  { id: "1", title: "Upacara Bendera", image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800", category: "Kegiatan", type: "image" },
  { id: "2", title: "Laboratorium Komputer", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800", category: "Fasilitas", type: "image" },
  { id: "3", title: "Kegiatan Olahraga", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800", category: "Olahraga", type: "image" },
  { id: "4", title: "Perpustakaan", image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800", category: "Fasilitas", type: "image" },
  { id: "5", title: "Pentas Seni", image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800", category: "Kegiatan", type: "image" },
  { id: "6", title: "Wisuda Siswa", image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800", category: "Kegiatan", type: "image" },
  { id: "7", title: "Laboratorium IPA", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800", category: "Fasilitas", type: "image" },
  { id: "8", title: "Lomba Karya Tulis", image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800", category: "Prestasi", type: "image" },
];

export const achievementsData: Achievement[] = [
  {
    id: "1",
    title: "Juara 1 Olimpiade Sains Nasional Tingkat Provinsi",
    description: "Tim IPA meraih juara 1 OSN tingkat provinsi kategori Fisika.",
    date: "2026-03-10",
    category: "Akademik",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b3243?w=800",
    level: "Provinsi",
  },
  {
    id: "2",
    title: "Juara 2 Lomba Debat Bahasa Inggris Antar Sekolah",
    description: "Tim debat bahasa Inggris meraih juara 2 tingkat kota.",
    date: "2026-02-15",
    category: "Akademik",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
    level: "Kota",
  },
  {
    id: "3",
    title: "Juara 1 Futsal U-17 Antar Sekolah",
    description: "Tim futsal putra meraih juara 1 liga futsal sekolah kota Tual.",
    date: "2026-01-20",
    category: "Olahraga",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800",
    level: "Kota",
  },
  {
    id: "4",
    title: "Juara 1 Lomba Tari Tradisional Tingkat Provinsi",
    description: "Kelompok tari tradisional Maluku meraih juara 1.",
    date: "2025-12-15",
    category: "Seni",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800",
    level: "Provinsi",
  },
];

export const studentOrgsData: StudentOrganization[] = [
  {
    id: "1",
    name: "OSIS",
    description: "Organisasi Siswa Intra Sekolah yang mengkoordinasikan seluruh kegiatan siswa.",
    president: "Rizky Ahmad",
    members: 25,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
  },
  {
    id: "2",
    name: "MPK",
    description: "Majelis Perwakilan Kelas yang mewakili aspirasi siswa di tingkat sekolah.",
    president: "Sari Indah",
    members: 15,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800",
  },
  {
    id: "3",
    name: "Dewan Ambud Siswa",
    description: "Lembaga konsultasi untuk penyelesaian masalah siswa.",
    president: "Bima Seno",
    members: 8,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800",
  },
];

export const extracurricularData: Extracurricular[] = [
  { id: "1", name: "Pramuka", description: "Kegiatan kepramukaan untuk membentuk karakter dan kedisiplinan siswa.", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800", schedule: "Sabtu, 14:00 - 16:00", coach: "Pak Budi Santoso" },
  { id: "2", name: "Basket", description: "Latihan dan kompetisi bola basket untuk pengembangan bakat olahraga siswa.", image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800", schedule: "Selasa & Kamis, 15:00 - 17:00", coach: "Pak Hendra Wijaya" },
  { id: "3", name: "Paduan Suara", description: "Pengembangan bakat menyanyi dan tampil dalam berbagai acara sekolah.", image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800", schedule: "Rabu, 14:00 - 16:00", coach: "Bu Sri Wahyuni" },
  { id: "4", name: "Robotika", description: "Belajar merancang dan memprogram robot untuk kompetisi nasional.", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800", schedule: "Senin & Rabu, 15:00 - 17:00", coach: "Pak Agus Pramono" },
  { id: "5", name: "Futsal", description: "Latihan futsal untuk meningkatkan kebugaran dan sportivitas siswa.", image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800", schedule: "Selasa & Jumat, 15:00 - 17:00", coach: "Pak Dedi Kurniawan" },
  { id: "6", name: "English Club", description: "Kegiatan untuk meningkatkan kemampuan berbahasa Inggris siswa melalui diskusi dan debat.", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800", schedule: "Kamis, 14:00 - 16:00", coach: "Bu Dewi Lestari" },
];

export const facilitiesData: Facility[] = [
  { id: "1", name: "Laboratorium Komputer", description: "Dilengkapi dengan 40 unit komputer terbaru dan koneksi internet berkecepatan tinggi.", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800", capacity: "40 siswa" },
  { id: "2", name: "Perpustakaan", description: "Koleksi lebih dari 10.000 buku dengan ruang baca yang nyaman dan ber-AC.", image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800", capacity: "100 siswa" },
  { id: "3", name: "Laboratorium IPA", description: "Fasilitas lengkap untuk praktikum Fisika, Kimia, dan Biologi.", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800", capacity: "35 siswa" },
  { id: "4", name: "Lapangan Olahraga", description: "Lapangan basket, futsal, dan voli standar nasional.", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800" },
  { id: "5", name: "Aula Serbaguna", description: "Ruang aula besar untuk kegiatan sekolah, seminar, dan acara penting.", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800", capacity: "500 orang" },
  { id: "6", name: "Masjid Sekolah", description: "Tempat ibadah yang luas dan nyaman untuk seluruh warga sekolah.", image: "https://images.unsplash.com/photo-1585036156171-384164a8c8df?w=800", capacity: "300 jamaah" },
];

export const orgStructure: OrgMember[] = [
  { id: "1", name: "Dr. H. Ahmad Fauzi, M.Pd.", position: "Kepala Sekolah", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400" },
  { id: "2", name: "Dra. Siti Rahayu, M.Si.", position: "Wakil Kepala Bidang Kurikulum", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" },
  { id: "3", name: "Budi Santoso, S.Pd., M.Pd.", position: "Wakil Kepala Bidang Kesiswaan", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" },
  { id: "4", name: "Ir. Hendra Wijaya, M.T.", position: "Wakil Kepala Bidang Sarana Prasarana", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" },
  { id: "5", name: "Dewi Lestari, S.Pd.", position: "Wakil Kepala Bidang Humas", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400" },
];

export const principalProfile = {
  name: "Dr. H. Ahmad Fauzi, M.Pd.",
  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600",
  education: "S3 Manajemen Pendidikan - Universitas Pendidikan Indonesia",
  motto: "Pendidikan adalah kunci untuk membuka pintu masa depan yang lebih baik.",
  bio: "Dr. H. Ahmad Fauzi, M.Pd. telah mengabdikan dirinya di dunia pendidikan selama lebih dari 25 tahun. Beliau memiliki visi untuk menjadikan sekolah ini sebagai lembaga pendidikan unggulan yang menghasilkan lulusan berkarakter, berprestasi, dan siap menghadapi tantangan global. Di bawah kepemimpinannya, sekolah telah meraih berbagai prestasi di tingkat nasional dan internasional.",
};


