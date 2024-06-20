'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import '../../Components/style.css'


const page = () => {
  const { push }= useRouter()
  return (
    <div className=''>
      <div className='flex flex-col gap-10 items-center relative p-2 h-screen AboutUs'>
        <h1 className='text-center text-4xl m-2 mt-10 bg-gradient-to-r from-orange-600 to-amber-400 bg-clip-text text-transparent'>About Us</h1>
        <ol className='p-4 border-white border flex flex-col gap-10 text-center w-1/2 items-center rounded-lg list'>
          <p className='bg-gradient-to-r from-orange-600 to-amber-400 bg-clip-text text-transparent'>
          I'm an independent developer ready to take on any challenge that comes my way during my career. Feel free to visit my website or contact me personally at the following address:
          </p>
          <li className='bg-gradient-to-r from-orange-600 to-amber-400 bg-clip-text text-transparent'>Mail : plopi@gmail.com</li>
          <li className='bg-gradient-to-r from-orange-600 to-amber-400 bg-clip-text text-transparent'>Number : 0823742834</li>
          <button onClick={() => {
            push('/Crypto') 
          }} className='bg-white text-black rounded-lg p-2 w-1/4 hover:bg-orange-600 hover:text-white duration-1000'>Back to Home Page</button>
        </ol>
        <p className='absolute right-10 bottom-10'>For my father... A</p>
      </div>
    </div>
  )
}

export default page
