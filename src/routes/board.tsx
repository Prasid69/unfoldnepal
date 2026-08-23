import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow, PageHeader, Section } from "@/components/site/Primitives";
import { BOARD, ORG } from "@/data/site";

const TITLE = "Board of Directors — UnfoldNepal";
const DESCRIPTION =
  "Meet the board of directors of UnfoldNepal — the governance structure and the people accountable for the not-for-profit organization researching Nepal's small enterprise economy.";

export const Route = createFileRoute("/board")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/board" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/board" }],
  }),
  component: BoardPage,
});

const GOVERNANCE = [
  {
    title: "Members & annual general meeting",
    body: "UnfoldNepal is a membership organization, not a company with shareholders. The annual general meeting of members approves the audited accounts, appoints the auditor and elects the board of directors.",
  },
  {
    title: "Board of directors",
    body: "Five elected directors set the research agenda, approve every publication before release and are accountable for the organization's not-for-profit status. The board meets quarterly and reviews fieldwork progress, finance and research ethics.",
  },
  {
    title: "Chairperson & CEO",
    body: "Day-to-day leadership is delegated to the Chairperson & Chief Executive Officer, who leads the staff team, directs fieldwork and represents the organization — within the mandate and budget set by the board.",
  },
  {
    title: "Audit & accountability",
    body: "Accounts are audited annually and filed with the registering authority in Nepal. No surplus is distributed to members or officers; all income from publications, grants and memberships is applied to research and publishing activity.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

function BoardPage() {
  return (
    <>
      <PageHeader
        eyebrow="Team"
        title="Board of Directors"
        intro="The board sets UnfoldNepal's research agenda, approves every publication and is accountable for the organization's not-for-profit status."
      />

      {/* ============ Governance structure ============ */}
      <Section id="governance" className="scroll-mt-16">
        <div className="max-w-2xl">
          <Eyebrow>Governance</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">How the organization is governed</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            UnfoldNepal is registered in Nepal as a not-for-profit organization. Its governance is
            deliberately simple: members elect a board, the board directs the work, and an
            independent audit keeps everyone honest.
          </p>
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {GOVERNANCE.map((g) => (
            <div key={g.title} className="rule-top pt-6">
              <h3 className="text-lg font-semibold">{g.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{g.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ============ Board members ============ */}
      <Section className="border-y border-border bg-card">
        <div className="max-w-2xl">
          <Eyebrow>The directors</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Meet the board</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Five directors, each responsible for a distinct part of the organization's work.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {BOARD.map((p) => (
            <article
              key={p.name}
              className="grid gap-6 border border-border bg-background p-6 sm:grid-cols-[180px_1fr] md:p-8"
            >
              {/* Photograph placeholder — swap this initials block for an <img> when portraits are available */}
              <div
                className="flex aspect-[3/4] w-full max-w-44 items-center justify-center rounded-sm bg-accent font-serif text-4xl text-accent-foreground"
                role="img"
                aria-label={`Portrait of ${p.name} to be added`}
              >
                {initials(p.name)}
              </div>
              <div>
                <h3 className="text-2xl font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-primary">{p.role}</p>
                <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{p.bio}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.expertise.map((e) => (
                    <span
                      key={e}
                      className="rounded-sm border border-border px-2 py-1 text-xs text-muted-foreground"
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          Board enquiries:{" "}
          <a className="text-primary hover:underline" href={`mailto:${ORG.email}`}>
            {ORG.email}
          </a>
        </p>
        <Link
          to="/about"
          className="mt-6 inline-block rounded-sm border border-foreground/25 px-6 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
        >
          ← Back to About
        </Link>
      </Section>
    </>
  );
}
