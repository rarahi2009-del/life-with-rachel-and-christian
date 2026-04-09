'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { BlogPost } from '@/lib/notion'

const FALLBACK = '/images/couple-selfie-blue-sky.jpg'

const FILTERS = [
  'All',
  'Japan',
  'South Korea',
  'Thailand',
  'Vietnam',
  'Europe',
  'USA',
  'Nomad Life',
  'Packing',
]

function formatDate(dateStr: string) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

export default function BlogGrid({ posts }: { posts: BlogPost[] }) {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? posts
      : posts.filter((p) => p.categories.includes(activeFilter))

  return (
    <>
      {/* ── FILTER BAR ─────────────────────────────────────────────────── */}
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

      {/* ── BLOG GRID ──────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-14 lg:py-20">
        {filtered.length === 0 ? (
          <p className="font-jost font-light text-muted text-center py-20">
            No posts in this category yet — check back soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group card-hover border border-divider bg-white block"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-beige">
                  <Image
                    src={post.headerImage ?? FALLBACK}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    style={{ objectPosition: 'center top' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized={post.headerImage?.startsWith('http') ?? false}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-jost text-[10px] font-medium tracking-[0.18em] uppercase text-gold bg-gold-pale px-2.5 py-1">
                      {post.categories.join(' · ')}
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
                  <span className="font-jost text-[10px] text-muted/60">
                    {formatDate(post.date)}
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
