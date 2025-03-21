import React from 'react'

const WhyChooseUs = () => {
    return (
        <div className="bg-[#0a0a0a] text-white py-16">
            <div className='xl:px-28 md:px-10 px-4'>
                <div className="grid md:grid-cols-3 gap-0">
                    <div data-aos="zoom-in" className="xl:min-h-[70vh] md:min-h-[50vh] min-h-96 w-full bg-[url(https://wallpapercave.com/wp/wp12101065.jpg)] bg-cover bg-center"></div>
                    <div data-aos="zoom-out" className="w-full bg-[#151515]">
                        <div className="py-8 text-center xl:px-8 md:px-4 px-8">
                            <h1 className="text-orange-500 font-semibold text-3xl uppercase">Why Choose <span className='text-white'>FitFlex</span> ?</h1>

                            <div className="mt-8">
                                <div className="mb-2">
                                    <p className="py-2 text-xl text-orange-500">
                                        Effortless Member Management
                                    </p>
                                    <p className="text-gray-500">Track memberships, payments, and attendance in one place.</p>
                                </div>

                                <div className="mb-2">
                                    <p className="py-2 text-xl text-orange-500">
                                        Advanced Workout & Diet Planning
                                    </p>
                                    <p className="text-gray-500">Provide personalized fitness plans with ease.</p>
                                </div>

                                <div className="mb-2">
                                    <p className="py-2 text-xl text-orange-500">
                                    Seamless Billing & Payments
                                    </p>
                                    <p className="text-gray-500">Automate invoices and integrate multiple payment gateways.</p>
                                </div>

                                <div className="mb-2">
                                    <p className="py-2 text-xl text-orange-500">
                                    Real-time Performance Analytics
                                    </p>
                                    <p className="text-gray-500">Get insights into gym performance and member activity.</p>
                                </div>

                                <div className="mb-2">
                                    <p className="py-2 text-xl text-orange-500">
                                    User-Friendly Experience
                                    </p>
                                    <p className="text-gray-500">Intuitive design for both gym owners and members.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="xl:min-h-[70vh] md:min-h-[50vh] min-h-96 w-full bg-[url(https://wallpapercave.com/wp/wp5412909.jpg)] bg-cover bg-center"></div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs