'use client'
import { AllCrypto } from '@/Services/crypto'
import { CryptoData } from '@/Utils/types'
import React, { useEffect, useState } from 'react'
import { Cryptocard } from './CryptoCard'

const CryptoAll = () => {
  const [cryptoAll, setcryptoAll] = useState<CryptoData[]>()
  
  useEffect(() => {
    AllCrypto().then((res) => {
      setcryptoAll(res.data)
      console.log(res.data);
    })
},[])


  return (
    <div className='flex justify-center w-full'>
    <div className='border p-2 w-full  place-content-center'>
      {cryptoAll &&
        cryptoAll.map((cryptod) => {
          return (
            <div key={cryptod.id} className='w-1/2 m-4 flex flex-col border border-red-600'>
              <Cryptocard crypto={cryptod} isBuyvisible={true} />
            </div>
        )
      })}
      </div>
      </div>
  )
}

export default CryptoAll
