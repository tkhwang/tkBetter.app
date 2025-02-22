import "./globals.css";

import type React from "react";
import { Space_Grotesk } from "next/font/google";
import Navbar from "./components/Navbar";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "TK Better - Coming Soon",
  description: "Building better apps and services, one step at a time.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
