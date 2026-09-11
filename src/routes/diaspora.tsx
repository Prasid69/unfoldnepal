import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/site/Primitives";
import { NewsletterForm } from "@/components/site/NewsletterForm";
import diasporaHero from "@/assets/diaspora-returnee-entrepreneur.jpg";

const TITLE = "Start a business in Nepal | UnfoldNepal diaspora guide";
const DESCRIPTION =
  "Training, mentorship, guidance and practical support for Nepalis who want to bring their overseas skills and experience home to build a business.";

export const Route = createFileRoute("/diaspora")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/diaspora" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/diaspora" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How much capital do I need to start a small business in Nepal?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "It depends entirely on sector and district. Our reports document median start-up capital by sector, from roughly NPR 9 lakh for a small handicraft workshop to NPR 40 lakh and above for a dairy processing unit with cold chain.",
              },
            },
            {
              "@type": "Question",
              name: "Can non-resident Nepalis invest in a business in Nepal?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Non-resident Nepalis can invest through recognised channels and NRN provisions. Requirements differ by citizenship status and sector, so verify current rules with the Department of Industry before committing capital.",
              },
            },
            {
              "@type": "Question",
              name: "Which sectors are most viable outside Kathmandu?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our fieldwork consistently finds agro-processing, handicraft with export access, and services tied to local market days are the most durable small enterprises outside the Kathmandu valley.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: Diaspora,
});

const STEPS = [
  {
    title: "Shape the idea",
    body: "Start with the skills, experience and networks you already have. We help you connect them to a real need and a realistic opportunity in Nepal.",
  },
  {
    title: "Understand the market",
    body: "Research the customers, costs, competition and local conditions before committing your savings. A good idea becomes stronger when it is tested against evidence.",
  },
  {
    title: "Build with guidance",
    body: "Training, mentorship and practical support can help you choose the right structure, plan the first steps and avoid preventable mistakes.",
  },
  {
    title: "Start carefully and grow",
    body: "Test on a manageable scale, learn from customers and improve before expanding. Sustainable businesses are built through steady decisions, not one large leap.",
  },
];

const FAQS = [
  {
    q: "How much capital do I need to start a small business in Nepal?",
    a: "It depends on the sector, location and scale. Begin with a careful estimate of equipment, registration, working capital and household costs, then test the idea before making a large commitment.",
  },
  {
    q: "Can non-resident Nepalis invest in a business in Nepal?",
    a: "Yes, through recognised NRN and foreign investment channels. Requirements differ by citizenship status and sector, and rules change. Confirm the current position with the Department of Industry or a Nepal-based lawyer before transferring funds.",
  },
  {
    q: "Which sectors are most viable outside Kathmandu?",
    a: "Agro-processing, handicraft with a route to export, and services attached to local market days show the most durable results in our fieldwork. Tourism ventures work but are seasonal and depend heavily on road access.",
  },
  {
    q: "Is there support for hiring and training staff locally?",
    a: "Municipal and provincial skills programmes exist and vary in quality. Our district reports note which programmes respondents actually found useful, and where employers ended up training in-house.",
  },
  {
    q: "Can I talk to someone who has already returned?",
    a: "We can often connect serious enquiries with founders profiled in the book. Write to us with your sector and target district.",
  },
];

function Diaspora() {
  return (
    <>
      <header className="relative isolate min-h-[32rem] border-b border-border">
        <img
          src={diasporaHero}
          alt="A Nepali returnee entrepreneur working with a local team in a food processing business"
          width={1920}
          height={1080}
          fetchPriority="high"
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div className="hero-overlay absolute inset-0 -z-10" aria-hidden />
        <div className="mx-auto flex min-h-[32rem] w-full max-w-[1600px] items-center px-5 py-16 sm:px-8 md:py-24 lg:px-12">
          <div className="max-w-3xl">
            <p className="eyebrow hero-text-muted">For the diaspora</p>
            <h1 className="hero-text mt-4 text-4xl leading-[1.1] font-semibold md:text-6xl">
              Bring your experience home and build what comes next
            </h1>
            <p className="hero-text-muted mt-6 max-w-2xl text-lg leading-relaxed">
              UnfoldNepal helps foreign returnees turn skills, ideas and networks gained abroad into
              viable businesses that can grow in Nepal and create meaningful work.
            </p>
          </div>
        </div>
      </header>

      <Section>
        <Eyebrow>From experience to enterprise</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold">A practical path home</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-2">
          {STEPS.map((s, i) => (
            <li key={s.title} className="rule-top pt-6">
              <span className="font-serif text-primary">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold">Returning and investing</h2>
          </div>
          <dl className="space-y-8">
            {FAQS.map((f) => (
              <div key={f.q} className="rule-top pt-6">
                <dt className="font-serif text-xl font-semibold">{f.q}</dt>
                <dd className="mt-3 leading-relaxed text-muted-foreground">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section className="border-t border-border bg-sand">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-semibold">One email a month, from the field</h2>
            <p className="mt-4 text-muted-foreground">
               Business guidance, new research and returnee stories, written for Nepalis abroad.
              Or{" "}
              <Link to="/contact" className="text-primary hover:underline">
                write to us directly
              </Link>{" "}
              with your sector and district.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </Section>
    </>
  );
}