export const site = {
  name: "Trims & Tones",
  tagline: "Premium Saloon & SPA",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.trimsandtones.com",
  phone: "+92 334 6663792",
  phoneHref: "tel:+923346663792",
  whatsapp: "923346663792",
  email: "trimntones@gmail.com",
  address: {
    street: "Jama Masjid Batha, Batha Town Green House Street",
    area: "Batha Town",
    city: "Karachi",
    country: "Pakistan",
  },
  // DUMMY: replace with real opening hours
  hours: "Daily, 11:00 AM to 11:00 PM",
  social: {
    instagram: "#", // DUMMY: add real links
    facebook: "#",
    tiktok: "#",
  },
};

export const mapQuery = encodeURIComponent(
  "Jama Masjid Batha, Batha Town Green House Street, Batha Town, Karachi, Pakistan"
);

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/deals", label: "Deals" },
  { href: "/membership", label: "Membership" },
  { href: "/contact", label: "Contact" },
];

// DUMMY DATA: replace prices and items with the real menu
export const serviceCategories = [
  {
    id: "hair",
    name: "Hair",
    items: [
      { name: "Premium Haircut", desc: "Consultation, precision cut and finish.", price: 540 },
      { name: "Royal Haircut", desc: "Precision cut, hot towel and styling.", price: 900 },
      { name: "Hair Protein Treatment", desc: "Protein application, clarifying wash, blow-dry and styling.", price: 2200 },
      { name: "Hair Colour", desc: "Global colour with a professional colour range.", price: 2500 },
      { name: "Hair Styling", desc: "Blow-dry and styling for any occasion.", price: 700 },
    ],
  },
  {
    id: "beard",
    name: "Beard & Grooming",
    items: [
      { name: "Premium Beard Setting", desc: "Shape, trim and line-up.", price: 450 },
      { name: "Royal Cut & Beard", desc: "Precision cut, hot towel, beard grooming and balm.", price: 1200 },
      { name: "Clean Shave", desc: "Hot towel straight-razor shave.", price: 500 },
      { name: "Threading", desc: "Eyebrows and face threading.", price: 200 },
    ],
  },
  {
    id: "facial",
    name: "Facials & Skin",
    items: [
      { name: "Whitening Facial", desc: "Cleansing, scrubbing and mask.", price: 1500 },
      { name: "Derma Clear Facial", desc: "Brightening freshener, deep cleanse, scrub, whitening mask and steam.", price: 2500 },
      { name: "Hydra Facial", desc: "Exfoliation, acid peel, extraction, hydration and protection.", price: 4500 },
      { name: "Korean Vitamin C Facial", desc: "Peeling, exfoliation, brightening mask and intensive hydration.", price: 5500 },
      { name: "Blackhead Removal", desc: "Steam and gentle extraction.", price: 800 },
    ],
  },
  {
    id: "hands-feet",
    name: "Hands & Feet",
    items: [
      { name: "Classic Manicure", desc: "Nail shaping, cuticle care and polish.", price: 1000 },
      { name: "Classic Pedicure", desc: "Soak, exfoliation, massage and polish.", price: 1500 },
      { name: "Royal Manicure + Pedicure", desc: "Shaping, cuticle care, exfoliation, mask, massage and polish.", price: 3000 },
    ],
  },
  {
    id: "spa",
    name: "Massage & Spa",
    items: [
      { name: "15 Min JC Buckman Massage", desc: "Full body massage.", price: 1000 },
      { name: "Head & Shoulder Massage", desc: "Oil massage to release tension.", price: 800 },
      { name: "Full Body Relaxation", desc: "Extended massage session.", price: 3500 },
    ],
  },
];

// From the deal posters
export const deals = [
  {
    no: "05",
    name: "The Derma Clear Protocol",
    price: 2999,
    includes: [
      "Royal Hair Cut & Beard",
      "Derma Clear Facial",
      "Hair Protein, Wash & Styling",
      "15 Min JC Buckman Full Body Massage",
    ],
  },
  {
    no: "06",
    name: "The Becute Spa",
    price: 4499,
    includes: [
      "Royal Hair Cut & Beard",
      "Becute Facial",
      "Manicure & Pedicure",
      "Hair Protein, Wash & Styling",
      "15 Min JC Buckman Full Body Massage",
    ],
  },
  {
    no: "07",
    name: "The Hydra Derma Mix",
    price: 4499,
    includes: [
      "Royal Hair Cut & Beard",
      "Derma Clear Facial",
      "Hair Protein, Wash & Styling",
      "Hydra Facial",
      "15 Min JC Buckman Full Body Massage",
    ],
  },
  {
    no: "08",
    name: "The Body Shop Organic",
    price: 5000,
    includes: [
      "Royal Hair Cut & Beard",
      "The Body Shop Facial",
      "Hair Protein, Wash & Styling",
      "15 Min JC Buckman Full Body Massage",
    ],
  },
  {
    no: "09",
    name: "The Hydra Luxe Combo",
    price: 6999,
    includes: [
      "Royal Hair Cut & Beard",
      "Derma Clear Facial",
      "Hydra Facial",
      "Royal Manicure + Pedicure",
      "Hair Protein, Wash & Styling",
      "15 Min JC Buckman Full Body Massage",
    ],
  },
  {
    no: "10",
    name: "Hydra Elite",
    price: 9999,
    includes: [
      "Royal Hair Cut & Beard",
      "The Body Shop Facial",
      "Hydra Facial",
      "Royal Manicure + Pedicure",
      "Hair Protein, Wash & Styling",
      "15 Min JC Buckman Full Body Massage",
    ],
  },
  {
    no: "11",
    name: "The Janssen Deal",
    price: 10999,
    includes: [
      "Royal Hair Cut & Beard",
      "Hair Protein, Wash & Styling",
      "Hydra Facial",
      "15 Min JC Buckman Full Body Massage",
    ],
  },
  {
    no: "12",
    name: "The Korean Vitamin C Revival",
    price: 14999,
    includes: [
      "Royal Hair Cut & Beard",
      "Korean Skin Care Facial with Vitamin C",
      "Korean Serum Facial",
      "Royal Manicure + Pedicure",
      "Hair Protein, Wash & Styling",
      "15 Min JC Buckman Full Body Massage",
    ],
  },
];

export const membership = {
  name: "Silver Membership",
  price: 5000,
  term: "1 year from date of purchase",
  discount: "30% off the entire menu",
  freeValue: 3100,
  freeServices: [
    "Premium Haircut",
    "Premium Beard Setting",
    "Whitening Facial (cleansing, scrubbing, mask)",
    "Hair Styling",
    "15 Min JC Buckman Full Body Massage",
  ],
};

export const prepaid = {
  services: 6,
  price: 5000,
  was: 6500,
  save: 1500,
};

// DUMMY: replace with real client reviews
export const testimonials = [
  { name: "Ahmed R.", text: "Best fade I have had in Karachi. The hot towel and beard work felt properly premium.", service: "Royal Cut & Beard" },
  { name: "Bilal S.", text: "Took the Hydra Luxe Combo before a wedding. Skin, hair, hands and feet all sorted in one visit.", service: "Hydra Luxe Combo" },
  { name: "Usman K.", text: "The membership paid for itself within two visits. Staff remember how I like my cut.", service: "Silver Membership" },
];

export const products = {
  name: "CAREis Professional",
  tagline: "Complete hair care routine",
  for: "Keratin, protein and extenso-treated hair",
  price: 7500,
  items: ["Protein Shampoo (sulfate free)", "Protein Hair Mask", "Protein Serum"],
};

export const pkr = (n) => "Rs. " + n.toLocaleString("en-PK");

// DUMMY: durations and "most booked" flags, replace with real values
export const serviceMeta = {
  "Premium Haircut": { time: "30 min", popular: true },
  "Royal Haircut": { time: "45 min" },
  "Hair Protein Treatment": { time: "60 min", popular: true },
  "Hair Colour": { time: "90 min" },
  "Hair Styling": { time: "25 min" },
  "Premium Beard Setting": { time: "20 min" },
  "Royal Cut & Beard": { time: "60 min", popular: true },
  "Clean Shave": { time: "20 min" },
  "Threading": { time: "10 min" },
  "Whitening Facial": { time: "45 min" },
  "Derma Clear Facial": { time: "60 min" },
  "Hydra Facial": { time: "75 min", popular: true },
  "Korean Vitamin C Facial": { time: "75 min" },
  "Blackhead Removal": { time: "25 min" },
  "Classic Manicure": { time: "40 min" },
  "Classic Pedicure": { time: "50 min" },
  "Royal Manicure + Pedicure": { time: "90 min" },
  "15 Min JC Buckman Massage": { time: "15 min", popular: true },
  "Head & Shoulder Massage": { time: "20 min" },
  "Full Body Relaxation": { time: "60 min" },
};

export const categoryBlurbs = {
  hair: "Cuts, colour and treatments finished with a professional blow-dry.",
  beard: "Shape, trim and shave with hot towels and balm.",
  facial: "From quick brightening to deep hydra and Korean skin care.",
  "hands-feet": "Shaping, exfoliation and polish for hands and feet.",
  spa: "Massage sessions to release tension after the chair.",
};
