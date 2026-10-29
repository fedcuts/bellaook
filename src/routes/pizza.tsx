import { createFileRoute } from "@tanstack/react-router";
import { Frame } from "@/components/house/chrome";
import { StonePage } from "@/components/house/stone";

export const Route = createFileRoute("/pizza")({
  head: () => ({
    meta: [
      { title: "The Stone | Bella Point" },
      {
        name: "description",
        content:
          "Stone-fired pies at Bella Point, Eastleigh. 72-hour dough, a short fire, then basbaas after the peel.",
      },
    ],
    links: [{ rel: "preload", as: "image", href: "/food/hero.jpg" }],
  }),
  component: function Page() {
    return (
      <Frame>
        <StonePage />
      </Frame>
    );
  },
});
