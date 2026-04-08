import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const title = "Flowon — Recover Lost Clinic Revenue";
const description =
  "Flowon helps clinics recover missed revenue by bringing patients back for follow-ups and filling cancelled appointments automatically with SMS.";

const getMetadataBase = () => {
  const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!rawSiteUrl) {
    return new URL("http://localhost:3000");
  }

  const normalizedSiteUrl = /^https?:\/\//i.test(rawSiteUrl) ? rawSiteUrl : `https://${rawSiteUrl}`;

  try {
    return new URL(normalizedSiteUrl);
  } catch {
    return new URL("http://localhost:3000");
  }
};

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title,
  description,
  manifest: "/site.webmanifest",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.svg"],
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/",
    siteName: "Flowon",
    images: [
      {
        url: "/og/flowon-og.svg",
        width: 1200,
        height: 630,
        alt: "Flowon - Recover lost clinic revenue",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og/flowon-og.svg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0F172A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
