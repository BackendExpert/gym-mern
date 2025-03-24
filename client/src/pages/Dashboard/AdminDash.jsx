import React from 'react'
import { BiSolidDashboard } from "react-icons/bi";
import { FaUser } from 'react-icons/fa';
import { FaBuildingUser, FaChalkboardUser, FaUserPlus } from 'react-icons/fa6'
import CountUp from 'react-countup'
import OneLineChart from '../../components/Charts/OneLineChart';
import DoughnutChart from '../../components/Charts/DoughnutChart';
import gymuser from '../../assets/GymUser.png'
import LatestSignUps from '../../components/AdminDash/Tables/LatestSignUps';
import TrainerActLog from '../../components/AdminDash/Tables/TrainerActLog';
import RecentCheckins from '../../components/AdminDash/Tables/RecentCheckins';
import TimeCom from '../../components/OtherCom/TimeCom';
import BestTrainer from '../../components/AdminDash/Tables/BestTrainer';
import TopWorkoutPrograms from '../../components/AdminDash/Tables/TopWorkoutPrograms';

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
            icon: FaBuildingUser,
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
                                            <div className="text-right pt-2 text-xl font-semibold"><CountUp end={data.value} duration={3} /> + </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>

            <div className="grid xl:grid-cols-2 gap-4 my-8 mr-0">
                <div className="h-auto bg-[#151515] p-4 rounded-lg border-l border-orange-500 md:block hidden">
                    <OneLineChart />
                </div>
                <div className="flex ">
                    <div className="h-auto md:mr-2 w-1/2 bg-[#151515] p-4 rounded-lg h-auto border-l border-orange-500 md:block hidden">
                        <DoughnutChart />
                    </div>
                    <div className="h-auto pt-12 md:ml-2 w-1/2 bg-[#151515] p-4 rounded-lg h-auto border-l border-orange-500 md:block hidden">
                        <img src={gymuser} alt="" />
                    </div>
                </div>
            </div>

            <div className="md:flex">
                <div className="w-full md:mr-2 md:my-0 my-4">
                    <h1 className="text-xl font-semibold text-orange-500 mb-2 uppercase">Latest User SignUp</h1>
                    <LatestSignUps />
                </div>
                <div className="w-full md:ml-2 md:my-0 my-4">
                    <h1 className="text-xl font-semibold text-orange-500 mb-2 uppercase">Recent Check-ins</h1>
                    <RecentCheckins />
                </div>
            </div>
            <div className="pt-8 w-full md:ml-2 md:my-0 my-4">
                <h1 className="text-xl font-semibold text-orange-500 mb-2 uppercase">Trainer Activity Log</h1>
                <TrainerActLog />
            </div>

            <div className="flex mt-8">
                <div className="">
                    <div className="inline-block p-2 bg-orange-500 rounded">
                        <BiSolidDashboard className='h-6 w-auto fill-white' />
                    </div>
                </div>
                <div className="pl-4">
                    <h1 className="text-orange-500 text-xl pt-1 font-semibold uppercase">Gym Usage Statistics</h1>
                </div>
            </div>

            <div className="md:flex mt-8">
                <div className="bg-[#151515] w-full md:mr-2 p-4 rounded-lg md:my-0 my-4">
                    <TimeCom />
                </div>
                <div className="bg-[#151515] w-full md:ml-2 p-4 rounded-lg md:my-0 my-4">
                    <h1 className="text-orange-500 text-xl pt-0 pb-4 font-semibold uppercase">Top Trainers</h1>
                    <BestTrainer />
                </div>
            </div>

            <div className="bg-[#151515] w-full md:ml-2 p-4 rounded-lg mt-8">   
                <h1 className="text-orange-500 text-xl pt-0 pb-4 font-semibold uppercase">Best Workout Programmes</h1>
                <TopWorkoutPrograms />
            </div>
        </div>
    )
}

export default AdminDash