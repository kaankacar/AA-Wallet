"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full px-6 py-2 flex justify-between items-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="gap-4 flex">
        <Link href="/" className="text-white hover:text-yellow-300 transition duration-300 ease-in-out">
          Home
        </Link>

        <Link href="/create-wallet" className="text-white hover:text-yellow-300 transition duration-300 ease-in-out">
          Create New Wallet
        </Link>
      </div>

      <ConnectButton />
    </div>
  );
}
