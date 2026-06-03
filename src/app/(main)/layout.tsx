import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-off-white font-jost text-brand-black antialiased">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
