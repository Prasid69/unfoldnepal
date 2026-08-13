export const ORG = {
  name: "UnfoldNepal",
  legalName: "UnfoldNepal",
  domain: "https://unfoldnepal.org.np",
  email: "unfoldnepal.org@gmail.com",
  phone: "+977 1 000 0000",
  address: "Kathmandu, Bagmati Province, Nepal",
  tagline:
    "Research and publishing on Nepal's cottage, small and medium enterprises.",
};

export const BOARD = [
  {
    name: "Prasiddha Aryal",
    role: "Chairperson & Chief Executive Officer",
    note: "Chairs the board and leads day-to-day operations, the research agenda and the 100 Businesses book series.",
  },
  {
    name: "Indira Dahal",
    role: "Board Member",
    note: "Oversees governance, institutional partnerships and research ethics.",
  },
  {
    name: "Pratyusha Aryal",
    role: "Board Member",
    note: "Focuses on diaspora engagement and outreach to Nepalis abroad.",
  },
  {
    name: "Rabindra Adhikari",
    role: "Board Member",
    note: "Advises on field research design and district-level data collection.",
  },
  {
    name: "Biraj Aryal",
    role: "Board Member",
    note: "Handles finance, compliance and reporting for a non-profit-distributing body.",
  },
];

export const STATS = [
  { value: "41", label: "Districts covered" },
  { value: "1,280", label: "Businesses surveyed" },
  { value: "12", label: "Reports published" },
  { value: "32", label: "Profiles in the book" },
];

export type Report = {
  slug: string;
  title: string;
  sector: string;
  district: string;
  province: string;
  year: string;
  pages: number;
  status: "Available" | "Coming soon";
  summary: string;
  findings: string[];
  method: string;
  related: string[];
};

export const REPORTS: Report[] = [
  {
    slug: "handicraft-sector-bagmati",
    title: "The Handicraft Economy of Bagmati: Margins, Markets and Makers",
    sector: "Handicraft",
    district: "Lalitpur",
    province: "Bagmati",
    year: "2025",
    pages: 84,
    status: "Available",
    summary:
      "A survey of 210 handicraft workshops across Lalitpur and Bhaktapur, mapping cost structures, export channels and the capital required to start a viable unit.",
    findings: [
      "Median start-up capital for a six-loom workshop is NPR 9.4 lakh, recovered in 26 months.",
      "Workshops selling through two or more export agents earned 38% higher gross margins.",
      "Skilled weaver shortage, not demand, is the binding constraint on growth.",
    ],
    method:
      "Structured interviews with 210 owner-operators, ledger review where permitted, and price sampling across 14 retail outlets between Magh and Chaitra 2081.",
    related: ["dairy-processing-gandaki", "agro-tourism-lumbini"],
  },
  {
    slug: "dairy-processing-gandaki",
    title: "Small-Scale Dairy Processing in Gandaki: A Sector Profile",
    sector: "Agro-processing",
    district: "Kaski",
    province: "Gandaki",
    year: "2025",
    pages: 62,
    status: "Available",
    summary:
      "How chilling centres and small processors in Kaski and Syangja built profitable routes from smallholder farms to urban retail, and where the model breaks.",
    findings: [
      "Collection radius above 18 km erases margin at current fuel prices.",
      "Processors with cold-chain financing doubled throughput within two seasons.",
      "Returnee-founded units were twice as likely to invest in packaging and branding.",
    ],
    method:
      "Field visits to 46 processing units, 9 cooperative interviews and district livestock office data for 2079–2081.",
    related: ["handicraft-sector-bagmati", "himalayan-coffee-value-chain"],
  },
  {
    slug: "himalayan-coffee-value-chain",
    title: "Himalayan Coffee: Value Chain and Returnee Entrepreneurship",
    sector: "Agro-processing",
    district: "Gulmi",
    province: "Lumbini",
    year: "2024",
    pages: 71,
    status: "Available",
    summary:
      "An analysis of specialty coffee production in Gulmi and Palpa, with attention to diaspora-funded roasteries and their effect on farm-gate prices.",
    findings: [
      "Roasteries paid 22% above the district farm-gate average for cherry.",
      "Direct-to-consumer sales in Kathmandu carried the whole chain's profit.",
      "Certification costs remain out of reach below 12 hectares of aggregation.",
    ],
    method:
      "Value chain mapping across 5 municipalities, 38 farmer interviews and cost accounting for 6 roasteries.",
    related: ["dairy-processing-gandaki", "women-led-enterprise-madhesh"],
  },
  {
    slug: "women-led-enterprise-madhesh",
    title: "Women-Led Micro-Enterprise in Madhesh Province",
    sector: "Retail & services",
    district: "Dhanusha",
    province: "Madhesh",
    year: "2024",
    pages: 58,
    status: "Available",
    summary:
      "Credit access, household constraints and growth trajectories for 300 women-owned enterprises in Dhanusha and Siraha.",
    findings: [
      "Group lending covered start-up but rarely working capital past year two.",
      "Enterprises with a registered PAN grew revenue 1.8x faster.",
      "Market-day proximity outperformed every other location factor.",
    ],
    method:
      "Random-walk sampling of 300 enterprises across 12 wards, with a follow-up panel of 90 firms after twelve months.",
    related: ["handicraft-sector-bagmati", "homestay-tourism-karnali"],
  },
  {
    slug: "homestay-tourism-karnali",
    title: "Community Homestays in Karnali: Seasonality and Survival",
    sector: "Tourism",
    district: "Jumla",
    province: "Karnali",
    year: "2024",
    pages: 49,
    status: "Coming soon",
    summary:
      "Occupancy, pricing and household income effects for community homestay clusters in Jumla and Surkhet.",
    findings: [
      "Four profitable months fund the year; off-season diversification decides survival.",
      "Clusters with a shared booking channel held 3x the occupancy of individual listings.",
      "Road access changes viability more than marketing spend.",
    ],
    method:
      "Occupancy logs from 22 homestays, household income recall surveys and two seasons of price monitoring.",
    related: ["agro-tourism-lumbini", "himalayan-coffee-value-chain"],
  },
  {
    slug: "agro-tourism-lumbini",
    title: "Agro-Tourism Ventures in Lumbini: Early Evidence",
    sector: "Tourism",
    district: "Rupandehi",
    province: "Lumbini",
    year: "2023",
    pages: 44,
    status: "Coming soon",
    summary:
      "A first look at farm-stay and orchard-visit ventures around Butwal, including capital needs and realistic first-year revenue.",
    findings: [
      "Weekend domestic visitors, not international tourists, carry the model.",
      "Ventures attached to an existing farm reached breakeven three times faster.",
      "Food service, not lodging, produced most of the margin.",
    ],
    method:
      "Case studies of 17 ventures with revenue reconstruction and visitor intercept surveys at 4 sites.",
    related: ["homestay-tourism-karnali", "handicraft-sector-bagmati"],
  },
];

export const SECTORS = Array.from(new Set(REPORTS.map((r) => r.sector))).sort();
export const PROVINCES = Array.from(new Set(REPORTS.map((r) => r.province))).sort();

export type Post = {
  slug: string;
  title: string;
  date: string;
  isoDate: string;
  excerpt: string;
  tag: string;
  author: string;
  readingTime: string;
  /** Alternating heading / paragraph blocks. */
  body: { heading: string; paragraphs: string[] }[];
  related: string[];
};

export const POSTS: Post[] = [
  {
    slug: "district-spotlight-gulmi",
    title: "District spotlight: what Gulmi's coffee boom actually pays",
    date: "12 July 2026",
    isoDate: "2026-07-12",
    excerpt:
      "Farm-gate prices in Gulmi rose for the fourth straight season. We break down who captured the increase, and what it means for anyone planning a roastery.",
    tag: "District spotlight",
    author: "Prasiddha Aryal",
    readingTime: "6 min read",
    related: ["returning-from-doha", "how-we-count-a-business"],
    body: [
      {
        heading: "The headline number, and the number underneath it",
        paragraphs: [
          "Farm-gate cherry prices in Gulmi have risen every season since 2079. Read alone, that number suggests a district getting steadily richer from coffee. Our value chain work across five municipalities suggests something narrower: the increase is real, but it is captured unevenly, and the households doing the hardest work capture the least of it.",
          "Growers selling into an aggregation point with a roastery contract received roughly 22 percent more per kilogram of cherry than growers selling to itinerant traders on market day. The gap is not explained by quality. It is explained by who has a buyer lined up before harvest begins.",
        ],
      },
      {
        heading: "Where the margin actually sits",
        paragraphs: [
          "Once cherry is pulped, dried, hulled, roasted and bagged, the retail price in Kathmandu is several times the farm-gate price. Most of that spread is not profiteering — drying loss, hulling, transport and failed batches are expensive. But the profit that remains sits overwhelmingly with whoever sells the final bag, and in Gulmi that is almost never the grower.",
          "The roasteries we costed made their money on direct-to-consumer sales: cafés, subscription bags, gift boxes bought in Kathmandu and shipped abroad. Wholesale volume kept the machines busy; retail paid the wages.",
        ],
      },
      {
        heading: "What this means if you are planning a roastery",
        paragraphs: [
          "Three practical conclusions came out of the fieldwork. First, secure your sales channel before you buy equipment — a roaster without a retail route is an expensive way to store green beans. Second, certification only pays above roughly twelve hectares of aggregated supply; below that the audit cost eats the premium. Third, budget for a second drying season before you expect to break even.",
          "None of this argues against investing in Gulmi coffee. It argues against investing in it on the assumption that a rising farm-gate price will carry a business on its own.",
        ],
      },
    ],
  },
  {
    slug: "returning-from-doha",
    title: "Returning from Doha: three founders, three very different first years",
    date: "28 June 2026",
    isoDate: "2026-06-28",
    excerpt:
      "Remittance savings, a plan and a district are not the same thing as a business. Three returnees walk through their first twelve months back.",
    tag: "Diaspora stories",
    author: "Pratyusha Aryal",
    readingTime: "8 min read",
    related: ["district-spotlight-gulmi", "how-we-count-a-business"],
    body: [
      {
        heading: "Same savings, different outcomes",
        paragraphs: [
          "The three founders in this piece left Qatar within eight months of each other, returned to three different districts, and started with broadly comparable savings — between NPR 18 and 26 lakh. A year later one business was profitable, one was surviving on a second income, and one had closed.",
          "The difference was not effort, and it was not luck in any useful sense. It was how much of the first year was spent learning things that could have been learned before the money was committed.",
        ],
      },
      {
        heading: "The cost of learning late",
        paragraphs: [
          "The founder whose business closed spent four months registering, leasing and equipping a poultry unit before discovering that the nearest reliable feed supplier was a two-hour drive away. Feed logistics turned a thin margin negative. That fact was knowable in a week of asking around.",
          "The profitable founder did the opposite: six weeks back in the district before spending anything, talking to existing operators, sitting in the local market, and revising the plan twice. The venture that eventually launched was not the one she flew home intending to start.",
        ],
      },
      {
        heading: "What we would tell someone still abroad",
        paragraphs: [
          "Choose the district before the sector, not the other way around. Assume registration, utilities and a workable premises take three to six months. Keep six months of household expenses entirely separate from business capital — the businesses that failed rarely failed on the idea; they failed when the household needed the working capital.",
          "Our guide for the diaspora sets out the same sequence in more detail, with the paperwork and rough timelines attached.",
        ],
      },
    ],
  },
  {
    slug: "how-we-count-a-business",
    title: "How we decide what counts as a 'successful' business",
    date: "3 June 2026",
    isoDate: "2026-06-03",
    excerpt:
      "Our selection criteria for the 100 Businesses book: three years of operation, verified employment, and a model another founder could repeat.",
    tag: "Methodology",
    author: "Indira Dahal",
    readingTime: "5 min read",
    related: ["district-spotlight-gulmi", "returning-from-doha"],
    body: [
      {
        heading: "Why the definition matters",
        paragraphs: [
          "A book called 100 Businesses of Nepal is only useful if the reader can trust why each business is in it. Awards, revenue claims and press coverage are poor filters — they favour the visible over the durable. We set criteria first and applied them the same way in every district.",
        ],
      },
      {
        heading: "The four criteria",
        paragraphs: [
          "One: at least three consecutive years of operation, evidenced by registration and tax filings rather than the founder's recollection. Two: verified employment — we count people on a payroll or a documented wage arrangement, not stated headcount. Three: a repeatable model, meaning another founder in a comparable district could plausibly follow the same path. Four: consent to be examined, including permission to review ledgers where they exist.",
        ],
      },
      {
        heading: "What we deliberately exclude",
        paragraphs: [
          "We exclude businesses whose viability depends on a single grant, a political relationship, or a founder's unusual access to capital. They can be admirable, and they are not instructive. We also exclude firms that would not let us verify anything; an unverified profile is advertising, not research.",
          "The result is a slower book and a shorter list than we would otherwise have. It is also the only version worth publishing.",
        ],
      },
    ],
  },
];