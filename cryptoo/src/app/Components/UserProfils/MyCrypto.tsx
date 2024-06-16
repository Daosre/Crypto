import { AllUsersAsset, UsersAsset } from '@/Services/user'
import { MyAssetData } from '@/Utils/types'
import React, { useEffect, useState } from 'react'
import Creationdoffer from '../Button/OffertCreate'
import Image from 'next/image'

const MyCrypto = () => {
    const [cryptoAsset, setCryptoAsset] = useState<MyAssetData>()
    useEffect(() => {
        UsersAsset().then((res) => {
            setCryptoAsset(res)
        })
    }, [])
  return (
      <div className='flex flex-col h-full w-full gap-10 p-2 overflow-scroll'>
          {cryptoAsset?.UserHasCrypto?.map((user) => {                  
                  return (
                      <div className=' w-full p-2 flex items-center rounded-lg cryptoCard'>
                              <Image src={user.Crypto.image} width={300} height={100} alt="" className='object-cover rounded-lg' />
                        <p className='w-1/4 p-2 flex  flex-col justify-center gap-10'>
                                      {user.Crypto.name} : {user.amount}
                     <p className=''>Value: {user.Crypto.value.toFixed(2)}</p>
                          </p>
                          <Creationdoffer crypto={user} />
            </div>
              )
          })} 
    </div>
  )
}

export default MyCrypto
