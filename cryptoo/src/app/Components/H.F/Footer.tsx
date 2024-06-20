'use client'
import React from 'react'
import '../../Components/style.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


const Footer = () => {
  const { push } = useRouter()
  return (
    <div className='border-2 bg-black border-orange-600 border-b-0 mt-10  p-4 w-full rounded-t-full styleFooter text-lg relative bottom-0'>
      <div className=''>
        <ol className='flex justify-around items-center styleInsideFooter'>
          <button className='cursor-pointer hover:text-orange-600 duration-700'
            onClick={() => {
            push('/AboutUs')
          }}>About Us</button>
            <li className='cursor-pointer hover:text-orange-600 duration-700'>© Copyright</li>
      <div>
            <li className='flex items-center gap-4'>Compagny development website :
              <Image width={100} height={100} src="/Daorse.png" alt="Company logo" className='rounded-full border-2 border-white duration-700 CompagnyLogo' />
            </li>
          </div>
        </ol>
      </div>
    </div>
  )
}

export default Footer
