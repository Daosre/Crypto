'use client'
import CryptoAll from '@/app/Components/Crypto/CryptoAll'
import Footer from '@/app/Components/H.F/Footer'
import Header from '@/app/Components/H.F/Header'
import React from 'react'

const page = () => {
  return (
    <div className='bg-gradient-to-tl from-gray-900 via-orange-900 to-orange-500 relative'>
      <Header />
      <div className='border flex h-1/2 place-content-center'>
        <CryptoAll />
       </div>
      <Footer/>
    </div>
  )
}

export default page
