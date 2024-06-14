import axios from "axios"

// All PromoCode
export async function AllPromoCode() {
    let url = `${process.env.NEXT_PUBLIC_API_URL}promoCode/all`
  
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

// Create PromoCode
export async function CreatePromoCode(name: string, value:number) {
    let url = `${process.env.NEXT_PUBLIC_API_URL}promoCode/create`
  
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
        name: name,
        value: Number(value)
      }, axiosConfig
      )
      .then((res) => {
        return res
      })
      .catch((e) => {
        throw new Error(e)
      })
}

// Update PromoCode
export async function UpdatePromoCode(id: string) {
    let url = `${process.env.NEXT_PUBLIC_API_URL}promoCode/update/${id}`
  
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

// Delete PromoCode
export async function DeletePromoCode(id: string) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}promoCode/delete/${id}`

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