'use client'

import { useRef } from 'react'
import Image from 'next/image'

const AMAZON_STOREFRONT = 'https://a.co/d/0iQsOraW'

const CATEGORIES = [
  { id: 'luggage', label: 'Luggage & Bags' },
  { id: 'tech', label: 'Travel Tech & Cameras' },
  { id: 'clothing', label: 'Clothing & Shoes' },
]

type Product = {
  image: string
  brand: string
  name: string
  note: string
  href: string
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
        image: '/images/amazon/away-carryon-40l.jpg',
        brand: 'Away',
        name: 'Carry-On Suitcase 40L',
        note: "This is Rachel's main luggage. The wheels make moving days a breeze and the hard shell allows you to really compress your stuff.",
        href: 'https://amzn.to/49ZhdTV',
      },
      {
        image: '/images/amazon/away-softside.jpg',
        brand: 'Away',
        name: 'Soft Side Bigger Carry-On',
        note: "This is Christian's primary luggage. It's a bit bigger and expandable which allows for more stuff. It also opens from the top which means you don't need as much space to get in and out of your luggage.",
        href: 'https://amzn.to/4uZAxZj',
      },
      {
        image: '/images/amazon/cotopaxi-35l.jpg',
        brand: 'Cotopaxi',
        name: 'Allpa 35L Travel Pack',
        note: "Perfect for a carry-on size backpack. The pockets inside allow for excellent organization and the zippers will last forever.",
        href: 'https://amzn.to/4wMwMIm',
      },
      {
        image: '/images/amazon/cotopaxi-28l.jpg',
        brand: 'Cotopaxi',
        name: 'Allpa 28L Travel Pack',
        note: "Perfect for a personal item size backpack — same as the 35 but smaller. This is Rachel's primary backpack.",
        href: 'https://amzn.to/4dDWnL7',
      },
      {
        image: '/images/amazon/nanobag-tote.jpg',
        brand: 'Nanobag',
        name: 'Foldable Tote Bag',
        note: "Shopping trips are so much easier with a collapsible tote bag. You don't have to worry about paying for bags or your bag breaking on you.",
        href: 'https://amzn.to/4nLeYcx',
      },
      {
        image: '/images/amazon/aerotrunk-cubes.jpg',
        brand: 'Aerotrunk',
        name: 'Compression Packing Cubes',
        note: "A wonderful dupe for the Monos packing cubes — also one of our favorites. Strong zippers, and when you pair them with loop zipper pulls you can really get anything compressed.",
        href: 'https://amzn.to/42TlLYh',
      },
    ],
  },
  {
    id: 'tech',
    heading: 'Travel Tech & Cameras',
    intro: "Our full creator kit — everything we use to film and stay connected, tested across three continents.",
    products: [
      {
        image: '/images/amazon/dji-osmo-pocket3.jpg',
        brand: 'DJI',
        name: 'Osmo Pocket 3',
        note: "Our most-used camera for YouTube. The gimbal allows for extra stable shots and excellent quality. Perfect if you just want to turn it on and go.",
        href: 'https://amzn.to/4nSFIYY',
      },
      {
        image: '/images/amazon/dji-action4.jpg',
        brand: 'DJI',
        name: 'Action 4',
        note: "One of our top 2 most-used cameras. If you're even thinking about going near water or are rough on cameras, check out the DJI Action cameras.",
        href: 'https://amzn.to/3PVmTrq',
      },
      {
        image: '/images/amazon/sony-rx100.jpg',
        brand: 'Sony',
        name: 'RX100 VII',
        note: "Our go-to photography camera. We chose the VII because it has an amazing zoom to capture far-away things and still films in 4K.",
        href: 'https://amzn.to/3RgIbjL',
      },
      {
        image: '/images/amazon/anker-powerbank.jpg',
        brand: 'Anker',
        name: 'Portable Power Bank 26250mAh',
        note: "Pricey but Anker is the best for a reason. This charger will power any device including a MacBook — giving us the flexibility to work wherever we want (cough cough, the beach).",
        href: 'https://amzn.to/43b7SoB',
      },
      {
        image: '/images/amazon/epicka-adapter.jpg',
        brand: 'Epicka',
        name: 'Universal Travel Adapter',
        note: "Covers every outlet we've encountered across Europe and Asia without issue. One adapter for two people is perfectly fine.",
        href: 'https://amzn.to/4dZWvFX',
      },
      {
        image: '/images/amazon/raleno-panel.jpg',
        brand: 'Raleno',
        name: '9" LED Panel Light',
        note: "The best lightweight, easy-to-pack filming light for hotel rooms or Airbnbs without enough light, or when the sun goes away.",
        href: 'https://amzn.to/4wSyNTJ',
      },
    ],
  },
  {
    id: 'clothing',
    heading: 'Clothing & Shoes',
    intro: "We pack light, so every pair of shoes has to earn its spot. These all did.",
    products: [
      {
        image: '/images/amazon/birkenstock.jpg',
        brand: 'Birkenstock',
        name: 'Arizona Sandals',
        note: "Leather Birkenstocks can last a lifetime and are the perfect traveler's sandal. Rachel also loves the Birko-Flor style — more comfortable from the jump. We both have a pair.",
        href: 'https://amzn.to/3RgIFX7',
      },
      {
        image: '/images/amazon/newbalance-530.jpg',
        brand: 'New Balance',
        name: '530 Sneakers',
        note: "Rachel's everyday walking shoes. These can handle it all and are perfect for wider feet. Also great for strength days at the gym.",
        href: 'https://amzn.to/4ulI5Wu',
      },
      {
        image: '/images/amazon/on-cloudrunner2.jpg',
        brand: 'On Running',
        name: 'Cloudrunner 2',
        note: "Rachel's favorite running shoe. If you run often, proper running shoes matter — these are the ones she trusts to avoid injury.",
        href: 'https://amzn.to/4o4az4Z',
      },
      {
        image: '/images/amazon/nike-p6000.jpg',
        brand: 'Nike',
        name: 'P-6000 Sneakers',
        note: "Christian only carries 2 pairs of shoes and these are one of them. Perfect for the gym, running, or a 20K-step day walking around the city.",
        href: 'https://amzn.to/49N04gc',
      },
    ],
  },
]

// ─── Product Card ───────────────────────────────────────────────────────────

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white border border-divider card-hover group flex flex-col">
      <div className="aspect-square bg-white flex items-center justify-center p-3">
        <div className="relative w-full h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="font-jost text-[9px] font-medium tracking-[0.2em] uppercase text-muted mb-1">
          {product.brand}
        </div>
        <h3 className="font-playfair font-bold text-base text-brand-black mb-3 leading-tight">
          {product.name}
        </h3>

        <div className="bg-gold-pale border-l-2 border-gold px-4 py-3 mb-4 flex-1">
          <p className="font-jost text-[12px] font-light italic text-charcoal leading-relaxed">
            {product.note}
          </p>
        </div>

        <a
          href={product.href}
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
      const offset = 140
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
            Our Favorites
          </p>
          <h1 className="font-playfair font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-6">
            Shop Our Picks
          </h1>
          <p className="font-jost font-light text-base lg:text-lg text-white/65 max-w-xl leading-relaxed mb-6">
            Everything we actually travel with. Tested across countries we can barely keep track of at this point.
          </p>
          <div className="bg-white/10 border border-white/20 px-5 py-4 inline-flex flex-wrap items-center gap-4 mb-2">
            <p className="font-jost text-sm text-white/80">
              Want the full list of our travel recommendations?
            </p>
            <a
              href={AMAZON_STOREFRONT}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-gold text-white font-jost text-[10px] font-medium tracking-[0.18em] uppercase px-5 py-2.5 hover:bg-gold-light transition-colors"
            >
              Visit Our Amazon Storefront →
            </a>
          </div>
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

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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
