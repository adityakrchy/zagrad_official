"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "@/components/ProductPage.css"
import Link from 'next/link'
import NewReview from './review/NewReview'
import Reviews from './review/Review'

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
                        <div className="md:flex-1 px-4">
                            {/* <div>
                                <Image src="/assets/t3.png" width={200} height={200} alt='' />
                            </div> */}
                            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <Image className="w-full h-full object-cover" width={300} height={460} src={imgUrl} alt="Product Image" />
                            </div>
                            <div className='mb-4 flex gap-2 justify-center items-center'>
                                {/* <Image onClick={changeImage} className="object-cover" width={100} height={100} src="/assets/t1.png" alt="Product Image" />
                                <Image className="object-cover" width={100} height={100} src={ImgSRC[0].t1} alt="Product Image" />
                                <Image className="object-cover" width={100} height={100} src="/assets/t3.png" alt="Product Image" />
                                <Image className="object-cover" width={100} height={100} src="/assets/t4.png" alt="Product Image" /> */}
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
                            <div className="flex -mx-2 mb-4 sm:hidden md:flex">
                                <div className="w-1/2 px-2">
                                    <button className="w-full bg-gray-900  text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 ">Buy Now</button>
                                </div>
                                <div className="w-1/2 px-2">
                                    <Link href={"/cart"}><button className="w-full bg-gray-200  text-gray-800  py-2 px-4 rounded-full font-bold hover:bg-gray-300 ">Add to Cart</button></Link>
                                </div>
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
                            <div className="mb-4">
                                <span className="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
                                <div className="flex items-center mt-2">
                                    <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                                    <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                                    <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                                    <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
                                <div className="flex items-center mt-2">
                                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S</button>
                                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M</button>
                                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
                                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
                                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="font-bold text-gray-700 dark:text-gray-300">Quantity:</span>
                                <div className="flex items-center mt-2">
                                    <input type="number" value={1} className='w-16 border-4 pl-2 rounded-2xl custom-number-input' />
                                </div>
                            </div>
                            <div className="flex -mx-2 mb-4 sm:flex md:hidden">
                                <div className="w-1/2 px-2">
                                    <button className="w-full bg-gray-900  text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 ">Buy Now</button>
                                </div>
                                <div className="w-1/2 px-2">
                                    <Link className='w-full bg-gray-200  text-gray-800  py-2 px-4 rounded-full font-bold hover:bg-gray-300' href={"/cart"}>Add to Cart</Link>
                                </div>
                            </div>
                            <div>
                                <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                    sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                                    lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                                    ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                                    sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                                </p>
                            </div>
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
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4 lg:items-stretch">

                            {/* <div className=" lg:col-span-2 lg:py-8">
                                <ul className="procductRes grid grid-cols-4 gap-4">
                                    <li>
                                        
                                    </li>

                                    <li>
                                        <Link href="#" className="group block">
                                            <Image
                                                src="/assets/t2.png"
                                                alt=""
                                                width={1280}
                                                height={500}
                                                className="aspect-square w-full rounded object-cover"
                                            />

                                            <div className="mt-3">
                                                <h3
                                                    className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                                >
                                                    Just Keep moving T-Shirt
                                                </h3>

                                                <p className="mt-1 text-sm text-gray-700">$150</p>
                                            </div>
                                        </Link>
                                    </li>

                                    <li>
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
                                    </li>

                                    <li>
                                        <Link href="#" className="group block">
                                            <Image
                                                src="/assets/t2.png"
                                                alt=""
                                                width={1280}
                                                height={500}
                                                className="aspect-square w-full rounded object-cover"
                                            />

                                            <div className="mt-3">
                                                <h3
                                                    className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                                >
                                                    Just Keep moving T-Shirt
                                                </h3>

                                                <p className="mt-1 text-sm text-gray-700">$150</p>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div> */}

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

            <div className="font-semibold">
                <h1 className="text-gray-500 review-title mb-6 mt-10 text-2xl">
                    Other Customers Reviews
                </h1>
                <Reviews />
            </div>
        </>
    )
}

export default ProductPage