import React from 'react'

const Containeruser = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='flex flex-wrap'>
          {children}
    </div>
  )
}

export default Containeruser
