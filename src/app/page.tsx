import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { IMAGES } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Life With Rachel and Christian — Real Travel, Real Life',
  description:
    "We didn't quit our jobs and figure it out. We just decided that travel didn't have to wait until retirement, and then we built a life around that.",
}

// ─── Data ──────────────────────────────────────────────────────────────────

const MARQUEE_ITEMS = [
  'Japan',
  'South Korea',
  'Thailand',
  'Vietnam',
  'Amsterdam',
  'Rome',
  'Iceland',
  'Digital Nomad Life',
]

const QUICK_NAV = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: 'The Blog',
    desc: 'Honest writing from the road — no highlight reel.',
    href: '/blog',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
        <circle cx="12" cy="12" r="10" />
        <polygon fill="currentColor" stroke="none" points="10 8 16 12 10 16 10 8" />
      </svg>
    ),
    title: 'Videos',
    desc: 'The ones worth your time, organized by destination.',
    href: '/videos',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    title: 'Group Trips',
    desc: "We're going. Come with us.",
    href: '/group-trips',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
    title: 'Shop Our Favorites',
    desc: 'Everything we actually travel with.',
    href: '/shop',
  },
]

const FEATURED_VIDEOS = [
  {
    videoId: 'BkpuvNKNPwg',
    tag: 'Digital Nomad Life',
    title: 'My Husband Quit His 9-5 So We Can Travel the World — Our Digital Nomad Story',
  },
  {
    videoId: 'bjwlyBLJr0A',
    tag: 'Vietnam · Da Nang',
    title: 'Ho Chi Minh City vs. Da Nang — Which is Best for Digital Nomads',
  },
  {
    videoId: 'PG7TgZcGATg',
    tag: 'Weekly Vlogs · Seoul',
    title: 'Standing Korean BBQ, a Dog Cafe, and Street Food — One Week in Seoul',
  },
  {
    videoId: 'Miaw1XeGj1E',
    tag: 'Digital Nomad Life',
    title: 'Our Full Prep Plan for Becoming Digital Nomads',
  },
]

// ─── Components ────────────────────────────────────────────────────────────

function Marquee() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]
  return (
    <div className="bg-gold overflow-hidden py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 font-jost text-[11px] font-medium tracking-[0.22em] uppercase text-white px-6"
          >
            {item}
            <span className="text-white/50">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[600px] max-h-[900px]">
        <Image
          src={IMAGES.hero.home}
          alt="Christian and Rachel at a tulip farm"
          fill
          className="object-cover"
          style={{ objectPosition: 'center 40%' }}
          priority
          sizes="100vw"
        />
        {/* Gradient overlay — dark at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Hero text — bottom left */}
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-10 lg:px-16 lg:pb-16 max-w-4xl">
          <p
            className="font-jost text-[11px] font-medium tracking-[0.22em] uppercase text-gold mb-4 animate-fade-in-up opacity-0-init delay-100"
            style={{ animationFillMode: 'forwards' }}
          >
            Christian &amp; Rachel — Digital Nomads
          </p>
          <h1
            className="font-playfair font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-5 animate-fade-in-up opacity-0-init delay-250"
            style={{ animationFillMode: 'forwards' }}
          >
            Two people. One life built differently.<br className="hidden sm:block" />
            This is what slow travel actually looks like.
          </h1>
          <p
            className="font-jost font-light text-base lg:text-lg text-white/80 max-w-xl mb-8 leading-relaxed animate-fade-in-up opacity-0-init delay-400"
            style={{ animationFillMode: 'forwards' }}
          >
            We&apos;re not selling you a fantasy. We&apos;re two people in our 30s who became digital nomads, chose slow travel over rush trips, and documented every real moment of it — and we&apos;re bringing you along.
          </p>
          <div
            className="flex flex-wrap gap-4 animate-fade-in-up opacity-0-init delay-550"
            style={{ animationFillMode: 'forwards' }}
          >
            <a
              href="https://www.youtube.com/@LifewithRachelandChristian"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-brand-black font-jost text-[11px] font-medium tracking-[0.18em] uppercase px-6 py-3.5 hover:bg-off-white transition-colors"
            >
              Watch Our Videos
            </a>
            <Link
              href="/group-trips"
              className="border border-gold text-gold font-jost text-[11px] font-medium tracking-[0.18em] uppercase px-6 py-3.5 hover:bg-gold hover:text-white transition-colors"
            >
              Come Travel With Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── MARQUEE STRIP ────────────────────────────────────────────────── */}
      <Marquee />

      {/* ── QUICK NAV CARDS ──────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {QUICK_NAV.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="nav-card group border border-divider bg-white p-6 flex flex-col gap-3 card-hover transition-colors duration-250 cursor-pointer"
            >
              <span className="nav-card-icon">{card.icon}</span>
              <div className="font-playfair font-bold text-lg nav-card-title text-brand-black leading-tight">
                {card.title}
              </div>
              <p className="font-jost text-sm font-light text-muted nav-card-desc leading-relaxed">
                {card.desc}
              </p>
              <span className="font-jost text-gold text-sm font-medium tracking-wide nav-card-arrow mt-auto">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── LATEST FROM YOUTUBE ──────────────────────────────────────────── */}
      <section className="bg-beige">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Video embed placeholder */}
            <div className="relative aspect-video bg-brand-black rounded-sm overflow-hidden group cursor-pointer">
              <Image
                src={IMAGES.home.youtubeThumbnail}
                alt="Tokyo Daily Life — latest video"
                fill
                className="object-cover opacity-70 group-hover:opacity-60 transition-opacity"
                style={{ objectPosition: 'center top' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center bg-black/40 hover:bg-gold/20 transition-colors">
                  <svg className="w-6 h-6 text-gold ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Video info */}
            <div>
              <span className="inline-block font-jost text-[10px] font-medium tracking-[0.2em] uppercase text-gold bg-gold-pale px-3 py-1.5 mb-5">
                Japan · Osaka
              </span>
              <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-brand-black leading-tight mb-5 tracking-tight">
                Osaka at Midnight: What the City Looks Like When Everyone Else Is Asleep
              </h2>
              <p className="font-jost font-light text-base text-charcoal leading-relaxed mb-8">
                We got in late, dropped our bags, and immediately went back out. Dotonbori at night is something else entirely — here&apos;s everything from our first evening in the city.
              </p>
              <a
                href="https://www.youtube.com/@LifewithRachelandChristian"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-black text-white font-jost text-[11px] font-medium tracking-[0.18em] uppercase px-6 py-3.5 hover:bg-gold transition-colors duration-200"
              >
                Watch Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FROM OUR CHANNEL ─────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
        {/* Section header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-3">
              From Our Channel
            </p>
            <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-brand-black leading-tight tracking-tight">
              Popular Videos
            </h2>
          </div>
          <Link
            href="/videos"
            className="font-jost text-[11px] font-medium tracking-[0.15em] uppercase text-gold hover:text-gold-light transition-colors underline underline-offset-4 hidden sm:block"
          >
            View All
          </Link>
        </div>

        {/* Video cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_VIDEOS.map((video) => (
            <a
              key={video.videoId}
              href={`https://youtu.be/${video.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group card-hover border border-divider bg-white block"
            >
              <div className="relative aspect-video overflow-hidden bg-brand-black">
                <Image
                  src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                  alt={video.title}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-80 group-hover:scale-[1.02] transition-all duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  unoptimized
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-gold/90 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="font-jost text-[10px] font-medium tracking-[0.18em] uppercase text-gold mb-2">
                  {video.tag}
                </div>
                <h3 className="font-playfair font-bold text-base text-brand-black leading-tight mb-3">
                  {video.title}
                </h3>
                <span className="font-jost text-[10px] font-medium tracking-[0.15em] uppercase text-gold underline underline-offset-4">
                  Watch on YouTube →
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="/videos"
            className="font-jost text-[11px] font-medium tracking-[0.15em] uppercase text-gold hover:text-gold-light transition-colors underline underline-offset-4"
          >
            See All Videos
          </Link>
        </div>
      </section>

      {/* ── GROUP TRIPS TEASER ───────────────────────────────────────────── */}
      <section className="relative bg-brand-black overflow-hidden">
        {/* Ghosted text behind content */}
        <div
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
          aria-hidden="true"
        >
          <span className="font-playfair font-black text-[8vw] lg:text-[9rem] text-white/[0.04] tracking-widest uppercase whitespace-nowrap">
            TRAVEL WITH US
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 py-20 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-5">
                Coming in 2026
              </p>
              <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-white leading-tight tracking-tight mb-5">
                We want to share what we love about these places. Come with us.
              </h2>
              <p className="font-jost font-light text-base text-white/65 leading-relaxed">
                We&apos;ve spent years learning the best of these places — the spots worth knowing, the things most people miss, and how to actually experience them. Now we&apos;re sharing it all with a small group who wants to come along.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="https://lifewithrachelandchristian.kit.com/44c023a23a"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-gold text-gold font-jost text-[11px] font-medium tracking-[0.18em] uppercase px-8 py-4 hover:bg-gold hover:text-white transition-colors duration-200"
              >
                Count Me In
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
