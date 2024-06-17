import axios from "axios"

// All Trade
export async function AllTraderUser() {
    let url = `${process.env.NEXT_PUBLIC_API_URL}trade/all`
  
    let axiosConfig = {
      headers: {
        'content-type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
         Authorization: `Bearer ${window.localStorage.getItem("toktok")}`,
      },
    }
    return axios
      .get(
        url,
        axiosConfig
      )
      .then((res) => {
        return res
      })
      .catch((e) => {
        throw new Error(e)
      })
}

// Create trade
export async function CreateTrade(id_offert: string) {
    let url = `${process.env.NEXT_PUBLIC_API_URL}trade/create`
  
    let axiosConfig = {
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
         Authorization: `Bearer ${window.localStorage.getItem("toktok")}`,
      },
    }
    return axios
      .post(
          url,
          {
             id_offer: id_offert
          },
        axiosConfig
      )
      .then((res) => {
        return res
      })
      .catch((e) => {
        throw new Error(e)
      })
}