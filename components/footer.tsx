import Link from "next/link";

const footerLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#tentang", label: "Tentang Kami" },
  { href: "#produk", label: "Produk" },
  { href: "#kontak", label: "Kontak" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-bold text-sm">UD</span>
              </div>
              <span className="font-semibold">UD Robbi Shima Sutra</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Supplier batu kapur terpercaya untuk kebutuhan industri konstruksi,
              semen, dan pertanian di Indonesia.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Kesamben Barat</li>
              <li>Kesamben,  Kec. Plumpang, Kabupaten Tuban, Jawa Timur 62382</li>
              <li>-</li>
              <li>-</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/70">
            &copy; {new Date().getFullYear()} UD Robbi Shima Sutra. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
