import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div>
      <div className='flex justify-center w-42  md:w-96 duration-700'>
        <Link href="/Crypto">
          <img src="CryptoVERSE.png" alt="plopi" className='rounded-full w-80  border-2 border-white styleLogo' />
        </Link>
        </div>
    </div>
  )
}

export default Logo
