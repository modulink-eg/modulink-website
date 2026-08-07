import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://modulinkegypt.com"),
  title: "Modulink Solutions | Financial & ERP Consulting",
  description: "Financial consulting, audit, ERP implementation, Odoo solutions, training and support by Modulink Solutions.",
  icons: { icon: "/modulink-logo.jpeg" },
  openGraph: {
    title: "Modulink Solutions",
    description: "Financial & ERP Consulting",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modulink Solutions",
    description: "Financial & ERP Consulting",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar"><body>{children}</body></html>;
}
