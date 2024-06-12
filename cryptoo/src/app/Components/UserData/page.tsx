'use client'
import { AllUsersAsset } from '@/Services/user'
import { AllUserAssetData, MyAssetData } from '@/Utils/types'
import React, { useEffect, useState } from 'react'
import '../../Components/style.css'

type ModalUser = {
  Userprops: MyAssetData
}
const UserData = ({ Userprops }: ModalUser) => {
  
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
    <div className='flex flex-wrap border-2 rounded-lg w-1/4 justify-center p-4 mx-6 UserBox'>
        <h1 className='rounded-lg text-black text-2xl w-full text-center p-2 title'> Most Rich People  </h1>
      {userList &&
        userList.map((user: MyAssetData) => {
          return (
            <div className='p-4 m-8 w-48 text-white rounded-lg UserBox' key={user.id}>
              <p className='tracking-wide'>Pseudo : {user.pseudo}</p>
              <p className='tracking-wide'>Dollards Account : {user.dollarAvailables}</p>
              {/* <Amount/> */}
            </div>
            )
      }
        )
      }
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