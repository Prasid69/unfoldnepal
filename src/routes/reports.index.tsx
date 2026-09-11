import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow, ReportCard } from "@/components/site/Primitives";
import { REPORTS } from "@/data/site";
import researchHero from "@/assets/research-returnee-workshop.jpg";

const TITLE = "Business research for returnees in Nepal | UnfoldNepal";
const DESCRIPTION =
  "Practical research on Nepal's small businesses, local markets and returnee entrepreneurship, created to support better business decisions.";

export const Route = createFileRoute("/reports/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/reports" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/reports" }],
  }),
  component: ReportsIndex,
});

function ReportsIndex() {
  const featuredReports = REPORTS.slice(0, 3);

  return (
    <>
      <header className="relative isolate min-h-[30rem] border-b border-border">
        <img
          src={researchHero}
          alt="A researcher speaking with a returnee entrepreneur in a Nepalese woodcraft workshop"
          width={1920}
          height={1080}
          fetchPriority="high"
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div className="hero-overlay absolute inset-0 -z-10" aria-hidden />
        <div className="mx-auto flex min-h-[30rem] w-full max-w-[1600px] items-center px-5 py-16 sm:px-8 md:py-24 lg:px-12">
          <div className="max-w-3xl">
            <p className="eyebrow hero-text-muted">Research</p>
            <h1 className="hero-text mt-4 text-4xl leading-[1.1] font-semibold md:text-6xl">
              Evidence for building a business in Nepal
            </h1>
            <p className="hero-text-muted mt-6 max-w-2xl text-lg leading-relaxed">
              Our research helps returnees understand local markets, learn from working businesses
              and make stronger decisions before investing their time and savings.
            </p>
          </div>
        </div>
      </header>

      <Section>
        <Eyebrow>Selected reports</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold">Research built around real decisions</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredReports.map((r) => (
            <ReportCard key={r.slug} report={r} />
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-card">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Eyebrow>Methodology</Eyebrow>
          </div>
          <div className="space-y-5 leading-relaxed text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">How we conduct research</h2>
            <p>
              We work district by district. A study begins with a sector scoping visit and a list of
              registered and unregistered firms drawn from ward records, chamber lists and local
              referral. From that frame we sample firms that have operated for at least three years.
            </p>
            <p>
              Field researchers conduct structured interviews in Nepali or the local language,
              reconstructing start-up capital, monthly cost lines, employment and sales channels.
              Where owners permit, we review ledgers. Prices are independently sampled at retail.
            </p>
            <p>
              Findings are checked back with a subset of respondents before publication, and every
              report states its sample size, sampling frame and known limitations. We do not publish
              firm-level financials without written consent.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}