'use client'
import { AllPromoCode, DeletePromoCode } from '@/Services/promosCode'
import { PromoCodeData } from '@/Utils/types'
import React, { useEffect, useState } from 'react'
import '../../Components/style.css'


const AllPromoCodee = () => {
  const [allpromocode, setallpromocode] = useState<PromoCodeData[]>()
  const [isReloadNeeded, setIsReloadNeeded] = useState(true)


  useEffect(() => {
      if(isReloadNeeded)
     { AllPromoCode().then((res) => {
        setallpromocode(res.data)
        setIsReloadNeeded(false)
        })}
    }, [isReloadNeeded])
  
  function reload(id: string) {
    DeletePromoCode(id).then((res)=>setIsReloadNeeded(true))
  }

    return (
        <div className='text-center h-full flex flex-col justify-center items-center '>
            <h1 className='text-3xl mb-10  styleLogIn'>All PromoCode</h1>
      <div className='flex justify-center gap-10 flex-wrap overflow-scroll h-96 p-4 rounded-lg w-3/5 cadrePromo'>
          {allpromocode && allpromocode.map((user) => {
              return (
                <div className='border-2 w-1/3 flex gap-5 flex-col m-2 rounded-lg p-10 text-white border-black cadrePromo' key={user.id}>
                    <p>Name : {user.name}</p>
                    <p>Value : {user.value}</p>
                        <div className='flex m-2 justify-center gap-3'>
                    <button className='border p-2 bg-white rounded-lg text-black hover:bg-red-600 hover:text-white duration-700' onClick={() => { 
                        reload(user.id)
                        }}>Delete</button>
                      </div>
                     
        </div>
              )
          })}
          
            </div>
            </div>
  )
}

export default AllPromoCodee
