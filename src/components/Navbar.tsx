"use client"
import Image from 'next/image'
import { useRef, useState } from 'react'
import Link from 'next/link'
import { CiHeart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from '@/lib/utils';
import React from 'react';


const men: { title: string; href: string; }[] = [
    {
        title: "Printed T-Shirt",
        href: "/docs/primitives/alert-dialog",
    },
    {
        title: "Polo T-Shirt",
        href: "/docs/primitives/hover-card",
    },
    {
        title: "OverSized T-Shirt",
        href: "/docs/primitives/progress",
    },
    {
        title: "Classic Fit T-Shirt",
        href: "/docs/primitives/scroll-area",
    },
    {
        title: "Full Sleeve T-Shirt",
        href: "/docs/primitives/tabs",
    },
    {
        title: "Plain T-Shirt",
        href: "/docs/primitives/tooltip",
    },
    {
        title: "Half Sleeve T-Shirt",
        href: "/docs/primitives/tooltip",
    },
    {
        title: "T-Shirt Combos",
        href: "/docs/primitives/tooltip",
    },
    {
        title: "All T-Shirt",
        href: "/docs/primitives/tooltip",
    },
]
const women: { title: string; href: string; }[] = [
    {
        title: "Printed T-Shirt",
        href: "/docs/primitives/alert-dialog",
    },
    {
        title: "BoyFriend T-Shirt",
        href: "/docs/primitives/hover-card",
    },
    {
        title: "OverSized T-Shirt",
        href: "/docs/primitives/progress",
    },
    {
        title: "Classic Fit T-Shirt",
        href: "/docs/primitives/scroll-area",
    },
    {
        title: "Full Sleeve T-Shirt",
        href: "/docs/primitives/tabs",
    },
    {
        title: "Plain T-Shirt",
        href: "/docs/primitives/tooltip",
    },
    {
        title: "Half Sleeve T-Shirt",
        href: "/docs/primitives/tooltip",
    },
    {
        title: "T-Shirt Combos",
        href: "/docs/primitives/tooltip",
    },
    {
        title: "All T-Shirt",
        href: "/docs/primitives/tooltip",
    },
]

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from 'your-firebase-config'; // replace with your Firebase configuration

const Navbar = () => {
    // const [user] = useAuthState(auth);
    const [state, setState] = useState(false)
    const navRef = useRef()

    const [quantity, setQuantity] = useState<number>(1);

    // Replace javascript:void(0) path with your path
    const navigation = [
        // {
        //     title: "Women", path: "/women",
        //     dropdown: [
        //         { title: "Printed T-Shirt", path: "/men/printed" },
        //         { title: "BoyFriend T-Shirt", path: "/men/boyfriend" },
        //         { title: "OverSized T-Shirt", path: "/men/boyfriend" },
        //         { title: "Classic Fit T-Shirt", path: "/men/boyfriend" },
        //         { title: "Full Sleeve T-Shirt", path: "/men/boyfriend" },
        //         { title: "Plain T-Shirt", path: "/men/boyfriend" },
        //         { title: "Half Sleeve T-Shirt", path: "/men/boyfriend" },
        //         { title: "T-Shirt Combos", path: "/men/boyfriend" },
        //         { title: "All T-Shirt", path: "/men/boyfriend" },
        //         // Add more sub-items as needed
        //     ],
        // },
        // {
        //     title: "Men",
        //     path: "/men",
        //     dropdown: [
        //         { title: "Printed T-Shirt", path: "/men/printed" },
        //         { title: "Polo T-Shirt", path: "/men/boyfriend" },
        //         { title: "OverSized T-Shirt", path: "/men/boyfriend" },
        //         { title: "Classic Fit T-Shirt", path: "/men/boyfriend" },
        //         { title: "Full Sleeve T-Shirt", path: "/men/boyfriend" },
        //         { title: "Plain T-Shirt", path: "/men/boyfriend" },
        //         { title: "Half Sleeve T-Shirt", path: "/men/boyfriend" },
        //         { title: "T-Shirt Combos", path: "/men/boyfriend" },
        //         { title: "All T-Shirt", path: "/men/boyfriend" },
        //         // Add more sub-items as needed
        //     ],
        // },
        {
            title: "Anime", path: "/anime"
        },
        // {
        //     title: "Combos", path: "/combo",
        //     dropdown: [
        //         { title: "Casual", path: "/men/casual" },
        //         { title: "Formal", path: "/men/formal" },
        //         // Add more sub-items as needed
        //     ],
        // },
        {
            title: "Computer Geek", path: "/computergeek",

        },
        // {
        //     title: "Oversized", path: "/oversized",
        //     dropdown: [
        //         { title: "Casual", path: "/men/casual" },
        //         { title: "Formal", path: "/men/formal" },
        //         // Add more sub-items as needed
        //     ],
        // },
        // { title: "Wishlist", path: "/wishlist" },
    ];


    return (
        // <div className='flex justify-between pt-2 font-bold'>
        //     <Link href="/trackorder" className="text-gray-600  flex cursor-pointer items-center px-4">
        //         <CiLocationOn className="text-3xl font-semibold mb-2" />
        //         <h2 className="text-sm font-semibold mb-2">TRACK YOUR ORDER</h2>
        //     </Link>

        //     {/* <div className='md:flex justify-between font-bold'>
        //         {user ? (
        //             <p className="text-gray-600 px-4 mb-2">Welcome back! Get Free Shipping On Every Order.</p>
        //         ) : (
        //             <Link href={"/loginEmail"} className='text-gray-600 flex cursor-pointer items-center max-w-screen-xl mx-auto px-4'>
        //                 <CiLocationOn className="text-3xl font-semibold mb-2" />
        //                 <h2 className="text-sm font-semibold mb-2">TRACK YOUR ORDER</h2>
        //             </Link>
        //         )}
        //     </div> */}

        //     {/* <p className="text-gray-600  px-4 mb-2">Get Free Shipping On Every Order</p> */}
        //     <div className="text-gray-600  px-4 mb-2">
        //         <Link href={"/loginEmail"} className='uppercase'>Login</Link>
        //         <span className='px-2'>|</span>
        //         <Link href={"/signup"} className='uppercase'>Sign Up</Link>

        //     </div>

        // </div>
        <>
            <nav className='bg-white w-full top-0 z-50 sticky'>
                <div className='items-center px-4 mx-auto md:px-8 flex'>

                    <div className="lg:hidden">
                        <button className="text-gray-700 outline-none p-2"
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
                    <div className="hidden md:flex py-3 lg:py-4">
                        <Link href="/">
                            <Image src="/zagard_svg.svg" width={150} height={50} alt="Brand Logo" />
                        </Link>
                    </div>
                    <div className='flex md:hidden justify-between items-center w-full'>
                        <div className="py-3 lg:py-4 ">
                            <Link href="/">
                                <Image src="/zagrad_logo.png" width={35} height={35} alt="Brand Logo" />
                            </Link>
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

                        <div className='flex items-center ml-auto'>
                            <ul className="flex justify-center items-center">
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="flex flex-col justify-center items-center px-1 font-semibold text-center border-none text-gray-600 hover:text-indigo-600 rounded-md focus:outline-none">
                                        <CgProfile className='cursor-pointer h-6 w-6' />Profile
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuLabel>My Profile</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>Profile</DropdownMenuItem>
                                        <DropdownMenuItem>Billing</DropdownMenuItem>
                                        <DropdownMenuItem>Team</DropdownMenuItem>
                                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                {/* <li className=" lg:ml-0">
                                    <Link
                                        href="/profile"
                                        className="flex flex-col justify-center items-center px-1 font-semibold text-center text-gray-600 hover:text-indigo-600 rounded-md "
                                    >
                                        <CgProfile className='cursor-pointer h-6 w-6' />
                                        Profile
                                    </Link>
                                </li> */}
                                <li className=" lg:ml-0 relative">
                                    <Link
                                        href="/wishlist"
                                        className="flex flex-col justify-center items-center px-1 font-semibold text-center text-gray-600 hover:text-indigo-600 rounded-md relative"
                                    >
                                        <CiHeart className='h-6 w-6' />
                                        <span className="absolute top-0 right-[22px] h-2 w-2 bg-red-500 rounded-full"></span>
                                        <span>Wishlist</span>
                                    </Link>
                                </li>
                                <li className="lg:ml-0 flex">
                                    <Link href="/cart" className='flex'>
                                        <Image className='cursor-pointer text-gray-700' src="/cart.svg" width={35} height={35} alt='cart' />
                                        <span className='relative right-[22px] z-10 text-red-500 font-semibold'>{quantity}</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={`flex-1 justify-start items-center flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${state ? 'h-screen pb-20 overflow-auto pr-4' : 'hidden'} gap-8`}>
                        <div>
                            <ul className="md:flex flex-col-reverse items-center gap-2 justify-center hidden space-x-0 lg:flex-row">
                                {/* {
                                navigation.map((item, idx) => {
                                    return (
                                        <li key={idx} className="text-gray-600 font-semibold hover:text-indigo-600">
                                            <Link href={item.path}>
                                                {item.title}
                                            </Link>
                                        </li>
                                    )
                                })
                            } */}

                                <DropdownMenu>
                                    <DropdownMenuTrigger className="flex flex-col justify-center items-center px-1 font-semibold text-center border-none text-gray-600 hover:text-indigo-600 rounded-md focus:outline-none">
                                        <CgProfile className='cursor-pointer h-6 w-6' />Profile
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuLabel>My Profile</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>Profile</DropdownMenuItem>
                                        <DropdownMenuItem>Billing</DropdownMenuItem>
                                        <DropdownMenuItem>Team</DropdownMenuItem>
                                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>



                                {/* <li className="mt-4 lg:mt-0 flex justify-center items-center">


                                    <Link href="/profile" className="flex flex-col justify-center items-center px-1 font-semibold text-center text-gray-600 hover:text-indigo-600 rounded-md ">
                                        <CgProfile className='cursor-pointer h-6 w-6' />
                                        Profile
                                    </Link>
                                </li> */}
                                <li className="mt-4 lg:mt-0 flex justify-center items-center relative">
                                    <Link href={"/wishlist"} className="flex flex-col justify-center items-center px-1 font-semibold text-center text-gray-600 hover:text-indigo-600 rounded-md relative">
                                        <CiHeart className='h-6 w-6' />
                                        <span className="absolute top-0 right-[22px] h-2 w-2 bg-red-500 rounded-full"></span>
                                        <span>Wishlist</span>
                                    </Link>
                                </li>


                                <li className="mt-4 lg:mt-0 flex">
                                    <Link href={"/cart"} className='flex w-16'>
                                        <Image className='cursor-pointer text-gray-700' src={"/cart.svg"} width={35} height={35} alt='cart' />
                                        <span className='relative right-[22px] z-10 text-red-500 font-semibold'>1</span>

                                    </Link>

                                </li>
                            </ul>
                        </div>

                        <ul className="justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className="text-gray-600 font-semibold">Men</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                                {men.map((men) => (
                                                    <ListItem
                                                        key={men.title}
                                                        title={men.title}
                                                        href={men.href}
                                                    >
                                                    </ListItem>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className="text-gray-600 font-semibold bg-none">Women</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                                {women.map((women) => (
                                                    <ListItem
                                                        key={women.title}
                                                        title={women.title}
                                                        href={women.href}
                                                    >
                                                    </ListItem>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem className="text-gray-600 font-semibold">
                                        <Link href="/anime" legacyBehavior passHref>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                Anime
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem className="text-gray-600 font-semibold">
                                        <Link href="/computergeek" legacyBehavior passHref>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                Computer Geek
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                            {/* {
                                navigation.map((item, idx) => {
                                    return (
                                        <li key={idx} className="text-gray-600 font-semibold">
                                            <Link href={item.path}>
                                                {item.title}
                                            </Link>
                                        </li>
                                    )
                                })
                            } */}
                        </ul>
                    </div>

                </div>
                <div className='flex md:hidden flex-1 mx-4'>
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
            </nav>
        </>
    );
};

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

export default Navbar;
