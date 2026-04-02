import MainLayout from "@/layouts/MainLayout";
import Breadcrumb from "@/components/Breadcrumb";
import SectionWrapper from "@/components/SectionWrapper";
import TeacherCard from "@/components/cards/TeacherCard";
import { teachersData } from "@/data/school-data";

const TeachersStaff = () => (
  <MainLayout>
    <div className="pt-20" />
    <Breadcrumb items={[{ label: "Guru & Staff" }]} />
    <SectionWrapper title="Guru & Staff" subtitle="Tenaga pendidik dan kependidikan yang profesional dan berdedikasi">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teachersData.map((teacher, i) => (
          <TeacherCard key={teacher.id} teacher={teacher} index={i} />
        ))}
      </div>
    </SectionWrapper>
  </MainLayout>
);

export default TeachersStaff;
