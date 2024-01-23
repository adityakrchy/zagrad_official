import React from 'react'
import ProductCard from '../ProductCard'

const WishList = () => {
    return (
        <>
            <div className='text-center mb-4'>
                <h1 className='text-xl font-bold text-gray-900 sm:text-3xl'>My</h1>
                <h3 className='text-l font-bold text-gray-900 sm:text-3xl'>Wishlist</h3>
            </div>
            <div className='px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </>
    )
}

export default WishList