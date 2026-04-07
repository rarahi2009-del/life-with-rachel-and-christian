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
    icon: '✍️',
    title: 'The Blog',
    desc: 'Honest writing from the road — no highlight reel.',
    href: '/blog',
  },
  {
    icon: '▶️',
    title: 'Videos',
    desc: 'The ones worth your time, organized by destination.',
    href: '/videos',
  },
  {
    icon: '✈️',
    title: 'Group Trips',
    desc: "We're going. Come with us.",
    href: '/group-trips',
  },
  {
    icon: '🛍️',
    title: 'Shop Our Favorites',
    desc: 'Everything we actually travel with.',
    href: '/shop',
  },
]

const BLOG_POSTS = [
  {
    image: IMAGES.blog.cherryBlossomTokyo,
    tag: 'Japan · Tokyo',
    title: 'Cherry Blossoms in Tokyo: What Nobody Tells You Before You Go',
    excerpt:
      'The crowds are real. The timing is impossible to predict. And somehow it was still everything. Here\'s what we wish we knew.',
    slug: 'cherry-blossoms-tokyo',
  },
  {
    image: IMAGES.blog.tokyoDisneyland,
    tag: 'Japan · Tokyo',
    title: 'Tokyo Disneyland as Adults Who Were Skeptical: A Completely Honest Take',
    excerpt:
      "Christian said he'd sit at a café. He ended up on Space Mountain twice. This is the story of how Tokyo Disney actually got us.",
    slug: 'tokyo-disneyland-adults',
  },
  {
    image: IMAGES.blog.rome,
    tag: 'Europe · Rome',
    title: 'Rome in 5 Days: What We Loved, What Annoyed Us, What We\'d Do Differently',
    excerpt:
      "The food is as good as they say. The queues are worse. Here's our actual breakdown after spending a week in the Eternal City.",
    slug: 'rome-honest-review',
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
          alt="Christian and Rachel traveling"
          fill
          className="object-cover"
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
            We decided to go. We kept going.<br className="hidden sm:block" />
            Here&apos;s what that actually looks like.
          </h1>
          <p
            className="font-jost font-light text-base lg:text-lg text-white/80 max-w-xl mb-8 leading-relaxed animate-fade-in-up opacity-0-init delay-400"
            style={{ animationFillMode: 'forwards' }}
          >
            We&apos;re not travel influencers selling you a fantasy. We&apos;re just two people in our 30s who figured out how to keep traveling without blowing up our lives — and we&apos;re bringing you along.
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
              <span className="text-2xl nav-card-icon">{card.icon}</span>
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
                alt="Osaka at night — latest video"
                fill
                className="object-cover opacity-60 group-hover:opacity-50 transition-opacity"
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

      {/* ── FROM THE BLOG ────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
        {/* Section header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-3">
              From the Blog
            </p>
            <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-brand-black leading-tight tracking-tight">
              Recent Stories
            </h2>
          </div>
          <Link
            href="/blog"
            className="font-jost text-[11px] font-medium tracking-[0.15em] uppercase text-gold hover:text-gold-light transition-colors underline underline-offset-4 hidden sm:block"
          >
            View All
          </Link>
        </div>

        {/* Blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group card-hover border border-divider bg-white block"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="font-jost text-[10px] font-medium tracking-[0.18em] uppercase text-gold mb-3">
                  {post.tag}
                </div>
                <h3 className="font-playfair font-bold text-lg text-brand-black leading-tight mb-3">
                  {post.title}
                </h3>
                <p className="font-jost text-sm font-light text-muted leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="/blog"
            className="font-jost text-[11px] font-medium tracking-[0.15em] uppercase text-gold hover:text-gold-light transition-colors underline underline-offset-4"
          >
            View All Posts
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
                We&apos;re going. Want to come with us?
              </h2>
              <p className="font-jost font-light text-base text-white/65 leading-relaxed">
                We&apos;ve been doing this full time. Now we&apos;re opening up spots on our trips for people who want to experience it alongside us — not on a tour bus.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/group-trips"
                className="inline-block border border-gold text-gold font-jost text-[11px] font-medium tracking-[0.18em] uppercase px-8 py-4 hover:bg-gold hover:text-white transition-colors duration-200"
              >
                Join the Waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
