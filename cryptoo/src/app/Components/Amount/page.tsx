'use client'
import { AllUsersAsset } from '@/Services/user'
import { AllUserAssetData } from '@/Utils/types'
import React, { useEffect, useState } from 'react'

const Amount = () => {
    const [cryptoList, setCryptolist] = useState<AllUserAssetData[]>()

    useEffect(() => {
-        AllUsersAsset().then((res) => {
          setCryptolist(res.data)
        })
      }, [])
  return (
    <div>
      {cryptoList &&
              cryptoList?.map(({ Crypto, amount }: AllUserAssetData) => {
            console.log(amount);
              return (
                <div className='p-2 m-8 w-48 bg-white border-2 border-orange-700 text-black rounded-lg UserBox'>
                  <p className='tracking-wide'>Amount :{amount} </p>
                </div>
              )
            }
            )
          }
    </div>
  )
}

export default Amount
