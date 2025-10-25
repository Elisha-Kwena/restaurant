import Image, { StaticImageData } from "next/image"

export interface FoodDetails{
    id:string | number;
    label:string;
    banner:string | StaticImageData;
    price:number;
    category?:string;

}


interface FoodCardProps extends FoodDetails{
    onAddToCart:(food:FoodDetails)=>void

}

export default function FoodCard({label,banner,price,category,onAddToCart}:FoodCardProps){
    const handleAddToCart = () =>{
        onAddToCart({id:label,label,banner,price,category})
    }

    return(
        <>
            <div className="flex flex-col gap-2 shadow p-2 rounded-xl bg-white">
                <div className="w-full h-30 relative">
                    <div className="absolute w-full mx-auto -bottom-4 -top-16">
                        <div className="w-full mx-auto h-full relative">
                            <Image
                                src={banner}
                                alt={label}
                                fill
                                className="object-contain object-center"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-0">
                    <div className="w-full flex-1">
                        <h1 className="text-xl font-bold text-center">{label}</h1>
                        <p className="text-gray-500 text-center font-serif">Starting from</p>
                        <p className="text-black font-extrabold text-center font-serif">Kshs.{price}.00</p>
                    </div>
                    <div className="w-full flex items-center justify-between mt-2 gap-2">
                        <button onClick={handleAddToCart} className="text-center cursor-pointer p-2 w-1/2 rounded bg-[orangered] text-white font-bold">Add to cart</button>
                        <button className="text-center cursor-pointer p-2 w-1/2 rounded bg-[orange] text-white font-bold">Order</button>
                    </div>
                </div>
            </div>
        </>
    )
}