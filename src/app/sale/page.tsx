import Men from '@/categories/Men'
import Women from '@/categories/Women'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='text-center mb-4'>
     <h2 className='text-xl font-bold text-gray-900 sm:text-3xl'>TODAY <br/> SALE'S</h2>
     </div>
      <div className='grid grid-cols-4 gap-4 px-4'>
        <Men />
        <Women />
        <Men />
        <Women />
        <Men />
        <Women />
        <Men />
        <Women />
        <Men />
        <Women />
        <Men />
        <Women />
        <Men />
        <Women />
        <Men />
        <Women />
      </div>
    </>
  )
}

export default page