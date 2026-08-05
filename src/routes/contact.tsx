import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, Eyebrow } from "@/components/site/Primitives";
import { ContactForm } from "@/components/site/ContactForm";
import { ORG } from "@/data/site";

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
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Write to us"
        intro="Research requests, press enquiries, partnership proposals or a business you think we should document — all of it reaches the same small team."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-8">
            <div>
              <Eyebrow>Office</Eyebrow>
              <p className="mt-3 leading-relaxed text-muted-foreground">{ORG.address}</p>
            </div>
            <div>
              <Eyebrow>Email</Eyebrow>
              <p className="mt-3">
                <a className="text-primary hover:underline" href={`mailto:${ORG.email}`}>
                  {ORG.email}
                </a>
              </p>
            </div>
            <div>
              <Eyebrow>Phone</Eyebrow>
              <p className="mt-3 text-muted-foreground">{ORG.phone}</p>
            </div>
            <div>
              <Eyebrow>Registration</Eyebrow>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                UnfoldNepal is a non-profit-distributing research and publishing organisation
                registered in Nepal. Registration details and audited accounts available on request.
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}