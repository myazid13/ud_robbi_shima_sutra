import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: MapPin,
    title: "Alamat",
    content: " Kesamben Barat, Kesamben, Kec. Plumpang, Kabupaten Tuban, Jawa Timur 62382",
    // Menambahkan link di sini
    href: "https://www.google.com/maps/place/UD+Robbi+Shima+Sutra/data=!4m2!3m1!1s0x0:0xd9e3e61e73217e2f?sa=X&ved=1t:2428&ictx=111", 
  },
  {
    icon: Phone,
    title: "Telepon",
    content: "-",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@udrobbishimasutra.co.id",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    content: "Senin - Sabtu: 08:00 - 17:00",
  },
];

export function ContactSection() {
  return (
    <section id="kontak" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-accent mb-2">
            Hubungi Kami
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Siap Membantu Kebutuhan Anda
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Hubungi kami untuk konsultasi atau pemesanan batu kapur. Tim kami
            siap membantu Anda.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Kirim Pesan
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nama Lengkap
                  </label>
                  <Input id="name" placeholder="Nama Anda" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Perusahaan
                  </label>
                  <Input id="company" placeholder="Nama Perusahaan" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="email@perusahaan.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telepon
                  </label>
                  <Input id="phone" placeholder="+62 xxx xxxx xxxx" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Pesan
                </label>
                <Textarea
                  id="message"
                  placeholder="Jelaskan kebutuhan batu kapur Anda..."
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full">
                Kirim Pesan
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info) => {
              // Kita simpan konten card dalam variabel agar tidak mengulang kode
              const CardContent = (
                <>
                  <div className="flex-shrink-0 h-12 w-12 bg-primary rounded-lg flex items-center justify-center transition-colors group-hover:bg-primary/90">
                    <info.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground flex items-center gap-2">
                      {info.title}
                      {/* Tampilkan icon panah kecil jika ini adalah link */}
                      {info.href && (
                        <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                      )}
                    </h4>
                    <p className="text-muted-foreground">{info.content}</p>
                  </div>
                </>
              );

              // LOGIKA UTAMA:
              // Jika properti 'href' ada (seperti pada Alamat), render sebagai <a>
              if (info.href) {
                return (
                  <a
                    key={info.title}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-secondary rounded-lg group hover:bg-secondary/80 transition-all cursor-pointer ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    {CardContent}
                  </a>
                );
              }

              // Jika tidak ada 'href', render sebagai <div> biasa
              return (
                <div
                  key={info.title}
                  className="flex items-start gap-4 p-4 bg-secondary rounded-lg"
                >
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}