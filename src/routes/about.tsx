import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section, Eyebrow } from "@/components/site/Primitives";
import { BOARD, ORG } from "@/data/site";

const TITLE = "About UnfoldNepal — Nepal SME research organisation";
const DESCRIPTION =
  "UnfoldNepal is a profit non-distributing company registered in Nepal. We research and publish on the country's cottage, small and medium enterprises across its districts.";

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

const OBJECTIVES = [
  {
    title: "Book publishing",
    body: "Research, write, edit and publish books on Nepal's enterprise economy — most visibly the 100 Businesses of Nepal series, which documents real, operating cottage, small and medium businesses with their costs, revenues, staffing and the practical steps a founder took to start them. Books are published in Nepali and English, in print and digital form, and priced so that students and first-time founders inside Nepal can afford them.",
  },
  {
    title: "Other publishing activities",
    body: "Produce and distribute district sector reports, data briefs, methodology notes, case studies, newsletters and online articles. Everything we publish is released with its underlying method described, and our research is free to read within Nepal so that journalists, teachers, students and civil-society organisations can reuse it without permission or payment.",
  },
  {
    title: "Activities auxiliary to financial services",
    body: "Document how small enterprises in Nepal actually access finance — cooperatives, microfinance, group lending, bank term loans, supplier credit and remittance savings. We publish comparative information on credit terms, collateral expectations and realistic repayment periods so founders and their families can judge financing options. We are a research and information body: we do not lend, broker, take deposits or give regulated financial advice.",
  },
  {
    title: "Market research and public opinion polling",
    body: "Design and run field surveys, structured interviews, firm-level panels and opinion polls across Nepal's districts and provinces. This includes cost-structure surveys, demand and price sampling, employment counts, and periodic sentiment polling among business owners and returnee entrepreneurs. Sampling design, questionnaires and limitations are published alongside every result.",
  },
  {
    title: "Improving the efficiency of business operations",
    body: "Turn findings into practical guidance that makes enterprises work better: benchmark cost and margin data by sector, operating checklists, registration and licensing walk-throughs, and comparisons of what distinguishes units that survive their third year from those that do not. Where the evidence points at policy or regulatory friction, we place it in front of the relevant authorities and chambers.",
  },
  {
    title: "Education support activities",
    body: "Support learning through open teaching material, guest lectures, workshops and internships for students of economics, management and journalism. Our datasets and case studies are made available to universities and colleges in Nepal for classroom use, and we train early-career researchers in field survey methods and research ethics.",
  },
  {
    title: "Business and employers' membership organisation",
    body: "Convene owners of cottage, small and medium enterprises and returnee entrepreneurs as a membership community — through district meetings, a directory of documented businesses, peer exchange between founders in the same sector, and collective representation of members' shared concerns to policymakers and funders.",
  },
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
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Our registered objectives, and what each one means in practice.
        </p>
        <ol className="mt-10 max-w-3xl space-y-8">
          {OBJECTIVES.map((o, i) => (
            <li key={o.title} className="rule-top pt-6">
              <div className="flex gap-4">
                <span className="font-serif text-primary">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-lg font-semibold">{o.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{o.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="border-t border-border bg-sand">
        <Eyebrow>Governance</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold">Board of Directors</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          The board sets the research agenda, approves publications and is accountable for the
          organisation's non-profit-distributing status.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BOARD.map((p) => (
            <div key={p.name} className="border border-border bg-card p-6">
              <div className="flex size-12 items-center justify-center rounded-full bg-accent font-serif text-lg text-accent-foreground">
                {p.name
                  .split(" ")
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
        <p className="mt-8 text-sm text-muted-foreground">
          Board enquiries:{" "}
          <a className="text-primary hover:underline" href={`mailto:${ORG.email}`}>
            {ORG.email}
          </a>
        </p>
      </Section>

    </>
  );
}