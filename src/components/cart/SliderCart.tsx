import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import Image from 'next/image'
import { ScrollArea } from '../ui/scroll-area'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import Link from 'next/link'

const SliderCart = () => {
    return (
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
                                                            <Link href="#">Throwback Hip Bag</Link>
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
                                                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline">Remove</button>
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
                                                            <Link href="#">Throwback Hip Bag</Link>
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
                                                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline">Remove</button>
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
                                                            <Link href="#">Throwback Hip Bag</Link>
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
                                                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline">Remove</button>
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
                                                            <Link href="#">Throwback Hip Bag</Link>
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
                                                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline">Remove</button>
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
                                                            <Link href="#">Throwback Hip Bag</Link>
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
                                                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline">Remove</button>
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
                                                            <Link href="#">Throwback Hip Bag</Link>
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
                                                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline">Remove</button>
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
                                                            <Link href="#">Throwback Hip Bag</Link>
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
                                                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline">Remove</button>
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
                                                            <Link href="#">Throwback Hip Bag</Link>
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
                                                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline">Remove</button>
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
                <SheetFooter className='border-t-2 pt-2  w-full'>
                    <div className='flex flex-col gap-4'>
                        <div className="">
                            <div className='flex justify-between text-base font-medium text-gray-900'>
                                <h3>
                                    <Link href="#">Subtotal</Link>
                                </h3>
                                <p className="ml-4">$90.00</p>
                            </div>
                            <p>*Shipping and taxes calculated at checkout.</p>
                        </div>
                        <div>
                        </div>
                        {/* <button className='bg-indigo-500 hover:bg-indigo-600 px-6 py-4 text-white font-semibold rounded w-full'>Checkout</button> */}
                        <Link href={"/cart"} className='bg-indigo-500 px-6 py-4 flex justify-center items-center text-white font-semibold rounded w-full'>
                            Checkout
                        </Link>
                    </div>
                </SheetFooter>
            </SheetContent>

        </Sheet>
    )
}

export default SliderCart