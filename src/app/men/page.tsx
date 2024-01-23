// 'use client'
import Filter from '@/components/filter/FilterMen'
// import Men from '@/components/categories/Men'
import React from 'react'

const page = () => {
  return (
    <>
      {/* <div className='text-center mb-4'>
        <h1 className='text-xl font-bold text-gray-900 sm:text-3xl'>MEN'S </h1>
        <h3 className='text-l font-bold text-gray-900 sm:text-3xl'>T-SHIRTS</h3>
      </div>
      <Filter />
      <div className='flex '>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 px-4'>
        //  Repeat the Men component as needed 
        <Men />
        <Men />
        <Men />
        <Men />
        <Men />
        <Men />
        <Men />
        <Men />
      </div>
    </div> */}
    <Filter />

    </>
  )
}

export default page