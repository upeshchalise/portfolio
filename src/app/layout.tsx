import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { SideNav } from "@/components/Sidenav";
import { Explorer } from "@/components/Explorer";
import { Navbar } from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react"
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Upesh Chalise",
  description: "Upesh Chalise - full stack developer",
  keywords:[
    'upesh chalise',
    'Upesh Chalise',
    'upeshchalise',
    'Upeshchalise - full stack developer',
    'full-stack',
    'nodejs',
    'reactjs',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Upesh Chalise" />
      <meta name="copyright" content="Upesh Chalise" />
      <meta
            name="description"
            content={
              "Upesh Chalise is a 2+ Years Experienced Full Stack Developer. He is a professional developer from Nepal who loves to play around with web apps."
            }
          />
          <meta property="og:title" content="Upesh Chalise - Full Stack Developer" />
          <meta
            property="og:description"
            content={
              "Upesh Chalise is a 2+ Years Experienced Full Stack Developer. He is a professional developer from Nepal who loves to play around with web apps."
            }
          />
      <meta
            property="twitter:title"
            content="Upesh Chalise - Full Stack Developer"
          />
          <meta
            property="twitter:description"
            content={
              "Upesh Chalise is a 2+ Years Experienced Full Stack Developer. He is a professional developer from Nepal who loves to play around with web apps."
            }
          />
      </head>
      <body
        className={`font-mono antialiased bg-[#24262B] h-screen`}
      >
        <div className="flex min-h-screen flex-col">

        <Header />

        <div className="flex gap-3 flex-1 ">
          <SideNav />

          <main className="flex-1">
            <div className="text-white flex gap-4">
              <Explorer />
              <div className="bg-[#181A1F] flex-1 rounded-md p-2 flex flex-col gap-3">
                <Navbar />
                {children}
                <Analytics />
              </div>
            </div>
          </main>
        </div>
        </div>
      </body>
    </html>
  );
}
