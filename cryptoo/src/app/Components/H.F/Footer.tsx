import React from 'react'
import '../../Components/style.css'


const Footer = () => {
  return (
    <div className='border-2 border-orange-600 p-4 w-full rounded-t-full styleFooter text-lg absolute bottom-0'>
      <div className=''>
        <ol className='flex justify-around items-center styleInsideFooter'>
            <li className='cursor-pointer hover:text-orange-600 duration-700'>About Us</li>
            <li className='cursor-pointer hover:text-orange-600 duration-700'>© Copyright</li>
      <div>
            <li className='flex items-center gap-4'>Compagny development website :
              <img src="Daorse.png" alt="Company logo" className='rounded-full w-24 border-2 border-white cursor-pointer duration-700 CompagnyLogo' />
            </li>
          </div>
        </ol>
      </div>
    </div>
  )
}

export default Footer
