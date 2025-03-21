import React from 'react'
import { FaDumbbell, FaHeartbeat } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { FaFileContract } from "react-icons/fa6";

const WhyPage = () => {
    const datawhypage = [
        {
            id: 1,
            name: 'Modern equipment',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.',
            icon: FaDumbbell
        },
        {
            id: 2,
            name: 'Healthy nutrition plan',
            desc: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
            icon: MdFastfood
        },
        {
            id: 3,
            name: 'Proffesponal training plan',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.',
            icon: FaFileContract
        },
        {
            id: 4,
            name: 'Unique to your needs',
            desc: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
            icon: FaHeartbeat
        },
    ]
    return (
        <div className='text-white text-center bg-[#0a0a0a] py-24 xl:px-40 md:px-20 px-4'>
            <h1 className="text-orange-500 uppercase text-2xl">Why chose us?</h1>
            <h1 className="text-3xl">PUSH YOUR LIMITS FORWARD</h1>

            <div className="mt-12 grid xl:grid-cols-4 md:grid-cols-2  gap-4">
                {
                    datawhypage.map((data, index) => {
                        return (
                            <div data-aos="flip-left" className="" key={index}>
                                <center>
                                    <div className="duration-500 hover:bg-orange-500 bg-[#151515] h-auto rounded-full w-28 p-8 ">
                                        <data.icon className='h-12 w-auto' />
                                    </div>
                                </center>
                                <div className="">
                                    <h1 className="text-2xl mb-4 mt-8">{data.name}</h1>
                                    <p className="text-center">{data.desc}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default WhyPage