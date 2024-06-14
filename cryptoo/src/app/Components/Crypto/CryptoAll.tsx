'use client'
import { AllCrypto } from '@/Services/crypto'
import { CryptoData } from '@/Utils/types'
import React, { useEffect, useState } from 'react'
import { Cryptocard } from './CryptoCard'
import { Cryptocard2 } from './CryptoCard2'

const CryptoAll = () => {
  const [cryptoAll, setcryptoAll] = useState<CryptoData[]>()
  
  useEffect(() => {
    AllCrypto().then((res) => {
      setcryptoAll(res.data)
      console.log(res.data);
    })
},[])

  return (
    <div className='w-full'>
    <div className='w-full p-2 flex flex-col justify-center items-center'>
      {cryptoAll &&
        cryptoAll.map((cryptod) => {
          return (
            <div key={cryptod.id} className='w-full m-4 text-center bg-white rounded-lg text-black'>
              <Cryptocard crypto={cryptod} isBuyvisible={true} />
            </div>
        )
      })}
      </div>
      </div>
  )
}

export default CryptoAll
