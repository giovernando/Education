import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
const AboutSchool = lazy(() => import("./pages/profile/AboutSchool"));
const VisionMission = lazy(() => import("./pages/profile/VisionMission"));
const PrincipalProfile = lazy(() => import("./pages/profile/PrincipalProfile"));
const OrgStructure = lazy(() => import("./pages/profile/OrgStructure"));
const News = lazy(() => import("./pages/News"));
  const NewsDetail = lazy(() => import("./pages/NewsDetail"));
const Gallery = lazy(() => import("./pages/Gallery"));
const TeachersStaff = lazy(() => import("./pages/TeachersStaff"));
const PrestasiSiswa = lazy(() => import("./pages/kesiswaan/PrestasiSiswa"));
const OrganisasiSiswa = lazy(() => import("./pages/kesiswaan/OrganisasiSiswa"));
const Ekstrakurikuler = lazy(() => import("./pages/kesiswaan/Ekstrakurikuler")); 
const Facilities = lazy(() => import("./pages/Facilities"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<Loading />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/profil/tentang" element={<AboutSchool />} />
          <Route path="/profil/visi-misi" element={<VisionMission />} />
          <Route path="/profil/kepala-sekolah" element={<PrincipalProfile />} />
          <Route path="/profil/struktur-organisasi" element={<OrgStructure />} />
<Route path="/berita" element={<News />} />
          <Route path="/berita/:id" element={<NewsDetail />} />
          <Route path="/galeri" element={<Gallery />} />
  <Route path="/guru-staff" element={<TeachersStaff />} />
  <Route path="/kesiswaan/prestasi" element={<PrestasiSiswa />} />
  <Route path="/kesiswaan/organisasi" element={<OrganisasiSiswa />} />
  <Route path="/kesiswaan/ekstrakurikuler" element={<Ekstrakurikuler />} />
  <Route path="/fasilitas" element={<Facilities />} /> 
          <Route path="/kontak" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
