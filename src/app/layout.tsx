import type { Metadata } from "next";
import { Inter, UnifrakturMaguntia } from "next/font/google";
import "./globals.css";
import { Atmosphere } from "@/components/Atmosphere";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const horrorFont = UnifrakturMaguntia({
  variable: "--font-horror",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paranormal Vault | Investigation & Research",
  description: "The official database of the unexplained. Explore haunted locations, paranormal evidence, and witness stories.",
  keywords: ["paranormal", "ghosts", "investigation", "haunted", "supernatural"],
  authors: [{ name: "Paranormal Vault Team" }],
  openGraph: {
    title: "Paranormal Vault | Investigation & Research",
    description: "The official database of the unexplained.",
    type: "website",
    url: "https://paranormalvault.org",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${horrorFont.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Atmosphere />
        <main className="relative z-10 flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
