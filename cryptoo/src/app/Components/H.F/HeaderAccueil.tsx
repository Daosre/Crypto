import React from 'react'
import '../../Components/style.css'
import LogoH from '../LogoH'

const HeaderAccueil = () => {
  return (
    <div className='relative h-60 '>
      <div className='relative left-1/2 -ml-32 header w-64 md:-ml-48  duration-1000'>
        <LogoH />
      </div>
    </div>
  )
}

export default HeaderAccueil
