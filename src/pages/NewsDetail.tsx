import MainLayout from "@/layouts/MainLayout";
import Breadcrumb from "@/components/Breadcrumb";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft, Share2, Clock, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { newsData } from "@/data/school-data";
import { NewsItem } from "@/types";
import { useEffect, useState } from "react";

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [news, setNews] = useState<NewsItem | null>(null);

  useEffect(() => {
    const foundNews = newsData.find((n) => n.id === id);
    setNews(foundNews || null);
  }, [id]);

  if (!news) {
    return (
      <MainLayout>
        <div className="pt-20" />
        <Breadcrumb items={[{ label: "Berita" }]} />
        <div className="min-h-screen flex items-center justify-center">
          <Card className="w-full max-w-md">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Berita Tidak Ditemukan</h2>
              <Link to="/berita" className="btn-primary">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Berita
              </Link>
            </CardContent>
          </Card>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="pt-20" />
      <Breadcrumb items={[{ label: "Berita", href: "/berita" }, { label: news.title, current: true }]} />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-12 max-w-4xl"
      >
        {/* Hero Image */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-8 aspect-[16/9] md:aspect-[16/10]">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <Badge className="absolute top-6 left-6">{news.category}</Badge>
        </div>

        {/* Article Header */}
        <Card className="card-elevated mb-8">
          <CardHeader className="pb-4">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(news.date).toLocaleDateString("id-ID", { 
                  day: "numeric", 
                  month: "long", 
                  year: "numeric" 
                })}
              </div>
              <div className="w-px h-4 bg-muted mx-2" />
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {news.author}
              </div>
              <div className="w-px h-4 bg-muted mx-2" />
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                5 menit baca
              </div>
            </div>
            <CardTitle className="text-3xl md:text-4xl font-display font-bold leading-tight">
              {news.title}
            </CardTitle>
          </CardHeader>
        </Card>

        {/* Content */}
        <Card className="card-elevated">
          <CardContent className="pt-6 prose prose-headings:font-display prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-p:leading-relaxed max-w-none">
            <div dangerouslySetInnerHTML={{ __html: news.content }} />
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <Link
            to="/berita"
            className="btn-secondary flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Berita
          </Link>
          <button className="btn-outline flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            Bagikan
          </button>
        </div>
      </motion.div>
    </MainLayout>
  );
};

export default NewsDetail;

