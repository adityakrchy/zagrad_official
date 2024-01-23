import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ImageCollection = () => {
    return (
        <section>
            <div className='text-center pt-6'>
                <h2 className='text-xl font-bold text-gray-900 sm:text-3xl'>Featured Collection</h2>
            </div>
            <div className="mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                    <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
                        <div className="mx-auto max-w-md text-center lg:text-left">
                            <header>
                                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Top Designs</h2>

                                <p className="mt-4 text-gray-500">

                                    Discover style&apos;s zenith in our Top Designs! From bold graphics to elegant patterns, find tees that speak volumes silently.
                                </p>
                            </header>

                            <Link
                                href="/allproduct"
                                className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                            >
                                Shop All
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-2 lg:py-8">
                        <ul className="grid grid-cols-2 gap-4">
                            <li>
                                <Link href="/featuredcollectionwomen" className="group block">
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

                                        <p className="mt-1 text-sm text-gray-700">Start from 499</p>
                                    </div>
                                </Link>
                            </li>

                            <li>
                                <Link href="/featuredcollectionmen" className="group block">
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

                                        <p className="mt-1 text-sm text-gray-700">Start from 449</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ImageCollection