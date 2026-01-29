import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import BottomNav from "@/components/layout/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pluxee Cashback France",
  description: "Earn cashback on your everyday purchases",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
