import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sondertilgung oder Festgeld?",
  description: "Sondertilgung oder Festgeld?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        {children}
      </body>
    </html>
  );
}
