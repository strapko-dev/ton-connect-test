"use client";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import Header from "./components/Header";

export default function Home() {
  return (
    <TonConnectUIProvider
      manifestUrl={
        "https://github.com/strapko-dev/ton-connect-test/blob/main/tonconnect-manifest.json"
      }
    >
      <div>
        <Header />
      </div>
    </TonConnectUIProvider>
  );
}
