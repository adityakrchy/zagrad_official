"use client"
import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from 'next/link'
import Image from 'next/image'


const NewCart = () => {
    return (
        <>
            <div className="container mx-auto mt-10">
                <div className="flex shadow-md my-10">
                    <div className="w-3/4 bg-white px-10 py-10">
                        <div>
                            {/* <div className="pb-5">
                                <h1 className="font-semibold text-2xl">Address</h1>
                                <div className='flex justify-between border p-4 rounded-lg'>
                                    <div>
                                        <p>Deliver to: {"Name, Pincode"}</p>
                                        <p>{"Address"}</p>
                                    </div>
                                    <div className='flex items-center justify-center' >
                                        <Link className='border-2 border-indigo-600 px-4 text-indigo-600 py-2 font-bold' href={"/shipping"}>Change Address</Link>
                                    </div>
                                </div>
                            </div> */}

                                <div className="pb-5">
                                    <h1 className="font-semibold text-2xl">Address</h1>
                                    <div className='flex flex-col md:flex-row justify-between border p-4 rounded-lg'>
                                        <div className="mb-4 md:mb-0">
                                            <p>Deliver to: {"Name, Pincode"}</p>
                                            <p>{"Address"}</p>
                                        </div>
                                        <div className='flex items-center justify-center md:ml-4'>
                                            <Link className='border-2 border-indigo-600 px-4 text-indigo-600 py-2 font-bold' href={"/shipping"}>Change Address</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between border-b pb-8">
                                    <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                                    <h2 className="font-semibold text-2xl">3 Items</h2>
                                </div>
                                <div className="flex mt-10 mb-5">
                                    <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                                    <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                                    <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                                    <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                                </div>
                                <ScrollArea className="h-80 max-w-1600 rounded-md border">
                                    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                        <div className="flex w-2/5">
                                            <div className="w-20 pl-5">
                                                <img className="rounded-lg h-20" src={"/assets/t1.png"} alt="" />
                                            </div>
                                            <div className="flex flex-col justify-between ml-4 flex-grow">
                                                <span className="font-bold text-sm">Printed T-Shirt</span>
                                                <span className="text-black-200 text-xs">Size <span className='text-red-500'>M</span></span>
                                                <Link href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</Link>
                                            </div>
                                        </div>
                                        <div className="flex justify-center w-1/5">
                                            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                            </svg>

                                            <input className="mx-2 border text-center w-8" type="text" value="1" onChange={() => { }} />

                                            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                            </svg>
                                        </div>
                                        <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
                                        <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
                                    </div>

                                    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                        <div className="flex w-2/5">
                                            <div className="w-20 pl-5">
                                                <img className="rounded-lg h-20" src={"/assets/t1.png"} alt="" />
                                            </div>
                                            <div className="flex flex-col justify-between ml-4 flex-grow">
                                                <span className="font-bold text-sm">Printed T-Shirt</span>
                                                <span className="text-black-200 text-xs">Size <span className='text-red-500'>M</span></span>
                                                <Link href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</Link>
                                            </div>
                                        </div>
                                        <div className="flex justify-center w-1/5">
                                            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                            </svg>

                                            <input className="mx-2 border text-center w-8" type="text" value="1" onChange={() => { }} />

                                            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                            </svg>
                                        </div>
                                        <span className="text-center w-1/5 font-semibold text-sm">$40.00</span>
                                        <span className="text-center w-1/5 font-semibold text-sm">$40.00</span>
                                    </div>

                                    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                        <div className="flex w-2/5">
                                            <div className="w-20 pl-5">
                                                <img className="rounded-lg h-20" src={"/assets/t1.png"} alt="" />
                                            </div>
                                            <div className="flex flex-col justify-between ml-4 flex-grow">
                                                <span className="font-bold text-sm">Printed T-Shirt</span>
                                                <span className="text-black-200 text-xs">Size <span className='text-red-500'>M</span></span>
                                                <Link href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</Link>
                                            </div>
                                        </div>
                                        <div className="flex justify-center w-1/5">
                                            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                            </svg>

                                            <input className="mx-2 border text-center w-8" type="text" value="1" onChange={() => { }} />

                                            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                            </svg>
                                        </div>
                                        <span className="text-center w-1/5 font-semibold text-sm">$40.00</span>
                                        <span className="text-center w-1/5 font-semibold text-sm">$40.00</span>
                                    </div>

                                    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                        <div className="flex w-2/5">
                                            <div className="w-20 pl-5">
                                                <img className="rounded-lg h-20" src={"/assets/t1.png"} alt="" />
                                            </div>
                                            <div className="flex flex-col justify-between ml-4 flex-grow">
                                                <span className="font-bold text-sm">Printed T-Shirt</span>
                                                <span className="text-black-200 text-xs">Size <span className='text-red-500'>M</span></span>
                                                <Link href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</Link>
                                            </div>
                                        </div>
                                        <div className="flex justify-center w-1/5">
                                            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                            </svg>

                                            <input className="mx-2 border text-center w-8" type="text" value="1" onChange={() => { }} />

                                            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                            </svg>
                                        </div>
                                        <span className="text-center w-1/5 font-semibold text-sm">$40.00</span>
                                        <span className="text-center w-1/5 font-semibold text-sm">$40.00</span>
                                    </div>

                                    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                        <div className="flex w-2/5">
                                            <div className="w-20 pl-5">
                                                <img className="rounded-lg h-20" src={"/assets/t1.png"} alt="" />
                                            </div>
                                            <div className="flex flex-col justify-between ml-4 flex-grow">
                                                <span className="font-bold text-sm">Printed T-Shirt</span>
                                                <span className="text-black-200 text-xs">Size <span className='text-red-500'>M</span></span>
                                                <Link href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</Link>
                                            </div>
                                        </div>
                                        <div className="flex justify-center w-1/5">
                                            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                            </svg>
                                            <input className="mx-2 border text-center w-8" type="text" value="1" onChange={() => { }} />

                                            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                            </svg>
                                        </div>
                                        <span className="text-center w-1/5 font-semibold text-sm">$150.00</span>
                                        <span className="text-center w-1/5 font-semibold text-sm">$150.00</span>
                                    </div>
                                </ScrollArea>

                            </div>


                            <div className='w-40'>
                                <Link href="/" className="flex font-semibold text-indigo-600 text-sm mt-10">

                                    <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                                    Continue Shopping
                                </Link>
                            </div>
                        </div>

                        <div id="summary" className="bg-[#f6f6f6] w-1/4 px-8 py-10">
                            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>

                            <div className="py-3.5">
                                <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                                <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
                            </div>
                            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white mb-36 uppercase">Apply</button>
                            <div className="flex justify-between mt-10 mb-5">
                                <span className="font-semibold text-sm uppercase">Price Details {"3"}</span>
                            </div>
                            <div className="flex justify-between mt-1 mb-1">
                                <span className="text-sm">Total MRP</span>
                                <span className="text-sm">50$</span>
                            </div>
                            <div className="flex justify-between mt-1 mb-1">
                                <span className="text-sm">Discount on MRP</span>
                                <span className="text-sm">5$</span>
                            </div>
                            <div className="flex justify-between mt-1 mb-1">
                                <span className="text-sm">Coupon Discount</span>
                                <span className="text-sm">0$</span>
                            </div>
                            <div className="flex justify-between mt-1 mb-1">
                                <span className="text-sm">Shipping Fee</span>
                                <span className="text-sm">10$</span>
                            </div>
                            <div className="border-t mt-8">
                                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                    <span>Total cost</span>
                                    <span>$600</span>
                                </div>
                                <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Place Order</button>
                            </div>
                        </div>

                    </div>
                </div>

            </>
            )
}

            export default NewCart