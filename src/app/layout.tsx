import type { Metadata } from 'next'
import { Playfair_Display, Jost } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Life With Rachel and Christian',
    template: '%s | Life With Rachel and Christian',
  },
  description:
    "Real people. Real travel. No retirement required. We're two people in our 30s who figured out how to keep traveling without blowing up our lives — and we're bringing you along.",
  metadataBase: new URL('https://lifewithrachelandchristian.com'),
  openGraph: {
    type: 'website',
    siteName: 'Life With Rachel and Christian',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jost.variable}`}>
      <body className="bg-off-white font-jost text-brand-black antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
