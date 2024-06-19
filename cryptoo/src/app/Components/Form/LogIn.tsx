'use client'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ErrorMsg } from '../Error/Error'
import { LoginProps } from '@/Utils/types'
import Logo from '../Logo/Logo'
import '../../Components/style.css'
import Link from 'next/link'
import { LogInUsers } from '@/Services/auth'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import Image from 'next/image'
import LogoH from '../Logo/LogoH'


const LogInUser = () => {
    const { push } = useRouter()
    const { register, handleSubmit, watch, formState: { errors }, } = useForm<LoginProps>()
    const onSubmit: SubmitHandler<LoginProps> = (data) => LogInUsers(data).then((res) => {
        window.localStorage.setItem('toktok', res.data.access_token)
        window.localStorage.setItem('role', res.data.user.Role.name)
        toast.success('Login Sucessfull ✅',
            {
                position: "bottom-right",
                autoClose:1500
            }
        )
        setTimeout(() => {
            push('/Crypto');
        }, 1500);
    })
        .catch((e) => {})
  return (
    <div className=''>
        <div className="flex justify-center items-center h-screen bg-black">
            <div className="w-1/2 h-screen hidden lg:block">
                  <Image width={400} height={100} src="https://images.unsplash.com/photo-1621504450181-5d356f61d307?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3J5cHRvfGVufDB8fDB8fHww" alt="" className="object-cover w-full h-full styleImage" />
        </div>
              <div className="sm:20 p-8 w-full h-full lg:w-1/2 bg-black flex flex-col justify-center items-center ">
                  <LogoH />
            <h1 className="text-2xl mt-10 font-semibold text-black text-center styleLogIn">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center p-2  '>
           <div className="mb-4">
                <label className="block text-gray-600 styleLogIn">Email</label>
                          <input type="email" id="username" className="w-80 border-2 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black border-orange-600 bg-orange-200  styleInput"
                              {...register('email' , {required: true})} />
                          {errors.email && <ErrorMsg error={'email'} />}    
            </div>
           <div className="mb-4">
                <label className="block text-gray-600 styleLogIn">Password</label>
                          <input type="password" id="password" className="w-80 border-2 border-orange-600 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black bg-orange-200 "
                             {...register('password' , {required: true})} />
                             {errors.password && <ErrorMsg error={'password'} />}
            </div>
                <button type="submit" className="bg-orange-500 hover:bg-orange-700 duration-1000 text-white font-semibold rounded-md py-2 px-4 w-80 mt-3 InputLogin">Login</button>
        </form>
        <div className="mt-6 text-blue-500 text-center">
            <Link href="/signup" className="hover:underline SignUp text-white">Sign up Here</Link>
                </div>
            </div>
        </div>
      </div>
  )
}

export default LogInUser
