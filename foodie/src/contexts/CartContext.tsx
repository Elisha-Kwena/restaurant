"use client"
import {createContext,useContext,ReactNode} from 'react'
import { useState } from 'react';
interface CartContextType{
    isCartOpen:boolean;
    toggleCart:()=> void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({children}:{children:ReactNode})=>{
    const [isCartOpen,setIsCartOpen] = useState<boolean>(false)
    const toggleCart = () =>{
        setIsCartOpen((prev)=>!prev)
    };
    return(
        <CartContext.Provider value={{isCartOpen,toggleCart}}>
            {children}
        </CartContext.Provider>
    )

}

export const useCart = () =>{
    const context = useContext(CartContext);
    if (context === undefined){
        throw new Error("useCart must be used within CartProvider")
    }
    return context
}