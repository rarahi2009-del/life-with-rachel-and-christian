/**
 * Image constants for Life With Rachel and Christian
 *
 * All images sourced from Unsplash with travel-relevant search terms.
 * To swap in real photos: replace the URL string for any key below.
 * No other code changes are needed.
 *
 * Naming convention: IMAGES.[section].[name]
 */

const BASE = 'https://images.unsplash.com'

export const IMAGES = {
  // ─── HEROES ───────────────────────────────────────────────────────────────
  hero: {
    // Couple travel outdoor warm light
    home: `${BASE}/photo-1488646953014-85cb44e25828?w=1920&q=85&auto=format&fit=crop`,
    // Couple portrait travel
    about: `${BASE}/photo-1521572163474-6864f9cf17ab?w=1920&q=85&auto=format&fit=crop`,
    // Landscape travel destination
    groupTrips: `${BASE}/photo-1506929562872-bb421503ef21?w=1920&q=85&auto=format&fit=crop`,
  },

  // ─── ABOUT ────────────────────────────────────────────────────────────────
  about: {
    // Couple portrait side column
    portrait: `${BASE}/photo-1502685104226-ee32379fefbe?w=900&q=80&auto=format&fit=crop`,
    // Recent adventures cards
    japan: `${BASE}/photo-1493976040374-85c8e12f0c0e?w=800&q=80&auto=format&fit=crop`,
    southKorea: `${BASE}/photo-1517154421773-0529f29ea451?w=800&q=80&auto=format&fit=crop`,
    thailand: `${BASE}/photo-1528360983277-13d401cdc186?w=800&q=80&auto=format&fit=crop`,
  },

  // ─── BLOG ─────────────────────────────────────────────────────────────────
  blog: {
    // Cherry blossoms Tokyo
    cherryBlossomTokyo: `${BASE}/photo-1493976040374-85c8e12f0c0e?w=800&q=80&auto=format&fit=crop`,
    // Tokyo city / Disney area
    tokyoDisneyland: `${BASE}/photo-1540959733332-eab4deabeeaf?w=800&q=80&auto=format&fit=crop`,
    // Osaka at night
    osakaNight: `${BASE}/photo-1578469645742-46cae010e5d4?w=800&q=80&auto=format&fit=crop`,
    // Amsterdam canal
    amsterdam: `${BASE}/photo-1512470876302-972faa2aa9a4?w=800&q=80&auto=format&fit=crop`,
    // Rome rooftop / cityscape
    rome: `${BASE}/photo-1515542622106-78bda8ba0e5b?w=800&q=80&auto=format&fit=crop`,
    // Japan packing / flat lay
    japanPacking: `${BASE}/photo-1553361371-9b22f78e8b1d?w=800&q=80&auto=format&fit=crop`,
    // Blog post header (generic travel)
    postHeader: `${BASE}/photo-1492571350019-22de08371fd3?w=1600&q=80&auto=format&fit=crop`,
  },

  // ─── VIDEOS ───────────────────────────────────────────────────────────────
  videos: {
    // Japan section thumbnails
    japanStreet: `${BASE}/photo-1492571350019-22de08371fd3?w=800&q=80&auto=format&fit=crop`,
    japanTemple: `${BASE}/photo-1547981609-4b6bfe67ca0b?w=800&q=80&auto=format&fit=crop`,
    japanOsaka: `${BASE}/photo-1578469645742-46cae010e5d4?w=800&q=80&auto=format&fit=crop`,
    // Europe section thumbnails
    europeCity: `${BASE}/photo-1499856374462-b3f8c8013ce2?w=800&q=80&auto=format&fit=crop`,
    europeItaly: `${BASE}/photo-1516483638261-f4dbaf036963?w=800&q=80&auto=format&fit=crop`,
    europeAmsterdam: `${BASE}/photo-1512470876302-972faa2aa9a4?w=800&q=80&auto=format&fit=crop`,
  },

  // ─── GROUP TRIPS ──────────────────────────────────────────────────────────
  groupTrips: {
    japanSpring: `${BASE}/photo-1493976040374-85c8e12f0c0e?w=800&q=80&auto=format&fit=crop`,
    southeastAsia: `${BASE}/photo-1528360983277-13d401cdc186?w=800&q=80&auto=format&fit=crop`,
    europe: `${BASE}/photo-1499856374462-b3f8c8013ce2?w=800&q=80&auto=format&fit=crop`,
  },

  // ─── WORK WITH US ─────────────────────────────────────────────────────────
  workWithUs: {
    creator: `${BASE}/photo-1516035069371-29a1b244cc32?w=900&q=80&auto=format&fit=crop`,
  },

  // ─── HOME ─────────────────────────────────────────────────────────────────
  home: {
    // YouTube embed placeholder (16:9 dark thumbnail)
    youtubeThumbnail: `${BASE}/photo-1578469645742-46cae010e5d4?w=800&q=80&auto=format&fit=crop`,
  },
}
