'use client'

import { useEffect, useRef } from 'react'

// ─── Amazon storefront link ─────────────────────────────────────────────────
const AMAZON_STOREFRONT =
  'https://www.amazon.com/shop/rachelthomaslife?linkCode=sl2&tag=rachelthoma04-20&linkId=6d7010690795e1ac33ff71a40e747fff&language=en_US&ref_=as_li_ss_tl&ccs_id=9b297963-3cef-4072-9ded-f5fea93d6fef'

// ─── Category data ──────────────────────────────────────────────────────────

const CATEGORIES = [
  { id: 'luggage', label: 'Luggage & Bags' },
  { id: 'tech', label: 'Travel Tech & Cameras' },
  { id: 'packing', label: 'Packing & Organization' },
  { id: 'clothing', label: 'Clothing & Shoes' },
  { id: 'beauty', label: 'Beauty & Toiletries' },
  { id: 'books', label: 'Books & Guides' },
  { id: 'home', label: 'Home & Kitchen' },
]

type Product = {
  emoji: string
  brand: string
  name: string
  note: string
}

type CategorySection = {
  id: string
  heading: string
  intro: string
  products: Product[]
}

const SECTIONS: CategorySection[] = [
  {
    id: 'luggage',
    heading: 'Luggage & Bags',
    intro: "We've tested more bags than we can count. These are the ones that actually survived.",
    products: [
      {
        emoji: '🧳',
        brand: 'Away',
        name: 'Carry-On Suitcase 40L',
        note: "This fits under more airplane seats than anything else we've tested. We've run it through 14 countries and the zipper still works perfectly. The built-in battery is a bonus we didn't know we needed until we were stuck in a Tokyo airport.",
      },
      {
        emoji: '🎒',
        brand: 'Osprey',
        name: 'Travel Backpack 28L',
        note: "Worn on overnight trains from Kyoto to Osaka, stuffed into overhead bins that don't fit it, and still looks presentable. The hip belt tucks away completely so it doesn't look like hiking gear when you're in a restaurant.",
      },
      {
        emoji: '👜',
        brand: 'Baggu',
        name: 'Packable Tote Bag',
        note: "Folds completely flat when empty — takes up zero space. We use it for market days, beach days, days when we bought more than we planned at a convenience store. Worth the $15 every single trip.",
      },
      {
        emoji: '📦',
        brand: 'Eagle Creek',
        name: 'Packing Cubes Set',
        note: "The compression straps actually work. Not 'technically works' — actually compresses things down enough that you feel it. Six weeks in Japan in a carry-on and these are the reason it was possible.",
      },
    ],
  },
  {
    id: 'tech',
    heading: 'Travel Tech & Cameras',
    intro: "Our full creator kit. Everything we use to film and stay connected — tested in Osaka neon and Amsterdam overcast.",
    products: [
      {
        emoji: '📷',
        brand: 'DJI',
        name: 'Osmo Pocket 3',
        note: "Stabilization is genuinely wild. We filmed an entire walking tour through a crowded Dotonbori street market at 9pm and the footage was smooth. Pocket-sized, battery lasts a full day of light shooting.",
      },
      {
        emoji: '🎬',
        brand: 'DJI',
        name: 'Action 4',
        note: "Waterproof, magnetic mount, horizon lock even when we're turning corners on a scooter in Chiang Mai. The thing we reach for when we don't know what the day is going to throw at us.",
      },
      {
        emoji: '📸',
        brand: 'Sony',
        name: 'RX100 VII',
        note: "Our main camera for the past two years. Fits in a jacket pocket, produces images that look like they came from something three times the size. The zoom on this thing in low-light Tokyo situations is unreasonable.",
      },
      {
        emoji: '🔋',
        brand: 'Anker',
        name: 'Portable Power Bank 26800mAh',
        note: "Charged two phones and a camera on a 13-hour flight to Tokyo with charge to spare. The size is worth it. Don't get a smaller one and then regret it in hour 8 of a layover.",
      },
      {
        emoji: '🔌',
        brand: 'Epicka',
        name: 'Universal Travel Adapter',
        note: "Covers every outlet we've encountered across Europe and Asia without issue. Four USB-A ports plus USB-C. One adapter for two people is perfectly fine. Two is probably overkill.",
      },
      {
        emoji: '💡',
        brand: 'Lume Cube',
        name: 'Portable LED Light Panel',
        note: "For filming in dim interiors and late evenings — Airbnb kitchens, restaurants, trains. Magnetic mount works on anything metal. Rachel uses it for calls too. Small enough that we stopped noticing it's in the bag.",
      },
    ],
  },
  {
    id: 'packing',
    heading: 'Packing & Organization',
    intro: "The difference between a chaotic bag and a functional one is usually just a few of these.",
    products: [
      {
        emoji: '🗜️',
        brand: 'Eagle Creek',
        name: 'Compression Packing Cubes',
        note: "Not all packing cubes are equal. These compress down by about a third — we tested it before Japan and it's the real reason we made it work with a carry-on for six weeks.",
      },
      {
        emoji: '🪣',
        brand: 'Bagsmart',
        name: 'Hanging Toiletry Bag',
        note: "Hooks on any towel bar, any shower curtain rod, the back of a door. Completely open when hanging — you can see everything without digging. This is the toiletry bag we recommend to literally everyone who asks.",
      },
      {
        emoji: '💨',
        brand: 'Ziploc',
        name: 'Space Bag Compression Set',
        note: "For longer trips where you need to bring bulkier items — these squeeze the air out without a vacuum and stay compressed for a surprisingly long time. Good for sweaters and jackets.",
      },
      {
        emoji: '🔌',
        brand: 'Anker',
        name: 'Cable Organizer Case',
        note: "Every cable in one place. No more untangling a mess of chargers at 6am before a flight. Goes through airport security as one zip pouch instead of six things falling out of your bag.",
      },
      {
        emoji: '📋',
        brand: 'Zoppen',
        name: 'RFID Travel Wallet',
        note: "Holds passport, multiple currencies, cards, and a pen. RFID blocking matters more than we thought — we've been in enough crowded tourist areas that we stopped thinking of it as optional.",
      },
    ],
  },
  {
    id: 'clothing',
    heading: 'Clothing & Shoes',
    intro: "We pack light, so every piece has to earn its spot. These all did.",
    products: [
      {
        emoji: '👟',
        brand: 'Birkenstock',
        name: 'Arizona Sandals',
        note: "Walk-around shoes that are comfortable by day three without breaking in. Rachel wears these for markets, beach days, casual evenings. They pack flat and go with everything. We've been through three pairs between us.",
      },
      {
        emoji: '👟',
        brand: 'New Balance',
        name: '990v5 Sneakers',
        note: "The one pair of sneakers that works for a full 20,000-step day in Tokyo and also looks fine at a nice dinner. We both have them. Both still in rotation after two years.",
      },
      {
        emoji: '☁️',
        brand: 'On Running',
        name: 'Cloud X Shoes',
        note: "Lighter than New Balance, more comfortable for walking tours. What Christian usually wears when we're doing a lot of ground to cover in a single day. They fit into a carry-on without taking over the bag.",
      },
      {
        emoji: '👖',
        brand: 'Bluffworks',
        name: 'Wrinkle-Resistant Travel Pants',
        note: "Pull these out of a packed bag after 14 hours and they look fine. Not almost fine — fine. The only pants Christian brings on most trips. Multiple colors make packing decisions easier.",
      },
      {
        emoji: '🧥',
        brand: 'Patagonia',
        name: 'Packable Down Rain Jacket',
        note: "Compresses to the size of a large grapefruit. Works as a light rain shell and a layer under heavier coats. We've brought this to every climate across Europe and Asia and it's never not come in useful.",
      },
    ],
  },
  {
    id: 'beauty',
    heading: 'Beauty & Toiletries',
    intro: "Full-size where it matters, travel-size where we can. Here's our actual routine.",
    products: [
      {
        emoji: '🧴',
        brand: 'HiBar',
        name: 'Shampoo & Conditioner Bars',
        note: "TSA-proof entirely. No liquid limits, no leak risk, no half-empty bottles taking up space. One bar lasts about as long as a full-size bottle. Rachel's hair is thick and long — these work.",
      },
      {
        emoji: '☀️',
        brand: 'EltaMD',
        name: 'SPF 46 Tinted Moisturizer',
        note: "SPF and coverage in one step. Thailand, Vietnam, Japan — the SPF wasn't optional. This replaces two products and takes up less space than either one.",
      },
      {
        emoji: '✨',
        brand: 'Tatcha',
        name: 'Travel Skincare Set',
        note: "The travel sizes are actually useful quantities — not sample sizes that run out in three days. Rachel does a full trip with these and doesn't need to buy anything abroad. Worth the investment per trip.",
      },
      {
        emoji: '💇',
        brand: "Not Your Mother's",
        name: 'Dry Shampoo',
        note: "For the days between washes on long travel days, overnight trains, or when the Airbnb water pressure is a complete mystery. This is the one that actually works instead of leaving a white cast.",
      },
      {
        emoji: '♻️',
        brand: 'Makeup Eraser',
        name: 'Reusable Makeup Remover Pads',
        note: "We brought disposable wipes on our first long trip. Never again. These last a full month abroad without needing replacements, rinse clean in seconds, and take up almost zero space.",
      },
    ],
  },
  {
    id: 'books',
    heading: 'Books & Guides',
    intro: "What's on our Kindle right now. And a few that genuinely changed how we travel.",
    products: [
      {
        emoji: '📖',
        brand: 'Pico Iyer',
        name: 'The Art of Stillness',
        note: "Read this on a bullet train from Tokyo to Kyoto and it landed completely differently than it would have at home. A short book about travel and presence that we've both recommended to people who don't usually read about either.",
      },
      {
        emoji: '📷',
        brand: 'Konrad Richter',
        name: 'Photography for Travelers',
        note: "The actual guide to getting better travel photos — not gear reviews, but how to see differently in places you've never been. Christian read this before Japan. The footage improved noticeably.",
      },
      {
        emoji: '🗺️',
        brand: 'Lonely Planet',
        name: 'Southeast Asia on a Shoestring',
        note: "We don't use it like a shoestring guide — we use it as a reference for context, history, and the things worth knowing before you arrive somewhere. Still the most comprehensive regional overview we've found.",
      },
      {
        emoji: '🗣️',
        brand: 'Tuttle Publishing',
        name: 'Japanese for Travelers Phrasebook',
        note: "The Japanese script in this one is phonetic enough to actually use in the moment. We're not fluent. But 'sumimasen' and a phrasebook gets you further than you think in most situations outside Tokyo.",
      },
    ],
  },
  {
    id: 'home',
    heading: 'Home & Kitchen for Nomads',
    intro: "When your Airbnb is missing something, these save the day.",
    products: [
      {
        emoji: '🫖',
        brand: 'Gourmia',
        name: 'Travel Electric Kettle',
        note: "The number of Airbnbs with no kettle is genuinely surprising. This fixes that. Auto voltage switching means it works everywhere without an adapter. Small enough to tuck into a side pocket.",
      },
      {
        emoji: '☕',
        brand: 'Hario',
        name: 'Portable Pour-Over Coffee Kit',
        note: "We are coffee people. This is non-negotiable. The kit is the size of a water bottle, makes genuinely excellent coffee, and we've used it in Airbnb kitchens across three continents. Morning routine solved.",
      },
      {
        emoji: '🍴',
        brand: 'To-Go Ware',
        name: 'Reusable Utensil Set',
        note: "Compact bamboo set — chopsticks, fork, knife, spoon, straw, cleaning brush. Useful more than we expected, particularly in Southeast Asia where takeaway is just how life works.",
      },
      {
        emoji: '📦',
        brand: 'Stasher',
        name: 'Collapsible Silicone Food Containers',
        note: "For leftovers, for market snacks, for the thing you bought at a convenience store that you're not going to eat yet. They collapse flat when empty. We bring three on every long trip.",
      },
      {
        emoji: '😴',
        brand: 'Manta',
        name: 'Sleep Mask & White Noise Machine',
        note: "The white noise machine saved us in Bangkok where the street noise never fully stops. The sleep mask is the best-fitting one we've tried — contoured so it doesn't touch your eyes. Long-stay sanity preserved.",
      },
    ],
  },
]

// ─── Product Card ───────────────────────────────────────────────────────────

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white border border-divider card-hover group flex flex-col">
      {/* Image placeholder */}
      <div className="aspect-square bg-beige flex items-center justify-center text-5xl">
        {product.emoji}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="font-jost text-[9px] font-medium tracking-[0.2em] uppercase text-muted mb-1">
          {product.brand}
        </div>
        <h3 className="font-playfair font-bold text-base text-brand-black mb-3 leading-tight">
          {product.name}
        </h3>

        {/* "Why we love it" note */}
        <div className="bg-gold-pale border-l-2 border-gold px-4 py-3 mb-4 flex-1">
          <p className="font-jost text-[12px] font-light italic text-charcoal leading-relaxed">
            {product.note}
          </p>
        </div>

        <a
          href={AMAZON_STOREFRONT}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block text-center bg-brand-black text-white font-jost text-[10px] font-medium tracking-[0.18em] uppercase py-3 hover:bg-gold transition-colors duration-200 mt-auto"
        >
          Shop on Amazon →
        </a>
      </div>
    </div>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function ShopPage() {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  const scrollToCategory = (id: string) => {
    const el = sectionRefs.current[id]
    if (el) {
      const offset = 140 // nav + sticky bar
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* ── HEADER ───────────────────────────────────────────────────────── */}
      <section className="bg-brand-black pt-32 pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-4">
            Amazon Storefront
          </p>
          <h1 className="font-playfair font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-6">
            Shop Our Favorites
          </h1>
          <p className="font-jost font-light text-base lg:text-lg text-white/65 max-w-xl leading-relaxed mb-8">
            Everything we actually travel with. Tested across countries we can barely keep track of at this point.
          </p>
          <a
            href={AMAZON_STOREFRONT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-white font-jost text-[11px] font-medium tracking-[0.18em] uppercase px-6 py-3.5 hover:bg-gold-light transition-colors"
          >
            Browse Our Full Amazon Storefront →
          </a>
        </div>
      </section>

      {/* ── STICKY CATEGORY NAV ──────────────────────────────────────────── */}
      <div className="sticky top-16 lg:top-20 z-30 bg-off-white border-b border-divider shadow-sm">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex gap-0 overflow-x-auto hide-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className="shrink-0 font-jost text-[10px] font-medium tracking-[0.12em] uppercase px-4 py-4 text-muted hover:text-brand-black hover:border-b-2 hover:border-gold transition-all duration-150 whitespace-nowrap"
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── PRODUCT SECTIONS ─────────────────────────────────────────────── */}
      {SECTIONS.map((section, i) => (
        <section
          key={section.id}
          id={section.id}
          ref={(el) => { sectionRefs.current[section.id] = el }}
          className={i % 2 === 1 ? 'bg-beige' : 'bg-off-white'}
        >
          <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14 lg:py-20">
            {/* Section header */}
            <div className="mb-10">
              <p className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-3">
                {CATEGORIES.find((c) => c.id === section.id)?.label}
              </p>
              <h2 className="font-playfair font-bold text-3xl text-brand-black mb-3 tracking-tight">
                {section.heading}
              </h2>
              <p className="font-jost font-light text-base text-muted leading-relaxed max-w-xl">
                {section.intro}
              </p>
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {section.products.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── AMAZON CTA ───────────────────────────────────────────────────── */}
      <section className="bg-brand-black">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 py-16 text-center">
          <h2 className="font-playfair font-bold text-3xl text-white mb-5 tracking-tight">
            See the full storefront on Amazon.
          </h2>
          <p className="font-jost font-light text-base text-white/60 mb-8 leading-relaxed">
            We add new things as we test them. Everything stays until it stops earning its spot.
          </p>
          <a
            href={AMAZON_STOREFRONT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-white font-jost text-[11px] font-medium tracking-[0.18em] uppercase px-8 py-4 hover:bg-gold-light transition-colors"
          >
            Browse the Full Storefront →
          </a>
        </div>
      </section>
    </>
  )
}
