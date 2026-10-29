import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type TicketLine = {
  id: string;
  name: string;
  detail: string;
  price: number;
  image: string;
};

type HouseApi = {
  lines: TicketLine[];
  open: boolean;
  ready: boolean;
  total: number;
  add: (line: Omit<TicketLine, "id">) => void;
  remove: (id: string) => void;
  clear: () => void;
  setOpen: (open: boolean) => void;
  place: () => boolean;
};

const KEY = "bella-ticket";
const ORDERS = "bella-orders";

const HouseContext = createContext<HouseApi | null>(null);

function isLine(value: unknown): value is TicketLine {
  if (!value || typeof value !== "object") return false;
  const line = value as TicketLine;
  return (
    typeof line.id === "string" &&
    typeof line.name === "string" &&
    typeof line.detail === "string" &&
    typeof line.price === "number" &&
    typeof line.image === "string"
  );
}

function readLines(): TicketLine[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const data: unknown = JSON.parse(raw);
    return Array.isArray(data) ? data.filter(isLine) : [];
  } catch {
    return [];
  }
}

export function HouseState({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<TicketLine[]>([]);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setLines(readLines());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(KEY, JSON.stringify(lines));
  }, [lines, ready]);

  const api = useMemo<HouseApi>(() => {
    const total = lines.reduce((sum, line) => sum + line.price, 0);
    return {
      lines,
      open,
      ready,
      total,
      setOpen,
      add: (line) => {
        const id =
          typeof crypto !== "undefined" && "randomUUID" in crypto
            ? crypto.randomUUID()
            : `${Date.now()}`;
        setLines((current) => [...current, { ...line, id }]);
        setOpen(true);
      },
      remove: (id) => setLines((current) => current.filter((line) => line.id !== id)),
      clear: () => setLines([]),
      place: () => {
        if (!lines.length) return false;
        try {
          const previous = localStorage.getItem(ORDERS);
          const data: unknown = previous ? JSON.parse(previous) : [];
          const orders = Array.isArray(data) ? data : [];
          orders.push({ at: new Date().toISOString(), lines, total });
          localStorage.setItem(ORDERS, JSON.stringify(orders));
        } catch {
          return false;
        }
        setLines([]);
        return true;
      },
    };
  }, [lines, open, ready]);

  return <HouseContext.Provider value={api}>{children}</HouseContext.Provider>;
}

export function useHouse() {
  const value = useContext(HouseContext);
  if (!value) throw new Error("useHouse must be used inside HouseState");
  return value;
}
