import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAG Technical Services | Quoz, Dubai",
  description:
    "Air-conditioning service, electrical work, plumbing, painting and general maintenance in Quoz, Dubai. Contact Mr Ambrose.",
  applicationName: "MAG Technical Services",
  openGraph: {
    title: "MAG Technical Services | Quoz, Dubai",
    description:
      "Air-conditioning service, electrical work, plumbing, painting and general maintenance in Quoz, Dubai.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
