import React, { useState } from 'react'
import SignUp from './SignUp';
import DefultInput from '../../components/Forms/DefultInput';


const Login = () => {
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

    const headleSubmit = (e) => {
        e.preventDefault()

        try {

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
                        <form onChange={headleSubmit} method="post">
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