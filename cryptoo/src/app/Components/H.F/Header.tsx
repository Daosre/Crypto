import React from 'react'
import Logo from '../Logo/Logo'
import LogOut from '../Button/LogOut'
import MyAsset from '../Button/MyAsset'
import '../../Components/style.css'
import Usertrade from '../Button/Usertrade'
import BankTrader from '../Button/BankTrader'
import PromoCode from '../Button/PromoCode'
import TradeAll from '../Button/TradeAll'

const Header = () => {
  return (
    <div className='relative h-60 styleHeader relative'>
      <div className='gap-5 p-2 w-full relative top-3 justify-between flex md:top-10 duration-500'>
        <div className='flex flex-col gap-5 relative left-10'>
          <Usertrade />
          <BankTrader />
          <PromoCode/>
          </div>
          <div className='flex flex-col gap-5 relative right-10'>
            <MyAsset />
          <LogOut />
          <TradeAll />
          </div>
      </div>
      <div className='relative left-1/2 -ml-32 header w-64 md:-ml-48 md:-top-10 duration-1000'>
        <Logo />
      </div>
      <div className='w-20 h-28 flex flex-col justify-around relative -right-'>
       
      </div>
    </div>
  )
}

export default Header
