'use client'
import CryptoAll from '@/app/Components/Crypto/CryptoAll'
import Diagram from '@/app/Components/Diagram/page'
import Footer from '@/app/Components/H.F/Footer'
import Header from '@/app/Components/H.F/Header'
import UserData from '@/app/Components/UserData/page'
import React from 'react'

const page = () => {
  return (
    <div className='bg-gradient-to-tl from-gray-900 via-orange-900 to-orange-500 relative'>
      <Header />

      <div className='flex w-full h-full justify-around mt-60'>
        <div className='w-1/2 h-auto'>
          <CryptoAll />
        </div>
        <UserData Userprops={{
          id: undefined,
          firstName: '',
          lastName: '',
          dollarAvailables: 0,
          pseudo: '',
          age: '',
          UserHasCrypto: undefined
        }} />
       </div>
      <Footer/>
    </div>
  )
}

export default page
