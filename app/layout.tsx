import type { Metadata } from "next";
import { Bricolage_Grotesque, EB_Garamond, Outfit } from "next/font/google";
import CustomCursor from "./Components/CustomCursor";
import SmoothScroll from "./Components/SmoothScroll";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});
const outfit = Outfit({
  variable: "--font-outfit-src",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Maheen Ilyas — Software Engineer & AI Researcher",
  description:
    "Portfolio of Maheen Ilyas — Software Engineer specialising in AI, full-stack development, and deep learning. Based in Telangana, India.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} ${garamond.variable} ${outfit.variable} antialiased`}
      >
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
