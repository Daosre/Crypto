'use client'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ErrorMsg } from '../Error/Error'
import { RegisterProps } from '@/Utils/types'
import Logo from '../Logo'
import '../../Components/style.css'
import Link from 'next/link'
import { registerUser } from '@/Services/auth'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'


const RegisterUsers = () => {
  const { push } = useRouter()
  const { register, handleSubmit, watch, formState: { errors }, } = useForm<RegisterProps>()
  const onSubmit: SubmitHandler<RegisterProps> = (data) => registerUser(data).then((res) => {
    toast.success('Register Successfully')
      push('/login')
  ;
  }).catch((e) => toast(' 🔴 Do it better 🖕 ', ))
  return (
    <div className=''>
        <div className="flex justify-center items-center h-screen bg-black">
        <div className="w-full h-full bg-black flex flex-col md:flex-row">
          <div className='w-80 items-center flex flex-col justify-center mx-auto'>
            <Logo />
            <h1 className="text-2xl font-semibold mb-4 text-black text-center styleLogIn">SignUp</h1>
          </div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-center text-center mx-auto md:text-right'>
           <div className="mb-4">
                <label className="block text-gray-600 styleLogIn">First Name</label>
              <input type="text" id="username" className="w-80 border-2 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black border-orange-600 bg-orange-200 text-right"
                  {...register('firstName' , {required: true})} />
                  {errors.firstName && <ErrorMsg error={'firstname'} />}
            </div>
           <div className="mb-4">
                <label className="block text-gray-600 styleLogIn">Last Name</label>
              <input type="text" id="password" className="w-80 border-2 border-orange-600 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black bg-orange-200 text-right"
              {...register('lastName' , {required: true})} />
              {errors.lastName && <ErrorMsg error={'lastname'} />}
            </div>
            <div className="mb-4">
                <label className="block text-gray-600 styleLogIn">Pseudo</label>
              <input type="text" id="password" className="w-80 border-2 border-orange-600 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black bg-orange-200 text-right"
              {...register('pseudo' , {required: true})} />
              {errors.pseudo && <ErrorMsg error={'pseudo'} />}
            </div>
            <div className="mb-4">
                <label className="block text-gray-600 styleLogIn">City</label>
                          <input type="text" id="password" className="w-80 border-2 border-orange-600 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black bg-orange-200 text-right"
                          {...register('city' , {required: true})} />
                  {errors.city && <ErrorMsg error={'city'} />}
            </div>
            <div className="mb-4">
                <label className="block text-gray-600 styleLogIn">Email</label>
              <input type="email" id="password" className="w-80 border-2 border-orange-600 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black bg-orange-200 text-right"
              {...register('email' , {required: true})} />
              {errors.email && <ErrorMsg error={'email'} />}
            </div>
            <div className="mb-4">
                <label className="block text-gray-600 styleLogIn">Password</label>
              <input type="password" id="password" className="w-80 border-2 border-orange-600 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black bg-orange-200 text-right"
              {...register('password' , {required: true})} />
              {errors.password && <ErrorMsg error={'password'} />}
            </div>
            <div className="mb-4">
                <label className="block text-gray-600 styleLogIn">PromoCode</label>
              <input type="text" id="password" className="w-80 border-2 border-orange-600 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black bg-orange-200 text-right"
                    {...register('promoCode')} />
            </div>
            <button type="submit" className="bg-orange-500 hover:bg-orange-700 duration-1000 text-white font-semibold rounded-md py-2 px-4 w-80 mt-3 InputLogin">Register</button>
            <Link href="/login" className="hover:underline SignUp text-white">Log here bitch please</Link>
        </form>
            </div>
        <div className="w-1/2 h-screen hidden lg:block">
                  <img src="https://images.unsplash.com/photo-1621504450181-5d356f61d307?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3J5cHRvfGVufDB8fDB8fHww" alt="" className="object-cover w-full h-full styleImage" />
        </div>
        </div>
      </div>
  )
}

export default RegisterUsers
