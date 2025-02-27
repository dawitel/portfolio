import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/hooks/providers/Theme-Provider";
import Lines from "@/components/lines";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/stickycta";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trivium Studios Ltd.",
  description:
    "A software development company specializing in crafting cutting-edge AI and Web3 solutions that redefine industries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/dawit-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav navItems={navItems} />

          <Lines />
          <StickyCTA />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
