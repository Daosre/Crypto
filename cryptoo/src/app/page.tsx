'use client'

import { MyAssetData } from "@/Utils/types"
import Containeruser from "./Components/Containeruser/page"
import UserData from "./Components/UserData/page"
import { useEffect, useState } from "react"
import { AllUsersAsset } from "@/Services/user"

const Home = () => {

  return (
    <main className="w-full h-screen border-2 border-purple-600 relative">
      <Containeruser>
        <UserData />
      </Containeruser>       
    </main>
  )
}
export default Home