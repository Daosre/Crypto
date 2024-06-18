'use client'
import { CryptoData } from '@/Utils/types'
import React from 'react'
import { BuyCryptoModal } from './BuyCrypto'
import Image from 'next/image'

export const Cryptocard2 = ({ crypto, isBuyvisible, setisLoading }: { crypto: CryptoData, isBuyvisible: boolean, setisLoading: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <div className='border-2 border-black flex flex-col rounded-lg'>
      <Image
        width={300}
        height={100}
        src={crypto.image}
        alt={crypto.name}
        className="w-full h-48 object-cover rounded-l-lg"
      />
      <div className='flex flex-col p-2 gap-2 w-full items-center justify-center'>
          <p>{crypto.name}</p>
          <p className="text-sm">Value: {crypto.value.toFixed(2)}</p>
          <p className="text-sm">Quantity on Bank: {crypto.quantity}</p>
        <BuyCryptoModal crypto={crypto} isBuyvisible={isBuyvisible} setisLoading={setisLoading} />
     </div>
    </div>
  )
}
