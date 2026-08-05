import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  email: z.string().trim().email("Enter a valid email address").max(255),
});

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse({ email });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Invalid email");
      return;
    }
    setError(null);
    setEmail("");
    toast.success("You're on the list", {
      description: "We'll email you when the next report is published.",
    });
  }

  return (
    <form onSubmit={onSubmit} noValidate className="w-full">
      {!compact && (
        <label htmlFor="newsletter-email" className="block text-sm font-medium">
          Get new reports by email
        </label>
      )}
      <div className={compact ? "flex gap-2" : "mt-3 flex flex-col gap-2 sm:flex-row"}>
        <input
          id={compact ? "footer-newsletter-email" : "newsletter-email"}
          type="email"
          required
          maxLength={255}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          aria-label="Email address"
          aria-invalid={!!error}
          className="w-full rounded-sm border border-input bg-card px-3 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
        />
        <button
          type="submit"
          className="shrink-0 rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Subscribe
        </button>
      </div>
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
      {!compact && (
        <p className="mt-2 text-xs text-muted-foreground">
          Roughly one email a month. No sharing of your address, ever.
        </p>
      )}
    </form>
  );
}