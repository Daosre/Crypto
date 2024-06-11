import { LoginProps, RegisterProps } from "@/Utils/types"
import axios from "axios"
import { toast } from "react-toastify"

//Login
export async function LogInUsers(authProps: LoginProps) {
    let url = `${process.env.NEXT_PUBLIC_API_URL}auth/signin`
  
    let axiosConfig = {
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    }
    return axios
      .post(
        url,
        {
          email: authProps.email,
          password: authProps.password,
        },
        axiosConfig
      )
      .then((res) => {
        return res
      })
      .catch((e) => {
        toast.error(e.response.data.message,
          {
              position: "top-right"
          })
        return e
  })
}

//Register
export async function registerUser(authProps: RegisterProps) {
    let url = `${process.env.NEXT_PUBLIC_API_URL}auth/signup`
  
    let axiosConfig = {
      headers: {
        'content-type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    }
    return axios
      .post(
        url,
        {
            firstName: authProps.firstName,
            lastName: authProps.lastName,
            pseudo: authProps.pseudo,
            city: authProps.city,
            email: authProps.email,
            password: authProps.password,
            age:20,
            promoCode: authProps.promoCode
        },
        axiosConfig
      )
      .then((res) => {
        return res
      })
      .catch((e) => {
        toast.error(e.response.data.message,
          {
              position: "top-right"
          })
      })
  }