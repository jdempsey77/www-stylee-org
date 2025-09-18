import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "stylee.org - Jerry Dempsey",
  description: "A place for security insights, personal projects, and professional expertise.",
  keywords: ["cybersecurity", "software security", "Jerry Dempsey", "stylee.org"],
  authors: [{ name: "Jerry Dempsey" }],
  openGraph: {
    title: "stylee.org - Jerry Dempsey",
    description: "A place for security insights, personal projects, and professional expertise.",
    type: "website",
    url: "https://stylee.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
