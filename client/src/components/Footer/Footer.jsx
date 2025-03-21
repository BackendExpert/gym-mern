import React from 'react'
import { FaDumbbell } from 'react-icons/fa'


const Footer = () => {
    const currentyear = new Date().getFullYear()
    return (
        <div className="">
            <div className='xl:px-28 md:px-10 px-4 relative md:bg-[url(https://wallpapercave.com/wp/wp13172124.jpg)] bg-[url(https://wallpapercave.com/wp/wp4960973.jpg)] bg-cover bg-center py-20'>
                <div className='absolute inset-0 bg-black opacity-90'></div>
                <div className="relative">
                    <div className=" grid xl:grid-cols-4 md:grid-cols-2 gap-4 text-white">
                        <div className="">
                            <div className="flex">
                                <FaDumbbell className='h-10 w-auto fill-orange-500' />
                                <h1 className="text-2xl mt-1 pl-2 font-bold"><span className='text-orange-500'>Fit</span><span className='text-white'>Flex</span></h1>
                            </div>
                            <div className="pt-2 text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam deserunt, animi laudantium pariatur recusandae eligendi odit voluptatum ducimus eveniet reprehenderit quos eum unde cum maxime dolorem inventore doloremque explicabo labore?
                            </div>
                        </div>

                        <div className="">
                            <h1 className="text-white uppercase text-2xl">Useful links</h1>
                            <div className="text-gray-500">
                                <p className="p-4 duration-500 hover:text-white">
                                    <a href="">About</a>
                                </p>
                                <p className="p-4 duration-500 hover:text-white">
                                    <a href="">Blog</a>
                                </p>
                                <p className="p-4 duration-500 hover:text-white">
                                    <a href="">Classes</a>
                                </p>
                                <p className="p-4 duration-500 hover:text-white">
                                    <a href="">Contact</a>
                                </p>
                            </div>
                        </div>


                        <div className="">
                            <h1 className="text-white uppercase text-2xl">Support</h1>
                            <div className="text-gray-500">
                                <p className="p-4 duration-500 hover:text-white">
                                    <a href="">Login</a>
                                </p>
                                <p className="p-4 duration-500 hover:text-white">
                                    <a href="">My account</a>
                                </p>
                                <p className="p-4 duration-500 hover:text-white">
                                    <a href="">Subscribe</a>
                                </p>
                                <p className="p-4 duration-500 hover:text-white">
                                    <a href="">Contact</a>
                                </p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <div className="bg-[url(https://wallpapercave.com/wp/wp12914973.jpg)] bg-cover bg-center h-40"></div>
                        </div>
                    </div>

                    <div className="text-white mt-4">
                        <p className="">&copy; <span className='text-orange-500'>Fitflex</span> {currentyear} | allrights reserved</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer