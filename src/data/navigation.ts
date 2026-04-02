import { NavItem } from "@/types";

export const navigationItems: NavItem[] = [
  { label: "Beranda", path: "/" },
  {
    label: "Profil",
    path: "/profil",
    children: [
      { label: "Tentang Sekolah", path: "/profil/tentang" },
      { label: "Visi & Misi", path: "/profil/visi-misi" },
      { label: "Kepala Sekolah", path: "/profil/kepala-sekolah" },
      { label: "Struktur Organisasi", path: "/profil/struktur-organisasi" },
    ],
  },
  { label: "Berita", path: "/berita" },
  { label: "Galeri", path: "/galeri" },
  { label: "Guru & Staff", path: "/guru-staff" },
  {
    label: "Kesiswaan", 
    path: "/kesiswaan",
    children: [
      { label: "Prestasi Siswa", path: "/kesiswaan/prestasi" },
      { label: "Organisasi Siswa", path: "/kesiswaan/organisasi" },
      { label: "Ekstrakurikuler", path: "/kesiswaan/ekstrakurikuler" },
    ],
  },
  { label: "Fasilitas", path: "/fasilitas" },
  { label: "Kontak", path: "/kontak" },
];
