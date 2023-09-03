import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk, Silkscreen } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans-primary",
  weight: ["300", "400", "700"],
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
      <body className={[spaceGrotesk.variable, silkscreen.variable].join(" ")}>
        {children}
      </body>
    </html>
  );
}
