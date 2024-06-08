import React from 'react'
import Logo from '../Logo'
import LogOut from '../Button/LogOut'
import MyAsset from '../Button/MyAsset'
import '../../Components/style.css'
import Usertrade from '../Button/Usertrade'
import BankTrader from '../Button/BankTrader'

const Header = () => {
  return (
    <div className='bg-black relative h-60 border-2'>
      <Usertrade />
      <BankTrader />
      <div className='absolute top-20 inset-x-0 header border-2'>
        <Logo />
      </div>
      <div className='w-20 h-28 flex flex-col justify-around right-20 top-20 absolute'>
        <MyAsset />
        <LogOut />
      </div>
    </div>
  )
}

export default Header
