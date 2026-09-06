import { useEffect, useRef, useState } from "react";

function parse(value: string) {
  const numeric = Number(value.replace(/[^0-9.]/g, ""));
  const prefix = value.slice(0, value.search(/[0-9]/) === -1 ? 0 : value.search(/[0-9]/));
  const suffix = value.replace(/^[^0-9]*[0-9.,]+/, "");
  return { numeric, prefix, suffix, hasNumber: !Number.isNaN(numeric) && value.match(/[0-9]/) };
}

export function CountUpStat({ value, className }: { value: string; className?: string }) {
  const { numeric, prefix, suffix, hasNumber } = parse(value);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(hasNumber ? 0 : numeric);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!hasNumber || done) return;
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(numeric);
      setDone(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();
        setDone(true);
        const duration = 1400;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(numeric * eased);
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [numeric, hasNumber, done]);

  if (!hasNumber) return <span className={className}>{value}</span>;

  const decimals = value.includes(".") ? 1 : 0;
  const shown = display.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {shown}
      {suffix}
    </span>
  );
}
