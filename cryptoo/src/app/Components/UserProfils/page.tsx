import { UsersAsset } from '@/Services/user'
import { MyAssetData } from '@/Utils/types'
import React, { useEffect, useState } from 'react'

const UserProfils = () => {
    const [myAsset, setMyAsset] = useState<MyAssetData>()

    useEffect(() => {
        UsersAsset().then((res) => {
            setMyAsset(res.data)
        })
    }, [])
  return (
      <div className='flex flex-col items-center'>
          <div className='border-2 p-2 w-1/2 text-center rounded-lg'>
              <h1 className=''>My Account</h1>
              <p>{myAsset?.firstName}</p>
              <p>{myAsset?.lastName}</p>
              <p>{myAsset?.age}</p>
              <p>{myAsset?.pseudo}</p>
              <p>{myAsset?.dollarAvailables.toFixed(2)} $</p>
          </div>
    </div>
  )
}

export default UserProfils
