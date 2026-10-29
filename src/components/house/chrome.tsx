import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { house, ksh, liveOffers, nav } from "@/data/house";
import { useHouse } from "@/components/house/state";

function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-px bg-ivory/15">
      <div className="h-full bg-ember" style={{ width: `${p * 100}%` }} />
    </div>
  );
}

export function Frame({ children }: { children: React.ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const { open, setOpen, lines } = useHouse();
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    setMenu(false);
  }, [path]);

  useEffect(() => {
    document.body.style.overflow = menu || open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu, open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenu(false);
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setOpen]);

  return (
    <div className="min-h-screen bg-ink text-ivory">
      <a className="skip text-kicker uppercase" href="#main">
        Skip
      </a>
      <ScrollProgress />
      <header className="fixed inset-x-0 top-0 z-40 border-b border-ivory/10 bg-ink/80 backdrop-blur-md">
        <div className="wrap flex h-nav items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img src="/favicon.svg" alt="" className="size-6" />
            <span className="font-display text-2xl italic">{house.name}</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-kicker text-ivory uppercase transition-colors hover:text-ember"
                activeOptions={{ exact: true }}
                activeProps={{ "data-status": "active" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="tap border border-ivory/20 px-3 py-2 text-kicker text-ivory uppercase"
              onClick={() => setOpen(true)}
            >
              Ticket{lines.length ? ` ${lines.length}` : ""}
            </button>
            <button
              type="button"
              className="tap grid size-11 place-items-center border border-ivory/20 md:hidden"
              aria-label={menu ? "Close menu" : "Open menu"}
              aria-expanded={menu}
              onClick={() => setMenu((v) => !v)}
            >
              {menu ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
      <OfferBar />

      <div className={`sheet fixed inset-0 z-40 bg-ink ${menu ? "on" : ""}`} inert={!menu}>
        <div className="wrap flex min-h-stage flex-col justify-center gap-4 pt-nav">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-display text-display text-ivory"
              activeProps={{ "data-status": "active" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <main id="main">{children}</main>
      <Footer />
      <TicketDrawer />
    </div>
  );
}

function OfferBar() {
  const offer = liveOffers.find((item) => item.active);
  if (!offer) return null;
  return (
    <a
      href={`${house.whatsapp}?text=${encodeURIComponent(`Bella Point — ${offer.title}`)}`}
      className="fixed inset-x-3 bottom-3 z-30 flex items-center justify-between gap-3 border border-ember/40 bg-ink/90 px-4 py-3 shadow-2xl backdrop-blur-md"
    >
      <span>
        <span className="text-kicker text-ember uppercase">{offer.kicker}</span>
        <span className="mt-1 block font-display text-2xl leading-none">{offer.title}</span>
      </span>
      <span className="hidden max-w-xs text-sm text-ivory/80 sm:block">{offer.line}</span>
      <span className="shrink-0 bg-ember px-3 py-2 text-kicker text-ink uppercase">Order</span>
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ivory/10 bg-ash">
      <div className="wrap grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl italic">{house.name}</p>
          <p className="mt-3 max-w-xs text-mute">Suites & Restaurant. {house.line}</p>
        </div>
        <div>
          <p className="text-kicker text-ember uppercase">Visit</p>
          <p className="mt-3">
            {house.street}
            <br />
            {house.place}
            <br />
            {house.city}
          </p>
          <p className="mt-2 text-mute">{house.hours}</p>
        </div>
        <div>
          <p className="text-kicker text-ember uppercase">Contact</p>
          <p className="mt-3">
            <a className="hover:text-ember" href={`tel:${house.tel}`}>
              {house.phone}
            </a>
            <br />
            <a className="hover:text-ember" href={`mailto:${house.email}`}>
              {house.email}
            </a>
            <br />
            <a className="hover:text-ember" href={house.whatsapp}>
              WhatsApp
            </a>
          </p>
        </div>
      </div>
      <div className="wrap flex flex-wrap gap-4 border-t border-ivory/10 py-4 pb-24 text-sm text-mute">
        <span>© {new Date().getFullYear()} Bella Point Suites & Restaurant</span>
        {nav.map((item) => (
          <Link key={item.to} to={item.to} className="hover:text-ivory">
            {item.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}

function TicketDrawer() {
  const { open, setOpen, lines, remove, clear, total, place } = useHouse();
  const [held, setHeld] = useState(false);

  return (
    <div className={`fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
      <button
        type="button"
        className={`sheet absolute inset-0 bg-ink/70 ${open ? "on" : ""}`}
        aria-label="Close ticket"
        onClick={() => setOpen(false)}
      />
      <aside
        className={`drawer absolute top-0 right-0 flex h-full w-full max-w-drawer flex-col bg-ash ${open ? "on" : ""}`}
        role="dialog"
        aria-label="Ticket"
        inert={!open}
      >
        <div className="flex items-center justify-between border-b border-ivory/10 px-5 py-4">
          <p className="text-kicker uppercase">Your ticket</p>
          <button type="button" className="tap grid size-11 place-items-center" aria-label="Close" onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {held ? (
            <p className="text-ivory">
              Held on this phone. The kitchen does not see it until you call {house.phone}.
            </p>
          ) : null}
          {!lines.length && !held ? (
            <p className="text-mute">Nothing fired yet. Build a pie, a smash, or a plate from the menu.</p>
          ) : null}
          <ul className="mt-4 space-y-4">
            {lines.map((line) => (
              <li key={line.id} className="flex gap-3 border-b border-ivory/10 pb-4">
                <img src={line.image} alt="" className="size-16 object-cover" />
                <div className="min-w-0 flex-1">
                  <p className="font-medium">{line.name}</p>
                  <p className="text-sm text-mute">{line.detail}</p>
                  <p className="mt-1">{ksh(line.price)}</p>
                </div>
                <button type="button" className="tap text-sm text-mute hover:text-ivory" onClick={() => remove(line.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-ivory/10 px-5 py-5">
          <div className="flex items-baseline justify-between">
            <span className="text-kicker text-mute uppercase">Total</span>
            <span className="font-display text-3xl">{ksh(total)}</span>
          </div>
          <p className="mt-2 text-sm text-mute">Saved on this device only. Not a live order.</p>
          <button
            type="button"
            className="tap mt-4 w-full bg-ember py-3 text-kicker text-ink uppercase disabled:opacity-40"
            disabled={!lines.length}
            onClick={() => {
              if (place()) setHeld(true);
            }}
          >
            Hold the ticket
          </button>
          <div className="mt-3 flex gap-3">
            <button type="button" className="tap flex-1 border border-ivory/20 py-3 text-kicker uppercase" onClick={() => { clear(); setHeld(false); }}>
              Clear
            </button>
            <Link
              to="/reserve"
              className="tap flex-1 border border-ivory/20 py-3 text-center text-kicker uppercase"
              onClick={() => setOpen(false)}
            >
              Reserve
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}
