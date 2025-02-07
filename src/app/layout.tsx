import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { SideNav } from "@/components/Sidenav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Upesh Chalise",
  description: "Upesh chalise - full stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-mono antialiased bg-[#24262B] flex flex-col h-screen`}
      >
        <Header />

        <div className="flex h-full gap-3">
          <SideNav />

          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
