import PlaceCard from '@/app/componets/place-card'
import { Heart, MapPin, Share } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {
    params: {
        slug: string
    }
}

const openHours = [
    {
        label: "Mon-Fri",
        hours: "8 AM - 7 PM"
    },
    {
        label: "Sat-Sun",
        hours: "8 AM - 8 PM"
    },
]
export default function page({ params: { slug } }: Props) {
    console.log(slug)
    return (
        <div className='min-h-[calc(100vh-60px)] max-md:mx-4'>
            <Image alt='Event Banner' src={"/events/event-1.png"} width={1000} height={700} className='max-h-[12rem] sm:max-h-[25rem] mx-auto rounded-md object-cover drop-shadow-lg' />

            <div className='md:px-[12rem] mt-6 py-2'>
                <div className='flex justify-between flex-row items-center'>
                    <h1 className='text-3xl font-semibold'>Lorem, ipsum dolor.</h1>
                    <div className='flex items-center gap-2'>
                        <div className='flex flex-col items-center'>

                            <button title='Like' className='flex-none group/item h-8 w-8 flex justify-center items-center hover:shadow-md hover:shadow-cyan-200/40 p-2 transition-[shadow,transform] duration-300 hover:scale-110 rounded-full bg-neutral-300'>
                                <Heart className='text-red-600 group-hover/item:fill-red-700 transition-colors w-full h-full' />
                            </button>
                            <p className='text-xs  font-semibold'>10k</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <button title='Share' className='flex-none group/item h-8 w-8 flex justify-center items-center hover:shadow-md hover:shadow-cyan-200/40 p-2 transition-[shadow,transform] duration-300 hover:scale-110 rounded-full bg-neutral-300'>
                                <Share className='text-indigo-800 group-hover/item:fill-indigo-700 transition-colors w-full h-full' />
                            </button>
                            <p className='text-xs font-semibold'>4k</p>
                        </div>
                    </div>
                </div>

                <ul className='mt-3'>
                    <li><p className='text-lg font-semibold'>Hours</p></li>
                    {
                        openHours.map((hour, index) => (
                            <li className='flex items-center gap-1' key={index}>
                                <p className='font-semibold text-sm'>
                                    {hour.label}
                                </p>
                                <p className='text-sm'>{hour.hours}</p>
                            </li>
                        ))
                    }
                </ul>
                <article className='my-2 flex flex-col gap-2'>
                    <div>
                        <h3 className='font-semibold text-lg'>About the place</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad a harum alias odio voluptatum voluptas asperiores suscipit, explicabo aut beatae.</p>
                        <p><span className='font-semibold'>Tips for visitors: </span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolores</p>
                    </div>

                    <div>
                        <p>Charges per head(approximate): <span className='font-semibold'>200</span></p>
                    </div>
                </article>
                <div>
                    <div className='flex flex-row items-center gap-x-2'><MapPin className='size-5 text-red-700' />
                        <p className='text-sm font-medium'>Lorem, ipsum dolor.</p></div>
                    <div className='w-full bg-emerald-400 text-white text-3xl min-h-[300px] max-h-[300px]'>
                        Google map here
                    </div>
                </div>


            </div>
            <div className='sm:mx-[8rem] mx-auto my-6'>
                <h2 className='font-semibold  mb-2 text-2xl'>Neary places from here</h2>
                <div className='flex flex-row gap-x-7 max-md:flex-wrap gap-y-4'>
                    <PlaceCard className='md:max-w-[25rem]' imageUrl='/events/event-1.png' />
                    <PlaceCard className='md:max-w-[25rem]' imageUrl='/events/event-2.png' />
                    <PlaceCard className='md:max-w-[25rem]' imageUrl='/events/event-3.png' />
                </div>
            </div>
        </div>
    )
}