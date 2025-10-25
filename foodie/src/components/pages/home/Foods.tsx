"use client"
import { useState } from "react";
import FoodCard, {FoodDetails} from "@/components/ui/cards/FoodCard"
import { foodies } from "@/data/Foods"

interface CartItem extends FoodDetails{
    quantity:number
}



interface foodProps{
    selectedCategory:string | null;
    onAddToCart:(food:FoodDetails)=>void
}
export default function Foods({selectedCategory,onAddToCart}:foodProps){

    // const [cartItems,setCartItems] = useState<CartItem[]>([])

    let filteredFoods = null
    if (selectedCategory === "all"){
        filteredFoods = foodies
    }else{
        filteredFoods = foodies.filter((foodies) => foodies.category === selectedCategory)
    } 

    // const addToCart = (foodDetails : FoodDetails) => {
    //     const existingItem = cartItems.find(item => item.id === foodDetails.id);

    //     if (existingItem){
    //         setCartItems(cartItems.map(item =>
    //             item.id === foodDetails.id
    //                 ? {...item, quantity: item.quantity + 1}
    //                 : item
    //         ));
    //     }else{
    //         setCartItems([
    //             ...cartItems,
    //             { ...foodDetails, quantity: 1}
    //         ])
    //     }

    // }
    
    return(
        <>
            <div className="w-full grid md:grid-cols-4 grid-cols-2 gap-4 gap-y-16 mt-12 ">
                {filteredFoods.length > 0 ?(
                    filteredFoods.map((food,index)=>(
                        <FoodCard 
                        key={index}
                            id={food.id}
                            onAddToCart={onAddToCart}
                            label={food.label}
                            banner={food.banner}
                            price={food.price}
                            category={food.category}
                        />
                    ))
                ):(
                    <>
                    <div className="w-full text-center mt-4 shadow p-6 text-red-500 font-bold">No foods in this category</div>
                    </>
                ) }
            </div>
        </>
    )
}