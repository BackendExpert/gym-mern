import React, { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";
import { sidemenu } from "./DashSideMenu";
import { Link } from "react-router-dom";
import userImg from '../../assets/user.png'
import axios from "axios";
import { MdWork } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { FaDumbbell } from "react-icons/fa";

const DashSide = () => {
    // const RoleUser = secureLocalStorage.getItem("loginR");
    // const EmailUser = secureLocalStorage.getItem("loginE");
    // const Username = secureLocalStorage.getItem("loginU");


    const currentID = localStorage.getItem("dashmenuID") || "";

    const currentMenu = (id) => {
        localStorage.setItem("dashmenuID", id);
    };

    const loginToken = localStorage.getItem('login')

    const [getuserdata, setgetuserdata] = useState([])

    //   useEffect(() => {
    //       axios.get(import.meta.env.VITE_APP_API + '/user/getuserdata/' + EmailUser, {
    //           headers: {
    //               'Authorization': `Bearer ${loginToken}`,
    //           }
    //       })
    //       .then(res => setgetuserdata(res.data.Result))
    //       .catch(err => console.log(err))
    //   }, [])

    return (
        <div className="w-full">
            <div className="flex ml-4">
                <div className="pt-3 pr-2">
                    <FaDumbbell className="h-8 w-auto fill-orange-500" />
                </div>
                <h1 className="my-4 text-center font-semibold uppercase text-xl text-orange-500">
                    Fit <span className="text-white">Flex</span>
                </h1>
            </div>

            <div className="flex px-4">
                <div className="my-4">
                    {/* <img 
                src={getuserdata?.image ? `${import.meta.env.VITE_APP_API}/${getuserdata.image}` : userImg} 
                alt="User Image" 
                className="mt-0 rounded-full h-10 object-cover w-auto" 
            /> */}
                </div>
                <div className="mt-4 pl-4">
                    {/* <p className="uppercase text-gray-500">{Username}</p> */}
                    <p className="uppercase text-white">TestUser</p>
                    <h1 className="text-sm uppercase font-semibold text-orange-500">
                        {/* {RoleUser} */}
                        admin
                    </h1>
                </div>
            </div>

            <div className="mt-4">
                {sidemenu.map((menu, index) => {
                    const isActive = currentID === String(menu.id); // Ensure comparison works
                    // if (RoleUser === "admin") {
                    //     if (menu.id !== 4) {
                    //         return (
                    //             <Link to={menu.link} key={menu.id}>
                    //                 <div
                    //                     onClick={() => currentMenu(menu.id)}
                    //                     className={`py-4 pl-4 cursor-pointer duration-500 flex items-center ${isActive
                    //                             ? "text-[#0f5a97] font-semibold"
                    //                             : "text-gray-400 hover:pl-6 hover:text-[#0f5a97]"
                    //                         }`}
                    //                 >
                    //                     <menu.icon className="h-8 w-auto" />
                    //                     <h1 className="pt-1 pl-4">{menu.name}</h1>
                    //                 </div>
                    //             </Link>
                    //         );
                    //     }
                    // }

                    return (
                        <Link to={menu.link} key={menu.id}>
                            <div
                                onClick={() => currentMenu(menu.id)}
                                className={`py-4 pl-4 cursor-pointer duration-500 flex items-center ${isActive
                                        ? "text-orange-500 font-semibold"
                                        : "text-white hover:pl-6 hover:text-orange-500"
                                    }`}
                            >
                                <menu.icon className="h-8 w-auto" />
                                <h1 className="pt-1 pl-4">{menu.name}</h1>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default DashSide;