import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import CustomCursor from "./Components/CustomCursor";
import SmoothScroll from "./Components/SmoothScroll";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Maheen Ilyas — Software Engineer & AI Researcher",
  description:
    "Portfolio of Maheen Ilyas — Software Engineer specialising in AI, full-stack development, and deep learning. Based in Telangana, India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <SmoothScroll>
          <CustomCursor />
          {/* Newsprint grain overlay */}
          <div className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.04] mix-blend-multiply noise-bg" />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
