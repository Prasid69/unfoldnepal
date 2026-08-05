import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader, Section, Eyebrow, ReportCard } from "@/components/site/Primitives";
import { REPORTS, SECTORS, PROVINCES } from "@/data/site";
import { cn } from "@/lib/utils";

const TITLE = "Nepal SME research reports — sectors and districts | UnfoldNepal";
const DESCRIPTION =
  "Sector and district research on Nepal's cottage and small industries: handicraft, agro-processing, tourism and retail. Free summaries, downloadable reports.";

export const Route = createFileRoute("/reports/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/reports" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/reports" }],
  }),
  component: ReportsIndex,
});

function Filter({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-sm border px-3 py-1.5 text-sm transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border text-muted-foreground hover:border-primary hover:text-primary",
      )}
    >
      {label}
    </button>
  );
}

function ReportsIndex() {
  const [sector, setSector] = useState("All");
  const [province, setProvince] = useState("All");

  const filtered = useMemo(
    () =>
      REPORTS.filter(
        (r) =>
          (sector === "All" || r.sector === sector) &&
          (province === "All" || r.province === province),
      ),
    [sector, province],
  );

  return (
    <>
      <PageHeader
        eyebrow="Research"
        title="Reports on Nepal's cottage, small and medium enterprises"
        intro="Every report is built from district fieldwork: interviews with owner-operators, cost reconstruction and price sampling. Summaries are always free."
      />

      <Section>
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 text-xs tracking-[0.16em] text-muted-foreground uppercase">
              Sector
            </span>
            <Filter label="All" active={sector === "All"} onClick={() => setSector("All")} />
            {SECTORS.map((s) => (
              <Filter key={s} label={s} active={sector === s} onClick={() => setSector(s)} />
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 text-xs tracking-[0.16em] text-muted-foreground uppercase">
              Province
            </span>
            <Filter label="All" active={province === "All"} onClick={() => setProvince("All")} />
            {PROVINCES.map((p) => (
              <Filter key={p} label={p} active={province === p} onClick={() => setProvince(p)} />
            ))}
          </div>
        </div>

        <p className="mt-8 text-sm text-muted-foreground" aria-live="polite">
          Showing {filtered.length} of {REPORTS.length} reports
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r) => (
            <ReportCard key={r.slug} report={r} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="mt-10 text-muted-foreground">
            No reports match that combination yet. Try a different sector or province.
          </p>
        )}
      </Section>

      <Section className="border-t border-border bg-card">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Eyebrow>Methodology</Eyebrow>
          </div>
          <div className="space-y-5 leading-relaxed text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">How we conduct research</h2>
            <p>
              We work district by district. A study begins with a sector scoping visit and a list of
              registered and unregistered firms drawn from ward records, chamber lists and local
              referral. From that frame we sample firms that have operated for at least three years.
            </p>
            <p>
              Field researchers conduct structured interviews in Nepali or the local language,
              reconstructing start-up capital, monthly cost lines, employment and sales channels.
              Where owners permit, we review ledgers. Prices are independently sampled at retail.
            </p>
            <p>
              Findings are checked back with a subset of respondents before publication, and every
              report states its sample size, sampling frame and known limitations. We do not publish
              firm-level financials without written consent.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}