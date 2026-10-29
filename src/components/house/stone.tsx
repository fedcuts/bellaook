import { useMemo, useState } from "react";
import { boardPies, house, kiln, ksh, piePreview, pieSizes, pieToppings } from "@/data/house";
import { CountUp, Marquee, ReserveBand } from "@/components/house/bits";
import { CookFilm, PieCook, stoneCuts } from "@/components/house/films";
import { useHouse } from "@/components/house/state";

const layers = [
  "San Marzano",
  "Fior di latte",
  "Tipo 00, 72 hours",
  "Sujuq",
  "Goat suqaar",
  "Xawaash, morning tin",
  "Basbaas oil",
  "Chili honey",
  "Pickled onion",
  "Basil, torn",
  "Salt, not sugar",
  "Stone at 485°C",
];

export function StonePage() {
  const { add } = useHouse();
  const [sizeId, setSizeId] = useState<(typeof pieSizes)[number]["id"]>("32");
  const [tops, setTops] = useState<string[]>([]);

  const size = pieSizes.find((item) => item.id === sizeId) ?? pieSizes[1];
  const chosen = pieToppings.filter((item) => tops.includes(item.id));
  const total = size.price + chosen.reduce((sum, item) => sum + item.price, 0);
  const preview = useMemo(() => piePreview(tops), [tops]);

  function toggle(id: string) {
    setTops((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  }

  return (
    <>
      <CookFilm cuts={stoneCuts} heading="h1" />
      <PieCook />

      <section className="bg-ash py-20">
        <div className="wrap">
          <p className="text-kicker text-ember uppercase">The house board</p>
          <h2 className="mt-3 font-display text-display">Pizzas, as Bella Point serves them.</h2>
          <p className="mt-3 max-w-xl text-mute">Small, medium and large. The price is on the board — order the name on WhatsApp.</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {boardPies.map((pie) => (
              <article key={pie.id} className="card overflow-hidden border border-ivory/10 bg-ink">
                <div className="relative overflow-hidden">
                  <img src={pie.image} alt={pie.name} className="zoom h-64 w-full object-cover" />
                  {pie.offer ? (
                    <span className="absolute top-3 left-3 bg-ember px-2 py-1 text-kicker text-ink uppercase">{pie.offer}</span>
                  ) : null}
                </div>
                <div className="p-5">
                  <h3 className="font-display text-3xl">{pie.name}</h3>
                  <p className="mt-2 min-h-12 text-sm text-mute">{pie.detail}</p>
                  <a
                    className="tap mt-5 inline-flex bg-ember px-4 py-3 text-kicker text-ink uppercase"
                    href={`${house.whatsapp}?text=${encodeURIComponent(`Bella Point — ${pie.name}. Small, medium or large?`)}`}
                  >
                    Order
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Marquee items={layers} />

      <section className="bg-ink py-20">
        <div className="wrap">
          <p className="text-kicker text-ember uppercase">Interactive // custom build</p>
          <h2 className="mt-3 font-display text-display">Build your stone.</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-kicker text-mute uppercase">01 · Choose size</p>
              <div className="mt-5 flex flex-wrap gap-4">
                {pieSizes.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={sizeId === item.id}
                    onClick={() => setSizeId(item.id)}
                    className={`ring-size tap ${sizeId === item.id ? "on" : ""}`}
                  >
                    <span className="text-center">
                      <span className="block font-display text-3xl leading-none">{item.cm}</span>
                      <span className="mt-1 block text-kicker">CM</span>
                    </span>
                  </button>
                ))}
              </div>
              <p className="mt-3 text-sm text-mute">
                {size.name} · {ksh(size.price)}
              </p>
              <p className="mt-8 text-kicker text-mute uppercase">02 · Add to the fire</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {pieToppings.map((item) => {
                  const on = tops.includes(item.id);
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        aria-pressed={on}
                        onClick={() => toggle(item.id)}
                        className={`tap flex w-full items-center gap-3 border p-2 text-left ${on ? "border-ember bg-ivory/5" : "border-ivory/15"}`}
                      >
                        <img src={item.image} alt="" className="size-14 shrink-0 object-cover" />
                        <span className="min-w-0 flex-1">
                          <span className="block">{item.name}</span>
                          <span className="block text-sm text-mute">{on ? "On the pie" : item.note}</span>
                        </span>
                        <span className="shrink-0 text-sm text-ember">{on ? "On" : `+${ksh(item.price)}`}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="border border-ivory/10 bg-ash">
              <div className="spot relative h-80 overflow-hidden md:h-96">
                <img key={preview} src={preview} alt="" className="arrive h-full w-full object-cover" />
                <p key={size.cm} className="letter-in letter-glow absolute bottom-3 left-5 font-display text-display">
                  {size.cm}
                  <span className="ml-2 text-kicker text-ivory not-italic">CM</span>
                </p>
              </div>
              <div className="space-y-2 p-5 text-sm">
                <div className="flex justify-between">
                  <span>{size.name} base</span>
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
                      name: `Stone · ${size.cm} cm`,
                      detail: chosen.length ? chosen.map((item) => item.name).join(", ") : "Plain fire",
                      price: total,
                      image: preview,
                    })
                  }
                >
                  Order this stone
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ivory/10 bg-ash">
        <div className="wrap py-20">
          <p className="text-kicker text-ember uppercase">Every layer</p>
          <h2 className="mt-3 max-w-4xl font-display text-display">Uncompromised.</h2>
          <p className="mt-4 max-w-md text-mute">
            The founding pie is tomato, cheese, basil. Everything else is a decision made after the peel.
          </p>
          <ul className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {layers.map((name) => (
              <li key={name} className="border-b border-ivory/10 py-4 font-display text-2xl">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid md:grid-cols-3">
        {[
          {
            src: "/food/tomatoes.jpg",
            title: "Sourced.",
            line: "San Marzano, crushed by hand. Salt. Never sugar.",
          },
          {
            src: "/food/dough.jpg",
            title: "Crafted.",
            line: "Tipo 00. Seventy-two hours cold. The rim is stretched, not rolled.",
          },
          {
            src: "/kitchen/basbaas.jpg",
            title: "Fired.",
            line: "Basbaas after the peel. Chili in the oven turns bitter.",
          },
        ].map((panel) => (
          <article key={panel.title} className="relative h-80 overflow-hidden md:h-auto md:min-h-band">
            <img src={panel.src} alt="" className="ken absolute inset-0 h-full w-full object-cover" />
            <div className="vignette absolute inset-0" />
            <div className="relative flex h-full min-h-80 flex-col justify-end p-6 md:min-h-band">
              <h2 className="font-display text-4xl">{panel.title}</h2>
              <p className="mt-2 max-w-xs text-sm text-ivory/85">{panel.line}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="relative overflow-hidden">
        <img src="/food/oven.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-45" />
        <div className="vignette absolute inset-0" />
        <div className="wrap relative grid gap-8 py-20 sm:grid-cols-2 lg:grid-cols-4">
          {kiln.map((stat) => (
            <div key={stat.label}>
              <p className="ember-num font-display text-stat">
                <CountUp to={stat.n} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-kicker uppercase">{stat.label}</p>
              <p className="mt-2 text-sm text-ivory/80">{stat.note}</p>
            </div>
          ))}
        </div>
      </section>

      <ReserveBand image="/food/oven.jpg" />
    </>
  );
}
