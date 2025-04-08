import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "VAT: Dual Pricing PRO",
  description: "Shopify app for display VAT prices on store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body className={`${poppins.variable} antialiased`}>
      {children}
      </body>
    </html>
  );
}
