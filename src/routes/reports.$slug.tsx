import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section, Eyebrow, Figure, ReportCard } from "@/components/site/Primitives";
import { REPORTS, ORG, type Report } from "@/data/site";
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
         meta: [{ title: "Report not found | UnfoldNepal" }, { name: "robots", content: "noindex" }],
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
  const { report } = Route.useLoaderData() as { report: Report };
  const related = REPORTS.filter((r) => report.related.includes(r.slug));

  return (
    <article>
      <header className="border-b border-border bg-sand">
        <div className="mx-auto w-full max-w-[1600px] px-5 py-14 sm:px-8 md:py-20 lg:px-12">
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
        </div>
      </header>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="mt-14 text-2xl font-semibold">About the photograph</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The photograph shows the production floor of Shivashakti Dairy Pvt. Ltd. in Lalitpur
              District, one of the small-scale processing units documented during our fieldwork in
              Bagmati Province. The facility occupies a modest two-storey building whose ground floor
              is given over entirely to chilling tanks, pasteurising equipment and packaging lines.
              Morning light falls through high louvred windows, picking out the condensation on steel
              vats and the worn concrete floor — details that speak to years of daily operation
              rather than a recently fitted showroom.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              What the image does not immediately reveal is the logistical precision behind it.
              Milk collection runs on a twice-daily cycle, drawing from smallholder farms within a
              fifteen-kilometre radius. Every surface visible here is washed and sanitised between
              shifts, a discipline enforced less by regulation than by the owner-operators'
              understanding that spoilage is the fastest route to closure in a sector where margins
              are already thin. The stainless-steel pipework on the far wall routes the finished
              product directly into the packaging hall, eliminating one of the handling steps that
              the industry's informal processors still rely on.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              The unit was selected for this report precisely because it sits at the median of what
              our sample of {report.district} dairy enterprises looks like: neither a cottage
              operation nor a factory, but the kind of mid-scale business that a returning Nepali
              with relevant experience and NPR 30–40 lakh in capital could realistically build and
              run. Its story — the capital sourced, the regulatory hurdles cleared, the staff trained
              from scratch — forms the backbone of the operational case study in the pages that
              follow.
            </p>

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