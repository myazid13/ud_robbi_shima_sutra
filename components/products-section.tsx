import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const products = [
  {
    title: "Batu Kapur Industri",
    description:
      "Batu kapur berkualitas tinggi untuk kebutuhan industri semen, kertas, dan kimia. Tersedia dalam berbagai ukuran sesuai spesifikasi.",
    image: "/images/limestone-product.jpg",
    specs: ["CaCO3 > 95%", "Ukuran 5-50mm", "Moisture < 2%"],
  },
  {
    title: "Batu Kapur Konstruksi",
    description:
      "Batu kapur untuk kebutuhan konstruksi, fondasi bangunan, dan pengurukan. Material yang kuat dan tahan lama.",
    image: "/images/limestone-mining.jpg",
    specs: ["Kepadatan tinggi", "Ukuran bervariasi", "Cocok untuk fondasi"],
  },
  {
    title: "Batu Kapur Pertanian",
    description:
      "Kapur pertanian (dolomit) untuk menetralkan pH tanah dan meningkatkan kesuburan lahan pertanian.",
    image: "/images/limestone-product.jpg",
    specs: ["pH balancer", "Kaya mineral", "Ramah lingkungan"],
  },
];

export function ProductsSection() {
  return (
    <section id="produk" className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-accent mb-2">
            Produk Kami
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Berbagai Pilihan Batu Kapur Berkualitas
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Kami menyediakan berbagai jenis batu kapur untuk memenuhi kebutuhan
            industri Anda dengan kualitas terbaik.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.title}
              className="overflow-hidden bg-card border-border hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-foreground">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.specs.map((spec) => (
                    <span
                      key={spec}
                      className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
