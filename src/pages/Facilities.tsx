import MainLayout from "@/layouts/MainLayout";
import Breadcrumb from "@/components/Breadcrumb";
import SectionWrapper from "@/components/SectionWrapper";
import FacilityCard from "@/components/cards/FacilityCard";
import { facilitiesData } from "@/data/school-data";

const Facilities = () => (
  <MainLayout>
    <div className="pt-20" />
    <Breadcrumb items={[{ label: "Fasilitas" }]} />
    <SectionWrapper title="Fasilitas Sekolah" subtitle="Sarana dan prasarana modern untuk menunjang kegiatan belajar mengajar">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {facilitiesData.map((facility, i) => (
          <FacilityCard key={facility.id} facility={facility} index={i} />
        ))}
      </div>
    </SectionWrapper>
  </MainLayout>
);

export default Facilities;
