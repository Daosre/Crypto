'use client'
import { AllPromoCode, DeletePromoCode } from '@/Services/promosCode'
import { PromoCodeData } from '@/Utils/types'
import React, { useEffect, useState } from 'react'
import '../../Components/style.css'


const AllPromoCodee = () => {
  const [allpromocode, setallpromocode] = useState<PromoCodeData[]>()
  const [isloading, setisloading] = useState(false)

    useEffect(() => {
        AllPromoCode().then((res) => {
            setallpromocode(res.data)
        })
    }, [isloading])

    return (
        <div className='text-center flex flex-col items-center '>
            <h1 className='text-3xl mb-40 styleLogIn'>All PromoCode</h1>
      <div className='flex justify-center gap-10 flex-wrap'>
          {allpromocode && allpromocode.map((user) => {
              return (
                <div className='text-white border flex flex-col m-2 rounded-lg p-10' key={user.id}>
                    <p>Name : {user.name}</p>
                    <p>Value : {user.value}</p>
                        <div className='flex m-2 justify-center gap-3'>
                          <button className='border p-2 bg-white rounded-lg text-black hover:bg-green-500 hover:text-white duration-700' onClick={() => {
                        }}>Update</button>
                    <button className='border p-2 bg-white rounded-lg text-black hover:bg-red-600 hover:text-white duration-700' onClick={() => { 
                      DeletePromoCode(user.id)  
                      setisloading(true)
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
