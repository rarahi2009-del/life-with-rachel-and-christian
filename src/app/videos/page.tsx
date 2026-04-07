import type { Metadata } from 'next'
import Image from 'next/image'
import { IMAGES } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Videos',
  description:
    "We don't just dump our upload history here. These are the ones worth your time, organized by where we were when we made them.",
}

// ─── Data ──────────────────────────────────────────────────────────────────

const JAPAN_VIDEOS = [
  {
    image: IMAGES.videos.japanStreet,
    tag: 'Japan · Tokyo',
    title: 'Our First 48 Hours in Tokyo — Everything That Happened',
    desc: 'Jetlagged, overwhelmed in the best way, and already making questionable convenience store decisions.',
  },
  {
    image: IMAGES.videos.japanTemple,
    tag: 'Japan · Kyoto',
    title: "Kyoto in Two Days: What's Actually Worth Your Time",
    desc: 'We tried to see everything. Here\'s what survived the cut.',
  },
  {
    image: IMAGES.videos.japanOsaka,
    tag: 'Japan · Osaka',
    title: 'Eating Our Way Through Osaka: The Real Food Guide',
    desc: "Dotonbori at midnight, standing rooms with incredible ramen, and yes — we went to the conveyor belt place.",
  },
]

const EUROPE_VIDEOS = [
  {
    image: IMAGES.videos.europeAmsterdam,
    tag: 'Europe · Amsterdam',
    title: 'Amsterdam Without a Plan: What Happened When We Just Walked',
    desc: 'No itinerary. No bucket list. Just two people, canals, and a lot of great coffee.',
  },
  {
    image: IMAGES.videos.europeItaly,
    tag: 'Europe · Italy',
    title: 'The Italy Trip That Changed How We Travel',
    desc: "We slowed down. We stayed longer in fewer places. It worked better than anything we'd done before.",
  },
  {
    image: IMAGES.videos.europeCity,
    tag: 'Europe',
    title: 'Honest Review: 6 Weeks in Europe on a Real Budget',
    desc: 'Actual numbers. Actual food. The version of the trip nobody posts about.',
  },
]

// ─── Components ────────────────────────────────────────────────────────────

function VideoCard({
  image,
  tag,
  title,
  desc,
}: {
  image: string
  tag: string
  title: string
  desc: string
}) {
  return (
    <div className="group card-hover bg-white border border-divider">
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-brand-black">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-90 group-hover:opacity-80 group-hover:scale-[1.02] transition-all duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Play indicator */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-12 h-12 rounded-full bg-gold/90 flex items-center justify-center">
            <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="font-jost text-[10px] font-medium tracking-[0.18em] uppercase text-gold mb-2">
          {tag}
        </div>
        <h3 className="font-playfair font-bold text-base text-brand-black leading-tight mb-2">
          {title}
        </h3>
        <p className="font-jost text-sm font-light text-muted leading-relaxed mb-4">
          {desc}
        </p>
        <a
          href="https://www.youtube.com/@LifewithRachelandChristian"
          target="_blank"
          rel="noopener noreferrer"
          className="font-jost text-[10px] font-medium tracking-[0.15em] uppercase text-gold hover:text-gold-light underline underline-offset-4 transition-colors"
        >
          Watch on YouTube →
        </a>
      </div>
    </div>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function VideosPage() {
  return (
    <>
      {/* ── HEADER ───────────────────────────────────────────────────────── */}
      <section className="bg-beige pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-4">
            Curated Travel Worth Watching
          </p>
          <h1 className="font-playfair font-black text-4xl sm:text-5xl lg:text-6xl text-brand-black leading-tight tracking-tight mb-6">
            Our Videos
          </h1>
          <p className="font-jost font-light text-base lg:text-lg text-muted max-w-xl leading-relaxed">
            We don&apos;t just dump our upload history here. These are the ones worth your time, organized by where we were when we made them.
          </p>
          <div className="mt-8">
            <a
              href="https://www.youtube.com/@LifewithRachelandChristian"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-black text-white font-jost text-[11px] font-medium tracking-[0.18em] uppercase px-6 py-3.5 hover:bg-gold transition-colors duration-200"
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* ── JAPAN ────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
        <div className="flex items-end gap-4 mb-2">
          <hr className="gold-rule flex-1" />
        </div>
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-3">
              Currently In
            </p>
            <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-brand-black tracking-tight">
              Japan
            </h2>
          </div>
          <a
            href="https://www.youtube.com/@LifewithRachelandChristian"
            target="_blank"
            rel="noopener noreferrer"
            className="font-jost text-[11px] font-medium tracking-[0.15em] uppercase text-gold underline underline-offset-4 hover:text-gold-light transition-colors hidden sm:block"
          >
            All Japan Videos
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {JAPAN_VIDEOS.map((video) => (
            <VideoCard key={video.title} {...video} />
          ))}
        </div>
      </section>

      {/* ── EUROPE ───────────────────────────────────────────────────────── */}
      <section className="bg-beige">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
          <div className="flex items-end gap-4 mb-2">
            <hr className="gold-rule flex-1" />
          </div>
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-3">
                Earlier This Year
              </p>
              <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-brand-black tracking-tight">
                Europe
              </h2>
            </div>
            <a
              href="https://www.youtube.com/@LifewithRachelandChristian"
              target="_blank"
              rel="noopener noreferrer"
              className="font-jost text-[11px] font-medium tracking-[0.15em] uppercase text-gold underline underline-offset-4 hover:text-gold-light transition-colors hidden sm:block"
            >
              All Europe Videos
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EUROPE_VIDEOS.map((video) => (
              <VideoCard key={video.title} {...video} />
            ))}
          </div>
        </div>
      </section>

      {/* ── YOUTUBE CTA ──────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20 text-center">
        <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-4">
          New Videos Weekly
        </p>
        <h2 className="font-playfair font-bold text-3xl text-brand-black mb-5 tracking-tight">
          See everything on YouTube
        </h2>
        <p className="font-jost font-light text-muted max-w-md mx-auto mb-8 leading-relaxed">
          We put out new content every week. Subscribe so you don&apos;t miss the next one.
        </p>
        <a
          href="https://www.youtube.com/@LifewithRachelandChristian"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand-black text-white font-jost text-[11px] font-medium tracking-[0.18em] uppercase px-8 py-4 hover:bg-gold transition-colors duration-200"
        >
          Go to Our YouTube Channel
        </a>
      </section>
    </>
  )
}
