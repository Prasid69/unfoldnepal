import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section, Eyebrow, ReportCard } from "@/components/site/Primitives";
import { NewsletterForm } from "@/components/site/NewsletterForm";
import { REPORTS } from "@/data/site";

const TITLE = "Start a business in Nepal — a guide for the Nepali diaspora | UnfoldNepal";
const DESCRIPTION =
  "Thinking of returning to Nepal to start a business? District-level research on costs, sectors and employment for Nepalis in the US, UK, Gulf, Australia, Japan and Korea.";

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
    title: "Start with a district, not an idea",
    body: "Viability in Nepal is local. The same venture succeeds in Rupandehi and fails in Jumla because of road access, market days and labour supply. Pick the district you can realistically live in, then read what already works there.",
  },
  {
    title: "Read the cost lines, not the headlines",
    body: "Each of our reports reconstructs start-up capital, monthly costs and time to breakeven. Compare them against your actual savings, and add twelve to eighteen months of living costs on top.",
  },
  {
    title: "Find the businesses already doing it",
    body: "The 100 Businesses book profiles founders who have crossed year three. Several returned from abroad themselves. Their mistakes cost less to read about than to repeat.",
  },
  {
    title: "Test before you resign",
    body: "The founders who survive almost always spent a season in-country first — sourcing, hiring, or trading on a small scale — before moving capital and family.",
  },
];

const FAQS = [
  {
    q: "How much capital do I need to start a small business in Nepal?",
    a: "It depends entirely on sector and district. Our reports document median start-up capital by sector — roughly NPR 9 lakh for a six-loom handicraft workshop, considerably more for a dairy unit with cold chain. Budget separately for eighteen months of household costs.",
  },
  {
    q: "Can non-resident Nepalis invest in a business in Nepal?",
    a: "Yes, through recognised NRN and foreign investment channels. Requirements differ depending on your citizenship status and the sector, and rules change — confirm the current position with the Department of Industry or a Nepal-based lawyer before transferring funds.",
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
  const picks = REPORTS.filter((r) =>
    ["himalayan-coffee-value-chain", "dairy-processing-gandaki", "handicraft-sector-bagmati"].includes(
      r.slug,
    ),
  );

  return (
    <>
      <PageHeader
        eyebrow="For the diaspora"
        title="Thinking of starting a business back home?"
        intro="You have the savings and the intent. What is usually missing is district-level evidence: what a venture costs, what it earns, and who is already running one. That is exactly what we publish."
      />

      <Section>
        <Eyebrow>How to use our research</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold">A four-step way in</h2>
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

      <Section className="border-y border-border bg-card">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>Start here</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold">Reports most useful from abroad</h2>
          </div>
          <Link to="/reports" className="text-sm font-medium text-primary hover:underline">
            All reports →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {picks.map((r) => (
            <ReportCard key={r.slug} report={r} />
          ))}
        </div>
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
              District spotlights, new reports and returnee stories — written for Nepalis abroad.
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