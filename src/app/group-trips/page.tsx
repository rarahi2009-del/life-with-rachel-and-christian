'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IMAGES } from '@/lib/images'
import KitSignupForm from '@/components/KitSignupForm'

// ─── Data ──────────────────────────────────────────────────────────────────

const STEPS = [
  {
    number: '01',
    title: 'Join the Waitlist',
    body: 'Sign up below. Waitlist people hear first and get priority when spots open. No commitment, no deposit — just your name and email.',
  },
  {
    number: '02',
    title: 'Pick Your Trip',
    body: "We'll share upcoming destinations, dates, and what's included. No pressure, no hard sell — just the information you need to decide.",
  },
  {
    number: '03',
    title: 'Show Up',
    body: "We handle the planning. You experience the place. That's genuinely the whole thing. Small group, people you'll actually like, places worth being.",
  },
]

const FAQS = [
  {
    q: 'Will you actually be there the whole trip?',
    a: "Yes, always. We're not selling you a trip and handing you off to a local guide. We're there from day one to the last day. That's the whole point.",
  },
  {
    q: 'How big are the groups?',
    a: "Eight to twenty-two people maximum. We've traveled with large groups before and didn't like it. This size actually works — you get to know people, nobody gets lost, and we can make real-time decisions without coordinating a small army.",
  },
  {
    q: "What's included?",
    a: "Accommodations, experiences, logistics, and us. Flights are separate — we'll tell you exactly what to book and when. Full breakdown of what's covered will be sent when trips launch. Nothing vague, nothing hidden.",
  },
  {
    q: "I've never traveled internationally — is this for me?",
    a: "Yes. That's actually kind of the point. You don't need to know how to read a JR Pass or navigate a subway with no English signage — we handle that. You just need to show up willing to be somewhere new.",
  },
  {
    q: 'When do trips start?',
    a: "2026. We're finalizing details now. Join the waitlist to be first — waitlist people get first access to dates, details, and spots before anything goes public.",
  },
]

// ─── FAQ Accordion ─────────────────────────────────────────────────────────

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-divider">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-jost font-medium text-base text-brand-black pr-8">
          {q}
        </span>
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
        <p className="font-jost font-light text-sm text-muted leading-relaxed pr-10">
          {a}
        </p>
      </div>
    </div>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function GroupTripsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[580px] max-h-[820px] flex items-center justify-center pt-16">
        <Image
          src={IMAGES.hero.groupTrips}
          alt="Rachel and Christian on a Mediterranean yacht"
          fill
          className="object-cover"
          style={{ objectPosition: 'center top' }}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative text-center px-5 max-w-3xl mx-auto">
          <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-5 animate-fade-in-up opacity-0-init delay-100" style={{ animationFillMode: 'forwards' }}>
            Come Travel With Us
          </p>
          <h1 className="font-playfair font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-6 animate-fade-in-up opacity-0-init delay-250" style={{ animationFillMode: 'forwards' }}>
            Come travel with us.<br />We want to show you what we love.
          </h1>
          <p className="font-jost font-light text-base lg:text-lg text-white/75 mb-10 max-w-xl mx-auto leading-relaxed animate-fade-in-up opacity-0-init delay-400" style={{ animationFillMode: 'forwards' }}>
            We&apos;ve spent years learning these places — the spots worth knowing, the things most people miss, and how to actually experience them. Now we want to share all of it with you, in a small group, the right way.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up opacity-0-init delay-550" style={{ animationFillMode: 'forwards' }}>
            <Link
              href="/group-trips/thailand"
              className="inline-block bg-gold text-white font-jost text-[11px] font-medium tracking-[0.18em] uppercase px-8 py-4 hover:bg-gold-light transition-colors"
            >
              View Thailand Trip
            </Link>
            <a
              href="#waitlist"
              className="inline-block border border-white/50 text-white font-jost text-[11px] font-medium tracking-[0.18em] uppercase px-8 py-4 hover:border-white transition-colors"
            >
              Join the Waitlist
            </a>
          </div>
        </div>
      </section>

      {/* ── FEATURED TRIP: THAILAND ───────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-24">
        <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-4">
          Now Booking
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={IMAGES.groupTrips.thailand}
              alt="Thailand Reset — November 2026"
              fill
              className="object-cover"
              style={{ objectPosition: 'center center' }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Trip details */}
          <div>
            <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-brand-black leading-tight tracking-tight mb-4">
              Thailand Reset
            </h2>

            {/* Stats row */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
              {[
                { label: 'Dates', value: 'Nov 6–13, 2026' },
                { label: 'Duration', value: '8 Days · 7 Nights' },
                { label: 'Group Size', value: '8–22 Travelers' },
                { label: 'From', value: '$2,100' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-jost text-[9px] font-medium tracking-[0.15em] uppercase text-muted mb-0.5">
                    {s.label}
                  </div>
                  <div className="font-jost font-medium text-sm text-brand-black">
                    {s.value}
                  </div>
                </div>
              ))}
            </div>

            <p className="font-jost font-light text-base text-charcoal leading-relaxed mb-8">
              Eight days across Bangkok and Chiang Mai — floating markets, UNESCO ruins, a 150-year-old teak house cooking class, an overnight sleeper train, and the kind of food you&apos;ll talk about for years. Small group. We&apos;re there every day.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/group-trips/thailand"
                className="inline-block bg-brand-black text-white font-jost text-[11px] font-medium tracking-[0.18em] uppercase px-7 py-3.5 hover:bg-gold transition-colors duration-200"
              >
                View Full Details
              </Link>
              <Link
                href="/group-trips/thailand#book"
                className="inline-block border border-gold text-gold font-jost text-[11px] font-medium tracking-[0.18em] uppercase px-7 py-3.5 hover:bg-gold hover:text-white transition-colors duration-200"
              >
                Reserve My Spot — $525
              </Link>
            </div>

            <p className="font-jost text-xs text-muted mt-4">
              Affirm financing available for the deposit and remaining balance.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="bg-beige">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
          <div className="text-center mb-4">
            <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-3">
              Simple
            </p>
            <h2 className="font-playfair font-bold text-3xl text-brand-black tracking-tight mb-4">
              How It Works
            </h2>
            <p className="font-jost font-light text-base text-muted max-w-xl mx-auto leading-relaxed">
              We plan it. We&apos;re there the whole time. You show up and actually experience the place instead of spending the week figuring out logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {STEPS.map((step) => (
              <div key={step.number} className="bg-white border border-divider p-8">
                <div className="font-playfair font-black text-4xl text-gold/30 mb-4 leading-none">
                  {step.number}
                </div>
                <h3 className="font-playfair font-bold text-xl text-brand-black mb-3 leading-tight">
                  {step.title}
                </h3>
                <p className="font-jost font-light text-sm text-muted leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FUTURE TRIPS ─────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
        <div className="mb-10">
          <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-3">
            What&apos;s Next
          </p>
          <h2 className="font-playfair font-bold text-3xl text-brand-black tracking-tight">
            Future Trips
          </h2>
        </div>

        <div className="max-w-sm">
          <div className="group border border-divider bg-white relative overflow-hidden">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={IMAGES.groupTrips.europe}
                alt="Next group trip coming soon"
                fill
                className="object-cover opacity-60"
                style={{ objectPosition: 'center top' }}
                sizes="400px"
              />
              <div className="absolute inset-0 bg-brand-black/40 flex items-center justify-center">
                <span className="font-jost text-[10px] font-medium tracking-[0.2em] uppercase text-white border border-white/60 px-4 py-2">
                  Coming Soon
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="font-jost text-[10px] font-medium tracking-[0.18em] uppercase text-gold mb-2">
                TBA
              </div>
              <h3 className="font-playfair font-bold text-xl text-brand-black mb-2">
                Next Group Trip
              </h3>
              <p className="font-jost text-sm font-light text-muted leading-relaxed">
                We&apos;re planning our next adventure and we want you there. Get on the list to be the first to know where we&apos;re headed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WAITLIST / SIGN UP ───────────────────────────────────────────── */}
      <section id="waitlist" className="bg-beige">
        <div className="max-w-2xl mx-auto px-5 lg:px-8 py-16 lg:py-20 text-center">
          <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-4">
            Be First to Know
          </p>
          <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-brand-black mb-5 tracking-tight">
            Get on the list.
          </h2>
          <p className="font-jost font-light text-base text-muted leading-relaxed mb-10">
            Be the first to know where we&apos;re going next. Waitlist people get early access to dates, details, and spots before anything goes public.
          </p>
          <KitSignupForm />
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
        <div className="text-center mb-10">
          <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-3">
            Questions
          </p>
          <h2 className="font-playfair font-bold text-3xl text-brand-black tracking-tight">
            The Ones We Get Most
          </h2>
        </div>

        <div>
          {FAQS.map((faq) => (
            <FAQ key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-divider text-center">
          <p className="font-jost font-light text-sm text-muted mb-4">
            Have a question we didn&apos;t answer?
          </p>
          <a
            href="/contact"
            className="font-jost text-[11px] font-medium tracking-[0.15em] uppercase text-gold underline underline-offset-4 hover:text-gold-light transition-colors"
          >
            Send us a message
          </a>
        </div>
      </section>
    </>
  )
}
