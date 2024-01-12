"use client"

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import Link from 'next/link'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select'
import { ScrollArea } from './ui/scroll-area'
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

    const [quantity, setQuantity] = useState<number>(1);

    // Replace javascript:void(0) path with your path
    const navigation = [

        { title: "Women", path: "/women" },
        { title: "Men", path: "/men" },
        { title: "Sale", path: "/sale" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
        // { title: "Login", path: "/login" },
        // { title: "Cart", path: "/cart" },
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
        <nav className="bg-white w-full top-0 z-20 sticky">
            <div className="items-center px-4  mx-auto md:px-8 lg:flex">
                <div className="flex items-center justify-between py-3 lg:py-4 lg:block">
                    <a href="/">
                        <Image
                            src="/zagard_svg.svg"
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
                        <ul className="flex flex-col-reverse items-center gap-2 justify-center space-x-0  lg:flex-row ">

                            <li className="mt-4 lg:mt-0 flex ">
                                <Image className='cursor-pointer  text-gray-600 hover:text-indigo-600' src={"/profile.svg"} width={24} height={24} alt='PRofile' />
                                <a href="/login" className="py-3 px-1 font-semibold text-center border text-gray-600 hover:text-indigo-600 rounded-md block lg:inline lg:border-0">
                                    Login
                                </a>
                            </li>
                            <li className="mt-4 lg:mt-0 flex">
                                {/* <a href="/cart">
                               <Image className='cursor-pointer' src={"/cart.svg"} width={35} height={35} alt='cart' />
                               <span className='relative right-[22px] z-10 font-semibold'>1</span>
                               </a> */}
                                {/* sheet */}
                                <div>
                                    <Sheet>
                                        <SheetTrigger className='flex w-16'>
                                            <Image className='cursor-pointer' src={"/cart.svg"} width={35} height={35} alt='cart' />
                                            <span className='relative right-[22px] z-10 font-semibold'>1</span>

                                        </SheetTrigger>
                                        <SheetContent className='h-screen flex flex-col items-end justify-between'>
                                            <SheetHeader>
                                                <SheetTitle>Shopping Cart</SheetTitle>
                                                <SheetDescription>
                                                    <div className="mt-8">
                                                        <div className="flow-root">
                                                            <ScrollArea className="w-full h-[550px]">
                                                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                                    <li className="flex py-6">
                                                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                            <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                                                                        </div>

                                                                        <div className="ml-4 flex flex-1 flex-col">
                                                                            <div>
                                                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                                                    <h3>
                                                                                        <a href="#">Throwback Hip Bag</a>
                                                                                    </h3>
                                                                                    <p className="ml-4">$90.00</p>
                                                                                </div>
                                                                                <p className="mt-1 text-sm text-gray-500">Salmon</p>
                                                                            </div>
                                                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                                                <div className='flex gap-2 justify-center items-center'>

                                                                                    <Select>
                                                                                        <SelectTrigger className="w-30">
                                                                                            <SelectValue placeholder="Quantity" />
                                                                                        </SelectTrigger>
                                                                                        <SelectContent>
                                                                                            <SelectGroup>
                                                                                                <SelectItem value="1">1</SelectItem>
                                                                                                <SelectItem value="2">2</SelectItem>
                                                                                                <SelectItem value="3">3</SelectItem>
                                                                                                <SelectItem value="4">4</SelectItem>
                                                                                                <SelectItem value="5">5</SelectItem>
                                                                                                <SelectItem value="6">6</SelectItem>
                                                                                                <SelectItem value="7">7</SelectItem>
                                                                                                <SelectItem value="8">8</SelectItem>
                                                                                                <SelectItem value="9">9</SelectItem>
                                                                                                <SelectItem value="10">10</SelectItem>

                                                                                            </SelectGroup>
                                                                                        </SelectContent>
                                                                                    </Select>
                                                                                </div>

                                                                                <div className="flex">
                                                                                    <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="flex py-6">
                                                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                            <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                                                                        </div>

                                                                        <div className="ml-4 flex flex-1 flex-col">
                                                                            <div>
                                                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                                                    <h3>
                                                                                        <a href="#">Throwback Hip Bag</a>
                                                                                    </h3>
                                                                                    <p className="ml-4">$90.00</p>
                                                                                </div>
                                                                                <p className="mt-1 text-sm text-gray-500">Salmon</p>
                                                                            </div>
                                                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                                                <div className='flex gap-2 justify-center items-center'>

                                                                                    <Select>
                                                                                        <SelectTrigger className="w-30">
                                                                                            <SelectValue placeholder="Quantity" />
                                                                                        </SelectTrigger>
                                                                                        <SelectContent>
                                                                                            <SelectGroup>
                                                                                                <SelectItem value="1">1</SelectItem>
                                                                                                <SelectItem value="2">2</SelectItem>
                                                                                                <SelectItem value="3">3</SelectItem>
                                                                                                <SelectItem value="4">4</SelectItem>
                                                                                                <SelectItem value="5">5</SelectItem>
                                                                                                <SelectItem value="6">6</SelectItem>
                                                                                                <SelectItem value="7">7</SelectItem>
                                                                                                <SelectItem value="8">8</SelectItem>
                                                                                                <SelectItem value="9">9</SelectItem>
                                                                                                <SelectItem value="10">10</SelectItem>

                                                                                            </SelectGroup>
                                                                                        </SelectContent>
                                                                                    </Select>
                                                                                </div>

                                                                                <div className="flex">
                                                                                    <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="flex py-6">
                                                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                            <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                                                                        </div>

                                                                        <div className="ml-4 flex flex-1 flex-col">
                                                                            <div>
                                                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                                                    <h3>
                                                                                        <a href="#">Throwback Hip Bag</a>
                                                                                    </h3>
                                                                                    <p className="ml-4">$90.00</p>
                                                                                </div>
                                                                                <p className="mt-1 text-sm text-gray-500">Salmon</p>
                                                                            </div>
                                                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                                                <div className='flex gap-2 justify-center items-center'>

                                                                                    <Select>
                                                                                        <SelectTrigger className="w-30">
                                                                                            <SelectValue placeholder="Quantity" />
                                                                                        </SelectTrigger>
                                                                                        <SelectContent>
                                                                                            <SelectGroup>
                                                                                                <SelectItem value="1">1</SelectItem>
                                                                                                <SelectItem value="2">2</SelectItem>
                                                                                                <SelectItem value="3">3</SelectItem>
                                                                                                <SelectItem value="4">4</SelectItem>
                                                                                                <SelectItem value="5">5</SelectItem>
                                                                                                <SelectItem value="6">6</SelectItem>
                                                                                                <SelectItem value="7">7</SelectItem>
                                                                                                <SelectItem value="8">8</SelectItem>
                                                                                                <SelectItem value="9">9</SelectItem>
                                                                                                <SelectItem value="10">10</SelectItem>

                                                                                            </SelectGroup>
                                                                                        </SelectContent>
                                                                                    </Select>
                                                                                </div>

                                                                                <div className="flex">
                                                                                    <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="flex py-6">
                                                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                            <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                                                                        </div>

                                                                        <div className="ml-4 flex flex-1 flex-col">
                                                                            <div>
                                                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                                                    <h3>
                                                                                        <a href="#">Throwback Hip Bag</a>
                                                                                    </h3>
                                                                                    <p className="ml-4">$90.00</p>
                                                                                </div>
                                                                                <p className="mt-1 text-sm text-gray-500">Salmon</p>
                                                                            </div>
                                                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                                                <div className='flex gap-2 justify-center items-center'>

                                                                                    <Select>
                                                                                        <SelectTrigger className="w-30">
                                                                                            <SelectValue placeholder="Quantity" />
                                                                                        </SelectTrigger>
                                                                                        <SelectContent>
                                                                                            <SelectGroup>
                                                                                                <SelectItem value="1">1</SelectItem>
                                                                                                <SelectItem value="2">2</SelectItem>
                                                                                                <SelectItem value="3">3</SelectItem>
                                                                                                <SelectItem value="4">4</SelectItem>
                                                                                                <SelectItem value="5">5</SelectItem>
                                                                                                <SelectItem value="6">6</SelectItem>
                                                                                                <SelectItem value="7">7</SelectItem>
                                                                                                <SelectItem value="8">8</SelectItem>
                                                                                                <SelectItem value="9">9</SelectItem>
                                                                                                <SelectItem value="10">10</SelectItem>

                                                                                            </SelectGroup>
                                                                                        </SelectContent>
                                                                                    </Select>
                                                                                </div>

                                                                                <div className="flex">
                                                                                    <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="flex py-6">
                                                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                            <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                                                                        </div>

                                                                        <div className="ml-4 flex flex-1 flex-col">
                                                                            <div>
                                                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                                                    <h3>
                                                                                        <a href="#">Throwback Hip Bag</a>
                                                                                    </h3>
                                                                                    <p className="ml-4">$90.00</p>
                                                                                </div>
                                                                                <p className="mt-1 text-sm text-gray-500">Salmon</p>
                                                                            </div>
                                                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                                                <div className='flex gap-2 justify-center items-center'>

                                                                                    <Select>
                                                                                        <SelectTrigger className="w-30">
                                                                                            <SelectValue placeholder="Quantity" />
                                                                                        </SelectTrigger>
                                                                                        <SelectContent>
                                                                                            <SelectGroup>
                                                                                                <SelectItem value="1">1</SelectItem>
                                                                                                <SelectItem value="2">2</SelectItem>
                                                                                                <SelectItem value="3">3</SelectItem>
                                                                                                <SelectItem value="4">4</SelectItem>
                                                                                                <SelectItem value="5">5</SelectItem>
                                                                                                <SelectItem value="6">6</SelectItem>
                                                                                                <SelectItem value="7">7</SelectItem>
                                                                                                <SelectItem value="8">8</SelectItem>
                                                                                                <SelectItem value="9">9</SelectItem>
                                                                                                <SelectItem value="10">10</SelectItem>

                                                                                            </SelectGroup>
                                                                                        </SelectContent>
                                                                                    </Select>
                                                                                </div>

                                                                                <div className="flex">
                                                                                    <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="flex py-6">
                                                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                            <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                                                                        </div>

                                                                        <div className="ml-4 flex flex-1 flex-col">
                                                                            <div>
                                                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                                                    <h3>
                                                                                        <a href="#">Throwback Hip Bag</a>
                                                                                    </h3>
                                                                                    <p className="ml-4">$90.00</p>
                                                                                </div>
                                                                                <p className="mt-1 text-sm text-gray-500">Salmon</p>
                                                                            </div>
                                                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                                                <div className='flex gap-2 justify-center items-center'>

                                                                                    <Select>
                                                                                        <SelectTrigger className="w-30">
                                                                                            <SelectValue placeholder="Quantity" />
                                                                                        </SelectTrigger>
                                                                                        <SelectContent>
                                                                                            <SelectGroup>
                                                                                                <SelectItem value="1">1</SelectItem>
                                                                                                <SelectItem value="2">2</SelectItem>
                                                                                                <SelectItem value="3">3</SelectItem>
                                                                                                <SelectItem value="4">4</SelectItem>
                                                                                                <SelectItem value="5">5</SelectItem>
                                                                                                <SelectItem value="6">6</SelectItem>
                                                                                                <SelectItem value="7">7</SelectItem>
                                                                                                <SelectItem value="8">8</SelectItem>
                                                                                                <SelectItem value="9">9</SelectItem>
                                                                                                <SelectItem value="10">10</SelectItem>

                                                                                            </SelectGroup>
                                                                                        </SelectContent>
                                                                                    </Select>
                                                                                </div>

                                                                                <div className="flex">
                                                                                    <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="flex py-6">
                                                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                            <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                                                                        </div>

                                                                        <div className="ml-4 flex flex-1 flex-col">
                                                                            <div>
                                                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                                                    <h3>
                                                                                        <a href="#">Throwback Hip Bag</a>
                                                                                    </h3>
                                                                                    <p className="ml-4">$90.00</p>
                                                                                </div>
                                                                                <p className="mt-1 text-sm text-gray-500">Salmon</p>
                                                                            </div>
                                                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                                                <div className='flex gap-2 justify-center items-center'>

                                                                                    <Select>
                                                                                        <SelectTrigger className="w-30">
                                                                                            <SelectValue placeholder="Quantity" />
                                                                                        </SelectTrigger>
                                                                                        <SelectContent>
                                                                                            <SelectGroup>
                                                                                                <SelectItem value="1">1</SelectItem>
                                                                                                <SelectItem value="2">2</SelectItem>
                                                                                                <SelectItem value="3">3</SelectItem>
                                                                                                <SelectItem value="4">4</SelectItem>
                                                                                                <SelectItem value="5">5</SelectItem>
                                                                                                <SelectItem value="6">6</SelectItem>
                                                                                                <SelectItem value="7">7</SelectItem>
                                                                                                <SelectItem value="8">8</SelectItem>
                                                                                                <SelectItem value="9">9</SelectItem>
                                                                                                <SelectItem value="10">10</SelectItem>

                                                                                            </SelectGroup>
                                                                                        </SelectContent>
                                                                                    </Select>
                                                                                </div>

                                                                                <div className="flex">
                                                                                    <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="flex py-6">
                                                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                            <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                                                                        </div>

                                                                        <div className="ml-4 flex flex-1 flex-col">
                                                                            <div>
                                                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                                                    <h3>
                                                                                        <a href="#">Throwback Hip Bag</a>
                                                                                    </h3>
                                                                                    <p className="ml-4">$90.00</p>
                                                                                </div>
                                                                                <p className="mt-1 text-sm text-gray-500">Salmon</p>
                                                                            </div>
                                                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                                                <div className='flex gap-2 justify-center items-center'>

                                                                                    <Select>
                                                                                        <SelectTrigger className="w-30">
                                                                                            <SelectValue placeholder="Quantity" />
                                                                                        </SelectTrigger>
                                                                                        <SelectContent>
                                                                                            <SelectGroup>
                                                                                                <SelectItem value="1">1</SelectItem>
                                                                                                <SelectItem value="2">2</SelectItem>
                                                                                                <SelectItem value="3">3</SelectItem>
                                                                                                <SelectItem value="4">4</SelectItem>
                                                                                                <SelectItem value="5">5</SelectItem>
                                                                                                <SelectItem value="6">6</SelectItem>
                                                                                                <SelectItem value="7">7</SelectItem>
                                                                                                <SelectItem value="8">8</SelectItem>
                                                                                                <SelectItem value="9">9</SelectItem>
                                                                                                <SelectItem value="10">10</SelectItem>

                                                                                            </SelectGroup>
                                                                                        </SelectContent>
                                                                                    </Select>
                                                                                </div>

                                                                                <div className="flex">
                                                                                    <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>


                                                                </ul>
                                                            </ScrollArea>
                                                        </div>
                                                    </div>

                                                </SheetDescription>
                                            </SheetHeader>
                                            <SheetFooter className='flex flex-col w-full'>
                                                <div className=''>
                                                    <p>Subtotal</p>
                                                    <span>{"₹100"}</span>
                                                </div>
                                                <div>
                                                    <p>Shipping and taxes calculated at checkout.</p>
                                                </div>
                                                <button className='bg-orange-600 px-6 py-4 text-white font-semibold rounded w-full'>Checkout</button>
                                                <div>
                                                    <p>or <Link href={"#"}>continue shopping</Link></p>
                                                </div>
                                            </SheetFooter>
                                        </SheetContent>

                                    </Sheet>

                                </div>
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
        </nav >
    )
}

export default Navbar