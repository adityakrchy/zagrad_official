import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NavBar = () => {
    return (
        <>
            <h1 className='text-xl text-center m-4 font-bold text-gray-900 sm:text-3xl uppercase'>Women's <br /> Category</h1>
            <div className='grid grid-cols-2 sm:grid-cols-3'>
                <div className=" max-w-sm m-2 rounded-t-[50%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link href="#" className='flex justify-center items-center'>
                        <Image className="" src="/MobileNav/NavMonile1.png" width={200} height={200} alt="product image" />
                    </Link>
                    <div className="px-5 pb-5 flex justify-center items-center">
                        <Link href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Printed <br /> T-Shirt</h5>
                        </Link>
                    </div>
                </div>
                <div className=" max-w-sm m-2 rounded-t-[50%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link href="#" className='flex justify-center items-center'>
                        <Image className="" width={200} height={200} src="/MobileNav/NavMonile1.png" alt="product image" />
                    </Link>
                    <div className="px-5 pb-5 flex justify-center items-center">
                        <Link href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Oversized <br /> T-Shirt</h5>
                        </Link>
                    </div>
                </div>
                <div className=" max-w-sm m-2 rounded-t-[50%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link href="#" className='flex justify-center items-center'>
                        <Image className="" width={200} height={200} src="/MobileNav/NavMonile1.png" alt="product image" />
                    </Link>
                    <div className="px-5 pb-5 flex justify-center items-center">
                        <Link href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Full Sleeve <br /> T-Shirt</h5>
                        </Link>
                    </div>
                </div>
                <div className=" max-w-sm m-2 rounded-t-[50%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link href="#" className='flex justify-center items-center'>
                        <Image className="" width={200} height={200} src="/MobileNav/NavMonile1.png" alt="product image" />
                    </Link>
                    <div className="px-5 pb-5 flex justify-center items-center">
                        <Link href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Half Sleeve <br /> T-Shirt</h5>
                        </Link>
                    </div>
                </div>
                <div className=" max-w-sm m-2 rounded-t-[50%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link href="#" className='flex justify-center items-center'>
                        <Image className="" width={200} height={200} src="/MobileNav/NavMonile1.png" alt="product image" />
                    </Link>
                    <div className="px-5 pb-5 flex justify-center items-center">
                        <Link href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Polo <br /> T-Shirt</h5>
                        </Link>
                    </div>
                </div>
                <div className=" max-w-sm m-2 rounded-t-[50%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link href="#" className='flex justify-center items-center'>
                        <Image className="" width={200} height={200} src="/MobileNav/NavMonile1.png" alt="product image" />
                    </Link>
                    <div className="px-5 pb-5 flex justify-center items-center">
                        <Link href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">CLassic Fit <br /> T-Shirt</h5>
                        </Link>
                    </div>
                </div>
                <div className=" max-w-sm m-2 rounded-t-[50%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link href="#" className='flex justify-center items-center'>
                        <Image className="" width={200} height={200} src="/MobileNav/NavMonile1.png" alt="product image" />
                    </Link>
                    <div className="px-5 pb-5 flex justify-center items-center">
                        <Link href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Plain <br /> T-Shirt</h5>
                        </Link>
                    </div>
                </div>
                <div className=" max-w-sm m-2 rounded-t-[50%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link href="#" className='flex justify-center items-center'>
                        <Image className=" " width={200} height={200} src="/MobileNav/NavMonile1.png" alt="product image" />
                    </Link>
                    <div className="px-5 pb-5 flex justify-center items-center">
                        <Link href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Combos <br /> T-Shirt</h5>
                        </Link>
                    </div>
                </div>
                <div className=" max-w-sm m-2 rounded-t-[50%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link href="#" className='flex justify-center items-center'>
                        <Image className="" width={200} height={200} src="/MobileNav/NavMonile1.png" alt="product image" />
                    </Link>
                    <div className="px-5 pb-5 flex justify-center items-center">
                        <Link href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">All <br /> T-Shirt</h5>
                        </Link>
                    </div>
                </div>
                
            </div>

        </>
    )
}

export default NavBar