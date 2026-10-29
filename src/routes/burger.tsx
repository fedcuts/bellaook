import { createFileRoute } from "@tanstack/react-router";
import { Frame } from "@/components/house/chrome";
import { SmashPage } from "@/components/house/smash";

export const Route = createFileRoute("/burger")({
  head: () => ({
    meta: [
      { title: "The Smash | Bella Point" },
      {
        name: "description",
        content: "Smash burgers at Bella Point, Kiringothi Street. One press on the steel. Basbaas on the side.",
      },
    ],
    links: [{ rel: "preload", as: "image", href: "/kitchen/burger-ball.jpg" }],
  }),
  component: function Page() {
    return (
      <Frame>
        <SmashPage />
      </Frame>
    );
  },
});
