import { useSidebar } from "@/contexts/SidebarContext"
import Image, { StaticImageData } from "next/image";
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';

import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import QueryBuilderRoundedIcon from '@mui/icons-material/QueryBuilderRounded';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
interface CartItem{
    id:number | string;
    label:string;
    price:number;
    quantity:number;
    banner:string | StaticImageData
}

interface CartProps{
    items:CartItem[];
    onIncrease:(itemId:string | number)=>void;
    onDecrease:(itemId:string | number)=>void;
    onRemove:(itemId:string | number)=>void;
}
export default function Cart({items,onDecrease,onIncrease,onRemove}:CartProps){

    const {isOpen} = useSidebar();
    const cartTotal = items.reduce((total,item)=>{
        return total + item.price * item.quantity
    },0)


    return(
        <>
        <div className="p-2 flex flex-col gap-2 rounded h-full shadow bg-white w-full">
            <div className="w-full rounded bg-gray-200 p-2">
                <h1 className="text-xl font-bold text-[20px]">Delivery address</h1>
                <div className="w-full flex items-center justify-start gap-3">
                    <div className="w-6 h-6  rounded-md">
                        <LocationOnRoundedIcon className="text-gray-400" />
                    </div>
                    <p className="text-gray-500 text-sm">Kisumu ndogo, West gate, door-16</p>
                </div>
                <div className="w-full flex items-center justify-start gap-3 mt-1">
                    <div className="w-6 h-6 rounded-md">
                        <QueryBuilderRoundedIcon className="text-gray-400" />
                    </div>
                    <p className="text-gray-500 text-sm">22 min</p>
                </div>
            </div>
            <div className="w-full flex items-center justify-between mt-2">
                <div className="flex items-center justify-start gap-2">
                    <div className="w-8 h-8 rounded flex items-center justify-center">
                        <LocalMallRoundedIcon className="text-[orangered]"/>
                    </div>
                    <h1 className="text-black text-[14px]">Cart</h1>
                </div>
                
                <p className="flex items-center justify-end gap-4">
                    <span className="text-black font-bold">Order ID: </span>
                    <span className="text-gray-500">#40563 </span>
                </p>
            </div>
            <div className="w-full grid grid-cols-3 gap-2 rounded-full p-1 shadow-inset border border-gray-200">
                <button className="p-2 py-3 text-white bg-[orangered] shadow-xl font-bold rounded-full text-center capitalize cursor-pointer hover:shadow hover:bg-[orangered] hover:text-white transition-all duration-500 ease-in-out">Cart</button>
                <button className="p-2 py-3 text-gray-500 font-bold rounded-full text-center capitalize cursor-pointer hover:bg-[orangered] hover:shadow hover:text-white transition-all duration-500 ease-in-out">Dine In</button>
                <button className="p-2 py-3 text-gray-500 font-bold rounded-full text-center capitalize cursor-pointer hover:bg-[orangered] hover:shadow hover:text-white transition-all duration-500 ease-in-out">Takeaway</button>
            </div>
            <div className="w-full flex-1 flex flex-col gap-1 mt-2 border-b border-dotted border-black overflow-scroll">
                {items.length === 0 ?(
                    <p className="text-gray-500 italic">Your cart is currently empty</p>
                ):( 
                    items.map(item=>(
                      <div key={item.id} className="w-full flex items-center justify-between gap-2 border border-gray-400 pr-2 py-2 rounded-xl">
                            <div className="w-18 h-18 relative">
                                <Image
                                    src={item.banner}
                                    alt={item.label}
                                    fill
                                    className="object-contain object-center"
                                />
                            </div>
                            <div className="flex-1 flex flex-col">
                                <h1 className="text-black font-bold capitalize text-md">{item.label}</h1>
                                <h1 className="text-gray-400 font-bold capitalize text-md">kshs.{(item.price * item.quantity).toFixed(2)}</h1>
                                
                            </div>
                            <div className="flex .ite"></div><div className="w-18 mr-2">
                                <div className="flex items-center gap-2 justify-start">
                                    <button onClick={() => onDecrease(item.id)} className="group w-6 h-6 rounded-full bg-gray-300 cursor-pointer hover:bg-[orangered] flex item-center justify-center">
                                        <RemoveIcon className="group-hover:text-white"/>
                                    </button>
                                    <span className="text-black">{item.quantity}</span>
                                    <button onClick={() => onIncrease(item.id)} className="group w-6 h-6 rounded-full bg-gray-300 cursor-pointer hover:bg-[orangered] flex item-center justify-center">
                                        <AddIcon className="group-hover:text-white"/>
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center justify-end">
                                <button onClick={() => onRemove(item.id)} className="bg-red-400 cursor-pointer text-white hover:bg-red-600 font-bold p-2 rounded">Remove</button>
                            </div>
                        </div>
                    ))
  
                )}

            </div>
            <div className="w-full border-b border-gray-400 pb-2 mt-6">
                <div className="w-full flex items-center justify-between">
                    <h1 className="text-black font-bold">Sub Total</h1>
                    <h2 className="text-gray-400 font-bold">Ksh. {cartTotal.toFixed(2)}</h2>
                </div>
                <div className="w-full flex items-center justify-between">
                    <h1 className="text-black font-bold">Delivery Charge</h1>
                    <h2 className="text-gray-400 font-bold">Ksh. 20.00</h2>
                </div>
            </div>
            <div className="w-full">
                <div className="w-full flex items-center justify-between">
                    <h1 className="text-black text-[14px] font-bold">Total Charge</h1>
                    <h2 className="text-black font-bold">Ksh. {(cartTotal + 20).toFixed(2)}</h2>
                </div>
                <button className="mt-3 text-xl cursor-pointer w-full bg-[orangered] text-white font-bold text-center rounded-full p-3">Confirm order</button>
            </div>
        </div>
        </>
    )
}