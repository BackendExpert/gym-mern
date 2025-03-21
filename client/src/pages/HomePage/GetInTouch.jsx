import React from 'react'
import { FaLocationDot, FaMobile, FaEnvelope } from "react-icons/fa6";

const GetInTouch = () => {
    return (
        <div className='text-white text-center bg-[#151515] py-24 xl:px-40 md:px-20 px-4'>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
                <div className="flex bg-orange-500 h-auto rounded-full  p-8 ">
                    <FaLocationDot className='h-12 w-auto' />
                    <div className="">
                        <h1 className="ml-2 pt-2">88, Cross Street, XYZ, 00000</h1>
                    </div>
                </div>

                <div className="flex bg-orange-500 h-auto rounded-full  p-8 ">
                    <FaMobile className='h-12 w-auto' />
                    <div className="">
                        <h1 className="ml-2 pt-2">+94 75 462 3575 | +94 75 462 3575</h1>
                    </div>
                </div>

                <div className="flex bg-orange-500 h-auto rounded-full  p-8 ">
                    <FaEnvelope className='h-12 w-auto' />
                    <div className="">
                        <h1 className="ml-2 pt-2">support.fitflex@example.com</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default GetInTouch