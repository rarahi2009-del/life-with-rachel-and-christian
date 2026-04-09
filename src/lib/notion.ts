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

/** Look up a Notion property by name, trimming whitespace and ignoring case */
function prop(properties: any, name: string): any {
  // Exact match first
  if (properties[name] !== undefined) return properties[name]
  // Fuzzy match: trim + lowercase
  const key = Object.keys(properties).find(
    (k) => k.trim().toLowerCase() === name.trim().toLowerCase()
  )
  return key ? properties[key] : undefined
}

function richText(p: any): string {
  return p?.rich_text?.[0]?.plain_text ?? ''
}

function extractPost(page: any): BlogPost {
  const p = page.properties

  const youtubeId = richText(prop(p, 'YouTube ID')) || null

  // Header Image can be a URL type or rich_text type
  const headerImageProp = prop(p, 'Header Image')
  const headerImageValue =
    headerImageProp?.url ||           // URL property type
    richText(headerImageProp) ||      // rich_text property type
    null
  const headerImage =
    headerImageValue ||
    (youtubeId ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg` : null)

  const published = prop(p, 'Published')?.checkbox ?? true

  // Handle "Cateory" (missing g) or correct "Category" spelling
  const catProp = prop(p, 'Category') ?? prop(p, 'Cateory')
  const categories: string[] =
    catProp?.multi_select?.map((s: any) => s.name) ??
    (catProp?.select?.name ? [catProp.select.name] : [])

  // Handle "Exerpt" or "Excerpt" spelling
  const excerptProp = prop(p, 'Excerpt') ?? prop(p, 'Exerpt')

  return {
    id: page.id,
    title: prop(p, 'Title')?.title?.[0]?.plain_text ?? '',
    slug: richText(prop(p, 'Slug')),
    date: prop(p, 'Date')?.date?.start ?? '',
    categories,
    category: categories[0] ?? '',
    excerpt: richText(excerptProp),
    readTime: richText(prop(p, 'Read Time')) || '5 min read',
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
