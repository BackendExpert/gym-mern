import React from 'react'
import { gymdata } from './Classgymdata'

const ClassGym = () => {
    return (
        <div className='text-white text-center bg-[#151515] py-24 xl:px-40 md:px-20 px-4'>
            <h1 className="text-orange-500 uppercase text-2xl">our classes</h1>
            <h1 className="text-3xl">WHAT WE CAN OFFER</h1>

            <div className="flex items-center justify-center flex-wrap gap-4 mt-8 md:mx-auto">
                {gymdata.map((data) => {
                    if (data.id <= 4) {
                        return (
                            <div key={data.id} className="">
                                <div className="border-b-2 border-white">
                                    <img src={data.img} alt={`Gym Image`} className="w-full max-w-xs" />
                                </div>
                                <div className="mt-2 bg-[#0a0a0a] p-4 rounded-b-md text-left">
                                    <h1 className="uppercase text-orange-500 font-semibold tracking-[0.5rem]">{data.name}</h1>
                                    <p className="pt-2 uppercase text-2xl">{data.title}</p>
                                </div>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>

            <div className="xl:flex mt-8">
                {
                    gymdata.map((data, index) => {
                        if (data.id === 5) {
                            return (
                                <div className="xl:w-1/2">
                                    <div key={data.id} className="">
                                        <div className="border-b-2 border-white">
                                            <img src={data.img} alt={`Gym Image`} className="w-full " />
                                        </div>
                                        <div className="mt-2 bg-[#0a0a0a] p-4 rounded-b-md text-left">
                                            <h1 className="uppercase text-orange-500 font-semibold tracking-[0.5rem]">{data.name}</h1>
                                            <p className="pt-2 uppercase text-2xl">{data.title}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    })
                }

                <div className="pl-4 xl:w-1/2 xl:mt-0 mt-8 bg-[#0a0a0a] xl:ml-4 rounded p-8 ml-0">
                    
                </div>
            </div>

        </div>
    )
}

export default ClassGym