import { createFileRoute } from "@tanstack/react-router";
import { Frame } from "@/components/house/chrome";
import { MenuPage } from "@/components/house/board";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu | Bella Point, Eastleigh" },
      {
        name: "description",
        content:
          "Somali table at Bella Point: sambusa, canjeero, suqaar, bariis, hilib ari, and shaah. Kiringothi Street, Eastleigh.",
      },
    ],
    links: [{ rel: "preload", as: "image", href: "/kitchen/bariis.jpg" }],
  }),
  component: function Page() {
    return (
      <Frame>
        <MenuPage />
      </Frame>
    );
  },
});
