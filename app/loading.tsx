import { Loader2 } from 'lucide-react'
import React from 'react'

type Props = {}

export default function loading({ }: Props) {
    return (
        <section className=' h-screen flex justify-center items-center'>
            <Loader2 className='animate-spin text-slate-500 size-10 mx-auto' />
        </section>
    )
}