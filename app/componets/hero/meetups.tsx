import { cn } from '@/lib/utils'
import React from 'react'
import MeetupCard from '../meetup-card'
import Link from 'next/link'

type Props = {
    className?: string
}

export default function Meetups({ className }: Props) {
    return (
        <section className={cn("", className)}>
            <div className='flex flex-row justify-between items-end'>
                <h1 className='font-bebas-neue text-xl md:text-3xl underline text-[#1a0e4f]'>Nearby Meetups</h1>
                <Link className='text-indigo-900 hover:text-indigo-800/90 hover:drop-shadow-2xl hover:underline text-sm font-semibold' href={"meetups"}>View all</Link>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 my-4'>
                <MeetupCard imageUrl='/events/event-1.png' />
                <MeetupCard imageUrl='/events/event-2.png' />
                <MeetupCard imageUrl='/events/event-1.png' />
                <MeetupCard imageUrl='/events/event-2.png' />
                <MeetupCard imageUrl='/events/event-1.png' />
                <MeetupCard imageUrl='/events/event-2.png' />
            </div>
        </section>
    )
}