'use client'
import { AllUsersAsset } from '@/Services/user'
import { AllUserAssetData, MyAssetData } from '@/Utils/types'
import React, { useEffect, useState } from 'react'


type ModalUser = {
  Userprops: MyAssetData
}
const UserData = ({Userprops}: ModalUser) => {
  

  const [userList, setuserList] = useState<MyAssetData[]>()
  const [isReloadNeeded, setIsReloadNeeded] = useState(false)
  const [assetData, setassetData] = useState<AllUserAssetData[]>()

  
  useEffect(() => {
    setIsReloadNeeded(true)
    AllUsersAsset().then((res) => {
      setuserList(res.data)
    })
  }, [isReloadNeeded])
  useEffect(() => {
    setIsReloadNeeded(true)
    AllUsersAsset().then((res) => {
      setassetData(res.data)
    })
  }, [isReloadNeeded])

  return (
      <div className='p-2 m-6 flex flex-wrap'>
      {userList &&
        userList.map((user: MyAssetData) => {
            return (
              <div className='p-2 border-2 border-white m-8' key={user.id}>
                <p>First Name : {user.firstName}</p>
                 <p>Last Name : {user.lastName}</p>
                 <p>Pseudo : {user.pseudo}</p>
                <p>Dollards Account : {user.dollarAvailables}</p>
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
              </div>
          )
          })}
      
  </div >
  )
}
 
            

export default UserData