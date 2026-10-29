import { useEffect, useRef, useState } from "react";

export type Cut = {
  id: string;
  src: string;
  poster: string;
  kicker: string;
  title: string;
  line: string;
  stat?: string;
  heat?: { from: number; to: number };
  fire?: boolean;
};

export const stoneCuts: Cut[] = [
  {
    id: "stretch",
    src: "/films/stretch.mp4",
    poster: "/kitchen/gloves.jpg",
    kicker: "Slow · the stretch",
    title: "Hands.",
    line: "Gloves on. Tipo 00, opened by the knuckles. Flour stays on the glove, not the crust.",
  },
  {
    id: "fire",
    src: "/films/dough.mp4",
    poster: "/food/oven.jpg",
    kicker: "Slow · the fire",
    title: "Ninety seconds.",
    line: "One turn on the stone. Flames lick the rim. Cheese starts to move.",
    stat: "485°",
    fire: true,
  },
  {
    id: "pull",
    src: "/films/pull.mp4",
    poster: "/kitchen/pizza-pull.jpg",
    kicker: "Slow · the pull",
    title: "Still moving.",
    line: "If the cheese does not stretch when it leaves the peel, it is not done.",
  },
];

export const smashCuts: Cut[] = [
  {
    id: "press",
    src: "/films/press.mp4",
    poster: "/kitchen/burger-double.jpg",
    kicker: "Slow · the press",
    title: "One smash.",
    line: "102 grams hits the steel. One hard press. Smoke is the timer.",
    heat: { from: 93, to: 210 },
  },
  {
    id: "plate",
    src: "/films/smash.mp4",
    poster: "/kitchen/burger-done.jpg",
    kicker: "Slow · the plate",
    title: "Lace.",
    line: "The edge should snap. Basbaas stays beside the plate, not on the steel.",
    stat: "68°",
  },
];

export const kitchenCuts: Cut[] = [
  stoneCuts[0],
  stoneCuts[1],
  smashCuts[0],
  {
    id: "pan",
    src: "/films/chef.mp4",
    poster: "/kitchen/gloves.jpg",
    kicker: "Slow · the pan",
    title: "The chef.",
    line: "Gloves on. The steel, then the plate. Smoke is the timer.",
    fire: true,
  },
];

function useReduced() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);
  return reduced;
}

export function Sparks() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[3] overflow-hidden" aria-hidden>
      {["12%", "22%", "38%", "51%", "63%", "74%", "86%", "31%"].map((left, i) => (
        <span
          key={left}
          className="spark absolute bottom-0 h-4 w-0.5 rounded-full bg-ember"
          style={{ left, animationDelay: `${-i * 0.42}s`, animationDuration: `${2.4 + (i % 3) * 0.55}s` }}
        />
      ))}
    </div>
  );
}

export function Smoke() {
  return (
    <div className="smoke-field" aria-hidden>
      <span className="puff" />
      <span className="puff" />
      <span className="puff" />
      <span className="puff" />
    </div>
  );
}

export function LoopFilm({ src, poster }: { src: string; poster: string }) {
  const reduced = useReduced();
  if (reduced) {
    return <img src={poster} alt="" className="absolute inset-0 h-full w-full object-cover" />;
  }
  return (
    <>
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
      />
      <Smoke />
    </>
  );
}

export function CookFilm({
  cuts,
  heading = "h2",
  stack = false,
}: {
  cuts: readonly Cut[];
  heading?: "h1" | "h2";
  stack?: boolean;
}) {
  const reduced = useReduced();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const cut = cuts[index] ?? cuts[0];
  const Title = heading;

  useEffect(() => {
    if (!reduced) return;
    const id = window.setTimeout(() => setIndex((n) => (n + 1) % cuts.length), 4200);
    return () => window.clearTimeout(id);
  }, [reduced, index, cuts.length]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const tag = (event.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (event.key === "ArrowRight") setIndex((n) => (n + 1) % cuts.length);
      if (event.key === "ArrowLeft") setIndex((n) => (n - 1 + cuts.length) % cuts.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [cuts.length]);

  useEffect(() => {
    const node = videoRef.current;
    if (!node || reduced) return;
    node.muted = true;
    const kick = () => {
      node.play().catch(() => {});
    };
    kick();
    node.addEventListener("loadeddata", kick);
    return () => node.removeEventListener("loadeddata", kick);
  }, [cut.src, reduced]);

  const heat = cut.heat ? Math.round(cut.heat.from + (cut.heat.to - cut.heat.from) * progress) : null;

  return (
    <section className="relative min-h-stage overflow-hidden bg-ink" aria-roledescription="film">
      {reduced ? (
        <img src={cut.poster} alt="" className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <video
          key={cut.src}
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={cut.src}
          poster={cut.poster}
          autoPlay
          muted
          playsInline
          onTimeUpdate={(event) => {
            const node = event.currentTarget;
            if (!node.duration) return;
            setProgress(node.currentTime / node.duration);
          }}
          onEnded={() => {
            setProgress(0);
            setIndex((n) => (n + 1) % cuts.length);
          }}
        />
      )}
      <Smoke />
      <Sparks />
      {cut.fire ? <div className="flames-band" aria-hidden /> : null}
      {stack ? (
        <>
          <div className="pointer-events-none absolute inset-x-0 top-[4.75rem] z-[4] flex justify-center gap-2 md:hidden" aria-hidden>
            {["/anatomy/bun.jpg", "/anatomy/cheese.jpg", "/anatomy/patty.jpg", "/anatomy/pickle.jpg", "/anatomy/heel.jpg"].map(
              (src, i) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="float-plate size-12 rounded-full object-cover"
                  style={{ animationDelay: `${-i * 0.35}s` }}
                />
              ),
            )}
          </div>
          <div className="pointer-events-none absolute top-28 right-6 z-[4] hidden h-72 w-36 md:block" aria-hidden>
            {["/anatomy/bun.jpg", "/anatomy/cheese.jpg", "/anatomy/patty.jpg", "/anatomy/pickle.jpg", "/anatomy/heel.jpg"].map(
              (src, i) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="split-layer absolute top-1/2 left-1/2 size-24 object-cover"
                  style={{
                    ["--slot" as string]: i - 2,
                    zIndex: 6 - i,
                    borderRadius: i === 1 ? "18%" : "999px",
                  }}
                />
              ),
            )}
          </div>
        </>
      ) : null}
      <div className="vignette absolute inset-0 z-10" />
      <span className="film-corner top-nav left-4 z-20 hidden border-t border-l md:block" />
      <span className="film-corner top-nav right-4 z-20 hidden border-t border-r md:block" />
      <span className="film-corner bottom-20 left-4 z-20 hidden border-b border-l md:block" />
      <span className="film-corner bottom-20 right-4 z-20 hidden border-b border-r md:block" />
      <div className="wrap relative z-10 flex min-h-stage flex-col pb-28 pt-nav">
        <div className="flex justify-end pt-4">
          {heat !== null ? (
            <p className="ember-num font-display text-5xl md:text-stat">{heat}°</p>
          ) : cut.stat ? (
            <p className="ember-num font-display text-5xl md:text-stat">{cut.stat}</p>
          ) : (
            <p className="text-kicker text-ivory/70 uppercase">Slow motion</p>
          )}
        </div>
        <div className="mt-auto max-w-xl">
          <p className="text-kicker text-ember uppercase">{cut.kicker}</p>
          <Title key={cut.id} className="arrive mt-2 font-display text-display">
            {cut.title}
          </Title>
          <p className="mt-3 max-w-md text-ivory/85">{cut.line}</p>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-5 z-20">
        <div className="wrap flex gap-3">
          {cuts.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              className="tap min-h-11 flex-1 text-left"
              aria-current={idx === index}
              onClick={() => {
                setProgress(0);
                setIndex(idx);
              }}
            >
              <span className="block h-0.5 overflow-hidden bg-ivory/25">
                <span
                  className="block h-full origin-left bg-ember"
                  style={{ transform: `scaleX(${idx < index ? 1 : idx === index ? progress : 0})` }}
                />
              </span>
              <span className={`mt-2 hidden text-kicker uppercase sm:block ${idx === index ? "text-ember" : "text-ivory/70"}`}>
                {item.kicker.split("·")[1]?.trim() ?? item.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

const piePhases = [
  { id: "dough", title: "Stretch", line: "The rim is opened by the knuckles, not a pin.", image: "/food/dough.jpg" },
  { id: "sauce", title: "Sauce", line: "San Marzano, crushed by hand, stopped short of the rim.", image: "/food/dough.jpg" },
  { id: "cheese", title: "Cheese", line: "Fior di latte, torn. It should still be moving in the oven.", image: "/food/margherita.jpg" },
  { id: "fire", title: "Fire", line: "485 degrees. One turn. Count the smoke, not the clock.", image: "/food/oven.jpg" },
  { id: "pull", title: "Pull", line: "Off the peel. The strand should reach the plate.", image: "/kitchen/pizza-pull.jpg" },
] as const;

const bits = [
  { src: "/kitchen/pizza-pull.jpg", left: "22%", top: "28%", delay: "0s" },
  { src: "/food/margherita.jpg", left: "52%", top: "18%", delay: "0.1s" },
  { src: "/kitchen/basbaas.jpg", left: "64%", top: "46%", delay: "0.18s" },
  { src: "/food/tomatoes.jpg", left: "30%", top: "56%", delay: "0.28s" },
];

export function PieCook() {
  const reduced = useReduced();
  const [phase, setPhase] = useState(0);
  const step = piePhases[phase] ?? piePhases[0];

  useEffect(() => {
    if (reduced) return;
    const id = window.setTimeout(() => setPhase((n) => (n + 1) % piePhases.length), 2600);
    return () => window.clearTimeout(id);
  }, [phase, reduced]);

  return (
    <section className="overflow-hidden bg-ink py-20">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-kicker text-ember uppercase">Pizza, cooking</p>
          <h2 className="mt-3 font-display text-display">Watch the ninety seconds.</h2>
          <ol className="mt-8 space-y-2">
            {piePhases.map((item, idx) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={`tap flex w-full items-baseline gap-4 border px-4 py-3 text-left ${idx === phase ? "border-ember" : "border-ivory/10"}`}
                  onClick={() => setPhase(idx)}
                  aria-current={idx === phase}
                >
                  <span className="text-kicker text-ember">0{idx + 1}</span>
                  <span className="font-display text-2xl">{item.title}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <p key={step.id} className="arrive text-kicker text-ember uppercase">
            {step.title}
          </p>
          <p className="mt-2 max-w-md text-ivory/80">{step.line}</p>
          <div className="relative mx-auto mt-8 h-cook w-full max-w-md">
            <div className="pie-disc absolute top-6 left-1/2">
              <img
                key={step.image + step.id}
                src={step.image}
                alt=""
                className={`h-full w-full object-cover ${step.id === "dough" ? "spin-slow" : ""}`}
              />
              {step.id === "sauce" ? (
                <svg viewBox="0 0 100 100" className="absolute inset-[14%] h-auto w-auto" aria-hidden>
                  <circle className="sauce-draw" cx="50" cy="50" r="30" fill="none" stroke="#ff5a1f" strokeWidth="5" strokeDasharray="188" />
                  <circle className="sauce-draw sauce-late" cx="50" cy="50" r="16" fill="none" stroke="#c4321a" strokeWidth="7" strokeDasharray="100" />
                </svg>
              ) : null}
              {step.id === "fire" ? <div className="flames" /> : null}
              {(step.id === "fire" || step.id === "pull") && <Smoke />}
            </div>
            {step.id === "cheese"
              ? bits.map((bit) => (
                  <img
                    key={bit.src + bit.left}
                    src={bit.src}
                    alt=""
                    className="topping-drop absolute size-16 rounded-full object-cover shadow-xl"
                    style={{ left: bit.left, top: bit.top, animationDelay: bit.delay }}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    </section>
  );
}

const stack = [
  { id: "crown", name: "Crown", note: "Potato bun, sesame", src: "/anatomy/bun.jpg", slot: -2, round: true },
  { id: "cheese", name: "American", note: "Sheeted at the flip", src: "/anatomy/cheese.jpg", slot: -1, round: false },
  { id: "patty", name: "The smash", note: "102 g · one press", src: "/anatomy/patty.jpg", slot: 0, round: true },
  { id: "pickle", name: "Pickle & onion", note: "Dill, not sweet", src: "/anatomy/pickle.jpg", slot: 1, round: true },
  { id: "heel", name: "The heel", note: "Sauce on the crumb", src: "/anatomy/heel.jpg", slot: 2, round: true },
] as const;

export function Anatomy() {
  const reduced = useReduced();
  const [spread, setSpread] = useState(reduced ? 0.85 : 0.35);
  const [held, setHeld] = useState(false);

  useEffect(() => {
    if (held || reduced) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = (now - start) / 1000;
      setSpread(0.5 + 0.48 * Math.sin(t * 0.85));
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [held, reduced]);

  return (
    <section className="overflow-hidden bg-ink py-16 md:py-24">
      <div className="wrap grid items-center gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div className="order-2 lg:order-1">
          <p className="text-kicker text-ember uppercase">Burger anatomy</p>
          <h2 className="mt-3 font-display text-display">Five layers. One press.</h2>
          <p className="mt-4 max-w-md text-mute">
            Drag the spread. Crown, cheese, the lace, pickle, heel. Nothing else belongs in the stack.
          </p>
          <label className="mt-8 block">
            <span className="text-kicker text-mute uppercase">Spread the burger</span>
            <input
              className="mt-3 w-full accent-ember"
              type="range"
              min={0}
              max={100}
              value={Math.round(spread * 100)}
              aria-valuetext={`${Math.round(spread * 100)} percent exploded`}
              onPointerDown={() => setHeld(true)}
              onPointerUp={() => setHeld(false)}
              onPointerCancel={() => setHeld(false)}
              onBlur={() => setHeld(false)}
              onChange={(event) => setSpread(Number(event.target.value) / 100)}
            />
          </label>
          <ul className="mt-6 lg:hidden">
            {stack.map((layer) => (
              <li key={layer.id} className="flex items-baseline justify-between gap-3 border-b border-ivory/10 py-2">
                <span className="font-display text-xl">{layer.name}</span>
                <span className="text-sm text-mute">{layer.note}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative order-1 mx-auto h-stack w-full max-w-xl lg:order-2">
          {stack.map((layer) => (
            <div
              key={layer.id}
              className="absolute top-1/2 left-1/2 will-change-transform"
              style={{
                width: layer.slot === 0 ? "9.5rem" : "8.25rem",
                zIndex: 8 - layer.slot,
                transform: `translate(-50%, calc(-50% + ${layer.slot * spread * 152}px))`,
              }}
            >
              <img
                src={layer.src}
                alt={layer.name}
                className={`aspect-square w-full object-cover ${layer.round ? "rounded-full" : "rounded-xl"}`}
              />
              <p
                className="pointer-events-none absolute top-1/2 hidden w-40 -translate-y-1/2 text-right lg:block"
                style={{ opacity: spread > 0.62 ? 1 : 0, right: "calc(100% + 1.25rem)" }}
              >
                <span className="block font-display text-2xl leading-none">{layer.name}</span>
                <span className="mt-1 block text-xs text-mute">{layer.note}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
