import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ksh, searStats, smashLineup, smashPreview, smashSizes, smashToppings } from "@/data/house";
import { CountUp } from "@/components/house/bits";
import { Anatomy, CookFilm, LoopFilm, smashCuts } from "@/components/house/films";
import { useHouse } from "@/components/house/state";

export function SmashPage() {
  const { add } = useHouse();
  const [sizeId, setSizeId] = useState<(typeof smashSizes)[number]["id"]>("M");
  const [tops, setTops] = useState<string[]>([]);
  const [temp, setTemp] = useState(90);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = document.getElementById("sear");
    if (!el) return;
    let frame = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      if (reduced) {
        setTemp(222);
        return;
      }
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / 2800);
        setTemp(Math.round(90 + (222 - 90) * (1 - (1 - p) ** 3)));
        if (p < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.35 });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  const size = smashSizes.find((item) => item.id === sizeId) ?? smashSizes[1];
  const chosen = smashToppings.filter((item) => tops.includes(item.id));
  const total = size.price + chosen.reduce((sum, item) => sum + item.price, 0);
  const preview = useMemo(() => smashPreview(sizeId, tops), [sizeId, tops]);

  function toggle(id: string) {
    setTops((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  }

  return (
    <>
      <CookFilm cuts={smashCuts} heading="h1" stack />
      <Anatomy />

      <section className="bg-ash py-20">
        <div className="wrap">
          <p className="text-kicker text-ember uppercase">// 01 The line-up</p>
          <h2 className="mt-3 font-display text-display">Three builds.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {smashLineup.map((item) => (
              <article key={item.id} className="card overflow-hidden border border-ivory/10 bg-ink">
                <div className="overflow-hidden">
                  <img src={item.image} alt={item.name} className="zoom h-64 w-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-3xl">{item.name}</h3>
                  <p className="mt-2 text-sm text-mute">{item.detail}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <p className="font-display text-2xl">{ksh(item.price)}</p>
                    <button
                      type="button"
                      className="tap bg-ember px-4 py-3 text-kicker text-ink uppercase"
                      onClick={() => add({ name: item.name, detail: "Smash line", price: item.price, image: item.image })}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20">
        <div className="wrap">
          <p className="text-kicker text-ember uppercase">// 02 Build your smash</p>
          <h2 className="mt-3 font-display text-display">Choose the press.</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-kicker text-mute uppercase">01 · Weight</p>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {smashSizes.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={sizeId === item.id}
                    onClick={() => setSizeId(item.id)}
                    className={`tap border p-2 text-left ${sizeId === item.id ? "border-ember" : "border-ivory/15"}`}
                  >
                    <img
                      src={item.id === "S" ? "/kitchen/burger-single.jpg" : item.id === "M" ? "/kitchen/burger-double.jpg" : "/kitchen/burger-chicken.jpg"}
                      alt=""
                      className="h-24 w-full object-cover"
                    />
                    <span className="mt-2 block font-display text-3xl">{item.letter}</span>
                    <span className="block text-sm text-mute">{item.name}{item.grams ? ` · ${item.grams}g` : ""}</span>
                    <span className="block text-sm">{ksh(item.price)}</span>
                  </button>
                ))}
              </div>
              <p className="mt-8 text-kicker text-mute uppercase">02 · On the crown</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {smashToppings.map((item) => {
                  const on = tops.includes(item.id);
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        aria-pressed={on}
                        onClick={() => toggle(item.id)}
                        className={`tap flex w-full items-center gap-3 border p-2 text-left ${on ? "border-ember bg-ivory/5" : "border-ivory/15"}`}
                      >
                        <img src={item.image} alt="" className="size-12 shrink-0 object-cover" />
                        <span className="min-w-0 flex-1">
                          <span className="block">{item.name}</span>
                          <span className="block text-sm text-mute">{on ? "On the smash" : item.note}</span>
                        </span>
                        <span className="shrink-0 text-sm text-ember">{on ? "On" : `+${ksh(item.price)}`}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="border border-ivory/10 bg-ash">
              <div className="relative h-96 overflow-hidden">
                <img key={preview} src={preview} alt="" className="arrive h-full w-full object-cover" />
                <div className="vignette absolute inset-0" />
                <p
                  key={size.letter}
                  className="letter-in letter-glow pointer-events-none absolute inset-0 flex items-center justify-center font-display text-mega"
                >
                  {size.letter}
                </p>
              </div>
              <div className="space-y-2 p-5 text-sm">
                <div className="flex justify-between">
                  <span>{size.name} · {size.grams}g</span>
                  <span>{ksh(size.price)}</span>
                </div>
                {chosen.map((item) => (
                  <div key={item.id} className="flex justify-between text-mute">
                    <span>{item.name}</span>
                    <span>{ksh(item.price)}</span>
                  </div>
                ))}
                <div className="flex items-end justify-between border-t border-ivory/10 pt-3">
                  <span className="text-kicker uppercase">Total</span>
                  <span className="ember-num font-display text-4xl">{ksh(total)}</span>
                </div>
                <button
                  type="button"
                  className="tap mt-2 w-full bg-ember py-4 text-kicker text-ink uppercase"
                  onClick={() =>
                    add({
                      name: `Smash · ${size.name}`,
                      detail: chosen.length ? chosen.map((item) => item.name).join(", ") : "Plain lace",
                      price: total,
                      image: preview,
                    })
                  }
                >
                  Order this smash
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ivory/10 bg-ash">
        <div className="wrap grid gap-8 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {searStats.map((stat) => (
            <div key={stat.label}>
              <p className="ember-num font-display text-stat">
                <CountUp to={stat.n} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-kicker uppercase">{stat.label}</p>
              <p className="mt-2 text-sm text-mute">{stat.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="sear" className="relative min-h-stage overflow-hidden">
        <LoopFilm src="/films/smoke.mp4" poster="/kitchen/grill.jpg" />
        <div className="vignette absolute inset-0 z-10" />
        <div className="wrap relative z-10 grid min-h-stage items-end gap-10 py-16 md:grid-cols-[1fr_auto] md:items-center">
          <div className="max-w-lg">
            <p className="text-kicker uppercase">// 04 The sear</p>
            <h2 className="mt-2 font-display text-display">The beef waits.</h2>
            <p className="mt-4 max-w-md text-ivory/80">
              Steel climbs. One press when it gets there. A second press is how you lose the juice.
            </p>
          </div>
          <div className="flex items-center gap-5">
            <p className="ember-num font-display text-mega leading-none">{temp}°</p>
            <div className="thermo" aria-hidden>
              <span style={{ height: `${Math.min(100, Math.max(8, ((temp - 90) / (222 - 90)) * 100))}%` }} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-24">
        <div className="wrap text-center">
          <p className="text-kicker text-ember uppercase">The close</p>
          <h2 className="mt-4 font-display text-mega">Reserve the smash.</h2>
          <p className="mx-auto mt-4 max-w-md text-mute">The steel is lit from noon. Tell the house the hour and how many are coming.</p>
          <Link to="/reserve" className="tap mt-8 inline-block bg-ember px-8 py-4 text-kicker text-ink uppercase">
            Book the steel
          </Link>
        </div>
      </section>
    </>
  );
}
