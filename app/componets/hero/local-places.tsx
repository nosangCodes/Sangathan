import React from 'react'
import PlaceCard from '../place-card'
import Link from 'next/link'

type Props = {}

export default function LocalPlaces({ }: Props) {
  return (
    <section className='min-h-screen px-5 md:px-10 py-4 md:py-8 bg-neutral-200'>
      <div className='flex flex-row items-end justify-between'>
        <h1 className='font-bebas-neue text-xl md:text-3xl underline text-[#1a0e4f]'>Local Places to visit</h1>
        <Link className='text-indigo-900 hover:text-indigo-800/90 hover:drop-shadow-2xl hover:underline text-sm font-semibold' href={"places"}>View all</Link>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 my-3'>
        <PlaceCard imageUrl='/events/event-1.png' />
        <PlaceCard imageUrl='/events/event-2.png' />
        <PlaceCard imageUrl='/events/event-3.png' />
        <PlaceCard imageUrl='/events/event-1.png' />
        <PlaceCard imageUrl='/events/event-2.png' />
        <PlaceCard imageUrl='/events/event-3.png' />
        <PlaceCard imageUrl='/events/event-1.png' />
        <PlaceCard imageUrl='/events/event-2.png' />
      </div>
    </section>
  )
}