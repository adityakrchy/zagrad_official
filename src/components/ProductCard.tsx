import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const ProductCard = () => {
    return (
        <div className="">
            <ul className="">
                <li className='pb-5'>
                    <Link href="/productpage" className="group block">
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

                <li className='pb-5'>
                    <Link href="/productpage" className="group block">
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
        </div>
    )
}

export default ProductCard