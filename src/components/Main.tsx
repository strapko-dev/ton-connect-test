import { useTonAddress } from "@tonconnect/ui-react";
import Link from "next/link";

const Main = () => {
  const address = useTonAddress();

  return (
    <main className="flex flex-col gap-4">
      {address && (
        <>
          <p>
            <strong>Address:</strong> {address}
          </p>
          <Link
            href={"/transfer"}
            className="bg-blue-300 px-4 py-2 rounded-md text-center"
          >
            Transfer
          </Link>
        </>
      )}
    </main>
  );
};

export default Main;
