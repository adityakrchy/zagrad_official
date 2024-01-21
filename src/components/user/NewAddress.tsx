'use client'
import React from "react";
// import Sidebar from "../layout/Sidebar";
import Sidebar from "@/components/layout/Sidebar"
import { handleKeyPressForInput } from '@/lib/constants'
import { countries } from "countries-list";

const indianStates = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
];

const NewAddress = () => {
  const countriesList = Object.values(countries);

  return (
    <>
      <section className="py-10">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row -mx-4">
            <Sidebar />
            <main className="md:w-2/3 lg:w-3/4 px-4">
              <div
                style={{ maxWidth: "480px" }}
                className="mt-1 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg"
              >
                <form>
                  <h2 className="mb-5 text-2xl font-semibold">
                    Add new Address
                  </h2>

                  <div className="mb-4 md:col-span-2">
                    <label className="block mb-1"> Address* </label>
                    <input
                      className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                      type="text"
                      placeholder="Type your address"
                      required
                    />
                  </div>
                  <div className="mb-4 md:col-span-2">
                    <label className="block mb-1"> Email* </label>
                    <input
                      className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                      type="email"
                      placeholder="Type your Email"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-x-3">
                    <div className="mb-4 md:col-span-1">
                      <label className="block mb-1"> City </label>
                      <input
                        className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                        type="text"
                        placeholder="Type your city"
                        required
                      />
                    </div>

                    {/* <div className="mb-4 md:col-span-1">
                      <label className="block mb-1"> State </label>
                      <input
                        className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                        type="text"
                        placeholder="Type state here"
                        required
                      />
                    </div> */}
                    <div className="mb-4 md:col-span-1">
                      <label className="block mb-1">State</label>
                      <select
                        className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                        required
                      >
                        {/* Default/placeholder option */}
                        <option value="" disabled selected>
                          Select a State
                        </option>

                        {/* Options for Indian states */}
                        {indianStates.map((state) => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-x-2">
                    <div className="mb-4 md:col-span-1">
                      <label className="block mb-1"> ZIP code </label>
                      <input
                        onKeyPress={handleKeyPressForInput}
                        className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                        type="text"
                        placeholder="Type zip code here"
                        maxLength={6}
                        required
                      />
                    </div>

                    <div className="mb-4 md:col-span-1">
                      <label className="block mb-1"> Mobile Number </label>
                      <div className="relative">
                        <span className="absolute left-2.5 top-2.5 text-gray-600 dark:text-gray-400">+91 |</span>
                        <input
                          onKeyPress={handleKeyPressForInput}
                          // type="tel"
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
                    </div>
                  </div>

                  {/* <div className="mb-4 md:col-span-2">
                    <label className="block mb-1"> Country </label>
                    <select className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full">
                      {countriesList.map((country) => (
                        <option key={country.name} value={country.name}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div> */}
                  <div className="mb-4 md:col-span-2">
                    <label className="block mb-1">Country</label>
                    <select className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full" required>
                      {/* Default/placeholder option */}
                      <option value="" disabled selected>
                        Select a Country
                      </option>

                      {/* Options from the countriesList */}
                      {countriesList.map((country) => (
                        <option key={country.name} value={country.name}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>


                  <button
                    type="submit"
                    className="my-2 px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                  >
                    Add
                  </button>
                </form>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewAddress;
