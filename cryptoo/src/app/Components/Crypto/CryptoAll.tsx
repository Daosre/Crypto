'use client'
import { AllCrypto } from '@/Services/crypto'
import { CryptoData } from '@/Utils/types'
import React, { useEffect, useState } from 'react'
import { Cryptocard } from './CryptoCard'
import CreateCrypto from '../Button/CreateCrypto'

//Pour le setisLoading ce props doit être utiliser
const CryptoAll = ({ isLoading, setisLoading }: {isLoading: boolean, setisLoading: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const [cryptoAll, setcryptoAll] = useState<CryptoData[]>()
  
  useEffect(() => {
    setisLoading(false)
    AllCrypto().then((res) => {
      setcryptoAll(res.data)
    })
},[isLoading])

  return (
    <div className='w-full text-center'>
      <CreateCrypto/>
    <div className='w-full p-2 flex flex-col justify-center items-center'>
      {cryptoAll &&
        cryptoAll.map((cryptod) => {
          return (
            <div key={cryptod.id} className='w-full m-4 text-center bg-white rounded-lg text-black'>
              <Cryptocard crypto={cryptod} isBuyvisible={true} setisLoading={setisLoading} />
            </div>
        )
      })}
      </div>
      </div>
  )
}

export default CryptoAll
