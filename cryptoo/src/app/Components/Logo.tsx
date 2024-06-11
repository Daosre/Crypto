import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div>
      <div className='flex justify-center w-42 m-4 md:w-96 duration-700'>
        <Link href="/">
          <img src="CryptoVERSE.png" alt="plopi" className='rounded-full w-80  border-2 border-orange-600 styleLogo' />
        </Link>
        </div>
    </div>
  )
}

export default Logo
