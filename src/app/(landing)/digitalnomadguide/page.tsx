import type { Metadata } from 'next'
import Image from 'next/image'
import KitGuideForm from '@/components/KitGuideForm'
import './landing.css'

export const metadata: Metadata = {
  title: 'Free Digital Nomad Quick Start Guide | Life With Rachel and Christian',
  description:
    'Download the free Digital Nomad Quick Start Guide — real budgets, remote job options, logistics nobody talks about, and a self-assessment worksheet. Start your slow travel life today.',
  openGraph: {
    title: 'Free Digital Nomad Quick Start Guide',
    description:
      'Everything you need to start your digital nomad life — budgets, remote jobs, visa logistics, and more. Free guide from Rachel & Christian.',
    images: ['/images/guide/guide-cover.jpg'],
  },
}

const CHECKLIST = [
  <><b>What digital nomad life actually looks like</b> day‑to‑day</>,
  <>Real monthly budgets from <b>Southeast Asia, Europe &amp; Latin America</b></>,
  <>Which jobs work best remotely</>,
  <>The logistics <b>nobody talks about</b></>,
  <>How to test the lifestyle before a major commitment</>,
  <>A <b>self‑assessment worksheet</b> to see if this life is right for you</>,
  <>Everything you need to get started</>,
]

export default function DigitalNomadGuidePage() {
  return (
    <div className="lp-body">

      {/* ── HEADER ── */}
      <div className="lp-wrap">
        <header className="lp-top">
          <div className="lp-brand">
            <span className="lp-mark">R&amp;C</span>
            <span className="lp-wordmark">
              <span className="pre">Life With</span>
              <span className="name">Rachel &amp; Christian</span>
            </span>
          </div>
          <span className="site">lifewithrachelandchristian.com</span>
        </header>
      </div>

      {/* ── HERO ── */}
      <div className="lp-wrap">
        <section className="lp-hero">

          {/* Left: copy + form */}
          <div className="lp-copy">
            <p className="lp-eyebrow">Thinking about becoming a digital nomad?</p>
            <h1 className="lp-display">
              The World<br />Is <span className="it">Yours.</span>
            </h1>
            <p className="lp-lead">
              Before you quit your job, sell your house, or book a one‑way ticket —{' '}
              <strong>download this free guide.</strong>
            </p>

            <ul className="lp-checklist">
              {CHECKLIST.map((item, i) => (
                <li key={i}>
                  <span className="lp-tick">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="lp-card" id="signup">
              <KitGuideForm />
            </div>
          </div>

          {/* Right: book mockup */}
          <div className="lp-stage">
            <div className="lp-glow" />
            <div className="lp-booklet">
              <span className="lp-badge">Free · 21 pages</span>
              <div className="lp-book">
                <Image
                  src="/images/guide/guide-cover.jpg"
                  alt="The World Is Yours — Digital Nomad Quick Start Guide cover"
                  width={600}
                  height={776}
                  priority
                  style={{ width: '100%', height: 'auto' }}
                />
                <span className="lp-glare" />
              </div>
            </div>
          </div>

        </section>
      </div>

      {/* ── WHO THIS IS FOR BAND ── */}
      <section className="lp-band">
        <Image
          src="/images/guide/bg-cappadocia.jpg"
          alt="Breakfast above the rooftops in Cappadocia"
          fill
          className="object-cover"
          style={{ objectPosition: 'center 58%' }}
          sizes="100vw"
        />
        <div className="lp-band-scrim" />
        <div className="lp-band-inner">
          <span className="lp-kicker">Who this is for</span>
          <p className="lp-band-line">
            For anyone who wants to see the world faster than &ldquo;someday&rdquo; —<br />
            and wants an honest look before they commit.
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <div className="lp-wrap">
        <footer className="lp-foot">
          <div className="lp-brand">
            <span className="lp-mark">R&amp;C</span>
            <span className="lp-wordmark">
              <span className="pre">Life With</span>
              <span className="name">Rachel &amp; Christian</span>
            </span>
          </div>
          <span>
            © Life With Rachel &amp; Christian ·{' '}
            <a href="https://lifewithrachelandchristian.com">lifewithrachelandchristian.com</a>
          </span>
        </footer>
      </div>

    </div>
  )
}
