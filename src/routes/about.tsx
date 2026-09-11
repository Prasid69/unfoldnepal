import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section, Eyebrow } from "@/components/site/Primitives";
import { BOARD } from "@/data/site";

const TITLE = "About UnfoldNepal | Returnee entrepreneurship in Nepal";
const DESCRIPTION =
  "UnfoldNepal helps foreign returnees turn their skills, experience and ideas into sustainable businesses that create meaningful work in Nepal.";

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
    title: "Entrepreneurship training",
    body: "Give returnees practical knowledge to test an idea, understand a market and build a business with a clear path to sustainability.",
  },
  {
    title: "Awareness and guidance",
    body: "Make the journey from an early idea to a working business easier to understand through useful information and step-by-step guidance.",
  },
  {
    title: "Mentorship and support",
    body: "Connect returnees with experienced people who can challenge assumptions, solve problems and help them make informed decisions.",
  },
  {
    title: "Research and publishing",
    body: "Document real businesses, local opportunities and lessons that returnees and aspiring entrepreneurs can use with confidence.",
  },
  {
    title: "A stronger ecosystem",
    body: "Build connections among returnees, local entrepreneurs, mentors, institutions and the diaspora to create more meaningful jobs in Nepal.",
  },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Helping experience gained abroad create opportunity at home"
        intro="UnfoldNepal helps foreign returnees turn their skills, experience and ideas into viable businesses in Nepal."
      />

      <Section id="about-unfold-nepal" className="scroll-mt-16">
        <div className="max-w-2xl">
          <Eyebrow>Who we are</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">About Unfold Nepal</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            We support returnees and encourage the wider Nepali diaspora through entrepreneurship
            training, awareness initiatives, mentorship, practical guidance and strategic support.
            We help people move from an idea to a business that can grow, last and create work for
            others.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-foreground">
            We believe every Nepali abroad carries a piece of Nepal's future. Our work is to help
            them unfold it.
          </p>
        </div>

        <div id="mission" className="mt-16 grid scroll-mt-24 gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Eyebrow>Our mission</Eyebrow>
          </div>
          <div className="text-lg leading-relaxed">
            <p>
              To strengthen Nepal's entrepreneurial ecosystem by helping foreign returnees bring
              home the knowledge, skills, networks and experience they gained abroad, and turn them
              into sustainable businesses and meaningful employment.
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
              No surplus is distributed to members or officers. All income supports the company's
              work with returnees, entrepreneurs and the wider ecosystem. Registration and
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
          <h3 className="mt-4 text-3xl font-semibold">What we work to achieve</h3>
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
            The board guides UnfoldNepal's strategy, protects its not-for-profit purpose and keeps
            its work accountable to the people and communities it serves.
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
      </Section>
    </>
  );
}
