import React from 'react'

const Tools = () => {
    return (
        <div className="bg-[#0a0a0a]">
            <div className='xl:px-28 md:px-10 px-4 text-white'>
                <div className="grid grid-cols-4 gap-6 py-16">
                    <div className="text-center bg-orange-500 p-6 rounded-xl">
                        <h1 className="text-xl uppercase">BMI Calculator</h1>
                    </div>
                    <div className="text-center bg-orange-500 p-6 rounded-xl">
                        <h1 className="text-xl uppercase">Weight Converter</h1>
                    </div>
                    <div className="text-center bg-orange-500 p-6 rounded-xl">
                        <h1 className="text-xl uppercase">Height Converter</h1>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Tools