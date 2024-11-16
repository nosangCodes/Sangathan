import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Heart, MapPin, MoreHorizontal } from 'lucide-react'
import Link from 'next/link'

type Props = {
    imageUrl: string,
    className?: string
}

export default function PlaceCard({
    imageUrl, className
}: Props) {
    return (
        <div className={cn('bg-card hover:shadow-lg hover:shadow-purple-600/40 transition-all rounded-sm shadow-md overflow-hidden', className)}>
            <div className='cursor-pointer relative group'>
                <Image className='w-full max-h-[12rem] md:max-h-[13rem] object-cover' src={imageUrl} height={300} width={300} alt='Event Image' />
                <div className='opacity-0 group-hover:bg-neutral-900/50 group-hover:opacity-100 transition-[opacity,colors] duration-700 flex absolute inset-0 text-white justify-center items-center h-full'>
                    <ul className='flex flex-row gap-2 flex-none'>
                        <li title='Like' className='flex-none group/item h-8 w-8 flex justify-center items-center hover:shadow-md hover:shadow-cyan-200/40 p-2 transition-[shadow,transform] duration-300 hover:scale-110 rounded-full bg-neutral-300'>
                                <Heart className='text-red-600 group-hover/item:fill-red-700 transition-colors w-full h-full' />
                        </li>
                        {/* <li className='flex-none h-8 w-8 flex justify-center items-center hover:shadow-md hover:shadow-cyan-200/40 p-2 transition-[shadow,transform] duration-300 hover:scale-110 rounded-full bg-neutral-300'><MoreHorizontal className='text-red-600 w-full h-full' /></li> */}
                    </ul>
                </div>
            </div>
            <div className='px-2 pt-3 pb-1'>
                <h2 className='font-sans cursor-pointer font-semibold md:text-xl'>Lorem ipsum dolor sit.</h2>
                <p className='font-sans text-xs md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, delectus.</p>
                <div className='flex gap-x-1 items-center'>
                    <MapPin className='size-4 text-red-700' />
                    <p className='font-semibold text-sm font-sans text-neutral-800/90'>
                        Lorem, ipsum.
                    </p>
                </div>
                <div className='flex gap-1 items-center'>
                    <Heart className='size-4 text-red-700 fill-red-600' />
                    <p className='text-sm font-sans text-neutral-800/90'>{Math.floor(Math.random() * 1000)}</p>
                </div>
                <div className='flex mt-3'>
                    <Link href='#' className='ml-auto text-xs text-orange-700 underline hover:text-orange-500 transition-colors'>Learn More</Link>
                </div>
            </div>
        </div>
    )
}