import MainLayout from "@/layouts/MainLayout";
import Breadcrumb from "@/components/Breadcrumb";
import SectionWrapper from "@/components/SectionWrapper";
import AchievementCard from "@/components/cards/AchievementCard";
import { achievementsData } from "@/data/school-data";

const PrestasiSiswa = () => (
  <MainLayout>
    <div className="pt-20" />
    <Breadcrumb items={[
      { label: "Kesiswaan", path: "/kesiswaan" },
      { label: "Prestasi Siswa" }
    ]} />
    <SectionWrapper title="Prestasi Siswa" subtitle="Pencapaian luar biasa siswa kami di berbagai bidang">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievementsData.map((achievement, i) => (
          <AchievementCard key={achievement.id} achievement={achievement} index={i} />
        ))}
      </div>
    </SectionWrapper>
  </MainLayout>
);

export default PrestasiSiswa;

