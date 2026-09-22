import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/site/Primitives";
import { POSTS, ORG, type Post } from "@/data/site";

export const Route = createFileRoute("/updates/$slug")({
  loader: ({ params }) => {
    let post = POSTS.find((p) => p.slug === params.slug);
    if (!post && params.slug === "how-we-count-a-business") {
      post = POSTS.find((p) => p.slug === "building-it-step-by-step");
    }
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
         meta: [{ title: "Article not found | UnfoldNepal" }, { name: "robots", content: "noindex" }],
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
        <div className="mx-auto w-full max-w-[1600px] px-5 py-14 sm:px-8 md:py-20 lg:px-12">
          <Link to="/updates" className="text-sm text-primary hover:underline">
            ← All articles
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span className="text-primary font-medium">{post.tag}</span>
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
          <p className="mt-6 text-sm text-muted-foreground">
            By <span className="text-foreground font-medium">{post.author}</span>
            {post.location ? ` · ${post.location}` : ""}
          </p>
        </div>
      </header>

      <Section>
        <div className="mx-auto max-w-3xl">
          {post.body.map((block, idx) => (
            <div key={block.heading || `block-${idx}`} className="mb-10 last:mb-0">
              {block.heading && (
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                  {block.heading}
                </h2>
              )}

              {block.paragraphs &&
                block.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}

              {block.features && (
                <div className="my-8 grid gap-4 sm:grid-cols-2">
                  {block.features.map((feat) => (
                    <div
                      key={feat.title}
                      className="rounded-lg border border-border bg-card p-5 transition-shadow hover:shadow-xs"
                    >
                      <h3 className="font-semibold text-foreground flex items-center gap-2">
                        <span className="inline-block w-2 h-2 rounded-full bg-primary" />
                        {feat.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {feat.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {block.image && (
                <figure className="my-10 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                  <img
                    src={block.image.src}
                    alt={block.image.alt}
                    className="w-full h-auto max-h-[580px] object-cover"
                    loading="lazy"
                  />
                  {block.image.caption && (
                    <figcaption className="border-t border-border/60 bg-sand/50 px-5 py-3 text-center text-sm italic text-muted-foreground">
                      {block.image.caption}
                    </figcaption>
                  )}
                </figure>
              )}

              {block.quote && (
                <blockquote className="my-8 border-l-4 border-primary bg-sand/60 px-6 py-4 rounded-r-lg">
                  <p className="text-lg md:text-xl font-medium italic text-foreground leading-snug">
                    "{block.quote.text}"
                  </p>
                  {block.quote.caption && (
                    <cite className="mt-2 block not-italic text-xs md:text-sm text-muted-foreground font-medium">
                      — {block.quote.caption}
                    </cite>
                  )}
                </blockquote>
              )}

              {block.cta && (
                <div className="my-10 rounded-xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
                  <p className="text-base sm:text-lg font-medium text-foreground">
                    {block.cta.text}
                  </p>
                  <div className="mt-4">
                    <Link
                      to={block.cta.linkTo}
                      className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 shadow-sm"
                    >
                      {block.cta.linkText} →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
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
