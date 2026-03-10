import type { Metadata } from "next";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inntrilabs - Powering Smart Businesses with Intelligent Software Solutions",
  description: "Inntrilabs delivers enterprise-grade management systems designed for efficiency, growth, and control. WMS Solutions, Custom Software Development, and Enterprise Systems.",
  keywords: "Inntrilabs, software solutions, WMS, warehouse management, fleet management, enterprise systems, custom development, IT solutions, Sri Lanka",
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
    title: "Inntrilabs - Intelligent Software Solutions",
    description: "Powering Smart Businesses with Enterprise-Grade Management Systems",
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
    <html lang="en" className="no-js" suppressHydrationWarning>
      <body>
        {/* When any script runs, remove no-js so animations work; if /_next/* 404s, content stays visible via CSS */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.remove('no-js');document.documentElement.classList.add('js');`,
          }}
        />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
