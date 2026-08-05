import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  business: z.string().trim().min(2, "Business name is required").max(120),
  district: z.string().trim().min(2, "District is required").max(80),
  name: z.string().trim().min(2, "Your name is required").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  story: z
    .string()
    .trim()
    .min(30, "Please write at least a few sentences")
    .max(1500, "Please keep this under 1500 characters"),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const FIELDS = [
  { id: "business", label: "Business name", type: "text", max: 120 },
  { id: "district", label: "District", type: "text", max: 80 },
  { id: "name", label: "Your name", type: "text", max: 100 },
  { id: "email", label: "Your email", type: "email", max: 255 },
] as const;

export function StoryForm() {
  const [values, setValues] = useState({
    business: "",
    district: "",
    name: "",
    email: "",
    story: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        next[issue.path[0] as keyof Errors] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setValues({ business: "", district: "", name: "", email: "", story: "" });
    toast.success("Nomination received", {
      description: "Our research team reviews nominations every fortnight.",
    });
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      {FIELDS.map((f) => (
        <div key={f.id} className={f.id === "story" ? "sm:col-span-2" : undefined}>
          <label htmlFor={`story-${f.id}`} className="block text-sm font-medium">
            {f.label}
          </label>
          <input
            id={`story-${f.id}`}
            type={f.type}
            maxLength={f.max}
            value={values[f.id]}
            onChange={(e) => setValues((v) => ({ ...v, [f.id]: e.target.value }))}
            aria-invalid={!!errors[f.id]}
            className="mt-2 w-full rounded-sm border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-primary"
          />
          {errors[f.id] && <p className="mt-1 text-xs text-destructive">{errors[f.id]}</p>}
        </div>
      ))}
      <div className="sm:col-span-2">
        <label htmlFor="story-story" className="block text-sm font-medium">
          Why should this business be profiled?
        </label>
        <textarea
          id="story-story"
          rows={5}
          maxLength={1500}
          value={values.story}
          onChange={(e) => setValues((v) => ({ ...v, story: e.target.value }))}
          aria-invalid={!!errors.story}
          className="mt-2 w-full rounded-sm border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-primary"
        />
        {errors.story && <p className="mt-1 text-xs text-destructive">{errors.story}</p>}
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Submit nomination
        </button>
      </div>
    </form>
  );
}