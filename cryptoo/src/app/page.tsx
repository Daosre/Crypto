'use client'

import Link from "next/link"
import Accueil from "./Components/Accueil/Accueil"
import HeaderAccueil from "./Components/H.F/HeaderAccueil"

const Home = () => {
  
  return (
    <main className="relative h-screen w-full flex flex-col items-center text-center bg-gradient-to-tl from-gray-900 via-orange-900 to-orange-500">
      <HeaderAccueil />
      <div className="flex flex-col items-center mt-40 ">
          <Accueil />
      </div>
      <p className="w-1/2 p-4 m-4 textinformation">Hello future millionaire this is a site reserved for the purchase and resale of Cryptocurrency (not real), if you are not registered I advise you to go through <Link href="/signup" className="hover:text-orange-600 duration-700">here</Link> if you are already familiar with our services come <Link href="/login" className="hover:text-orange-600 duration-700">here</Link></p>
      <h2 className="mt-20 p-2 w-1/2 sorry" data-hover='Sorry for the age ❤️ No i dont care 🖕'>Hover Here</h2>
    </main>
  )
}

export default Home