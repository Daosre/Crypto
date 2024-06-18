'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { MdOutlineLocalOffer } from "react-icons/md";


const Usertrade = () => {
  const { push } = useRouter()
  return (
    <div>
      <MdOutlineLocalOffer size={50} className='hover:bg-black p-2 rounded-lg cursor-pointer duration-700'
        onClick={() => {
          push('/Offert')
      }}></MdOutlineLocalOffer>
    </div>
  )
}

export default Usertrade
