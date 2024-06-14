import { useRouter } from 'next/navigation'
import React from 'react'
import { Zoom, toast } from 'react-toastify';

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
      <button className='border-2 bg-white border-red-600 p-2 rounded-lg text-black hover:text-white hover:bg-red-600 duration-1000 hover:border-black w-20'
        onClick={() => {
          Logout()
      }}>LogOut</button>
    </div>
  )
}

export default LogOut
