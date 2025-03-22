import React, { useState } from 'react';
import { FaDumbbell } from "react-icons/fa6";
import { BsList } from 'react-icons/bs';

const Nav = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navData = [
        { id: 1, name: 'Home', link: '/' },
        { id: 2, name: 'About Us', link: '/AboutUs' },
        { id: 3, name: 'Services', link: '/Services' },
        { id: 4, name: 'Products', link: '#' },
        { id: 5, name: 'Trainers', link: '#' },
        { id: 6, name: 'Contact Us', link: '/#contactUs' },
        { id: 7, name: 'Login', link: '/signin' },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className='h-auto py-8 px-6 bg-transparent shadow-md text-orange-500'>
            <div className="flex justify-between items-center">
                <div className="flex">
                    <FaDumbbell className='h-10 w-auto'/>
                    <h1 className="text-2xl mt-1 pl-2 font-bold"><span>Fit</span><span className='text-white'>Flex</span></h1>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMobileMenu}>
                        <BsList size={24} />
                    </button>
                </div>

                <div className="hidden md:flex space-x-6">
                    {navData.map((data) => (
                        <a href={data.link} key={data.id} className="uppercase block duration-500 hover:text-white font-bold ">
                            <p className="tracking-[0.1rem]">{data.name}</p>
                        </a>
                    ))}
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`absolute top-0 left-0 w-full   shadow-md transition-transform duration-300 ease-in-out transform ${
                    isMobileMenuOpen ? 'translate-y-24 bg-white/10 backdrop-blur-xl' : '-translate-y-full'
                } md:hidden`}
            >
                <div className="py-4">
                    {navData.map((data) => (
                        <a href={data.link} key={data.id} className="block py-2 px-4 duration-500 hover:text-white">
                            {data.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Nav;