import type { Metadata } from 'next'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { IMAGES } from '@/lib/images'

const WorldMap = dynamic(() => import('@/components/WorldMap'), { ssr: false })
const KitSignupForm = dynamic(() => import('@/components/KitSignupForm'), { ssr: false })

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "We didn't quit our jobs and figure it out. We just decided that travel didn't have to wait until retirement. Here's who we are.",
}

const PILLARS = [
  {
    title: 'No Quit-Your-Job Moment',
    body: "We didn't need a dramatic origin story. We just started going, and then kept going. No leap of faith, no tearful airport goodbye video. Just two people deciding to prioritize travel and then actually doing it.",
  },
  {
    title: 'Real Logistics, Real Life',
    body: "Rachel works. Christian researches. We figure it out as we go and tell you exactly how. Visa requirements, time zones, internet speeds, what actually fits in a carry-on — we talk about all of it.",
  },
  {
    title: "You're Invited",
    body: "We're not watching from the outside anymore. Neither should you be. Whether you follow along, join us on a group trip, or just use our guides to plan your own thing — you're part of this.",
  },
]


export default function AboutPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[55vh] min-h-[400px] pt-16">
        <Image
          src={IMAGES.hero.about}
          alt="We're Rachel & Christian — Santorini"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </section>

      {/* ── GOLD RULE ────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <hr className="gold-rule my-0" />
      </div>

      {/* ── MAIN STORY ───────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Portrait photo */}
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 overflow-hidden">
            <Image
              src={IMAGES.about.portrait}
              alt="Christian and Rachel"
              fill
              className="object-cover"
              style={{ objectPosition: 'center top' }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Story copy — verbatim */}
          <div className="flex flex-col justify-center">
            <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-6">
              Our Story
            </p>
            <div className="font-jost font-light text-[1.05rem] text-charcoal leading-[1.85] space-y-5">
              <p>Hey, we&apos;re Christian and Rachel.</p>
              <p>
                We chose a different life. Not the dramatic quit-your-job-and-disappear kind — just a quiet decision to stop waiting and start living differently. We became digital nomads, embraced slow travel, and figured out what that actually looks like when you&apos;re two real people in your 30s.
              </p>
              <p>
                Slow travel means we stay longer, go deeper, and actually get to know the places we visit instead of rushing through a checklist. It means working remotely from Kyoto one month and Chiang Mai the next, and building a life around going without blowing up everything we worked for.
              </p>
              <p>
                That&apos;s what this channel is about. Not the highlight reel. Not the hustle. Just what it actually looks like when two people decide to live differently — and keep going.
              </p>
              <p>
                If you&apos;ve been watching other travel creators and thinking &ldquo;that&apos;s not really my life though&rdquo; — you might be in the right place.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="https://www.youtube.com/@LifewithRachelandChristian"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-black text-white font-jost text-[11px] font-medium tracking-[0.18em] uppercase px-6 py-3.5 hover:bg-gold transition-colors duration-200"
              >
                Watch Our Videos →
              </a>
              <a
                href="https://www.instagram.com/rachelthomaslife"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-brand-black text-brand-black font-jost text-[11px] font-medium tracking-[0.18em] uppercase px-6 py-3.5 hover:bg-brand-black hover:text-white transition-colors duration-200"
              >
                Follow on Instagram →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE PILLARS ────────────────────────────────────────────────── */}
      <section className="bg-beige">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
          <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-3 text-center">
            What This Is About
          </p>
          <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-brand-black text-center mb-12 tracking-tight">
            How We Think About Travel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white border border-divider p-8 card-hover"
              >
                <hr className="gold-rule mb-6" />
                <h3 className="font-playfair font-bold text-xl text-brand-black mb-4 leading-tight">
                  {pillar.title}
                </h3>
                <p className="font-jost font-light text-sm text-muted leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHERE WE'VE BEEN ─────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
        <div className="mb-10">
          <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-3">
            The Stamp Collection
          </p>
          <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-brand-black tracking-tight">
            Where We&apos;ve Been
          </h2>
        </div>

        {/* ── Stats strip ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-divider border border-divider mb-12">
          {[
            { number: '33', label: 'Countries' },
            { number: '6',  label: 'Continents' },
            { number: '18+', label: 'Months Abroad' },
            { number: '∞',  label: 'More to Go' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white px-6 py-8 text-center">
              <div className="font-playfair font-black text-4xl text-gold mb-1 leading-none">
                {stat.number}
              </div>
              <div className="font-jost text-[10px] font-medium tracking-[0.18em] uppercase text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── World map ── */}
        <div className="border border-divider bg-beige p-4 lg:p-8">
          <WorldMap />
        </div>
      </section>

      {/* ── EMAIL SIGNUP ─────────────────────────────────────────────────── */}
      <section className="bg-brand-black">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div>
              <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-4">
                Free Guide
              </p>
              <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-white leading-tight tracking-tight mb-4">
                Get our Da Nang Quick Start Guide — on us.
              </h2>
              <p className="font-jost font-light text-base text-white/65 leading-relaxed">
                Join the list and we&apos;ll send our Digital Nomad Quick Start Guide free — 21 pages of honest, practical advice on remote work, real budgets, and the logistics nobody talks about. Plus dispatches from wherever we are in the world.
              </p>
            </div>
            <div>
              <KitSignupForm
                buttonLabel="Send Me the Guide"
                successTitle="Check your inbox."
                successBody="Your Digital Nomad Quick Start Guide is on its way. Welcome to the list."
                variant="dark"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
