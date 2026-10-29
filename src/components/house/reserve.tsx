import { useState, type FormEvent } from "react";
import { house } from "@/data/house";

const TIMES = [
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
];

const BOOKINGS = "bella-bookings";

type Booking = {
  id: string;
  name: string;
  phone: string;
  date: string;
  time: string;
  seats: number;
  note: string;
  at: string;
};

function today() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

export function ReservePage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("19:00");
  const [seats, setSeats] = useState(2);
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  function submit(event: FormEvent) {
    event.preventDefault();
    const cleanName = name.trim();
    const cleanPhone = phone.trim();
    if (cleanName.length < 2) {
      setError("Write the name the table should be under.");
      return;
    }
    if (cleanPhone.replace(/\D/g, "").length < 9) {
      setError("Add a phone the house can call.");
      return;
    }
    if (!date) {
      setError("Pick a date.");
      return;
    }
    const booking: Booking = {
      id: typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `${Date.now()}`,
      name: cleanName,
      phone: cleanPhone,
      date,
      time,
      seats,
      note: note.trim(),
      at: new Date().toISOString(),
    };
    try {
      const raw = localStorage.getItem(BOOKINGS);
      const parsed: unknown = raw ? JSON.parse(raw) : [];
      const list = Array.isArray(parsed) ? parsed : [];
      list.push(booking);
      localStorage.setItem(BOOKINGS, JSON.stringify(list));
    } catch {
      setError("This phone could not store the request. Call the house instead.");
      return;
    }
    setError("");
    setDone(true);
  }

  return (
    <section className="grid min-h-stage md:grid-cols-2">
      <div className="relative min-h-80">
        <img src="/kitchen/dining.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="vignette absolute inset-0" />
        <div className="relative flex h-full flex-col justify-end p-8 pt-nav md:p-12">
          <p className="text-kicker text-ember uppercase">{house.street}</p>
          <h1 className="mt-3 font-display text-display">Hold a table.</h1>
          <p className="mt-4 max-w-sm text-ivory/85">
            {house.place}. {house.city}. Call or WhatsApp {house.phone}. A request stays on this phone until Bella Point replies.
          </p>
        </div>
      </div>

      <div className="bg-ash px-gutter py-12 md:px-12 md:py-24">
        {done ? (
          <p className="max-w-md font-display text-3xl leading-snug" role="status" aria-live="polite">
            Request held. This is not a confirmed booking until Bella Point replies at {house.phone}.
          </p>
        ) : (
          <form className="mx-auto grid max-w-lg gap-4" onSubmit={submit} noValidate>
            <p className="text-kicker text-mute uppercase">Request</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm">
                Name
                <input
                  className="field"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </label>
              <label className="grid gap-2 text-sm">
                Phone
                <input
                  className="field"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  required
                />
              </label>
              <label className="grid gap-2 text-sm">
                Date
                <input
                  className="field"
                  name="date"
                  type="date"
                  min={today()}
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  required
                />
              </label>
              <label className="grid gap-2 text-sm">
                Time
                <select className="field" name="time" value={time} onChange={(event) => setTime(event.target.value)}>
                  {TIMES.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm">
                Seats
                <select
                  className="field"
                  name="seats"
                  value={seats}
                  onChange={(event) => setSeats(Number(event.target.value))}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label className="grid gap-2 text-sm">
              Note
              <textarea
                className="field min-h-28"
                name="note"
                value={note}
                onChange={(event) => setNote(event.target.value)}
                placeholder="Allergies, a quiet corner, a late smash."
              />
            </label>
            {error ? (
              <p className="text-sm text-ember" role="alert">
                {error}
              </p>
            ) : null}
            <button type="submit" className="tap mt-2 bg-ember py-3 text-kicker text-ink uppercase">
              Send the request
            </button>
            <p className="text-sm text-mute">
              Saved on this device. Not a live booking. {house.email}
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
