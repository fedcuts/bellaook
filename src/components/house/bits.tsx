import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { house } from "@/data/house";

export function Heat({ n }: { n: number }) {
  return (
    <span className="inline-flex items-center gap-1" aria-label={`Heat ${n} of 3`}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={`inline-block size-1.5 rounded-full ${i < n ? "bg-ember" : "bg-ivory/20"}`}
        />
      ))}
    </span>
  );
}

export function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(to);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setN(to);
      return;
    }
    setN(0);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || started.current) return;
        started.current = true;
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - t0) / 1100);
          const eased = 1 - (1 - p) ** 3;
          setN(Math.round(to * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.45 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const text = items.join("   ·   ");
  return (
    <div className="overflow-hidden border-y border-ivory/10 py-4">
      <div className={`marquee-track flex w-max ${reverse ? "marquee-rev" : ""}`}>
        <span className="px-6 text-kicker text-mute uppercase">{text}</span>
        <span className="px-6 text-kicker text-mute uppercase" aria-hidden>
          {text}
        </span>
      </div>
    </div>
  );
}

export function ReserveBand({ image = "/kitchen/dining.jpg" }: { image?: string }) {
  return (
    <section className="relative min-h-band overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
      <div className="vignette absolute inset-0" />
      <div className="wrap relative flex min-h-band flex-col justify-end py-16">
        <p className="text-kicker text-ember uppercase">The table</p>
        <h2 className="mt-3 max-w-3xl font-display text-display text-ivory">Reserve the table.</h2>
        <p className="mt-4 max-w-md text-ivory/80">
          {house.street}, {house.city}. {house.place}. A request — Bella Point confirms by phone.
        </p>
        <Link
          to="/reserve"
          className="tap mt-8 inline-flex w-fit bg-ember px-6 py-3 text-kicker text-ink uppercase"
        >
          Hold a table
        </Link>
      </div>
    </section>
  );
}
