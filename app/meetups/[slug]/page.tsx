import MeetupCard from '@/app/componets/meetup-card'
import PlaceCard from '@/app/componets/place-card'
import UserAvatar from '@/app/componets/user-avatar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { format } from 'date-fns'
import { CalendarClock, Heart, MapPin, Share, Star, Ticket } from 'lucide-react'
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
        <div className='min-h-[calc(100vh-60px)] max-lg:mx-4'>
            <Image alt='Event Banner' src={"/events/event-1.png"} width={1000} height={700} className='max-h-[12rem] sm:max-h-[25rem] mx-auto rounded-md object-cover drop-shadow-lg' />

            <div className='lg:px-[12rem] mt-6 py-2'>
                <div className='flex justify-between flex-row items-center'>
                    <h1 className='text-3xl font-semibold'>Lorem, ipsum dolor.</h1>
                    <div className='flex items-center gap-2'>
                        <div className='flex flex-col items-center'>
                            <button title='Interested' className='flex-none group/item h-8 w-8 flex justify-center items-center hover:shadow-md hover:shadow-cyan-200/40 p-2 transition-[shadow,transform] duration-300 hover:scale-110 rounded-full bg-neutral-300'>
                                <Star className='text-yellow-600 group-hover/item:fill-yellow-400 transition-colors w-full h-full group-hover/item:text-yellow-400' />
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

                <article className='my-2 flex flex-col  md:flex-row items-start gap-2 gap-y-4 md:gap-x-4'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-base'>
                            <span className='font-semibold'>Meetup date: </span>
                            {format(new Date(), "PPP")}</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repudiandae maiores ex ad. Placeat impedit vitae incidunt magni voluptatem quas cum suscipit voluptatibus similique, qui maxime perspiciatis voluptatum repellat ex cupiditate sunt tempore, fuga unde ipsa hic. Quisquam vitae, nobis doloribus consequatur quod officiis necessitatibus natus illum quo dolorem quae esse alias libero enim soluta cumque fugiat dolore fugit eveniet! Adipisci, inventore cupiditate, sint debitis reiciendis quam nesciunt, explicabo ipsam porro commodi assumenda nostrum repellendus nulla sapiente nemo itaque vero. Illo mollitia error explicabo debitis blanditiis illum ducimus, at fugiat eveniet quisquam corrupti repellat placeat quod ut, labore sequi facere minima. Asperiores maiores expedita similique eveniet delectus dolorum quod officiis, eum magnam natus quis assumenda quas! Distinctio perspiciatis iusto ipsa nemo, vel soluta, enim blanditiis, facere inventore debitis cum earum voluptatem culpa! Aliquid, porro nostrum. Libero itaque ipsam voluptate, odio eum voluptates, aperiam quas obcaecati cupiditate dolor in, ab et aut veritatis fugit maxime impedit? Ut magni repellat reiciendis quisquam laudantium eius odit. Animi, velit ducimus. Id quis natus quam quo eveniet repudiandae officia odit incidunt architecto, error, quasi minima esse cumque non temporibus saepe doloribus! Ab doloremque itaque, asperiores laboriosam deleniti non praesentium cumque tempore corporis optio beatae ullam!</p>
                    </div>
                    <div className='w-full md:max-w-[20rem] flex flex-col gap-y-3'>
                        <div className='shadow-md p-3 rounded-md flex flex-col gap-y-3'>
                            <div className='flex flex-row items-center gap-x-2 w-full'>
                                <Star className=' size-4 text-yellow-400 fill-yellow-500' />
                                <p className='text-sm font-medium'>{Math.floor(Math.random() * 100)} People interested</p>
                            </div>
                            <div className='flex flex-row items-center gap-x-2'>
                                <Ticket className=' size-4 text-res-400' />
                                <p className='text-sm font-medium'>{Math.floor(Math.random() * 100)}</p>
                            </div>
                            <div className='flex flex-row items-center gap-x-2'>
                                <Ticket className=' size-4 text-res-400' />
                                <p className='text-sm font-medium'>{Math.floor(Math.random() * 100)} Tickets left
                                </p>
                            </div>
                            <Button>
                                Book Now
                            </Button>
                        </div>
                        <div className='shadow-md rounded-md p-3 flex flex-col gap-y-2'>
                            <div className='flex flex-row gap-x-2 items-center'>
                                <CalendarClock className='size-4 ' />
                                <p className='text-sm font-medium'>{format(new Date(), "PPP")}</p>
                            </div>
                            <div className='flex flex-row items-center gap-x-2'><MapPin className='size-4 text-red-700' />
                                <p className='text-sm font-medium'>Lorem, ipsum dolor.</p></div>
                            <div className='bg-emerald-500 min-h-[150px]'>
                            </div>
                        </div>
                        <div className='flex shadow-md rounded-md p-3 flex-col  min-w-[18rem]'>
                            <h5 className='font-semibold'>Meetup Host</h5>
                            <UserAvatar name='John Doe' />
                        </div>
                    </div>
                </article>
                <Separator className='my-3' />


            </div>
            <div className='lg:mx-[8rem] mx-auto my-6'>
                <h2 className='font-semibold  mb-2 text-2xl'>Meetups you might like</h2>
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-4'>
                    <MeetupCard className='w-full lg:max-w-[25rem]' imageUrl='/events/event-1.png' />
                    <MeetupCard className='w-full lg:max-w-[25rem]' imageUrl='/events/event-1.png' />
                    <MeetupCard className='w-full lg:max-w-[25rem]' imageUrl='/events/event-1.png' />
                    <MeetupCard className='w-full lg:max-w-[25rem]' imageUrl='/events/event-1.png' />
                </div>
            </div>
        </div>
    )
}