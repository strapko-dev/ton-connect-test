import { useTonAddress, useTonConnectUI } from "@tonconnect/ui-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [balance, setBalance] = useState(null);
  const [tonConnectUI] = useTonConnectUI();
  const address = useTonAddress(true);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const res = await fetch(
          `https://toncenter.com/api/v2/getAddressBalance?address=${address}`
        );
        const data = await res.json();
        setBalance(data?.result);
      } catch (error) {
        console.error(error);
      }
    };

    if (address) {
      fetchBalance();
    }
  }, [address]);

  return (
    <header className="flex gap-4 mb-4 justify-between">
      <div className="text-2xl">Balance: {balance || 0}</div>
      {!address ? (
        <button
          className="bg-blue-300 p-2 rounded-md"
          onClick={() => tonConnectUI.openSingleWalletModal("tonkeeper")}
        >
          Connect Wallet
        </button>
      ) : (
        <button
          className="bg-blue-300 px-4 py-2 rounded-md"
          onClick={() => tonConnectUI.disconnect()}
        >
          Exit
        </button>
      )}
    </header>
  );
};

export default Header;
