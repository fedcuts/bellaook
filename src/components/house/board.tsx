import { useEffect, useMemo, useRef, useState } from "react";
import { menu, ksh, dishFocus, type Dish } from "@/data/house";
import { Heat, Marquee, ReserveBand } from "@/components/house/bits";
import { useHouse } from "@/components/house/state";

const BEAT = 3200;

type StageDish = Dish & { group: string; groupId: string };

export function MenuPage() {
  const { add } = useHouse();
  const flat = useMemo<StageDish[]>(
    () => menu.flatMap((group) => group.dishes.map((dish) => ({ ...dish, group: group.name, groupId: group.id }))),
    [],
  );
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const dish = flat[index] ?? flat[0];
  const groupDishes = flat.filter((item) => item.groupId === dish?.groupId);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => setIndex((n) => (n + 1) % flat.length), BEAT);
    return () => window.clearTimeout(id);
  }, [index, paused, flat.length]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const el = event.target as HTMLElement | null;
      if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.tagName === "SELECT" || el.isContentEditable)) return;
      if (event.key === "ArrowRight") setIndex((n) => (n + 1) % flat.length);
      if (event.key === "ArrowLeft") setIndex((n) => (n - 1 + flat.length) % flat.length);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [flat.length]);

  const drag = useRef(0);

  function go(dir: number) {
    setIndex((n) => (n + dir + flat.length) % flat.length);
  }

  function jumpGroup(id: string) {
    const next = flat.findIndex((item) => item.groupId === id);
    if (next >= 0) setIndex(next);
  }

  if (!dish) return null;

  return (
    <>
      <section
        className="stage-glow relative overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div className="wrap menu-stage py-8 pt-nav">
          <nav className="flex gap-2 overflow-x-auto md:flex-col md:overflow-visible" aria-label="Menu sections">
            <p className="hidden text-kicker text-mute uppercase md:block">The fire</p>
            {menu.map((group) => {
              const on = group.id === dish.groupId;
              return (
                <button
                  key={group.id}
                  type="button"
                  className={`tap shrink-0 py-2 text-left text-sm md:border-b md:border-ivory/10 ${on ? "text-ember" : "text-ivory/75"}`}
                  aria-current={on}
                  onClick={() => jumpGroup(group.id)}
                >
                  {group.name}
                </button>
              );
            })}
          </nav>

          <div className="text-center">
            <p className="text-kicker text-ember uppercase">{dish.group}</p>
            <h1 key={dish.id} className="arrive mt-2 font-display text-4xl md:text-6xl">
              {dish.name}
            </h1>
            <p className="mt-2 font-display text-3xl text-ivory">{ksh(dish.price)}</p>
            <div
              className="float-dish relative mx-auto mt-1 h-80 w-full max-w-xl touch-pan-y md:h-[30rem]"
              onPointerDown={(event) => {
                drag.current = event.clientX;
              }}
              onPointerUp={(event) => {
                const dx = event.clientX - drag.current;
                if (dx > 48) go(-1);
                if (dx < -48) go(1);
              }}
            >
              <img
                key={dish.id}
                src={dish.image}
                alt={dish.name}
                className="float-frame arrive absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: dishFocus(dish.id) }}
              />
            </div>
            <span className="mx-auto mt-6 block h-0.5 w-28 overflow-hidden bg-ivory/15" aria-hidden>
              <span
                key={paused ? `${dish.id}-hold` : dish.id}
                className={`block h-full bg-ember ${paused ? "w-full" : "film-fill run w-full"}`}
                style={paused ? undefined : { animationDuration: "3.2s" }}
              />
            </span>
            <p className="mx-auto mt-4 flex max-w-md items-center justify-center gap-3 text-sm text-mute">
              <Heat n={dish.heat} />
              <span>{dish.detail}</span>
            </p>
            <div className="mt-5 flex items-center justify-center gap-3">
              <button type="button" className="tap size-11 border border-ivory/25 text-xl" aria-label="Previous dish" onClick={() => go(-1)}>
                ‹
              </button>
              <button
                type="button"
                className="tap bg-ember px-6 py-3 text-kicker text-ink uppercase"
                onClick={() => add({ name: dish.name, detail: dish.group, price: dish.price, image: dish.image })}
              >
                Add to the table
              </button>
              <button type="button" className="tap size-11 border border-ivory/25 text-xl" aria-label="Next dish" onClick={() => go(1)}>
                ›
              </button>
            </div>
          </div>

          <div className="flex justify-center gap-3 overflow-x-auto md:flex-col md:items-center md:overflow-visible">
            {groupDishes.map((item) => {
              const on = item.id === dish.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  className="tap shrink-0 text-center"
                  aria-current={on}
                  aria-label={item.name}
                  onClick={() => setIndex(flat.findIndex((row) => row.id === item.id))}
                >
                  <span className={`orb mx-auto block ${on ? "on" : ""}`}>
                    <img src={item.image} alt="" className="h-full w-full object-cover" style={{ objectPosition: dishFocus(item.id) }} />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <Marquee
        items={["Sambusa", "Suqaar", "Bariis iskukaris", "Basbaas", "Hilib ari", "Canjeero", "Oodkac", "Kalluun", "Xalwo", "Shaah"]}
      />

      {[
        {
          src: "/kitchen/bariis.jpg",
          kicker: "One pot",
          title: "Bariis. Not assembled.",
          line: "Goat, raisin, potato, fried onion. The spice goes in with the rice, not after.",
        },
        {
          src: "/kitchen/suqaar.jpg",
          kicker: "Dry fire",
          title: "Suqaar. Not a stew.",
          line: "Pepper, onion, the tin. The pan finishes dry. If it pools, the heat was low.",
        },
        {
          src: "/kitchen/canjeero.jpg",
          kicker: "Overnight",
          title: "Eyes open. Never flipped.",
          line: "Sorghum batter, a spoon of yesterday. Subag poured at the table, not in the pan.",
        },
        {
          src: "/kitchen/goat.jpg",
          kicker: "The grill",
          title: "Char first. Spice last.",
          line: "Bone-in goat, lime, chili salt. The fat should talk before the plate leaves the pass.",
        },
        {
          src: "/kitchen/fish.jpg",
          kicker: "The coast",
          title: "Whole. One slit of chili.",
          line: "Garlic, tamarind, green chili. The fish leaves the grill in one piece.",
        },
        {
          src: "/kitchen/camel.jpg",
          kicker: "Lean fire",
          title: "Camel rests. Goat does not.",
          line: "Pepper crust, herb oil. Medium, then the board, then the knife.",
        },
      ].map((plate) => (
        <section key={plate.title} className="relative min-h-band overflow-hidden">
          <img src={plate.src} alt="" className="ken absolute inset-0 h-full w-full object-cover" />
          <div className="vignette absolute inset-0" />
          <div className="wrap relative flex min-h-band flex-col justify-end py-16">
            <p className="text-kicker text-ember uppercase">{plate.kicker}</p>
            <h2 className="max-w-3xl font-display text-display">{plate.title}</h2>
            <p className="mt-4 max-w-md text-ivory/85">{plate.line}</p>
          </div>
        </section>
      ))}

      <div className="wrap py-16">
        {menu.map((group) => (
          <section key={group.id} id={group.id} className="anchor mb-14">
            <header className="border-b border-ivory/15 pb-4">
              <h2 className="font-display text-4xl">{group.name}</h2>
              <p className="mt-2 text-mute">{group.note}</p>
            </header>
            <ul>
              {group.dishes.map((item) => (
                <li key={item.id} className="flex gap-4 border-b border-ivory/10 py-5">
                  <img
                    src={item.image}
                    alt=""
                    className="size-16 shrink-0 rounded-full object-cover sm:size-24"
                    style={{ objectPosition: dishFocus(item.id) }}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-2xl">{item.name}</h3>
                      <Heat n={item.heat} />
                    </div>
                    <p className="mt-1 text-sm text-mute">{item.detail}</p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end justify-between gap-3">
                    <p>{ksh(item.price)}</p>
                    <button
                      type="button"
                      className="tap border border-ivory/25 px-4 py-2 text-kicker uppercase hover:border-ember hover:text-ember"
                      onClick={() => {
                        setIndex(flat.findIndex((row) => row.id === item.id));
                        add({ name: item.name, detail: group.name, price: item.price, image: item.image });
                      }}
                    >
                      Add
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <ReserveBand image="/kitchen/bariis.jpg" />
    </>
  );
}
