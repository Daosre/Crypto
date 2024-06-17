'use client'
import { AllTraderUser } from '@/Services/trade'
import TradeAll from '@/app/Components/Button/TradeAll'
import Footer from '@/app/Components/H.F/Footer'
import Header from '@/app/Components/H.F/Header'
import TradeUser from '@/app/Components/Trade/TradeUser'
import React from 'react'

const AllTrade = () => {
  return (
    <div className='bg-gradient-to-tl from-gray-900 via-orange-900 to-orange-500 relative h-screen'>
          <div>
              <Header />
          </div>
          <div className='flex justify-center h-1/2 mt-40'>
          <div className='flex w-full justify-center overflow-scroll'>
          <div className=''>
              <TradeUser/>
              {/* {trade all } */}
                  </div>
                </div>
             </div>
          <Footer/>
    </div>
  )
}

export default AllTrade
