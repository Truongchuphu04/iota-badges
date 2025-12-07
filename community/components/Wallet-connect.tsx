"use client"

import { ConnectButton } from "@iota/dapp-kit"

export function WalletConnect() {
  return (
    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 z-50">
      <ConnectButton />
    </div>
  )
}

