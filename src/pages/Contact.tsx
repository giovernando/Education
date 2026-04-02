import MainLayout from "@/layouts/MainLayout";
import Breadcrumb from "@/components/Breadcrumb";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Pesan Anda telah terkirim! (Demo)");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <MainLayout>
      <div className="pt-20" />
      <Breadcrumb items={[{ label: "Kontak" }]} />
      <SectionWrapper title="Hubungi Kami" subtitle="Silakan hubungi kami untuk informasi lebih lanjut">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card-elevated p-6 space-y-5">
              {[
                { icon: MapPin, label: "Alamat", value: "Jl. Pendidikan No. 5, Kota Tual, Maluku" },
                { icon: Phone, label: "Telepon", value: "(0916) 123-456" },
                { icon: Mail, label: "Email", value: "info@sman5tual.sch.id" },
                { icon: Clock, label: "Jam Operasional", value: "Senin - Jumat: 07:00 - 15:00" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.label}</p>
                    <p className="text-muted-foreground text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="card-elevated overflow-hidden aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.123456789!2d132.7503!3d-5.6389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzgnMjAuMCJTIDEzMsKwNDUnMDEuMSJF!5e0!3m2!1sid!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Lokasi SMA Negeri 5 Kota Tual"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="card-elevated p-6 space-y-5">
              <h3 className="font-display text-xl font-bold text-foreground">Kirim Pesan</h3>
              {[
                { name: "name" as const, label: "Nama Lengkap", type: "text" },
                { name: "email" as const, label: "Email", type: "email" },
                { name: "subject" as const, label: "Subjek", type: "text" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-foreground mb-1.5">{field.label}</label>
                  <input
                    type={field.type}
                    required
                    value={form[field.name]}
                    onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Pesan</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all"
              >
                <Send className="w-4 h-4" />
                Kirim Pesan
              </button>
            </form>
          </motion.div>
        </div>
      </SectionWrapper>
    </MainLayout>
  );
};

export default Contact;
