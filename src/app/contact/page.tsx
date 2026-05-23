import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Find us on YouTube, Instagram, TikTok, or Patreon.',
}

export default function ContactPage() {
  return (
    <>
      {/* ── HEADER ───────────────────────────────────────────────────────── */}
      <section className="bg-navy pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h1 className="font-playfair font-black text-4xl sm:text-5xl text-white leading-tight tracking-tight mb-4">
            Find Us
          </h1>
          <p className="font-jost font-light text-base text-white/60 max-w-md leading-relaxed">
            The best way to reach us is through our socials. We read everything.
          </p>
        </div>
      </section>

      {/* ── SOCIAL HANDLES ───────────────────────────────────────────────── */}
      <section className="max-w-2xl mx-auto px-5 lg:px-8 py-14 lg:py-20">
        <div className="space-y-4">

          <a
            href="https://www.youtube.com/@LifewithRachelandChristian"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-divider p-5 hover:border-gold transition-colors duration-200 group"
          >
            <div className="font-jost text-[10px] font-medium tracking-[0.18em] uppercase text-muted mb-1 group-hover:text-gold transition-colors">
              YouTube
            </div>
            <div className="font-playfair font-bold text-base text-brand-black">
              Life With Rachel and Christian
            </div>
          </a>

          <a
            href="https://www.instagram.com/rachelthomaslife"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-divider p-5 hover:border-gold transition-colors duration-200 group"
          >
            <div className="font-jost text-[10px] font-medium tracking-[0.18em] uppercase text-muted mb-1 group-hover:text-gold transition-colors">
              Instagram
            </div>
            <div className="font-playfair font-bold text-base text-brand-black">
              @RachelThomasLife
            </div>
          </a>

          <a
            href="https://www.tiktok.com/@rachelthomaslife"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-divider p-5 hover:border-gold transition-colors duration-200 group"
          >
            <div className="font-jost text-[10px] font-medium tracking-[0.18em] uppercase text-muted mb-1 group-hover:text-gold transition-colors">
              TikTok
            </div>
            <div className="font-playfair font-bold text-base text-brand-black">
              @RachelThomasLife
            </div>
          </a>

          <a
            href="https://www.patreon.com/c/LifewithRachelandChristian"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-divider p-5 hover:border-gold transition-colors duration-200 group"
          >
            <div className="font-jost text-[10px] font-medium tracking-[0.18em] uppercase text-muted mb-1 group-hover:text-gold transition-colors">
              Patreon
            </div>
            <div className="font-playfair font-bold text-base text-brand-black">
              Life With Rachel and Christian
            </div>
          </a>

        </div>
      </section>
    </>
  )
}
