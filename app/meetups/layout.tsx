import Image from 'next/image'
import React, { PropsWithChildren } from 'react'

type Props = {
    params: { slug: string }
}

export default function PlaceLayout({ children, params: { slug } }: PropsWithChildren<Props>) {
    return (
        <section>
            <div className='h-[60px]'>
                <nav className='flex md:px-5 py-2 '>
                    <h1 className='md:text-4xl text-2xl text-white md:text-[#1a0e4f] font-black font-sans'>संगठन</h1>
                </nav>
            </div>

            {children}</section>
    )
}