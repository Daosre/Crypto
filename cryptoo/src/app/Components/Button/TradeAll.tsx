import { useRouter } from 'next/navigation'
import React from 'react'
import { GiTrade } from "react-icons/gi";


const TradeAll = () => {
  const { push } = useRouter()
  const Role = window.localStorage.getItem('role')
  return (
    <div>
      {Role === 'admin' && ( 
        <GiTrade size={50} className='p-2 cursor-pointer hover:bg-black duration-700 rounded-lg' onClick={() => {
          push('/AllTrade')
}}>
</GiTrade>
      )}
         
    </div>
  )
}

export default TradeAll
