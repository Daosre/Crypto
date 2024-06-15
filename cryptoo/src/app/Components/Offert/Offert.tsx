import { MyAssetData, OffertsData } from '@/Utils/types'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { CreateTrade } from '@/Services/trade'
import { toast } from 'react-toastify'
import { Cryptocard2 } from '../Crypto/CryptoCard2'
import { UsersAsset } from '@/Services/user'

export const Offert = ({ offer, setisLoading }: { offer: OffertsData, setisLoading: Dispatch<SetStateAction<boolean>>}) => {
  const [Userasset, setUserData] = useState<MyAssetData>()

  function MyAssetdemerde() {
    UsersAsset().then((res) => {
      setUserData(res)
    })
  }
  useEffect(() => {
    MyAssetdemerde()
  },[])
function BuycryptohasOffert() {
        CreateTrade(offer.id)
          .then((res) => {
            setisLoading(true)
            if (res.status === 201) {
              toast.success('Buy it')
            }
              if (res.status === 204) {
                toast.error('Item already sold')
            }
          })
          .catch((e) => {
            if (e) {
              toast.error("You have any money")
            }
          })
      }
  return (
    <div className='text-center m-2 flex flex-col gap-10'>
          <p>Seller: {offer.User.pseudo}</p>
          <p>Number of tokens: {offer.amount}</p>
        <Cryptocard2 crypto={offer.Crypto} isBuyvisible={false} setisLoading={setisLoading} />
      <div className="w-full flex justify-around">
      {Userasset?.pseudo !== offer.User.pseudo &&(
        <button className="bg-white text-center rounded-lg text-black w-20 p-2 text-sm hover:bg-green-600 hover:text-white duration-1000"
          onClick={() => {
            BuycryptohasOffert()
          }}
        >
          Buy
        </button>
                  )}
        {Userasset?.pseudo === offer.User.pseudo &&(
          <button className='text-black bg-white rounded-lg p-2 border-black border hover:border-white hover:bg-green-600 duration-700'
            onClick={() => {
            
          }}>Update</button>
        )}
         {Userasset?.pseudo === offer.User.pseudo &&(
          <button className='text-black bg-white rounded-lg p-2 border-black border hover:border-white hover:bg-red-600 duration-700'
            onClick={() => {
            
          }}>Delete</button>
          )}
      </div>
    </div>
  )
}
