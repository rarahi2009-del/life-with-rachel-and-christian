import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getAllSlugs, getPostBySlug, getPostMarkdown, getAllPosts } from '@/lib/notion'
import { IMAGES } from '@/lib/images'

export const revalidate = 60

const FALLBACK_IMAGE = IMAGES.blog.postHeader

// ─── Static params ─────────────────────────────────────────────────────────

export async function generateStaticParams() {
  const slugs = await getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

// ─── Metadata ──────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  if (!post) return { title: 'Post Not Found' }
  return {
    title: `${post.title} — Life With Rachel and Christian`,
    description: post.excerpt,
  }
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPostBySlug(params.slug)

  // 404-style fallback if post not found or not published
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-jost text-muted mb-4">Post not found.</p>
          <Link href="/blog" className="font-jost text-[11px] tracking-[0.15em] uppercase text-gold underline">
            Back to the Blog
          </Link>
        </div>
      </div>
    )
  }

  const markdown = await getPostMarkdown(post.id)
  const headerImage = post.headerImage ?? FALLBACK_IMAGE
  const isExternal = headerImage.startsWith('http')

  // Related posts — 3 most recent excluding current
  const allPosts = await getAllPosts()
  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      {/* ── HEADER IMAGE ─────────────────────────────────────────────────── */}
      <div className="relative h-[50vh] min-h-[380px] w-full pt-16">
        <Image
          src={headerImage}
          alt={post.title}
          fill
          className="object-cover"
          style={{ objectPosition: 'center top' }}
          priority
          sizes="100vw"
          unoptimized={isExternal}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* ── POST HEADER ──────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-5 lg:px-8 -mt-20 relative z-10">
        <div className="bg-off-white p-8 lg:p-12 border-t-2 border-gold">
          <div className="flex flex-wrap items-center gap-4 mb-5">
            <span className="font-jost text-[10px] font-medium tracking-[0.18em] uppercase text-gold bg-gold-pale px-3 py-1.5">
              {post.category}
            </span>
            {post.date && (
              <span className="font-jost text-[11px] text-muted">
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            )}
            <span className="font-jost text-[11px] text-muted">{post.readTime}</span>
          </div>
          <h1 className="font-playfair font-black text-3xl lg:text-4xl text-brand-black leading-tight tracking-tight mb-5">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="font-jost font-light text-lg text-charcoal leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </div>
      </div>

      {/* ── POST BODY ────────────────────────────────────────────────────── */}
      <article className="max-w-3xl mx-auto px-5 lg:px-8 py-12 lg:py-16">

        {/* YouTube embed if video attached */}
        {post.youtubeId && (
          <div className="mb-10 aspect-video bg-brand-black rounded-sm overflow-hidden relative">
            <iframe
              src={`https://www.youtube.com/embed/${post.youtubeId}`}
              title={post.title}
              className="absolute inset-0 w-full h-full"
              allowFullScreen
            />
          </div>
        )}

        {/* Notion content rendered from markdown */}
        <div className="prose-blog">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              p: ({ children }) => {
                // Don't wrap block-level elements (e.g. <figure> from images) in <p>
                const arr = Array.isArray(children) ? children : [children]
                const hasBlock = arr.some((c: any) => c?.type === 'figure' || c?.props?.src)
                if (hasBlock) return <>{children}</>
                return (
                  <p className="font-jost font-light text-[1.02rem] text-charcoal leading-[1.85] mb-6">
                    {children}
                  </p>
                )
              },
              h1: ({ children }) => (
                <h1 className="font-playfair font-bold text-2xl text-brand-black mt-10 mb-4 leading-tight">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="font-playfair font-bold text-xl text-brand-black mt-10 mb-4 leading-tight">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="font-playfair font-bold text-lg text-brand-black mt-8 mb-3 leading-tight">
                  {children}
                </h3>
              ),
              strong: ({ children }) => (
                <strong className="font-medium text-brand-black">{children}</strong>
              ),
              em: ({ children }) => (
                <em className="italic text-charcoal">{children}</em>
              ),
              ul: ({ children }) => (
                <ul className="mb-6 space-y-2 pl-5 list-disc marker:text-gold">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="mb-6 space-y-2 pl-5 list-decimal marker:text-gold">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="font-jost font-light text-[1.02rem] text-charcoal leading-relaxed">
                  {children}
                </li>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-2 border-gold pl-6 my-8 italic text-charcoal">
                  {children}
                </blockquote>
              ),
              hr: () => (
                <hr className="gold-rule my-10" />
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold underline underline-offset-2 hover:text-gold-light transition-colors"
                >
                  {children}
                </a>
              ),
              img: ({ src, alt }) => (
                <figure className="my-10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={alt ?? ''}
                    className="w-full object-cover"
                    loading="lazy"
                  />
                  {alt && (
                    <figcaption className="mt-3 font-jost text-xs text-muted text-center italic">
                      {alt}
                    </figcaption>
                  )}
                </figure>
              ),
              code: ({ children }) => (
                <code className="bg-beige px-1.5 py-0.5 font-mono text-sm text-brand-black rounded">
                  {children}
                </code>
              ),
            }}
          >
            {markdown}
          </ReactMarkdown>
        </div>

        {/* Byline */}
        <div className="mt-12 pt-8 border-t border-divider">
          <p className="font-jost text-sm font-medium text-brand-black">
            Christian &amp; Rachel
          </p>
          <p className="font-jost text-xs text-muted">
            Life With Rachel and Christian
          </p>
        </div>
      </article>

      {/* ── RELATED POSTS ────────────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="bg-beige">
          <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14 lg:py-20">
            <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-3">
              Keep Reading
            </p>
            <h2 className="font-playfair font-bold text-2xl text-brand-black mb-8 tracking-tight">
              More From the Blog
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blog/${rel.slug}`}
                  className="group card-hover border border-divider bg-white block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-beige">
                    <Image
                      src={rel.headerImage ?? FALLBACK_IMAGE}
                      alt={rel.title}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      style={{ objectPosition: 'center top' }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      unoptimized={rel.headerImage?.startsWith('http') ?? false}
                    />
                  </div>
                  <div className="p-5">
                    <div className="font-jost text-[10px] font-medium tracking-[0.18em] uppercase text-gold mb-2">
                      {rel.category}
                    </div>
                    <h3 className="font-playfair font-bold text-base text-brand-black leading-tight">
                      {rel.title}
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
      )}
    </>
  )
}
