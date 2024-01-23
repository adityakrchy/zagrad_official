import Link from "next/link";
import React from "react";

const Cart = () => {
  return (
    <>
      <section className="py-5 sm:py-7 bg-indigo-100">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-2">5 Item(s) in Cart</h2>
        </div>
      </section>


      <section className="py-10">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <main className="md:w-3/4">
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
              <article className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                <div>
                  <div className="flex flex-wrap lg:flex-row gap-5  mb-4">
                    <div className="w-full lg:w-2/5 xl:w-2/4">
                      <figure className="flex leading-5">
                        <div>
                          <div className="block w-16 h-16 rounded border border-gray-200 overflow-hidden">
                            <img src={"/logo192.png"} alt="Title" />
                          </div>
                        </div>
                        <figcaption className="ml-3">
                          <p>
                            <a href="#" className="hover:text-blue-600">
                              Product name
                            </a>
                          </p>
                          <p className="mt-1 text-gray-400"> Seller: Apple</p>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="w-24">
                      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                        <button
                          data-action="decrement"
                          className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                        >
                          <span className="m-auto text-2xl font-thin">−</span>
                        </button>
                        <input
                          type="number"
                          className="outline-none focus:outline-none text-center w-full bg-gray-50 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-900  outline-none custom-input-number"
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
                    <div>
                      <div className="leading-5">
                        <p className="font-semibold not-italic">$898</p>
                        <small className="text-gray-400">
                          {" "}
                          $98 / per item{" "}
                        </small>
                      </div>
                    </div>
                    <div className="flex-auto">
                      <div className="float-right">
                        <a className="px-4 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer">
                          Remove
                        </a>
                      </div>
                    </div>
                  </div>

                  <hr className="my-4" />
                </div>
                <div>
                  <div className="flex flex-wrap lg:flex-row gap-5  mb-4">
                    <div className="w-full lg:w-2/5 xl:w-2/4">
                      <figure className="flex leading-5">
                        <div>
                          <div className="block w-16 h-16 rounded border border-gray-200 overflow-hidden">
                            <img src={"/logo192.png"} alt="Title" />
                          </div>
                        </div>
                        <figcaption className="ml-3">
                          <p>
                            <a href="#" className="hover:text-blue-600">
                              Product name
                            </a>
                          </p>
                          <p className="mt-1 text-gray-400"> Seller: Apple</p>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="w-24">
                      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                        <button
                          data-action="decrement"
                          className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                        >
                          <span className="m-auto text-2xl font-thin">−</span>
                        </button>
                        <input
                          type="number"
                          className="outline-none focus:outline-none text-center w-full bg-gray-50 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-900  outline-none custom-input-number"
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
                    <div>
                      <div className="leading-5">
                        <p className="font-semibold not-italic">$898</p>
                        <small className="text-gray-400">
                          {" "}
                          $98 / per item{" "}
                        </small>
                      </div>
                    </div>
                    <div className="flex-auto">
                      <div className="float-right">
                        <a className="px-4 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer">
                          Remove
                        </a>
                      </div>
                    </div>
                  </div>

                  <hr className="my-4" />
                </div>
                <div>
                  <div className="flex flex-wrap lg:flex-row gap-5  mb-4">
                    <div className="w-full lg:w-2/5 xl:w-2/4">
                      <figure className="flex leading-5">
                        <div>
                          <div className="block w-16 h-16 rounded border border-gray-200 overflow-hidden">
                            <img src={"/logo192.png"} alt="Title" />
                          </div>
                        </div>
                        <figcaption className="ml-3">
                          <p>
                            <a href="#" className="hover:text-blue-600">
                              Product name
                            </a>
                          </p>
                          <p className="mt-1 text-gray-400"> Seller: Apple</p>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="w-24">
                      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                        <button
                          data-action="decrement"
                          className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                        >
                          <span className="m-auto text-2xl font-thin">−</span>
                        </button>
                        <input
                          type="number"
                          className="outline-none focus:outline-none text-center w-full bg-gray-50 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-900  outline-none custom-input-number"
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
                    <div>
                      <div className="leading-5">
                        <p className="font-semibold not-italic">$898</p>
                        <small className="text-gray-400">
                          {" "}
                          $98 / per item{" "}
                        </small>
                      </div>
                    </div>
                    <div className="flex-auto">
                      <div className="float-right">
                        <a className="px-4 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer">
                          Remove
                        </a>
                      </div>
                    </div>
                  </div>

                  <hr className="my-4" />
                </div>
                <div>
                  <div className="flex flex-wrap lg:flex-row gap-5  mb-4">
                    <div className="w-full lg:w-2/5 xl:w-2/4">
                      <figure className="flex leading-5">
                        <div>
                          <div className="block w-16 h-16 rounded border border-gray-200 overflow-hidden">
                            <img src={"/logo192.png"} alt="Title" />
                          </div>
                        </div>
                        <figcaption className="ml-3">
                          <p>
                            <a href="#" className="hover:text-blue-600">
                              Product name
                            </a>
                          </p>
                          <p className="mt-1 text-gray-400"> Seller: Apple</p>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="w-24">
                      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                        <button
                          data-action="decrement"
                          className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                        >
                          <span className="m-auto text-2xl font-thin">−</span>
                        </button>
                        <input
                          type="number"
                          className="outline-none focus:outline-none text-center w-full bg-gray-50 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-900  outline-none custom-input-number"
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
                    <div>
                      <div className="leading-5">
                        <p className="font-semibold not-italic">$898</p>
                        <small className="text-gray-400">
                          {" "}
                          $98 / per item{" "}
                        </small>
                      </div>
                    </div>
                    <div className="flex-auto">
                      <div className="float-right">
                        <a className="px-4 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer">
                          Remove
                        </a>
                      </div>
                    </div>
                  </div>

                  <hr className="my-4" />
                </div>
                <div>
                  <div className="flex flex-wrap lg:flex-row gap-5  mb-4">
                    <div className="w-full lg:w-2/5 xl:w-2/4">
                      <figure className="flex leading-5">
                        <div>
                          <div className="block w-16 h-16 rounded border border-gray-200 overflow-hidden">
                            <img src={"/logo192.png"} alt="Title" />
                          </div>
                        </div>
                        <figcaption className="ml-3">
                          <p>
                            <a href="#" className="hover:text-blue-600">
                              Product name
                            </a>
                          </p>
                          <p className="mt-1 text-gray-400"> Seller: Apple</p>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="w-24">
                      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                        <button
                          data-action="decrement"
                          className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                        >
                          <span className="m-auto text-2xl font-thin">−</span>
                        </button>
                        <input
                          type="number"
                          className="outline-none focus:outline-none text-center w-full bg-gray-50 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-900  outline-none custom-input-number"
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
                    <div>
                      <div className="leading-5">
                        <p className="font-semibold not-italic">$898</p>
                        <small className="text-gray-400">
                          {" "}
                          $98 / per item{" "}
                        </small>
                      </div>
                    </div>
                    <div className="flex-auto">
                      <div className="float-right">
                        <a className="px-4 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer">
                          Remove
                        </a>
                      </div>
                    </div>
                  </div>

                  <hr className="my-4" />
                </div>
                <div>
                  <div className="flex flex-wrap lg:flex-row gap-5  mb-4">
                    <div className="w-full lg:w-2/5 xl:w-2/4">
                      <figure className="flex leading-5">
                        <div>
                          <div className="block w-16 h-16 rounded border border-gray-200 overflow-hidden">
                            <img src={"/logo192.png"} alt="Title" />
                          </div>
                        </div>
                        <figcaption className="ml-3">
                          <p>
                            <a href="#" className="hover:text-blue-600">
                              Product name
                            </a>
                          </p>
                          <p className="mt-1 text-gray-400"> Seller: Apple</p>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="w-24">
                      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                        <button
                          data-action="decrement"
                          className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                        >
                          <span className="m-auto text-2xl font-thin">−</span>
                        </button>
                        <input
                          type="number"
                          className="outline-none focus:outline-none text-center w-full bg-gray-50 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-900  outline-none custom-input-number"
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
                    <div>
                      <div className="leading-5">
                        <p className="font-semibold not-italic">$898</p>
                        <small className="text-gray-400">
                          {" "}
                          $98 / per item{" "}
                        </small>
                      </div>
                    </div>
                    <div className="flex-auto">
                      <div className="float-right">
                        <a className="px-4 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer">
                          Remove
                        </a>
                      </div>
                    </div>
                  </div>

                  <hr className="my-4" />
                </div>
                <div>
                  <div className="flex flex-wrap lg:flex-row gap-5  mb-4">
                    <div className="w-full lg:w-2/5 xl:w-2/4">
                      <figure className="flex leading-5">
                        <div>
                          <div className="block w-16 h-16 rounded border border-gray-200 overflow-hidden">
                            <img src={"/logo192.png"} alt="Title" />
                          </div>
                        </div>
                        <figcaption className="ml-3">
                          <p>
                            <a href="#" className="hover:text-blue-600">
                              Product name
                            </a>
                          </p>
                          <p className="mt-1 text-gray-400"> Seller: Apple</p>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="w-24">
                      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                        <button
                          data-action="decrement"
                          className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                        >
                          <span className="m-auto text-2xl font-thin">−</span>
                        </button>
                        <input
                          type="number"
                          className="outline-none focus:outline-none text-center w-full bg-gray-50 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-900  outline-none custom-input-number"
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
                    <div>
                      <div className="leading-5">
                        <p className="font-semibold not-italic">$898</p>
                        <small className="text-gray-400">
                          {" "}
                          $98 / per item{" "}
                        </small>
                      </div>
                    </div>
                    <div className="flex-auto">
                      <div className="float-right">
                        <a className="px-4 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer">
                          Remove
                        </a>
                      </div>
                    </div>
                  </div>

                  <hr className="my-4" />
                </div>
              </article>
            </main>
            <aside className="md:w-1/4">
              <article className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>

                <div className="py-3.5">
                  <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                  <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full border" />
                </div>
                <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white mb-5 uppercase">Apply</button>
                <ul className="mb-5">
                  <div className="flex text-lg font-bold justify-between mb-2">
                    <span className="text-lg font-bold uppercase">Price Details {"3"}</span>
                  </div>
                  <div className="flex text-lg font-bold justify-between mt-1 mb-1">
                    <span className="text-sm">Total MRP</span>
                    <span className="text-sm">50$</span>
                  </div>
                  <div className="flex text-lg font-bold justify-between mt-1 mb-1">
                    <span className="text-sm">Discount on MRP</span>
                    <span className="text-sm">5$</span>
                  </div>
                  <div className="flex text-lg font-bold justify-between mt-1 mb-1">
                    <span className="text-sm">Coupon Discount</span>
                    <span className="text-sm">0$</span>
                  </div>
                  <div className="flex text-lg font-bold justify-between mt-1 mb-1">
                    <span className="text-sm">Shipping Fee</span>
                    <span className="text-sm">10$</span>
                  </div>
                  <li className="text-lg font-bold border-t flex justify-between mt-3 pt-3">
                    <span>Total price:</span>
                    <span>$898</span>
                  </li>
                </ul>

                <a className="px-4 py-3 mb-2 inline-block text-lg w-full text-center font-medium text-white bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-600 cursor-pointer">
                  Continue
                </a>

                <Link
                  href="/"
                  className="px-4 py-3 inline-block text-lg w-full text-center font-medium text-indigo-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100"
                >
                  Back to shop
                </Link>
              </article>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
