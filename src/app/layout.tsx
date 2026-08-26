import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Instrument_Sans,
  JetBrains_Mono,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const instrumentSans = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://maksym-yaremko-portfolio.vercel.app"),
  title: {
    default: "Maksym Yaremko — Full-Stack Developer",
    template: "%s | Maksym Yaremko",
  },
  description:
    "Portfolio of Maksym Yaremko, a Chicago-based full-stack developer building production-ready web applications with React, Next.js, TypeScript, and Node.js.",
  applicationName: "Maksym Yaremko Portfolio",
  authors: [{ name: "Maksym Yaremko", url: "https://github.com/Jonhson031" }],
  creator: "Maksym Yaremko",
  verification: {
    google: "g3OB2QS3aRfOUaZLSc2pfFBmtd5DcljKKPuTsBKjNn0",
  },
  keywords: [
    "Maksym Yaremko",
    "full-stack developer",
    "software engineer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "Chicago developer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Maksym Yaremko — Full-Stack Developer",
    description:
      "Explore the work, technical stack, and current projects of Chicago-based full-stack developer Maksym Yaremko.",
    siteName: "Maksym Yaremko Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/projects/uaca.jpg",
        alt: "UACA tournament management platform by Maksym Yaremko",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maksym Yaremko — Full-Stack Developer",
    description:
      "Portfolio of Chicago-based full-stack developer Maksym Yaremko.",
    images: ["/projects/uaca.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Analytics />
      <html lang="en">
        <body
          className={`${bricolageGrotesque.variable} ${instrumentSans.variable} ${jetbrainsMono.variable}`}
        >
          {children}
        </body>
      </html>
    </>
  );
}
