import { useRouter } from 'next/navigation'
import React from 'react'

const BankTrader = () => {
  const {push} = useRouter()
  return (
    <div className=''>
      <button className='border-2 bg-white border-orange-600 p-2 rounded-lg text-black hover:text-black hover:bg-orange-600 hover:border-black hover:text-white duration-1000 w-20'
        onClick={() => {
        push('/Crypto')
      }}>Bank</button>
    </div>
  )
}

export default BankTrader
