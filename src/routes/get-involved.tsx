import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section, Eyebrow } from "@/components/site/Primitives";
import { ContactForm } from "@/components/site/ContactForm";
import { ORG } from "@/data/site";

const TITLE = "Support Nepal SME research — donate, partner, volunteer | UnfoldNepal";
const DESCRIPTION =
  "Fund district fieldwork, partner as an institution, join as a researcher, or contribute a business story to the 100 Businesses book project.";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/get-involved" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/get-involved" }],
  }),
  component: GetInvolved,
});

function GetInvolved() {
  return (
    <>
      <PageHeader
        eyebrow="Get involved"
        title="Fieldwork costs money. Evidence is worth it."
        intro="A single district study takes two researchers six weeks. Everything we publish is free to read in Nepal, which means the work is funded by people and institutions who think it should exist."
      />

      <Section id="donate">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border border-primary bg-card p-8">
            <Eyebrow>Donate</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold">Fund a district study</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Contributions go directly to field costs: researcher time, travel, translation and
              printing. Funders are acknowledged in the resulting report unless they prefer
              otherwise.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li>NPR 5,000 — one day of field interviews</li>
              <li>NPR 50,000 — one business profile, start to publication</li>
              <li>NPR 400,000 — one full district sector study</li>
            </ul>
            <a
              href="#contact-form"
              className="mt-8 inline-block rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Arrange a contribution
            </a>
          </div>

          <div className="grid gap-6">
            {[
              {
                eyebrow: "Partner",
                title: "Institutions, CSOs and funders",
                body: "We co-design studies with chambers, universities and civil-society organisations, and license datasets for policy work. Multi-year research partnerships are welcome.",
              },
              {
                eyebrow: "Volunteer",
                title: "Researchers and translators",
                body: "We take on field researchers in every province, plus editors and Nepali–English translators. Field roles are paid a stipend; remote roles are usually voluntary.",
              },
              {
                eyebrow: "Contribute",
                title: "Tell us about a business",
                body: "The best profiles reach us from readers who know the founder personally.",
                link: { to: "/book" as const, label: "Nominate a business" },
              },
            ].map((card) => (
              <div key={card.title} className="border border-border bg-card p-8">
                <Eyebrow>{card.eyebrow}</Eyebrow>
                <h2 className="mt-3 text-xl font-semibold">{card.title}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{card.body}</p>
                {card.link && (
                  <Link
                    to={card.link.to}
                    hash="nominate"
                    className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
                  >
                    {card.link.label} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="contact-form" className="border-t border-border bg-sand">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Eyebrow>Talk to us</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold">Start a conversation</h2>
            <p className="mt-4 text-muted-foreground">
              Tell us how you would like to be involved and we will reply within three working days.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              {ORG.address}
              <br />
              <a className="text-primary hover:underline" href={`mailto:${ORG.email}`}>
                {ORG.email}
              </a>
            </p>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}