---
name: project-thailand-trip
description: Stripe-powered Thailand group trip signup page at /group-trips/thailand
metadata:
  type: project
---

Built a full trip signup page at `/src/app/group-trips/thailand/page.tsx` for "Thailand Reset" Nov 6–13, 2026 ($1,700 early bird / $1,900 regular, $475 deposit). Stripe Checkout (hosted) handles payment via `/src/app/api/checkout/route.ts`. Success page at `/group-trips/thailand/success`.

**Setup required before going live:**
1. Create Stripe account → get secret key and publishable key
2. Create a Product in Stripe for the $475 Thailand deposit → get the Price ID
3. Add to `.env.local`: `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `NEXT_PUBLIC_STRIPE_THAILAND_PRICE_ID`

**Why:** User wanted a trip info + payment page modeled on their Trova Trip listing but hosted on their own site with direct Stripe payment collection.
**How to apply:** Use the same Stripe pattern (API route → Checkout Session → redirect) for future trip pages. [[project-overview]]
