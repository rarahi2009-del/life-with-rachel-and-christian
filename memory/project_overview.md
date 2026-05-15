---
name: project-overview
description: Tech stack, design system, and site structure for Life With Rachel and Christian website
metadata:
  type: project
---

Next.js 14 App Router site deployed at lifewithrachelandchristian.com. Tailwind CSS with custom design tokens (gold, beige, brand-black, off-white, muted, divider). Fonts: Playfair Display (headings) + Jost (body). Notion CMS for blog posts via @notionhq/client.

Pages: home, about, blog, videos, group-trips, shop, work-with-us, contact.

**Why:** Travel brand / content creator site for Rachel and Christian Thomas, digital nomad couple.
**How to apply:** Match existing design tokens and component patterns when adding new pages. No component library — pure Tailwind. Images live in /public/images/ and are referenced via src/lib/images.ts.
