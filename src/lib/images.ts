/**
 * Image constants for Life With Rachel and Christian
 *
 * Real photos live in /public/images/
 * To swap a photo: update the path string for that key — no other code changes needed.
 *
 * Unsplash placeholders are kept only where we don't have a real photo yet.
 */

const UNSPLASH = 'https://images.unsplash.com'

export const IMAGES = {
  // ─── HEROES ───────────────────────────────────────────────────────────────
  hero: {
    // Tulip farm couple — warm, genuine, not travel-cliché
    home: '/images/tulip-farm-couple.jpg',
    // Couple selfie outdoors, blue sky
    about: '/images/couple-selfie-blue-sky.jpg',
    // Mediterranean yacht — travel energy
    groupTrips: '/images/mediterranean-yacht.jpg',
  },

  // ─── ABOUT ────────────────────────────────────────────────────────────────
  about: {
    // Couple sitting on grass — relaxed, real
    portrait: '/images/couple-park-grass.jpg',
    // Cherry blossoms — Japan adventure card
    japan: '/images/cherry-blossoms-close.jpg',
    // No South Korea photos yet — keeping Unsplash
    southKorea: `${UNSPLASH}/photo-1517154421773-0529f29ea451?w=800&q=80&auto=format&fit=crop`,
    // No Thailand photos yet — keeping Unsplash
    thailand: `${UNSPLASH}/photo-1528360983277-13d401cdc186?w=800&q=80&auto=format&fit=crop`,
  },

  // ─── BLOG ─────────────────────────────────────────────────────────────────
  blog: {
    // Rachel selfie under cherry blossoms
    cherryBlossomTokyo: '/images/cherry-blossoms-close.jpg',
    // Rachel & Christian selfie at Tokyo Disneyland
    tokyoDisneyland: '/images/tokyo-disney-couple-selfie.jpg',
    // Dotonbori Osaka at night — neon signs
    osakaNight: '/images/osaka-dotonbori-night.jpg',
    // Rachel & Christian at Amsterdam Dam Square
    amsterdam: '/images/amsterdam-dam-square.jpg',
    // Rachel on Rome rooftop balcony
    rome: '/images/rome-balcony-rachel.jpg',
    // No packing flat lay yet — keeping Unsplash
    japanPacking: `${UNSPLASH}/photo-1553361371-9b22f78e8b1d?w=800&q=80&auto=format&fit=crop`,
    // Blog post header — couple selfie
    postHeader: '/images/couple-selfie-blue-sky.jpg',
    // SF layover
    sfLayover: '/images/sf-couple-selfie-park.jpg',
    sfSkyline: '/images/sf-marina-green-skyline.jpg',
    sfGoldenGate: '/images/sf-golden-gate-view.jpg',
    sfAlcatraz: '/images/sf-alcatraz-sailboat.jpg',
    sfPalmTrees: '/images/sf-palm-trees-skyline.jpg',
    sfWaterfront: '/images/sf-rachel-waterfront.jpg',
    sfGrass: '/images/sf-rachel-grass.jpg',
    sfPeaceSign: '/images/sf-rachel-peace-sign.jpg',
  },

  // ─── VIDEOS ───────────────────────────────────────────────────────────────
  videos: {
    // YouTube thumbnail — Shibuya crossing
    japanStreet: '/images/tokyo-shibuya-youtube.png',
    // Japan arcade / Kura sushi
    japanTemple: '/images/japan-kura-arcade.jpg',
    // Osaka Dotonbori night
    japanOsaka: '/images/osaka-dotonbori-night.jpg',
    // Amsterdam street — Gothic church
    europeCity: '/images/amsterdam-street.jpg',
    // Mediterranean / yacht
    europeItaly: '/images/mediterranean-yacht.jpg',
    // Amsterdam canal houses
    europeAmsterdam: '/images/amsterdam-canal-houses.jpg',
  },

  // ─── GROUP TRIPS ──────────────────────────────────────────────────────────
  groupTrips: {
    // Cherry blossoms for Japan spring trip
    japanSpring: '/images/cherry-blossoms-selfie.jpg',
    // Thailand Reset group trip hero
    thailand: '/images/thailand-reset-hero.png',
    // No SE Asia photos yet — keeping Unsplash
    southeastAsia: `${UNSPLASH}/photo-1528360983277-13d401cdc186?w=800&q=80&auto=format&fit=crop`,
    // Rachel & Christian at Amsterdam Dam Square
    europe: '/images/amsterdam-dam-square.jpg',
  },

  // ─── WORK WITH US ─────────────────────────────────────────────────────────
  workWithUs: {
    // Rachel holding camera — perfect creator shot
    creator: '/images/rachel-with-camera.jpg',
  },

  // ─── HOME ─────────────────────────────────────────────────────────────────
  home: {
    // YouTube thumbnail — Tokyo Daily Life at Shibuya
    youtubeThumbnail: '/images/tokyo-shibuya-youtube.png',
  },
}
