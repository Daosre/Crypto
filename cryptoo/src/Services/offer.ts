import { OffertsData } from "@/Utils/types"
import axios from "axios"

// All Offer
export async function OffertAll() {
    let url = `${process.env.NEXT_PUBLIC_API_URL}offer/all`
  
    let axiosConfig = {
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
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

// Create Offer
export async function OfferCreate(id_crypto: string, amount:number) {
    let url = `${process.env.NEXT_PUBLIC_API_URL}offer/create`
  
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
        throw new Error(e)
      })
}

// Update Offer
export async function OfferUpdate(id: string) {
    let url = `${process.env.NEXT_PUBLIC_API_URL}offer/update/${id}`
  
    let axiosConfig = {
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
         Authorization: `Bearer ${window.localStorage.getItem("toktok")}`,
      },
    }
    return axios
      .patch(
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

// Delete Offer
export async function OfferDelete(id: string) {
    let url = `${process.env.NEXT_PUBLIC_API_URL}offer/delete/${id}`
  
    let axiosConfig = {
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
         Authorization: `Bearer ${window.localStorage.getItem("toktok")}`,
      },
    }
    return axios
      .delete(
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