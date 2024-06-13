import { useRouter } from 'next/navigation'
import React from 'react'

const MyAsset = () => {
  const { push } = useRouter()
  return (
    <div>
      <button className='border-2 bg-white border-green-600 text-black hover:bg-green-600 hover:text-white duration-1000 hover:border-black rounded-lg w-20 p-2' onClick={() => {
        push('/userProfils')
          }}>Asset</button>
      </div>
  )
}

export default MyAsset
