import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammad-wahyu-portfolio.vercel.app"),
  title: "Muhammad Wahyu Anggana — Web Developer & Application Support",
  description:
    "Portfolio Muhammad Wahyu Anggana, fresh graduate Informatika dengan pengalaman web development, application support, digital systems, dan network monitoring.",
  openGraph: {
    title: "Muhammad Wahyu Anggana — Portfolio",
    description: "Web Developer & Application Support based in Semarang, Indonesia.",
    url: "/",
    siteName: "Muhammad Wahyu Anggana",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
