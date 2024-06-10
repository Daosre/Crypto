'use client'
import { MyAssetData } from '@/Utils/types'
import React from 'react'

const UserData = ({ data }: {data: MyAssetData}) => {
  return (
      <div className='border-2 border-red-600 p-2 m-6'>
          <p>First Name : {data.firstName}</p>
          <p>Last Name : {data.lastName}</p>
          <p>Pseudo : {data.pseudo}</p>
          <p>Dollards Account : {data.dollarAvailables}</p>
            {/* {faire un map ici} */}
          {/* <p>Crypto : {data.UserHasCryptoData[1].Crypto.name}</p> */}
    </div>
  )
}

export default UserData
