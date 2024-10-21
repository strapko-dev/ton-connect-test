import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react";

const Header = () => {
  const wallet = useTonWallet();
  console.log(wallet);
  return (
    <header>
      <TonConnectButton />
      <div>Wallet: {wallet?.account.address}</div>
    </header>
  );
};

export default Header;
