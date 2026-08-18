import { useState } from "react";
import { Eyebrow } from "@/components/site/Primitives";
import {
  DONATION_CURRENCIES,
  DONATION_METHODS,
  DONATION_TIERS,
  DONATION_MONTHLY_TIERS,
  type CurrencyCode,
} from "@/data/site";

function format(code: CurrencyCode, amount: number) {
  const symbol = DONATION_CURRENCIES.find((c) => c.code === code)!.symbol;
  return `${symbol} ${amount.toLocaleString("en-US")}`;
}

export function DonateOptions() {
  const [currency, setCurrency] = useState<CurrencyCode>("NPR");
  const [selected, setSelected] = useState<number>(1);
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const tiers = frequency === "monthly" ? DONATION_MONTHLY_TIERS : DONATION_TIERS;

  return (
    <div className="border border-primary bg-card p-8">
      <Eyebrow>Donate</Eyebrow>
      <h2 className="mt-3 text-2xl font-semibold">Fund a district study</h2>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        Contributions go directly to field costs: researcher time, travel, translation and
        printing. Give in Nepali rupees from inside Nepal, or in US dollars from abroad.
      </p>

      <div
        role="group"
        aria-label="Choose how often to give"
        className="mt-6 flex flex-wrap gap-2"
      >
        {([
          { value: "once", label: "One-time gift" },
          { value: "monthly", label: "Monthly giving" },
        ] as const).map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => {
              setFrequency(f.value);
              setSelected(1);
            }}
            aria-pressed={frequency === f.value}
            className={
              "rounded-sm border px-4 py-2 text-sm font-medium transition-colors " +
              (frequency === f.value
                ? "border-primary bg-accent/40 text-foreground"
                : "border-border text-muted-foreground hover:border-primary/50")
            }
          >
            {f.label}
          </button>
        ))}
      </div>

      <div
        role="group"
        aria-label="Choose a currency"
        className="mt-4 inline-flex rounded-sm border border-border p-1"
      >
        {DONATION_CURRENCIES.map((c) => (
          <button
            key={c.code}
            type="button"
            onClick={() => setCurrency(c.code)}
            aria-pressed={currency === c.code}
            className={
              "rounded-sm px-4 py-2 text-sm font-medium transition-colors " +
              (currency === c.code
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground")
            }
          >
            {c.label}
          </button>
        ))}
      </div>

      <ul className="mt-6 space-y-2">
        {tiers.map((tier, i) => (
          <li key={tier.label}>
            <button
              type="button"
              onClick={() => setSelected(i)}
              aria-pressed={selected === i}
              className={
                "flex w-full items-baseline justify-between gap-4 border p-4 text-left transition-colors " +
                (selected === i
                  ? "border-primary bg-accent/40"
                  : "border-border hover:border-primary/50")
              }
            >
              <span className="font-serif text-lg font-semibold">
                {format(currency, tier.amounts[currency])}
                {frequency === "monthly" && (
                  <span className="ml-1 text-sm font-normal text-muted-foreground">/month</span>
                )}
              </span>
              <span className="text-sm text-muted-foreground">{tier.label}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-6 space-y-4 border-t border-border pt-6">
        {frequency === "monthly" && (
          <p className="text-sm leading-relaxed text-muted-foreground">
            Monthly gifts are set up as a standing instruction with your bank or wallet — we send a
            short confirmation and a receipt each month, and you can pause or stop any time.
          </p>
        )}
        {DONATION_METHODS[currency].map((m) => (
          <div key={m.title}>
            <h3 className="text-sm font-semibold">{m.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{m.detail}</p>
          </div>
        ))}
      </div>

      <a
        href="#contact-form"
        className="mt-8 inline-block rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        {frequency === "monthly"
          ? `Set up a monthly gift in ${currency}`
          : `Arrange a contribution in ${currency}`}
      </a>
    </div>
  );
}
