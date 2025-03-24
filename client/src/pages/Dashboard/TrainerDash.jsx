import React from 'react'
import { BiSolidDashboard } from 'react-icons/bi'
import GymStats from '../../components/OtherCom/GymStats'

const TrainerDash = () => {
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


            <div className="">
                <GymStats />
            </div>
        </div>
    )
}

export default TrainerDash