import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Users, Trophy, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import MainLayout from "@/layouts/MainLayout";
import SectionWrapper from "@/components/SectionWrapper";
import NewsCard from "@/components/cards/NewsCard";
import TypewriterText from "@/components/TypewriterText";
import { newsData, facilitiesData, principalProfile } from "@/data/school-data"; 
import heroImage1 from "@/assets/hero-school.jpg";
import heroImage2 from "@/assets/hero-slide-2.jpg";
import heroImage3 from "@/assets/hero-slide-3.jpg";

const heroSlides = [
  {
    image: heroImage1,
    subtitle: "Selamat Datang di",
    title: "SMA Negeri 5\nKota Tual",
    description: "Mewujudkan generasi unggul yang beriman, berilmu, berkarakter, dan berwawasan global menuju Indonesia Emas 2045.",
  },
  {
    image: heroImage2,
    subtitle: "Lingkungan Belajar",
    title: "Modern &\nKondusif",
    description: "Fasilitas lengkap dan lingkungan yang nyaman untuk mendukung proses pembelajaran yang berkualitas.",
  },
  {
    image: heroImage3,
    subtitle: "Prestasi Gemilang",
    title: "Meraih\nMasa Depan",
    description: "Menghasilkan lulusan berprestasi yang siap bersaing di tingkat nasional dan internasional.",
  },
];

const stats = [
  { icon: GraduationCap, value: "1,200+", label: "Siswa Aktif" },
  { icon: Users, value: "85+", label: "Tenaga Pendidik" },
  { icon: Trophy, value: "150+", label: "Prestasi" },
  { icon: BookOpen, value: "30+", label: "Ekstrakurikuler" },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

const Home = () => {
  const [[currentSlide, direction], setSlide] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const paginate = useCallback((newDirection: number) => {
    setSlide(([prev]) => {
      const next = (prev + newDirection + heroSlides.length) % heroSlides.length;
      return [next, newDirection];
    });
  }, []);

  const goToSlide = useCallback((index: number) => {
    setSlide(([prev]) => [index, index > prev ? 1 : -1]);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, paginate]);

  const slide = heroSlides[currentSlide];

  return (
    <MainLayout>
      {/* Hero Carousel */}
      <section
        className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 gradient-primary opacity-75" />
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="relative z-10 container-custom">
          <AnimatePresence mode="wait">
            <div className="max-w-2xl h-[70vh] md:h-[75vh] flex flex-col justify-center relative">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col justify-center flex-1"
              >
              <TypewriterText 
                texts={heroSlides.map(s => s.subtitle)}
                className="text-secondary font-semibold text-sm uppercase tracking-widest mb-1 block h-5 flex items-center"
                typingSpeed={30}
                deleteSpeed={15}
                pauseSpeed={600}
              />
              <TypewriterText 
                texts={[
                  'SMA Negeri 5 Kota Tual',
                  'Modern & Kondusif',
                  'Meraih Masa Depan'
                ]}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-2 block h-[140px] md:h-[180px] lg:h-[200px] flex items-center"
                typingSpeed={40}
                deleteSpeed={30}
                pauseSpeed={1500}
              />
              <TypewriterText 
                texts={heroSlides.map(s => s.description)}
                className="text-primary-foreground/85 text-lg md:text-xl mb-4 leading-relaxed block h-[80px] md:h-[100px] flex items-start"
                typingSpeed={30}
                deleteSpeed={12}
                pauseSpeed={1200}
              />
              <div className="flex flex-wrap gap-4 pt-4 mt-auto absolute bottom-0 left-0 pb-8">
                <Link
                  to="/profil/tentang"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:brightness-110 transition-all"
                >
                  Tentang Kami <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/kontak"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-all"
                >
                  Hubungi Kami
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/25 transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/25 transition-all duration-300 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                i === currentSlide
                  ? "w-8 bg-secondary"
                  : "w-2.5 bg-primary-foreground/40 hover:bg-primary-foreground/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-primary overflow-hidden py-3">
        <div className="marquee-track">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="marquee-content text-primary-foreground font-semibold text-sm md:text-base tracking-wide uppercase">
              🎓 Selamat Datang di Website SMA Negeri 5 Kota Tual &nbsp;•&nbsp; Mewujudkan Generasi Unggul &nbsp;•&nbsp; Beriman, Berilmu, Berkarakter &nbsp;•&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Principal Profile */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/50">
        <div className="container-custom">
          <SectionWrapper title="Profil Kepala Sekolah" subtitle="Pemimpin visioner yang menginspirasi masa depan pendidikan">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                className="relative mx-auto md:mx-0"
                initial={{ opacity: 0, scale: 0.8, rotateY: 10 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                whileHover={{ scale: 1.05, rotateY: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl -z-10" />
                <img 
                  src={principalProfile.image} 
                  alt={principalProfile.name}
                  className="w-full max-w-md h-96 object-cover rounded-3xl shadow-2xl border-4 border-background hover:shadow-primary/25 transition-shadow duration-500 relative z-10" 
                />
              </motion.div>
              <div className="space-y-6 md:pl-8">
                <div>
                  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-tight mb-4">
                    {principalProfile.name}
                  </h2>
                  <p className="text-xl text-muted-foreground font-semibold tracking-wide uppercase border-l-4 border-primary pl-4">
                    {principalProfile.education}
                  </p>
                </div>
                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-display italic font-light text-foreground/80 leading-relaxed border-l-4 border-primary pl-6 py-4 bg-muted/50 rounded-2xl">
                  "{principalProfile.motto}"
                </blockquote>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {principalProfile.bio}
                </p>
                <Link
                  to="/profil/kepala-sekolah"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-2xl hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 shadow-lg hover:shadow-primary/25 hover:-translate-y-1 group"
                >
                  Baca Profil Lengkap
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Latest News */}
      <SectionWrapper 
        title="Berita Terbaru"
        subtitle="Informasi dan kegiatan terkini dari SMA Negeri 5 Kota Tual"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.slice(0, 3).map((news, i) => (
            <NewsCard key={news.id} news={news} index={i} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/berita"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all"
          >
            Lihat Semua Berita <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </SectionWrapper>

      {/* About Preview */}
      <SectionWrapper className="gradient-section" title="Tentang Sekolah" subtitle="Mengenal lebih dekat SMA Negeri 5 Kota Tual">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={heroImage1}
              alt="Gedung SMA Negeri 5 Kota Tual"
              loading="lazy"
              className="rounded-xl shadow-lg w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-4">
              SMA Negeri 5 Kota Tual merupakan salah satu sekolah menengah atas unggulan yang berkomitmen menciptakan lingkungan pendidikan yang kondusif, inovatif, dan berdaya saing tinggi.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Dengan didukung oleh tenaga pendidik yang profesional dan fasilitas modern, kami terus berupaya menghasilkan lulusan yang berkualitas dan siap menghadapi tantangan masa depan.
            </p>
            <Link
              to="/profil/tentang"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Selengkapnya <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Facilities Preview */}
      <SectionWrapper title="Fasilitas Unggulan" subtitle="Sarana dan prasarana modern untuk menunjang kegiatan belajar mengajar">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {facilitiesData.slice(0, 3).map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card-elevated overflow-hidden group"
            >
              <div className="aspect-video overflow-hidden">
                <img src={f.image} alt={f.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-foreground mb-1">{f.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </MainLayout>
  );
};

export default Home;
