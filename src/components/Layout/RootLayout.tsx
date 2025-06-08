/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type RootLayoutProps = React.FC<{
  children: React.ReactNode;
}>;

const RootLayout: RootLayoutProps = ({ children }) => {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} bg-zinc-950 w-full h-full min-h-screen p-3 `}
    >
      <main className="container mx-auto">
        <div className="max-w-7xl mx-auto relative flex flex-col items-center h-full">
          {children}
        </div>
      </main>
    </div>
  );
};

export default RootLayout;
