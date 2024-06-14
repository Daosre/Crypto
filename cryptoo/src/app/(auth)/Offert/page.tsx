'use client'

import { OffertAll } from '@/Services/offer'
import { OffertsData } from '@/Utils/types'
import { Offert } from '@/app/Components/Offert/Offert'
import '../../Components/style.css'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Link from 'next/link'
import Header from '@/app/Components/H.F/Header'
import Footer from '@/app/Components/H.F/Footer'

const page = () => {
  const [offersList, setOffersList] = useState<OffertsData[]>()
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    OffertAll()
      .then((res) => {
        setOffersList(res.data)
      setisLoading(false)
  })
      .catch((e) => {
        toast.error(e)
      })
  }, [isLoading])

    return (
      <div className='flex h-full flex-col bg-gradient-to-tl from-gray-900 via-orange-900 to-orange-500 relative'>
        <Header />
        <div className=' mt-60 mb-60'>
          <h1 className='text-3xl text-center TitleOffert'>
            Offert
        </h1>
    <div className="w-full m-4 p-2 flex flex-wrap justify-center">
      {offersList &&
        offersList?.map((offer) => {
          return (
            <div
              key={offer.id}
              className="border-2 m-8 rounded-md mt-1 w-96 p-2  bg-gradient-to-b from-amber-500 to-amber-200 border-black text-black "
            >
              <Offert offer={offer} setisReload={function (value: React.SetStateAction<boolean>): void {
                throw new Error('Function not implemented.')
              } } />
            </div>
          )
        })}
        </div>
        </div>
        <Footer />
        </div>
  )
}

export default page
