export const ORG = {
  name: "UnfoldNepal",
  legalName: "UnfoldNepal",
  domain: "https://www.unfoldnepal.org.np",
  email: "unfoldnepal.org@gmail.com",
  phone: "+977 9849288608",
  address: "Kathmandu, Bagmati Province, Nepal",
  tagline:
    "Helping foreign returnees turn skills, experience and ideas into sustainable businesses in Nepal.",
};

export type BoardMember = {
  name: string;
  role: string;
  /** One-line summary shown in card grids. */
  note: string;
  /** Short professional biography for the board page. */
  bio: string;
  /** Relevant experience / areas of expertise. */
  expertise: string[];
};

export const BOARD: BoardMember[] = [
  {
    name: "Prasiddha Aryal",
    role: "Chairperson & Chief Executive Officer",
    note: "Chairs the board and leads the company's work with returnees, entrepreneurs and partners.",
    bio: "Prasiddha leads UnfoldNepal's work to help foreign returnees turn their experience into sustainable businesses in Nepal.",
    expertise: ["Research strategy", "Book publishing", "Institutional partnerships", "Diaspora engagement"],
  },
  {
    name: "Indira Dahal",
    role: "Board Member",
    note: "Oversees governance, institutional partnerships and research ethics.",
    bio: "Indira oversees UnfoldNepal's governance framework, research ethics and institutional partnerships. She helps ensure that every programme and publication is useful, responsible and accountable.",
    expertise: ["Governance & ethics", "Research methodology", "Academic partnerships"],
  },
  {
    name: "Pratyusha Aryal",
    role: "Board Member",
    note: "Focuses on diaspora engagement and outreach to Nepalis abroad.",
    bio: "Pratyusha leads UnfoldNepal's work with Nepali communities abroad. She listens to the questions prospective returnees ask and helps shape support around their real decisions.",
    expertise: ["Diaspora outreach", "Community organising", "Communications"],
  },
  {
    name: "Rabindra Adhikari",
    role: "Board Member",
    note: "Advises on field research design and district-level data collection.",
    bio: "Rabindra advises on field research design and district-level data collection. He trains and supervises the early-career researchers who run our district surveys, reviews every questionnaire before deployment, and audits a sample of interviews in each study so that every published number can be traced back to a notebook, a ledger or a recording.",
    expertise: ["Field survey design", "Data quality assurance", "Researcher training"],
  },
  {
    name: "Biraj Aryal",
    role: "Board Member",
    note: "Handles finance, compliance and reporting for a not-for-profit organization.",
    bio: "Biraj is responsible for UnfoldNepal's finance, compliance and statutory reporting. He manages budgeting for fieldwork and print runs, maintains the financial controls appropriate to a not-for-profit organization, and prepares the accounts shared with members, auditors and the registering authority each year.",
    expertise: ["Finance & compliance", "Audit & reporting", "Operations"],
  },
];

export const STATS = [
  { value: "4", label: "Districts covered" },
  { value: "20", label: "Businesses surveyed" },
  { value: "3", label: "Articles published" },
  { value: "10", label: "Profiles in the book" },
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
      "Field visits to 46 processing units, 9 cooperative interviews and district livestock office data for 2079-2081.",
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

export type PostBodyBlock = {
  heading?: string;
  paragraphs?: string[];
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
  quote?: {
    text: string;
    caption?: string;
  };
  features?: {
    title: string;
    description: string;
  }[];
  cta?: {
    text: string;
    linkText: string;
    linkTo: string;
  };
};

export type Post = {
  slug: string;
  title: string;
  date: string;
  isoDate: string;
  excerpt: string;
  tag: string;
  author: string;
  location?: string;
  readingTime: string;
  body: PostBodyBlock[];
  related: string[];
};

export const POSTS: Post[] = [
  {
    slug: "nabaraj-adhikari-handloom-bags",
    title: "From Malaysia to Kathmandu: How one returnee built a handloom business that now employs 30 people",
    date: "16 August 2026",
    isoDate: "2026-08-16",
    excerpt:
      "Nabaraj Adhikari spent years working in Malaysia's garment industry. When he came home, he didn't just bring savings — he brought a plan. Today, his handloom bag enterprise has two outlets in Kathmandu and more than 30 people on its payroll.",
    tag: "Diaspora stories",
    author: "Unfold Nepal",
    location: "Kathmandu",
    readingTime: "2 min read",
    related: ["building-it-step-by-step"],
    body: [
      {
        paragraphs: [
          "Nabaraj Adhikari is not the kind of person who stays quiet about why he came back. Ask him and he will tell you plainly: he always wanted to do something for the country. After nearly a decade working on factory floors in Kuala Lumpur and Selangor, he had the skills, the savings and, by his own account, enough of watching Nepal's potential sit untapped.",
          "\"I learned everything I could over there,\" he told us when we visited his production workshop in Kathmandu. \"Cutting, stitching, quality control, how to manage a production line so that nothing is wasted. I thought: why am I building this for someone else's company? Why not bring it home?\"",
        ],
      },
      {
        heading: "The idea, and why handloom bags",
        paragraphs: [
          "Nabaraj spent his last year in Malaysia doing two things simultaneously: saving aggressively and researching the Nepali market for textile products. He identified a gap. Handloom fabric — the kind produced on traditional looms in households across Bagmati and Gandaki — was being sold cheaply to middlemen, turned into finished goods elsewhere, and resold at a premium back into Nepal and abroad. The artisans making the fabric were seeing almost none of the margin.",
          "His idea was to close that loop. Source handloom fabric directly from weavers at a fair price, employ skilled stitchers in Kathmandu to turn it into structured bags, and sell the finished product through a proper retail outlet rather than through export agents who would absorb the value.",
          "It sounds straightforward. The execution was not.",
        ],
      },
      {
        heading: "Building the workshop from the ground up",
        paragraphs: [
          "Nabaraj returned to Nepal in early 2024 with NPR 22 lakh — his savings from eight years abroad. He spent the first three months not spending a rupee on equipment. Instead, he visited weaving cooperatives, sat with tailors in Patan and Kirtipur, and walked through every fabric market he could find. He wanted to understand the supply chain before he committed to anything.",
          "By June he had leased a workshop space on the outskirts of Kathmandu and bought his first four sewing machines. He hired two experienced stitchers to start, trained two more, and produced a first batch of two dozen bags. He sold them at a pop-up stall in a Kathmandu weekend market within a single day.",
          "\"That first day told me the demand was real,\" he said. \"I didn't celebrate. I went back and bought four more machines.\"",
        ],
      },
      {
        image: {
          src: "/nabaraj-adhikari-workshop.jpg",
          alt: "Nabaraj Adhikari speaking with an Unfold Nepal researcher inside his handloom bag production workshop in Kathmandu",
          caption: "Nabaraj Adhikari (left) inside his Kathmandu workshop, where more than 30 people now work across production, quality control and retail.",
        },
      },
      {
        heading: "Thirty people, two outlets",
        paragraphs: [
          "Two years on from that first sale, Nabaraj's workshop employs thirty-four people full-time. Most of them are women from surrounding neighbourhoods, many of whom had no formal employment before joining the team. He runs a short in-house training programme for new hires, drawing directly on the production management techniques he observed in Malaysia.",
          "The business now has two retail outlets in Kathmandu — one in Thamel and one in Patan — and a small but growing wholesale line supplying boutique hotels in Pokhara. Monthly turnover has crossed NPR 8 lakh, and Nabaraj says the business has been profitable every month for the past twelve.",
          "He is methodical about how he talks about the numbers — not boastful, but precise in a way that reflects his years on a factory floor where every figure had a consequence. \"If you don't know your costs, you don't know your business,\" he said. \"That's the first thing I tell anyone who asks me for advice.\"",
        ],
      },
      {
        heading: "What he brought back that money can't buy",
        paragraphs: [
          "When we asked Nabaraj what made the difference — the thing that separated his business from other returnee ventures we have seen struggle — his answer was not savings or timing or luck. It was systems.",
          "\"In Malaysia, I saw how a proper production line works. Nothing is left to chance. Every step has a process, every process has a person responsible, and every person knows exactly what good work looks like. I brought that here. Not the machines — the mindset.\"",
          "That discipline shows in the workshop. Bags move through the space in a clear sequence: cutting, stitching, quality check, packaging. Defective pieces are flagged at the quality stage, not discovered by customers. Fabric sourced from weavers is logged by batch with the price paid and the cooperative it came from.",
        ],
        quote: {
          text: "I always wanted to do something for the country. I just needed the skills first — and I had to go abroad to get them.",
          caption: "Nabaraj Adhikari, founder",
        },
      },
      {
        heading: "The bigger picture",
        paragraphs: [
          "Nabaraj's story is precisely the kind Unfold Nepal exists to document and amplify — not because it is exceptional, but because it is replicable. The conditions that made it work are not out of reach for other returnees: a marketable skill set, a willingness to research before spending, and a founding vision that connects to something larger than personal gain.",
          "\"I didn't come back just to make money,\" he said as we were leaving. \"I came back because Nepal has everything it needs. Someone just has to stay and build it.\"",
        ],
        cta: {
          text: "Are you a returnee with a business idea, or part of the diaspora looking to invest in Nepal's economy?",
          linkText: "Get in touch with Unfold Nepal to learn how we can support you",
          linkTo: "/contact",
        },
      },
    ],
  },
  {
    slug: "building-it-step-by-step",
    title: "Building it step by step",
    date: "15 September 2026",
    isoDate: "2026-09-15",
    excerpt:
      "A conversation with the Rt. Hon. Speaker of the House of Representatives about returnee entrepreneurship, and the advice that is now shaping how we plan the years ahead.",
    tag: "Ecosystem & Policy",
    author: "Unfold Nepal",
    location: "Kathmandu",
    readingTime: "5 min read",
    related: ["nabaraj-adhikari-handloom-bags", "flash-flood-august-2026"],
    body: [
      {
        paragraphs: [
          "Every year, thousands of Nepalis come home. They return with savings, yes, but also with something harder to measure: technical skills, workplace discipline, an understanding of how systems run elsewhere, and networks built over years abroad. Most of that value quietly disperses. Some returnees restart the migration cycle within months. Others open a business without support and close it within the first year.",
          "That gap is why Unfold Nepal exists, and it was the substance of our recent meeting with the Rt. Hon. Dol Prasad Aryal, Speaker of the House of Representatives. We shared who we are, what we are building, and where we believe returnee entrepreneurship can take the country over the next decade.",
        ],
      },
      {
        heading: "What we shared",
        paragraphs: [
          "Unfold Nepal is a non-profit working to strengthen Nepal's entrepreneurial ecosystem by helping foreign returnees turn their skills, experience, and ideas into viable businesses at home. We also encourage the wider diaspora to see Nepal as a place to build, not only a place to send money to.",
          "The support we offer follows the actual journey from an idea to a sustainable business:",
        ],
        features: [
          {
            title: "Training",
            description:
              "Entrepreneurship fundamentals adapted for people starting after years away from the local market.",
          },
          {
            title: "Awareness",
            description:
              "Reaching returnees and departing migrants early, before the window to reinvest closes.",
          },
          {
            title: "Mentorship",
            description:
              "Pairing founders with people who have already navigated registration, financing, and hiring in Nepal.",
          },
          {
            title: "Strategic support",
            description:
              "Guidance on the unglamorous parts: market validation, compliance, and access to capital.",
          },
        ],
      },
      {
        paragraphs: [
          "Our position is simple. Migration should not be read only through the lens of departure. It should also be read through what comes back: knowledge, skills, networks, and experience. When those return and find somewhere useful to land, they create businesses, and businesses create jobs for people who might otherwise have to leave.",
        ],
      },
      {
        image: {
          src: "/speaker-meeting.jpg",
          alt: "Unfold Nepal meeting with Rt. Hon. Speaker of the House of Representatives Dol Prasad Aryal",
          caption: "Unfold Nepal met the Rt. Hon. Speaker to share its work on returnee entrepreneurship.",
        },
      },
      {
        heading: "The advice we took away",
        paragraphs: [
          "The Speaker listened, and his response was direct. Building an ecosystem is broad, long-term work. Rather than trying to achieve everything at once, he advised us to break the work down step by step and formulate clear strategies for the years ahead, one stage at a time.",
        ],
        quote: {
          text: "Break the work down. Set clear strategies for each stage rather than attempting the whole ecosystem at once.",
          caption: "Advice shared by the Rt. Hon. Speaker during the meeting",
        },
      },
      {
        paragraphs: [
          "It is guidance that carries particular weight coming from him. Before taking the chair, he served twice as Nepal's Minister of Labour, Employment and Social Security, the ministry closest to the realities of foreign employment. He has also lived and worked abroad himself. The journey our beneficiaries take is not an abstraction to him.",
          "We have taken the advice seriously. Ambition is easy to state and difficult to sequence, and a non-profit that tries to do everything in its first years usually ends up doing very little well. What follows for us is a phased roadmap: defined milestones, a realistic scope for each year, and honest measurement of whether the businesses we support are still standing twelve and twenty-four months later.",
        ],
      },
      {
        heading: "Where this goes next",
        paragraphs: [
          "Conversations at this level matter because returnee entrepreneurship sits across several agendas at once: labour, employment, industry, and finance. Being heard by the House is a step towards the policy attention this group of founders needs, and towards a wider recognition that a returnee with a business plan is an economic asset, not a statistic in a departure record.",
          "We are grateful to the Rt. Hon. Speaker for his time and his counsel. The work now is to turn it into a plan, and the plan into businesses that hold.",
          "Nepal holds boundless potential for entrepreneurship. Our work is to help unfold it.",
        ],
        cta: {
          text: "Are you a returnee with a business idea, or part of the diaspora looking to build in Nepal?",
          linkText: "Get in touch with Unfold Nepal to find out how we can support you",
          linkTo: "/contact",
        },
      },
    ],
  },
  {
    slug: "flash-flood-august-2026",
    title: "When the River Took Everything: On the Ground After Nepal's August Flash Flood",
    date: "1 September 2026",
    isoDate: "2026-09-01",
    excerpt:
      "On August 26, a devastating flash flood tore through river communities across Nepal. Days later, we joined a delegation accompanying the Speaker of the House of Representatives to see the damage for ourselves.",
    tag: "Field Report",
    author: "Unfold Nepal",
    location: "Affected flood zones, Nepal",
    readingTime: "3 min read",
    related: ["building-it-step-by-step"],
    body: [
      {
        paragraphs: [
          "The drive in was quiet. Not the kind of quiet that signals peace — it was the kind that follows catastrophe, when a landscape has been stripped of the ordinary sounds of life.",
          "On August 26, 2026, a devastating flash flood tore through communities along Nepal's river corridors, swallowing homes, displacing families, and erasing livelihoods overnight. Days later, we traveled to the affected zones as part of a delegation accompanying the Speaker of the House of Representatives, joining military officials and local authorities for an on-ground assessment of the destruction.",
        ],
      },
      {
        image: {
          src: "/flood-survey-team.jpg",
          alt: "The Speaker of the House of Representatives and military officials surveying flash flood damage alongside heavy machinery and collapsed structures",
          caption: "The delegation, including military officials and relief coordinators, assessing the scale of destruction at one of the worst-hit sites.",
        },
      },
      {
        heading: "Homes lost overnight",
        paragraphs: [
          "Nothing prepares you for what you see when you arrive. Entire lower floors of buildings had been buried under thick layers of silt and boulders. One house — once somebody's home — stood isolated at the river's edge, its foundation exposed, its interior open to the elements where walls once stood. The water had receded, but the river still churned brown and restless just meters away, as if it hadn't finished yet.",
          "Families in the area had lost more than shelter. Photographs, documents, furniture — all of it gone. Many had fled in the middle of the night with nothing but the clothes on their backs. Some had nowhere to return to. The few who stayed were picking through mud and rubble, trying to salvage what remained.",
        ],
      },
      {
        image: {
          src: "/flood-damaged-house.jpg",
          alt: "A flood-damaged house standing isolated at the river's edge, its foundation exposed and surrounded by debris and silt",
          caption: "A house left standing at the river's edge after the August 26 flood stripped the ground from beneath it.",
        },
      },
      {
        heading: "Businesses wiped out at the worst possible time",
        paragraphs: [
          "Along what used to be a stretch of local market stalls and small shops, heavy excavators worked to clear debris. Storefronts were reduced to frames. Shopkeepers who had spent years building their businesses were left standing in the wreckage with no inventory, no cash flow, and no timeline for recovery.",
          "For a region where commerce depends on the monsoon season, losing the market at peak time is a blow that will be felt well into next year. The flood did not just destroy property — it interrupted income cycles that families had no buffer to absorb.",
        ],
      },
      {
        heading: "A visit that carried weight",
        paragraphs: [
          "The Speaker, flanked by army personnel and relief coordinators, moved through the site with urgency — pointing toward collapsed structures, asking questions, taking stock. It was not a ceremonial visit. You could see the weight of it on everyone's face.",
          "What the August 26 flood exposed, once again, is the brutal intersection of geography and vulnerability that Nepal's communities continue to face. The rivers that give life to these valleys are also capable of reclaiming everything in a matter of hours. While relief efforts are underway, the scale of what was lost — in homes, in businesses, in human stability — demands a response that outlasts the immediate crisis.",
          "The water may have gone down. The damage has not.",
        ],
        cta: {
          text: "Want to support communities rebuilding after disasters like this?",
          linkText: "Learn how you can contribute to Unfold Nepal's work",
          linkTo: "/support",
        },
      },
    ],
  },
];
export type Testimonial = {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  /** Paste an embed URL later, e.g. https://www.youtube.com/embed/XXXX */
  videoUrl?: string;
  /** Optional poster image URL shown before the video is added */
  posterUrl?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "bimala-gurung",
    name: "Bimala Gurung",
    role: "Founder, Annapurna Dairy",
    location: "Kaski · returned from Japan",
    quote:
      "This research is the document I needed five years ago, before I spent my savings guessing.",
    videoUrl: "",
  },
  {
    id: "sagar-thapa",
    name: "Sagar Thapa",
    role: "Owner, Gulmi Coffee Collective",
    location: "Gulmi · returned from Qatar",
    quote:
      "We used the district study to price our first export lot. It changed the whole plan.",
    videoUrl: "",
  },
  {
    id: "rita-shrestha",
    name: "Rita Shrestha",
    role: "Programme lead, District Chamber Network",
    location: "Lalitpur",
    quote:
      "Reliable enterprise data at district level simply did not exist before this work.",
    videoUrl: "",
  },
];

export const DONATION_CURRENCIES = [
  { code: "NPR", symbol: "Rs", label: "Nepali rupees (NPR)" },
  { code: "USD", symbol: "$", label: "US dollars (USD)" },
] as const;

export type CurrencyCode = (typeof DONATION_CURRENCIES)[number]["code"];

export const DONATION_TIERS: {
  amounts: Record<CurrencyCode, number>;
  label: string;
}[] = [
  { amounts: { NPR: 5000, USD: 40 }, label: "One day of field interviews" },
  { amounts: { NPR: 50000, USD: 380 }, label: "One business profile, start to publication" },
  { amounts: { NPR: 400000, USD: 3000 }, label: "One full district sector study" },
];

export const DONATION_MONTHLY_TIERS: {
  amounts: Record<CurrencyCode, number>;
  label: string;
}[] = [
  { amounts: { NPR: 1000, USD: 8 }, label: "Keeps one reader's copy in print each month" },
  { amounts: { NPR: 5000, USD: 40 }, label: "A day of field interviews, every month" },
  { amounts: { NPR: 15000, USD: 120 }, label: "Sustains a researcher's monthly stipend" },
];

export const DONATION_METHODS: Record<CurrencyCode, { title: string; detail: string }[]> = {
  NPR: [
    { title: "Bank transfer (NPR)", detail: "Nepali bank account details are shared on request. write to us and we will send them the same day." },
    { title: "eSewa / Khalti / ConnectIPS", detail: "Digital wallet transfers within Nepal, with a receipt issued for every contribution." },
  ],
  USD: [
    { title: "International wire (USD)", detail: "SWIFT details for our foreign-currency account are shared on request for diaspora and institutional donors." },
    { title: "Card or online transfer", detail: "We can issue a secure payment link in USD, plus an acknowledgement letter for your records." },
  ],
};
