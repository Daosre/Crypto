import { AllTraderUser } from '@/Services/trade';
import { AllTradeProps } from '@/Utils/types';
import React, { useEffect, useState } from 'react'

const TradeUser = () => {
  const [Trade, setTrade] = useState<AllTradeProps[]>()
  
  useEffect(() => {
    AllTraderUser().then((res) => {
      setTrade(res.data)
  })
},[])
  return (
    <div>
    <div className='text-3xl m-2 text-center'>
       <h1>All Trade</h1>
    </div>
    <div className='flex flex-wrap items-center justify-center'>
      
      {Trade && Trade.map((user) => {
          return (
            <div className='w-1/4 rounded-lg gap-3 flex flex-col text-center p-4 m-5 border-2 bg-amber-200 text-black border-white'>
              <p>Id de l'offre : {user.id}</p>
              <p>Giver : {user.Giver.pseudo}</p>
              <p>Receiver : {user.Receiver.pseudo}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TradeUser
