import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'off-white': '#FAF9F7',
        'beige': '#F4F0E8',
        'light-beige': '#EDE8DC',
        'brand-black': '#0A0A0A',
        'charcoal': '#2A2A2A',
        'muted': '#888070',
        'gold': '#B8912A',
        'gold-light': '#D4A843',
        'gold-pale': '#F5EDD6',
        'divider': '#E8E2D6',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        jost: ['var(--font-jost)', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease forwards',
        'marquee': 'marquee 35s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
