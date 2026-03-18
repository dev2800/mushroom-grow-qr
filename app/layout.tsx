import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mushroom Grow Guide | Scan & Learn',
  description: 'Expert video guides for growing mushrooms at home. Scan your grow bag QR code for instant tutorials, troubleshooting, and pro tips.',
  keywords: 'mushroom growing, grow kit, oyster mushroom, lion\'s mane, shiitake, cultivation guide, mycology',
  openGraph: {
    title: 'Mushroom Grow Guide | Scan & Learn',
    description: 'Expert video guides for every mushroom variety. Scan your grow bag and start growing today.',
    type: 'website',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mushroom Grow Guide',
    description: 'Expert video guides for growing mushrooms at home',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
