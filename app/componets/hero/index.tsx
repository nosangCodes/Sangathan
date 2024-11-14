import React from 'react'
import "./styles.css"
type Props = {}

export default function Hero({ }: Props) {
  return (
    <section className='h-screen w-full max-md:px-4 hero overflow-hidden'>
      <nav className='flex md:px-5 py-2 '>
        <h1 className='md:text-4xl text-2xl text-white md:text-[#1a0e4f] font-black font-sans'>संगठन</h1>
      </nav>
      <div className='h-[calc(100vh-100px)] flex justify-center items-center flex-col'>
        <div className='flex flex-col justify-center items-center md:gap-y-3'>
          <h2 className='md:text-7xl max-md:hidden text-2xl text-center font-bebas-neue hero-text font-extrabold'>
            From Local Gatherings to Big Events</h2>
          <h2 className='md:text-7xl md:hidden text-2xl text-center font-bebas-neue hero-text font-extrabold'>
            From Local Gatherings </h2>
          <h2 className='md:text-7xl md:hidden text-2xl text-center font-bebas-neue hero-text font-extrabold'>
            to Big Events</h2>

          <h2 className='md:text-7xl text-2xl text-center font-bebas-neue hero-text font-extrabold'>
            Find Your Next Experience
          </h2>
        </div>
        <div className=' flex justify-center max-md:flex-col items-center mt-4 md:mt-[2rem] gap-1 md:gap-4'>
          <button className='cta-btn max-md:w-full font-sans max-md:!p-2 md:!px-3 max-md:!text-xs hover:bg-[#fafafa] transition-colors hover:text-[#1a1a1a]'>
            Explore Meetups
          </button>
          <button className='cta-btn max-md:w-full font-sans max-md:!p-2 md:!px-3 max-md:!text-xs cta-outline transition-colors'>
            Start Hosting
          </button>
        </div>
      </div>
    </section>
  )
}