import { Play } from "lucide-react";
import { Section, Eyebrow } from "@/components/site/Primitives";
import { TESTIMONIALS } from "@/data/site";

export function TestimonialVideos({ className = "" }: { className?: string }) {
  return (
    <Section id="testimonials" className={className}>
      <div className="max-w-2xl">
        <Eyebrow>In their words</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Video testimonials</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Founders, returnees and partners on what the research changed for them. Films are added
          as we record them in the districts.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure key={t.id} className="flex flex-col border border-border bg-card">
            <div className="relative aspect-video w-full overflow-hidden bg-secondary">
              {t.videoUrl ? (
                <iframe
                  src={t.videoUrl}
                  title={`Testimonial from ${t.name}`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted-foreground">
                  <span className="flex size-12 items-center justify-center rounded-full border border-border bg-background">
                    <Play className="size-5 text-primary" aria-hidden="true" />
                  </span>
                  <span className="text-xs tracking-[0.16em] uppercase">Film coming soon</span>
                </div>
              )}
            </div>
            <figcaption className="flex flex-1 flex-col p-6">
              <blockquote className="font-serif text-lg leading-relaxed">“{t.quote}”</blockquote>
              <div className="mt-auto pt-5 text-sm">
                <p className="font-medium">{t.name}</p>
                <p className="text-muted-foreground">{t.role}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
