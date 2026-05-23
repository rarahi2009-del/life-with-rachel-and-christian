'use client'

import { useState } from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

// ISO 3166-1 numeric codes — update this list to add/remove visited countries
const VISITED = new Set([
  // Africa
  '288', // Ghana
  // Asia
  '392', // Japan
  '410', // South Korea
  '792', // Türkiye
  '704', // Vietnam
  // Europe
  '008', // Albania
  '056', // Belgium
  '250', // France
  '276', // Germany
  '300', // Greece
  '352', // Iceland
  '372', // Ireland
  '380', // Italy
  '470', // Malta
  '492', // Monaco
  '528', // Netherlands
  '724', // Spain
  '756', // Switzerland
  '826', // United Kingdom (England & Scotland)
  '336', // Vatican City
  // North America & Caribbean
  '044', // Bahamas
  '084', // Belize
  '124', // Canada
  '188', // Costa Rica
  '214', // Dominican Republic
  '340', // Honduras
  '388', // Jamaica
  '484', // Mexico
  '662', // St. Lucia
  '840', // United States
  // Oceania
  '036', // Australia
  '554', // New Zealand
  // South America
  '170', // Colombia
])

type TooltipState = { name: string; visited: boolean } | null

export default function WorldMap() {
  const [tooltip, setTooltip] = useState<TooltipState>(null)

  const show = (name: string, visited: boolean) => setTooltip({ name, visited })
  const hide = () => setTooltip(null)

  return (
    <div className="w-full select-none">
      <ComposableMap
        projectionConfig={{ scale: 153, center: [15, 20] }}
        style={{ width: '100%', height: 'auto' }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const visited = VISITED.has(String(geo.id))
              const name: string = geo.properties.name
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={visited ? '#C9A84C' : '#DDD6CC'}
                  stroke="#ffffff"
                  strokeWidth={0.5}
                  onMouseEnter={() => show(name, visited)}
                  onMouseLeave={hide}
                  onClick={() =>
                    tooltip?.name === name ? hide() : show(name, visited)
                  }
                  style={{
                    default: { outline: 'none', cursor: 'pointer' },
                    hover:   { outline: 'none', fill: visited ? '#B8963E' : '#C5BAB0' },
                    pressed: { outline: 'none' },
                  }}
                />
              )
            })
          }
        </Geographies>
      </ComposableMap>

      {/* Label bar — fixed height so layout doesn't shift */}
      <div className="h-10 flex items-center justify-center mt-1">
        {tooltip ? (
          <span className="inline-flex items-center gap-2.5 font-jost text-sm text-brand-black">
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ backgroundColor: tooltip.visited ? '#C9A84C' : '#9E9185' }}
            />
            {tooltip.name}
            {tooltip.visited && (
              <span className="font-jost text-[10px] font-medium tracking-[0.15em] uppercase text-gold">
                · Visited
              </span>
            )}
          </span>
        ) : (
          <p className="font-jost text-[10px] text-muted tracking-wide">
            Hover or tap any country · Gold = visited
          </p>
        )}
      </div>
    </div>
  )
}
