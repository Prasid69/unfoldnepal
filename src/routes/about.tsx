import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section, Eyebrow } from "@/components/site/Primitives";

const TITLE = "About UnfoldNepal — Nepal SME research organisation";
const DESCRIPTION =
  "UnfoldNepal is a non-profit-distributing research and publishing organisation registered in Nepal, studying cottage, small and medium enterprises across the country's districts.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const TEAM = [
  { name: "Dr. Anjana Shrestha", role: "Executive Director", note: "Development economist; former lead researcher, enterprise surveys." },
  { name: "Rabin Thapa", role: "Head of Field Research", note: "Fifteen years of district-level survey work across all seven provinces." },
  { name: "Sushmita Rai", role: "Editor, Publications", note: "Former business desk editor; leads the 100 Businesses series." },
  { name: "Prakash K.C.", role: "Data & Methods", note: "Statistician working on sampling design and firm-level panels." },
  { name: "Dr. Meena Joshi", role: "Advisor", note: "Professor of enterprise policy; advises on research ethics." },
  { name: "Deepak Lama", role: "Advisor, Diaspora Relations", note: "Twenty years in the UK Nepali business community." },
];

const OBJECTIVES = [
  "Conduct market research and public opinion polling on enterprise conditions in Nepal's districts.",
  "Publish sector reports, district profiles and the 100 Businesses book series.",
  "Operate as a business and employer membership organisation supporting CSME owners.",
  "Advocate for evidence-based policy on small enterprise, credit access and local employment.",
  "Make research freely available to students, journalists and civil society in Nepal.",
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="A research house for Nepal's small enterprise economy"
        intro="We study the businesses that already work in Nepal — small, unglamorous, profitable — and publish what we learn so that others can repeat it."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Eyebrow>Mission & vision</Eyebrow>
          </div>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              <strong className="font-semibold">Our mission</strong> is to help Nepalis — especially
              those living abroad — discover real, replicable business ideas rooted in Nepal's own
              districts, and to make returning and investing a decision backed by evidence.
            </p>
            <p>
              <strong className="font-semibold">Our vision</strong> is a Nepal where global Nepali
              talent and capital flow back into home districts, and where the resulting enterprises
              create dignified local employment rather than another wave of departure.
            </p>
            <p className="text-muted-foreground">
              We began in 2022 with a simple frustration: a would-be founder in Sydney could find
              national GDP figures for Nepal but nothing about what a printing press in Butwal costs
              to run. The gap was not data, it was documentation. So we started walking into
              workshops with a questionnaire.
            </p>
          </div>
        </div>
      </Section>

      <Section className="border-y border-border bg-card">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Eyebrow>Legal status</Eyebrow>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">
              Non-profit-distributing, registered in Nepal
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              UnfoldNepal is registered in Nepal as a non-profit-distributing organisation. No
              surplus is distributed to members or officers; all income from publications, grants
              and memberships is applied to research and publishing activity. Our registered
              activities cover business and employer membership organisation activities, market
              research and public opinion polling, publishing, and related research and advocacy
              work.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Registration and audited-account details are available on request at{" "}
              <Link to="/contact" className="text-primary hover:underline">
                our contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <Eyebrow>Objectives</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold">What we are set up to do</h2>
        <ol className="mt-8 max-w-3xl space-y-4">
          {OBJECTIVES.map((o, i) => (
            <li key={o} className="flex gap-4 rule-top pt-4">
              <span className="font-serif text-primary">{String(i + 1).padStart(2, "0")}</span>
              <span className="leading-relaxed text-muted-foreground">{o}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="border-t border-border bg-sand">
        <Eyebrow>Team & advisors</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold">The people doing the fieldwork</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((p) => (
            <div key={p.name} className="border border-border bg-card p-6">
              <div className="flex size-12 items-center justify-center rounded-full bg-accent font-serif text-lg text-accent-foreground">
                {p.name
                  .split(" ")
                  .filter((w) => !w.endsWith("."))
                  .slice(0, 2)
                  .map((w) => w[0])
                  .join("")}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{p.name}</h3>
              <p className="text-sm text-primary">{p.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.note}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          Placeholder profiles — replace with real team members and photographs before launch.
        </p>
      </Section>
    </>
  );
}