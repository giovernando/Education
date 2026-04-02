import { useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import Breadcrumb from "@/components/Breadcrumb";
import SectionWrapper from "@/components/SectionWrapper";
import GalleryModal from "@/components/GalleryModal";
import { galleryData } from "@/data/school-data";
import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";

const categories = ["Semua", ...Array.from(new Set(galleryData.map((g) => g.category)))];

const Gallery = () => {
  const [filter, setFilter] = useState("Semua");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filtered = filter === "Semua" ? galleryData : galleryData.filter((g) => g.category === filter);

  return (
    <MainLayout>
      <div className="pt-20" />
      <Breadcrumb items={[{ label: "Galeri" }]} />
      <SectionWrapper title="Galeri" subtitle="Dokumentasi kegiatan dan fasilitas sekolah">
        {/* Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-primary/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => { setCurrentIndex(galleryData.indexOf(item)); setModalOpen(true); }}
            >
              <img src={item.image} alt={item.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-foreground/60 to-transparent">
                <p className="text-primary-foreground text-sm font-medium">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <GalleryModal
        items={galleryData}
        currentIndex={currentIndex}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onNavigate={setCurrentIndex}
      />
    </MainLayout>
  );
};

export default Gallery;
