"use client";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import Header from "./components/Header";

export default function Home() {
  return (
    <TonConnectUIProvider
      manifestUrl={
        "https://raw.githubusercontent.com/strapko-dev/ton-connect-test/refs/heads/main/tonconnect-manifest.json"
      }
    >
      <div className="w-[100%] h-[100vh] flex justify-center items-center">
        <Header />
      </div>
    </TonConnectUIProvider>
  );
}
