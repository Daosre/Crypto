'use client'
import { AllUsersAsset } from '@/Services/user'
import { AllUserAssetData, MyAssetData } from '@/Utils/types'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import '../../Components/style.css'

const UserData = ({ setisLoading, isLoading }: { setisLoading: Dispatch<SetStateAction<boolean>>, isLoading: boolean}) => {

  const [userList, setuserList] = useState<MyAssetData[]>()

  useEffect(() => {
    setisLoading(false)
    AllUsersAsset().then((res) => {
      setuserList(res.data)
    })
  }, [isLoading])
  
  return (
    <div className='w-1/3'>
      <h1 className='rounded-lg border-2 text-black text-5xl w-full flex items-center justify-center text-center p-6 title'> Most Rich People  </h1>
    <div className='flex flex-wrap border-2 rounded-lg w-full h-96 justify-center overflow-scroll mt-10 UserBox'>
      {userList &&
        userList.map((user: MyAssetData) => {
          return (
            <div className='p-4 m-8 w-48 h-32 text-white rounded-lg bg-gradient-to-t from-amber-500 to-orange-600 UserBox' key={user.id}>
              <p className='tracking-wide'>Pseudo : {user.pseudo}</p>
              <p className='tracking-wide'>Dollards Account : {user.dollarAvailables.toFixed(2)}</p>
              {/* <Amount/> */}
            </div>
            )
      }
        )
      }
      </div>
      </div>
  )
}

 
            

export default UserData




 {/* {assetData &&
        assetData.map((Asset: MyAssetData) => {
          return(
          Asset.UserHasCrypto &&
            Asset.UserHasCrypto.map(({ Crypto }: { Crypto: AllUserAssetData }) => {
              return (
                <div className='border-2 border-orange-600 flex gap-10' key={Crypto.id}>
                  <p>Name Crypto : {Crypto.name}</p>
                  <p>Quantity : {Crypto.quantity}</p>
                  <p>Value : {Crypto.value}$</p>
                  <p>{Crypto.created_at}.</p>
                  <img src={Crypto.image} className='w-10'/>
            </div>
              )
            })
        )})
  } */}