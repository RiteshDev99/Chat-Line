import { IoSearchOutline } from "react-icons/io5";
import { MdNotificationsActive } from "react-icons/md";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, User } from "firebase/auth"; // Import the User type
import { useState, useEffect } from "react";
import { app } from "../firebase";
import { User as UserIcon } from "lucide-react"; 

const NavBar = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, [auth]);

    const SignupWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user); 
                console.log("User signed in:", result.user);
            })
            .catch((error) => {
                console.error("Error during sign-in:", error);
            });
    };

    const Logout = () => {
        signOut(auth)
            .then(() => {
                setUser(null); 
                console.log("User signed out");
            })
            .catch((error) => {
                console.error("Error during sign-out:", error);
            });
    };

    return (
        <>
            <div className="h-[8vh] w-full bg-[#60a5fa] flex justify-between items-center px-8">
                <div className="h-[8vh] w-[33vw] bg-[#60a5fa] flex items-center px-5 overflow-hidden space-x-2">
                    <IoSearchOutline className="text-3xl text-[#e0f2fe]" />
                    <input
                        type="text"
                        placeholder="Search Here"
                        className="h-[8vh] w-[30vw] bg-[#60a5fa] text-[#e0f2fe] text-xl outline-none placeholder-[#e0f2fe] placeholder-shown:font-extralight placeholder-shown:text-lg cursor-pointer"
                    />
                </div>

                <div className="icons flex space-x-8 items-center">
                    <MdNotificationsActive className="text-[#e0f2fe] text-2xl cursor-pointer" />

                    {user ? (
                        <img
                            src={user.photoURL || '/default-profile.png'} 
                            alt="Profile"
                            className="w-10 h-10 rounded-full cursor-pointer"
                        />
                    ) : (
                        <UserIcon className="text-[#e0f2fe] text-2xl cursor-pointer" />
                    )}

                    {user ? (
                        <button
                            onClick={Logout}
                            className="text-[#e0f2fe] px-5 py-1 bg-[#94a3b8] rounded-lg cursor-pointer"
                        >
                            Logout
                        </button>
                    ) : (
                        <button
                            onClick={SignupWithGoogle}
                            className="text-[#e0f2fe] px-5 py-1 bg-[#94a3b8] rounded-lg cursor-pointer"
                        >
                            Login
                        </button>
                    )}

                    {user && (
                        <h1 className="text-[#e0f2fe] text-xl">
                            {user.displayName || "User"}
                        </h1>
                    )}
                </div>
            </div>
        </>
    );
};

export default NavBar;
