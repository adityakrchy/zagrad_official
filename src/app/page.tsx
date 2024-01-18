import HeroImageSlider from '@/components/HeroImageSlider'
import ImageCollection from '@/components/ImageCollection'
import ProductCard from '@/components/ProductCard'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <HeroImageSlider />
      <ImageCollection />
     <div className='text-center mb-4'>
     <h2 className='text-xl font-bold text-gray-900 sm:text-3xl'>T Shirt Styles</h2>
     </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 px-4'>
        <ProductCard  />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  )
}
