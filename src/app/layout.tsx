import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/lib/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Danielle Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white scroll-smooth`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
