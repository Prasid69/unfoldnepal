import { Link } from "@tanstack/react-router";
import { ORG } from "@/data/site";
import { NewsletterForm } from "./NewsletterForm";
import logo from "@/assets/unfoldnepal-logo.png.asset.json";

const COLUMNS = [
  {
    heading: "Research",
    links: [
      { to: "/reports", label: "All reports" },
      { to: "/reports", label: "Methodology" },
      { to: "/book", label: "100 Businesses book" },
    ],
  },
  {
    heading: "Organisation",
    links: [
      { to: "/about", label: "About us" },
      { to: "/updates", label: "Updates" },
      { to: "/get-involved", label: "Get involved" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { to: "/diaspora", label: "For the diaspora" },
      { to: "/contact", label: "Contact" },
      { to: "/sitemap.xml", label: "Sitemap" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-sand">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <img
              src={logo.url}
              alt="UnfoldNepal logo"
              className="h-9 w-auto"
              width={280}
              height={90}
              loading="lazy"
            />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {ORG.tagline} Independent, non-profit-distributing, registered in Nepal.
            </p>
            <div className="mt-6">
              <NewsletterForm compact />
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                {col.heading}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.to === "/sitemap.xml" ? (
                      <a
                        href="/sitemap.xml"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {ORG.legalName}. A non-profit-distributing research and
            publishing organisation registered in Nepal.
          </p>
          <p>
            {ORG.address} · <a className="hover:text-primary" href={`mailto:${ORG.email}`}>{ORG.email}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}