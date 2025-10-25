import Image from "next/image"
import Link from "next/link"
export default function Special(){
    return(
        <>
            <div className="w-full bg-[orangered] shadow rounded flex items-center justify-between p-4 relative overflow-hidden">
                <div className="flex items-center justify-start flex-col gap-6 pl-6 z-50">
                    <div className="w-full">
                        <h1 className="text-2xl md:text-[50px] font-mono font-extrabold text-white">BEST FOOD</h1>
                        <p className="text-white text-sm md:text-xl">Find food according to your wishes</p>
                        <p className="text-white text-sm md:text-xl">with the best quality</p>
                    </div>
                    <div className="w-full flex items-center justify-start">
                        <Link href="" className="bg-[orange] relative rounded-full p-2 md:p-3 px-6 shadow-xl font-bold text-white text-sm md:text-xl hover:bg-red-600 transition-all duration-300 ease-in-out border-2 border-[orange] hover:border-[orange]">Today's Special</Link>
                    </div>
                </div>
                <div className="md:w-md w-52 md:h-84 h-52 z-50">
                    <div className="relative w-full h-full">
                        <Image 
                            src="/samosa.png"
                            fill
                            alt="banner"
                            className="object-center object-contin"
                        />
                    </div>
                </div>
                

                {/* circles */}
                <div className="w-72 z-20 h-72 rounded-full bg-red-600 absolute -top-24 -left-30"></div>
                <div className="w-md h-112 rounded-full bg-[orange] absolute -bottom-30 -right-20"></div>
                <div className="w-24 h-24 rounded-full bg-[orange] absolute top-8 right-50"></div>
                <div className="w-24 h-24 rounded-full bg-[orange] absolute -top-10 -right-10"></div>
                <div className="w-18 h-18 rounded-full bg-red-600 absolute bottom-2 right-80"></div>
                <div className="w-10 h-10 rounded-full bg-red-600 absolute bottom-12 left-54"></div>
                <div className="w-6 h-6 rounded-full bg-red-600 absolute top-12 right-96"></div>
                <div className="w-4 h-4 rounded-full bg-yellow-600 absolute top-26 right-112"></div>
                <div className="w-10 h-10 rounded-full bg-[orange] absolute top-12 left-40"></div>
            </div>
        </>
    )
}