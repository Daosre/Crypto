import axios from "axios"

 // All My Asset
export async function UsersAsset() {
    let url = `${process.env.NEXT_PUBLIC_API_URL}user/my-assets`
  
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

// All Users Asset
export async function AllUsersAsset() {
    let url = `${process.env.NEXT_PUBLIC_API_URL}user/users-assets`
  
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

// All My Trade
export async function MyTrade() {
    let url = `${process.env.NEXT_PUBLIC_API_URL}user/my-trades`
  
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
