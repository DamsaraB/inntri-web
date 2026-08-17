import type { Metadata } from "next";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inntrilabs — Logistics ERP with N2N Flow & AI | MUTU",
  description:
    "MUTU is Inntrilabs’ logistics ERP for warehouse, transport, shipping, TIEP, factory, finance, and HR — connected node-to-node (N2N) with AI predictions for demand, ETA risk, and next best actions.",
  keywords:
    "Inntrilabs, MUTU, logistics ERP, N2N flow, AI predictions, warehouse, transport, shipping, TIEP, factory, finance, HR, Sri Lanka",
  authors: [{ name: "Inntrilabs" }],
  creator: "Inntrilabs",
  publisher: "Inntrilabs",
  robots: "index, follow",
  icons: {
    icon: '/logo/logo.png',
    shortcut: '/logo/logo.png',
    apple: '/logo/logo.png',
  },
  openGraph: {
    title: "Inntrilabs — The ERP built for the logistics world",
    description:
      "MUTU logistics ERP with N2N flow and AI predictions across warehouse, transport, shipping, factory, finance, and HR.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body className="bg-white text-gray-900">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
