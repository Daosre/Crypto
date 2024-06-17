import { useRouter } from 'next/navigation'
import React from 'react'

const TradeAll = () => {
    const { push } = useRouter()
  return (
      <div>
          <button onClick={() => {
             push('/AllTrade')
          }} className='border bg-white text-black rounded-lg hover:text-white hover:bg-black hover:border-white duration-700 w-full p-2'>Trade</button>
    </div>
  )
}

export default TradeAll
