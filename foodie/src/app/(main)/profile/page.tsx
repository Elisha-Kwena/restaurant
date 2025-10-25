"use client"
import Image from "next/image"
import { useSidebar } from "@/contexts/SidebarContext"
import Link from "next/link"
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';

import PersonalInfo from "@/components/pages/profile/Personal";
export default function UserProfile(){
    const {isOpen} = useSidebar()
    return(
        <>
            <div className={`md:min-h-screen bg-gray-200 md:pt-20 overflow-scroll transition-all duration-700 ease-in-out ${isOpen?"md:ml-84 ml-0ss":"ml-0 md:ml-18"}`}>
                <div className={`h-screen bg-gray-200 flex flex-col gap-2 fixed right-1 overflow-scroll pb-22 transition-all duration-700 ease-in-out ${isOpen?"md:left-84 left-0":"md:left-18 left-0"}`}>
                    <div className="mx-auto w-[80%] h-full flex items-start justify-between gap-4">
                        {/* sidebar */}
                        <div className="w-[30%] flex flex-col items-start rounded dhadow bg-white h-full p-2">
                            <div className="w-full h-46 relative rounded-full overflow-hidden">
                                <Image
                                    src="/user.png"
                                    fill
                                    alt="user"
                                    className="object-center object-contain"
                                />
                            </div>
                            <div className="w-full">
                                <h1 className="text-black font-extrabold text-[20px] text-center">RedHat_109</h1>
                                <h1 className="text-orange-600 font-extrabold text-[14px] text-center">Cashier</h1>
                            </div>
                            <div className="w-full mt-4 flex flex-col gap-2">
                                <button className="group w-full cursor-pointer bg-gray-200 shadow-inset p-2 rounded-full font-bold transition-all duration-500 ease-in-out hover:bg-orange-600 hover:text-white flex items-center justify-start gap-3">
                                    <AccountCircleRoundedIcon className="text-black group-hover:text-white"/>
                                    <span className="transition-all duration-500 ease-in-out">Personal Information</span>
                                </button>
                                <Link href="/home" className="w-full block bg-gray-200 shadow-inset p-2 rounded-full font-bold transition-all duration-500 ease-in-out hover:bg-orange-600 hover:text-white items-center justify-start gap-3 group">
                                    <LocalMallRoundedIcon className="text-black group-hover:text-white"/>
                                    <span className="transition-all duration-500 ease-in-out">Cart</span>
                                </Link>
                                <button className="group w-full cursor-pointer bg-gray-200 shadow-inset p-2 rounded-full font-bold transition-all duration-500 ease-in-out hover:bg-orange-600 hover:text-white flex items-center justify-start gap-3">
                                    <LockRoundedIcon className="text-black group-hover:text-white"/>
                                    <span className="transition-all duration-500 ease-in-out">Reset Password</span>
                                </button>
                                <button className="group w-full cursor-pointer bg-gray-200 shadow-inset p-2 rounded-full font-bold transition-all duration-500 ease-in-out hover:bg-orange-600 hover:text-white flex items-center justify-start gap-3">
                                    <LogoutRoundedIcon className="text-black group-hover:text-white"/>
                                    <span className="transition-all duration-500 ease-in-out">Logout</span>
                                </button>
                            </div>
                        </div>

                        {/* contents */}

                        <div className="flex-1 flex flex-col items-start rounded shadow bg-white h-full p-2 px-4">
                            <div className="w-full flex items-center justify-start">
                                <button className="cursor-pointer flex items-center justify-center hover:text-orange-600">
                                    <WidgetsRoundedIcon className="text-[30px]!"/>
                                </button>
                            </div>
                            <div className="w-full flex-1 overflow-scroll mt-4">
                                <PersonalInfo/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}