import MainLayout from "@/layouts/MainLayout";
import Breadcrumb from "@/components/Breadcrumb";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { orgStructure } from "@/data/school-data";

const OrgStructure = () => (
  <MainLayout>
    <div className="pt-20" />
    <Breadcrumb items={[{ label: "Profil", path: "/profil/tentang" }, { label: "Struktur Organisasi" }]} />
    <SectionWrapper title="Struktur Organisasi" subtitle="Susunan organisasi SMA Negeri 5 Kota Tual">
      {/* Principal at top */}
      <div className="flex justify-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-elevated p-6 text-center max-w-xs"
        >
          <img src={orgStructure[0].image} alt={orgStructure[0].name} className="w-24 h-24 rounded-full mx-auto mb-3 object-cover border-4 border-primary/20" />
          <h3 className="font-display font-bold text-foreground text-sm">{orgStructure[0].name}</h3>
          <p className="text-xs text-primary font-semibold">{orgStructure[0].position}</p>
        </motion.div>
      </div>

      {/* Connector line */}
      <div className="flex justify-center mb-10">
        <div className="w-px h-10 bg-border" />
      </div>

      {/* Vice principals */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {orgStructure.slice(1).map((member, i) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-elevated p-6 text-center"
          >
            <img src={member.image} alt={member.name} className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-4 border-primary/20" />
            <h3 className="font-display font-bold text-foreground text-sm">{member.name}</h3>
            <p className="text-xs text-primary font-semibold">{member.position}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  </MainLayout>
);

export default OrgStructure;
