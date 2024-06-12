import { UsersAsset } from '@/Services/user'
import { AllUserAssetData, MyAssetData } from '@/Utils/types'
import React, { useEffect, useState } from 'react'

const MyCrypto = () => {
    const [cryptoAsset, setCryptoAsset] = useState<MyAssetData>()
    useEffect(() => {
        UsersAsset().then((res) => {
            setCryptoAsset(res)
        })
    }, [])
  return (
      <div>
          {cryptoAsset?.UserHasCrypto?.map((user) => {                  
                  return (
                      <div className='border-2 m-2'>
                          <div className='flex flex-col p-2'>
                              <ol className='gap-10 flex flex-col'>
                                  <li>
                                      {user.Crypto.name} : {user.amount}
                                  </li>
                              </ol>
                          </div>
                          <p>Value: {user.Crypto.value.toFixed(2)}</p>
            </div>
              )
          })} 
    </div>
  )
}

export default MyCrypto
