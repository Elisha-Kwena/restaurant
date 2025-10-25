export default function PersonalInfo(){
    return(
        <>
            <div className="w-full">
                <form className="w-full flex flex-col gap-6">
                    <div className="w-full flex items-center justify-between">
                        <div className="flex items-center justify-start gap-6">
                            <div className="flex items-center justify-start gap-4">
                                <input type="radio" id="sex" name="sex"/>
                                <label htmlFor="sex" className="text-gray-500 text-lg">Male</label>
                            </div>
                            <div className="flex items-center justify-start gap-4">
                                <input type="radio" id="sex" name="sex"/>
                                <label htmlFor="sex" className="text-gray-500 text-lg">Female</label>
                            </div>
                        </div>
                        <div className="flex items-center justify-start gap-4 bg-gray-500 rounded p-2">
                            <label htmlFor="profile" className="text-white text-lg">Profile picture</label>
                            <input type="file" id="profile" name="profile"/>  
                        </div>
                    </div>

                    <div className="w-full grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="firstName">First Name :</label>
                            <input type="text" id="firstName" className="bg-gray-200 text-gray-600 p-3 px-4 font-bold rounded-full" placeholder="First Name :" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="lastName">Last Name :</label>
                            <input type="text" id="lasttName" className="bg-gray-200 text-gray-600 p-3 px-4 font-bold rounded-full" placeholder="Last Name :" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="userName">UserName :</label>
                            <input type="text" id="userName" className="bg-gray-200 text-gray-600 p-3 px-4 font-bold rounded-full" placeholder="UserName :" />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email">Email :</label>
                            <input type="text" id="email" className="w-full bg-gray-200 text-gray-600 p-3 px-4 font-bold rounded-full" placeholder="Email :" />
                        </div>
                        <div className="flex flex-col gap-1mt-4">
                            <label htmlFor="phone">Phone Number :</label>
                            <input type="tel" id="phone" className="w-full bg-gray-200 text-gray-600 p-3 px-4 font-bold rounded-full" placeholder="Phone Number :" />
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="address">Address :</label>
                            <input type="text" id="address" className="bg-gray-200 text-gray-600 p-3 px-4 font-bold rounded-full" placeholder="Address :" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="street">Street :</label>
                            <input type="text" id="street" className="bg-gray-200 text-gray-600 p-3 px-4 font-bold rounded-full" placeholder="Street :" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="plot">Plot Name :</label>
                            <input type="text" id="plot" className="bg-gray-200 text-gray-600 p-3 px-4 font-bold rounded-full" placeholder="(optional) :" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="house">House NO :</label>
                            <input type="text" id="house" className="bg-gray-200 text-gray-600 p-3 px-4 font-bold rounded-full" placeholder="(optional) :" />
                        </div>
                    </div>
                </form>
            </div>
                
        </>
    )
}