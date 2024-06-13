import { OffertsData } from '@/Utils/types'
import React, { Dispatch, SetStateAction } from 'react'
import { Cryptocard } from '../Crypto/CryptoCard'
import { CreateTrade } from '@/Services/trade'
import { toast } from 'react-toastify'

export const Offert = ({ offer }: { offer: OffertsData, setisReload: Dispatch<SetStateAction<boolean>> }) => {

function BuycryptohasOffert(offerId: string) {
        CreateTrade(offerId)
          .then((res) => {
            if (res.data) {
              if (res.status === 204) {
                toast.error('Item already sold')
              }
            }
          })
          .catch((e) => {
            if (e) {
              toast.error('error')
              console.log(e)
            }
          })
      }
  return (
    <div className='text-center m-2 flex flex-col gap-10'>
      <p>Seller: {offer.User.pseudo}</p>
      <p>Number of tokens: {offer.amount}</p>
      <Cryptocard crypto={offer.Crypto} isBuyvisible={false} />
      <div className="w-full flex justify-start">
        <button
          className="bg-white text-center rounded-lg text-black w-20 p-2 text-sm hover:bg-green-600 hover:text-white duration-1000"
          onClick={() => {
            BuycryptohasOffert(offer.id)
          }}
        >
          Buy
              </button>
      </div>
    </div>
  )
}
