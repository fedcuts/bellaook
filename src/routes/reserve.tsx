import { createFileRoute } from "@tanstack/react-router";
import { Frame } from "@/components/house/chrome";
import { ReservePage } from "@/components/house/reserve";

export const Route = createFileRoute("/reserve")({
  head: () => ({
    meta: [
      { title: "Reserve | Bella Point, Eastleigh" },
      {
        name: "description",
        content:
          "Request a table at Bella Point Suites & Restaurant, Kiringothi Street, Eastleigh. The house confirms by phone or WhatsApp.",
      },
    ],
    links: [{ rel: "preload", as: "image", href: "/kitchen/dining.jpg" }],
  }),
  component: function Page() {
    return (
      <Frame>
        <ReservePage />
      </Frame>
    );
  },
});
