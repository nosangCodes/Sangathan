"use client"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'

type Props = {
    imageUrl?: string,
    name?: string
}

export default function UserAvatar({
    imageUrl = "https://github.com/shadcn.png",
    name
}: Props) {
    return (
        <div className='flex flex-row gap-x-2 items-center'>
            <Avatar className='shadow-md'>
                <AvatarImage src={imageUrl} alt="User avatar" />
            </Avatar>
            <p>{name}</p>
        </div>
    )
}

