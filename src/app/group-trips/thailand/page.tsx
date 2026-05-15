'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IMAGES } from '@/lib/images'

// ─── Data ──────────────────────────────────────────────────────────────────

const INCLUDED = [
  '4-star hotel accommodations + sleeper train',
  'Local guide throughout the entire trip',
  'All city transfers',
  '7 breakfasts, 4 lunches, 6 dinners',
  'All listed activities and tours',
  'Rachel & Christian on every day of the trip',
]

const NOT_INCLUDED = [
  "International flights (we'll tell you exactly what to book)",
  'Meals beyond those listed above',
  'Alcoholic beverages',
  'Visas and travel insurance',
  'Airport transfers (available as add-on)',
  'Personal expenses and souvenirs',
]

const ITINERARY = [
  {
    day: 'Day 1',
    city: 'Bangkok',
    title: 'Arrival & Welcome Dinner',
    body: "Arrive at Suvarnabhumi Airport (BKK), settle in, and meet your travel crew over a welcome dinner in the city. First night, first impressions.",
  },
  {
    day: 'Day 2',
    city: 'Bangkok',
    title: 'Floating Markets & Street Eats',
    body: "Explore the Khlong Lat Mayom and Damnoen Saduak floating markets — vendors on boats, paddle options, the whole thing. End the day with a Bangkok Street Eats EV tuk-tuk tour and a stop at a riverside bar.",
  },
  {
    day: 'Day 3',
    city: 'Bangkok',
    title: 'Rice Farm & Cooking Class',
    body: "Visit the Kok Na Sai Farm for a hands-on cooking class using produce straight from the land. One of those days that feels impossible to replicate at home.",
  },
  {
    day: 'Day 4',
    city: 'Bangkok → Chiang Mai',
    title: 'Ayutthaya Ruins + Overnight Train',
    body: "Tour the Ayutthaya Ruins (UNESCO) and the local food market — try the famous Roti Saimai candy floss. Board an overnight sleeper train north to Chiang Mai. Roughly 3 miles of flat walking today.",
  },
  {
    day: 'Day 5',
    city: 'Chiang Mai',
    title: 'Arrival & Night Market',
    body: "Wake up in Chiang Mai, check in, take some time to breathe. That evening: a Night Market street eats tour through northern Thai cuisine. Optional: 2-hour traditional Thai massage.",
  },
  {
    day: 'Day 6',
    city: 'Chiang Mai',
    title: 'Temples & Lanna Family Experience',
    body: "Ride songthaew vehicles to Huay Kaew Waterfall, Wat Pha Lat, and the hilltop Wat Phra That Doi Suthep. Afternoon: a Lanna family cooking experience inside a 150-year-old teak house. 1–1.5 hours of mostly flat walking.",
  },
  {
    day: 'Day 7',
    city: 'Chiang Mai',
    title: 'Free Day + Farewell Dinner',
    body: "The day is yours. Sleep in, explore on your own, book an optional mountain excursion — whatever you need. Farewell dinner together that evening.",
  },
  {
    day: 'Day 8',
    city: 'Chiang Mai',
    title: 'Final Breakfast & Departure',
    body: "Last breakfast together. Head home — or keep going. Departure from Chiang Mai International Airport (CNX).",
  },
]

const ADD_ONS = [
  { label: 'Private room upgrade', price: '$380' },
  { label: 'Pre-trip hotel night (Nov 5)', price: '$104' },
  { label: 'Post-trip hotel night (Nov 13)', price: '$93' },
  { label: 'Traditional Thai massage (2 hrs)', price: '$86' },
  { label: 'Airport transfers', price: 'Varies' },
  { label: 'Travel insurance', price: 'Varies' },
]

const FAQS = [
  {
    q: 'Will you actually be there the whole time?',
    a: "Yes — always. Rachel and Christian are there from day one to the last breakfast. We're not handing you off to a local guide and dipping out. That's the whole reason this works.",
  },
  {
    q: 'How big is the group?',
    a: "Eight to twenty-two people. It stays small enough that you actually get to know everyone and we can make real-time decisions without herding a crowd.",
  },
  {
    q: 'What does the deposit lock in?',
    a: "Your spot. The $525 deposit holds your place in the group. The remaining balance is due closer to departure — we'll send you a clear payment schedule after you book.",
  },
  {
    q: 'Is this trip good for solo travelers?',
    a: "Yes — a lot of our group is solo travelers. You'll have your own room if you choose, but you'll never actually be alone. This is genuinely one of the better ways to travel solo.",
  },
  {
    q: 'What should I know about flights?',
    a: "Fly into Bangkok (Suvarnabhumi — BKK). Fly home from Chiang Mai (CNX). You do NOT need a return flight from Bangkok — the overnight train takes you north mid-trip. We'll send exact flight guidance after you book.",
  },
  {
    q: 'What if I need to cancel?',
    a: "If you cancel 91+ days before the trip, you'll receive a partial refund plus a future trip credit, minus a $100 processing fee. Inside 90 days, deposits are non-refundable — which is exactly why we strongly recommend travel insurance with cancellation coverage.",
  },
  {
    q: 'Do I need a visa for Thailand?',
    a: "Many nationalities can enter Thailand visa-free for short stays. Check the current requirements for your passport — we'll also send visa guidance in the pre-trip info pack.",
  },
]

// ─── Sub-components ────────────────────────────────────────────────────────

function ItineraryItem({ day, city, title, body }: typeof ITINERARY[0]) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-divider">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between py-5 text-left"
        aria-expanded={open}
      >
        <div className="flex items-start gap-5 pr-6">
          <div className="shrink-0 text-right min-w-[52px]">
            <div className="font-playfair font-black text-base text-gold leading-none">{day}</div>
            <div className="font-jost text-[10px] font-medium tracking-[0.15em] uppercase text-muted mt-1">{city}</div>
          </div>
          <div>
            <div className="font-jost font-medium text-base text-brand-black leading-snug">{title}</div>
          </div>
        </div>
        <span
          className={`shrink-0 mt-0.5 w-6 h-6 flex items-center justify-center border border-divider rounded-full text-muted transition-transform duration-300 ${
            open ? 'rotate-45' : ''
          }`}
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-350 ${
          open ? 'max-h-60 pb-5' : 'max-h-0'
        }`}
        style={{ transition: 'max-height 0.35s ease, padding 0.35s ease' }}
      >
        <p className="font-jost font-light text-sm text-muted leading-relaxed pl-[72px] pr-10">
          {body}
        </p>
      </div>
    </div>
  )
}

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-divider">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-jost font-medium text-base text-brand-black pr-8">{q}</span>
        <span
          className={`shrink-0 w-6 h-6 flex items-center justify-center border border-divider rounded-full text-muted transition-transform duration-300 ${
            open ? 'rotate-45' : ''
          }`}
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-350 ${
          open ? 'max-h-60 pb-5' : 'max-h-0'
        }`}
        style={{ transition: 'max-height 0.35s ease, padding 0.35s ease' }}
      >
        <p className="font-jost font-light text-sm text-muted leading-relaxed pr-10">{a}</p>
      </div>
    </div>
  )
}

function BookButton() {
  const [loading, setLoading] = useState(false)

  async function handleBook() {
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceId: 'price_1TXQa3LQgD2w3QC8tt44rUda',
          successUrl: `${window.location.origin}/group-trips/thailand/success`,
          cancelUrl: `${window.location.origin}/group-trips/thailand`,
        }),
      })
      const { url } = await res.json()
      window.location.href = url
    } catch {
      setLoading(false)
      alert('Something went wrong. Please try again or contact us directly.')
    }
  }

  return (
    <button
      onClick={handleBook}
      disabled={loading}
      className="w-full sm:w-auto bg-gold text-white font-jost text-[11px] font-medium tracking-[0.18em] uppercase px-10 py-4 hover:bg-gold-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {loading ? 'Redirecting…' : 'Reserve My Spot — $525 Deposit'}
    </button>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function ThailandTripPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[580px] max-h-[820px] flex items-end pb-16 pt-16">
        <Image
          src={IMAGES.groupTrips.thailand}
          alt="Thailand Reset with Rachel and Christian"
          fill
          className="object-cover"
          style={{ objectPosition: 'center center' }}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

        <div className="relative w-full max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-4">
              Group Trip · November 2026
            </p>
            <h1 className="font-playfair font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-4">
              Thailand Reset
            </h1>
            <p className="font-jost font-light text-base lg:text-lg text-white/75 leading-relaxed mb-8 max-w-lg">
              Eight days across Bangkok and Chiang Mai with Rachel and Christian. Small group. Real food. Slower pace. November 6–13, 2026.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#book"
                className="inline-block bg-gold text-white font-jost text-[11px] font-medium tracking-[0.18em] uppercase px-8 py-4 hover:bg-gold-light transition-colors"
              >
                Reserve Your Spot
              </a>
              <a
                href="#itinerary"
                className="inline-block border border-white/40 text-white font-jost text-[11px] font-medium tracking-[0.18em] uppercase px-8 py-4 hover:border-white transition-colors"
              >
                See the Itinerary
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── AT-A-GLANCE STATS ────────────────────────────────────────────── */}
      <section className="bg-brand-black">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/10">
            {[
              { label: 'Dates', value: 'Nov 6–13, 2026' },
              { label: 'Duration', value: '8 Days · 7 Nights' },
              { label: 'Group Size', value: '8–22 Travelers' },
              { label: 'Starting From', value: '$2,100' },
            ].map((stat) => (
              <div key={stat.label} className="md:px-8 first:pl-0 last:pr-0">
                <div className="font-jost text-[10px] font-medium tracking-[0.2em] uppercase text-gold/70 mb-1">
                  {stat.label}
                </div>
                <div className="font-playfair font-bold text-lg text-white leading-snug">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT THIS IS ─────────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-5 lg:px-8 py-16 lg:py-24 text-center">
        <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-4">
          The Trip
        </p>
        <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-brand-black mb-6 tracking-tight">
          This is Thailand without the tourist chaos.
        </h2>
        <p className="font-jost font-light text-base lg:text-lg text-muted leading-relaxed">
          Eight days split between Bangkok and Chiang Mai — floating markets, UNESCO ruins, a 150-year-old teak house cooking class, an overnight sleeper train, and a dinner inside a women&apos;s correctional facility that serves some of the best food in Chiang Mai. We planned it so you can actually be present. Activity level: relaxed.
        </p>
      </section>

      {/* ── ITINERARY ────────────────────────────────────────────────────── */}
      <section id="itinerary" className="bg-beige">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
          <div className="text-center mb-10">
            <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-3">
              Day by Day
            </p>
            <h2 className="font-playfair font-bold text-3xl text-brand-black tracking-tight">
              Full Itinerary
            </h2>
          </div>

          <div className="bg-white border border-divider px-6 lg:px-8">
            {ITINERARY.map((item) => (
              <ItineraryItem key={item.day} {...item} />
            ))}
          </div>

          <p className="font-jost text-[11px] text-muted text-center mt-6 leading-relaxed">
            Arrive at Bangkok Suvarnabhumi (BKK) · Depart from Chiang Mai (CNX)
          </p>
        </div>
      </section>

      {/* ── INCLUDED / NOT INCLUDED ──────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
        <div className="text-center mb-12">
          <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-3">
            Transparency
          </p>
          <h2 className="font-playfair font-bold text-3xl text-brand-black tracking-tight">
            What&apos;s In, What&apos;s Out
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="border border-divider p-8">
            <h3 className="font-playfair font-bold text-lg text-brand-black mb-6 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center">
                <svg className="w-3 h-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              What&apos;s Included
            </h3>
            <ul className="space-y-3">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-jost text-sm font-light text-brand-black leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-divider p-8">
            <h3 className="font-playfair font-bold text-lg text-brand-black mb-6 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-muted/10 flex items-center justify-center">
                <svg className="w-3 h-3 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
              Not Included
            </h3>
            <ul className="space-y-3">
              {NOT_INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-muted shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="font-jost text-sm font-light text-muted leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── OPTIONAL ADD-ONS ─────────────────────────────────────────────── */}
      <section className="bg-beige">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
          <div className="text-center mb-10">
            <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-3">
              Extras
            </p>
            <h2 className="font-playfair font-bold text-3xl text-brand-black tracking-tight">
              Optional Add-Ons
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ADD_ONS.map((addon) => (
              <div key={addon.label} className="bg-white border border-divider p-5 flex items-center justify-between gap-4">
                <span className="font-jost text-sm font-light text-brand-black leading-snug">{addon.label}</span>
                <span className="font-jost text-sm font-medium text-gold shrink-0">{addon.price}</span>
              </div>
            ))}
          </div>
          <p className="font-jost text-[11px] text-muted text-center mt-6">
            Add-ons can be selected after booking. We&apos;ll reach out with details.
          </p>
        </div>
      </section>

      {/* ── BOOK / PAYMENT ───────────────────────────────────────────────── */}
      <section id="book" className="max-w-3xl mx-auto px-5 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-10">
          <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-3">
            Ready?
          </p>
          <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-brand-black tracking-tight mb-5">
            Reserve your spot.
          </h2>
          <p className="font-jost font-light text-base text-muted leading-relaxed">
            A $525 deposit holds your place in the group. The remaining balance is due 90 days before departure — we&apos;ll send a full payment schedule after you book.
          </p>
        </div>

        <div className="border border-divider p-8 mb-8">
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center pb-4 border-b border-divider">
              <span className="font-jost text-sm font-medium text-brand-black">Trip Price</span>
              <div className="font-playfair font-bold text-xl text-gold">$2,100</div>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-jost text-sm font-medium text-brand-black">Deposit to Reserve</span>
              <span className="font-jost text-sm font-medium text-brand-black">$525</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <BookButton />
            <p className="font-jost text-[11px] text-muted text-center">
              Secure checkout via Stripe · No card data stored on this site
            </p>
          </div>
        </div>

        <div className="bg-gold-pale border border-gold/20 p-5 rounded-sm">
          <p className="font-jost text-[11px] font-medium tracking-[0.15em] uppercase text-gold mb-2">
            Installment Plans Available
          </p>
          <p className="font-jost text-sm font-light text-muted leading-relaxed">
            Need to spread the remaining balance over time? Affirm financing is available after your deposit is placed. We&apos;ll include details in your booking confirmation.
          </p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="bg-beige">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
          <div className="text-center mb-10">
            <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-3">
              Questions
            </p>
            <h2 className="font-playfair font-bold text-3xl text-brand-black tracking-tight">
              Before You Book
            </h2>
          </div>
          <div className="bg-white border border-divider px-6 lg:px-8">
            {FAQS.map((faq) => (
              <FAQ key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="font-jost font-light text-sm text-muted mb-3">Something else on your mind?</p>
            <Link
              href="/contact"
              className="font-jost text-[11px] font-medium tracking-[0.15em] uppercase text-gold underline underline-offset-4 hover:text-gold-light transition-colors"
            >
              Send us a message
            </Link>
          </div>
        </div>
      </section>

      {/* ── CANCELLATION POLICY ──────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
        <div className="text-center mb-8">
          <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-3">
            Good to Know
          </p>
          <h2 className="font-playfair font-bold text-3xl text-brand-black tracking-tight">
            Cancellation Policy
          </h2>
        </div>
        <div className="space-y-4">
          {[
            {
              label: 'Pending spot',
              detail: '100% refundable. Cancel anytime before confirming.',
            },
            {
              label: '91+ days before departure',
              detail: 'Partial refund + future trip credit, minus a $100 processing fee.',
            },
            {
              label: '90 days or fewer',
              detail: 'Non-refundable. This is why we strongly recommend travel insurance with cancellation coverage.',
            },
          ].map((item) => (
            <div key={item.label} className="flex gap-4 border border-divider p-5">
              <div className="shrink-0 w-2 h-2 mt-2 rounded-full bg-gold" />
              <div>
                <div className="font-jost font-medium text-sm text-brand-black mb-1">{item.label}</div>
                <div className="font-jost font-light text-sm text-muted leading-relaxed">{item.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────────────── */}
      <section className="bg-brand-black">
        <div className="max-w-2xl mx-auto px-5 lg:px-8 py-16 lg:py-20 text-center">
          <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-4">
            November 6–13, 2026
          </p>
          <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-white mb-5 tracking-tight">
            Eight days. Thailand.<br />Small group. Let&apos;s go.
          </h2>
          <a
            href="#book"
            className="inline-block bg-gold text-white font-jost text-[11px] font-medium tracking-[0.18em] uppercase px-10 py-4 hover:bg-gold-light transition-colors"
          >
            Reserve My Spot
          </a>
        </div>
      </section>
    </>
  )
}
