import React, { useEffect } from 'react'
import { useState } from 'react'
import secureLocalStorage from 'react-secure-storage'
import { FaBell, FaChevronDown, FaChevronUp, FaPowerOff } from "react-icons/fa";
import axios from 'axios';
import userImg from '../../assets/user.png'
import { FaUserCircle, FaUserCog } from "react-icons/fa";
import { MdOutlineHelp, MdLogout } from "react-icons/md";

const DashNav = () => {
    const Username = secureLocalStorage.getItem('loginU')
    const EmailUser = secureLocalStorage.getItem('loginE')

    const [menu, setmenu] = useState(false)

    const toggleMenu = () => {
        setmenu(!menu)
    }

    const healdeLogout = () => {
        localStorage.clear()
        window.location.reload()
    }

    const loginToken = localStorage.getItem('login')

    const [getuserdata, setgetuserdata] = useState([])

    // useEffect(() => {
    //     axios.get(import.meta.env.VITE_APP_API + '/user/getuserdata/' + EmailUser, {
    //         headers: {
    //             'Authorization': `Bearer ${loginToken}`,
    //         }
    //     })
    //     .then(res => setgetuserdata(res.data.Result))
    //     .catch(err => console.log(err))
    // }, [])

    return (
        <div className='bg-[#151515] py-8 shadow-md'>
            <div className="flex justify-between mr-4 pl-8">
                <div className="w-full">
                    <h1 className="uppercase font-semibold text-orange-500 mt-1">Dashboard</h1>
                </div>
                <div className="">
                    <div className="flex xl:mr-4 md:mr-20 mr-20 cursor-pointer" onClick={toggleMenu}>
                        {/* <img 
                        src={getuserdata?.image ? `${import.meta.env.VITE_APP_API}/${getuserdata.image}` : userImg} 
                        alt="User Image" 
                        className="h-8 w-auto rounded-full" 
                    /> */}
                        <div className="flex pl-4 pt-1 uppercase text-orange-500">
                            {Username}

                            <div className="pl-1 pt-1">
                                {
                                    menu ?
                                        <FaChevronUp className='h-4 w-auto' />
                                        :
                                        <FaChevronDown className='h-4 w-auto' />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`absolute bg-[#151515] right-4 w-auto top-24 py-4 mt-1 rounded shadow-xl 
                        transition-all duration-300 transform 
                        ${menu ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="">
                    <div className="flex border-b border-orange-500 px-8 pb-4">
                        <img src={userImg} alt="" className='h-10 w-auto rounded-full' />
                        <div className="pl-4 pt-1">
                            <h1 className="text-xs font-semibold text-orange-500">Jehan Weerasuriya</h1>
                            <p className="text-xs text-gray-500">jehanweerasuriya@example.com</p>
                        </div>
                    </div>

                    <div className="px-8 pt-4">
                        <div className="grid grid-cols-3 gap-6">
                            <a href="#" className='bg-orange-500 py-2 rounded-xl duration-500 hover:bg-orange-800'>
                                <center>
                                    <div className="text-white py-2 group-hover:text-orange-500">
                                        <FaUserCircle className='h-6 w-auto' />
                                    </div>
                                </center>
                            </a>

                            <a href="#" className='bg-orange-500 py-2 rounded-xl duration-500 hover:bg-orange-800'>
                                <center>
                                    <div className="text-white py-2">
                                        <FaUserCog className='h-6 w-auto' />
                                    </div>
                                </center>
                            </a>

                            <a href="#" className='bg-orange-500 py-2 rounded-xl duration-500 hover:bg-orange-800'>
                                <center>
                                    <div className="text-white py-2">
                                        <FaBell className='h-6 w-auto' />
                                    </div>
                                </center>
                            </a>

                            <a href="#" className='bg-orange-500 py-2 rounded-xl duration-500 hover:bg-orange-800'>
                                <center>
                                    <div className="text-white py-2">
                                        <MdOutlineHelp className='h-6 w-auto' />
                                    </div>
                                </center>
                            </a>


                            <a href="#" className='bg-orange-500 py-2 rounded-xl duration-500 hover:bg-orange-800'>
                                <center>
                                    <div className="text-white py-2">
                                        <MdLogout className='h-6 w-auto' />
                                    </div>
                                </center>
                            </a>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default DashNav