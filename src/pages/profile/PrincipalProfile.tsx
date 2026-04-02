import MainLayout from "@/layouts/MainLayout";
import Breadcrumb from "@/components/Breadcrumb";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { principalProfile } from "@/data/school-data";
import { Quote, GraduationCap } from "lucide-react";

const PrincipalProfile = () => (
  <MainLayout>
    <div className="pt-20" />
    <Breadcrumb items={[{ label: "Profil", path: "/profil/tentang" }, { label: "Kepala Sekolah" }]} />
    <SectionWrapper title="Kepala Sekolah" subtitle="Profil pimpinan SMA Negeri 5 Kota Tual">
      <div className="grid md:grid-cols-5 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2"
        >
          <div className="card-elevated overflow-hidden">
            <img src={principalProfile.image} alt={principalProfile.name} className="w-full aspect-[3/4] object-cover" />
            <div className="p-5 text-center">
              <h3 className="font-display font-bold text-lg text-foreground">{principalProfile.name}</h3>
              <p className="text-sm text-primary font-semibold">Kepala Sekolah</p>
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-2">
                <GraduationCap className="w-4 h-4" />
                {principalProfile.education}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-3 space-y-6"
        >
          <div className="card-elevated p-6 border-l-4 border-primary">
            <Quote className="w-8 h-8 text-primary/30 mb-2" />
            <p className="text-lg italic text-muted-foreground leading-relaxed">
              "{principalProfile.motto}"
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold text-foreground">Biografi</h3>
            <p className="text-muted-foreground leading-relaxed">{principalProfile.bio}</p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  </MainLayout>
);

export default PrincipalProfile;
