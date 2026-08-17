import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const siteUrl = 'https://amazingabodes.example.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Amazing Abodes | Construction, Cement, Paints & Materials',
    template: '%s | Amazing Abodes',
  },
  description:
    'Amazing Abodes is a full-service construction company supplying premium cement, paints and building materials, and delivering residential and commercial projects with honest work and on-time delivery.',
  keywords: [
    'construction company',
    'cement supplier',
    'paints',
    'building materials',
    'contractor',
    'residential construction',
    'commercial construction',
    'renovation',
  ],
  authors: [{ name: 'Amazing Abodes' }],
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Amazing Abodes | Construction, Cement, Paints & Materials',
    description:
      'From foundation to finish — Amazing Abodes builds homes and commercial spaces you will be proud to call your own.',
    siteName: 'Amazing Abodes',
    images: [{ url: '/images/hero-site.png', width: 1200, height: 630, alt: 'Amazing Abodes construction site' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazing Abodes | Construction, Cement, Paints & Materials',
    description:
      'Full-service construction, premium cement, paints and building materials — honest work, on-time delivery.',
    images: ['/images/hero-site.png'],
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} bg-background`}>
      <body className="font-sans antialiased">
        <div className="flex min-h-screen flex-col">
              <Navbar />
        {children}
        <Footer />
            </div>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
