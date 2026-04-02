import MainLayout from "@/layouts/MainLayout";
import Breadcrumb from "@/components/Breadcrumb";
import SectionWrapper from "@/components/SectionWrapper";
import NewsCard from "@/components/cards/NewsCard";
import { newsData } from "@/data/school-data";

const News = () => (
  <MainLayout>
    <div className="pt-20" />
    <Breadcrumb items={[{ label: "Berita" }]} />
    <SectionWrapper title="Berita & Artikel" subtitle="Informasi terbaru seputar kegiatan dan prestasi sekolah">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news, i) => (
          <NewsCard key={news.id} news={news} index={i} />
        ))}
      </div>
    </SectionWrapper>
  </MainLayout>
);

export default News;
