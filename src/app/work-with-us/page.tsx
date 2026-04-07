import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { IMAGES } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Work With Us',
  description:
    "We make content for people who actually travel — or really want to. If your brand fits that world, we'd love to talk.",
}

const OFFERINGS = [
  {
    title: 'Sponsored Content',
    body: "Integrated features across YouTube, Instagram, and TikTok. We write our own scripts — no talking-head reads, no off-brand copy. The integration works because it feels like us, not like an ad break.",
  },
  {
    title: 'Destination Partnerships',
    body: "Tourism boards and hotels. We show places the way our audience actually wants to experience them — real context, honest impressions, not a press trip highlight reel.",
  },
  {
    title: 'Product Features',
    body: "Gear reviews and Amazon storefront. We only feature things we've actually traveled with. If we wouldn't take it through an airport, we won't tell our audience to buy it.",
  },
]

const PLATFORMS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6a3 3 0 0 0-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z" />
      </svg>
    ),
    platform: 'YouTube',
    handle: 'Life With Rachel and Christian',
    desc: 'Long-form travel content for people who want the real version of a destination.',
    href: 'https://www.youtube.com/@LifewithRachelandChristian',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
        <path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.2 4.8 1.7 5 5 .1 1.3.1 1.6.1 4.8 0 3.2 0 3.6-.1 4.8-.2 3.3-1.7 4.8-5 5-1.3.1-1.6.1-4.9.1-3.2 0-3.6 0-4.8-.1-3.3-.2-4.8-1.7-5-5C2.1 15.6 2 15.2 2 12c0-3.2 0-3.6.1-4.8.2-3.3 1.7-4.8 5-5C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1 0 8.3 0 8.7 0 12c0 3.3 0 3.7.1 4.9.2 4.4 2.6 6.8 7 7C8.3 24 8.7 24 12 24c3.3 0 3.7 0 4.9-.1 4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9 0-3.3 0-3.7-.1-4.9C23.7 2.7 21.3.3 16.9.1 15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
      </svg>
    ),
    platform: 'Instagram',
    handle: '@RachelThomasLife',
    desc: 'Destination content and real-time travel stories for an engaged travel-curious audience.',
    href: 'https://www.instagram.com/rachelthomaslife',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
        <path d="M19.6 3.3A4.5 4.5 0 0 1 15.2 0h-3.3v16.4a2.7 2.7 0 0 1-2.7 2.3 2.7 2.7 0 0 1-2.7-2.7 2.7 2.7 0 0 1 2.7-2.7c.3 0 .5 0 .8.1V9.9a6 6 0 0 0-.8-.1A6.1 6.1 0 0 0 3.1 16a6.1 6.1 0 0 0 6.1 6 6.1 6.1 0 0 0 6.1-6.1V8.2a7.8 7.8 0 0 0 4.6 1.5V6.3a4.5 4.5 0 0 1-4.5-3z" />
      </svg>
    ),
    platform: 'TikTok',
    handle: '@RachelThomasLife',
    desc: 'Short-form destination and nomad life content for a younger, highly engaged audience.',
    href: 'https://www.tiktok.com/@rachelthomaslife',
  },
]

export default function WorkWithUsPage() {
  return (
    <>
      {/* ── HEADER ───────────────────────────────────────────────────────── */}
      <section className="bg-brand-black pt-32 pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h1 className="font-playfair font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-6 max-w-2xl">
            Let&apos;s Work Together
          </h1>
          <p className="font-jost font-light text-base lg:text-lg text-white/65 max-w-xl leading-relaxed">
            We make content for people who actually travel — or really want to. If your brand fits that world, we&apos;d love to talk.
          </p>
        </div>
      </section>

      {/* ── TWO-COL INTRO ────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-5">
              Our Audience
            </p>
            <p className="font-jost font-light text-[1.05rem] text-charcoal leading-[1.85] mb-5">
              Our audience is adults who travel intentionally. They research before they go, they invest in gear that works, and they trust recommendations from people who actually use what they promote.
            </p>
            <p className="font-jost font-light text-[1.05rem] text-charcoal leading-[1.85] mb-5">
              They&apos;re not looking for a fantasy — they&apos;re looking for honest information from people who&apos;ve been there and know what they&apos;re talking about.
            </p>
            <p className="font-jost font-light text-[1.05rem] text-charcoal leading-[1.85]">
              We only work with brands we&apos;d genuinely use on a trip. That&apos;s not a policy — it&apos;s just how we operate.
            </p>
          </div>
          <div className="relative aspect-[4/5] w-full max-w-sm mx-auto lg:mx-0 overflow-hidden">
            <Image
              src={IMAGES.workWithUs.creator}
              alt="Rachel filming content"
              fill
              className="object-cover"
              style={{ objectPosition: 'center top' }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── WHAT WE OFFER ────────────────────────────────────────────────── */}
      <section className="bg-beige">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
          <div className="text-center mb-12">
            <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-3">
              Partnership Types
            </p>
            <h2 className="font-playfair font-bold text-3xl text-brand-black tracking-tight">
              What We Offer
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OFFERINGS.map((offering) => (
              <div key={offering.title} className="bg-white border border-divider p-8 card-hover">
                <hr className="gold-rule mb-6" />
                <h3 className="font-playfair font-bold text-xl text-brand-black mb-4 leading-tight">
                  {offering.title}
                </h3>
                <p className="font-jost font-light text-sm text-muted leading-relaxed">
                  {offering.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORMS ────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
        <div className="text-center mb-12">
          <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-3">
            Where We Are
          </p>
          <h2 className="font-playfair font-bold text-3xl text-brand-black tracking-tight">
            Our Platforms
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLATFORMS.map((platform) => (
            <a
              key={platform.platform}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-beige border border-divider p-8 card-hover block group"
            >
              <div className="mb-4">{platform.icon}</div>
              <div className="font-jost text-[10px] font-medium tracking-[0.15em] uppercase text-muted mb-1">
                {platform.platform}
              </div>
              <div className="font-playfair font-bold text-lg text-brand-black mb-3 leading-tight">
                {platform.handle}
              </div>
              <p className="font-jost text-sm font-light text-muted leading-relaxed">
                {platform.desc}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* ── CONTACT CTA ──────────────────────────────────────────────────── */}
      <section className="bg-brand-black">
        <div className="max-w-2xl mx-auto px-5 lg:px-8 py-20 text-center">
          <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-5">
            Let&apos;s Talk
          </p>
          <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-white mb-5 tracking-tight">
            Get in touch.
          </h2>
          <p className="font-jost font-light text-base text-white/60 mb-10 leading-relaxed">
            We respond within 3 business days. Brand inquiries may take a bit longer depending on where we are in the world.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold text-white font-jost text-[11px] font-medium tracking-[0.18em] uppercase px-8 py-4 hover:bg-gold-light transition-colors"
          >
            Send a Message
          </Link>
        </div>
      </section>
    </>
  )
}
