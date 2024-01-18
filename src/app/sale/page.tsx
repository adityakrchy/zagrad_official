import Men from '@/components/categories/Men'
import Women from '@/components/categories/Women'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='text-center mb-4'>
        <h1 className='text-xl font-bold text-gray-900 sm:text-3xl'>TODAY </h1>
        <h3 className='text-l font-bold text-gray-900 sm:text-3xl'>SALES</h3>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 px-4'>
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