import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Welc'Home | Menage et conciergerie a Marseille",
  description:
    "Service professionnel de menage et de conciergerie courte duree a Marseille et ses alentours.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
