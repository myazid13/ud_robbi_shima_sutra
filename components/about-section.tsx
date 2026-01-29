import { Award, Truck, Users, Clock } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "20+",
    label: "Tahun Pengalaman",
  },
  {
    icon: Truck,
    value: "500+",
    label: "Pengiriman/Bulan",
  },
  {
    icon: Users,
    value: "200+",
    label: "Klien Puas",
  },
  {
    icon: Award,
    value: "100%",
    label: "Kualitas Terjamin",
  },
];

export function AboutSection() {
  return (
    <section id="tentang" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-accent mb-2">
            Tentang Kami
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Komitmen Kami untuk Kualitas
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              <strong className="text-foreground">UD Robbi Shima Sutra</strong> adalah
              perusahaan yang bergerak di bidang penambangan dan distribusi batu
              kapur berkualitas tinggi. Didirikan pada tahun 2004, kami telah
              melayani berbagai industri di seluruh Indonesia.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Dengan lokasi tambang yang strategis dan armada pengiriman yang
              handal, kami mampu memenuhi kebutuhan batu kapur dalam jumlah besar
              dengan waktu pengiriman yang tepat dan harga yang kompetitif.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Kami berkomitmen untuk menjaga standar kualitas tertinggi dalam
              setiap produk yang kami hasilkan, didukung oleh tim profesional
              yang berpengalaman di bidangnya.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card border border-border rounded-lg p-6 text-center"
              >
                <stat.icon className="h-8 w-8 text-accent mx-auto mb-4" />
                <p className="text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
