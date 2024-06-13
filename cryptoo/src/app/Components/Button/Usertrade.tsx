'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const Usertrade = () => {
  const { push } = useRouter()
  return (
    <div>
      <button className='border-2  bg-white border-red-600 p-2 rounded-lg text-black hover:text-white hover:bg-red-600 hover:border-black duration-1000 w-20'
        onClick={() => {
          push('/Offert')
      }}>Offer</button>
    </div>
  )
}

export default Usertrade
