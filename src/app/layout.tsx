import type { Metadata } from "next";
import { Oxanium, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; 
import SmoothScroll from "@/components/SmoothScroll";

const gamingFont = Oxanium({
  variable: "--font-gaming",
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CORE_AGENCY // TACTICAL",
  description: "Bespoke Digital Systems",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`
          ${gamingFont.variable} 
          ${monoFont.variable} 
          antialiased 
          bg-main-bg 
          text-main-text 
          flex 
          flex-col 
          min-h-screen 
          transition-colors 
          duration-500
        `}
      >
        {/* Lenis Smooth Scroll Wrapper */}
        <SmoothScroll>
          {/* Navigation Layer */}
          <Header />

          {/* Dynamic Content Layer */}
          <main className="flex-grow pt-20"> 
            {/* pt-20 accounts for the taller fixed header height */}
            {children}
          </main>

          {/* Transmission End Layer */}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}