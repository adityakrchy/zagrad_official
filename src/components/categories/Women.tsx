import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Women = () => {
  return (
    <>
    {/* <Link href="#" className="group relative block">
            <div className="relative h-[350px] sm:h-[450px]">
                <Image
                    src="/assets/t1.png"
                    alt=""
                    width={450}
                    height={350}
                    className="rounded absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                />

                <Image
                    src="/assets/t4.png"
                    alt=""
                    width={450}
                    height={350}
                    className="rounded absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                />
            </div>

            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">Skinny Jeans Blue</h3>

                <p className="mt-1.5 max-w-[40ch] text-xs text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi dicta impedit
                    aperiam ipsum!
                </p>

                <span
                    className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                >
                    Shop Now
                </span>
            </div>
        </Link> */}
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

                            {/* <li className='pb-5'>
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
                            </li> */}
                        </ul>
                    </div>
    </>
    
  )
}

export default Women