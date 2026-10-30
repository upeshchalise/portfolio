import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { SidebarWorkspace } from "@/components/SidebarWorkspace";
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
      <body className="font-mono antialiased bg-[#24262B] min-h-screen overflow-x-hidden">
        <div className="flex min-h-screen flex-col">

        <Header />

        <div className="flex flex-1 flex-col sm:flex-row">
          <SidebarWorkspace />

          <main className="min-w-0 flex-1">
            <div className="flex min-w-0 flex-col gap-4 text-white sm:flex-row">
              <div className="flex min-w-0 flex-1 flex-col overflow-hidden bg-[#1e1e1e]">
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
