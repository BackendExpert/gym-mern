import React from 'react'
import { BiSolidDashboard } from "react-icons/bi";
import { FaUser } from 'react-icons/fa';
import { FaBuildingUser, FaChalkboardUser, FaUserPlus } from 'react-icons/fa6'
import CountUp from 'react-countup'

const AdminDash = () => {
    const admincard = [
        {
            id: 1,
            name: 'Total Members',
            value: 500,
            icon: FaUser,
            title: 'in FitFlex',
        },
        {
            id: 2,
            name: 'Total Trainers',
            value: 500,
            icon: FaBuildingUser ,
            title: 'in FitFlex',
        },
        {
            id: 3,
            name: 'Active Trainers',
            value: 500,
            icon: FaChalkboardUser,
            title: 'in FitFlex',
        },
        {
            id: 4,
            name: 'New Sign-ups',
            value: 500,
            icon: FaUserPlus,
            title: 'in FitFlex',
        },
    ]
    return (
        <div className='mt-4 text-white mr-4'>
            <div className="flex">
                <div className="">
                    <div className="inline-block p-2 bg-orange-500 rounded">
                        <BiSolidDashboard className='h-6 w-auto fill-white' />
                    </div>
                </div>
                <div className="pl-4">
                    <h1 className="text-orange-500 text-xl pt-1 font-semibold uppercase">Dashboard</h1>
                </div>
            </div>

            <div className="mt-4">
                <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-4">
                    {
                        admincard.map((data, index) => {
                            return (
                                <div className="" key={index}>
                                    <div className="flex">
                                        <div className="w-28 py-10 px-2 rounded-l-lg bg-orange-500">
                                            <center >
                                                <data.icon className="h-8 w-auto" />                                                
                                            </center>
                                        </div>
                                        <div className="border-b-2 border-orange-500 w-full py-6 px-4 rounded-r-lg bg-[#151515] text-white">
                                            <h3 className="text-lg font-semibold">{data.name}</h3>
                                            <p className="text-sm">{data.title}</p>
                                            <div className="text-right pt-2 text-xl font-semibold"><CountUp end={data.value} duration={3}/> + </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AdminDash