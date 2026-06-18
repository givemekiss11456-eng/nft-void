'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function WalletButton() {
  return (
    <ConnectButton
      label="Connect Wallet"
      accountStatus="avatar"
      chainStatus="none"
      showBalance={false}
    />
  )
}