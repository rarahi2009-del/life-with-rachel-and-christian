'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IMAGES } from '@/lib/images'

// ─── Data ──────────────────────────────────────────────────────────────────

const FILTERS = [
  'All',
  'Japan',
  'South Korea',
  'Thailand',
  'Vietnam',
  'Europe',
  'Nomad Life',
  'Packing',
]

const POSTS = [
  {
    image: IMAGES.blog.cherryBlossomTokyo,
    tag: 'Japan',
    title: 'Cherry Blossoms in Tokyo: What Nobody Tells You Before You Go',
    excerpt:
      "The crowds are real. The timing is impossible to predict. And somehow it was still everything. Here's what we wish we knew.",
    slug: 'cherry-blossoms-tokyo',
    date: 'March 2025',
    readTime: '7 min read',
  },
  {
    image: IMAGES.blog.tokyoDisneyland,
    tag: 'Japan',
    title: 'Tokyo Disneyland as Adults Who Were Skeptical: A Completely Honest Take',
    excerpt:
      "Christian said he'd sit at a café. He ended up on Space Mountain twice. This is how Tokyo Disney actually got us.",
    slug: 'tokyo-disneyland-adults',
    date: 'March 2025',
    readTime: '9 min read',
  },
  {
    image: IMAGES.blog.osakaNight,
    tag: 'Japan',
    title: 'Osaka at Midnight: What the City Looks Like When Everyone Else Is Asleep',
    excerpt:
      "We got in late, dropped our bags, and immediately went back out. Dotonbori at night is something else.",
    slug: 'osaka-midnight',
    date: 'February 2025',
    readTime: '6 min read',
  },
  {
    image: IMAGES.blog.amsterdam,
    tag: 'Europe',
    title: 'Amsterdam in Winter: The Version Nobody Instagrammed',
    excerpt:
      "It rained almost every day. We loved it anyway. Here's what the city actually feels like when it's not peak tourist season.",
    slug: 'amsterdam-winter',
    date: 'January 2025',
    readTime: '8 min read',
  },
  {
    image: IMAGES.blog.rome,
    tag: 'Europe',
    title: "Rome in 5 Days: What We Loved, What Annoyed Us, What We'd Do Differently",
    excerpt:
      "The food is as good as they say. The queues are worse. Our actual breakdown after a week in the Eternal City.",
    slug: 'rome-honest-review',
    date: 'December 2024',
    readTime: '11 min read',
  },
  {
    image: IMAGES.blog.japanPacking,
    tag: 'Packing',
    title: 'The Japan Packing List That Actually Fits in a Carry-On',
    excerpt:
      "We did six weeks with one carry-on each. No checked bags. No regrets. Here's exactly what we brought and what we'd cut.",
    slug: 'japan-packing-list',
    date: 'February 2025',
    readTime: '10 min read',
  },
]

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? POSTS
      : POSTS.filter((p) => p.tag === activeFilter)

  return (
    <>
      {/* ── HEADER ───────────────────────────────────────────────────────── */}
      <section className="bg-brand-black pt-32 pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-4">
            Writing From the Road
          </p>
          <h1 className="font-playfair font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-6 max-w-2xl">
            The Blog
          </h1>
          <p className="font-jost font-light text-base lg:text-lg text-white/65 max-w-xl leading-relaxed">
            Honest writing from the road. No highlight reel. No sponsored opinions disguised as advice. Just what&apos;s actually happening.
          </p>
        </div>
      </section>

      {/* ── FILTER BAR ───────────────────────────────────────────────────── */}
      <div className="sticky top-16 lg:top-20 z-30 bg-off-white border-b border-divider">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex gap-1 overflow-x-auto hide-scrollbar py-3">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`shrink-0 font-jost text-[10px] font-medium tracking-[0.15em] uppercase px-4 py-2 transition-colors duration-200 ${
                  activeFilter === filter
                    ? 'bg-brand-black text-white'
                    : 'text-muted hover:text-brand-black'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── BLOG GRID ────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-14 lg:py-20">
        {filtered.length === 0 ? (
          <p className="font-jost font-light text-muted text-center py-20">
            No posts in this category yet — check back soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-jost text-[10px] font-medium tracking-[0.18em] uppercase text-gold bg-gold-pale px-2.5 py-1">
                      {post.tag}
                    </span>
                    <span className="font-jost text-[10px] text-muted">
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-playfair font-bold text-lg text-brand-black leading-tight mb-3">
                    {post.title}
                  </h2>
                  <p className="font-jost text-sm font-light text-muted leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="font-jost text-[11px] font-medium tracking-[0.12em] uppercase text-charcoal/50">
                    {post.date}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  )
}
