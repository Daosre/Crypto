'use client'
import Footer from '@/app/Components/H.F/Footer'
import Header from '@/app/Components/H.F/Header'
import UserProfils from '@/app/Components/UserProfils/MyAsset'
import React from 'react'

const userProfils = () => {
  return (
      <div className=' relative bg-gradient-to-tl from-gray-900 via-orange-900 to-orange-500'>
          <Header/>
            <UserProfils />
          <Footer />
    </div>
  )
}

export default userProfils
