'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import { IMAGES } from '@/lib/images'

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

const DESTINATION_CARDS = [
  {
    image: IMAGES.groupTrips.japanSpring,
    tag: 'Spring 2026',
    title: 'Japan',
    desc: "Cherry blossom season. Kyoto, Tokyo, Osaka. Small group, people who actually want to be there.",
  },
  {
    image: IMAGES.groupTrips.southeastAsia,
    tag: 'Fall 2026',
    title: 'Southeast Asia',
    desc: "Thailand, Vietnam, or both. We're still deciding — waitlist people will weigh in.",
  },
  {
    image: IMAGES.groupTrips.europe,
    tag: 'Summer 2026',
    title: 'Europe',
    desc: "Where exactly? TBD. But probably slower and less touristy than you're imagining.",
  },
]

const FAQS = [
  {
    q: 'Will you actually be there the whole trip?',
    a: "Yes, always. We're not selling you a trip and handing you off to a local guide. Christian and Rachel are there from day one to the last day. That's the whole point.",
  },
  {
    q: 'How big are the groups?',
    a: "Eight to twelve people maximum. We've traveled with large groups before and didn't like it. This size actually works — you get to know people, nobody gets lost, and we can make real-time decisions without coordinating a small army.",
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

// ─── FAQ Accordion component (needs client state) ──────────────────────────

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

// ─── Waitlist form (needs client state) ────────────────────────────────────

function WaitlistForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) { setError('Please enter your first name.'); return }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-brand-black text-white p-8 text-center">
        <p className="font-playfair font-bold text-2xl mb-3">You&apos;re on the list.</p>
        <p className="font-jost font-light text-white/70">
          We&apos;ll be in touch when something&apos;s happening.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label
          htmlFor="wl-name"
          className="block font-jost text-[10px] font-medium tracking-[0.18em] uppercase text-muted mb-2"
        >
          First Name
        </label>
        <input
          id="wl-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Rachel"
          className="w-full border border-divider bg-white px-4 py-3 font-jost text-sm text-brand-black placeholder:text-muted/50 focus:outline-none focus:border-gold transition-colors"
        />
      </div>
      <div>
        <label
          htmlFor="wl-email"
          className="block font-jost text-[10px] font-medium tracking-[0.18em] uppercase text-muted mb-2"
        >
          Email Address
        </label>
        <input
          id="wl-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full border border-divider bg-white px-4 py-3 font-jost text-sm text-brand-black placeholder:text-muted/50 focus:outline-none focus:border-gold transition-colors"
        />
      </div>
      {error && (
        <p className="font-jost text-xs text-red-600">{error}</p>
      )}
      <button
        type="submit"
        className="w-full bg-brand-black text-white font-jost text-[11px] font-medium tracking-[0.18em] uppercase py-4 hover:bg-gold transition-colors duration-200"
      >
        I&apos;m In
      </button>
    </form>
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
          alt="Travel destination"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative text-center px-5 max-w-3xl mx-auto">
          <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-5 animate-fade-in-up opacity-0-init delay-100" style={{ animationFillMode: 'forwards' }}>
            Coming in 2026
          </p>
          <h1 className="font-playfair font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-6 animate-fade-in-up opacity-0-init delay-250" style={{ animationFillMode: 'forwards' }}>
            We&apos;re already going.<br />You should come.
          </h1>
          <p className="font-jost font-light text-base lg:text-lg text-white/75 mb-10 max-w-xl mx-auto leading-relaxed animate-fade-in-up opacity-0-init delay-400" style={{ animationFillMode: 'forwards' }}>
            We&apos;ve been living this full time. Now we&apos;re opening up spots on our actual trips for people who want to experience it alongside us — not on a tour bus with 40 strangers.
          </p>
          <div className="animate-fade-in-up opacity-0-init delay-550" style={{ animationFillMode: 'forwards' }}>
            <a
              href="#waitlist"
              className="inline-block bg-gold text-white font-jost text-[11px] font-medium tracking-[0.18em] uppercase px-8 py-4 hover:bg-gold-light transition-colors"
            >
              Join the Waitlist
            </a>
          </div>
        </div>
      </section>

      {/* ── WHAT THIS IS ─────────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-5 lg:px-8 py-16 lg:py-24 text-center">
        <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-4">
          What to Expect
        </p>
        <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-brand-black mb-6 tracking-tight">
          This isn&apos;t a tour. It&apos;s more like coming with friends.
        </h2>
        <p className="font-jost font-light text-base lg:text-lg text-muted leading-relaxed">
          We plan it. We&apos;re there the whole time. You show up and actually experience the place instead of spending the week figuring out logistics. Small groups only — usually 8 to 12 people — because that&apos;s the only way this actually works.
        </p>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="bg-beige">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
          <div className="text-center mb-12">
            <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-3">
              Simple
            </p>
            <h2 className="font-playfair font-bold text-3xl text-brand-black tracking-tight">
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* ── DESTINATION TEASERS ──────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-3">
              Where We&apos;re Going
            </p>
            <h2 className="font-playfair font-bold text-3xl text-brand-black tracking-tight">
              Upcoming Destinations
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DESTINATION_CARDS.map((card) => (
            <div key={card.title} className="group card-hover border border-divider bg-white relative overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover opacity-80 group-hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Coming soon overlay */}
                <div className="absolute inset-0 bg-brand-black/40 flex items-center justify-center">
                  <span className="font-jost text-[10px] font-medium tracking-[0.2em] uppercase text-white border border-white/60 px-4 py-2">
                    Coming Soon
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="font-jost text-[10px] font-medium tracking-[0.18em] uppercase text-gold mb-2">
                  {card.tag}
                </div>
                <h3 className="font-playfair font-bold text-xl text-brand-black mb-2">
                  {card.title}
                </h3>
                <p className="font-jost text-sm font-light text-muted leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WAITLIST FORM ────────────────────────────────────────────────── */}
      <section id="waitlist" className="bg-beige">
        <div className="max-w-2xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
          <div className="text-center mb-10">
            <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-4">
              Be First to Know
            </p>
            <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-brand-black mb-5 tracking-tight">
              Get on the list.
            </h2>
            <p className="font-jost font-light text-base text-muted leading-relaxed">
              We&apos;ll reach out when trips are ready. No spam, no sales pitch — just an email when something real is happening.
            </p>
          </div>
          <WaitlistForm />
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
