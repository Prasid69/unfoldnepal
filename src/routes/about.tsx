import { createFileRoute, Link, useLocation } from "@tanstack/react-router";
import { useEffect } from "react";
import { PageHeader, Section, Eyebrow } from "@/components/site/Primitives";
import { BOARD, ORG } from "@/data/site";

const TITLE = "About UnfoldNepal — Nepal SME research organisation";
const DESCRIPTION =
  "UnfoldNepal is a not-for-profit organization registered in Nepal. We research and publish on the country's cottage, small and medium enterprises across its districts.";

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
    body: "Publish books on Nepal's enterprise economy — led by the 100 Businesses of Nepal series — in Nepali and English, priced for students and first-time founders.",
  },
  {
    title: "Reports and articles",
    body: "Produce district sector reports, data briefs and case studies, free to read in Nepal, always with the method described.",
  },
  {
    title: "Access to finance",
    body: "Document how small enterprises actually borrow — cooperatives, microfinance, bank loans, supplier credit. We inform; we do not lend or advise.",
  },
  {
    title: "Field research and polling",
    body: "Run surveys, interviews and sentiment polls with business owners and returnee entrepreneurs across Nepal's districts.",
  },
  {
    title: "Better business operations",
    body: "Turn findings into benchmarks, checklists and registration walk-throughs that help enterprises survive past year three.",
  },
  {
    title: "Education support",
    body: "Share datasets and case studies with universities, and train early-career researchers in field methods and ethics.",
  },
  {
    title: "Membership community",
    body: "Convene owners of small enterprises and returnee entrepreneurs for peer exchange and shared representation.",
  },
];

const PRIORITIES = [
  {
    title: "Finishing the 100 Businesses book",
    body: "Ten of one hundred profiles are complete. Funding the next round of fieldwork, fact-checking and translation is our first priority.",
  },
  {
    title: "Keeping research free in Nepal",
    body: "Grants and memberships cover printing, hosting and translation so cost is never the reason a founder cannot read our work.",
  },
  {
    title: "People we need",
    body: "Field researchers on short district placements, Nepali–English translators and editors, and diaspora chapter coordinators.",
  },
];

function About() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="A research house for Nepal's small enterprise economy"
        intro="We study the businesses that already work in Nepal — small, unglamorous, profitable — and publish what we learn so that others can repeat it."
      />

      <Section id="about-unfold-nepal" className="scroll-mt-16">
        <div className="max-w-2xl">
          <Eyebrow>Who we are</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">About Unfold Nepal</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            UnfoldNepal is a not-for-profit organization registered in Nepal. We research and
            publish on the country's cottage, small and medium enterprises, district by district,
            so Nepalis at home and abroad can build on evidence rather than guesswork.
          </p>
        </div>

        <div id="mission-vision" className="mt-16 grid scroll-mt-24 gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Eyebrow>Mission &amp; vision</Eyebrow>
          </div>
          <div className="space-y-5 text-lg leading-relaxed">
            <p>
              <strong className="font-semibold">Mission:</strong> help Nepalis, especially those
              abroad, find real and repeatable business ideas rooted in Nepal's own districts.
            </p>
            <p>
              <strong className="font-semibold">Vision:</strong> a Nepal where global Nepali talent
              and capital flow back into home districts and create dignified local jobs.
            </p>
          </div>
        </div>

        <div id="history" className="mt-16 grid scroll-mt-24 gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Eyebrow>History</Eyebrow>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              UnfoldNepal began in 2022. Nepalis abroad could find national statistics and
              headlines, but nothing that answered the practical question: what does a small
              business in a given district cost to run, and does it make money?
            </p>
            <p>
              A small group of Nepali professionals started walking into workshops and writing the
              numbers down. By 2023 the work had a name, a registered not-for-profit structure and
              a board — and today it is a research and publishing organisation with a flagship book
              in progress.
            </p>
          </div>
        </div>

        <div id="legal-status" className="mt-16 grid scroll-mt-24 gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Eyebrow>Legal status</Eyebrow>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">
              A not-for-profit organization, registered in Nepal
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              No surplus is distributed to members or officers — all income from publications,
              grants and memberships goes back into research and publishing. Registration and
              audited-account details are available on request at{" "}
              <Link to="/contact" className="text-primary hover:underline">
                our contact page
              </Link>
              .
            </p>
          </div>
        </div>

        <div id="objectives" className="mt-16 scroll-mt-24">
          <Eyebrow>Objectives</Eyebrow>
          <h3 className="mt-4 text-3xl font-semibold">What we are set up to do</h3>
          <ol className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {OBJECTIVES.map((o, i) => (
              <li key={o.title} className="rule-top pt-6">
                <span className="font-serif text-primary">{String(i + 1).padStart(2, "0")}</span>
                <h4 className="mt-2 text-lg font-semibold">{o.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section id="team" className="scroll-mt-16 border-y border-border bg-card">
        <div className="max-w-2xl">
          <Eyebrow>Team</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Governance</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            A small staff and a board of directors set the research agenda, approve publications
            and are accountable for the organization's not-for-profit status.
          </p>
        </div>

        <h3 className="mt-14 text-2xl font-semibold">Board of Directors</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BOARD.map((p) => (
            <div key={p.name} className="border border-border bg-background p-6">
              <div className="flex size-12 items-center justify-center rounded-full bg-accent font-serif text-lg text-accent-foreground">
                {p.name
                  .split(" ")
                  .slice(0, 2)
                  .map((w) => w[0])
                  .join("")}
              </div>
              <h4 className="mt-4 text-lg font-semibold">{p.name}</h4>
              <p className="text-sm text-primary">{p.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Link
            to="/board"
            className="rounded-sm border border-foreground/25 px-6 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
          >
            Meet the Board of Directors →
          </Link>
          <p className="text-sm text-muted-foreground">
            Board enquiries:{" "}
            <a className="text-primary hover:underline" href={`mailto:${ORG.email}`}>
              {ORG.email}
            </a>
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl">
          <Eyebrow>Current priorities</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Where funding and volunteers matter most
          </h2>
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {PRIORITIES.map((p) => (
            <div key={p.title} className="rule-top pt-6">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            to="/contact"
            hash="donate"
            className="rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Support the research
          </Link>
          <Link
            to="/contact"
            className="rounded-sm border border-foreground/25 px-6 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
          >
            Volunteer with us
          </Link>
        </div>
      </Section>
    </>
  );
}
