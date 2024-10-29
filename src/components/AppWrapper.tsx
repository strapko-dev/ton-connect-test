"use client";
import React from "react";
import localFont from "next/font/local";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import Header from "./Header";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const AppWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <TonConnectUIProvider
      manifestUrl={
        "https://raw.githubusercontent.com/strapko-dev/ton-connect-test/refs/heads/main/tonconnect-manifest.json"
      }
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[600px] m-auto w-[100%] h-[100vh] p-6`}
      >
        <Header />
        {children}
      </body>
    </TonConnectUIProvider>
  );
};

export default AppWrapper;
