import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/site/Primitives";
import { NewsletterForm } from "@/components/site/NewsletterForm";
import { POSTS, ORG, type Post } from "@/data/site";

export const Route = createFileRoute("/updates/$slug")({
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article not found — UnfoldNepal" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    const title = `${post.title} | UnfoldNepal`;
    const description = post.excerpt.slice(0, 155);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/updates/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: `/updates/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.isoDate,
            inLanguage: "en",
            articleSection: post.tag,
            author: { "@type": "Person", name: post.author },
            publisher: { "@type": "Organization", name: ORG.name, url: ORG.domain },
            mainEntityOfPage: `${ORG.domain}/updates/${params.slug}`,
          }),
        },
      ],
    };
  },
  component: UpdateDetail,
});

function UpdateDetail() {
  const { post } = Route.useLoaderData() as { post: Post };
  const related = POSTS.filter((p) => post.related.includes(p.slug));

  return (
    <article>
      <header className="border-b border-border bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <Link to="/updates" className="text-sm text-primary hover:underline">
            ← All updates
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span className="text-primary">{post.tag}</span>
            <span aria-hidden>·</span>
            <time dateTime={post.isoDate}>{post.date}</time>
            <span aria-hidden>·</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="mt-4 max-w-4xl text-3xl leading-[1.15] font-semibold md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>
          <p className="mt-6 text-sm text-muted-foreground">By {post.author}</p>
        </div>
      </header>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="max-w-2xl">
            {post.body.map((block) => (
              <div key={block.heading} className="mb-12 last:mb-0">
                <h2 className="text-2xl font-semibold">{block.heading}</h2>
                {block.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-4 leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
              </div>
            ))}

            <p className="rule-top pt-6 text-sm text-muted-foreground">
              Written by {post.author} for UnfoldNepal. For the underlying studies, see the{" "}
              <Link to="/reports" className="text-primary hover:underline">
                research library
              </Link>{" "}
              or the{" "}
              <Link to="/book" className="text-primary hover:underline">
                100 Businesses book project
              </Link>
              .
            </p>
          </div>

          <aside>
            <div className="border border-border bg-card p-6">
              <h2 className="text-lg font-semibold">Get updates by email</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                District spotlights and new reports, a few times a month.
              </p>
              <div className="mt-5">
                <NewsletterForm />
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {related.length > 0 && (
        <Section className="border-t border-border bg-card">
          <Eyebrow>Keep reading</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold">More from the field</h2>
          <ul className="mt-8 grid gap-8 md:grid-cols-2">
            {related.map((p) => (
              <li key={p.slug} className="rule-top pt-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="text-primary">{p.tag}</span>
                  <span aria-hidden>·</span>
                  <time dateTime={p.isoDate}>{p.date}</time>
                </div>
                <h3 className="mt-3 text-xl leading-snug font-semibold">
                  <Link to="/updates/$slug" params={{ slug: p.slug }} className="hover:text-primary">
                    {p.title}
                  </Link>
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{p.excerpt}</p>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </article>
  );
}
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/updates/$slug')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/updates/$slug"!</div>
}
