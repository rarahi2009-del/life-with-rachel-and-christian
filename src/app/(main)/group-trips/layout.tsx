import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Group Travel Trips 2026 | Thailand & More | Life With Rachel and Christian',
  description:
    'Join Rachel and Christian on a small-group trip to Thailand in November 2026 — Bangkok, Chiang Mai, floating markets, and the best food you\'ll ever eat. 8–22 travelers. They\'re there every day.',
}

export default function GroupTripsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
