import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Footer } from "@/components";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Find out everything about best cars in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="relative" suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
