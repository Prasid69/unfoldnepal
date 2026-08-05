import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { Report } from "@/data/site";

export function Section({
  children,
  className,
  as: As = "section",
  id,
}: {
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
  id?: string;
}) {
  return (
    <As id={id} className={cn("mx-auto w-full max-w-6xl px-5 py-16 md:py-20", className)}>
      {children}
    </As>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <header className="border-b border-border bg-sand">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.1] font-semibold md:text-5xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
      </div>
    </header>
  );
}

export function Figure({
  src,
  alt,
  caption,
  className,
  width,
  height,
  priority = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  width: number;
  height: number;
  priority?: boolean;
}) {
  return (
    <figure className={className}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        className="w-full rounded-sm object-cover"
      />
      {caption && (
        <figcaption className="mt-3 text-xs text-muted-foreground">{caption}</figcaption>
      )}
    </figure>
  );
}

export function ReportCard({ report }: { report: Report }) {
  return (
    <article className="group flex h-full flex-col border border-border bg-card p-6 transition-colors hover:border-primary">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <span className="text-primary">{report.sector}</span>
        <span aria-hidden>·</span>
        <span>
          {report.district}, {report.province}
        </span>
        <span aria-hidden>·</span>
        <span>{report.year}</span>
      </div>
      <h3 className="mt-3 text-xl leading-snug font-semibold">
        <Link to="/reports/$slug" params={{ slug: report.slug }} className="hover:text-primary">
          {report.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{report.summary}</p>
      <div className="mt-6 flex items-center justify-between text-xs">
        <span
          className={cn(
            "rounded-sm px-2 py-1",
            report.status === "Available"
              ? "bg-accent text-accent-foreground"
              : "bg-secondary text-muted-foreground",
          )}
        >
          {report.status === "Available" ? "PDF available" : "Coming soon"}
        </span>
        <Link
          to="/reports/$slug"
          params={{ slug: report.slug }}
          className="font-medium text-primary hover:underline"
        >
          Read summary →
        </Link>
      </div>
    </article>
  );
}