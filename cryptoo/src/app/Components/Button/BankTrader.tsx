'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { AiFillBank } from "react-icons/ai";


const BankTrader = () => {
  const { push } = useRouter()
  return (
    <div className=''>
      <AiFillBank size={50} className='cursor-pointer hover:bg-black rounded-lg duration-1000 p-2'
        onClick={() => {
        push('/Crypto')
      }}></AiFillBank>
    </div>
  )
}

export default BankTrader
