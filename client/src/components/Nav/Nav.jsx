import React, { useState } from 'react';

import { BsList } from 'react-icons/bs';

const Nav = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navData = [
        { id: 1, name: 'Home', link: '/' },
        { id: 2, name: 'About Us', link: 'AboutAs' },
        { id: 3, name: 'Services', link: 'Service' },
        // { id: 4, name: 'Portfolio', link: '' },
        // { id: 5, name: 'Blog', link: '' },
        { id: 6, name: 'Projects', link: 'Projects' },
        { id: 6, name: 'Careers', link: 'Careers' },
        { id: 7, name: 'Contact Us', link: 'ContactUs' },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className='h-auto py-8 px-6 bg-transparent shadow-md text-orange-500'>
            <div className="flex justify-between items-center">
                <div className="">
                    <h1 className="text-lg font-bold">BLACK ALPHA LABS</h1>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMobileMenu}>
                        <BsList size={24} />
                    </button>
                </div>

                <div className="hidden md:flex space-x-6">
                    {navData.map((data) => (
                        <a href={data.link} key={data.id} className="block duration-500 hover:underline font-bold">
                            {data.name}
                        </a>
                    ))}
                </div>
                <div className="xl:block hidden">
                    asdas
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`absolute top-0 left-0 w-full bg-white shadow-md transition-transform duration-300 ease-in-out transform ${
                    isMobileMenuOpen ? 'translate-y-24' : '-translate-y-full'
                } md:hidden`}
            >
                <div className="py-4">
                    {navData.map((data) => (
                        <a href={data.link} key={data.id} className="block py-2 px-4 border-b border-gray-200">
                            {data.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Nav;