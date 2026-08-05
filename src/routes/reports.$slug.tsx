import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section, Eyebrow, Figure, ReportCard } from "@/components/site/Primitives";
import { REPORTS, ORG } from "@/data/site";
import dairyImg from "@/assets/report-dairy.jpg";

export const Route = createFileRoute("/reports/$slug")({
  loader: ({ params }) => {
    const report = REPORTS.find((r) => r.slug === params.slug);
    if (!report) throw notFound();
    return { report };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Report not found — UnfoldNepal" }, { name: "robots", content: "noindex" }],
      };
    }
    const { report } = loaderData;
    const title = `${report.title} | UnfoldNepal`;
    return {
      meta: [
        { title },
        { name: "description", content: report.summary.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: report.summary.slice(0, 155) },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/reports/${params.slug}` },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: report.summary.slice(0, 155) },
      ],
      links: [{ rel: "canonical", href: `/reports/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Report",
            headline: report.title,
            abstract: report.summary,
            datePublished: report.year,
            inLanguage: "en",
            about: `${report.sector} enterprises in ${report.district}, Nepal`,
            publisher: { "@type": "Organization", name: ORG.name, url: ORG.domain },
          }),
        },
      ],
    };
  },
  component: ReportDetail,
});

function ReportDetail() {
  const { report } = Route.useLoaderData();
  const related = REPORTS.filter((r) => report.related.includes(r.slug));

  return (
    <article>
      <header className="border-b border-border bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <Link to="/reports" className="text-sm text-primary hover:underline">
            ← All reports
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span className="text-primary">{report.sector}</span>
            <span aria-hidden>·</span>
            <span>
              {report.district}, {report.province}
            </span>
            <span aria-hidden>·</span>
            <span>
              {report.year} · {report.pages} pages
            </span>
          </div>
          <h1 className="mt-4 max-w-4xl text-3xl leading-[1.15] font-semibold md:text-5xl">
            {report.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {report.summary}
          </p>
          <div className="mt-8">
            {report.status === "Available" ? (
              <a
                href="#"
                className="inline-block rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Download the PDF (free)
              </a>
            ) : (
              <span className="inline-block rounded-sm border border-border bg-card px-6 py-3 text-sm text-muted-foreground">
                Coming soon — subscribe below to be notified
              </span>
            )}
          </div>
        </div>
      </header>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-2xl font-semibold">Key findings</h2>
            <ul className="mt-6 space-y-5">
              {report.findings.map((f) => (
                <li key={f} className="rule-top flex gap-4 pt-5">
                  <span aria-hidden className="text-primary">
                    —
                  </span>
                  <span className="leading-relaxed text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-14 text-2xl font-semibold">Method</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{report.method}</p>

            <h2 className="mt-14 text-2xl font-semibold">Who this is for</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Founders weighing a venture in {report.district} or a comparable district, lenders
              sizing working capital for {report.sector.toLowerCase()} firms, and researchers
              looking for district-level evidence. If you are reading this from abroad, start with
              our{" "}
              <Link to="/diaspora" className="text-primary hover:underline">
                guide for the diaspora
              </Link>{" "}
              and the{" "}
              <Link to="/book" className="text-primary hover:underline">
                100 Businesses book project
              </Link>
              .
            </p>
          </div>

          <aside>
            <Figure
              src={dairyImg}
              alt={`Workers at a small ${report.sector.toLowerCase()} enterprise in ${report.district}, Nepal`}
              caption={`Photo: Shivashakti Dairy Pvt. Ltd., ${report.district} District`}
              width={1200}
              height={800}
            />
            <dl className="mt-8 border border-border bg-card p-6 text-sm">
              {[
                ["Sector", report.sector],
                ["District", report.district],
                ["Province", report.province],
                ["Published", report.year],
                ["Length", `${report.pages} pages`],
                ["Access", report.status === "Available" ? "Free PDF" : "In production"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-border py-2 last:border-0">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </Section>

      {related.length > 0 && (
        <Section className="border-t border-border bg-card">
          <Eyebrow>Related research</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold">Read next</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {related.map((r) => (
              <ReportCard key={r.slug} report={r} />
            ))}
          </div>
        </Section>
      )}
    </article>
  );
}