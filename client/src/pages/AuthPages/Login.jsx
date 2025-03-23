import React, { useState } from 'react'
import SignUp from './SignUp';
import DefultInput from '../../components/Forms/DefultInput';
import axios from 'axios';
import secureLocalStorage from 'react-secure-storage'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const [logindata, setlogindata] = useState({
        email: '',
        password: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setlogindata((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const headleSubmit = async(e) => {
        e.preventDefault()

        try {
            const res = await axios.post(import.meta.env.VITE_APP_API + '/auth/signin', logindata)
            if(res.data.Status === "Success"){
                navigate('/Dashboard/Home')    
                alert("Login Success")                
                localStorage.setItem("login", res.data.Token)
                secureLocalStorage.setItem("loginE", res.data.Result.email)
                secureLocalStorage.setItem("loginU", res.data.Result.username)
                secureLocalStorage.setItem("loginR", res.data.Result.isAdmin)
                localStorage.setItem("dashmenuID", 1)
                window.location.reload()
            }
            else{
                alert(res.data.Error)
            }
        }
        catch (err) {
            console.log(err)
        }
    }


    return (
        <div className='relative bg-[url(https://wallpapercave.com/wp/wp7578910.jpg)] bg-cover bg-center xl:min-h-screen'>
            <div className='absolute inset-0 bg-black opacity-90'></div>
            <div className="relative text-white md:pt-64 pt-40 xl:px-28 md:px-10 px-4">
                <div className="md:flex justify-between">
                    <div className="md:my-0 my-4 rounded-md md:mr-2 bg-[#151515] py-16 md:w-1/2">
                        <form onSubmit={headleSubmit} method="post">
                            <h1 className="uppercase text-xl font-semibold text-center">Welcome Back to <span className='text-orange-500 fon-semibold'>FitFlex</span></h1>

                            <div className="px-10 py-4">
                                <p className="">Email Address</p>
                                <div className="mt-2">
                                    <DefultInput
                                        type={'email'}
                                        name={'email'}
                                        value={logindata.email}
                                        placeholder={"Enter Email Address"}
                                        required={true}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="px-10 py-4">
                                <p className="">Password</p>
                                <div className="mt-2">
                                    <DefultInput
                                        type={'password'}
                                        name={'password'}
                                        value={logindata.password}
                                        placeholder={"Enter Password"}
                                        required={true}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="px-10 pt-8">
                                <button className='py-4 font-semibold px-4 w-full bg-orange-500 text-white rounded'>
                                    Login Back to System
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="md:py-0 py-4 md:w-1/2">
                        <SignUp />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login