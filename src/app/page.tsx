"use client";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import Header from "./components/Header";

export default function Home() {
  return (
    <TonConnectUIProvider
      manifestUrl={require("../../tonconnect-manifest.json")}
    >
      <div>
        <Header />
      </div>
    </TonConnectUIProvider>
  );
}
