// ============================================================
//  THE DETAIL SHOPPE — CLIENT DATA FILE
//  Edit this file to update any content on the site.
//  Colors, text, services, reviews — it's all here.
// ============================================================

export const client = {
  // --- Brand ---
  name: "The Detail Shoppe",
  tagline: "Austin's Premier Auto Detailing",
  slogan: "Every car leaves better than it arrived.",
  description:
    "Mobile detailing based in Austin, TX. No drop-off, no waiting rooms — we come to you.",

  // --- Contact ---
  phone: "(512)836-1312",
  email: "hello@thedetailshoppe.com",
  location: "1702 Bench Mark Dr, Austin, TX 78728 — We Come to You",
  hours: "Mon–Sat: 8am – 6pm",

  // --- Theme colors (swap these to retheme the whole site) ---
  colors: {
    bg: "#0d1117",
    surface: "#161b22",
    border: "#21262d",
    accent: "#c9a84c",       // gold
    text: "#e6edf3",
    muted: "#7d8590",
  },

  // --- Images (free from Unsplash — just swap the URL to change) ---
  images: {
    hero: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1400&auto=format&fit=crop&q=80",
    exterior: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&auto=format&fit=crop&q=80",
    interior: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80",
    ceramic: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&auto=format&fit=crop&q=80",
  },

  // --- Services ---
  services: [
    {
      name: "Exterior Wash & Shine",
      price: "$75",
      duration: "~1.5 hrs",
      desc: "Full hand wash, clay bar treatment, tire dressing, and windows cleaned inside and out.",
    },
    {
      name: "Interior Deep Clean",
      price: "$100",
      duration: "~2 hrs",
      desc: "Vacuum, shampoo carpets and seats, dashboard wipe-down, and odor treatment.",
    },
    {
      name: "Full Detail",
      price: "$150",
      duration: "~3.5 hrs",
      desc: "Everything in Exterior + Interior combined. The works.",
      popular: true,
    },
    {
      name: "Ceramic Coating",
      price: "$350",
      duration: "~6 hrs",
      desc: "Professional-grade coating that protects your paint for years. Includes full exterior prep.",
    },
  ],

  // --- Reviews ---
  reviews: [
    {
      name: "Scarlett Humphries",
      rating: 5,
      text: "I would give 10 stars if I could! Bill did such a wonderful job getting my car to better than new condition. His prices were very reasonable and you just need to call to get an estimate. Will absolutely return the next time I need my car spick and span and will be recommending him to anyone that asks!",
      date: "March 2026",
    },
    {
      name: "S. Miller",
      rating: 5,
      text: "First time customer and I will be back. Bill did a great job on my car -- it looked brand new!! I got a full interior/exterior detail. Reasonable prices and great customer service!",
    },
    {
      name: "Jessica Santiago",
      rating: 5,
      text: "My older baby needed a lot of love and she hasn’t been cleaned in who knows how long. I was embarrassed to even bring her in like this but Bill did an amazing job. I needed someone with attention to detail and someone that really got into the small itty bitty crevices and Bill did just that! He left no stone unturned! You’ll see for yourself from the pics below.  I am amazed how clean my car is! I’ll forever bring my car here for all detailing needs from now on. Thank you Bill!",
    },
  ],

  // --- Stats ---
  stats: [
    { value: "4.9★", label: "Yelp Rating" },
    { value: "200+", label: "Cars Detailed" },
    { value: "100%", label: "Mobile Service" },
    { value: "3 yrs", label: "In Business" },
  ],
}