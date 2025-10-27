"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
export default function SignIn(){
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        email:"",
        password:"",
    })
    const [error,setError] = useState<String | null>(null)

    const [showPassword, setShowPassword] = useState({
        password:false
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
        if (error) setError(null)
    }

    const togglePasswordVisibility = (field:'password') => {
        setShowPassword((prev) =>({
            ...prev,
            [field]: !prev[field]
        }))
    }

    const handleFocus = (field: string) => {
        setFocusedField(field);
    };
    const handleBlur = () => {
        setFocusedField(null);
    };

    const handleSubmit = ()=>{
        console.log(formData)
    }



    return(
        <>
            <div className="w-[90%]">
                <div className="w-full">
                    <div className="w-full flex items-center justify-between">
                        <h1 className="text-white font-extrabold text-lg md:text-[24px]">Login to Your Account</h1>
                        <div className="w-14 h-14 md:hidden relative">
                            <Image
                                src="/icons/logo.png"
                                fill
                                alt="logo"
                            />
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center gap-2 mt-3">
                        <div className="w-4 h-1 bg-white"></div>
                        <h1 className="text-white font-extrabold text-[18px]">OR</h1>
                        <div className="w-4 h-1 bg-white"></div>
                    </div>
                    <div className="w-full bg-white/10 rounded-full mt-3 p-1 shadow-inset flex gap-3 items-center justify-between">
                        <button className="w-1/2 rounded-full p-2 cursor-pointer transition-all ease-in-out duration-300 group hover:bg-red-600  flex items-center justify-center gap-2 shadow bg-white">
                            <div className="w-10 h-10 relative">
                                <Image 
                                    src="/icons/google.png"
                                    alt="google"
                                    fill
                                    className="object-contain object-center"
                                />
                            </div>
                            <span className="text-black group-hover:text-blue-600 transition-all ease-in-out duration-300 font-bold md:text-md text-sm">Login with google</span>
                        </button>
                        <button className="w-1/2 rounded-full p-2 cursor-pointer hover:bg-blue-600  transition-all ease-in-out duration-300 group  text-white flex items-center justify-center gap-2 shadow bg-white">
                            <div className="w-10 h-10 relative">
                                <Image 
                                    src="/icons/facebook.png"
                                    alt="facebook"
                                    fill
                                    className="object-contain object-center"
                                />
                            </div>
                            <span className="text-black group-hover:text-white transition-all ease-in-out duration-300 font-bold md:text-md text-sm">Login with facebook</span>
                        </button>
                    </div>
                </div>
                <form action="" className="w-full flex flex-col gap-4 mt-6">
                    <div className="input-container bg-gray-200 rounded-full p-1 w-full flex items-center justify-between">
                        <input 
                        type="email" 
                        name="email"
                        onFocus={()=>handleFocus("email")}
                        onBlur={handleBlur}
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-[85%] p-3 px-4 bg-white rounded-full font-mono text-gray-700 focus:outline-orange-600" placeholder="Email :" />
                        <div className="flex-1 flex items-center justify-center">
                            <EmailRoundedIcon className={`text-[30px]! ${focusedField === "email"?"text-orange-600":"text-white "}`}/>
                        </div>
                    </div>
                    <div className="input-container bg-gray-200 rounded-full p-1 w-full flex items-center justify-between">
                        <input 
                        name="password"
                        onFocus={()=>handleFocus("password")}
                        onBlur={handleBlur}
                        type={showPassword.password ? "text":"password"} 
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-[85%] p-3 px-4 bg-white rounded-full font-mono text-gray-700 focus:outline-orange-600" placeholder="Password :" />
                        <div className="flex-1 flex items-center justify-center">
                            <button
                            onClick={()=>togglePasswordVisibility('password')}
                            
                            type="button" className="button cursor-pointer flex items-center justify-center">
                                {showPassword.password ? <VisibilityRoundedIcon className={`text-[30px]! ${focusedField === "password"?"text-orange-600":"text-white "}`}/>: <VisibilityOffRoundedIcon className={`text-[30px]! ${focusedField === "password"?"text-orange-600":"text-white "}`}/>}
                            </button>
                        </div>
                    </div>

                    <div className="w-full">
                        <button className="w-full text-center text-white font-bold p-3 bg-red-600  shadow cursor-pointer rounded-full mt-8">Sign to Your Account</button>
                    </div>
                    <div className="w-full mt-4 flex gap-4">
                        <p className="text-white">Don't have an account ?</p>
                        <Link href="/signup" className="text-blue-600 font-bold hover:underline">SignUp</Link>
                    </div>
                </form>
            </div>
        </>
    )
}