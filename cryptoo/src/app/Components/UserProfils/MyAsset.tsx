import { UsersAsset } from '@/Services/user'
import { MyAssetData } from '@/Utils/types'
import React, { useEffect, useState } from 'react'
import '../../Components/style.css'
import MyCrypto from './MyCrypto'
import MyAsset from '../Button/MyAsset'


const UserProfils = () => {
    const [myAsset, setMyAsset] = useState<MyAssetData>()

    useEffect(() => {
        UsersAsset().then((res) => {
            setMyAsset(res)
        })
    }, [])
    console.log(MyAsset);
    

  return (
      <div className='flex w-full h-screen items-center place-content-center gap-10 relative'>
      <h1 className='mt-10 underline underline-offset-8 absolute top-1/4 text-3xl Myaccount'>My Account : </h1>

          <div className='mt-60 border p-2 w-1/4 h-2/4 text-center flex items-center justify-center rounded-lg gap-20 textUser'>
        <div className='flex flex-col gap-10'>
                <p>First Name : {myAsset?.firstName}</p>
                <p>Last Name : {myAsset?.lastName}</p>
                <p>Age : {myAsset?.age}</p>
                <p>Pseudo : {myAsset?.pseudo}</p>
                <p>Dollards on account : {myAsset?.dollarAvailables.toFixed(2)} $</p>
          </div>
      </div>
      <div className='border mt-60 w-2/4 h-2/4 text-center flex items-center justify-center rounded-lg textUser'>
        <MyCrypto/>
      </div>
      </div>
      
  )
}

export default UserProfils
