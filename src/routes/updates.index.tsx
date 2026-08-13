import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/Primitives";
import { NewsletterForm } from "@/components/site/NewsletterForm";
import { POSTS } from "@/data/site";

const TITLE = "Updates — district spotlights and diaspora stories | UnfoldNepal";
const DESCRIPTION =
  "Short articles from the field: Nepal district business spotlights, diaspora entrepreneurship stories, and notes on how our SME research is done.";

export const Route = createFileRoute("/updates/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/updates" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/updates" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "UnfoldNepal Updates",
          description: DESCRIPTION,
          inLanguage: "en",
          blogPost: POSTS.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            description: p.excerpt,
            datePublished: p.isoDate,
            author: { "@type": "Person", name: p.author },
            url: `/updates/${p.slug}`,
          })),
        }),
      },
    ],
  }),
  component: Updates,
});

function Updates() {
  return (
    <>
      <PageHeader
        eyebrow="Updates"
        title="Notes from the districts"
        intro="Shorter than a report, longer than a post. District spotlights, returnee stories and working notes on method."
      />

      <Section>
        <ul className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <li key={p.slug} className="rule-top pt-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="text-primary">{p.tag}</span>
                <span aria-hidden>·</span>
                <time dateTime={p.isoDate}>{p.date}</time>
                <span aria-hidden>·</span>
                <span>{p.readingTime}</span>
              </div>
              <h2 className="mt-3 text-xl leading-snug font-semibold">
                <Link to="/updates/$slug" params={{ slug: p.slug }} className="hover:text-primary">
                  {p.title}
                </Link>
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{p.excerpt}</p>
              <Link
                to="/updates/$slug"
                params={{ slug: p.slug }}
                className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
              >
                Read the article →
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-12 text-sm text-muted-foreground">
          Looking for the full studies instead?{" "}
          <Link to="/reports" className="text-primary hover:underline">
            Browse the research reports
          </Link>
          .
        </p>
      </Section>

      <Section className="border-t border-border bg-sand">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <h2 className="text-3xl font-semibold">Get updates by email</h2>
          <NewsletterForm />
        </div>
      </Section>
    </>
  );
}