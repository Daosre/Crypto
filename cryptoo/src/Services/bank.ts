import axios from "axios"
import { toast } from "react-toastify"

// Sell at bank
export async function SellCrypto(id_crypto: string, amount:number) {
    let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/sell`
  
    let axiosConfig = {
      headers: {
        'content-type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
         Authorization: `Bearer ${window.localStorage.getItem("toktok")}`,
      },
    }
    return axios
      .post(
          url,
          {
              id_crypto: id_crypto,
              amount:Number(amount),
          },
        axiosConfig
      )
      .then((res) => {
        return res.data
        
      })
      .catch((e) => {
        toast.error('NON')
      })
}