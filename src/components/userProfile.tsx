import { NavLink } from "react-router-dom";


const UserProfile = () => {
    return (
        <>

            <div className="flex justify-center space-x-5 border-b p-5 ">
                <NavLink to = "/userChat" className="h-[6vh] w-[6vh] rounded-full bg-center overflow-hidden bg-cover">

                    <img
                        src="https://media.istockphoto.com/id/1082483460/photo/beautiful-black-man.jpg?s=612x612&w=0&k=20&c=MmNFcZf6z2WLY7jMBAmtLxo6YNItudiRuzn-z7V3tZk="
                        alt=""
                        className="h-full w-full object-cover cursor-pointer"

                    />

                </NavLink>
                <div className="cursor-pointer">
                    <h1>Aaron</h1>
                    <h1>Online</h1>
                </div>
                

            </div>



        </>
    )
}
export default UserProfile;