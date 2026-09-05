import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Welc’Home | Nettoyage location courte durée à Marseille",
  description:
    "Service local de nettoyage et remise en ordre pour locations courte durée à Marseille et ses alentours. Préparez votre logement entre deux séjours.",
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
