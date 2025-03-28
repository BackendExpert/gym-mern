import React from 'react'
import { BiSolidDashboard } from 'react-icons/bi'
import GymStats from '../../components/OtherCom/GymStats'
import { FaUsers } from 'react-icons/fa'
import { FaFileLines, FaDumbbell, FaUser } from 'react-icons/fa6'
import CountUp from 'react-countup'
import TotalSessions from '../../components/OtherCom/Trainer/TotalSessions'

const TrainerDash = () => {
    const trainercard = [
        {
            id: 1,
            name: 'Total Members',
            value: 500,
            icon: FaUsers            ,
            title: 'For Me',
        },
        {
            id: 2,
            name: 'Total Workout Plans',
            value: 500,
            icon: FaFileLines,
            title: 'in FitFlex',
        },
        {
            id: 3,
            name: 'Weekly Scheduled Sessions',
            value: 500,
            icon: FaDumbbell,
            title: 'for Me',
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

            <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-4 mt-4">
                <div className="flex bg-orange-500 p-8 rounded-lg">
                    <div className="">
                        <FaUser className='h-10 w-auto'/>
                    </div>
                    <div className="ml-4">
                        <h1 className="">Jehan</h1>
                        <p className="uppercase text-xl font-semibold">trainer</p>
                    </div>
                </div>
                {
                    trainercard.map((data, index) => {
                        return (
                            <div className=" rounded-lg flex" key={index}>
                                <div className="bg-orange-500 p-6 pt-6 rounded-l-lg">
                                    <data.icon className='h-10 w-auto'/>
                                    <p className="pt-4 text-xl font-semibold"><CountUp end={data.value} duration={4}/> </p>
                                </div>
                                <div className="bg-[#151515] p-6 w-full rounded-r-lg border-b-2 border-orange-500">
                                    <h1 className="text-orange-500 font-semibold uppercase">{data.name}</h1>
                                    <p className="pt-4">{data.title}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="xl:flex mt-8">
                <div className="w-1/2">
                    <h1 className="text-xl font-semibold text-orange-500 mb-4 uppercase">My Sessions Progress in Last 6 Months</h1>
                    <TotalSessions />
                </div>
                <div className="w-1/2">
                    dasd
                </div>
            </div>


            <div className="">
                <GymStats />
            </div>
        </div>
    )
}

export default TrainerDash