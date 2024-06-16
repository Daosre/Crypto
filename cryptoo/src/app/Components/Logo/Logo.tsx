import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div>
      <div className='flex justify-center w-42 -my-20 md:w-96 duration-700'>
        <Link href="/Crypto">
          <Image width={300} height={100} src="/CryptoVERSE.png" alt="plopi" className='rounded-full border-2 border-white styleLogo' />
        </Link>
        </div>
    </div>
  )
}

export default Logo
