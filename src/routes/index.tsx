import { createFileRoute } from "@tanstack/react-router";
import { Frame } from "@/components/house/chrome";
import { HomePage } from "@/components/house/home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bella Point Suites & Restaurant | Eastleigh, Nairobi" },
      {
        name: "description",
        content:
          "Bella Point Suites & Restaurant on Kiringothi Street, Eastleigh. Opposite Jam Street, near Alhidaya Mosque. Where luxury meets comfort.",
      },
    ],
    links: [{ rel: "preload", as: "image", href: "/kitchen/hands.jpg" }],
  }),
  component: function Home() {
    return (
      <Frame>
        <HomePage />
      </Frame>
    );
  },
});
