import MainLayout from "@/layouts/MainLayout";
import Breadcrumb from "@/components/Breadcrumb";
import SectionWrapper from "@/components/SectionWrapper";
import OrganizationCard from "@/components/cards/OrganizationCard";
import { studentOrgsData } from "@/data/school-data";

const OrganisasiSiswa = () => (
  <MainLayout>
    <div className="pt-20" />
    <Breadcrumb items={[
      { label: "Kesiswaan", path: "/kesiswaan" },
      { label: "Organisasi Siswa" }
    ]} />
    <SectionWrapper title="Organisasi Siswa" subtitle="Lembaga-lembaga siswa yang aktif mengelola kegiatan sekolah">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {studentOrgsData.map((org, i) => (
          <OrganizationCard key={org.id} org={org} index={i} />
        ))}
      </div>
    </SectionWrapper>
  </MainLayout>
);

export default OrganisasiSiswa;

