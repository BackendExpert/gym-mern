import React from 'react'
import { servicedata } from './ServiceData'

const ServiceList = () => {
    return (
        <div className='bg-[#0a0a0a] py-16 xl:px-28 md:px-10 px-4 text-white'>
            <h1 className="text-center text-2xl font-semibold text-orange-500 uppercase"> Our <span className='text-white'>Core Services</span></h1>

            <div className="">
                <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-4 mt-8">
                    {
                        servicedata.map((sdata, index) => {
                            return (
                                <div className="" key={index}>
                                    <center>
                                        <div className="w-40 h-auto border-4 border-orange-500 rounded-full">
                                            <img src={sdata.img} alt="" className="h-40 w-auto rounded-full border-2 border-white" />
                                        </div>
                                    </center>

                                    <div className="flex justify-center pl-20 -mt-8">
                                        <div className="bg-orange-500 inline-block p-2 rounded-full">
                                            <sdata.icon className="h-8 w-auto fill-white" />
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <h1 className="mb-4 mt-4 uppercase text-lg text-orange-500 font-semibold">{sdata.name}</h1>
                                        <p className="mb-4 md:px-16 px-4">{sdata.desc}</p>
                                    </div>

                                    <div className="mb-8">
                                        {
                                            sdata.services.map((subdata, subindex) => {
                                                return (
                                                    <div className="text-center xl:px-16 md:px-10" key={subindex}>
                                                        <p className="p-2 text-gray-500">{subdata.name}</p>
                                                    </div>
                                                )
                                            })
                                        }
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

export default ServiceList