import MainLayout from "@/layouts/MainLayout";
import Breadcrumb from "@/components/Breadcrumb";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-school.jpg";

const AboutSchool = () => (
  <MainLayout>
    <div className="pt-20" />
    <Breadcrumb items={[{ label: "Profil", path: "/profil/tentang" }, { label: "Tentang Sekolah" }]} />
    <SectionWrapper title="Tentang Sekolah" subtitle="Mengenal lebih dekat SMA Negeri 5 Kota Tual">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src={heroImage}
          alt="Gedung Sekolah"
          className="rounded-xl shadow-lg w-full"
        />
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <p className="text-muted-foreground leading-relaxed">
            SMA Negeri 5 Kota Tual didirikan pada tahun 2005 dan telah berkembang menjadi salah satu sekolah unggulan di wilayah Maluku Tenggara. Dengan akreditasi "A", sekolah kami terus berinovasi dalam memberikan pendidikan berkualitas tinggi.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Terletak di lokasi strategis di pusat Kota Tual, sekolah kami memiliki lingkungan yang asri dan kondusif untuk kegiatan belajar mengajar. Didukung oleh fasilitas modern dan tenaga pendidik yang kompeten, kami berkomitmen untuk mencetak generasi penerus bangsa yang berkarakter dan berprestasi.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Sekolah kami menawarkan berbagai program unggulan termasuk program akselerasi, kelas olimpiade, dan program pengembangan karakter yang terintegrasi dalam kurikulum merdeka.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  </MainLayout>
);

export default AboutSchool;
