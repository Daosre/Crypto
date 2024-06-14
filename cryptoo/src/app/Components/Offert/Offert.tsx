import { OffertsData } from '@/Utils/types'
import React, { Dispatch, SetStateAction } from 'react'
import { CreateTrade } from '@/Services/trade'
import { toast } from 'react-toastify'
import { Cryptocard2 } from '../Crypto/CryptoCard2'

export const Offert = ({ offer, setisLoading }: { offer: OffertsData, setisLoading: Dispatch<SetStateAction<boolean>> }) => {

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
      <div className="w-full flex justify-start">
        <button
          className="bg-white text-center rounded-lg text-black w-20 p-2 text-sm hover:bg-green-600 hover:text-white duration-1000"
          onClick={() => {
            BuycryptohasOffert()
          }}
        >
          Buy
              </button>
      </div>
    </div>
  )
}
