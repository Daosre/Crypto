'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const PromoAll = () => {
  const { push } = useRouter()
  const Role = window.localStorage.getItem('role')
  return (
    <div className=''>
      {Role === 'admin' && (
        <button className='border-2 bg-white border-orange-600 p-2 rounded-lg text-black hover:text-black hover:bg-orange-600 hover:border-black hover:text-white duration-1000'
        onClick={() => {
        push('/AllPromoCode')
        }}>All PromoCode</button>
      )}
    </div>
  )
}

export default PromoAll
