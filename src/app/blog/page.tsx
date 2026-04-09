import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/notion'
import BlogGrid from './BlogGrid'

export const revalidate = 60 // refresh every 60 seconds

export const metadata: Metadata = {
  title: 'The Blog — Life With Rachel and Christian',
  description:
    'Honest writing from the road. No highlight reel. No sponsored opinions disguised as advice. Just what\'s actually happening.',
}

export default async function BlogPage() {
  const posts = await getAllPosts()

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
            Honest writing from the road. No highlight reel. No sponsored opinions disguised as
            advice. Just what&apos;s actually happening.
          </p>
        </div>
      </section>

      <BlogGrid posts={posts} />
    </>
  )
}
