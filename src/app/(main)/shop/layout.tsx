import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Travel Gear & Packing Favorites | Shop | Life With Rachel and Christian',
  description:
    'Everything we actually travel with — tested across multiple continents. Bags, cameras, tech, and shoes that earned their spot.',
}

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
