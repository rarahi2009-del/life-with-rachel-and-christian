import type { Metadata } from 'next'
import BrandCard from '@/components/BrandCard'

export const metadata: Metadata = {
  title: 'Brands We Love',
  description:
    'The travel tools, services, and resources we actually use — eSIMs, insurance, tours, luggage storage, and the courses that helped us get here.',
}

// ─── Data ──────────────────────────────────────────────────────────────────

type Course = {
  title: string
  description: string
  href: string
}

const TRAVEL_TOOLS = [
  {
    name: 'Holafly',
    domain: 'holafly.com',
    category: 'eSIM & Connectivity',
    description:
      'International eSIMs that activate before you land. No SIM swap, no hunting for a local carrier — just working data the moment you arrive.',
    code: 'RACHELTHOMAS',
    codeLabel: 'Save on your eSIM',
    href: 'https://holafly.sjv.io/VxQ2ea',
  },
  {
    name: 'SafetyWing',
    domain: 'safetywing.com',
    category: 'Travel Insurance',
    description:
      'Travel health insurance built for long-term travelers and digital nomads. Monthly subscription, cancel anytime, covers you in 180+ countries.',
    href: 'https://safetywing.com/?referenceID=26296972&utm_source=26296972&utm_medium=Ambassador',
  },
  {
    name: 'Viator',
    domain: 'viator.com',
    category: 'Tours & Activities',
    description:
      'Our go-to for booking tours, day trips, and experiences around the world. Huge selection, verified operators, and easy cancellation.',
    href: 'https://www.viator.com/?pid=P00058688&uid=U00580422&mcid=58086&currency=USD',
  },
  {
    name: 'GetYourGuide',
    domain: 'getyourguide.com',
    category: 'Tours & Activities',
    description:
      'Our second favorite for experiences — especially strong in Europe. Skip-the-line tickets, guided tours, and city passes all in one place.',
    href: 'https://gyg.me/ffWGNH5i',
  },
  {
    name: 'Luggage Hero',
    domain: 'luggagehero.com',
    category: 'Luggage Storage',
    description:
      'Store your bags by the hour at verified shops near airports, train stations, and city centers. A game-changer on arrival and departure days.',
    href: 'https://lughero.com/ThomasTravelConcierge',
  },
  {
    name: 'Virgin Voyages',
    domain: 'virginvoyages.com',
    category: 'Cruises',
    description:
      'Adult-only cruising with all-inclusive dining, no nickel-and-diming, and a vibe that actually feels like a vacation. Not your grandparents\' cruise.',
    href: 'https://www.virginvoyages.com/book/voyage-planner/find-a-voyage?agencyId=15975&agentId=195680&bookingChannel=FMLINK&cabins=1&currencyCode=USD&sailors=2&sortType=date',
  },
]

const COURSES: Course[] = [
  {
    title: 'YouTube Growth Course',
    description:
      'The course that helped us understand how to build a YouTube channel from scratch. Practical strategies, no fluff. Worth every dollar.',
    href: 'https://groundedlife.thinkific.com/courses/youtube-after-40?ref=95bc50',
  },
  {
    title: 'Long-Term Travel Course',
    description:
      'Everything you need to plan your first extended trip — visas, budgeting, packing, and the logistics most people figure out the hard way.',
    href: 'https://groundedlife.thinkific.com/courses/retirement-travel-jumpstart?ref=95bc50',
  },
  {
    title: 'Travel + YouTube Bundle',
    description:
      'Both courses together at a discount. If you want to travel long-term AND document it, this is the combination we’d recommend.',
    href: 'https://groundedlife.thinkific.com/bundles/retirement-travel-jumpstart-youtube-after-40?ref=95bc50',
  },
]

// ─── Page ──────────────────────────────────────────────────────────────────

export default function AffiliatesPage() {
  return (
    <>
      {/* ── HEADER ───────────────────────────────────────────────────────── */}
      <section className="bg-brand-black pt-32 pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-4">
            Tried & Trusted
          </p>
          <h1 className="font-playfair font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-6 max-w-2xl">
            Brands We Love
          </h1>
          <p className="font-jost font-light text-base lg:text-lg text-white/65 max-w-xl leading-relaxed">
            Every tool, service, and resource on this page is something we actually use. If we wouldn&apos;t recommend it to a friend, it&apos;s not here.
          </p>
        </div>
      </section>

      {/* ── TRAVEL TOOLS ─────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
        <div className="mb-10">
          <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-3">
            On Every Trip
          </p>
          <h2 className="font-playfair font-bold text-3xl text-brand-black tracking-tight">
            Travel Tools &amp; Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TRAVEL_TOOLS.map((brand) => (
            <BrandCard key={brand.name} brand={brand} />
          ))}
        </div>
      </section>

      {/* ── COURSES ──────────────────────────────────────────────────────── */}
      <section className="bg-beige">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
          <div className="mb-10">
            <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-3">
              Worth the Investment
            </p>
            <h2 className="font-playfair font-bold text-3xl text-brand-black tracking-tight mb-3">
              Courses We Took
            </h2>
            <p className="font-jost font-light text-base text-muted max-w-xl leading-relaxed">
              From Grounded Life Travel — the courses that actually helped us get where we are.
            </p>
          </div>

          {/* Grounded Life brand banner */}
          <div className="bg-white border border-divider p-6 flex items-center gap-5 mb-8">
            <div className="h-14 w-14 bg-beige border border-divider flex items-center justify-center shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://logo.clearbit.com/groundedlifetravel.com"
                alt="Grounded Life Travel"
                className="h-10 w-10 object-contain"
              />
            </div>
            <div>
              <div className="font-jost text-[10px] font-medium tracking-[0.15em] uppercase text-muted mb-1">
                Course Provider
              </div>
              <div className="font-playfair font-bold text-lg text-brand-black leading-tight">
                Grounded Life Travel
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {COURSES.map((course) => (
              <div key={course.title} className="bg-white border border-divider p-6 flex flex-col card-hover">
                <hr className="gold-rule mb-5" />
                <h3 className="font-playfair font-bold text-lg text-brand-black mb-3 leading-tight">
                  {course.title}
                </h3>
                <p className="font-jost text-[13px] font-light text-muted leading-relaxed mb-6 flex-1">
                  {course.description}
                </p>
                <a
                  href={course.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-brand-black text-white font-jost text-[10px] font-medium tracking-[0.18em] uppercase py-3 hover:bg-gold transition-colors duration-200"
                >
                  View Course →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DISCLOSURE ───────────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-5 lg:px-8 py-12 text-center">
        <p className="font-jost text-[11px] font-light text-muted leading-relaxed">
          <span className="font-medium text-brand-black">Affiliate Disclosure:</span> Some links on this page are affiliate links. We may earn a small commission at no extra cost to you. This helps support the channel so we can keep creating. All opinions are our own — we only recommend things we&apos;ve personally used and believe in.
        </p>
      </section>
    </>
  )
}
