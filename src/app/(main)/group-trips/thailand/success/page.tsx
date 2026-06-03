import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'You\'re Booked — Thailand Reset 2026',
}

export default function ThailandSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-5 pt-24 pb-16">
      <div className="max-w-lg w-full text-center">
        <div className="w-14 h-14 mx-auto mb-8 border border-gold rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-4">
          Deposit Received
        </p>
        <h1 className="font-playfair font-bold text-3xl lg:text-4xl text-brand-black mb-5 tracking-tight">
          You&apos;re coming to Thailand.
        </h1>
        <p className="font-jost font-light text-base text-muted leading-relaxed mb-8">
          Your spot is officially held. Check your email for a receipt — we&apos;ll be in touch shortly with everything you need to know before November.
        </p>

        <div className="bg-beige border border-divider p-6 mb-10 text-left space-y-3">
          <div className="flex justify-between">
            <span className="font-jost text-sm font-medium text-brand-black">Trip</span>
            <span className="font-jost text-sm text-muted">Thailand Reset</span>
          </div>
          <div className="flex justify-between">
            <span className="font-jost text-sm font-medium text-brand-black">Dates</span>
            <span className="font-jost text-sm text-muted">November 6–13, 2026</span>
          </div>
          <div className="flex justify-between">
            <span className="font-jost text-sm font-medium text-brand-black">Deposit paid</span>
            <span className="font-jost text-sm text-muted">$525</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/group-trips/thailand"
            className="font-jost text-[11px] font-medium tracking-[0.18em] uppercase border border-divider text-brand-black px-7 py-3 hover:border-gold hover:text-gold transition-colors"
          >
            Trip Details
          </Link>
          <Link
            href="/"
            className="font-jost text-[11px] font-medium tracking-[0.18em] uppercase bg-gold text-white px-7 py-3 hover:bg-gold-light transition-colors"
          >
            Back Home
          </Link>
        </div>
      </div>
    </div>
  )
}
