'use client'
import AllPromoCodee from '@/app/Components/AllPromoCode/AllPromoCode'
import Footer from '@/app/Components/H.F/Footer'
import Header from '@/app/Components/H.F/Header'
import React from 'react'

const page = () => {
  return (
      <div className='h-full relative bg-gradient-to-tl from-gray-900 via-orange-900 to-orange-500'>
          <div>
              <Header />
          </div>
          <div className='mt-40 h-screen'>
              <AllPromoCodee />
          </div>
        <Footer/>
    </div>
  )
}

export default page
