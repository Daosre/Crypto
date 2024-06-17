import { OffertAll } from '@/Services/offer';
import { AllTraderUser } from '@/Services/trade';
import { AllTradeProps, MyAssetData } from '@/Utils/types';
import React, { useEffect, useState } from 'react'
import { Offert } from '../Offert/Offert';

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
          console.log(user.Crypto.amount);
          return (
            <div className='w-1/4 rounded-lg m-2 text-center p-4 my-10 border'>
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
