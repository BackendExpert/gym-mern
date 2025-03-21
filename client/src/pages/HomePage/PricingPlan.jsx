import React from 'react'
import { gymplan } from './PlanData'
import bodyb from '../../assets/bodybuilder.png'
const PricingPlan = () => {
    return (
        <div className='text-white text-center bg-[#151515] py-24 xl:px-40 md:px-20 px-4'>
            <h1 className="text-orange-500 uppercase text-2xl">Our Plan</h1>
            <h1 className="text-3xl uppercase">Choose your pricing plan</h1>

            <div className="">
                <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6 mt-6">
                    {
                        gymplan.map((data, index) => {
                            return (
                                <div className="duration-500 hover:bg-[#151515] bg-transparent bg-[#0a0a0a] hover:border-white p-8 group" key={index}>
                                    <center>
                                        <div className="duration-500 h-auto rounded-full w-28 p-8 bg-[#151515] group-hover:bg-orange-500">
                                            <data.icon className='h-12 w-auto' />
                                        </div>
                                    </center>
                                    <div className="text-center">
                                        <h1 className="mt-4 text-2xl uppercase group-hover:text-orange-500 font-semibold">{data.name}</h1>
                                        <p className="mt-1 uppercase group-hover:text-gray-500 font-semibold">{data.subtitle}</p>

                                        <h1 className="mt-8 text-orange-500 text-3xl font-semibold">{data.price}</h1>

                                        <div className="">
                                            {
                                                data.listitems.map((subdata, subindex) => {
                                                    return (
                                                        <div className="" key={subindex}>
                                                            <h1 className="group-hover:text-gray-500 font-semibold p-2">{subdata.name}</h1>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>

                                        <div className="mt-8">
                                            <a href="#">
                                                <button className='duration-500 bg-transparent border border-orange-500 py-2 px-8 group-hover:bg-orange-500'>
                                                    Explore More
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }

                    <div className="xl:hidden block">
                        <div className="bg-[#0a0a0a] p-4 rounded h-full">
                            <img src={bodyb} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PricingPlan