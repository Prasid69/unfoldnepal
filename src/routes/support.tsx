import { createFileRoute } from "@tanstack/react-router";
import { HeroPageHeader, Section, Eyebrow } from "@/components/site/Primitives";
import { FileText, MapPinned, Users, MessageCircle } from "lucide-react";
import heroSupport from "@/assets/hero-support-candle.jpg";

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
    body: "Data analysis, editing, design and publishing. Our articles and research stay free to read for anyone in Nepal.",
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
      <HeroPageHeader
        eyebrow="Support the research"
        title="Help us unfold Nepal's entrepreneurial future"
        intro="UnfoldNepal is a not-for-profit organization. Every contribution funds fieldwork, research and publishing that stays free to read in Nepal."
        heroImg={heroSupport}
        heroAlt="Research books and handwritten notes on a wooden desk lit by candlelight with Himalayan peaks visible through the window at dusk"
      />

      <Section className="border-b border-border bg-sand">
        <div className="mx-auto max-w-xl text-center">
          <Eyebrow>Get in touch</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Want to support? Reach out on WhatsApp
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            If you would like to contribute to our fieldwork and research, send
            us a message on WhatsApp. Every contribution keeps our work free to
            read in Nepal.
          </p>
          <a
            href="https://wa.me/9779849288608"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-sm bg-primary px-7 py-4 text-base font-semibold text-primary-foreground transition hover:opacity-90"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            +977 9849288608
          </a>
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
