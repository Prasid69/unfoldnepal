import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Eyebrow, Figure } from "@/components/site/Primitives";
import { NewsletterForm } from "@/components/site/NewsletterForm";
import { StoryForm } from "@/components/site/StoryForm";
import bookImg from "@/assets/book-cover.jpg";
import coffeeImg from "@/assets/profile-coffee.jpg";

const TITLE = "100 Businesses of Nepal — the book project | UnfoldNepal";
const DESCRIPTION =
  "A book series profiling 100 successful businesses across Nepal's districts: capital required, employment created and lessons any founder can repeat.";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "book" },
      { property: "og:url", content: "/book" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: BookPage,
});

const DISTRICTS = [
  "Lalitpur", "Bhaktapur", "Kaski", "Syangja", "Gulmi", "Palpa", "Rupandehi", "Dhanusha",
  "Siraha", "Morang", "Jhapa", "Ilam", "Chitwan", "Makwanpur", "Dang", "Banke", "Surkhet",
  "Jumla", "Doti", "Kailali", "Bardiya", "Nuwakot", "Dolakha", "Sindhupalchok", "Tanahun",
  "Baglung", "Parbat", "Myagdi", "Okhaldhunga", "Bhojpur", "Khotang", "Udayapur",
];

function BookPage() {
  return (
    <>
      <section className="border-b border-border bg-sand">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Eyebrow>Flagship publication</Eyebrow>
            <h1 className="mt-5 text-4xl leading-[1.05] font-semibold md:text-6xl">
              100 Businesses of Nepal
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              One hundred enterprises, one hundred districts' worth of evidence. Each profile
              documents what the founder started with, what it cost, who they employ now, and
              whether someone else could build the same thing somewhere else in Nepal.
            </p>
            <div className="mt-8">
              <p className="font-serif text-3xl">
                <span className="text-primary">32</span> of 100 profiled
              </p>
              <div className="mt-3 h-2 w-full max-w-md overflow-hidden rounded-full bg-secondary">
                <div className="h-full w-[32%] bg-primary" />
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Placeholder progress — update as profiles are completed.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#preorder"
                className="rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Notify me when it's published
              </a>
              <a
                href="#nominate"
                className="rounded-sm border border-foreground/25 px-6 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
              >
                Nominate a business
              </a>
            </div>
          </div>
          <Figure
            src={bookImg}
            alt="Hardcover edition of 100 Businesses of Nepal in terracotta and charcoal"
            caption="Cover design in development — first edition planned for 2027"
            width={1200}
            height={1200}
          />
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Eyebrow>The concept</Eyebrow>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">
              Not inspiration. Instructions.
            </h2>
            <p>
              Most writing about entrepreneurship in Nepal is either policy abstraction or
              motivational profile. Neither tells you what a printing press in Butwal costs, how
              many months a homestay in Jumla runs empty, or where a dairy unit's margin
              disappears.
            </p>
            <p>
              Every profile in this book is built on the same research protocol we use for our{" "}
              <Link to="/reports" className="text-primary hover:underline">
                sector reports
              </Link>
              : verified years of operation, verified employment, reconstructed costs, and an
              honest account of what went wrong.
            </p>
          </div>
        </div>
      </Section>

      <Section className="border-y border-border bg-card">
        <Eyebrow>Coverage</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold">Districts profiled so far</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Thirty-two of Nepal's seventy-seven districts are documented. Districts still open for
          nomination are the ones we most want to hear about.
        </p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {DISTRICTS.map((d) => (
            <li
              key={d}
              className="rounded-sm border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground"
            >
              <span className="mr-1.5 text-primary" aria-hidden>
                ●
              </span>
              {d}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <Eyebrow>Sample profile</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold">Profile 07 — Himalaya Coffee Roasters</h2>
        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Figure
            src={coffeeImg}
            alt="Founder standing with folded arms outside his small coffee roastery in Gulmi, Nepal"
            caption="Photo: Himalaya Coffee Roasters, Gulmi District"
            width={1200}
            height={912}
          />
          <div className="space-y-5 leading-relaxed text-muted-foreground">
            <p>
              Suman Pun spent seven years as a barista in Seoul. He returned to Gulmi in 2018 with
              NPR 22 lakh in savings and one conviction: the coffee grown twenty minutes from his
              village was being sold as raw cherry for a fraction of what it was worth roasted.
            </p>
            <p>
              He bought a 5 kg roaster, rented a stone building on the road to Tamghas, and spent
              the first year losing money on inconsistent roasts. The turn came when he stopped
              selling wholesale and started shipping direct to Kathmandu cafés.
            </p>
            <dl className="grid grid-cols-2 gap-px border border-border bg-border text-sm">
              {[
                ["Start-up capital", "NPR 22 lakh"],
                ["Breakeven", "Month 19"],
                ["Employees today", "9 (6 women)"],
                ["Farmers supplied by", "140 households"],
              ].map(([k, v]) => (
                <div key={k} className="bg-card p-4">
                  <dt className="text-xs tracking-wide uppercase">{k}</dt>
                  <dd className="mt-1 font-serif text-lg text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Key lessons</h3>
              <ul className="mt-3 space-y-2">
                <li>Wholesale buyers will not pay for quality you cannot certify. Sell direct first.</li>
                <li>Budget eighteen months of living costs; the roaster was never the expensive part.</li>
                <li>Paying above farm-gate secured supply when three competitors arrived in 2023.</li>
              </ul>
            </div>
            <p className="text-sm">
              Related research:{" "}
              <Link
                to="/reports/$slug"
                params={{ slug: "himalayan-coffee-value-chain" }}
                className="text-primary hover:underline"
              >
                Himalayan Coffee: Value Chain and Returnee Entrepreneurship
              </Link>
            </p>
          </div>
        </div>
      </Section>

      <Section id="nominate" className="border-y border-border bg-sand">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Eyebrow>Nominate</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold">Know a business that belongs here?</h2>
            <p className="mt-4 text-muted-foreground">
              We look for enterprises with at least three years of operation, verifiable employment
              and a model another founder could repeat. Family businesses and unregistered firms are
              welcome.
            </p>
          </div>
          <StoryForm />
        </div>
      </Section>

      <Section id="preorder">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-semibold">Pre-order and publication updates</h2>
            <p className="mt-4 text-muted-foreground">
              Join the list to be notified when profiles are released, and first when the book opens
              for pre-order.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </Section>
    </>
  );
}