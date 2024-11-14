import React from 'react'
import PlaceCard from '../place-card'

type Props = {}

export default function LocalPlaces({ }: Props) {
  return (
    <section className='min-h-screen px-5 md:px-10 py-4 md:py-8 bg-neutral-200'>
      <div>
        <h1 className='font-bebas-neue text-xl md:text-3xl underline text-[#1a0e4f]'>Local Places to visit</h1>
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