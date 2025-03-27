import { Lato } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: ['400', '700', '900'],
  subsets: ["latin"],
  variable: "--font-lato",
});

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-inter",
});
export const metadata = {
  title: "VAT: Dual Pricing PRO",
  description: "Shopify app for display VAT prices on store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${inter.variable} antialiased`}>
      {children}
      </body>
    </html>
  );
}
