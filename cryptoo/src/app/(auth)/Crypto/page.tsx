'use client'
import CryptoAll from '@/app/Components/Crypto/CryptoAll'
import Footer from '@/app/Components/H.F/Footer'
import Header from '@/app/Components/H.F/Header'
import UserData from '@/app/Components/UserData/page'
import { useState } from 'react'

const page = () => {
  const [isLoading, setisLoading] = useState(false)
const Role = window.localStorage.getItem('role')
  return (
    <div className='bg-gradient-to-tl from-gray-900 via-orange-900 to-orange-500 relative'>
      <Header />
      <div className='flex w-full h-full justify-around mt-60'>
        {/* {Research} */}
        <div className='w-1/2 h-auto'>
          <CryptoAll isLoading={isLoading} setisLoading={setisLoading} />
        </div>
        {Role === 'admin' && (
          <UserData setisLoading={setisLoading} isLoading={isLoading} />
        )}
       </div>
      <Footer/>
    </div>
  )
}

export default page
