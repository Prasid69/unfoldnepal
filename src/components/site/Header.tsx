import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/unfoldnepal-logo.png.asset.json";
import { ThemeToggle } from "./ThemeToggle";

const NAV = [
  { to: "/about", label: "About" },
  { to: "/reports", label: "Research" },
  { to: "/book", label: "100 Businesses" },
  { to: "/diaspora", label: "For the Diaspora" },
  { to: "/updates", label: "Updates" },
  { to: "/get-involved", label: "Get Involved" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="-ml-2 mr-4 flex items-center md:-ml-3 md:mr-8" onClick={() => setOpen(false)}>
          <img
            src={logo.url}
            alt="UnfoldNepal logo"
            className="h-8 w-auto md:h-9 dark:invert dark:hue-rotate-180"
            width={280}
            height={90}
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/get-involved"
            hash="donate"
            className="rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Support the research
          </Link>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 py-4 lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/get-involved"
                onClick={() => setOpen(false)}
                className="inline-block rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
              >
                Support the research
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}