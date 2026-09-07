import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Eyebrow, Figure, ReportCard } from "@/components/site/Primitives";
import { NewsletterForm } from "@/components/site/NewsletterForm";
import { REPORTS, STATS } from "@/data/site";
import heroImg from "@/assets/hero-entrepreneur.jpg";
import bookImg from "@/assets/book-cover-nepal.jpg";
import { CountUpStat } from "@/components/site/CountUpStat";

const TITLE = "UnfoldNepal — Nepal SME research and the 100 Businesses book";
const DESCRIPTION =
  "Independent research on Nepal's cottage, small and medium enterprises, published for the Nepali diaspora, funders and policymakers planning to build in Nepal.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const PILLARS = [
  {
    title: "Research",
    body: "District-level fieldwork on cottage, small and medium enterprises: cost structures, market access, employment and what actually makes a firm survive its third year.",
    link: { to: "/reports", label: "Browse the reports" },
  },
  {
    title: "Publish",
    body: "Sector reports and a flagship book series profiling 100 businesses running successfully across Nepal's districts — written to be used, not shelved.",
    link: { to: "/book", label: "The 100 Businesses book" },
  },
  {
    title: "Connect the diaspora",
    body: "Translating that evidence for Nepalis abroad who are weighing a return: what a venture costs, where it works, and who is already doing it.",
    link: { to: "/diaspora", label: "If you're abroad" },
  },
] as const;

function Index() {
  const featured = REPORTS.slice(0, 3);

  return (
    <>
      <section className="border-b border-border bg-sand">
        <div className="mx-auto grid w-full max-w-[1600px] items-center gap-10 px-5 py-14 sm:px-8 md:py-20 lg:grid-cols-[1fr_1.15fr] lg:gap-14 lg:px-12">
          <div>
            <Eyebrow>Research · Publishing · Nepal</Eyebrow>
            <h1 className="mt-5 text-4xl leading-[1.05] font-semibold md:text-5xl lg:text-6xl">
              Building Nepal's entrepreneurial future, district by district.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We grow enterprise in Nepal and connect the global Nepali diaspora to it — with
              research, published evidence and the people already doing the work.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/reports"
                className="rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Read our latest report
              </Link>
              <Link
                to="/get-involved"
                className="rounded-sm border border-foreground/25 px-6 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
              >
                Support the research
              </Link>
            </div>
          </div>
          <Figure
            src={heroImg}
            alt="A confident Nepali woman entrepreneur standing at the entrance of her textile workshop in Kathmandu"
            caption="Photo: Sunkoshi Handlooms, Lalitpur District"
            width={1600}
            height={1104}
            priority
          />
        </div>
      </section>

      <section aria-label="Impact in numbers" className="border-b border-border">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-2 gap-px bg-border px-0 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-background px-5 py-10 text-center">
              <p className="font-serif text-4xl font-semibold text-primary">
                <CountUpStat value={s.value} />
              </p>
              <p className="mt-2 text-xs tracking-wide text-muted-foreground uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Section>
        <Eyebrow>What we do</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold md:text-4xl">
          Three pillars, one purpose: usable evidence about enterprise in Nepal.
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {PILLARS.map((p) => (
            <div key={p.title} className="rule-top pt-6">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <Link
                to={p.link.to}
                className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
              >
                {p.link.label} →
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-y border-border bg-card">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Figure
            src={bookImg}
            alt="Hardcover edition of the 100 Businesses of Nepal book standing on a cream surface"
            caption="The 100 Businesses of Nepal — first edition, in production"
            width={1200}
            height={1200}
          />
          <div>
            <Eyebrow>Flagship project</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              100 Businesses of Nepal
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              A book series profiling one hundred businesses running successfully across Nepal's
              districts — the capital they needed, the mistakes they made, the people they employ,
              and whether the model can be repeated somewhere else.
            </p>
            <p className="mt-6 font-serif text-2xl">
              <CountUpStat value="10" className="text-primary" /> of 100 profiled
            </p>
            <div className="mt-3 h-1.5 w-full max-w-sm overflow-hidden rounded-full bg-secondary">
              <div className="h-full w-[10%] bg-primary" />
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/book"
                className="rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Explore the book project
              </Link>
              <Link
                to="/book"
                hash="nominate"
                className="rounded-sm border border-foreground/25 px-6 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
              >
                Nominate a business
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>Latest research</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Recent reports</h2>
          </div>
          <Link to="/reports" className="text-sm font-medium text-primary hover:underline">
            All reports →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((r) => (
            <ReportCard key={r.slug} report={r} />
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-card">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-semibold">Stay with the research</h2>
            <p className="mt-4 text-muted-foreground">
              New reports, district spotlights and book progress — about once a month.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </Section>
    </>
  );
}
