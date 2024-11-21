import { cn } from '@/lib/utils'
import { CalendarClock, Heart, MapPin, Star, Ticket } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { format } from "date-fns"

type Props = {
    className?: string,
    imageUrl: string
}

export default function MeetupCard({
    className,
    imageUrl
}: Props) {
    return (
        <div className={cn("shadow-md overflow-hidden rounded-md min-h-[200px]", className)}>
            <div className='group cursor-pointer relative'>
                <Image className='max-h-[12rem] md:max-h-[13rem] object-cover' width={400} height={300} alt='meetup image' src={imageUrl} />
                <div className='opacity-0 group-hover:bg-neutral-900/50 group-hover:opacity-100 transition-[opacity,colors] duration-700 flex absolute inset-0 text-white justify-center items-center h-full'>
                    <ul className='flex flex-row gap-2 flex-none'>
                        <li title='Interested' className='flex-none group/item h-8 w-8 flex justify-center items-center hover:shadow-md hover:shadow-yellow-200/40 p-2 transition-[shadow,transform] duration-200 hover:scale-110 rounded-full bg-neutral-300'>
                            <Star className='text-yellow-400 group-hover/item:fill-yellow-500 transition-colors w-full h-full' />
                        </li>
                        {/* <li className='flex-none h-8 w-8 flex justify-center items-center hover:shadow-md hover:shadow-cyan-200/40 p-2 transition-[shadow,transform] duration-300 hover:scale-110 rounded-full bg-neutral-300'><MoreHorizontal className='text-red-600 w-full h-full' /></li> */}
                    </ul>
                </div>
            </div>
            <div className='px-2 pt-3 pb-1'>
                <Link href={"/places/place"}>
                    <h2 className='font-sans hover:underline font-semibold md:text-xl'>Lorem ipsum dolor sit.</h2>
                </Link>
                <p className='font-sans text-xs md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, delectus.</p>
                <div className='flex gap-x-1 items-center'>
                    <CalendarClock className='size-4 text-red-700' />
                    <p className='font-semibold text-sm font-sans text-neutral-800/90'>
                        {format(new Date(), "PPP")}
                    </p>
                </div>
                <div className='flex gap-x-1 items-center'>
                    <MapPin className='size-4 text-red-700' />
                    <p className='font-semibold text-sm font-sans text-neutral-800/90'>
                        Lorem, ipsum.
                    </p>
                </div>
                <div className='flex gap-1 items-center'>
                    <Star className='size-4 text-yellow-400 fill-yellow-500' />
                    <p className='text-sm font-sans text-neutral-800/90'>{Math.floor(Math.random() * 1000)} interested</p>
                </div>
                <div title='Ticket' className='flex gap-1 items-center'>
                    <Ticket className='size-4 text-rose-400 ' />
                    <p className='text-sm font-sans text-neutral-800/90'>{Math.floor(Math.random() * 1000)}</p>
                </div>
                <div className='flex mt-3'>
                    <Link href={"/places/place"} className='ml-auto text-xs text-orange-700 underline hover:text-orange-500 transition-colors'>Learn More</Link>
                </div>
            </div>
        </div>
    )
}