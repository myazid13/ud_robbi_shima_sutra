import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/limestone-quarry.jpg"
          alt="Tambang Batu Kapur"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-background/80 mb-4">
            Supplier Batu Kapur Terpercaya
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-background leading-tight text-balance">
            Batu Kapur Berkualitas untuk Kebutuhan Industri Anda
          </h1>
          <p className="mt-6 text-lg text-background/90 leading-relaxed max-w-xl">
            Kami menyediakan batu kapur berkualitas tinggi untuk berbagai
            kebutuhan industri konstruksi, semen, dan pertanian dengan
            pengalaman lebih dari 20 tahun.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="bg-background text-foreground hover:bg-background/90">
              <Link href="#produk">Lihat Produk</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-background text-background hover:bg-background/10 bg-transparent"
            >
              <Link href="#tentang">Pelajari Lebih Lanjut</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
