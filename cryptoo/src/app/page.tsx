'use client'

import Accueil from "./Components/Accueil/Accueil"
import Footer from "./Components/H.F/Footer"
import Header from "./Components/H.F/Header"
import UserData from "./Components/UserData/page"

const Home = () => {
  
  return (
    <main className="relative h-screen w-full">
      <UserData/>
    </main>
  )
}

export default Home