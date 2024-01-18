"use client"

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import Link from 'next/link'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select'
import { ScrollArea } from './ui/scroll-area'
import SliderCart from './cart/SliderCart'


const Navbar = () => {

    const [state, setState] = useState(false)
    const navRef = useRef()

    const [quantity, setQuantity] = useState<number>(1);

    // Replace javascript:void(0) path with your path
    const navigation = [

        { title: "Women", path: "/women" },
        { title: "Men", path: "/men" },
        { title: "Sale", path: "/sale" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },

    ]


    return (
        <nav className="bg-white w-full top-0 z-50 sticky">
            <div className="items-center px-4  mx-auto md:px-8 flex ">
                <div className="lg:hidden  ">
                    <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                        onClick={() => setState(!state)}
                    >
                        {
                            state ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                </svg>
                            )
                        }
                    </button>
                </div>
                <div className="flex items-center justify-between py-3 lg:py-4 lg:block ">
                    <Link href="/">
                        <Image
                            src="/zagard_svg.svg"
                            width={150}
                            height={50}
                            alt="Brand Logo"
                        />
                    </Link>

                </div>
                <div className={`flex-1 justify-start items-center flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${state ? 'h-screen pb-20 overflow-auto pr-4' : 'hidden'} gap-8`}>
                    <div>
                        <ul className="flex flex-col-reverse items-center gap-2 justify-center space-x-0  lg:flex-row ">

                            <li className="mt-4 lg:mt-0 flex justify-center items-center">

                                {/* <Link href="/profile" className="py-3 px-1 font-semibold text-center border text-gray-600 hover:text-indigo-600 rounded-md block lg:inline lg:border-0">
                                    Login
                                </Link> */}
                                <Link className='cursor-pointer  text-gray-600 hover:text-indigo-600' href={"/loginEmail"}>
                                    <Image className='cursor-pointer  text-gray-600 hover:text-indigo-600' src={"/profile.svg"} width={24} height={24} alt='PRofile' />
                                </Link>
                                {/* <Image className='cursor-pointer  text-gray-600 hover:text-indigo-600' src={"/profile.svg"} width={24} height={24} alt='PRofile' /> */}
                                <Link href="/loginEmail" className="py-3 block px-1 font-semibold text-center text-gray-600 hover:text-indigo-600 rounded-md lg:inline">
                                    Login
                                </Link>
                            </li>
                            <li className="mt-4 lg:mt-0 flex">
                                <Link href={"/cart"} className='flex w-16'>
                                    <Image className='cursor-pointer' src={"/cart.svg"} width={35} height={35} alt='cart' />
                                    <span className='relative right-[22px] z-10 font-semibold'>1</span>

                                </Link>

                                {/* <div>
                                    <SliderCart />

                                </div> */}
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <ul className="justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                            {
                                navigation.map((item, idx) => {
                                    return (
                                        <li key={idx} className="text-gray-600 font-semibold hover:text-indigo-600">
                                            <Link href={item.path}>
                                                {item.title}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className='flex flex-1 ml-4'>
                        <form onSubmit={(e) => e.preventDefault()} className='flex-1 items-center justify-start pb-4 lg:flex lg:pb-0'>
                            <div className="flex items-center gap-1 px-2 border rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full px-2 py-2 text-gray-500 bg-transparent rounded-md outline-none"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar