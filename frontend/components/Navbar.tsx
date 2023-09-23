import { FC } from 'react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Image from 'next/image'

export const Navbar: FC = () => {
    return (
        <div className="bg-blue-500 flex justify-evenly p-4">
            <div className='flex items-center justify-center'><Image alt="img" src="/logo.png" height={20} width={40} /> <span className='ml-2 text-xl font-bold'>E vault</span></div>
            {/* <span className="text-white">Blockchain based E-Vault</span> */}
            <WalletMultiButton />
        </div>
    )
}