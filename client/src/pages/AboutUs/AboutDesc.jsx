import React from 'react';

const AboutDesc = () => {
    return (
        <div className="bg-[#0a0a0a] py-12 text-white xl:px-28 md:px-10 px-4 text-center">
            {/* About Us Section */}
            <div className="md:flex items-center gap-8 my-16">
                {/* Image (Visible on small screens) */}
                <div data-ao="zoom-in" className="md:hidden block relative w-full bg-[url(https://wallpapercave.com/uwp/uwp4614402.jpeg)] bg-cover bg-center min-h-64 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 text-center">
                        <h1 className="uppercase text-orange-500 font-semibold text-3xl">About Us</h1>
                        <p className="text-white text-lg">FitFlex</p>
                    </div>
                </div>

                {/* About Us Text Content */}
                <div data-aos="zoom-out" className="md:w-2/3 bg-[#151515] p-8 rounded-lg">
                    <h1 className="text-orange-500 text-2xl uppercase font-semibold pb-4"></h1>
                    <p>
                        Welcome to <strong>FitFlex</strong>, the ultimate gym management system designed to revolutionize fitness operations. Whether you're managing a small studio or a large fitness center, FitFlex streamlines everything from member registrations to workout tracking, ensuring a seamless experience for both gym owners and fitness enthusiasts.
                    </p>
                </div>

                {/* Image (Visible on medium+ screens) */}
                <div data-aos="zoom-in" className="hidden md:flex relative md:w-1/3 bg-[url(https://wallpapercave.com/uwp/uwp4614402.jpeg)] bg-cover bg-center min-h-64 items-center justify-center text-center rounded-lg">
                    <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                    <div className="relative z-10">
                        <h1 className="uppercase text-orange-500 font-semibold text-3xl">About Us</h1>
                        <p className="text-white text-lg">FitFlex</p>
                    </div>
                </div>
            </div>

            {/* Our Mission Section */}
            <div className="md:flex items-center gap-8 my-16">
                {/* Image (Visible on small screens) */}
                <div data-aos="zoom-out" className="relative md:w-1/3 bg-[url(https://wallpapercave.com/uwp/uwp4614403.jpeg)] bg-cover bg-center min-h-64 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 text-center">
                        <h1 className="uppercase text-orange-500 font-semibold text-3xl">Our Mission</h1>
                        <p className="text-white text-lg">FitFlex</p>
                    </div>
                </div>

                {/* About Us Text Content */}
                <div data-aos="zoom-in" className="md:w-2/3 bg-[#151515] p-8 rounded-lg">
                    <h1 className="text-orange-500 text-2xl uppercase font-semibold pb-4"></h1>
                    <p>
                        At <strong>FitFlex</strong>, we aim to empower fitness businesses with cutting-edge technology that simplifies management, enhances member engagement, and drives growth. Our system eliminates manual processes, allowing gym owners to focus on what truly matters—helping people achieve their fitness goals.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default AboutDesc;
