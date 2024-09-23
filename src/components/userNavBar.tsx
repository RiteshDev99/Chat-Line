import { CiSearch } from "react-icons/ci";

import { FaVideo } from "react-icons/fa6";
import { TbPinFilled } from "react-icons/tb";


const UserNavBar = () => {
    return (
        <>
            <div className="h-[30vh] w-full bg-[#e3f5ff] drop-shadow-xl">
                <div className="h-[20vh] w-full  flex items-center px-11 space-x-10 border-b-2">
                    <div className="h-[9vh] w-[9vh]  bg-center overflow-hidden bg-cover rounded-md">

                        <img
                            src="https://media.istockphoto.com/id/1082483460/photo/beautiful-black-man.jpg?s=612x612&w=0&k=20&c=MmNFcZf6z2WLY7jMBAmtLxo6YNItudiRuzn-z7V3tZk="
                            alt=""
                            className="h-full w-full object-cover cursor-pointer"

                        />

                    </div>
                    <div className="cursor-pointer">
                        <h1 className="text-4xl">Aaron</h1>
                        <h1 className="text-2xl">South Africa</h1>
                    </div>
                </div>
                <div className="flex justify-between px-6 h-[10vh] w-full items-center">
                    <h1 className="text-lg text-[#9da3a7]">670 MESSAGES</h1>
                    <div className="flex space-x-7 text-3xl text-[#9da3a7]">
                        <CiSearch />

                        <FaVideo />
                        <TbPinFilled />



                    </div>
                </div>

            </div>
        </>
    )
}
export default UserNavBar;