import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { MapPin } from 'lucide-react'

type Props = {
    imageUrl: string,
    className?: string
}

export default function PlaceCard({
    imageUrl, className
}: Props) {
    return (
        <div className={cn('bg-card hover:shadow-lg hover:shadow-purple-600/40 transition-shadow rounded-sm shadow-md overflow-hidden', className)}>
            <Image className='w-full cursor-pointer max-h-[12rem] md:max-h-[15rem] bg-cover' src={imageUrl} height={300} width={300} alt='Event Image' />
            <div className='px-2 pt-3 pb-1'>
                <h2 className='font-sans font-semibold md:text-xl'>Lorem ipsum dolor sit.</h2>
                <p className='font-sans text-xs md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, delectus.</p>
                <div className='flex gap-x-1 items-center'>
                    <MapPin className='size-4 text-red-700' />
                    <p className='font-semibold text-sm font-sans'>
                        Lorem, ipsum.
                    </p>
                </div>
                <div className='flex mt-3'>
                    <button className='ml-auto text-xs text-orange-700 underline hover:text-orange-500 transition-colors'>Learn More</button>
                </div>
            </div>
        </div>
    )
}