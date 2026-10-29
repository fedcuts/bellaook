import { useEffect, useState } from "react";
import { ksh } from "@/data/house";
import { ReserveBand } from "@/components/house/bits";
import { LoopFilm } from "@/components/house/films";
import { useHouse } from "@/components/house/state";

const BEAT = 4200;

const steps = [
  {
    id: "salt",
    n: "01",
    title: "Salt the goat",
    time: "20 minutes",
    image: "/kitchen/goat.jpg",
    line: "700 g leg, cut 1.5 cm, fat left on. 12 g fine salt. It should look wet, not swimming.",
    measure: "700 g",
  },
  {
    id: "oil",
    n: "02",
    title: "Wake the oil",
    time: "90 seconds",
    image: "/kitchen/pour.jpg",
    line: "40 ml neutral oil, wide pan, medium-high. A single cumin seed should sizzle in one second. Fish it out.",
    measure: "40 ml",
  },
  {
    id: "tin",
    n: "03",
    title: "The tin",
    time: "20 seconds",
    image: "/kitchen/xawaash.jpg",
    line: "18 g xawaash into the oil. Wait until the kitchen smells sweet. If it smokes, the pan was too hot. Start again. Bitter spice cannot be saved.",
    measure: "18 g",
  },
  {
    id: "face",
    n: "04",
    title: "One brown face",
    time: "90 seconds, untouched",
    image: "/kitchen/grill.jpg",
    line: "Goat in a single layer. Do not stir. You want a brown face, not a grey stew.",
    measure: "90 s",
  },
  {
    id: "aroma",
    n: "05",
    title: "Onion, chili, tomato",
    time: "4 minutes",
    image: "/kitchen/hands.jpg",
    line: "Onion sliced with the grain, two split green chilies, three minutes. One tomato, crushed by hand, ninety seconds. The pan must finish dry.",
    measure: "4 min",
  },
  {
    id: "plate",
    n: "06",
    title: "Off the flame",
    time: "At the table",
    image: "/kitchen/suqaar.jpg",
    line: "Lime. Cilantro leaves. Canjeero beside the plate, never under it. Subag only if the table asks.",
    measure: "Dry",
  },
] as const;

const mise = [
  ["Goat leg, 1.5 cm", "700 g"],
  ["Fine salt", "12 g"],
  ["Neutral oil", "40 ml"],
  ["Xawaash, the tin", "18 g"],
  ["Onion, with the grain", "1 large"],
  ["Green chili, split", "2"],
  ["Tomato, crushed", "1"],
  ["Lime", "1"],
  ["Cilantro, leaves", "a handful"],
] as const;

const tin = [
  ["Cumin", "6 g"],
  ["Coriander", "4 g"],
  ["Black pepper", "3 g"],
  ["Turmeric", "2 g"],
  ["Chili", "2 g"],
  ["Cardamom, clove, cinnamon", "1 g"],
] as const;

export function StoryPage() {
  const { add } = useHouse();
  const [i, setI] = useState(0);
  const step = steps[i] ?? steps[0];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => setI((n) => (n + 1) % steps.length), BEAT);
    return () => window.clearTimeout(id);
  }, [i]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const tag = (event.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (event.key === "ArrowRight") setI((n) => (n + 1) % steps.length);
      if (event.key === "ArrowLeft") setI((n) => (n - 1 + steps.length) % steps.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <section className="relative min-h-stage overflow-hidden bg-ink">
        <LoopFilm src="/films/chef.mp4" poster="/kitchen/suqaar.jpg" />
        <div className="vignette absolute inset-0 z-10" />
        <div className="wrap relative z-10 flex min-h-stage flex-col justify-end pb-24 pt-nav">
          <p className="text-kicker text-ember uppercase">The house recipe · serves four · 35 minutes</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <h1 className="font-display text-display">Suqaar ari.</h1>
            <p key={step.measure} className="ember-num arrive font-display text-stat">
              {step.measure}
            </p>
          </div>
          <p key={step.id} className="arrive mt-4 max-w-xl text-lg text-ivory">
            <span className="text-ember">
              {step.n} {step.title}.
            </span>{" "}
            {step.line}
          </p>
          <div className="mt-5 flex items-center gap-3">
            <button
              type="button"
              className="tap size-11 border border-ivory/30"
              aria-label="Previous step"
              onClick={() => setI((n) => (n - 1 + steps.length) % steps.length)}
            >
              ‹
            </button>
            <button
              type="button"
              className="tap size-11 border border-ivory/30"
              aria-label="Next step"
              onClick={() => setI((n) => (n + 1) % steps.length)}
            >
              ›
            </button>
            <p className="text-kicker text-ivory/70 uppercase">{step.time}</p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-5 z-10">
          <div className="wrap flex gap-2">
            {steps.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                className="tap min-h-11 flex-1 text-left"
                aria-current={idx === i}
                onClick={() => setI(idx)}
              >
                <span className="block h-0.5 overflow-hidden bg-ivory/25">
                  <span
                    key={idx === i ? `${item.id}-${i}` : `${item.id}-idle`}
                    className={`block h-full bg-ember ${idx < i ? "w-full" : idx === i ? "film-fill run w-full" : "w-0"}`}
                    style={idx === i ? { animationDuration: "4.2s" } : undefined}
                  />
                </span>
                <span className={`mt-2 hidden text-kicker uppercase md:block ${idx === i ? "text-ember" : "text-ivory/70"}`}>
                  {item.n}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ash py-20">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-kicker text-ember uppercase">Mise</p>
            <h2 className="mt-3 font-display text-display">Weighed. Not guessed.</h2>
            <p className="mt-4 max-w-md text-mute">
              One wide pan. If the sauce pools at the end, the heat was low. Pouring it off is not a fix.
            </p>
            <ul className="mt-8">
              {mise.map(([name, amount]) => (
                <li key={name} className="flex items-baseline justify-between gap-4 border-b border-ivory/10 py-3">
                  <span>{name}</span>
                  <span className="font-display text-2xl text-ember">{amount}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-kicker text-ember uppercase">The tin · 18 g for this pan</p>
            <h2 className="mt-3 font-display text-4xl">Xawaash, this morning.</h2>
            <ul className="mt-8">
              {tin.map(([name, amount]) => (
                <li key={name} className="flex items-baseline justify-between gap-4 border-b border-ivory/10 py-3">
                  <span>{name}</span>
                  <span className="font-display text-2xl">{amount}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-mute">
              Turmeric goes in last when you grind a jar. In the pan it rides with the rest, twenty seconds, then the meat.
            </p>
            <div className="relative mt-8 h-80 overflow-hidden">
              <img src="/kitchen/xawaash.jpg" alt="Ground xawaash" className="ken absolute inset-0 h-full w-full object-cover" />
              <div className="vignette absolute inset-0" />
              <p className="absolute bottom-4 left-4 text-kicker text-ivory uppercase">18 g in the oil</p>
            </div>
          </div>
        </div>
      </section>

      {steps.map((item) => (
        <section key={item.id} className="relative min-h-band overflow-hidden">
          <img src={item.image} alt="" className="ken absolute inset-0 h-full w-full object-cover" />
          <div className="vignette absolute inset-0" />
          <div className="wrap relative flex min-h-band flex-wrap items-end justify-between gap-6 py-16">
            <div className="max-w-3xl">
              <p className="text-kicker text-ember uppercase">
                {item.n} · {item.time}
              </p>
              <h2 className="mt-2 font-display text-display">{item.title}</h2>
              <p className="mt-4 max-w-lg text-ivory/90">{item.line}</p>
            </div>
            <p className="ember-num font-display text-stat">{item.measure}</p>
          </div>
        </section>
      ))}

      <section className="bg-ink py-16">
        <div className="wrap flex flex-wrap items-center justify-between gap-4 border border-ivory/10 p-6">
            <div>
              <p className="font-display text-3xl">Suqaar ari, as plated</p>
              <p className="mt-1 text-mute">{ksh(980)} at the table. Canjeero beside it.</p>
            </div>
            <button
              type="button"
              className="tap bg-ember px-6 py-3 text-kicker text-ink uppercase"
              onClick={() =>
                add({
                  name: "Suqaar ari",
                  detail: "The house recipe",
                  price: 980,
                  image: "/kitchen/suqaar.jpg",
                })
              }
            >
              Order the plate
            </button>
        </div>
      </section>

      <ReserveBand image="/kitchen/suqaar.jpg" />
    </>
  );
}
