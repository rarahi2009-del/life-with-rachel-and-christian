'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/videos', label: 'Videos' },
  { href: '/group-trips', label: 'Group Trips' },
  { href: '/shop', label: 'Shop' },
  { href: '/work-with-us', label: 'Work With Us' },
]

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      {/* Main nav bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-off-white shadow-sm border-b border-divider'
            : 'bg-off-white/96 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link
              href="/"
              className="font-playfair font-black text-sm lg:text-base tracking-tight text-brand-black leading-tight shrink-0"
              onClick={() => setMenuOpen(false)}
            >
              Life With Rachel<br />and Christian
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-7 xl:gap-9">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-jost text-[11px] font-medium tracking-[0.2em] uppercase text-brand-black hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop right side */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href="https://www.patreon.com/c/LifewithRachelandChristian"
                target="_blank"
                rel="noopener noreferrer"
                className="font-jost text-[11px] font-medium tracking-[0.2em] uppercase text-muted hover:text-gold transition-colors duration-200"
              >
                Patreon
              </a>
              <Link
                href="/group-trips"
                className="bg-gold text-white font-jost text-[11px] font-medium tracking-[0.18em] uppercase px-5 py-3 hover:bg-gold-light transition-colors duration-200"
              >
                Join the Waitlist
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col justify-center gap-[5px] p-2 -mr-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span
                className={`block w-6 h-[1.5px] bg-brand-black origin-center transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''
                }`}
              />
              <span
                className={`block w-6 h-[1.5px] bg-brand-black transition-all duration-300 ${
                  menuOpen ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-[1.5px] bg-brand-black origin-center transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <div
        className={`fixed inset-0 z-40 bg-brand-black flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-playfair font-bold text-3xl text-white hover:text-gold transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-10 pt-8 border-t border-white/15 flex flex-col items-center gap-4 w-56">
          <a
            href="https://www.patreon.com/c/LifewithRachelandChristian"
            target="_blank"
            rel="noopener noreferrer"
            className="font-jost text-[11px] font-medium tracking-[0.2em] uppercase text-muted hover:text-gold transition-colors"
          >
            Patreon
          </a>
          <Link
            href="/group-trips"
            onClick={() => setMenuOpen(false)}
            className="w-full text-center bg-gold text-white font-jost text-[11px] font-medium tracking-[0.18em] uppercase px-5 py-3 hover:bg-gold-light transition-colors"
          >
            Join the Waitlist
          </Link>
        </div>
      </div>
    </>
  )
}
