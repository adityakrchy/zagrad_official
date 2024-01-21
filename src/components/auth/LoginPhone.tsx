"use client"
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { handleKeyPressForInput } from '@/lib/constants'

const LoginPhone = () => {
    const [otpReceived, setOtpReceived] = useState<boolean>(false)
    const handleOTP = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("Button clicked")
        setOtpReceived(true);
    }

    const inputRefs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

    const handleInputChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        // Move to the next input field if the current input has a value
        if (value && index < inputRefs.length - 1) {
            const nextInputRef = inputRefs[index + 1];
            if (nextInputRef.current) {
                nextInputRef.current.focus();
            }
        } else if (!value && index > 0) {
            // Move back to the previous input field if the current input is empty
            const prevInputRef = inputRefs[index - 1];
            if (prevInputRef.current) {
                prevInputRef.current.focus();
            }
        }
    };




    const handleKeyPress = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        // Allow only numeric key presses (0-9)
        const numericRegex = /^[0-9]$/;
        const isBackspace = e.key === 'Backspace';

        const isValidInput = numericRegex.test(e.key) || isBackspace;

        if (!isValidInput) {
            e.preventDefault();
        }

        if (isBackspace && index > 0 && !e.currentTarget.value) {
            const prevInputRef = inputRefs[index - 1];
            if (prevInputRef.current) {
                prevInputRef.current.focus();
            }
        }
    };

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
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile Number</label>
                                    <div className="relative">
                                        <span className="absolute left-2.5 top-2.5 text-gray-600 dark:text-gray-400">+91 |</span>
                                        <input
                                            onKeyPress={handleKeyPressForInput}
                                            // type='tel'
                                            type="text"
                                            name="number"
                                            autoComplete="new-number"
                                            id="number"
                                            className="bg-gray-50 mobileNumberInput border border-gray-300 text-gray-900 sm:text-sm rounded-lg pl-16 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Mobile Number*"
                                            pattern="[0-9]*"
                                            maxLength={10}
                                            inputMode="numeric"
                                            title="Please enter only numeric characters."
                                            required
                                        />
                                    </div>



                                    {/* <input type="text" name="number" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Phone Number" required /> */}
                                    {/* <div>

                                        <input
                                            onKeyPress={handleKeyPressForInput}
                                            type="text"
                                            name="number"
                                            autoComplete=''
                                            id="number"
                                            className="bg-gray-50 mobileNumberInput border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Enter Your Phone Number"
                                            pattern="[0-9]*"
                                            maxLength={10}
                                            inputMode="numeric"
                                            title="Please enter only numeric characters."
                                            required
                                        />
                                        <span>+91
                                            <span>|</span>
                                            <span>Mobile Number<span>*</span></span>
                                        </span>
                                    </div> */}
                                    {/* <div className="form-group ">
                                        <input autoComplete="new-password" id="" type="tel" className="form-control mobileNumberInput" placeholder="" maxLength={10} value="" />
                                        <span className="placeholderAlternative mobileNumber">
                                        +91
                                        <span className="padding: 0px 10px; position: relative; bottom: 1px;">|</span><span className="mobileNumberPlacholder">Mobile Number<span className="color: rgb(255, 87, 34);">*</span></span> </span><i className="bar"></i></div> */}

                                </div>
                                {otpReceived && otpReceived ? (<div className='mx-auto max-w-sm mt-20 rounded '>
                                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                        OTP verification
                                    </h1>
                                    <div className='flex justify-center gap-2 mb-6'>
                                        {Array.from({ length: 4 }, (_, index) => (
                                            <input
                                                key={index}
                                                ref={inputRefs[index]}
                                                className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
                                                type="text"
                                                maxLength={1}
                                                pattern="[0-9]"
                                                inputMode="numeric"
                                                name={`otp${index + 1}`}
                                                autoComplete="one-time-code"
                                                onChange={(e) => handleInputChange(index, e)}
                                                onKeyPress={(e) => handleKeyPress(index, e)}
                                            />
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                            Verify
                                        </button>
                                        <a className="inline-block align-baseline font-bold text-sm text-indigo-500 hover:text-indigo-800 ml-4" href="#">
                                            Resend OTP
                                        </a>
                                    </div>
                                </div>) : (
                                    <div className='mx-auto max-w-sm mt-20 rounded hidden'>
                                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                            OTP verification
                                        </h1>
                                        <div className='flex justify-center gap-2 mb-6'>
                                            <input className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500" type="text" maxLength={1} pattern="[0-9]" inputMode="numeric" name='otp1' autoComplete="one-time-code" />
                                            <input className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500" type="text" maxLength={1} pattern="[0-9]" inputMode="numeric" name='otp2' autoComplete="one-time-code" />
                                            <input className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500" type="text" maxLength={1} pattern="[0-9]" inputMode="numeric" name='otp3' autoComplete="one-time-code" />
                                            <input className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500" type="text" maxLength={1} pattern="[0-9]" inputMode="numeric" name='otp4' autoComplete="one-time-code" />
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                                Verify
                                            </button>
                                            <a className="inline-block align-baseline font-bold text-sm text-indigo-500 hover:text-indigo-800 ml-4" href="#">
                                                Resend OTP
                                            </a>
                                        </div>
                                    </div>
                                )}
                                {otpReceived && otpReceived ? (<button type="submit" onClick={(e) => handleOTP(e)} className="w-full text-white bg-indigo-500 hover:bg-indigo-600 hover:shadow-form focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 hidden" >Get OTP</button>) : (<button type="submit" onClick={(e) => handleOTP(e)} className="w-full text-white bg-indigo-500 hover:bg-indigo-600 hover:shadow-form focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" >Get OTP</button>)}
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