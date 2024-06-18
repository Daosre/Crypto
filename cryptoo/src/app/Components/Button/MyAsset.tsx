import { useRouter } from 'next/navigation'
import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'

const MyAsset = () => {
  const { push } = useRouter()
  return (
    <div>
      <AiOutlineUser size={50} className='p-2 cursor-pointer hover:bg-black duration-700 rounded-lg' onClick={() => {
        push('/userProfils')
          }}></AiOutlineUser>
      </div>
  )
}

export default MyAsset
