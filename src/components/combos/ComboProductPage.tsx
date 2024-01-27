"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "@/components/ProductPage.css"
import Link from 'next/link'
import NewReview from '@/components/review/NewReview'
import Reviews from '@/components/review/Review'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { AiOutlineSafety } from 'react-icons/ai'
import ComboTshirt from './ComboTshirt'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from '../ui/dialog'

type ProductPageProps = {
    title: String,
    description: String,
    price: String,
    availibility: "In Stock" | "Out of Stock"
}

const ProductPage = ({ title, description, price, availibility }: ProductPageProps) => {
    const ImgSRC = [
        "/assets/t1.png",
        "/assets/t2.png",
        "/assets/t3.png",
        "/assets/t4.png",

    ]
    const [imgUrl, setImgUrl] = useState<string>("/assets/t1.png");

    const changeImage = (item: string, imgUrl: string) => {
        let temp = item;
        item = imgUrl
        imgUrl = temp;
        setImgUrl(imgUrl)
    }
    return (
        <>
            <div className=" py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className=" md:flex-1 px-4">
                            <div className='hidden sm:block'>
                                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                    <Image className="w-full h-full object-cover" width={300} height={460} src={imgUrl} alt="Product Image" />
                                </div>

                                <div className='mb-4 flex gap-2 justify-center items-center'>
                                    {
                                        ImgSRC.map((item, idx) => {
                                            return (
                                                <Image onClick={() => {
                                                    changeImage(item, imgUrl)
                                                }} key={idx} className="object-cover cursor-pointer aspect-square" width={100} height={100} src={item} alt="Product Image" />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className='flex flex-row sm:hidden gap-2'>
                                <div className="h-[460px] w-[300px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                    <Image className="w-full h-full object-cover" width={300} height={460} src={imgUrl} alt="Product Image" />
                                </div>

                                <div className=''>
                                    {ImgSRC.map((item, idx) => (
                                        <Image
                                            onClick={() => {
                                                changeImage(item, imgUrl);
                                            }}
                                            key={idx}
                                            className="object-cover cursor-pointer aspect-square pb-2"
                                            width={100}
                                            height={100}
                                            src={item}
                                            alt={`Product Image ${idx + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>


                            <div className='hidden md:block'>
                                <div className="flex -mx-2 mb-4 sm:hidden md:flex">
                                    <div className="w-1/2 px-2">
                                        <button className="w-full bg-gray-900  text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 ">Buy Now</button>
                                    </div>
                                    <div className="w-1/2 px-2">
                                        <Link href={"/cart"}><button className="w-full bg-gray-200  text-gray-800  py-2 px-4 rounded-full font-bold hover:bg-gray-300 ">Add to Cart</button></Link>
                                    </div>
                                </div>
                            </div>

                            <div className='hidden md:block'>
                                <Image src={'/three.svg'} width={550} height={40} alt='.' />
                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{title}</h2>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                {description}
                            </p>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                                    <span className="text-gray-600 dark:text-gray-300">{price}</span>
                                </div>
                                <div>
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                                    <span className="text-gray-600 dark:text-gray-300">{availibility}</span>
                                </div>
                            </div>
                            <ComboTshirt />
                            <div className="w-24 pb-5">
                                <span className="font-bold text-gray-700 dark:text-gray-300">Quantity</span>
                                <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                    <button
                                        data-action="decrement"
                                        className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                                    >
                                        <span className="m-auto text-2xl font-thin">−</span>
                                    </button>
                                    <input
                                        type="number"
                                        className=" focus:outline-none text-center w-full bg-gray-50 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-900  outline-none custom-input-number"
                                        name="custom-input-number"
                                        value={0}
                                        readOnly
                                    ></input>
                                    <button
                                        data-action="increment"
                                        className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                                    >
                                        <span className="m-auto text-2xl font-thin">+</span>
                                    </button>
                                </div>
                            </div>
                            <div className="pb-4 product-information-container hidden md:block">
                                <div className='flex justify-between'>

                                    <h3 className="font-semibold text-18 md:text-22 pb-4 text-#1A1E31">Key Highlights</h3>
                                    <Dialog>
                                        <DialogTrigger className='font-bold text-black hover:underline'>Size Guide</DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogDescription>
                                                    <Table>
                                                        <TableCaption>Size and Measurement Chart</TableCaption>
                                                        <TableHeader>
                                                            <TableRow>
                                                                <TableHead className="w-[100px]">Size</TableHead>
                                                                <TableHead>Chest (in)</TableHead>
                                                                <TableHead>Front Length (in)</TableHead>
                                                                <TableHead >Across Shoulder (in)</TableHead>
                                                            </TableRow>
                                                        </TableHeader>
                                                        <TableBody>
                                                            <TableRow>
                                                                <TableCell className="font-medium">S</TableCell>
                                                                <TableCell>40.5</TableCell>
                                                                <TableCell>28.0</TableCell>
                                                                <TableCell>19.3</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell className="font-medium">M</TableCell>
                                                                <TableCell>40.5</TableCell>
                                                                <TableCell>28.0</TableCell>
                                                                <TableCell>19.3</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell className="font-medium">L</TableCell>
                                                                <TableCell>40.5</TableCell>
                                                                <TableCell>28.0</TableCell>
                                                                <TableCell>19.3</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell className="font-medium">XL</TableCell>
                                                                <TableCell>40.5</TableCell>
                                                                <TableCell>28.0</TableCell>
                                                                <TableCell>19.3</TableCell>
                                                            </TableRow>
                                                        </TableBody>
                                                    </Table>

                                                </DialogDescription>
                                            </DialogHeader>
                                        </DialogContent>
                                    </Dialog>


                                </div>
                                <div id="product-metafields-container" className="border-b-2 grid grid-cols-2 gap-x-24 lg:mt-34 product-metafields">

                                    <div className="product-metafields-values text-sm lg:text-base">
                                        <h4 className="text-#666875 capitalize text-gray-600 pb-2">Fit</h4>
                                        <p className="text-#000000 pb-2 border-b-2 font-normal">Oversized</p>
                                    </div>

                                    <div className="product-metafields-values  text-sm lg:text-base">
                                        <h4 className="text-#666875 capitalize text-gray-600 pb-2">Fabric</h4>
                                        <p className="text-#000000 pb-2 border-b-2 font-normal">100% Cotton</p>
                                    </div>

                                    <div className="product-metafields-values pt-4 text-sm lg:text-base">
                                        <h4 className="text-#666875 capitalize text-gray-600 pb-2">Sleeve Style</h4>
                                        <p className="text-#000000 pb-2 border-b-2 font-normal">Regular Sleeve</p>
                                    </div>

                                    <div className="product-metafields-values pt-4 text-sm lg:text-base">
                                        <h4 className="text-#666875 capitalize text-gray-600 pb-2">Length</h4>
                                        <p className="text-#000000 pb-2 border-b-2 font-normal">Regular</p>
                                    </div>

                                    <div className="product-metafields-values pt-4 text-sm lg:text-base">
                                        <h4 className="text-#666875 capitalize text-gray-600 pb-2">Pattern</h4>
                                        <p className="text-#000000 pb-2 font-normal">Graphic Print</p>
                                    </div>

                                    <div className="product-metafields-values pt-4 text-sm lg:text-base">
                                        <h4 className="text-#666875 capitalize text-gray-600 pb-2">Neck</h4>
                                        <p className="text-#000000 pb-2 font-normal">Round Neck</p>
                                    </div>

                                </div>
                            </div>


                            <div className='block md:hidden'>
                                <div className="flex -mx-2 mb-4 md:flex">
                                    <div className="w-1/2 px-2">
                                        <button className="w-full bg-gray-900  text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 ">Buy Now</button>
                                    </div>
                                    <div className="w-1/2 px-2">
                                        <Link href={"/cart"}><button className="w-full bg-gray-200  text-gray-800  py-2 px-4 rounded-full font-bold hover:bg-gray-300 ">Add to Cart</button></Link>
                                    </div>
                                </div>
                                <div className='block md:hidden pb-4'>
                                    <Image src={'/three.svg'} width={550} height={40} alt='.' />
                                </div>
                            </div>
                            <div className="pb-4 product-information-container block md:hidden">
                                <div className='flex justify-between'>

                                    <h3 className="font-semibold text-18 md:text-22 pb-4 text-#1A1E31">Key Highlights</h3>
                                    <Dialog>
                                        <DialogTrigger className='font-bold text-black hover:underline'>Size Guide</DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogDescription>
                                                    <Table>
                                                        <TableCaption>Size and Measurement Chart</TableCaption>
                                                        <TableHeader>
                                                            <TableRow>
                                                                <TableHead className="w-[100px]">Size</TableHead>
                                                                <TableHead>Chest (in)</TableHead>
                                                                <TableHead>Front Length (in)</TableHead>
                                                                <TableHead >Across Shoulder (in)</TableHead>
                                                            </TableRow>
                                                        </TableHeader>
                                                        <TableBody>
                                                            <TableRow>
                                                                <TableCell className="font-medium">S</TableCell>
                                                                <TableCell>40.5</TableCell>
                                                                <TableCell>28.0</TableCell>
                                                                <TableCell>19.3</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell className="font-medium">M</TableCell>
                                                                <TableCell>40.5</TableCell>
                                                                <TableCell>28.0</TableCell>
                                                                <TableCell>19.3</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell className="font-medium">L</TableCell>
                                                                <TableCell>40.5</TableCell>
                                                                <TableCell>28.0</TableCell>
                                                                <TableCell>19.3</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell className="font-medium">XL</TableCell>
                                                                <TableCell>40.5</TableCell>
                                                                <TableCell>28.0</TableCell>
                                                                <TableCell>19.3</TableCell>
                                                            </TableRow>
                                                        </TableBody>
                                                    </Table>

                                                </DialogDescription>
                                            </DialogHeader>
                                        </DialogContent>
                                    </Dialog>


                                </div>
                                <div id="product-metafields-container" className="border-b-2 grid grid-cols-2 gap-x-24 lg:mt-34 product-metafields">

                                    <div className="product-metafields-values text-sm lg:text-base">
                                        <h4 className="text-#666875 capitalize text-gray-600 pb-2">Fit</h4>
                                        <p className="text-#000000 pb-2 border-b-2 font-normal">Oversized</p>
                                    </div>

                                    <div className="product-metafields-values  text-sm lg:text-base">
                                        <h4 className="text-#666875 capitalize text-gray-600 pb-2">Fabric</h4>
                                        <p className="text-#000000 pb-2 border-b-2 font-normal">100% Cotton</p>
                                    </div>

                                    <div className="product-metafields-values pt-4 text-sm lg:text-base">
                                        <h4 className="text-#666875 capitalize text-gray-600 pb-2">Sleeve Style</h4>
                                        <p className="text-#000000 pb-2 border-b-2 font-normal">Regular Sleeve</p>
                                    </div>

                                    <div className="product-metafields-values pt-4 text-sm lg:text-base">
                                        <h4 className="text-#666875 capitalize text-gray-600 pb-2">Length</h4>
                                        <p className="text-#000000 pb-2 border-b-2 font-normal">Regular</p>
                                    </div>

                                    <div className="product-metafields-values pt-4 text-sm lg:text-base">
                                        <h4 className="text-#666875 capitalize text-gray-600 pb-2">Pattern</h4>
                                        <p className="text-#000000 pb-2 font-normal">Graphic Print</p>
                                    </div>

                                    <div className="product-metafields-values pt-4 text-sm lg:text-base">
                                        <h4 className="text-#666875 capitalize text-gray-600 pb-2">Neck</h4>
                                        <p className="text-#000000 pb-2 font-normal">Round Neck</p>
                                    </div>

                                </div>
                            </div>
                            <Tabs defaultValue="productdescription" className="w-[294px] lg:w-[400px]">
                                <TabsList>
                                    <TabsTrigger value="productdescription">Product Description</TabsTrigger>
                                    <TabsTrigger value="secureshopping">Secure Shopping</TabsTrigger>
                                    <TabsTrigger value="delivery">Delivery</TabsTrigger>
                                    {/* <TabsTrigger value="size">Size Guide</TabsTrigger> */}
                                </TabsList>
                                <TabsContent value="productdescription" className='text-gray-500'>
                                    <div className='py-2 flex justify-center items-center'>
                                        <Image src={"/original.png"} width={70} height={70} alt='original' />
                                        <p className='px-4 text-gray-500'><b className='text-black font-medium'> 100% ORIGINAL </b> guarantee for all products at zagrad</p>
                                    </div>
                                    Introducing our Urban Comfort Tee – the perfect blend of style and comfort. Crafted from premium 100% cotton, this t-shirt offers a soft, breathable feel for all-day wear. With a modern design, classic crew neck, and tailored fit, it's a versatile wardrobe essential. Choose from a range of vibrant colors and elevate your casual look effortlessly. Upgrade your comfort game with the Urban Comfort Tee – where fashion meets relaxation.</TabsContent>
                                <TabsContent value="secureshopping" className='text-gray-500'>
                                    <div className='flex items-center'>
                                        <AiOutlineSafety className='w-[65px] h-[65px] text-[#676b79]' />
                                        <p className='px-2 text-gray-500'><b className='text-black font-medium'> </b> Secure & Safe Payment</p>
                                    </div>
                                    Shop with confidence! Our secure shopping ensures your personal and financial information is protected with top-notch encryption technology. Your privacy and security are our priorities throughout the entire transaction process. Enjoy worry-free shopping online.</TabsContent>
                                <TabsContent value="delivery" className='text-gray-500'>
                                    <div className='flex items-center'>
                                        <Image src={"/returnAt.svg"} width={65} height={65} alt='original' />
                                        <p className='px-4 text-gray-500'><b className='text-black font-medium'> Return within 7days </b> of receiving your order</p>
                                    </div>
                                    Experience hassle-free delivery! We prioritize swift and reliable shipping to bring your order straight to your doorstep. Track your package in real-time and enjoy a seamless experience from purchase to receipt. Your satisfaction is our priority.</TabsContent>
                                {/* <TabsContent value="size">Change your size here.</TabsContent> */}
                            </Tabs>

                            {/* <div>
                                <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                    sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                                    lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                                    ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                                    sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                                </p>
                            </div> */}
                            {/* <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Size Guide</AccordionTrigger>
                                    <AccordionContent>
                                        <Table>
                                            <TableCaption>Size and Measurement Chart</TableCaption>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead className="w-[100px]">Size</TableHead>
                                                    <TableHead>Chest (in)</TableHead>
                                                    <TableHead>Front Length (in)</TableHead>
                                                    <TableHead >Across Shoulder (in)</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell className="font-medium">S</TableCell>
                                                    <TableCell>40.5</TableCell>
                                                    <TableCell>28.0</TableCell>
                                                    <TableCell>19.3</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className="font-medium">M</TableCell>
                                                    <TableCell>40.5</TableCell>
                                                    <TableCell>28.0</TableCell>
                                                    <TableCell>19.3</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className="font-medium">L</TableCell>
                                                    <TableCell>40.5</TableCell>
                                                    <TableCell>28.0</TableCell>
                                                    <TableCell>19.3</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className="font-medium">XL</TableCell>
                                                    <TableCell>40.5</TableCell>
                                                    <TableCell>28.0</TableCell>
                                                    <TableCell>19.3</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>

                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion> */}

                        </div>
                    </div>
                </div>
            </div>

            <div>
                {/* <h2 className="flex justify-center items-center text-2xl font-bold text-gray-800 dark:text-white mb-2">Related Products</h2> */}

                <section>
                    <div className='text-center'>
                        <h2 className='text-xl font-bold text-gray-900 sm:text-3xl'>Related Products</h2>
                    </div>
                    <div className="mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:items-stretch">
                            <Link href="#" className="group block">
                                <Image
                                    src="/assets/t1.png"
                                    alt=""
                                    className="aspect-square w-full rounded object-cover"
                                    width={450}
                                    height={350}
                                />

                                <div className="mt-3">
                                    <h3
                                        className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                    >
                                        Adventure T-Shirt
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-700">$150</p>
                                </div>
                            </Link>
                            <Link href="#" className="group block">
                                <Image
                                    src="/assets/t1.png"
                                    alt=""
                                    className="aspect-square w-full rounded object-cover"
                                    width={450}
                                    height={350}
                                />

                                <div className="mt-3">
                                    <h3
                                        className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                    >
                                        Adventure T-Shirt
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-700">$150</p>
                                </div>
                            </Link>
                            <Link href="#" className="group block">
                                <Image
                                    src="/assets/t1.png"
                                    alt=""
                                    className="aspect-square w-full rounded object-cover"
                                    width={450}
                                    height={350}
                                />

                                <div className="mt-3">
                                    <h3
                                        className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                    >
                                        Adventure T-Shirt
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-700">$150</p>
                                </div>
                            </Link>
                            <Link href="#" className="group block">
                                <Image
                                    src="/assets/t1.png"
                                    alt=""
                                    className="aspect-square w-full rounded object-cover"
                                    width={450}
                                    height={350}
                                />

                                <div className="mt-3">
                                    <h3
                                        className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                    >
                                        Adventure T-Shirt
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-700">$150</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>

            <NewReview />
            <hr />

            <div className="font-semibold pl-5">
                <h1 className="text-gray-500 review-title mb-6 mt-10 text-2xl">
                    Other Customers Reviews
                </h1>
                <Reviews />
            </div>
        </>
    )
}

export default ProductPage