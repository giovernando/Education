import MainLayout from "@/layouts/MainLayout";
import Breadcrumb from "@/components/Breadcrumb";
import SectionWrapper from "@/components/SectionWrapper";
import ExtracurricularCard from "@/components/cards/ExtracurricularCard";
import { extracurricularData } from "@/data/school-data";

const Extracurricular = () => (
  <MainLayout>
    <div className="pt-20" />
    <Breadcrumb items={[{ label: "Ekstrakurikuler" }]} />
    <SectionWrapper title="Ekstrakurikuler" subtitle="Beragam kegiatan untuk mengembangkan bakat dan minat siswa">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {extracurricularData.map((item, i) => (
          <ExtracurricularCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </SectionWrapper>
  </MainLayout>
);

export default Extracurricular;
