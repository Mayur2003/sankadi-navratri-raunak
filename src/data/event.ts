/**
 * Single source of truth for all Sankadi Sheri event content.
 * Edit values here to update the website — no component changes needed.
 */

export const eventInfo = {
  name: "Sankadi Sheri",
  tagline: "Ahmedabad ni Pol ni Parampara, Navratri ni Raunak",
  intro: "Celebrate Navratri the traditional Ahmedabad way.",
  year: 2026,
  venue: {
    name: "Alphonso Party Plot",
    line1: "Behind Sentosa Greenland Bungalow",
    line2: "Near Science City Circle",
    city: "Ahmedabad, Gujarat – 372722",
    country: "India",
    mapsQuery: "Alphonso Party Plot, Near Science City Circle, Ahmedabad, Gujarat",
  },
  contact: {
    phone: "+91 98250 00000",
    whatsapp: "+91 98250 00000",
    email: "hello@sankadisheri.com",
    instagram: "https://instagram.com/sankadisheri",
    facebook: "https://facebook.com/sankadisheri",
    youtube: "https://youtube.com/@sankadisheri",
    whatsappLink: "https://wa.me/919825000000",
    instagramHandle: "@sankadisheri",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Venue", href: "#venue" },
  { label: "Passes", href: "#passes" },
  { label: "Contact", href: "#contact" },
];

export const heritageFeatures = [
  {
    no: "01",
    title: "Pol ni Gali",
    text: "Experience the charm of Ahmedabad's traditional pol streets.",
  },
  {
    no: "02",
    title: "Gujarati Parampara",
    text: "Celebrate the colours, traditions and culture of Gujarat.",
  },
  {
    no: "03",
    title: "Garba ni Raat",
    text: "Dance through the night with traditional and modern Garba beats.",
  },
  {
    no: "04",
    title: "Apno Ahmedabad",
    text: "A celebration that brings people, families and friends together.",
  },
];

export type EventNight = {
  night: string;
  date: string;
  day: string;
  theme: string;
  artist: string;
  attraction: string;
  passes: "Available" | "Filling Fast" | "Sold Out";
};

/** Placeholder schedule — replace dates, themes and artists when confirmed. */
export const eventNights: EventNight[] = [
  {
    night: "Night 01",
    date: "TBA",
    day: "Day 1",
    theme: "Toran Opening Night",
    artist: "Artist TBA",
    attraction: "Aarti & Deep Prakatya",
    passes: "Available",
  },
  {
    night: "Night 02",
    date: "TBA",
    day: "Day 2",
    theme: "Bandhani Night",
    artist: "Artist TBA",
    attraction: "Best Dressed Contest",
    passes: "Available",
  },
  {
    night: "Night 03",
    date: "TBA",
    day: "Day 3",
    theme: "Heritage Pol Night",
    artist: "Artist TBA",
    attraction: "Pol Walk Installation",
    passes: "Filling Fast",
  },
  {
    night: "Night 04",
    date: "TBA",
    day: "Day 4",
    theme: "Dandiya Raas Night",
    artist: "Artist TBA",
    attraction: "Dandiya Face-off",
    passes: "Available",
  },
  {
    night: "Night 05",
    date: "TBA",
    day: "Day 5",
    theme: "Folk of Gujarat",
    artist: "Artist TBA",
    attraction: "Live Folk Orchestra",
    passes: "Filling Fast",
  },
  {
    night: "Night 06",
    date: "TBA",
    day: "Day 6",
    theme: "Mirror Work Night",
    artist: "Artist TBA",
    attraction: "Craft Bazaar",
    passes: "Available",
  },
  {
    night: "Night 07",
    date: "TBA",
    day: "Day 7",
    theme: "Rangoli Night",
    artist: "Artist TBA",
    attraction: "Giant Rangoli Art",
    passes: "Filling Fast",
  },
  {
    night: "Night 08",
    date: "TBA",
    day: "Day 8",
    theme: "Ashtami Special",
    artist: "Artist TBA",
    attraction: "Havan & Maha Aarti",
    passes: "Filling Fast",
  },
  {
    night: "Night 09",
    date: "TBA",
    day: "Day 9",
    theme: "Grand Finale",
    artist: "Artist TBA",
    attraction: "Fireworks & Mega Raas",
    passes: "Available",
  },
];

export const musicExperiences = [
  { title: "Traditional Garba", text: "Timeless taali and three-clap raas circles led by our garba mandal." },
  { title: "Live Garba", text: "A full live orchestra with dhol, tabla, shehnai and soaring vocals." },
  { title: "Dandiya Night", text: "Sticks up — high-energy dandiya raas rounds through the night." },
  { title: "DJ Night", text: "Modern garba remixes and festive drops on a premium sound system." },
  { title: "Folk Music", text: "Gujarati folk ballads, bhajans and Saurashtra rhythms." },
  { title: "Special Performances", text: "Curated guest acts and surprise showcases each night." },
];

export const dressCode = {
  women: ["Chaniya Choli", "Traditional jewellery", "Bandhani", "Mirror work"],
  men: ["Kediyu", "Chorno", "Gujarati traditional jackets", "Mojdi"],
};

export const galleryCategories = [
  "All",
  "Pol Heritage",
  "Garba",
  "People",
  "Decor",
  "Dandiya",
  "Ahmedabad",
] as const;

export const highlights = [
  { value: "9+", label: "Nights of Celebration" },
  { value: "1000+", label: "Garba Lovers" },
  { value: "1", label: "Unforgettable Experience" },
  { value: "∞", label: "Memories" },
];

export const whyPoints = [
  "Ahmedabad heritage-inspired experience",
  "Authentic Gujarati atmosphere",
  "Traditional + modern Garba",
  "Beautiful festive décor",
  "Family-friendly celebration",
  "Premium event experience",
  "Food & refreshments",
  "Music & entertainment",
];

export type Pass = {
  name: string;
  price: string;
  note: string;
  perks: string[];
  cta: string;
  featured?: boolean;
};

/** Placeholder pricing — update once ticketing is confirmed. */
export const passes: Pass[] = [
  {
    name: "Regular Pass",
    price: "₹499",
    note: "per person / night (indicative)",
    perks: ["Entry to Sankadi Sheri", "Garba Night Access", "Basic Amenities"],
    cta: "Book Now",
  },
  {
    name: "Premium Pass",
    price: "₹999",
    note: "per person / night (indicative)",
    perks: ["Priority Entry", "Premium Garba Area", "Special Amenities"],
    cta: "Book Premium",
    featured: true,
  },
  {
    name: "VIP Pass",
    price: "₹1,999",
    note: "per person / night (indicative)",
    perks: ["VIP Entry", "VIP Seating Area", "Premium Experience", "Exclusive Benefits"],
    cta: "Book VIP",
  },
];

export const foodItems = [
  { name: "Fafda Jalebi", text: "The Ahmedabad classic — crisp, sweet, unmissable." },
  { name: "Khichu", text: "Steaming rice flour khichu with oil and green chilli masala." },
  { name: "Gujarati Snacks", text: "Dhokla, khaman, patra and more from the pol kitchens." },
  { name: "Chaas", text: "Chilled masala buttermilk to cool down between raas rounds." },
  { name: "Street Food", text: "Sev usal, pav bhaji, dabeli and late-night favourites." },
  { name: "Traditional Sweets", text: "Mohanthal, ghari, basundi and festive mithai." },
];

export const faqs = [
  {
    q: "Where is Sankadi Sheri located?",
    a: "Sankadi Sheri is held at Alphonso Party Plot, Behind Sentosa Greenland Bungalow, Near Science City Circle, Ahmedabad, Gujarat – 372722.",
  },
  {
    q: "What are the event dates?",
    a: "Sankadi Sheri runs across all nine nights of Navratri. Exact dates will be announced soon — follow us on Instagram for the official schedule.",
  },
  {
    q: "How can I book passes?",
    a: "Passes can be booked online through the Passes section of this website, or by contacting our team on WhatsApp.",
  },
  {
    q: "Is the event family-friendly?",
    a: "Absolutely. Sankadi Sheri is designed as a safe, welcoming celebration for families, friends and all age groups.",
  },
  {
    q: "Is parking available?",
    a: "Yes, dedicated on-site and nearby parking is arranged, with marshals guiding vehicles throughout the night.",
  },
  {
    q: "What is the dress code?",
    a: "Traditional Gujarati attire is encouraged — chaniya choli for women and kediyu-chorno for men. It is not mandatory, but it makes the night far more special.",
  },
  {
    q: "Are food and beverages available?",
    a: "Yes. A curated Gujarati food street with snacks, street food, sweets and beverages is available at the venue.",
  },
  {
    q: "Can children attend?",
    a: "Children are welcome. Kids below a certain age accompanied by pass-holding adults may enter free — final policy will be announced with the pass launch.",
  },
  {
    q: "What happens if I lose my pass?",
    a: "Report it immediately at the help desk or contact our team. Digital passes can be re-issued after verification of your booking details.",
  },
  {
    q: "How can I contact the organizers?",
    a: "Call or WhatsApp us, write to hello@sankadisheri.com, or use the contact form on this page — we usually reply within 24 hours.",
  },
];
