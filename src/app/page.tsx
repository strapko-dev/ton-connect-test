"use client";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import Header from "./components/Header";

export default function Home() {
  return (
    <TonConnectUIProvider
      manifestUrl={
        "https://strapko-dev.github.io/ton-connect-test/tonconnect-manifest.json"
      }
    >
      <div>
        <Header />
      </div>
    </TonConnectUIProvider>
  );
}
