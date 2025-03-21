import React from 'react'
import { teamdata } from './Teamdata'

const Team = () => {

    return (
        <div className='text-white text-center bg-[#151515] py-24 xl:px-40 md:px-20 px-4'>
            <h1 className="text-orange-500 uppercase text-2xl">QUALIFIED TEAMS</h1>
            <h1 className="text-3xl">OUR BEST PROFESSIONAL <span className='text-orange-500'>FITNESS TRAINER</span></h1>

            <div className="">
                <div className="grid xl:grid-cols-4 gap-6 mt-8">
                    {
                        teamdata.map((team, index) => {
                            return (
                                <div key={index}>
                                    <center><img src={team.icon} alt="" className='rounded-full' /></center>
                                    <div className="text-center mt-4">
                                        <h1 className="text-3xl font-semibold text-orange-500">{team.name}</h1>
                                        <p className="text-gray-500 uppercase">{team.subtitle}</p>
                                        <p className="mt-2">{team.desc}</p>
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

export default Team