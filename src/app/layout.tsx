import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import CookieBanner from "@/components/CookieBanner";
import StructuredData from "@/components/StructuredData";
import { GA_TRACKING_ID } from "@/lib/gtag";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jerry Dempsey - Security in Proof 🥃",
  description: "Started in security when most people thought it was just antivirus and firewall. Now I help companies build security that doesn't suck. Also, bourbon. 🥃",
  keywords: ["Jerry Dempsey", "Product Security", "Application Security", "Cybersecurity", "Security Leader", "FanDuel", "Warner Bros Discovery", "stylee.org", "Bourbon", "Security Blog"],
  authors: [{ name: "Jerry Dempsey" }],
  robots: "index, follow",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: "Jerry Dempsey - Security in Proof 🥃",
    description: "Started in security when most people thought it was just antivirus and firewall. Now I help companies build security that doesn't suck. Also, bourbon. 🥃",
    type: "website",
    url: "https://stylee.org",
    siteName: "Security in Proof - stylee.org",
    images: [
      {
        url: "/mainlogo.png",
        width: 1200,
        height: 630,
        alt: "Jerry Dempsey - Security in Proof",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jerry Dempsey - Security in Proof 🥃",
    description: "Started in security when most people thought it was just antivirus and firewall. Now I help companies build security that doesn't suck. Also, bourbon. 🥃",
    images: ["/mainlogo.png"],
    creator: "@jerryldempsey",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
        {GA_TRACKING_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  // Set default consent state (denied until user accepts)
                  gtag('consent', 'default', {
                    analytics_storage: 'denied',
                    ad_storage: 'denied',
                    wait_for_update: 500,
                  });

                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                    anonymize_ip: true,
                    cookie_flags: 'SameSite=None;Secure',
                    allow_google_signals: false,
                    allow_ad_personalization_signals: false,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <CookieBanner />
      </body>
    </html>
  );
}
