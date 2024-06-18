'use'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Zoom, toast } from 'react-toastify';
import { IoLogOutOutline } from 'react-icons/io5';


const LogOut = () => {
  const { push } = useRouter()
  function Logout() {
    toast.info('Disconnected',
      {
        autoClose: 1000,
        theme: "dark",
        transition: Zoom
      }
    )
    setTimeout(() => {
      window.localStorage.clear()
      push('/')      
    }, 1500);
  }
  return (
    <div>
      <IoLogOutOutline className='cursor-pointer hover:bg-red-700 duration-700 rounded-lg p-2' size={50} color='white' onClick={() => {
        Logout()
      }} />
    </div>
  )
}

export default LogOut
