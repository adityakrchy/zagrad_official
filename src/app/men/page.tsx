import Men from '@/categories/Men'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='text-center mb-4'>
        <h1 className='text-xl font-bold text-gray-900 sm:text-3xl'>MEN'S </h1>
        <h3 className='text-l font-bold text-gray-900 sm:text-3xl'>T-SHIRTS</h3>
      </div>
      <div className='grid grid-cols-4 gap-4 px-4'>
        <Men />
        <Men />
        <Men />
        <Men />
        <Men />
        <Men />
        <Men />
        <Men />
      </div>
    </>
  )
}

export default page