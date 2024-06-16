import { BuyCryptoData, CryptoData } from "@/Utils/types"
import axios from "axios"

// All Crypto
export async function AllCrypto() {
    let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/all`
  
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

// Search Crypto
export async function SearchCrypto(name: string) {
    let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/search/${name}`
  
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

// History Crypto
export async function CryptoHistory(id: string) {
    let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/history/${id}`
  
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

// Create Crypto
export async function CryptoCreate(authProps : CryptoData) {
    let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/create`
  
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
            name: authProps.name,
            value: Number(authProps.value),
            quantity: Number(authProps.quantity),
            image: authProps.image
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

// Buy Crypto
export async function CryptoBuy(cryptoid:string, amount:number) {
    let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/buy`
  
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
          id_crypto: cryptoid,
          amount: amount
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

// Update Crypto
export async function CryptoUpdate(authProps: CryptoData) {
    let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/update/${authProps.id}`
  
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
          {
            name: authProps.name,
            value: authProps.value,
            quantity: authProps.quantity,
            image: authProps.image
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

// Delete Crypto
export async function CryptoDelete(id: string) {
    let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/delete/${id}`
  
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