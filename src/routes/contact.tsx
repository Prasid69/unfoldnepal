import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section, Eyebrow } from "@/components/site/Primitives";
import { ContactForm } from "@/components/site/ContactForm";
import { ORG } from "@/data/site";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

const TITLE = "Contact UnfoldNepal — research, media and partnership enquiries";
const DESCRIPTION =
  "Get in touch with UnfoldNepal about research reports, media enquiries, partnerships or the 100 Businesses book project. Based in Kathmandu, Nepal.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: TITLE,
          description: DESCRIPTION,
          mainEntity: {
            "@type": "Organization",
            name: ORG.name,
            email: ORG.email,
            telephone: ORG.phone,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kathmandu",
              addressRegion: "Bagmati Province",
              addressCountry: "NP",
            },
          },
        }),
      },
    ],
  }),
  component: Contact,
});

const CHANNELS = [
  {
    icon: Mail,
    label: "Email",
    value: ORG.email,
    href: `mailto:${ORG.email}`,
    note: "The fastest way to reach the team.",
  },
  {
    icon: Phone,
    label: "Phone",
    value: ORG.phone,
    href: `tel:${ORG.phone.replace(/\s/g, "")}`,
    note: "Sunday to Friday, office hours (NPT).",
  },
  {
    icon: MapPin,
    label: "Office",
    value: ORG.address,
    note: "Visits by appointment only.",
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within 3 working days",
    note: "Press enquiries are answered sooner.",
  },
];

const ROUTES = [
  {
    title: "Research & data requests",
    body: "Ask for a report, an underlying dataset, or a citation. Tell us the district or sector you need and how you intend to use it.",
  },
  {
    title: "Media & press",
    body: "Interviews, comment on enterprise policy, or figures for a story. Include your deadline in the first line.",
  },
  {
    title: "Partnerships & funding",
    body: "Co-designed studies, dataset licensing and multi-year research partnerships with chambers, universities and funders.",
  },
  {
    title: "Nominate a business",
    body: "Know a small business worth documenting? Send the name, district and why it works — or use the nomination form on the book page.",
  },
];

function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Write to us"
        intro="Research requests, press enquiries, partnership proposals or a business you think we should document — all of it reaches the same small team."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CHANNELS.map((c) => (
            <div key={c.label} className="border border-border bg-card p-6">
              <c.icon className="size-5 text-primary" aria-hidden="true" />
              <h2 className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {c.label}
              </h2>
              {c.href ? (
                <a
                  href={c.href}
                  className="mt-2 block break-words font-medium text-primary hover:underline"
                >
                  {c.value}
                </a>
              ) : (
                <p className="mt-2 font-medium">{c.value}</p>
              )}
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-y border-border bg-sand">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Eyebrow>Send a message</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold">Tell us what you need</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Pick the closest topic and give us enough detail to answer properly the first time. A
              real person reads every message.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Prefer email? Write directly to{" "}
              <a className="text-primary hover:underline" href={`mailto:${ORG.email}`}>
                {ORG.email}
              </a>
              .
            </p>
          </div>
          <ContactForm />
        </div>
      </Section>

      <Section>
        <Eyebrow>What people write to us about</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold">Where your message goes</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {ROUTES.map((r) => (
            <div key={r.title} className="rule-top pt-6">
              <h3 className="text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{r.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 border border-border bg-card p-8">
          <Eyebrow>Registration</Eyebrow>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            UnfoldNepal is a profit non-distributing company registered in Nepal. We research and
            publish on the country's cottage, small and medium enterprises. Registration details
            and audited accounts are available on request. Read more about our governance and
            board on the{" "}
            <Link to="/about" className="text-primary hover:underline">
              about page
            </Link>
            .
          </p>
        </div>
      </Section>
    </>
  );
}