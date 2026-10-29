import { createFileRoute } from "@tanstack/react-router";
import { Frame } from "@/components/house/chrome";
import { StoryPage } from "@/components/house/story";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Suqaar Ari | The recipe" },
      {
        name: "description",
        content:
          "Suqaar ari at Bella Point: 700 g goat, 18 g of the spice tin, one wide pan. Weighed, fired, finished dry.",
      },
    ],
    links: [{ rel: "preload", as: "image", href: "/kitchen/dining.jpg" }],
  }),
  component: function Page() {
    return (
      <Frame>
        <StoryPage />
      </Frame>
    );
  },
});
