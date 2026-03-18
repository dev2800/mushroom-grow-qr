import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mushroom Grow Guide | Scan & Learn',
  description: 'Scan your grow bag QR code for instant video instructions, troubleshooting guides, and expert tips for growing mushrooms at home.',
  keywords: 'mushroom growing, grow kit, oyster mushroom, lion\'s mane, shiitake, cultivation guide',
  openGraph: {
    title: 'Mushroom Grow Guide | Scan & Learn',
    description: 'Expert video guides for every mushroom variety. Scan your grow bag and start growing today.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
