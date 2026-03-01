import type { Metadata } from "next";
import { Crimson_Text } from "next/font/google";
import "./globals.css";

const crimsonText = Crimson_Text({
  variable: "--font-crimson-text",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Maheen Ilyas",
  description: "Portfolio",
};

import CustomCursor from "./Components/CustomCursor";
import SmoothScroll from "./Components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${crimsonText.variable} antialiased`}
      >
        <SmoothScroll>
          <CustomCursor />
          {/* Subtle Film Grain Overlay */}
          <div className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.03] mix-blend-overlay noise-bg"></div>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
