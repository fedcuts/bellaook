import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { house } from "@/data/house";
import { ReserveBand } from "@/components/house/bits";

const plates = [
  { to: "/menu" as const, src: "/kitchen/suqaar.jpg", label: "Suqaar" },
  { to: "/pizza" as const, src: "/kitchen/pie-special.jpg", label: "Stone" },
  { to: "/burger" as const, src: "/kitchen/burger-double.jpg", label: "Smash" },
  { to: "/story" as const, src: "/kitchen/canjeero.jpg", label: "Canjeero" },
];

const offers = [
  {
    name: "Bella anjera",
    line: "100% teff. On the board now.",
    image: "/kitchen/canjeero.jpg",
    text: "Bella Point — Bella anjera",
  },
  {
    name: "Family stone",
    line: "Two large pizzas from the house board.",
    image: "/kitchen/pie-special.jpg",
    text: "Bella Point — two large pizzas",
  },
  {
    name: "Suqaar for two",
    line: "Goat, canjeero, and shaah at the table.",
    image: "/kitchen/suqaar.jpg",
    text: "Bella Point — suqaar for two",
  },
  {
    name: "Stay and dine",
    line: "A furnished suite, then dinner downstairs.",
    image: "/images/suite-living.jpg",
    text: "Bella Point — suite and dinner",
  },
];

const somali = [
  { name: "Suqaar ari", line: "Goat, onion, chili. Dry, not a stew.", image: "/kitchen/suqaar.jpg", to: "/menu" as const },
  { name: "Bariis iskukaris", line: "One pot. Goat, raisin, fried onion.", image: "/kitchen/bariis.jpg", to: "/menu" as const },
  { name: "Sambusa", line: "Spiced beef, blistered pastry.", image: "/kitchen/sambusa.jpg", to: "/menu" as const },
  { name: "Hilib ari", line: "Chop, bone in, lime and chili salt.", image: "/kitchen/goat.jpg", to: "/menu" as const },
];

const rooms = [
  { src: "/images/dining-room.jpg", name: "The dining room", line: "Chandelier, cane, a long table." },
  { src: "/images/suite-living.jpg", name: "The suite", line: "Fully furnished. Ensuite." },
  { src: "/images/suite-bed.jpg", name: "The night", line: "Linen, warm light, Eastleigh quiet." },
  { src: "/images/lounge.jpg", name: "The lounge", line: "A chair before dinner." },
];

function LiveHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shift, setShift] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const node = videoRef.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    node.muted = true;
    const kick = () => node.play().catch(() => {});
    kick();
    node.addEventListener("loadeddata", kick);
    return () => node.removeEventListener("loadeddata", kick);
  }, []);

  return (
    <section
      className="relative min-h-stage overflow-hidden"
      onPointerMove={(event) => {
        const box = event.currentTarget.getBoundingClientRect();
        setShift({
          x: (event.clientX - box.left) / box.width - 0.5,
          y: (event.clientY - box.top) / box.height - 0.5,
        });
      }}
    >
      <img src="/images/dining-room.jpg" alt="" className="ken absolute inset-0 h-full w-full object-cover" />
      <div className="gold-scrim absolute inset-0" />
      <div className="wrap relative z-10 flex min-h-stage flex-col justify-end pb-28 pt-nav">
        <p className="text-kicker text-ivory/90 uppercase">Eastleigh · Kiringothi Street</p>
        <h1 className="mt-3 max-w-4xl font-display text-display italic text-balance">Bella Point</h1>
        <p className="mt-3 max-w-md text-lg text-ivory/90">{house.line}</p>
        <p className="mt-2 max-w-md text-sm text-ivory/75">
          {house.street}. {house.place}. Suites upstairs. The Somali table, the stone, and the smash downstairs.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/menu" className="tap bg-ember px-5 py-3 text-kicker text-ink uppercase">
            The Somali table
          </Link>
          <Link to="/reserve" className="tap border border-ivory/50 px-5 py-3 text-kicker text-ivory uppercase">
            Reserve
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-4 gap-3">
          {plates.map((plate, index) => (
            <Link
              key={plate.to}
              to={plate.to}
              className="float-plate tap block text-center"
              style={{
                animationDelay: `${index * -0.6}s`,
                transform: `translate3d(${shift.x * (index - 1.5) * 10}px, ${shift.y * 8}px, 0)`,
              }}
            >
              <img
                src={plate.src}
                alt=""
                className="mx-auto size-16 rounded-full object-cover ring-2 ring-ivory/70 shadow-2xl md:size-24"
              />
              <span className="mt-2 block text-kicker text-ivory uppercase">{plate.label}</span>
            </Link>
          ))}
        </div>
      </div>
      <video
        ref={videoRef}
        className="absolute top-nav right-4 z-10 mt-4 hidden h-36 w-56 rounded-sm object-cover shadow-2xl ring-1 ring-ivory/30 md:block"
        src="/films/press.mp4"
        poster="/kitchen/burger-double.jpg"
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <LiveHero />

      <section className="relative min-h-80 overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/films/stretch.mp4"
          poster="/kitchen/gloves.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="gold-scrim absolute inset-0" />
        <div className="wrap relative flex min-h-80 flex-col justify-end py-10">
          <p className="text-kicker text-ivory uppercase">The pass · gloves on</p>
          <h2 className="mt-2 max-w-xl font-display text-4xl text-balance md:text-6xl">The kitchen stays in the light.</h2>
        </div>
      </section>

      <section className="bg-ash py-16">
        <div className="wrap">
          <p className="text-kicker text-ember uppercase">On the board</p>
          <h2 className="mt-2 font-display text-display text-balance">Offers worth leaving the house for.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {offers.map((offer) => (
              <a
                key={offer.name}
                href={`${house.whatsapp}?text=${encodeURIComponent(offer.text)}`}
                className="card group relative block min-h-72 overflow-hidden"
              >
                <img src={offer.image} alt="" className="zoom absolute inset-0 h-full w-full object-cover" />
                <div className="vignette absolute inset-0" />
                <div className="relative flex min-h-72 flex-col justify-end p-6">
                  <p className="text-kicker text-ember uppercase">Tonight</p>
                  <h3 className="mt-1 font-display text-4xl">{offer.name}</h3>
                  <p className="mt-2 max-w-sm text-ivory/85">{offer.line}</p>
                  <span className="mt-4 text-kicker text-ivory uppercase">WhatsApp the table</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-16">
        <div className="wrap">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-kicker text-ember uppercase">Somali diet</p>
              <h2 className="mt-2 max-w-xl font-display text-display text-balance">The food Eastleigh actually comes for.</h2>
            </div>
            <Link to="/menu" className="hidden text-kicker uppercase hover:text-ember md:inline">
              Full menu
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {somali.map((dish) => (
              <Link key={dish.name} to={dish.to} className="card relative block min-h-80 overflow-hidden">
                <img src={dish.image} alt={dish.name} className="zoom absolute inset-0 h-full w-full object-cover" />
                <div className="vignette absolute inset-0" />
                <div className="relative flex h-full min-h-72 flex-col justify-end p-6">
                  <h3 className="font-display text-4xl">{dish.name}</h3>
                  <p className="mt-2 text-ivory/85">{dish.line}</p>
                </div>
              </Link>
            ))}
          </div>
          <Link to="/menu" className="tap mt-6 inline-flex bg-ember px-5 py-3 text-kicker text-ink uppercase md:hidden">
            Full menu
          </Link>
        </div>
      </section>

      <section className="bg-ash py-16">
        <div className="wrap">
          <p className="text-kicker text-ember uppercase">The house</p>
          <h2 className="mt-2 max-w-xl font-display text-display text-balance">Suites above. Service below.</h2>
          <div className="mt-8 flex gap-4 overflow-x-auto pb-2">
            {rooms.map((room) => (
              <figure key={room.name} className="w-72 shrink-0">
                <img src={room.src} alt={room.name} className="h-80 w-full object-cover" />
                <figcaption className="mt-3">
                  <p className="font-display text-2xl">{room.name}</p>
                  <p className="text-sm text-mute">{room.line}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img src="/kitchen/chef-plate.jpg" alt="Chef in gloves plating suqaar" className="absolute inset-0 h-full w-full object-cover" />
        <div className="gold-scrim absolute inset-0" />
        <div className="wrap relative grid min-h-band items-end gap-8 py-16 md:grid-cols-2">
          <div>
            <p className="text-kicker text-ivory uppercase">The chef</p>
            <h2 className="mt-2 font-display text-display text-balance">Gloves on. Fire close.</h2>
            <p className="mt-4 max-w-md text-ivory/85">
              Suqaar hits the pan dry. Canjeero is never flipped. The stone gets ninety seconds. Nothing leaves the pass bare-handed.
            </p>
            <Link to="/story" className="mt-6 inline-flex text-kicker text-ivory uppercase">
              Watch the suqaar
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-ink py-16">
        <div className="wrap grid gap-4 md:grid-cols-2">
          <Link to="/pizza" className="card relative block min-h-96 overflow-hidden">
            <img src="/kitchen/pie-margherita.jpg" alt="" className="zoom absolute inset-0 h-full w-full object-cover" />
            <div className="vignette absolute inset-0" />
            <div className="relative flex min-h-96 flex-col justify-end p-6">
              <h3 className="font-display text-5xl">Stone</h3>
              <p className="mt-2 text-ivory/85">Margherita, tikka, peri peri, the Bella special.</p>
            </div>
          </Link>
          <Link to="/burger" className="card relative block min-h-96 overflow-hidden">
            <img src="/kitchen/burger-double.jpg" alt="" className="zoom absolute inset-0 h-full w-full object-cover" />
            <div className="vignette absolute inset-0" />
            <div className="relative flex min-h-96 flex-col justify-end p-6">
              <h3 className="font-display text-5xl">Smash</h3>
              <p className="mt-2 text-ivory/85">Lace, cheese, one press. Beef, double, or chicken.</p>
            </div>
          </Link>
        </div>
      </section>

      <ReserveBand />
    </>
  );
}
