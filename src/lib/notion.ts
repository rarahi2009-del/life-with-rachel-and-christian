import { Client } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'

// ─── Clients ───────────────────────────────────────────────────────────────

const notion = new Client({ auth: process.env.NOTION_TOKEN })
const n2m = new NotionToMarkdown({ notionClient: notion })
const DB = process.env.NOTION_BLOG_DB!

// ─── Types ─────────────────────────────────────────────────────────────────

export type BlogPost = {
  id: string
  title: string
  slug: string
  date: string
  categories: string[]   // multi-select — e.g. ['Japan', 'Nomad Life']
  category: string       // first category, used as the display label
  excerpt: string
  readTime: string
  youtubeId: string | null
  headerImage: string | null
  published: boolean
}

// ─── Helpers ───────────────────────────────────────────────────────────────

function richText(prop: any): string {
  return prop?.rich_text?.[0]?.plain_text ?? ''
}

function extractPost(page: any): BlogPost {
  const p = page.properties
  const youtubeId = richText(p['YouTube ID']) || null
  const headerImage =
    richText(p['Header Image']) ||
    (youtubeId ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg` : null)

  // If Published column doesn't exist yet, default to true so posts show up
  const published = p.Published?.checkbox ?? true

  // Support both Select and Multi-select for Category
  const categories: string[] =
    p.Category?.multi_select?.map((s: any) => s.name) ??
    (p.Category?.select?.name ? [p.Category.select.name] : [])

  return {
    id: page.id,
    title: p.Title?.title?.[0]?.plain_text ?? '',
    slug: richText(p.Slug),
    date: p.Date?.date?.start ?? '',
    categories,
    category: categories[0] ?? '',   // primary label shown on cards
    excerpt: richText(p.Excerpt),
    readTime: richText(p['Read Time']) || '5 min read',
    youtubeId,
    headerImage,
    published,
  }
}

// ─── Queries ───────────────────────────────────────────────────────────────

/** All published posts sorted newest first */
export async function getAllPosts(): Promise<BlogPost[]> {
  const res = await notion.databases.query({ database_id: DB })
  const posts = res.results
    .map(extractPost)
    // Only show rows that have a slug AND are marked Published (if the column exists)
    .filter((p) => p.slug && p.published !== false)
  return posts.sort((a, b) => {
    if (!a.date && !b.date) return 0
    if (!a.date) return 1
    if (!b.date) return -1
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

/** Single post by slug */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const res = await notion.databases.query({ database_id: DB })
  const match = res.results.map(extractPost).find((p) => p.slug === slug)
  return match ?? null
}

/** All published slugs — used for generateStaticParams */
export async function getAllSlugs(): Promise<string[]> {
  const posts = await getAllPosts()
  return posts.map((p) => p.slug).filter(Boolean)
}

/** Page body as markdown string */
export async function getPostMarkdown(pageId: string): Promise<string> {
  const blocks = await n2m.pageToMarkdown(pageId)
  return n2m.toMarkdownString(blocks).parent
}
