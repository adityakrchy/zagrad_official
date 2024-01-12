"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

const HeroImageSlider = () => {

    return (

        <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false}>
            <div>
                <Image src="/banner/img1.jpg" width={1540} height={400} alt='' />
            </div>
            <div>
                <Image src="/banner/img2.jpg" width={1540} height={400} alt='' />
            </div>
            <div>
                <Image src="/banner/img3.jpg" width={1540} height={400} alt='' />
            </div>
        </Carousel>

    )
}

export default HeroImageSlider