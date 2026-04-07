import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { IMAGES } from '@/lib/images'

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

const RECENT_ADVENTURES = [
  {
    image: IMAGES.about.japan,
    tag: 'Japan',
    title: 'Six Weeks in Japan: An Honest Report',
    excerpt:
      "More train rides than we can count. More convenience store meals than we expected to love. Here's what the country is actually like when you slow down.",
    slug: 'six-weeks-japan',
  },
  {
    image: IMAGES.about.southKorea,
    tag: 'South Korea',
    title: 'Seoul Was Not What We Pictured — In the Best Way',
    excerpt:
      "We went for the food. We stayed for everything else. South Korea moved up fast on the list of places we'd go back to immediately.",
    slug: 'seoul-south-korea',
  },
  {
    image: IMAGES.about.thailand,
    tag: 'Thailand',
    title: 'What a Month in Thailand Actually Costs',
    excerpt:
      'The honest number. No rounding down, no leaving out the splurges. Here\'s what we actually spent across Bangkok, Chiang Mai, and the islands.',
    slug: 'thailand-cost-breakdown',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[55vh] min-h-[400px] pt-16">
        <Image
          src={IMAGES.hero.about}
          alt="Christian and Rachel"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        <div className="absolute inset-0 flex items-end px-5 pb-10 lg:px-16 lg:pb-14">
          <h1 className="font-playfair font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight">
            We&apos;re Christian &amp; Rachel.
          </h1>
        </div>
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
              alt="Christian and Rachel portrait"
              fill
              className="object-cover"
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
                We didn&apos;t quit our jobs and figure it out. We didn&apos;t sell everything and disappear. We just decided that travel didn&apos;t have to wait until retirement, and then we built a life around that.
              </p>
              <p>
                We still own our house. Rachel still works. Christian handles the logistics and the camera and honestly most of the research. We&apos;re in our 30s, we know what we want, and we wanted to see the world without blowing up everything we worked for to do it.
              </p>
              <p>
                That&apos;s what this channel is about. Not the leap. Not the hustle. Just what it actually looks like when two real people decide to go, and keep going, and figure out how to make it last.
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

      {/* ── RECENT ADVENTURES ────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-3">
              Currently In / Recent Adventures
            </p>
            <h2 className="font-playfair font-bold text-3xl text-brand-black tracking-tight">
              Where We&apos;ve Been
            </h2>
          </div>
          <Link
            href="/blog"
            className="font-jost text-[11px] font-medium tracking-[0.15em] uppercase text-gold underline underline-offset-4 hover:text-gold-light transition-colors hidden sm:block"
          >
            All Posts
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RECENT_ADVENTURES.map((post) => (
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
      </section>
    </>
  )
}
