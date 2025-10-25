"use client"
import { useState,useEffect } from "react"
import { useSidebar } from "@/contexts/SidebarContext"
import { useCart } from "@/contexts/CartContext"
import Special from "@/components/pages/home/Banner"
import Cart from "@/components/pages/home/Cart"
import { categories } from "@/constants/Categories"
import Foods from "@/components/pages/home/Foods"

import { FoodDetails } from "@/components/ui/cards/FoodCard"
interface CartItem extends FoodDetails{
    quantity:number
}


export default function Home(){
    const {isOpen} = useSidebar()
    const {isCartOpen} = useCart()
    const [cartItems,setCartItems] = useState<CartItem[]>([])
    const [selectedCategory,setSelectedCategory] = useState<string | null>("all")

    const handleClick = (category:any) =>{
        console.log("clicked category", category)
        setSelectedCategory(category.label)
    }

    const increaseQuantity = (itemId:string |number) =>{
        setCartItems(cartItems.map(item =>
            item.id === itemId
                ?{ ...item,quantity:item.quantity + 1}
                :item
        ))
    } 
    const decreaseQuantity = (itemId:string | number) => {
        setCartItems(currentItems =>{
            const updatedItems = currentItems.map(item =>{
                if (item.id === itemId){
                    return {...item,quantity: item.quantity - 1};
                }
                return item
            })

            return updatedItems.filter(item => item.quantity > 0)
        }
            
            // currentItems.map(item=>{
            //     if (item.id === itemId){
            //         const newQuantity = item.quantity - 1;
            //         return {...item, quantity:newQuantity > 0 ? newQuantity : 0};
            //         }
            //     return item
            //     }
            // )
        )
    }

    const removeItem = (itemId:string | number) =>{
        setCartItems(cartItems.filter(item => item.id !== itemId))
    }




    const addToCart = (foodDetails : FoodDetails) => {
        const existingItem = cartItems.find(item => item.id === foodDetails.id);

        if (existingItem){
            setCartItems(cartItems.map(item =>
                item.id === foodDetails.id
                    ? {...item, quantity: item.quantity + 1}
                    : item
            ));
        }else{
            setCartItems([
                ...cartItems,
                { ...foodDetails, quantity: 1}
            ])
        }

    }
    // useEffect(()=>{
    //     setCartItems(prevItems => prevItems.filter(item => item.quantity > 0))
    // },[cartItems])
    return(
        <>
        <div className={`md:min-h-screen bg-gray-200 md:pt-20 overflow-scroll transition-all duration-700 ease-in-out ${isOpen?"md:ml-84 ml-0ss":"ml-0 md:ml-18"}`}>
            <div className={`h-screen bg-gray-200 flex flex-col gap-2 fixed right-1 overflow-scroll pb-22 transition-all duration-700 ease-in-out ${isOpen?"md:left-84 left-0":"md:left-18 left-0"}`}>
                <div className="w-full flex items-start justify-between gap-4">
                    <div className="w-full md:w-[70%]">
                        <Special/>
                        <div className="w-full flex flex-col gap-1 mt-4 pl-1">
                            <h1 className="text-[orangered] text-xl font-bold">Choose from popular categories</h1>
                            <div className="w-full shadow bg-white flex flex-wrap items-center justify-between gap-4 p-1">
                                {categories.map((cat,index)=>(
                                    <button
                                    onClick={()=>handleClick(cat)}
                                    key={index} className={`flex items-center justify-between gap-2 p-1 rounded group cursor-pointer transition-all duration-300 ease-in-out hover:bg-[orangered] ${selectedCategory === cat.label?"bg-[orangered]":"bg-transparent"}`}>
                                        <div className="w-6 h-6 rounded bg-gray-300"></div>
                                        <span className={`text-black font-bold capitalize group-hover:text-white transition-all duration-300 ease-in-out ${selectedCategory === cat.label ?"text-white":"text-black"}`}>{cat.label}</span>
                                    </button>
                                ))}
                            </div>
                            <div className="mt-2 w-full">
                                <Foods selectedCategory={selectedCategory} onAddToCart={addToCart}/>
                            </div>
                        </div>
                    </div>
                    <div className={`hidden md:flex md:flex-1 md:fixed absolute bottom-1 top-20 right-1 transition-all duration-700 ease-in-out ${isOpen ? "w-md":"w-[395px]"}`}>
                        
                        <Cart 
                        
                            items={cartItems}
                            onIncrease={increaseQuantity}
                            onDecrease={decreaseQuantity}
                            onRemove={removeItem}
                        />
                    </div>
                    {isCartOpen ? (
                        <>
                        <div className={`w-full z-100 flex-1 fixed pb-6 bg-gray-200 -bottom-4 top-18 transition-all duration-700 ease-in-out ${isCartOpen ?"right-0":"-right-[500px]"}`}>
                        <Cart 
                        
                            items={cartItems}
                            onIncrease={increaseQuantity}
                            onDecrease={decreaseQuantity}
                            onRemove={removeItem}
                        />
                    </div>
                        </>
                    ):(
                        <></>
                    )}
                </div>


            </div>
        </div>
        
        </>
    )
}