import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Wahyu Anggana — Portfolio",
  description: "Portfolio Muhammad Wahyu Anggana — Web Developer, IT & Digital Operations.",
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="id"><body>{children}</body></html>;
}
