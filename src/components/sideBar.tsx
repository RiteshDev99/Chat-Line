
import { IoSearchOutline } from "react-icons/io5";
import UserProfile from "./userProfile";

const SideBar = () => {
    return (
        <>
            <div className=" main h-screen w-[20vw] bg-[#ecf9ff]  ">
                <div className="upperBox h-[30vh] w-full  drop-shadow-xl bg-[#e3f5ff]">
                    <h1 className="text-3xl pt-16 px-8 text-[#09090b] font-extralight tracking-wider">Chat</h1>
                    <div className="h-[5vh] w-full flex flex-col items-center justify-center">
                        <div className="h-[4vh] w-[15vw] bg-[#94a3b8] flex items-center rounded-md">
                            <input type="text" placeholder="Search.."
                                className="h-[4vh] text-[#09090b] w-[13vw] outline-none cursor-pointer p-3 bg-[#94a3b8] placeholder-[#e0f2fe] rounded-md"
                            />
                            <IoSearchOutline
                                className="m-2 text-xl text-[#e0f2fe]"
                            />
                        </div>

                    </div>
                    <div className=" h-[12vh] w-full flex justify-center items-center space-x-9">
                        <h1 className="text-[#94a3b8] text-lg tracking-wide">120 CHAT</h1>

                        <select name="cars" id="cars"
                            className="p-3 border border-[#94a3b8] outline-none cursor-pointer text-[#94a3b8] rounded-md"
                        >
                            <option value="RESENT">RESENT</option>
                            <option value="CHAT">CHAT</option>

                        </select>



                    </div>
                </div>
                <div className="lower h-[70vh] w-full flex flex-col justify-evenly overflow-y-auto  scroll-smooth border-r-2 ">
                    <UserProfile />
                    <UserProfile />
                    <UserProfile />
                    <UserProfile />
                    <UserProfile />
                    <UserProfile />
                    <UserProfile />
                    <UserProfile />
                    <UserProfile />
                    <UserProfile />
                    <UserProfile />
                    <UserProfile />


                   

                   




                </div>

            </div>

        </>
    )
}

export default SideBar;