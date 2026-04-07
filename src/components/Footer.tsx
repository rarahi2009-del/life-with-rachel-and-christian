import Link from 'next/link'

const NAV_COL_1 = [
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'The Blog' },
  { href: '/videos', label: 'Videos' },
  { href: '/group-trips', label: 'Group Trips' },
]

const NAV_COL_2 = [
  { href: '/shop', label: 'Shop Our Favorites' },
  { href: '/work-with-us', label: 'Work With Us' },
  { href: '/contact', label: 'Contact' },
  {
    href: 'https://www.patreon.com/c/LifewithRachelandChristian',
    label: 'Patreon',
    external: true,
  },
]

// SVG social icons
function YouTubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6a3 3 0 0 0-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.2 4.8 1.7 5 5 .1 1.3.1 1.6.1 4.8 0 3.2 0 3.6-.1 4.8-.2 3.3-1.7 4.8-5 5-1.3.1-1.6.1-4.9.1-3.2 0-3.6 0-4.8-.1-3.3-.2-4.8-1.7-5-5C2.1 15.6 2 15.2 2 12c0-3.2 0-3.6.1-4.8.2-3.3 1.7-4.8 5-5C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1 0 8.3 0 8.7 0 12c0 3.3 0 3.7.1 4.9.2 4.4 2.6 6.8 7 7C8.3 24 8.7 24 12 24c3.3 0 3.7 0 4.9-.1 4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9 0-3.3 0-3.7-.1-4.9C23.7 2.7 21.3.3 16.9.1 15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.6 3.3A4.5 4.5 0 0 1 15.2 0h-3.3v16.4a2.7 2.7 0 0 1-2.7 2.3 2.7 2.7 0 0 1-2.7-2.7 2.7 2.7 0 0 1 2.7-2.7c.3 0 .5 0 .8.1V9.9a6 6 0 0 0-.8-.1A6.1 6.1 0 0 0 3.1 16a6.1 6.1 0 0 0 6.1 6 6.1 6.1 0 0 0 6.1-6.1V8.2a7.8 7.8 0 0 0 4.6 1.5V6.3a4.5 4.5 0 0 1-4.5-3z" />
    </svg>
  )
}

function PatreonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M15 2c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zM2 22h3V2H2v20z" />
    </svg>
  )
}

function AmazonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.049.525.13.12.174.09.336-.12.465a16.9 16.9 0 0 1-2.48 1.29c-1.65.66-3.38 1.03-5.19 1.11-1.83.08-3.64-.03-5.43-.34-2.44-.43-4.72-1.26-6.84-2.49-.23-.13-.35-.28-.37-.46-.015-.195.06-.34.24-.435zM6.3 13.8c.11-.6.36-1.07.76-1.41.4-.34.92-.51 1.55-.51.29 0 .59.04.9.11.31.07.59.16.84.27.25.11.42.22.51.33.1.12.12.26.07.44-.05.18-.13.36-.24.54-.11.18-.22.3-.32.35-.1.05-.2.04-.3-.04-.36-.26-.77-.39-1.24-.39-.52 0-.88.14-1.08.42-.2.28-.3.6-.3.96 0 .36.08.68.25.95.17.27.46.41.88.41.34 0 .64-.08.9-.25.26-.17.46-.38.6-.63.1-.18.23-.28.38-.3.15-.02.3.04.45.18.15.14.22.3.22.48 0 .18-.07.36-.22.54-.52.66-1.25.99-2.19.99-.72 0-1.3-.19-1.72-.57-.42-.38-.67-.87-.74-1.47-.07-.6-.03-1.18.1-1.74zm12.7-2.5c-.44-.3-.96-.45-1.56-.45-.61 0-1.14.15-1.6.45-.46.3-.82.7-1.08 1.2-.26.5-.39 1.04-.39 1.62 0 .58.13 1.12.39 1.62.26.5.62.9 1.08 1.2.46.3.99.45 1.6.45.61 0 1.14-.15 1.6-.45.46-.3.82-.7 1.08-1.2.26-.5.39-1.04.39-1.62 0-.58-.13-1.12-.39-1.62-.26-.5-.62-.9-1.12-1.2zm-.54 3.9c-.14.27-.33.48-.57.63-.24.15-.51.22-.83.22-.31 0-.58-.07-.82-.22-.24-.15-.43-.36-.57-.63-.14-.27-.21-.57-.21-.9s.07-.63.21-.9c.14-.27.33-.48.57-.63.24-.15.51-.22.82-.22.32 0 .59.07.83.22.24.15.43.36.57.63.14.27.21.57.21.9s-.07.63-.21.9zM24 14.7c0 .4-.1.75-.29 1.05-.19.3-.46.54-.79.71-.33.17-.69.26-1.07.26-.56 0-1.01-.17-1.35-.5-.34-.33-.55-.78-.63-1.35l-.01-.14c-.02-.18-.03-.37-.03-.57v-6.3h1.4v6.15c0 .25.04.45.11.6.07.15.19.22.36.22.12 0 .22-.03.32-.09l.08-.06c.14-.1.27-.1.4 0 .13.1.19.24.19.42v.02z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Brand column */}
          <div>
            <div className="font-playfair font-black text-xl text-white leading-tight mb-3">
              Life With Rachel<br />and Christian
            </div>
            <p className="font-jost text-sm font-light text-white/50 mb-7 leading-relaxed">
              Real people. Real travel.<br />No retirement required.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-5">
              <a
                href="https://www.youtube.com/@LifewithRachelandChristian"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-gold transition-colors duration-200"
                aria-label="YouTube"
              >
                <YouTubeIcon />
              </a>
              <a
                href="https://www.instagram.com/rachelthomaslife"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-gold transition-colors duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.tiktok.com/@rachelthomaslife"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-gold transition-colors duration-200"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
              <a
                href="https://www.patreon.com/c/LifewithRachelandChristian"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-gold transition-colors duration-200"
                aria-label="Patreon"
              >
                <PatreonIcon />
              </a>
              <a
                href="https://www.amazon.com/shop/rachelthomaslife?linkCode=sl2&tag=rachelthoma04-20&linkId=6d7010690795e1ac33ff71a40e747fff&language=en_US&ref_=as_li_ss_tl&ccs_id=9b297963-3cef-4072-9ded-f5fea93d6fef"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-gold transition-colors duration-200"
                aria-label="Amazon Storefront"
              >
                <AmazonIcon />
              </a>
            </div>
          </div>

          {/* Nav column 1 */}
          <div>
            <div className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-5">
              Explore
            </div>
            <ul className="space-y-3">
              {NAV_COL_1.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-jost text-sm font-light text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav column 2 */}
          <div>
            <div className="font-jost text-[10px] font-medium tracking-[0.22em] uppercase text-gold mb-5">
              Connect
            </div>
            <ul className="space-y-3">
              {NAV_COL_2.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-jost text-sm font-light text-white/60 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="font-jost text-sm font-light text-white/60 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-jost text-xs text-white/35 tracking-wide">
            © 2025 Life With Rachel and Christian. All rights reserved.
          </p>
          <p className="font-jost text-xs text-white/35 tracking-wide">
            LifeWithRachelAndChristian.com
          </p>
        </div>
      </div>
    </footer>
  )
}
