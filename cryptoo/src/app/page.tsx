'use client'

import { MyAssetData } from "@/Utils/types"
import Containeruser from "./Components/Containeruser/page"
import UserData from "./Components/UserData/page"
import { useEffect, useState } from "react"
import { AllUsersAsset } from "@/Services/user"

type ModalUserProps = {
  data: MyAssetData
}
export default function Home({data}: ModalUserProps) {
  const [userList, setuserList] = useState<MyAssetData[]>()
  console.log('userlist',userList);
  

  useEffect(() => {
    AllUsersAsset().then((res) => {
      setuserList(res.data)
    })
  }, [])


  return (
    <main className="w-full h-screen border-2 border-purple-600 relative">
      <Containeruser>
        {userList &&
          userList.map((user: MyAssetData) => {
            return (
              <div key={new Date().getTime()}>
                <UserData
                  data={user}
                />
                </div>
          )
        })}
      </Containeruser>       
    </main>
  )
}
