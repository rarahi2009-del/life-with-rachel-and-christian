import type { Metadata } from 'next'
import Image from 'next/image'
import KitSignupForm from '@/components/KitSignupForm'

export const metadata: Metadata = {
  title: 'Digital Nomad Travel Videos | Life With Rachel and Christian',
  description:
    'Destination guides, digital nomad prep, packing breakdowns, and weekly vlogs from Rachel and Christian — real travel, no highlight reel.',
}

// ─── Data ──────────────────────────────────────────────────────────────────

type Video = {
  id: string
  tag: string
  title: string
  desc: string
}

const DANANG_VIDEOS: Video[] = [
  {
    id: 'bjwlyBLJr0A',
    tag: 'Vietnam · Da Nang',
    title: 'Ho Chi Minh City vs. Da Nang — Which is Best for Digital Nomads',
    desc: "We break down both cities for digital nomads — cost, vibes, internet, and which one we'd actually pick.",
  },
  {
    id: 'e0OBsKYhlDI',
    tag: 'Vietnam · Da Nang',
    title: 'Is Da Nang Worth Visiting in 2026? Honest First Impressions',
    desc: 'What we liked, what surprised us, and what nobody told us before we arrived.',
  },
  {
    id: 'qKAFAfRmUwg',
    tag: 'Vietnam · Da Nang',
    title: "We Searched for an Apartment in Person in Da Nang (Here's What We Found)",
    desc: 'What the rental market actually looks like when you show up and start looking. Prices, neighborhoods, real results.',
  },
]

const HCMC_VIDEOS: Video[] = [
  {
    id: 'kV42tTUXHLc',
    tag: 'Vietnam · Ho Chi Minh City',
    title: 'Is a $27 Food Tour Worth It in Ho Chi Minh City?',
    desc: 'We did the food tour so you can decide if it\'s worth your money. There were some real hits.',
  },
  {
    id: 'xjsWoBqbJAI',
    tag: 'Vietnam · Ho Chi Minh City',
    title: 'Living in Ho Chi Minh City for the First Time — Is It Worth It?',
    desc: 'First month living in HCMC — daily life, what we loved, what we didn\'t, and whether we\'d do it again.',
  },
]

const PACKING_VIDEOS: Video[] = [
  {
    id: 'hpSgFlCfyRA',
    tag: 'Packing & Gear',
    title: 'Cotopaxi 28L vs 35L: Which Backpack Should You Buy',
    desc: 'Side-by-side comparison of both sizes. Which one\'s right for you depends entirely on how you travel.',
  },
  {
    id: '8ddSDD9Dsm4',
    tag: 'Packing & Gear',
    title: 'One Bag Travel Challenge: Packing Light with a 28L Backpack',
    desc: 'Everything we packed for a full trip in a 28-liter bag. What made the cut and what got left behind.',
  },
  {
    id: 'bkkH2iODqhQ',
    tag: 'Packing & Gear',
    title: 'Can You Pack Everything in the Osprey Fairview 55L?',
    desc: 'Full tour and packing test — a solid option if you want more room without checking a bag.',
  },
  {
    id: 'IVf5_6owTjc',
    tag: 'Packing & Gear',
    title: 'One Bag Packing Challenge — Matador GlobeRider35 Travel Backpack',
    desc: 'Our honest take on the Matador GlobeRider35 after actually using it for a full trip.',
  },
  {
    id: '8yR5cFdsfTQ',
    tag: 'Packing & Gear',
    title: '7kg Packing Challenge — BAGSMART Blast Backpack Review',
    desc: 'Packing an entire trip into 7kg. Here\'s what worked and what didn\'t fit.',
  },
  {
    id: 'vXo274f5g9Q',
    tag: 'Packing & Gear',
    title: 'Can This Backpack Replace a Suitcase? — Bagsmart Blast 38L',
    desc: 'Testing the 38L as a full carry-on suitcase replacement. Real results from real travel.',
  },
]

const NOMAD_VIDEOS: Video[] = [
  {
    id: '3gUjsurzOTY',
    tag: 'Digital Nomad Life',
    title: 'Our 2026 Travel Plans — Asia, Slow Travel & Dream Trips',
    desc: 'Where we\'re going in 2026 — our full plan and the destinations we\'re most excited about.',
  },
  {
    id: 'BkpuvNKNPwg',
    tag: 'Digital Nomad Life',
    title: 'My Husband Quit His 9-5 So We Can Travel the World — Our Digital Nomad Story',
    desc: 'The full story of how we became digital nomads and what that decision actually looked like.',
  },
  {
    id: 'Miaw1XeGj1E',
    tag: 'Digital Nomad Life',
    title: 'Our Full Prep Plan for Becoming Digital Nomads',
    desc: 'Visas, packing, housing, budget — everything we did to prepare before our first long-term trip.',
  },
  {
    id: 'sPf44JF1scc',
    tag: 'Digital Nomad Life',
    title: 'Essential Travel Tools for Long-Term Travelers I Actually Use',
    desc: 'The apps, gear, and subscriptions we actually use. No fluff, no sponsorships on this one.',
  },
]

const VLOG_VIDEOS: Video[] = [
  {
    id: 'PG7TgZcGATg',
    tag: 'Weekly Vlogs · Seoul',
    title: 'Standing Korean BBQ, a Dog Cafe, and Street Food — One Week in Seoul',
    desc: 'A full week in Seoul — everything that made us fall for the city.',
  },
  {
    id: 'AXtWYAhKR-Q',
    tag: 'Weekly Vlogs · Tokyo',
    title: 'Ichiran Ramen, TeamLab Planets, and Our Honest Omakase Reaction',
    desc: 'Tokyo through our eyes — the food, the art, and yes, the very honest omakase reaction.',
  },
  {
    id: 'fIh10QVRqeU',
    tag: 'Weekly Vlogs · San Francisco',
    title: 'We Almost Missed Our Flight to Asia, Lost a Passport, and Still Got In-N-Out',
    desc: 'Classic. A San Francisco layover that went fully sideways before we even left the country.',
  },
  {
    id: 'KSY1M-O46Sg',
    tag: 'Weekly Vlogs · Dallas',
    title: 'We Leave in Less Than a Month — Decluttering Our House & Exploring Dallas',
    desc: 'One month out from our big move. Getting real about leaving.',
  },
  {
    id: 'wnY0ibDW7Ho',
    tag: 'Weekly Vlogs · Albania',
    title: 'Our Daily Life in Tirana, Albania: Living & Working as Nomads',
    desc: 'What it actually looks like to live and work remotely in Tirana — cost, routine, and whether we\'d recommend it.',
  },
]

// ─── Components ────────────────────────────────────────────────────────────

function VideoCard({ video }: { video: Video }) {
  return (
    <a
      href={`https://youtu.be/${video.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group card-hover bg-white border border-divider block"
    >
      <div className="relative aspect-video overflow-hidden bg-brand-black">
        <Image
          src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
          alt={video.title}
          fill
          className="object-cover opacity-90 group-hover:opacity-80 group-hover:scale-[1.02] transition-all duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
        <h3 className="font-playfair font-bold text-base text-brand-black leading-tight mb-2">
          {video.title}
        </h3>
        <p className="font-jost text-sm font-light text-muted leading-relaxed mb-4">
          {video.desc}
        </p>
        <span className="font-jost text-[10px] font-medium tracking-[0.15em] uppercase text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          Watch on YouTube →
        </span>
      </div>
    </a>
  )
}

function SectionHeader({
  label,
  heading,
  channelHref,
  linkLabel,
}: {
  label: string
  heading: string
  channelHref: string
  linkLabel: string
}) {
  return (
    <div className="flex items-end justify-between mb-10">
      <div>
        <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-3">
          {label}
        </p>
        <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-brand-black tracking-tight">
          {heading}
        </h2>
      </div>
      <a
        href={channelHref}
        target="_blank"
        rel="noopener noreferrer"
        className="font-jost text-[11px] font-medium tracking-[0.15em] uppercase text-gold underline underline-offset-4 hover:text-gold-light transition-colors hidden sm:block"
      >
        {linkLabel}
      </a>
    </div>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────

const YT = 'https://www.youtube.com/@LifewithRachelandChristian'

export default function VideosPage() {
  return (
    <>
      {/* ── HEADER ───────────────────────────────────────────────────────── */}
      <section className="bg-beige pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-4">
            Our Channel
          </p>
          <h1 className="font-playfair font-black text-4xl sm:text-5xl lg:text-6xl text-brand-black leading-tight tracking-tight mb-6">
            Digital Nomad Travel Videos
          </h1>
          <p className="font-jost font-light text-base lg:text-lg text-muted max-w-xl leading-relaxed">
            Destination guides, packing breakdowns, digital nomad life, and weekly vlogs — organized so you can find what you actually need.
          </p>
          <div className="mt-8">
            <a
              href={YT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-black text-white font-jost text-[11px] font-medium tracking-[0.18em] uppercase px-6 py-3.5 hover:bg-gold transition-colors duration-200"
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* ── VIETNAM · DA NANG ────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
        <hr className="gold-rule mb-8" />
        <SectionHeader label="Destination" heading="Vietnam · Da Nang" channelHref={YT} linkLabel="All Vietnam Videos" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DANANG_VIDEOS.map((v) => <VideoCard key={v.id} video={v} />)}
        </div>
      </section>

      {/* ── VIETNAM · HO CHI MINH CITY ───────────────────────────────────── */}
      <section className="bg-beige">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
          <hr className="gold-rule mb-8" />
          <SectionHeader label="Destination" heading="Vietnam · Ho Chi Minh City" channelHref={YT} linkLabel="All Vietnam Videos" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HCMC_VIDEOS.map((v) => <VideoCard key={v.id} video={v} />)}
          </div>
        </div>
      </section>

      {/* ── PACKING & GEAR ───────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
        <hr className="gold-rule mb-8" />
        <SectionHeader label="Guides" heading="Packing & Gear" channelHref={YT} linkLabel="All Packing Videos" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PACKING_VIDEOS.map((v) => <VideoCard key={v.id} video={v} />)}
        </div>
      </section>

      {/* ── DIGITAL NOMAD LIFE ───────────────────────────────────────────── */}
      <section className="bg-beige">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
          <hr className="gold-rule mb-8" />
          <SectionHeader label="Our Story" heading="Digital Nomad Life" channelHref={YT} linkLabel="All Nomad Videos" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {NOMAD_VIDEOS.map((v) => <VideoCard key={v.id} video={v} />)}
          </div>
        </div>
      </section>

      {/* ── WEEKLY VLOGS ─────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
        <hr className="gold-rule mb-8" />
        <SectionHeader label="Follow Along" heading="Weekly Vlogs" channelHref={YT} linkLabel="All Vlogs" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VLOG_VIDEOS.map((v) => <VideoCard key={v.id} video={v} />)}
        </div>
      </section>

      {/* ── EMAIL CAPTURE ────────────────────────────────────────────────── */}
      <section className="bg-beige">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
          <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-3">
            Never Miss a Video
          </p>
          <h2 className="font-playfair font-bold text-2xl lg:text-3xl text-brand-black leading-tight mb-3 tracking-tight">
            Get new videos and destination guides in your inbox.
          </h2>
          <p className="font-jost font-light text-sm text-muted leading-relaxed mb-7">
            Join the list and we&apos;ll send you our Digital Nomad Quick Start Guide free — plus new videos and honest dispatches from wherever we are.
          </p>
          <KitSignupForm
            buttonLabel="Join the List"
            successTitle="You're in."
            successBody="Your Digital Nomad Quick Start Guide is on its way. We'll let you know when new videos drop."
          />
        </div>
      </section>

      {/* ── YOUTUBE CTA ──────────────────────────────────────────────────── */}
      <section className="bg-brand-black">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14 lg:py-16 text-center">
          <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-4">
            New Videos Weekly
          </p>
          <h2 className="font-playfair font-bold text-2xl text-white mb-4 tracking-tight">
            See everything on YouTube
          </h2>
          <p className="font-jost font-light text-white/60 max-w-md mx-auto mb-8 leading-relaxed text-sm">
            We put out new content every week. Subscribe so you don&apos;t miss the next one.
          </p>
          <a
            href={YT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-white font-jost text-[11px] font-medium tracking-[0.18em] uppercase px-8 py-4 hover:bg-gold-light transition-colors duration-200"
          >
            Go to Our YouTube Channel
          </a>
        </div>
      </section>
    </>
  )
}
