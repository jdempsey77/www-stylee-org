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
  title: "Jerry Dempsey - Cybersecurity Professional",
  description: "Cybersecurity expert specializing in software security, application security, and cloud security. Professional blog and portfolio.",
  keywords: ["cybersecurity", "software security", "application security", "cloud security", "Jerry Dempsey"],
  authors: [{ name: "Jerry Dempsey" }],
  openGraph: {
    title: "Jerry Dempsey - Cybersecurity Professional",
    description: "Cybersecurity expert specializing in software security, application security, and cloud security.",
    type: "website",
    url: "https://www.stylee.org",
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
