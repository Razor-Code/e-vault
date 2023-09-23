'use client';

import Image from 'next/image'
import WalletContextProvider from '../components/WalletContextProvider'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { Navbar } from "../components/Navbar"

export default function Home() {
  return (
    <div>
       <WalletContextProvider>
            {/* Add your desired child components here */}
            <Navbar />
        </WalletContextProvider>
    </div>
  )
}
