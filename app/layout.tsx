import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "afters — hoitosuhteen jatkuvuus käynnin jälkeen",
  description:
    "afters auttaa fysioterapeutteja pitämään hoitosuhteen elossa käyntien välillä rauhallisilla, inhimillisillä automaattisilla tekstiviesteillä.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fi">
      <body>{children}</body>
    </html>
  );
}
