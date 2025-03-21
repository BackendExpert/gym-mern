import React from 'react'
import { gymplan } from './PlanData'

const PricingPlan = () => {
    return (
        <div className='text-white text-center bg-[#151515] py-24 xl:px-40 md:px-20 px-4'>
            <h1 className="text-orange-500 uppercase text-2xl">Our Plan</h1>
            <h1 className="text-3xl uppercase">Choose your pricing plan</h1>

            <div className="">
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                    {
                        gymplan.map((data, index) => {
                            return (
                                <div className="duration-500 hover:bg-white bg-transparent border border-orange-500 hover:border-white p-8 group" key={index}>
                                    <center>
                                        <div className="duration-500 h-auto rounded-full w-28 p-8 group-hover:bg-orange-500">
                                            <data.icon className='h-12 w-auto' />
                                        </div>
                                    </center>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PricingPlan