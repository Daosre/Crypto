'use client'
import { CryptoData } from '@/Utils/types'
import React from 'react'
import { BuyCryptoModal } from './BuyCrypto'

export const Cryptocard = ({ crypto, isBuyvisible }: { crypto: CryptoData, isBuyvisible: boolean }) => {
  return (
    <div className='flex flex-col'>
      <img
        src={crypto.image}
        alt={crypto.name}
        className="w-full h-48 rounded-lg border border-black object-cover"
      />
      <div className='flex flex-col gap-5'>
          <p>{crypto.name}</p>
          <p className="text-sm">Value: {crypto.value.toFixed(2)}</p>
          <p className="text-sm">Quantity on Bank: {crypto.quantity}</p>
        <BuyCryptoModal crypto={crypto} isBuyvisible={isBuyvisible} />
     </div>
    </div>
  )
}
