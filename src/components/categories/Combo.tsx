'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa';

const Combo = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  // Array of image URLs
  const imageUrls = [
      '/assets/t1.png',
      '/assets/t2.png',
      '/assets/t3.png',
      '/assets/t4.png',
      // Add more URLs as needed
  ];

  useEffect(() => {
      let interval: string | number | NodeJS.Timeout | undefined;

      if (isHovered) {
          interval = setInterval(() => {
              setImageIndex((prevIndex: number) => (prevIndex + 1) % imageUrls.length);
          }, 2000);
      }

      return () => {
          clearInterval(interval);
      };
  }, [isHovered, imageIndex, imageUrls]);

  return (
      <div
          className="group my-2 rounded-md flex w-full max-w-xs flex-col overflow-hidden border border-gray-100 bg-white shadow-md relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
              setIsHovered(false);
              setImageIndex(0);
          }}
      >
          <Link href="/comboproductpage">
              <div className="relative rounded-md flex h-40 sm:h-60 overflow-hidden">
                  {isHovered && (
                      <>
                          <div className="absolute bottom-0 mb-4 flex w-full justify-center space-x-4">
                              {imageUrls.map((_, index) => (
                                  <div
                                      key={index}
                                      className={`h-3 w-3 rounded-full border-2 border-white ${index === imageIndex ? 'bg-white' : 'bg-transparent'
                                          }`}
                                  />
                              ))}
                          </div>
                          <div
                              className="absolute top-0 right-0 h-full w-full object-cover transition-opacity duration-300 opacity-70"
                              style={{ backgroundImage: `url(${imageUrls[imageIndex]})` }}
                          />
                      </>
                  )}
                  <Image className="absolute rounded-md top-0 right-0 h-full w-full object-cover" width={1280} height={500} src={imageUrls[imageIndex]} alt="product image" />
                  <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">20% OFF</span>
                  <div className="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
                      <button className="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                          </svg>
                      </button>
                  </div>
              </div>
          </Link>
          {/* Your product details */}
          <div className="mt-4 px-2 pb-5">
              <a href="#">
                  <h5 className="text-sm sm:text-xl tracking-tight text-slate-900">Lululemon Comfort Tee - White</h5>
              </a>
              <div className="mt-2 mb-5 flex items-center justify-between">
                  <p>
                      <span className="text-3xl font-bold text-slate-900">Rs. 499</span>
                      <span className="text-sm text-slate-900 line-through">Rs. 599</span>
                  </p>
                  <div className='flex justify-center items-center'>
                      <FaStar className='text-yellow-500' />
                      <span className="mr-2 ml-1 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                  </div>
              </div>
              <Link href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-[13px] font-medium text-white hover:bg-gray-700 focus:outline-none sm:text-sm focus:ring-4 focus:ring-blue-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Add to cart</Link>
          </div>
      </div>
  );
};

export default Combo