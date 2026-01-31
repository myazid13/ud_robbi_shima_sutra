import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

// URL website (Ganti jika sudah punya domain sendiri)
const DOMAIN_URL = 'https://udrobbishima.netlify.app';

export const metadata: Metadata = {
  title: 'UD Robbi Shima Sutra - Jual Batu Kapur Tuban & Dolomit',
  description: 'Supplier batu kapur (limestone) berkualitas di Tuban, Jawa Timur. Sedia batu kapur mentah, dolomit pertanian, dan batu urug. Siap kirim seluruh Indonesia.',
  generator: 'v0.app',
  
  // 1. KATA KUNCI SEO
  keywords: [
    'Jual Batu Kapur Tuban',
    'Supplier Limestone Jawa Timur',
    'Harga Batu Kapur',
    'Dolomit Pertanian Tuban',
    'Batu Urug Tuban',
    'UD Robbi Shima Sutra'
  ],

  // 2. KODE VERIFIKASI GOOGLE (YANG BARU)
  verification: {
    google: 'GsjLlMTsa--TzIu_i9bzQpY8GPUVqVxrdEkqzPsSDQ8', 
  },

  // 3. TAMPILAN SHARE WA/FB
  openGraph: {
    title: 'UD Robbi Shima Sutra - Pusat Batu Kapur Tuban',
    description: 'Solusi kebutuhan batu kapur industri dan pertanian. Kualitas terjamin langsung dari tambang.',
    url: DOMAIN_URL,
    siteName: 'UD Robbi Shima Sutra',
    locale: 'id_ID',
    type: 'website',
  },

  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

// 4. DATA BISNIS (JSON-LD)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': 'UD Robbi Shima Sutra',
  'image': `${DOMAIN_URL}/icon.svg`,
  'description': 'Supplier Batu Kapur dan Dolomit Terpercaya di Tuban.',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Kesamben Barat, Kesamben',
    'addressLocality': 'Kec. Plumpang',
    'addressRegion': 'Kabupaten Tuban',
    'postalCode': '62382',
    'addressCountry': 'ID'
  },
  'url': DOMAIN_URL,
  'openingHoursSpecification': {
    '@type': 'OpeningHoursSpecification',
    'dayOfWeek': ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    'opens': '08:00',
    'closes': '17:00'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`font-sans antialiased`}>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}