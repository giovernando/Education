import MainLayout from "@/layouts/MainLayout";
import Breadcrumb from "@/components/Breadcrumb";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { Target, Eye, CheckCircle } from "lucide-react";

const visionMission = {
  vision: "Menjadi sekolah unggul yang menghasilkan lulusan beriman, berilmu, berkarakter, dan berwawasan global.",
  missions: [
    "Menyelenggarakan pendidikan yang berkualitas berdasarkan nilai-nilai keimanan dan ketakwaan.",
    "Mengembangkan potensi akademik dan non-akademik peserta didik secara optimal.",
    "Membangun budaya literasi dan inovasi dalam pembelajaran.",
    "Membentuk karakter peserta didik yang disiplin, bertanggung jawab, dan berjiwa kepemimpinan.",
    "Menjalin kerjasama dengan berbagai pihak untuk peningkatan mutu pendidikan.",
    "Menciptakan lingkungan sekolah yang bersih, nyaman, dan ramah lingkungan.",
  ],
};

const VisionMission = () => (
  <MainLayout>
    <div className="pt-20" />
    <Breadcrumb items={[{ label: "Profil", path: "/profil/tentang" }, { label: "Visi & Misi" }]} />
    <SectionWrapper title="Visi & Misi" subtitle="Arah dan tujuan pendidikan SMA Negeri 5 Kota Tual">
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card-elevated p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Eye className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground">Visi</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed text-lg italic">
            "{visionMission.vision}"
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card-elevated p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground">Misi</h3>
          </div>
          <ul className="space-y-3">
            {visionMission.missions.map((m, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{m}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SectionWrapper>
  </MainLayout>
);

export default VisionMission;
