import React from 'react'
import { TbActivityHeartbeat } from "react-icons/tb";
import TimeCom from './TimeCom';
import BestTrainer from '../AdminDash/Tables/BestTrainer';
import TopWorkoutPrograms from '../AdminDash/Tables/TopWorkoutPrograms';

const GymStats = () => {
    return (
        <div className="">
            <div className="flex mt-8">
                <div className="">
                    <div className="inline-block p-2 bg-orange-500 rounded">
                        <TbActivityHeartbeat className='h-6 w-auto fill-white' />
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

export default GymStats