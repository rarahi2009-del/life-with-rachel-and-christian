'use client'

import { useState } from 'react'

type Brand = {
  name: string
  logo?: string
  category: string
  description: string
  code?: string
  codeLabel?: string
  href: string
}

export default function BrandCard({ brand }: { brand: Brand }) {
  const [logoFailed, setLogoFailed] = useState(false)

  return (
    <div className="bg-white border border-divider flex flex-col card-hover group">
      {/* Logo area */}
      <div className="h-24 bg-white border-b border-divider overflow-hidden">
        {brand.logo && !logoFailed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={brand.logo}
            alt={brand.name}
            className="w-full h-full object-cover"
            onError={() => setLogoFailed(true)}
          />
        ) : (
          <div className="w-full h-full bg-beige flex items-center justify-center">
            <span className="font-playfair font-bold text-xl text-brand-black">
              {brand.name}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="font-jost text-[9px] font-medium tracking-[0.2em] uppercase text-gold mb-1">
          {brand.category}
        </div>
        <h3 className="font-playfair font-bold text-lg text-brand-black mb-3 leading-tight">
          {brand.name}
        </h3>
        <p className="font-jost text-[13px] font-light text-muted leading-relaxed mb-4 flex-1">
          {brand.description}
        </p>

        {brand.code && (
          <div className="bg-gold-pale border-l-2 border-gold px-3 py-2 mb-4">
            <p className="font-jost text-[10px] font-medium tracking-[0.15em] uppercase text-gold mb-0.5">
              {brand.codeLabel}
            </p>
            <p className="font-jost font-medium text-sm text-brand-black tracking-widest">
              {brand.code}
            </p>
          </div>
        )}

        <a
          href={brand.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block text-center bg-brand-black text-white font-jost text-[10px] font-medium tracking-[0.18em] uppercase py-3 hover:bg-gold transition-colors duration-200 mt-auto"
        >
          Learn More →
        </a>
      </div>
    </div>
  )
}
