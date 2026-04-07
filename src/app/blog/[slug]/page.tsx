import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { IMAGES } from '@/lib/images'

// ─── Static post data (replace with CMS/MDX later) ─────────────────────────

const POSTS: Record<
  string,
  {
    title: string
    tag: string
    date: string
    readTime: string
    headerImage: string
    intro: string
    body: string[]
    youtubeId: string | null
  }
> = {
  'cherry-blossoms-tokyo': {
    title: 'Cherry Blossoms in Tokyo: What Nobody Tells You Before You Go',
    tag: 'Japan · Tokyo',
    date: 'March 15, 2025',
    readTime: '7 min read',
    headerImage: IMAGES.blog.cherryBlossomTokyo,
    intro:
      'The crowds are real. The timing is impossible to predict. And somehow it was still everything.',
    body: [
      "We had been watching the cherry blossom forecast for three weeks before we landed. Not the tourist-facing one — the Japanese Meteorological Corporation's actual data, which updates daily and is still wrong half the time. We landed in Tokyo on a Saturday in late March with no idea whether we'd caught peak bloom, missed it, or were two days early.",
      "We hadn't missed it.",
      "Ueno Park at 9am on a weekday: manageable. Ueno Park at 1pm on a Saturday: somewhere between a music festival and a fire drill. We walked the full loop, found a bench, ate convenience store onigiri, and watched a family of four set up an enormous tarp for a hanami picnic they clearly planned two months ago.",
      "The thing nobody tells you: the blossoms themselves are surprisingly brief. Peak bloom lasts about a week — sometimes less if it rains. We got lucky with timing, but 'lucky' is doing some work there. We chose our travel dates partially based on historical averages and partially based on vibes. The vibes were right. They will not always be right.",
      "What to actually do: skip the obvious parks if you can and find the quieter spots — the canal paths along Meguro River, the approach to Shinjuku Gyoen at opening time, the side streets in Yanaka where nobody is filming content. That's where it actually felt like something.",
      "Would we go back for cherry blossoms specifically? Yes. Would we plan an entire Japan trip around them? Probably not. The rest of Japan is also very good.",
    ],
    youtubeId: null,
  },
  'tokyo-disneyland-adults': {
    title: 'Tokyo Disneyland as Adults Who Were Skeptical: A Completely Honest Take',
    tag: 'Japan · Tokyo',
    date: 'March 22, 2025',
    readTime: '9 min read',
    headerImage: IMAGES.blog.tokyoDisneyland,
    intro:
      "Christian said he'd sit at a café. He ended up on Space Mountain twice.",
    body: [
      "Here's the thing about Tokyo Disneyland: it's not trying to be Disney World. It's doing its own thing, in Japanese, with a level of operational excellence that made us pause more than once to ask each other if what we were witnessing was actually real.",
      "We got there at park open. We are not people who get places at park open. The crowd flow was so managed and organized that it genuinely felt like a different experience than any other theme park either of us had been to.",
      "The food situation is legitimate. We're not going to pretend we went for the rides — we went to eat things we couldn't get anywhere else, and the park delivered. Gyoza at a theme park. Curry. Things stuffed into Mickey-shaped containers that were somehow actually good.",
      "Christian's skepticism dissolved somewhere around the second hour. He doesn't want us to talk about it.",
      "If you're going: get there early, grab a priority pass for the major attractions immediately, and don't skip the little things. The detail work on everything is worth slowing down for.",
    ],
    youtubeId: null,
  },
  default: {
    title: 'A Story From the Road',
    tag: 'Travel',
    date: 'April 2025',
    readTime: '5 min read',
    headerImage: IMAGES.blog.postHeader,
    intro: 'More from our travels — check back for the full story.',
    body: [
      "This post is still being written. Check back soon, or browse the rest of the blog for stories that are already up.",
    ],
    youtubeId: null,
  },
}

const RELATED_POSTS = [
  {
    image: IMAGES.blog.osakaNight,
    tag: 'Japan',
    title: 'Osaka at Midnight',
    slug: 'osaka-midnight',
  },
  {
    image: IMAGES.blog.amsterdam,
    tag: 'Europe',
    title: 'Amsterdam in Winter',
    slug: 'amsterdam-winter',
  },
  {
    image: IMAGES.blog.japanPacking,
    tag: 'Packing',
    title: 'The Japan Carry-On Packing List',
    slug: 'japan-packing-list',
  },
]

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = POSTS[params.slug] ?? POSTS.default
  return {
    title: post.title,
    description: post.intro,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = POSTS[params.slug] ?? POSTS.default

  return (
    <>
      {/* ── HEADER IMAGE ─────────────────────────────────────────────────── */}
      <div className="relative h-[50vh] min-h-[380px] w-full pt-16">
        <Image
          src={post.headerImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* ── POST HEADER ──────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-5 lg:px-8 -mt-20 relative z-10">
        <div className="bg-off-white p-8 lg:p-12 border-t-2 border-gold">
          <div className="flex flex-wrap items-center gap-4 mb-5">
            <span className="font-jost text-[10px] font-medium tracking-[0.18em] uppercase text-gold bg-gold-pale px-3 py-1.5">
              {post.tag}
            </span>
            <span className="font-jost text-[11px] text-muted">{post.date}</span>
            <span className="font-jost text-[11px] text-muted">{post.readTime}</span>
          </div>
          <h1 className="font-playfair font-black text-3xl lg:text-4xl text-brand-black leading-tight tracking-tight mb-5">
            {post.title}
          </h1>
          <p className="font-jost font-light text-lg text-charcoal leading-relaxed">
            {post.intro}
          </p>
        </div>
      </div>

      {/* ── POST BODY ────────────────────────────────────────────────────── */}
      <article className="max-w-3xl mx-auto px-5 lg:px-8 py-12 lg:py-16">
        <div className="space-y-6">
          {post.body.map((paragraph, i) => {
            // Insert a YouTube embed placeholder mid-article (after 3rd paragraph)
            const insertVideo = post.youtubeId && i === 2
            return (
              <div key={i}>
                <p className="font-jost font-light text-[1.02rem] text-charcoal leading-[1.85]">
                  {paragraph}
                </p>
                {insertVideo && (
                  <div className="my-10 aspect-video bg-brand-black flex items-center justify-center rounded-sm overflow-hidden relative">
                    <iframe
                      src={`https://www.youtube.com/embed/${post.youtubeId}`}
                      title="Embedded video"
                      className="absolute inset-0 w-full h-full"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Byline */}
        <div className="mt-12 pt-8 border-t border-divider flex items-center gap-4">
          <div>
            <p className="font-jost text-sm font-medium text-brand-black">
              Christian &amp; Rachel
            </p>
            <p className="font-jost text-xs text-muted">
              Life With Rachel and Christian
            </p>
          </div>
        </div>
      </article>

      {/* ── RELATED POSTS ────────────────────────────────────────────────── */}
      <section className="bg-beige">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14 lg:py-20">
          <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-3">
            Keep Reading
          </p>
          <h2 className="font-playfair font-bold text-2xl text-brand-black mb-8 tracking-tight">
            More From the Blog
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RELATED_POSTS.map((post) => (
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
                <div className="p-5">
                  <div className="font-jost text-[10px] font-medium tracking-[0.18em] uppercase text-gold mb-2">
                    {post.tag}
                  </div>
                  <h3 className="font-playfair font-bold text-base text-brand-black leading-tight">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-block border border-brand-black text-brand-black font-jost text-[11px] font-medium tracking-[0.18em] uppercase px-8 py-3.5 hover:bg-brand-black hover:text-white transition-colors"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
