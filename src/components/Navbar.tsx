"use client"

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
// import LOGO_SVG from "/logo_svg.svg"


// Add this style to your css file
// .sticky-nav {
//      animation: sticky-nav 300ms;
// }

// @keyframes sticky-nav {
//     0% {
//         transform: translateY(-6em)
//     }

//     100% {
//         transform: translateY(0)
//     }
// }

const Navbar = () => {

    const [state, setState] = useState(false)
    const navRef = useRef()

    // Replace javascript:void(0) path with your path
    const navigation = [

        { title: "Women", path: "/women" },
        { title: "Men", path: "/men" },
        { title: "Sale", path: "/sale" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
    ]

    // useEffect(() => {

    //     const body = document.body

    //     // Disable scrolling
    //     const customBodyStyle = ["overflow-hidden", "lg:overflow-visible"]
    //     if (state) body.classList.add(...customBodyStyle)
    //     // Enable scrolling
    //     else body.classList.remove(...customBodyStyle)

    //     // Sticky strick
    //     const customStyle = ["sticky-nav", "fixed", "border-b"]
    //     window.onscroll = () => {
    //         if (window.scrollY > 80) navRef.current.classList.add(...customStyle)
    //         else navRef.current.classList.remove(...customStyle)
    //     }
    //   }, [state])


    return (
        <nav ref={navRef} className="bg-white w-full top-0 z-20 sticky">
            <div className="items-center px-4  mx-auto md:px-8 lg:flex">
                <div className="flex items-center justify-between py-3 lg:py-4 lg:block">
                    <a href="/">
                        <Image
                            src="/logo_svg_border.svg"
                            width={150}
                            height={50}
                            alt="Brand Logo"
                        />
                    </a>
                    <div className="lg:hidden">
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
                </div>
                <div className={`flex-1 justify-start items-center flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${state ? 'h-screen pb-20 overflow-auto pr-4' : 'hidden'} gap-8`}>
                    <div>
                        <ul className="flex flex-col-reverse items-center justify-center space-x-0  lg:flex-row ">

                            <li className="mt-4 lg:mt-0 flex ">
                                <Image src={"/profile.svg"} width={24} height={24} alt='PRofile' />
                                <a href="/login" className="py-3 px-1 font-semibold text-center border text-gray-600 hover:text-indigo-600 rounded-md block lg:inline lg:border-0">
                                    Login
                                </a>
                            </li>
                            <li className="mt-4 lg:mt-0 flex">
                               <Image src={"/cart.svg"} width={35} height={35} alt='cart' />
                               <span className='relative right-[22px] z-10 font-semibold'>1</span>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <ul className="justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                            {
                                navigation.map((item, idx) => {
                                    return (
                                        <li key={idx} className="text-gray-600 font-semibold hover:text-indigo-600">
                                            <a href={item.path}>
                                                {item.title}
                                            </a>
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
        </nav>
    )
}

export default Navbar