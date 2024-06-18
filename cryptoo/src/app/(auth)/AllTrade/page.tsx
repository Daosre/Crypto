'use client'
import { AllTraderUser } from '@/Services/trade'
import TradeAll from '@/app/Components/Button/TradeAll'
import Footer from '@/app/Components/H.F/Footer'
import Header from '@/app/Components/H.F/Header'
import TradeUser from '@/app/Components/Trade/TradeUser'
import React from 'react'

const AllTrade = () => {
  return (
    <div className='bg-gradient-to-tl from-gray-900 via-orange-900 to-orange-500 h-full'>
          <div>
              <Header />
          </div>
          <div className='flex justify-center mt-40 '>
          <div className='flex w-full justify-center h-96  '>
          <div className='w-2/2 overflow-scroll p-4 m-4 border rounded-lg'>
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
