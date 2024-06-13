import type { Metadata } from "next";

import "./globals.css";
import Link from "next/link";



export const metadata: Metadata = {
  title: "CuviSoft | Cloud Software Suite for Businesses",
  description: "A unique and powerful software suite for businesses of all sizes. With 55+ applications, Cuvisoft caters to 100 million+ users for their end-to-end business needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo/favicon.ico" />
      </head>

      <body >{children}</body>
    </html>
  );
}
