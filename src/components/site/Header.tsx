import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/unfoldnepal-logo.png.asset.json";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const ABOUT_LINKS = [
  { hash: "about-unfold-nepal", label: "About Unfold Nepal" },
  { hash: "mission-vision", label: "Mission & Vision" },
  { hash: "history", label: "History" },
  { hash: "legal-status", label: "Legal Status" },
  { hash: "objectives", label: "Objectives" },
] as const;

const NAV = [
  { to: "/reports", label: "Research" },
  { to: "/book", label: "100 Businesses" },
  { to: "/diaspora", label: "For the Diaspora" },
  { to: "/updates", label: "Updates" },
  { to: "/get-involved", label: "Get Involved" },
] as const;

const dropdownItemClass =
  "block rounded-sm px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground";

export function Header() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src={logo.url}
            alt="UnfoldNepal logo"
            className="h-8 w-auto md:h-9 dark:invert dark:hue-rotate-180"
            width={280}
            height={90}
          />
        </Link>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
          {/* About — hover dropdown */}
          <div className="group relative">
            <Link
              to="/about"
              className="flex items-center gap-1 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
              aria-haspopup="true"
            >
              About
              <ChevronDown
                className="size-3.5 transition-transform duration-200 group-hover:rotate-180"
                aria-hidden
              />
            </Link>

            <div className="invisible absolute left-1/2 top-full z-50 w-[26rem] -translate-x-1/2 translate-y-2 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="grid grid-cols-[1.5fr_1fr] gap-6 rounded-sm border border-border bg-popover p-6 shadow-lg">
                <div>
                  <p className="eyebrow">About Unfold Nepal</p>
                  <ul className="mt-3 space-y-0.5">
                    {ABOUT_LINKS.map((item) => (
                      <li key={item.hash}>
                        <Link to="/about" hash={item.hash} className={dropdownItemClass}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="eyebrow">Team</p>
                  <ul className="mt-3 space-y-0.5">
                    <li>
                      <Link to="/about" hash="team" className={dropdownItemClass}>
                        Governance
                      </Link>
                    </li>
                    <li>
                      <Link to="/board" className={dropdownItemClass}>
                        Board of Directors
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

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
            <li>
              <div className="flex items-center justify-between">
                <Link
                  to="/about"
                  onClick={() => setOpen(false)}
                  className="block flex-1 py-2 text-sm text-foreground"
                >
                  About
                </Link>
                <button
                  type="button"
                  aria-label={aboutOpen ? "Collapse About menu" : "Expand About menu"}
                  aria-expanded={aboutOpen}
                  onClick={() => setAboutOpen((v) => !v)}
                  className="p-2 text-muted-foreground"
                >
                  <ChevronDown
                    className={cn("size-4 transition-transform duration-200", aboutOpen && "rotate-180")}
                  />
                </button>
              </div>
              {aboutOpen && (
                <div className="ml-2 border-l border-border pb-2 pl-4">
                  <p className="eyebrow mt-2">About Unfold Nepal</p>
                  <ul className="mt-1">
                    {ABOUT_LINKS.map((item) => (
                      <li key={item.hash}>
                        <Link
                          to="/about"
                          hash={item.hash}
                          onClick={() => setOpen(false)}
                          className="block py-1.5 text-sm text-muted-foreground"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <p className="eyebrow mt-3">Team</p>
                  <ul className="mt-1">
                    <li>
                      <Link
                        to="/about"
                        hash="team"
                        onClick={() => setOpen(false)}
                        className="block py-1.5 text-sm text-muted-foreground"
                      >
                        Governance
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/board"
                        onClick={() => setOpen(false)}
                        className="block py-1.5 text-sm text-muted-foreground"
                      >
                        Board of Directors
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
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
