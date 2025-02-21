import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sifnos for Animals",
  description: "Help us find loving homes for the animals of Sifnos",
  openGraph: {
    title: "Sifnos for Animals",
    description: "Help us find loving homes for the animals of Sifnos",
    images: [
      {
        url: "/logofinal.jpg",
        width: 1200,
        height: 630,
        alt: "Sifnos for Animals Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sifnos for Animals",
    description: "Help us find loving homes for the animals of Sifnos",
    images: ["/logofinal.jpg"],
  },
};
