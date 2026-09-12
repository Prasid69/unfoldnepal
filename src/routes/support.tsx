import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, Eyebrow } from "@/components/site/Primitives";
import { ORG } from "@/data/site";
import { Heart, FileText, MapPinned, Users } from "lucide-react";

const TITLE = "Support the research | UnfoldNepal";
const DESCRIPTION =
  "Support UnfoldNepal's fieldwork, research and publishing on returnee entrepreneurship and Nepal's small businesses. Every contribution keeps our work free to read in Nepal.";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/support" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/support" }],
  }),
  component: Support,
});

const WHERE_IT_GOES = [
  {
    icon: MapPinned,
    title: "Fieldwork",
    body: "District visits, interviews with returnee entrepreneurs and the small teams behind the businesses we document.",
  },
  {
    icon: FileText,
    title: "Research and publishing",
    body: "Data analysis, editing, design and printing. Our reports stay free to read for anyone in Nepal.",
  },
  {
    icon: Users,
    title: "Mentorship and guidance",
    body: "Follow-up support that helps returnees move from an idea to a sustainable business at home.",
  },
];

function Support() {
  return (
    <>
      <PageHeader
        eyebrow="Support the research"
        title="Help us unfold Nepal's entrepreneurial future"
        intro="UnfoldNepal is a not-for-profit organization. Every contribution funds fieldwork, research and publishing that stays free to read in Nepal."
      />

      <Section className="border-b border-border bg-sand">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="max-w-xl">
            <Eyebrow>Scan to support</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Scan the QR code with your mobile wallet
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Use any Nepali mobile wallet or banking app to give. One-time or
              recurring, in NPR or USD. Every rupee goes to research that stays
              open and free.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Prefer to talk first? Write to{" "}
              <a
                className="text-primary hover:underline"
                href={`mailto:${ORG.email}`}
              >
                {ORG.email}
              </a>{" "}
              and we will help you set up a bank transfer or standing
              instruction.
            </p>
          </div>
          {/* Paste your QR code image here when ready. */}
          <div className="mx-auto flex aspect-square w-full max-w-sm flex-col items-center justify-center gap-3 rounded-sm border-2 border-dashed border-primary/50 bg-card p-6 text-center">
            <Heart className="size-8 text-primary" aria-hidden="true" />
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              QR code
            </span>
            <span className="text-sm text-muted-foreground">
              QR code appears here
            </span>
          </div>
        </div>
      </Section>

      <Section>
        <Eyebrow>Where your support goes</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold">What your contribution does</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {WHERE_IT_GOES.map((w) => (
            <div key={w.title} className="border border-border bg-card p-6">
              <w.icon className="size-5 text-primary" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold">{w.title}</h3>
              <p className="mt-2 leading-relaxed text-sm text-muted-foreground">
                {w.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-sand">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Every contribution counts</Eyebrow>
          <p className="mt-4 text-2xl font-medium leading-relaxed">
            We believe every Nepali abroad carries a piece of Nepal's future.
            Our work is to help them unfold it.
          </p>
        </div>
      </Section>
    </>
  );
}
