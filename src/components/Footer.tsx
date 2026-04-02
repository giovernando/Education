import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import schoolLogo from "@/assets/school-logo.png";

const Footer = () => {
  return (
    <footer className="gradient-primary text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={schoolLogo} alt="Logo" className="h-12 w-auto brightness-0 invert" />
              <div>
                <h3 className="font-display font-bold text-lg">SMA Negeri 5</h3>
                <p className="text-sm text-primary-foreground/70">Kota Tual</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Mewujudkan generasi yang beriman, berilmu, dan berkarakter menuju Indonesia Emas 2045.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Tautan Cepat</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Tentang Sekolah", path: "/profil/tentang" },
                { label: "Berita Terbaru", path: "/berita" },
                { label: "Galeri", path: "/galeri" },
                { label: "Kontak", path: "/kontak" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                Jl. Pendidikan No. 5, Kota Tual, Maluku
              </li>
              <li className="flex items-center gap-2.5 text-sm text-primary-foreground/80">
                <Phone className="w-4 h-4 flex-shrink-0" />
                (0916) 123-456
              </li>
              <li className="flex items-center gap-2.5 text-sm text-primary-foreground/80">
                <Mail className="w-4 h-4 flex-shrink-0" />
                info@sman5tual.sch.id
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Jam Operasional</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-primary-foreground/80">
                <Clock className="w-4 h-4 flex-shrink-0" />
                Senin - Jumat: 07:00 - 15:00
              </li>
              <li className="flex items-center gap-2.5 text-sm text-primary-foreground/80">
                <Clock className="w-4 h-4 flex-shrink-0" />
                Sabtu: 07:00 - 12:00
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} SMA Negeri 5 Kota Tual. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
