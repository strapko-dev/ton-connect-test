"use client";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import Header from "./components/Header";

export default function Home() {
  return (
    <TonConnectUIProvider
      manifestUrl={
        "https://ton-connect-test-theta.vercel.app/tonconnect-manifest.json"
      }
    >
      <div>
        <Header />
      </div>
    </TonConnectUIProvider>
  );
}
