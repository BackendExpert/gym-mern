import React, { useState } from 'react'
import DefultInput from '../../components/Forms/DefultInput';


const SignUp = () => {
    const [signupdata, setsignupdata] = useState({
        username: '',
        email: '',
        password: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setsignupdata((prevData) => ({
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
        <div className="rounded-md md:mr-2 bg-[#151515] py-16 ">
            <form onChange={headleSubmit} method="post">
                <h1 className="uppercase text-xl font-semibold text-center">Welcome to <span className='text-orange-500 fon-semibold'>FitFlex</span></h1>
            
                <div className="px-10 py-4">
                    <p className="">Username</p>
                    <div className="mt-2">
                        <DefultInput 
                            type={'text'}
                            name={'username'}
                            value={signupdata.username}
                            placeholder={"Enter Username"}
                            required={true}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="px-10 py-4">
                    <p className="">Email Address</p>
                    <div className="mt-2">
                        <DefultInput 
                            type={'email'}
                            name={'email'}
                            value={signupdata.email}
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
                            value={signupdata.password}
                            placeholder={"Enter Password"}
                            required={true}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="px-10 pt-8">
                    <button className='py-4 font-semibold px-4 w-full bg-orange-500 text-white rounded'>
                        Create New Account
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SignUp