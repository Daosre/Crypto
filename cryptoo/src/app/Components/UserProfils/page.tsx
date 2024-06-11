// 'use client'
// import { UsersAsset } from '@/Services/user'
// import { MyAssetData } from '@/Utils/types'
// import React, { useEffect, useState } from 'react'

// const UserPP = () => {
//     const [myAsset, setMyasset] = useState<MyAssetData[]>([])
//     const [isReloadNeeded, setIsReloadNeeded] = useState(false)
//     console.log(myAsset);

//     useEffect(() => {
//         setIsReloadNeeded(true)
//         UsersAsset().then((res) => {
//           setMyasset(res.data)
//         })
//     }, [isReloadNeeded])
    
//     return (
//         <div className='flex flex-wrap border-2 rounded-lg w-1/3 justify-center p-4 m-8 UserBox'>

//                 <div className='p-2 m-8 w-48 bg-white border-2 border-orange-700 text-black rounded-lg UserBox'>
//                   <p className='tracking-wide'>First Name : {}</p>
//                    {/* <p className='tracking-wide'>Last Name : {myAsset.lastName}</p>
//                   <p className='tracking-wide'>Pseudo : {myAsset.pseudo}</p>
//                   <p>Age: {myAsset.age}</p>
//                   <p className='tracking-wide'>Dollards Account : {myAsset.dollarAvailables}</p> */}
//              </div>
//     </div >
//     )
// }

// export default UserPP

'use client'
import { AllUsersAsset, UsersAsset } from '@/Services/user'
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
    UsersAsset().then((res) => {
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
      <div className='flex flex-wrap border-2 rounded-lg w-1/3 justify-center p-4 m-8 UserBox'>
      {userList &&
        userList.map((user: MyAssetData) => {
            return (
              <div className='p-2 m-8 w-48 bg-white border-2 border-orange-700 text-black rounded-lg UserBox' key={user.id}>
                <p className='tracking-wide'>First Name : {user.firstName}</p>
                 <p className='tracking-wide'>Last Name : {user.lastName}</p>
                <p className='tracking-wide'>Pseudo : {user.pseudo}</p>
                <p>Age: {user.age}</p>
                <p className='tracking-wide'>Dollards Account : {user.dollarAvailables}</p>
              </div>
          )
          })}
      
  </div >
  )
}
 
            

export default UserData