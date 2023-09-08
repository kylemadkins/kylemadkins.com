import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Silkscreen } from "next/font/google";

import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-sans-primary",
  weight: ["200", "300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const silkscreen = Silkscreen({
  variable: "--font-pixel",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kyle Adkins",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={[
          plexMono.variable,
          plexSans.variable,
          silkscreen.variable,
        ].join(" ")}
      >
        <Cursor />
        <div className="flex min-h-screen flex-col">
          <Nav />
          <div className="px-10 pb-10">
            <div className="border-[1px] border-borderColor">
              <main>{children}</main>
            </div>
            <p className="mt-8 flex items-center justify-center text-center">
              &copy; {new Date().getFullYear()} Made by Kyle
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
