import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Rachel and Christian — brand inquiries, trip questions, or general hello.',
}

export default function ContactPage() {
  return (
    <>
      {/* ── HEADER ───────────────────────────────────────────────────────── */}
      <section className="bg-brand-black pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h1 className="font-playfair font-black text-4xl sm:text-5xl text-white leading-tight tracking-tight mb-4">
            Get in Touch
          </h1>
          <p className="font-jost font-light text-base text-white/60 max-w-md leading-relaxed">
            Tell us what you need and we&apos;ll get back to you. We respond within 3 business days.
          </p>
        </div>
      </section>

      {/* ── INQUIRY TYPES ────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-5 lg:px-8 py-14 lg:py-20">

        {/* Quick-route cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">

          <Link
            href="/work-with-us"
            className="group block border border-divider bg-white p-6 card-hover transition-colors duration-200 hover:border-gold"
          >
            <div className="font-jost text-[10px] font-medium tracking-[0.18em] uppercase text-gold mb-2 group-hover:text-gold transition-colors">
              Brand Partnerships
            </div>
            <h2 className="font-playfair font-bold text-lg text-brand-black leading-tight mb-2">
              Sponsorship &amp; Brand Inquiries
            </h2>
            <p className="font-jost text-sm font-light text-muted leading-relaxed mb-4">
              Interested in working together on sponsored content, destination partnerships, or product features?
            </p>
            <span className="font-jost text-[10px] font-medium tracking-[0.15em] uppercase text-gold underline underline-offset-4">
              Go to Work With Us →
            </span>
          </Link>

          <Link
            href="/group-trips"
            className="group block border border-divider bg-white p-6 card-hover transition-colors duration-200 hover:border-gold"
          >
            <div className="font-jost text-[10px] font-medium tracking-[0.18em] uppercase text-gold mb-2 group-hover:text-gold transition-colors">
              Group Trips
            </div>
            <h2 className="font-playfair font-bold text-lg text-brand-black leading-tight mb-2">
              Trip Questions
            </h2>
            <p className="font-jost text-sm font-light text-muted leading-relaxed mb-4">
              Questions about our group trips — what&apos;s included, who joins, and how it all works?
            </p>
            <span className="font-jost text-[10px] font-medium tracking-[0.15em] uppercase text-gold underline underline-offset-4">
              View the FAQ →
            </span>
          </Link>

        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <hr className="flex-1 border-divider" />
          <p className="font-jost text-[10px] font-medium tracking-[0.18em] uppercase text-muted shrink-0">
            General Inquiries
          </p>
          <hr className="flex-1 border-divider" />
        </div>

        {/* General contact form */}
        <ContactForm />

        {/* Social fallback */}
        <p className="font-jost text-xs text-muted mt-8 leading-relaxed">
          You can also reach us on{' '}
          <a
            href="https://www.instagram.com/rachelthomaslife"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline underline-offset-2 hover:text-gold-light transition-colors"
          >
            Instagram
          </a>{' '}
          or{' '}
          <a
            href="https://www.youtube.com/@LifewithRachelandChristian"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline underline-offset-2 hover:text-gold-light transition-colors"
          >
            YouTube
          </a>
          . We read everything.
        </p>

      </section>
    </>
  )
}
