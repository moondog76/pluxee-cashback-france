import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import BottomNav from "@/components/layout/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pluxee Cashback France",
  description: "Gagnez du cashback sur vos achats quotidiens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
