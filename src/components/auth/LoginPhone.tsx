"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const LoginPhone = () => {
    const [otpReceived, setOtpReceived] = useState<boolean>(false)
    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Login
                            </h1>
                            <hr />
                            <form className="space-y-4 md:space-y-6">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Mobile Phone Number</label>
                                    <input type="number" name="number" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Phone Number" required />
                                </div>
                                <div className='mx-auto max-w-sm mt-20 hidden'>
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">OTP Verification</h1>
                                    <form action="" className=' px-4 py-6'>
                                        <div className='flex justify-center gap-2 mb-6'>
                                            <input className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500" type="text" maxLength={1} pattern="[0-9]" inputMode="numeric" autoComplete="one-time-code" required />
                                            <input className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500" type="text" maxLength={1} pattern="[0-9]" inputMode="numeric" autoComplete="one-time-code" required />
                                            <input className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500" type="text" maxLength={1} pattern="[0-9]" inputMode="numeric" autoComplete="one-time-code" required />
                                            <input className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500" type="text" maxLength={1} pattern="[0-9]" inputMode="numeric" autoComplete="one-time-code" required />
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                                Verify
                                            </button>
                                            <a className="inline-block align-baseline font-bold text-sm text-indigo-500 hover:text-indigo-800 ml-4" href="#">
                                                Resend OTP
                                            </a>
                                        </div>
                                    </form>

                                </div>
                                <button type="submit" onClick={()=>{console.log("Button cliicked")}} className="w-full text-white bg-indigo-500 hover:bg-indigo-600 hover:shadow-form focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Get OTP</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <Link href="/signup" className="font-medium text-indigo-500 hover:underline dark:text-primary-500">Sign up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoginPhone