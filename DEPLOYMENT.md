# Deployment Guide — Life With Rachel and Christian

## Run Locally

```bash
cd "life-with-rachel-and-christian"
npm install
npm run dev
```

Open http://localhost:3000

---

## Deploy to Vercel

### Option A — Vercel CLI (fastest)

```bash
npm install -g vercel
cd "life-with-rachel-and-christian"
vercel
```

Follow the prompts. Vercel auto-detects Next.js — no configuration needed.

### Option B — Vercel Dashboard (via GitHub)

1. Push this folder to a GitHub repository
2. Go to vercel.com → New Project → Import from GitHub
3. Select your repo — Vercel auto-detects Next.js settings
4. Click Deploy

---

## Connect LifeWithRachelAndChristian.com

1. In the Vercel dashboard, open your project
2. Go to Settings → Domains
3. Add `lifewithrachelandchristian.com` and `www.lifewithrachelandchristian.com`
4. Vercel will show you DNS records to add — two options:
   - **Nameservers (recommended):** Point your domain's nameservers to Vercel's nameservers
   - **A + CNAME records:** Add the provided A record and CNAME at your registrar

SSL is automatic once DNS propagates (usually < 24 hours).

---

## Swapping in Real Photos

All images are defined in one file:

```
src/lib/images.ts
```

Each image has a named constant. To replace a placeholder with a real photo:

1. Add your photo to `public/images/` (e.g., `public/images/hero-home.jpg`)
2. In `src/lib/images.ts`, change the URL for that key:

```ts
// Before
home: `${BASE}/photo-1488646953014-85cb44e25828?w=1920&q=85&auto=format&fit=crop`,

// After
home: '/images/hero-home.jpg',
```

No other code changes needed.

---

## Adding Blog Posts

Blog post content lives in `src/app/blog/[slug]/page.tsx` in the `POSTS` object.

To add a new post, add a new key to the `POSTS` object following the existing pattern:

```ts
'your-post-slug': {
  title: 'Your Post Title',
  tag: 'Japan · Tokyo',
  date: 'April 2026',
  readTime: '8 min read',
  headerImage: IMAGES.blog.yourImageKey,
  intro: 'One-sentence hook.',
  body: [
    'First paragraph...',
    'Second paragraph...',
  ],
  youtubeId: null, // or 'dQw4w9WgXcQ' to embed a video
},
```

Then add the post to the `POSTS` array in `src/app/blog/page.tsx` so it appears in the grid.

---

## Environment

- Node.js 18+
- Next.js 14.2.5
- Tailwind CSS 3.4
- TypeScript 5
