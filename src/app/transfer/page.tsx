"use client";
import { SendTransactionRequest, useTonConnectUI } from "@tonconnect/ui-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [address, setAddress] = useState("");
  const [count, setCount] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [tonConnectUI] = useTonConnectUI();

  const transaction: SendTransactionRequest = {
    validUntil: Date.now() + 5 * 60 * 1000,
    messages: [
      {
        address: address,
        amount: count,
      },
    ],
  };

  useEffect(() => {
    tonConnectUI.onStatusChange((wallet) => {
      if (wallet && wallet.connectItems?.tonProof) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      }
    });
  }, [tonConnectUI]);

  return (
    <div className="flex gap-2 flex-col relative">
      <input
        placeholder="Enter address"
        className="p-2 border-2 border-gray-700 rounded-md"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        placeholder="Enter TON"
        className="p-2 border-2 border-gray-700 rounded-md"
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button
        onClick={() => {
          if (address && count) tonConnectUI.sendTransaction(transaction);
        }}
        className="bg-blue-300 px-4 py-2 rounded-md text-center"
      >
        Transfer
      </button>
      <Link href={"/"} className="bg-blue-300 px-4 py-2 rounded-md text-center">
        Back
      </Link>
      {isSuccess && (
        <div className="absolute top-[-60px] bg-green-300 p-3 w-full text-center rounded-md">
          Успешно!
        </div>
      )}
    </div>
  );
};

export default Page;
